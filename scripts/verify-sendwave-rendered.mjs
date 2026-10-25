// Capture before editing: node scripts/verify-sendwave-rendered.mjs http://localhost:3000 --baseline
// Verify after editing/build: node scripts/verify-sendwave-rendered.mjs http://localhost:3000
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { createHash } from "node:crypto";

const origin = process.argv[2] || "http://localhost:3000";
const dir = ".next-dev/sendwave-audit";
const route = "/providers/sendwave/referral-code";
const canonical = `https://bonusfoundry.com${route}`;
await fs.mkdir(dir, { recursive: true });
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<!--.*?-->/gs, "");
const plain = (s) =>
  decode(
    s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
const schemas = (s) =>
  [
    ...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  ].map((m) => JSON.parse(m[1]));
// Dev streaming can leave an empty React boundary marker after main content.
// It has no user content; compare all remaining markup, metadata and schemas.
const normalizeMain = (s) =>
  s.replace(/<template id="B:\d+"><\/template>/g, "");
async function get(path) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, `HTTP ${response.status}: ${path}`);
  assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""));
  return response.text();
}
function snapshot(html) {
  const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1];
  assert(main, "Missing server-rendered main");
  return {
    main: normalizeMain(decode(main)),
    title: decode(html.match(/<title>(.*?)<\/title>/)?.[1] || ""),
    metadata: [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)]
      .map((m) => decode(m[0]))
      .filter(
        (m) => !m.includes('rel="preload"') && !m.includes('rel="stylesheet"')
      ),
    schemas: schemas(html)
  };
}
const protectedRoutes = [
  "ria",
  "taptap-send",
  "paysend",
  "transfergo",
  "ace-money-transfer",
  "lemfi",
  "wise",
  "remitly",
  "western-union",
  "moneygram",
  "worldremit",
  "xe"
].map((s) => `/providers/${s}/referral-code`);
protectedRoutes.push("/providers/sendwave");
const html = await get(route);
const current = snapshot(html);
if (process.argv.includes("--baseline")) {
  const pages = {};
  for (const path of protectedRoutes) pages[path] = snapshot(await get(path));
  await fs.writeFile(
    `${dir}/baseline.json`,
    JSON.stringify({ sendwave: current, pages }, null, 2)
  );
  await fs.writeFile(`${dir}/sendwave-before.html`, html);
  console.log(
    `Baseline saved: Sendwave + ${protectedRoutes.length} unaffected pages.`
  );
  process.exit(0);
}
const baseline = JSON.parse(await fs.readFile(`${dir}/baseline.json`, "utf8"));
const regressions = [];
for (const path of protectedRoutes) {
  const after = snapshot(await get(path));
  baseline.pages[path].main = normalizeMain(baseline.pages[path].main);
  assert.deepEqual(
    after,
    baseline.pages[path],
    `Unrelated page changed: ${path}`
  );
  regressions.push({
    path,
    unchanged: true,
    sha256: createHash("sha256").update(JSON.stringify(after)).digest("hex")
  });
}
const mainText = plain(current.main);
assert.equal((current.main.match(/<h1\b/g) || []).length, 1);
assert.equal(
  current.title,
  "Sendwave Referral Code I4H9G: €20 Credit & Eligibility | BonusFoundry"
);
assert(html.includes(`<link rel="canonical" href="${canonical}"`));
assert(!/<meta name="robots"[^>]*noindex/i.test(html));
for (const value of [
  "Quick answer",
  "France-registered account",
  "October 25, 2026",
  "not independently tested",
  "For the referred friend",
  "For the referrer",
  "Eligible sending countries",
  "Eligible destinations",
  "Reward type",
  "Official sources",
  "Problem",
  "Possible reason",
  "Suggested action",
  "Sources and verification methodology",
  "Copy Sendwave code: I4H9G",
  "BonusFoundry is independent of Sendwave"
])
  assert(mainText.includes(value), `Missing visible fact: ${value}`);
