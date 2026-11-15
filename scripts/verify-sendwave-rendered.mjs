// Capture before editing: node scripts/verify-sendwave-rendered.mjs http://localhost:3103 --baseline
// Verify the production refresh: node scripts/verify-sendwave-rendered.mjs http://localhost:3103
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

const origin = process.argv[2] || "http://localhost:3103";
const dir = ".next-dev/sendwave-nov15";
const targets = ["/providers/sendwave", "/providers/sendwave/referral-code"];
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
].flatMap((s) => [`/providers/${s}`, `/providers/${s}/referral-code`]);
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
const main = (s) =>
  decode(s.match(/<main>([\s\S]*?)<\/main>/)?.[1] || "").replace(
    /<template id="B:\d+"><\/template>/g,
    ""
  );
const schemas = (s) =>
  [
    ...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  ].map((m) => JSON.parse(m[1]));
const metadata = (s) =>
  [...s.matchAll(/<(?:meta|link)\b[^>]*>/g)]
    .map((m) => decode(m[0]))
    .filter((m) => !/rel="(?:preload|stylesheet)"/.test(m));
const title = (s) => decode(s.match(/<title>(.*?)<\/title>/)?.[1] || "");
const description = (s) =>
  decode(s.match(/<meta name="description" content="([^"]*)"/)?.[1] || "");
const hrefs = (s) => [
  ...new Set([...s.matchAll(/href="([^"]+)"/g)].map((m) => decode(m[1])))
];
const headings = (s) =>
  [...s.matchAll(/<h([123])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    text: plain(m[2])
  }));
