// Run after npm run build and starting the production server:
// node scripts/verify-transfergo-rendered.mjs http://localhost:3104 [Chrome debug port]
import assert from "node:assert/strict";
import fs from "node:fs/promises";

const origin = process.argv[2] || "http://localhost:3104";
const path = "/providers/transfergo/referral-code";
const canonical = `https://bonusfoundry.com${path}`;
const invite = "https://trgo.co/en/r/bonus2026";
const dir = ".next-dev/transfergo-audit";
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
async function get(route) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, `HTTP failure: ${route}`);
  assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""));
  return response.text();
}
const html = await get(path);
const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1];
assert(main, "Missing server-rendered main content");
const text = plain(main);
assert(
  !/salmi01|separately enterable|separate manual code/i.test(text),
  "Obsolete invitation or code disclaimer remains"
);
assert.equal((main.match(/<h1\b/g) || []).length, 1);
for (const expected of [
  "TransferGo Referral Code bonus2026 & Invite Link (2026)",
  invite,
  "before registering as a new customer",
  "€100",
  "different currency",
  "The €5 shown is the inviter's reward",
  "A new-customer bonus is not verified",
  "six months",
  "30 days",
  "EUR-to-EUR",
  "Revolut",
  "N26",
  "Monese",
  "Apple Pay",
  "Google Pay",
  "cookies",
  "rejected or refunded",
  "multiple",
  "October 18, 2026",
  "Owner app screenshot",
  "BonusFoundry is independent of TransferGo",
  "not a worldwide offer guarantee",
  "Copy invite code: bonus2026",
  "Owner confirmation of personalized invitation",
  "€20"
])
  assert(
    text.includes(expected),
    `Missing visible evidence or requirement: ${expected}`
  );
assert(
  !/get €[25]0? (?:with|when|for)|guaranteed (?:bonus|reward)|enter (?:code )?salmi01/i.test(
    text
  )
);
const inviteAnchors = [...main.matchAll(/<a\b([^>]+)>([\s\S]*?)<\/a>/g)].filter(
  (m) => m[1].includes(`href="${invite}"`)
);
assert(
  inviteAnchors.length >= 5,
  "Invitation must appear as CTA and visible URL"
);
for (const a of inviteAnchors) {
  assert(/rel="[^"]*sponsored/.test(a[1]));
  assert(/rel="[^"]*nofollow/.test(a[1]));
}
assert(plain(inviteAnchors[0][2]).includes("Open TransferGo Invite Link"));
const metadata = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => decode(m[0]));
assert(
  decode(html.match(/<title>(.*?)<\/title>/)?.[1] || "") ===
    "TransferGo Referral Code bonus2026 (2026) | BonusFoundry"
);
assert(html.includes(`<link rel="canonical" href="${canonical}"`));
assert(
  metadata.some(
    (m) => m.includes('name="robots"') && m.includes("index, follow")
  )
);
assert(
  metadata.some((m) => m.includes('property="og:url"') && m.includes(canonical))
);
assert(
  metadata.some(
    (m) => m.includes('property="og:type"') && m.includes('content="website"')
  )
);
assert(
  metadata.some(
    (m) =>
      m.includes('name="twitter:card"') && m.includes("summary_large_image")
  )
);
const description = metadata
  .find((m) => m.includes('name="description"'))
  ?.match(/content="([^"]+)"/)?.[1];
assert(description?.includes(invite) && description.length <= 160);
assert(description.includes("new-customer bonus is not verified"));
const json = schemas(html);
assert(
  !json.some((s) =>
    ["Offer", "Review", "AggregateRating", "HowTo", "FAQPage"].includes(
      s["@type"]
    )
  ),
  "Inappropriate commercial reward or FAQ schema"
);
const page = json.find((s) => s["@type"] === "WebPage");
assert.equal(page.url, canonical);
assert.equal(page.dateModified, "2026-10-18");
assert.equal(page.publisher["@id"], "https://bonusfoundry.com/#organization");
const crumbs = json.find((s) => s["@type"] === "BreadcrumbList");
assert.deepEqual(
  crumbs.itemListElement.map((i) => i.item),
  ["https://bonusfoundry.com/", "https://bonusfoundry.com/providers", canonical]
);
const faq = main.match(
  /<h2[^>]*>Frequently asked questions<\/h2>([\s\S]*?)<\/section>/
)?.[1];
assert(
  faq && (faq.match(/<h3\b/g) || []).length === 9,
  "Nine visible FAQ answers required"
);
const sources = main.match(
  /<section id="official-sources"[\s\S]*?<\/section>/
)?.[0];
for (const source of [
  "https://www.transfergo.com/terms-conditions/refer-a-friend-programme",
  "https://www.transfergo.com/fr/parrainez-un-ami"
])
  assert(sources?.includes(`href="${source}"`));