assert(!/guaranteed|€10|\$10|within \d+ (?:hours|days)/i.test(mainText));
for (const name of ["description", "og:description", "twitter:description"]) {
  const tag = current.metadata.find((m) => m.includes(`="${name}"`));
  assert(
    tag?.includes("App screenshot reviewed October 25, 2026"),
    `Missing evidence scope: ${name}`
  );
}
assert(mainText.includes("App screenshot reviewed October 25, 2026"));
assert(
  mainText.includes(
    "Code and both €20 rewards are visible in the supplied screenshot."
  )
);
assert(
  mainText.includes("The screenshot itself does not display a country") ||
    mainText.includes("the screenshot itself does not display a country")
);
assert(
  !/no fresh app check|not a new app verification|original screenshot is not available|October 5, 2026/.test(
    mainText
  )
);
const webpage = current.schemas.filter((s) => s["@type"] === "WebPage");
assert.equal(webpage.length, 1);
assert.equal(webpage[0].url, canonical);
assert.equal(webpage[0].dateModified, "2026-10-25");
assert.equal(webpage[0].about.name, "Sendwave");
assert.equal(
  webpage[0].publisher["@id"],
  "https://bonusfoundry.com/#organization"
);
assert.equal(
  current.schemas.filter((s) => s["@type"] === "BreadcrumbList").length,
  1
);
assert(
  !current.schemas.some((s) =>
    ["FAQPage", "Article", "Product", "Offer", "AggregateRating"].includes(
      s["@type"]
    )
  )
);
assert.equal(
  current.schemas
    .find((s) => s["@type"] === "BreadcrumbList")
    .itemListElement.at(-1).item,
  canonical
);
const faq = current.main.match(
  /<section[^>]*id="sendwave-faq"[\s\S]*?<\/section>/
)?.[0];
assert(faq);
assert.equal((faq.match(/<h3\b/g) || []).length, 10);
const internalLinks = [
  ...new Set(
    [...html.matchAll(/href="(\/[^"#]*)"/g)]
      .map((m) => decode(m[1]))
      .filter((p) => !p.startsWith("/_next/"))
  )
];
for (const path of internalLinks) await get(path);
const resources = [
  ...new Set(
    [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+)[^"]*"/g)].map(
      (m) => m[1]
    )
  )
];
for (const resource of resources) await get(resource);
const sitemap = await get("/sitemap.xml");
const sitemapEntry = (url) =>
  [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((m) =>
    m[1].includes(`<loc>${url}</loc>`)
  )?.[1];
assert(sitemapEntry(canonical)?.includes("<lastmod>2026-10-25</lastmod>"));
for (const path of protectedRoutes) {
  const page = baseline.pages[path].schemas.find(
    (s) => s["@type"] === "WebPage"
  );
  assert(
    sitemapEntry(`https://bonusfoundry.com${path}`)?.includes(
      page.dateModified
    ),
    `Sitemap date changed: ${path}`
  );
}
assert((await get("/robots.txt")).includes("Allow: /"));
await fs.writeFile(`${dir}/sendwave-after.html`, html);
const report = {
  result: "PASS",
  title: current.title,
  descriptionLength: current.metadata
    .find((m) => m.includes('name="description"'))
    ?.match(/content="([^"]*)"/)?.[1].length,
  before: {
    words: plain(baseline.sendwave.main).split(" ").length,
    faq:
      baseline.sendwave.schemas.find((s) => s["@type"] === "FAQPage")
        ?.mainEntity.length ??
      (
        baseline.sendwave.main
          .match(/<section[^>]*id="sendwave-faq"[\s\S]*?<\/section>/)?.[0]
          .match(/<h3\b/g) || []
      ).length
  },
  after: { words: mainText.split(" ").length, faq: 10 },
  internalLinks: internalLinks.length,
  resources: resources.length,
  regressions
};
await fs.writeFile(`${dir}/verification.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