async function get(path) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `HTTP ${response.status}: ${path}`);
  assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), path);
  return response;
}
await fs.mkdir(dir, { recursive: true });
if (process.argv.includes("--baseline")) {
  const baseline = {};
  for (const path of [...targets, ...protectedRoutes])
    baseline[path] = await (await get(path)).text();
  await fs.writeFile(`${dir}/baseline-html.json`, JSON.stringify(baseline));
  console.log("Captured both Sendwave pages and 24 protected provider pages.");
  process.exit(0);
}
const baseline = JSON.parse(
  await fs.readFile(`${dir}/baseline-html.json`, "utf8")
);
const after = {};
for (const path of protectedRoutes) {
  const html = await (await get(path)).text();
  assert.equal(
    main(html),
    main(baseline[path]),
    `Unrelated content changed: ${path}`
  );
  assert.equal(
    title(html),
    title(baseline[path]),
    `Unrelated title changed: ${path}`
  );
  assert.deepEqual(
    metadata(html),
    metadata(baseline[path]),
    `Unrelated metadata changed: ${path}`
  );
  assert.deepEqual(
    schemas(html),
    schemas(baseline[path]),
    `Unrelated structured data changed: ${path}`
  );
}
const internalLinks = new Set();
const resources = new Set();
const report = {
  result: "PASS",
  protectedPages: protectedRoutes.length,
  pages: {}
};
for (const path of targets) {
  const html = await (await get(path)).text();
  after[path] = html;
  const content = main(html);
  const text = plain(content);
  assert(content, "Missing server-rendered content");
  assert.equal(headings(content).filter((h) => h.level === 1).length, 1, path);
  assert(
    html.includes(
      `<link rel="canonical" href="https://bonusfoundry.com${path}"`
    ),
    "Self canonical"
  );
  assert(!/<meta name="robots"[^>]*noindex/i.test(html));
  assert(text.includes("BonusFoundry Editorial Team"), "Attribution preserved");
  assert.match(text, /Last verified[\s\S]*?November 15, 2026/);
  assert.match(text, /Last content update: November 15, 2026/);
  assert.match(text, /France\/EUR/);
  assert.match(text, /\u20ac50 or more/);
  assert.match(text, /not (?:a )?universal/);
  for (const oldLink of hrefs(main(baseline[path])))
    assert(
      hrefs(content).includes(oldLink),
      `Valuable link removed: ${oldLink}`
    );
  for (const link of hrefs(html))
    if (link.startsWith("/") && !link.startsWith("/_next/"))
      internalLinks.add(link.split("#")[0]);
  for (const m of html.matchAll(
    /(?:src|href)="(\/_next\/static\/[^"?]+)[^"]*"/g
  ))
    resources.add(m[1]);
  for (const source of [
    "https://www.sendwave.com/en/terms-and-conditions/referral-program",
    "https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion"
  ])
    assert(hrefs(content).includes(source), source);
  const schema = schemas(html);
  const webpage = schema.filter((s) => s["@type"] === "WebPage");
  assert.equal(webpage.length, 1);
  assert.equal(webpage[0].url, `https://bonusfoundry.com${path}`);
  assert.equal(webpage[0].dateModified, "2026-11-15");
  assert(
    !schema.some((s) =>
      ["Review", "AggregateRating", "Offer", "Product", "Article"].includes(
        s["@type"]
      )
    )
  );
  const breadcrumb = schema.find((s) => s["@type"] === "BreadcrumbList");
  assert.equal(
    breadcrumb.itemListElement.at(-1).item,
    `https://bonusfoundry.com${path}`
  );
  assert(
    !schema.some(
      (s) =>
        s.datePublished &&
        !schemas(baseline[path]).some(
          (old) => old.datePublished === s.datePublished
        )
    ),
    "Invented publication date"
  );
  if (path.endsWith("referral-code")) {
    assert.equal(
      title(html),
      "Sendwave Referral Code I4H9G: \u20ac20 EUR Offer | BonusFoundry"
    );
    assert.match(
      description(html),
      /France\/EUR account offer with a \u20ac50\+ first transfer/
    );
    assert(hrefs(content).includes("/providers/sendwave"));
    assert.equal(
      (content.match(/<figure\b/g) || []).length,
      1,
      "Only one full screenshot"
    );
    const figure = content.match(/<figure\b[^>]*>[\s\S]*?<\/figure>/)?.[0];
    assert(figure?.includes("offer-details-2026-10-24.jpg"));
    assert.match(figure, /loading="lazy"/);
    assert.match(figure, /width="872"/);
    assert.match(figure, /height="1536"/);
    assert.match(figure, /max-w-\[330px\]/);
    assert.match(figure, /h-auto w-full/);
    assert.match(
      plain(figure),
      /Offer displayed in a EUR-denominated Sendwave account, screenshot dated November 15, 2026; availability and conditions may vary/
    );
    const sourceSection = content.match(
      /<section\b[^>]*id="sendwave-sources"[\s\S]*?<\/section>/
    )?.[0];
    assert(
      sourceSection?.includes(figure),
      "Screenshot in existing evidence section"
    );
    const optimizedImage = decode(figure.match(/\bsrc="([^"]+)"/)[1]);
    assert.match(
      (await get(optimizedImage)).headers.get("content-type"),
      /image\//
    );
    assert(
      hrefs(content).includes(
        "/images/providers/sendwave/referral-code-2026-11-04.jpg"
      )
    );
    assert(text.includes("not independently tested"));
    assert(!/October 25|October 5, 2026/.test(text));
    assert(!schema.some((s) => s["@type"] === "FAQPage"));
    assert.match(text, /Copy Sendwave code: I4H9G/);
    assert.match(text, /separate[\s\S]*promo-code promotion terms/i);
    const faq = content.match(
      /<section[^>]*id="sendwave-faq"[\s\S]*?<\/section>/
    )?.[0];
    assert.equal(headings(faq).filter((h) => h.level === 3).length, 10);
  } else {
    assert.equal(
      title(html),
      "Sendwave: Transfers, Eligibility & Referral Rules | BonusFoundry"
    );
    assert(!/I4H9G|\u20ac20/.test(description(html)));
    assert(hrefs(content).includes("/providers/sendwave/referral-code"));
    assert.equal(
      (content.match(/<figure\b/g) || []).length,
      0,
      "No redundant screenshot on overview"
    );
    assert.equal(
      breadcrumb.itemListElement[1].item,
      "https://bonusfoundry.com/providers"
    );
    const faq = schema.find((s) => s["@type"] === "FAQPage");
    assert.equal(faq.mainEntity.length, 4);
    for (const question of faq.mainEntity) {
      assert(text.includes(question.name));
      assert(text.includes(question.acceptedAnswer.text));
    }
    const history = content.match(
      /<section\b[^>]*>\s*<h2\b[^>]*>Update history<\/h2>[\s\S]*?<\/section>/
    )?.[0];
    const oldHistory = main(baseline[path]).match(
      /<section\b[^>]*>\s*<h2\b[^>]*>Update history<\/h2>[\s\S]*?<\/section>/
    )?.[0];
    for (const row of oldHistory.match(/<tr\b[\s\S]*?<\/tr>/g))
      assert(history.includes(row), "Historical entry changed");
    assert(
      !/\u20ac10|\$10/.test(plain(content.replace(history, ""))),
      "Current outdated Sendwave reward"
    );
  }
  report.pages[path] = {
    before: {
      title: title(baseline[path]),
      description: description(baseline[path]),
      headings: headings(main(baseline[path]))
    },
    after: {
      title: title(html),
      description: description(html),
      headings: headings(content)
    },
    internalLinks: hrefs(content).filter((h) => h.startsWith("/")),
    schemas: schema.map((s) => s["@type"])
  };
  await fs.writeFile(`${dir}/after-${path.split("/").at(-1)}.html`, html);
}
assert.notEqual(title(after[targets[0]]), title(after[targets[1]]));
assert.notEqual(description(after[targets[0]]), description(after[targets[1]]));
const overviewFaq = schemas(after[targets[0]])
  .find((s) => s["@type"] === "FAQPage")
  .mainEntity.map((q) => q.name);
