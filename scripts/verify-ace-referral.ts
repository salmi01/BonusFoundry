// Run after npm run build; optionally pass a preview origin to check live responses.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  aceCode,
  aceFaq,
  aceMetadata,
  acePath,
  aceReferralLink,
  aceRewards,
  aceSources
} from "../data/ace-money-transfer";

const decode = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"');
async function main() {
  assert.equal(aceCode, "4262293");
  const link = new URL(aceReferralLink);
  assert.equal(link.origin, "https://acemoneytransfer.eu.go.link");
  assert.equal(link.pathname, "/acemoneytransfer.com/referral-link/");
  assert.deepEqual(
    [...link.searchParams.keys()],
    [
      "referral_code",
      "adj_t",
      "adj_deep_link",
      "adj_fallback",
      "adj_redirect_macos"
    ]
  );
  assert.equal(link.searchParams.get("referral_code"), "4262293");
  assert.equal(link.searchParams.get("adj_t"), "1fbed427");
  for (const [key, path] of [
    ["adj_deep_link", "referral-link"],
    ["adj_fallback", "sign-up"],
    ["adj_redirect_macos", "sign-up"]
  ]) {
    assert.equal(
      link.searchParams.get(key),
      `https://acemoneytransfer.com/${path}?referral_code=4262293`
    );
  }
  assert.deepEqual(aceRewards.slice(0, 2), [
    { currency: "EUR", minimum: "€100", reward: "€10" },
    { currency: "GBP", minimum: "£100", reward: "£10" }
  ]);
  assert.equal(aceRewards.length, 11);

  const html = await readFile(`.next/server/app${acePath}.html`, "utf8");
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(visible, /<html[^>]*lang="en"/);
  assert.match(visible, /<h1[^>]*>ACE Money Transfer Referral Code/);
  assert.match(visible, /€10 Wallet Credit Bonus/);
  assert.match(visible, /€100/);
  assert.match(visible, /£100/);
  assert.match(visible, /£10/);
  assert.match(decode(visible), /no reward for the invited friend/);
  assert.match(
    visible,
    /Referral disclosure: BonusFoundry may receive a referral reward/
  );
  assert.match(visible, /cannot be withdrawn as cash/);
  assert.match(visible, /Copy code: 4262293/);
  assert.match(visible, /role="status"/);
  const anchors = [...visible.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)].map(
    (match) => ({ href: decode(match[1]), tag: match[0] })
  );
  const invitations = anchors.filter(
    (anchor) => anchor.href === aceReferralLink
  );
  assert.equal(
    invitations.length,
    2,
    "Both visible CTAs retain the full exact invitation URL"
  );
  invitations.forEach((anchor) =>
    assert.match(anchor.tag, /rel="nofollow sponsored"/)
  );
  assert(anchors.some((anchor) => anchor.href === aceSources.terms));
  assert(anchors.some((anchor) => anchor.href === aceSources.guide));
  assert.match(
    visible,
    /<title>ACE Money Transfer Referral Code 4262293 \| €10 Bonus<\/title>/
  );
  assert(
    visible.includes(`name="description" content="${aceMetadata.description}"`)
  );
  const canonical = `https://bonusfoundry.com${acePath}`;
  assert(visible.includes(`rel="canonical" href="${canonical}"`));
  assert(visible.includes(`property="og:url" content="${canonical}"`));
  assert(
    !visible.includes(aceReferralLink),
    "Long referral URL must be HTML escaped, not pasted into visible text"
  );
  const schemas = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
    )
  ].map((match) => JSON.parse(match[1]));
  const webpage = schemas.find((schema) => schema["@type"] === "WebPage");
  assert.equal(webpage.url, canonical);
  assert.equal(webpage.inLanguage, "en");
  assert.equal(webpage.about.name, "ACE Money Transfer");
  assert.equal(webpage.isPartOf["@id"], "https://bonusfoundry.com/#website");
  assert.equal(webpage.dateModified, "2026-10-18");
  const breadcrumb = schemas.find(
    (schema) => schema["@type"] === "BreadcrumbList"
  );
  assert.equal(breadcrumb.itemListElement.length, 4);
  assert.equal(
    breadcrumb.itemListElement[1].item,
    "https://bonusfoundry.com/providers"
  );
  const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, 10);
  aceFaq.forEach((item, index) => {
    assert(visible.includes(`id="${item.id}"`));
    assert(anchors.some((anchor) => anchor.href === `#${item.id}`));
    assert.equal(faq.mainEntity[index].acceptedAnswer.text, item.answer);
    assert(
      decode(visible).includes(item.answer),
      `Visible FAQ agrees with schema: ${item.id}`
    );
  });
  const directory = await readFile(".next/server/app/providers.html", "utf8");
  assert(directory.includes(`href="${acePath}"`));
  const overview = await readFile(
    ".next/server/app/providers/ace-money-transfer.html",
    "utf8"
  );
  assert(overview.includes(`href="${acePath}"`));
  const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
  assert(sitemap.includes(`<loc>${canonical}</loc>`));
  assert(
    !/AggregateRating|ratingValue|priceValidUntil/.test(JSON.stringify(schemas))
  );
  const origin = process.argv[2];
  if (origin) {
    for (const path of [
      acePath,
      "/providers/ace-money-transfer",
      "/providers",
      "/sitemap.xml",
      "/brand/bonusfoundry-og.png"
    ]) {
      const response = await fetch(new URL(path, origin));
      assert.equal(response.status, 200, `${path}: expected HTTP 200`);
      await response.arrayBuffer();
    }
    const assets = new Set(
      [
        ...html.matchAll(
          /<(?:script|link)\b[^>]*(?:src|href)="([^\"]+)"[^>]*>/g
        )
      ]
        .map((match) => decode(match[1]))
        .filter(
          (href) =>
            href.startsWith("/_next/") && /\.(?:css|js)(?:\?|$)/.test(href)
        )
    );
    assert(
      assets.size > 0,
      "ACE page must reference production CSS and JavaScript"
    );
    for (const asset of assets) {
      const response = await fetch(new URL(asset, origin));
      assert.equal(response.status, 200, `ACE asset unavailable: ${asset}`);
      await response.arrayBuffer();
    }
    for (const href of new Set(
      anchors
        .map((anchor) => anchor.href)
        .filter((href) => href.startsWith("/") && !href.startsWith("/_next/"))
    )) {
      const response = await fetch(new URL(href, origin));
      assert.equal(
        response.status,
        200,
        `ACE internal link unavailable: ${href}`
      );
      await response.arrayBuffer();
    }
    console.log(
      `ACE preview: page, overview, directory, sitemap, OG image, ${assets.size} assets and all internal destinations returned HTTP 200.`
    );
  }
  console.log(
    "ACE checks passed: referral parameters, EUR/GBP offers, both CTAs, Nigeria exclusion, disclosure, visible FAQ/schema agreement, metadata, index links and sitemap."
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
