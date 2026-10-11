import assert from "node:assert/strict";
import {
  bnpCampaign,
  bnpPageCopy,
  bnpReferralPath,
  bnpReferralUrl,
  isBnpCampaignActive
} from "../data/bnp-paribas-referral";

const origin = process.argv[2] || "http://localhost:3100";
const expired = process.argv.includes("--expired");
const decode = (value: string) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"');

async function main() {
  assert.equal(isBnpCampaignActive(new Date("2026-10-29T13:59:59.999Z")), true);
  assert.equal(isBnpCampaignActive(new Date("2026-10-29T14:00:00Z")), false);
  assert.equal(isBnpCampaignActive(new Date("2027-01-01T00:00:00Z")), false);
  assert.equal(
    bnpCampaign.openingAmount + bnpCampaign.mobilityAmount,
    bnpCampaign.totalAmount
  );

  const response = await fetch(new URL(bnpReferralPath, origin), {
    headers: { "User-Agent": "Googlebot" }
  });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html[^>]*lang="fr"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.equal([...html.matchAll(/<h2\b/g)].length, 9);
  assert.equal([...html.matchAll(/<h3\b/g)].length, 10);
  assert.equal(
    decode(html.match(/<title>(.*?)<\/title>/)?.[1] || ""),
    bnpPageCopy(!expired).title
  );
  assert.match(html, /name="robots" content="index, follow"/);
  assert(
    html.includes(
      `rel="canonical" href="https://bonusfoundry.com${bnpReferralPath}"`
    )
  );
  assert(
    html.includes(
      `name="description" content="${bnpPageCopy(!expired).description.replaceAll("'", "&#x27;")}"`
    ) ||
      decode(html).includes(
        `name="description" content="${bnpPageCopy(!expired).description}"`
      )
  );
  assert.match(html, /property="og:locale" content="fr_FR"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/bonusfoundry.com\/brand\/bonusfoundry-og.png"/
  );

  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  for (const text of [
    "France métropolitaine",
    "Monaco",
    "Esprit Libre",
    "Visa Origin",
    "10 opérations",
    "15 jours",
    "29 janvier 2027",
    "14 jours",
    "Sources officielles",
    "Divergence documentaire"
  ])
    assert(body.includes(text), `Missing rendered condition: ${text}`);
  const referrals = [...body.matchAll(/<a\b([^>]+)>/g)].filter((match) =>
    decode(match[1]).includes(bnpReferralUrl)
  );
  assert.equal(referrals.length, expired ? 0 : 2);
  for (const match of referrals)
    assert.match(match[1], /rel="sponsored noopener noreferrer"/);
  assert(body.includes("BonusFoundry peut percevoir une récompense"));
  if (expired) {
    assert(body.includes("Nous vérifions les nouvelles conditions"));
    assert(body.includes("Vérifier les offres actuelles"));
    assert(!html.includes(new URL(bnpReferralUrl).searchParams.get("token")!));
    assert(!bnpPageCopy(false).description.includes("160"));
  }
  const schemas = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
    )
  ].map((match) => JSON.parse(match[1]));
  assert(
    !JSON.stringify(schemas).includes(
      new URL(bnpReferralUrl).searchParams.get("token")!
    )
  );
  assert(
    !schemas.some((schema) =>
      ["FAQPage", "Offer", "Review", "AggregateRating"].includes(
        schema["@type"]
      )
    )
  );
  const webpage = schemas.find((schema) => schema["@type"] === "WebPage");
  assert.equal(webpage.inLanguage, "fr-FR");
  assert.equal(webpage.dateModified, bnpCampaign.contentModifiedAt);
  assert.equal(webpage.name, bnpPageCopy(!expired).title);
  const breadcrumb = schemas.find(
    (schema) => schema["@type"] === "BreadcrumbList"
  );
  assert.deepEqual(
    breadcrumb.itemListElement.map((item: { name: string }) => item.name),
    ["Accueil", "Parrainage BNP Paribas"]
  );

  const sitemap = await (await fetch(new URL("/sitemap.xml", origin))).text();
  assert(sitemap.includes(`https://bonusfoundry.com${bnpReferralPath}`));
  assert.match(
    sitemap,
    new RegExp(
      `${bnpReferralPath}</loc>\\s*<lastmod>${bnpCampaign.contentModifiedAt}`
    )
  );
  const internal = new Set(
    [...body.matchAll(/href="(\/[^"#]*)"/g)].map((match) => decode(match[1]))
  );
  internal.add("/disclosure");
  for (const path of internal)
    assert.equal(
      (await fetch(new URL(path, origin))).status,
      200,
      `Broken internal link: ${path}`
    );
  const english = await (await fetch(new URL("/providers", origin))).text();
  assert.match(english, /<html[^>]*lang="en"/);
  const missing = await fetch(new URL("/bnp-qa-missing-route", origin));
  assert.equal(missing.status, 404);
  assert(
    (await missing.text()).includes("Page not found"),
    "Existing branded 404 must be preserved"
  );
  const entry = await (await fetch(new URL("/disclosure", origin))).text();
  assert(entry.includes(`href="${bnpReferralPath}"`));
  console.log(
    `BNP ${expired ? "expired" : "active"}: SSR, language, headings, conditions, CTA, metadata, JSON-LD, sitemap, links and exact expiration boundary passed.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