const referralQuestions = headings(main(after[targets[1]]))
  .filter((h) => h.level === 3)
  .map((h) => h.text);
assert(
  !overviewFaq.some((q) => referralQuestions.includes(q)),
  "Overlapping FAQ questions"
);
for (const link of internalLinks) if (link) await get(link);
for (const resource of resources) await get(resource);
for (const [name, width] of [
  ["offer-details-2026-10-24.jpg", 872],
  ["referral-code-2026-11-04.jpg", 1308]
]) {
  const assetPath = "/images/providers/sendwave/" + name;
  const response = await get(assetPath);
  assert.match(response.headers.get("content-type"), /image\/jpeg/);
  const bytes = Buffer.from(await response.arrayBuffer());
  const localBytes = await fs.readFile("public" + assetPath);
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    createHash("sha256").update(localBytes).digest("hex")
  );
  const meta = await sharp(bytes).metadata();
  assert.equal(meta.width, width);
  assert.equal(meta.height, 1536);
}
const sitemap = await (await get("/sitemap.xml")).text();
for (const path of [...targets, ...protectedRoutes]) {
  const entry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((m) =>
    m[1].includes(`<loc>https://bonusfoundry.com${path}</loc>`)
  )?.[1];
  const modified = targets.includes(path)
    ? "2026-11-15"
    : schemas(baseline[path]).find((s) => s["@type"] === "WebPage")
        ?.dateModified;
  assert(entry, "Sitemap entry missing: " + path);
  if (modified) assert(entry.includes(modified), "Sitemap date: " + path);
}
assert((await (await get("/robots.txt")).text()).includes("Allow: /"));
report.internalLinksChecked = internalLinks.size;
report.resourcesChecked = resources.size;
await fs.writeFile(`${dir}/verification.json`, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify(
    {
      result: report.result,
      protectedPages: report.protectedPages,
      internalLinksChecked: report.internalLinksChecked,
      resourcesChecked: report.resourcesChecked,
      beforeAfter: Object.fromEntries(
        Object.entries(report.pages).map(([path, data]) => [
          path,
          {
            before: {
              title: data.before.title,
              description: data.before.description
            },
            after: {
              title: data.after.title,
              description: data.after.description
            }
          }
        ])
      )
    },
    null,
    2
  )
);