for (const href of new Set(
  [...main.matchAll(/href="(\/[^"#]*)"/g)].map((m) => decode(m[1]))
))
  await get(href);
for (const route of [
  "/providers",
  "/guides/promo-code-vs-referral-code",
  "/guides/what-to-check-before-using-money-transfer-referral-link",
  "/providers/paysend/referral-code",
  "/providers/transfergo"
])
  assert(
    (await get(route)).includes(`href="${path}"`),
    `Missing incoming link from ${route}`
  );
const sitemap = await get("/sitemap.xml");
assert(
  sitemap
    .match(new RegExp(`<url>\\s*<loc>${canonical}</loc>[\\s\\S]*?</url>`))?.[0]
    .includes("2026-10-18")
);
assert((await get("/robots.txt")).includes("Allow: /"));
const comparison = [];
for (const slug of ["ria", "sendwave", "taptap-send", "paysend"]) {
  const before = await fs
    .readFile(`${dir}/${slug}-before.html`, "utf8")
    .catch(() => null);
  const after = await get(`/providers/${slug}/referral-code`);
  if (before) {
    const normalize = (s) =>
      plain(s.match(/<main>([\s\S]*?)<\/main>/)?.[1] || "").replace(
        "TransferGo invite link and referral requirements Compare another invitation flow and check who receives a reward. ",
        ""
      );
    assert.equal(
      normalize(after),
      normalize(before),
      `Unrelated ${slug} offer content changed`
    );
    assert.deepEqual(
      schemas(after),
      schemas(before),
      `Unrelated ${slug} schema changed`
    );
    comparison.push(slug);
  }
}
await fs.writeFile(`${dir}/transfergo-final.html`, html);
await fs.writeFile(`${dir}/transfergo-final.txt`, text);
console.log(
  JSON.stringify(
    {
      result: "PASS",
      checks:
        "HTML, exact CTA, evidence distinctions, metadata, schema, FAQs, sitemap, robots and internal links",
      providerRegressionBaselines: comparison,
      descriptionLength: description.length
    },
    null,
    2
  )
);

// Optional isolated headless-browser QA, matching the existing provider verifiers.
if (process.argv[3]) {
  const targets = await (
    await fetch(`http://localhost:${process.argv[3]}/json/list`)
  ).json();
  const target = targets.find((t) => t.type === "page");
  assert(target, "Headless Chrome target missing");
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });
  let sequence = 0;
  const pending = new Map();
  const errors = [];
  socket.onmessage = ({ data }) => {
    const m = JSON.parse(data);
    if (m.method === "Runtime.exceptionThrown")
      errors.push(m.params.exceptionDetails);
    if (!m.id) return;
    const job = pending.get(m.id);
    if (!job) return;
    pending.delete(m.id);
    clearTimeout(job.timer);
    if (m.error) job.reject(new Error(JSON.stringify(m.error)));
    else job.resolve(m.result);
  };
  function send(method, params = {}) {
    const id = ++sequence;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error(`Timeout: ${method}`));
      }, 15000);
      pending.set(id, { resolve, reject, timer });
      socket.send(JSON.stringify({ id, method, params }));
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
  const findings = [];
  try {
    await send("Page.enable");
    await send("Runtime.enable");
    for (const [width, height] of [
      [320, 740],
      [390, 844],
      [768, 900],
      [1440, 1000]
    ]) {
      await send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width < 768
      });
      await send("Page.navigate", { url: origin + path });
      let ready = false;
      for (let i = 0; i < 80; i++) {
        ready = await evaluate(
          `location.pathname === ${JSON.stringify(path)} && document.readyState === 'complete'`
        );
        if (ready) break;
        await new Promise((r) => setTimeout(r, 100));
      }
      assert(ready, "Page failed to load");
      await evaluate("document.fonts.ready.then(() => true)");
      const result = await evaluate(`(() => {
        const main = document.querySelector('main');
        const cta = main.querySelector('a[href="${invite}"]');
        const literal = [...main.querySelectorAll('a')].find(a => a.textContent === '${invite}');
        const bounds = cta.getBoundingClientRect();
        const headings = [...main.querySelectorAll('h1,h2,h3')].map(h => +h.tagName[1]);
        return { overflow: document.documentElement.scrollWidth > innerWidth,
          cta: { href: cta.href, height: bounds.height, width: bounds.width, bottom: bounds.bottom },
          literalBottom: literal.getBoundingClientRect().bottom,
          headings, emptyLinks: [...main.querySelectorAll('a')].filter(a=>!a.textContent.trim()&&!a.getAttribute('aria-label')).length,
          title: document.title,
          url: location.href
        };
      })()`);
      assert(!result.overflow, `Horizontal overflow at ${width}`);
      assert.equal(result.cta.href, invite);
      assert(result.cta.height >= 44 && result.cta.width >= 44);
      assert(
        result.cta.bottom < height && result.literalBottom < height,
        `Invitation not in first screen at ${width}`
      );
      assert.equal(result.emptyLinks, 0);
      assert.equal(result.headings[0], 1);
      for (let i = 1; i < result.headings.length; i++)
        assert(result.headings[i] <= result.headings[i - 1] + 1);
      let keyboardCta = false;
      for (let i = 0; i < 35; i++) {
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
          `document.activeElement?.textContent.trim() === 'Open TransferGo Invite Link'`
        );
        if (keyboardCta) break;
      }
      assert(keyboardCta, `CTA unreachable by keyboard at ${width}`);
      assert.notEqual(
        await evaluate("getComputedStyle(document.activeElement).boxShadow"),
        "none"
      );
      await evaluate(
        "document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0)"
      );
      const shot = await send("Page.captureScreenshot", { format: "png" });
      await fs.writeFile(
        `${dir}/transfergo-${width}.png`,
        Buffer.from(shot.data, "base64")
      );
      findings.push({ width, height, keyboardCta, ...result });
    }
    assert.equal(errors.length, 0, JSON.stringify(errors));
    await fs.writeFile(
      `${dir}/browser-findings.json`,
      JSON.stringify(findings, null, 2)
    );
    console.log(
      "PASS: 320/390/768/1440px; first-screen invitation, keyboard focus, touch targets, headings, no overflow or runtime exceptions."
    );
  } finally {
    socket.close();
  }
}
