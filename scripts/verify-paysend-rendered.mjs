// node scripts/verify-paysend-rendered.mjs [origin] [Chrome debug port]
// Requires a running production server and headless Chrome, as the existing
// Taptap rendered verifier does. Baseline comparison runs when artifacts exist.
import assert from "node:assert/strict";
import fs from "node:fs/promises";

const origin = process.argv[2] || "http://localhost:3103";
const port = process.argv[3] || "9227";
const path = "/providers/paysend/referral-code";
const canonical = `https://bonusfoundry.com${path}`;
const referral = "https://paysend.com/en/referral/06mvt6";
const dir = ".next-dev/paysend-audit";
await fs.mkdir(dir, { recursive: true });
const response = await fetch(origin + path);
assert.equal(response.status, 200);
assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""));
const html = await response.text();
await fs.writeFile(`${dir}/paysend-final.html`, html);
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<!--.*?-->/gs, "");
const text = (s) =>
  decode(s.replace(/<script\b[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1];
assert(main, "Missing crawlable main content");
const plain = text(main);
await fs.writeFile(`${dir}/paysend-final.txt`, plain);
for (const expected of [
  "Paysend bonus and referral link: how it works",
  "fee-free first transfer",
  "before registration",
  "vary by registration country",
  "first 12 qualifying transfers",
  "first 12 months",
  "Add a code",
  "cannot be applied retroactively",
  "October 3, 2026",
  "Expired: summer 2026",
  "Expired: September 2026",
  "title metadata",
  "bonus withdrawals",
  "card-verification microcharges"
])
  assert(plain.includes(expected), `Missing crawlable answer: ${expected}`);
assert(!/second account|opening a second account|re-register/i.test(plain));
assert.equal((main.match(/<h1\b/g) || []).length, 1);

const jsonLd = (h) =>
  [
    ...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  ].map((m) => JSON.parse(m[1]));
const schemas = jsonLd(html);
assert(
  !schemas.some((s) =>
    ["Offer", "Review", "AggregateRating", "QAPage", "Article"].includes(
      s["@type"]
    )
  )
);
const page = schemas.find((s) => s["@type"] === "WebPage");
assert.equal(page.url, canonical);
assert.equal(page.dateModified, "2026-10-03");
const crumbs = schemas.find((s) => s["@type"] === "BreadcrumbList");
assert.deepEqual(
  crumbs.itemListElement.map((x) => x.item),
  [
    "https://bonusfoundry.com/",
    "https://bonusfoundry.com/providers/paysend",
    canonical
  ]
);
const faq = schemas.find((s) => s["@type"] === "FAQPage");
assert.equal(faq.mainEntity.length, 10);
for (const q of faq.mainEntity) {
  assert(plain.includes(q.name), `FAQ question not visible: ${q.name}`);
  assert(
    plain.includes(q.acceptedAnswer.text),
    `FAQ answer not visible: ${q.name}`
  );
  if (/\$5|\$100|\$6|\$72/.test(q.acceptedAnswer.text))
    assert(/expired/.test(q.acceptedAnswer.text));
}
const robotsResponse = await fetch(origin + "/robots.txt");
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert(/User-Agent: \*/i.test(robots) && /Allow: \/(?:\r?\n|$)/i.test(robots));
assert(!/Disallow:\s*\/(?:\r?\n|$)/i.test(robots));
const sitemapResponse = await fetch(origin + "/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const targetEntry = sitemap.match(
  new RegExp(`<url>\\s*<loc>${canonical}</loc>[\\s\\S]*?</url>`)
)?.[0];
assert(targetEntry?.includes("2026-10-03"), "Target sitemap freshness missing");
const oldSitemap = await fs
  .readFile(`${dir}/sitemap-before.xml`, "utf8")
  .catch(() => null);
if (oldSitemap) {
  const withoutPaysendReferral = (xml) =>
    xml.replace(
      new RegExp(`<url>\\s*<loc>${canonical}</loc>[\\s\\S]*?</url>`),
      ""
    );
  assert.equal(
    withoutPaysendReferral(sitemap),
    withoutPaysendReferral(oldSitemap),
    "Unrelated sitemap entry changed"
  );
}

// Local links, CSS and scripts are requested rather than inferred from filenames.
const localLinks = new Set(
  [...main.matchAll(/href="(\/[^"#]*)"/g)].map((m) => decode(m[1]))
);
for (const href of localLinks) {
  const r = await fetch(origin + href);
  assert.equal(r.status, 200, `Broken internal link: ${href}`);
}
const assets = [
  ...html.matchAll(/(?:src|href)="(\/_next\/[^" ]+\.(?:css|js)(?:\?[^" ]*)?)"/g)
].map((m) => decode(m[1]));
assert(assets.some((a) => a.includes(".css")));
for (const asset of new Set(assets))
  assert.equal(
    (await fetch(origin + asset)).status,
    200,
    `Missing asset: ${asset}`
  );

const targets = await fetch(`http://localhost:${port}/json`).then((r) =>
  r.json()
);
const target = targets.find((t) => t.type === "page");
assert(target, "Chrome page target missing");
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
let sequence = 0;
const pending = new Map();
const errors = [];
ws.onmessage = ({ data }) => {
  const m = JSON.parse(data);
  if (m.id) {
    const job = pending.get(m.id);
    if (!job) return;
    pending.delete(m.id);
    clearTimeout(job.timer);
    if (m.error) job.reject(new Error(JSON.stringify(m.error)));
    else job.resolve(m.result);
  } else if (m.method === "Runtime.exceptionThrown")
    errors.push(m.params.exceptionDetails);
};
function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout: ${method}`));
    }, 15000);
    pending.set(id, { resolve, reject, timer });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const r = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  assert(!r.exceptionDetails, JSON.stringify(r.exceptionDetails));
  return r.result.value;
}
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const findings = [];
try {
  await send("Page.enable");
  await send("Runtime.enable");
  for (const width of [320, 390, 768, 1440]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    await send("Page.navigate", { url: origin + path });
    let ready = false;
    for (let i = 0; i < 100; i++) {
      ready = await evaluate(
        `location.pathname === ${JSON.stringify(path)} && document.readyState === 'complete'`
      );
      if (ready) break;
      await pause(100);
    }
    assert(ready, "Page did not load");
    await evaluate("document.fonts.ready.then(() => true)");
    await evaluate("document.documentElement.style.scrollBehavior = 'auto'");
    await pause(300);
    const result = await evaluate(`(() => {
      const main = document.querySelector('main');
      const cta = main.querySelector('a[href="${referral}"]');
      const faqSchema = [...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent)).find(s=>s['@type']==='FAQPage');
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]').content,
        canonical: document.querySelector('link[rel="canonical"]').href,
        ogTitle: document.querySelector('meta[property="og:title"]').content,
        ogDescription: document.querySelector('meta[property="og:description"]').content,
        ogUrl: document.querySelector('meta[property="og:url"]').content,
        ogType: document.querySelector('meta[property="og:type"]').content,
        robots: document.querySelector('meta[name="robots"]')?.content || '',
        overflow: document.documentElement.scrollWidth > innerWidth,
        headings: [...main.querySelectorAll('h1,h2,h3,h4')].map(x=>({level:+x.tagName[1], text:x.textContent})),
        cta: {text:cta.textContent, rel:cta.rel, href:cta.href, width:cta.getBoundingClientRect().width, height:cta.getBoundingClientRect().height},
        emptyLinks: [...main.querySelectorAll('a')].filter(a=>!a.textContent.trim() && !a.getAttribute('aria-label')).length,
        invisibleFaq: faqSchema.mainEntity.filter(q=>{const h=[...main.querySelectorAll('h3')].find(x=>x.textContent===q.name);return !h || h.nextElementSibling?.textContent!==q.acceptedAnswer.text || !h.getClientRects().length;}).length,
        hiddenSections: [...main.querySelectorAll('section')].filter(x=>getComputedStyle(x).display==='none' || getComputedStyle(x).visibility==='hidden').length,
        oldMoneyOutsideHistory: [...main.querySelectorAll('p,li,h1,h2,h3')].filter(x=> /\\$5|\\$100|\\$6|\\$72|second transfer/i.test(x.textContent) && !x.closest('#expired-promotions') && !x.closest('section')?.textContent.includes('Paysend referral FAQ')).map(x=>x.textContent)
      };
    })()`);
    assert.equal(
      result.title,
      "Paysend Bonus & Referral Link: Fee-Free First Transfer | BonusFoundry"
    );
    assert.equal(result.canonical, canonical);
    assert.equal(result.ogUrl, canonical);
    assert.equal(result.ogType, "website");
    assert.equal(result.ogDescription, result.description);
    assert.equal(result.ogTitle + " | BonusFoundry", result.title);
    assert(!/noindex/.test(result.robots));
    assert(!result.overflow, `Horizontal overflow at ${width}`);
    assert.equal(result.emptyLinks, 0);
    assert.equal(result.invisibleFaq, 0);
    assert.equal(result.hiddenSections, 0);
    assert.deepEqual(result.oldMoneyOutsideHistory, []);
    assert.equal(result.cta.href, referral);
    assert.match(result.cta.text, /Open Paysend referral link/);
    assert.match(result.cta.rel, /nofollow/);
    assert.match(result.cta.rel, /sponsored/);
    assert(result.cta.width >= 44 && result.cta.height >= 40);
    assert.equal(result.headings[0].level, 1);
    for (let i = 1; i < result.headings.length; i++)
      assert(
        result.headings[i].level <= result.headings[i - 1].level + 1,
        "Skipped heading level"
      );
    let keyboardCta = false;
    for (let i = 0; i < 45; i++) {
      await send("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: "Tab",
        code: "Tab",
        windowsVirtualKeyCode: 9
      });
      await send("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: "Tab",
        code: "Tab",
        windowsVirtualKeyCode: 9
      });
      keyboardCta = await evaluate(
        `document.activeElement?.textContent.includes('Open Paysend referral link')`
      );
      if (keyboardCta) break;
    }
    assert(keyboardCta, `CTA unreachable by keyboard at ${width}`);
    const focus = await evaluate(
      "getComputedStyle(document.activeElement).boxShadow"
    );
    assert(focus && focus !== "none", "CTA focus ring missing");
    await evaluate("window.scrollTo(0,0)");
    const shot = await send("Page.captureScreenshot", { format: "png" });
    await fs.writeFile(
      `${dir}/paysend-${width}.png`,
      Buffer.from(shot.data, "base64")
    );
    if (width === 390) {
      for (const id of [
        "referrer-rewards",
        "expired-promotions",
        "official-sources"
      ]) {
        await evaluate(
          `window.scrollTo(0, document.getElementById('${id}').getBoundingClientRect().top + scrollY - 110)`
        );
        const sectionShot = await send("Page.captureScreenshot", {
          format: "png"
        });
        await fs.writeFile(
          `${dir}/paysend-${id}-390.png`,
          Buffer.from(sectionShot.data, "base64")
        );
      }
    }
    findings.push({ width, keyboardCta, ...result });
  }
  assert.equal(errors.length, 0, JSON.stringify(errors));
  await fs.writeFile(
    `${dir}/browser-findings.json`,
    JSON.stringify(findings, null, 2)
  );
} finally {
  ws.close();
}

// Compare user-facing content, metadata and schema, excluding dev/runtime scripts.
const baselineFiles = (await fs.readdir(dir)).filter(
  (f) =>
    f.endsWith("-before.html") &&
    f !== "paysend-before.html" &&
    f !== "paysend-provider-before.html"
);
function semantics(h) {
  return {
    main: h
      .match(/<main>([\s\S]*?)<\/main>/)?.[1]
      .replace(/<script\b[\s\S]*?<\/script>/g, "")
      .replace(/<!--.*?-->/gs, "")
      .replace(/<template id="B:\d+"><\/template>/g, ""),
    title: h.match(/<title>(.*?)<\/title>/)?.[1],
    metadata: [
      ...h.matchAll(
        /<meta\b[^>]+(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g
      )
    ]
      .map((m) => m[0])
      .sort(),
    canonical: h.match(/<link[^>]+rel="canonical"[^>]+>/)?.[0],
    schemas: jsonLd(h)
  };
}
for (const file of baselineFiles) {
  const slug = file.replace("-before.html", "");
  const r = await fetch(`${origin}/providers/${slug}/referral-code`);
  assert.equal(r.status, 200);
  assert.deepEqual(
    semantics(await r.text()),
    semantics(await fs.readFile(`${dir}/${file}`, "utf8")),
    `Non-Paysend output changed: ${slug}`
  );
}
const oldProvider = await fs
  .readFile(`${dir}/paysend-provider-before.html`, "utf8")
  .catch(() => null);
if (oldProvider) {
  const providerResponse = await fetch(origin + "/providers/paysend");
  assert.equal(providerResponse.status, 200);
  assert.deepEqual(
    semantics(await providerResponse.text()),
    semantics(oldProvider),
    "Paysend overview changed outside scope"
  );
}
console.log(
  `Paysend: HTML, metadata, JSON-LD, ${localLinks.size} internal links, assets, robots, 4 viewports and keyboard checks passed. ${baselineFiles.length} other provider referral pages match baseline.`
);
