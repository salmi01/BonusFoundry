// Run against a production server and a headless Chrome debug port.
// node scripts/verify-taptap-rendered.mjs [origin] [debugPort]
import assert from "node:assert/strict";
import fs from "node:fs/promises";

const origin = process.argv[2] || "http://localhost:3101";
const debugPort = process.argv[3] || "9225";
const targets = await fetch(`http://localhost:${debugPort}/json`).then((r) =>
  r.json()
);
const target = targets.find((t) => t.type === "page");
assert(target, "Chrome must expose a page target");
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
let sequence = 0;
const pending = new Map();
const errors = [];
const findings = [];
ws.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const job = pending.get(message.id);
    if (!job) return;
    pending.delete(message.id);
    clearTimeout(job.timeout);
    if (message.error) job.reject(new Error(JSON.stringify(message.error)));
    else job.resolve(message.result);
  } else if (message.method === "Runtime.exceptionThrown") {
    errors.push(message.params.exceptionDetails);
  } else if (
    message.method === "Log.entryAdded" &&
    message.params.entry.level === "error"
  ) {
    errors.push(message.params.entry);
  } else if (
    message.method === "Runtime.consoleAPICalled" &&
    message.params.type === "error"
  ) {
    errors.push(message.params.args);
  }
};
function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timed out: ${method}`));
    }, 15000);
    pending.set(id, { resolve, reject, timeout });
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
async function navigate(path, width, height = 900) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });
  await send("Page.navigate", { url: origin + path });
  for (let i = 0; i < 80; i++) {
    if (
      await evaluate(
        `location.pathname === ${JSON.stringify(path)} && document.readyState === 'complete'`
      )
    )
      break;
    await pause(100);
  }
  await evaluate("document.fonts.ready.then(() => true)");
  await evaluate("document.documentElement.style.scrollBehavior = 'auto'");
  await pause(400);
}
const artifactDir = ".next/taptap-audit";
await fs.mkdir(artifactDir, { recursive: true });
await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await send("Emulation.setFocusEmulationEnabled", { enabled: true });
await send("Page.addScriptToEvaluateOnNewDocument", {
  source: `window.auditCLS=0; new PerformanceObserver(l=>l.getEntries().forEach(e=>{if(!e.hadRecentInput)window.auditCLS+=e.value})).observe({type:'layout-shift',buffered:true});`
});
const primary = "/providers/taptap-send/referral-code";
const routes = [
  primary,
  "/providers/taptap-send",
  "/guides/how-to-use-taptap-send-bonus-credit",
  "/guides/best-money-transfer-apps-to-morocco",
  "/guides/how-to-claim-a-welcome-bonus",
  "/providers/sendwave",
  "/providers/ria/referral-code",
  "/providers/lemfi",
  "/providers",
  "/corridors/france-to-morocco",
  "/corridors/usa-to-kenya"
];
const report = [];
const localLinks = new Set();
try {
  for (const path of routes) {
    for (const width of [320, 390, 768, 1440]) {
      await navigate(path, width, width < 768 ? 844 : 1000);
      const page = await evaluate(`(() => {
        const h1 = document.querySelector('h1');
        const article = document.querySelector('article') || document.querySelector('main');
        const copy = [...document.querySelectorAll('button')].find(b=>b.textContent.includes('Copy referral code'));
        const bounds = copy?.getBoundingClientRect();
        return {
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.content,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          robots: document.querySelector('meta[name="robots"]')?.content,
          h1Count: document.querySelectorAll('h1').length,
          headings: [...article.querySelectorAll('h1,h2,h3')].map(h=>({level:+h.tagName[1],text:h.textContent})),
          text: (document.querySelector('main') || article).innerText,
          caption: document.querySelector('caption')?.innerText,
          facts: [...document.querySelectorAll('table tr')].map(r=>r.innerText.replace(/\\s+/g,' ')),
          schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent)),
          links: [...document.querySelectorAll('a[href]')].map(a=>a.href),
          viewport: innerWidth, documentWidth: document.documentElement.scrollWidth,
          overflow: [...article.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().right>innerWidth+1 && !e.closest('.sr-only')).slice(0,5).map(e=>e.tagName+': '+e.textContent.slice(0,60)),
          cls: window.auditCLS,
          copyBottom: bounds?.bottom, copyHeight: bounds?.height,
          brokenImages: [...document.images].filter(i=>i.complete && !i.naturalWidth).map(i=>i.src)
        };
      })()`);
      assert.equal(page.h1Count, 1, `${path}: h1`);
      assert.equal(
        page.canonical,
        "https://bonusfoundry.com" + path,
        `${path}: canonical`
      );
      assert(!page.robots?.includes("noindex"), `${path}: indexability`);
      if (page.documentWidth > page.viewport + 1)
        findings.push(
          `${path} ${width}px: horizontal overflow ${page.documentWidth}`
        );
      assert.equal(
        page.brokenImages.length,
        0,
        `${path}: broken images ${page.brokenImages.join(", ")}`
      );
      const normalized = (value) => value.replace(/\s+/g, " ").trim();
      for (const schema of page.schemas.filter(
        (s) => s["@type"] === "FAQPage"
      )) {
        for (const question of schema.mainEntity) {
          assert(
            normalized(page.text).includes(normalized(question.name)),
            `${path}: visible FAQ question`
          );
          assert(
            normalized(page.text).includes(
              normalized(question.acceptedAnswer.text)
            ),
            `${path}: FAQ schema answer must match visible text: ${question.name}`
          );
        }
      }
      for (const link of page.links)
        if (link.startsWith(origin + "/")) localLinks.add(link.split("#")[0]);
      if (path === primary) {
        for (const text of [
          "SALAHEDD1933",
          "EUR 5",
          "EUR 10",
          "Disclosure:",
          "A minimum applies",
          "September 7, 2026",
          "September 8, 2026",
          "How we verified this offer",
          "original screenshot is not yet published"
        ])
          assert(page.text.includes(text), `Missing ${text}`);
        assert(page.caption?.includes("Verified offer facts"));
        assert(
          page.facts.some(
            (row) =>
              row.includes("Referred friend / new customer") &&
              row.includes("EUR 5")
          )
        );
        assert(
          page.facts.some(
            (row) =>
              row.includes("Referrer / code owner") && row.includes("EUR 10")
          )
        );
        assert.equal(
          page.schemas.find((s) => s["@type"] === "WebPage")?.dateModified,
          "2026-09-08"
        );
        assert(
          page.schemas.some(
            (s) =>
              s.about?.name === "Taptap Send" &&
              s.publisher?.["@id"] === "https://bonusfoundry.com/#organization"
          )
        );
        assert(
          !page.schemas.some((s) =>
            [
              "FAQPage",
              "Review",
              "AggregateRating",
              "Product",
              "Offer"
            ].includes(s["@type"])
          )
        );
        assert(
          page.links.some((l) => l.includes("/referral-v4/referrals-en4"))
        );
        assert(
          page.links.some((l) =>
            l.includes(
              "/bonus-and-referrals/how-do-referral-codes-and-promo-codes-work"
            )
          )
        );
        assert(!/EUR 100|USD 100|USD 10|New Zealand/.test(page.text));
        assert(page.copyHeight >= 44);
        for (let i = 1; i < page.headings.length; i++)
          assert(
            page.headings[i].level <= page.headings[i - 1].level + 1,
            "Heading level skipped"
          );
        if (width === 390 || width === 1440) {
          const shot = await send("Page.captureScreenshot", {
            format: "jpeg",
            quality: 85
          });
          await fs.writeFile(
            `${artifactDir}/referral-${width}.jpg`,
            Buffer.from(shot.data, "base64")
          );
        }
      }
      report.push({
        path,
        width,
        title: page.title,
        description: page.description,
        documentWidth: page.documentWidth,
        cls: page.cls,
        copyBottom: page.copyBottom,
        overflow: page.overflow
      });
    }
    console.log(`Rendered ${path} at four widths`);
  }
  await navigate(primary, 390, 844);
  await send("Browser.grantPermissions", {
    origin,
    permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"]
  });
  const copyPoint = async () =>
    evaluate(
      `(() => {const b=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('SALAHEDD1933') || b.textContent==='Copied'); b.scrollIntoView({block:'center'}); const r=b.getBoundingClientRect(); return {x:r.x+r.width/2,y:r.y+r.height/2};})()`
    );
  for (const mode of ["mouse", "keyboard", "touch"]) {
    await evaluate("navigator.clipboard.writeText('before-test')");
    const point = await copyPoint();
    if (mode === "mouse") {
      await send("Input.dispatchMouseEvent", {
        type: "mousePressed",
        ...point,
        button: "left",
        clickCount: 1
      });
      await send("Input.dispatchMouseEvent", {
        type: "mouseReleased",
        ...point,
        button: "left",
        clickCount: 1
      });
    } else if (mode === "keyboard") {
      await evaluate(`document.body.tabIndex = -1; document.body.focus();`);
      // Tab until the real, keyboard-focusable button is reached.
      for (let i = 0; i < 40; i++) {
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
        if (
          await evaluate(
            `document.activeElement.tagName==='BUTTON' && /SALAHEDD1933|Copied/.test(document.activeElement.textContent)`
          )
        )
          break;
      }
      assert(
        await evaluate(
          `document.activeElement.tagName==='BUTTON' && /SALAHEDD1933|Copied/.test(document.activeElement.textContent)`
        ),
        "Tab reaches copy control"
      );
      await send("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: "Enter",
        code: "Enter",
        windowsVirtualKeyCode: 13,
        text: "\r",
        unmodifiedText: "\r"
      });
      await send("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: "Enter",
        code: "Enter",
        windowsVirtualKeyCode: 13
      });
    } else {
      await send("Emulation.setTouchEmulationEnabled", {
        enabled: true,
        maxTouchPoints: 1
      });
      await send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [point]
      });
      await send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: []
      });
    }
    await pause(150);
    assert.equal(
      await evaluate("navigator.clipboard.readText()"),
      "SALAHEDD1933",
      `${mode}: clipboard`
    );
    assert(
      await evaluate(
        `document.querySelector('[role="status"]').textContent.includes('copied')`
      ),
      `${mode}: accessible feedback`
    );
    await pause(1900);
  }
  await evaluate(
    `navigator.clipboard.writeText = () => Promise.reject(new Error('Audit denied clipboard')); [...document.querySelectorAll('button')].find(b=>b.textContent.includes('Copy referral code')).click();`
  );
  await pause(100);
  assert(
    await evaluate(
      `document.querySelector('[role="status"]').textContent.includes('Copy unavailable. Select and copy this code: SALAHEDD1933')`
    ),
    "Clipboard failure fallback"
  );
  const brokenLinks = [];
  for (const url of localLinks) {
    const response = await fetch(url);
    if (!response.ok) brokenLinks.push({ url, status: response.status });
  }
  assert.equal(brokenLinks.length, 0, JSON.stringify(brokenLinks));
  const serverHTML = await fetch(origin + primary).then((r) => r.text());
  const htmlWithoutScripts = serverHTML.replace(
    /<script\b[^>]*>[\s\S]*?<\/script>/g,
    ""
  );
  for (const text of [
    "SALAHEDD1933",
    "EUR 5",
    "EUR 10",
    "<caption",
    "Disclosure:",
    "How we verified this offer"
  ])
    assert(htmlWithoutScripts.includes(text), `Server-rendered ${text}`);
  const sitemap = await fetch(origin + "/sitemap.xml").then((r) => r.text());
  assert(sitemap.includes("https://bonusfoundry.com" + primary));
  const robots = await fetch(origin + "/robots.txt").then((r) => r.text());
  assert(
    robots.includes("Allow: /") && !robots.includes("Disallow: /providers")
  );
  await fs.writeFile(
    `${artifactDir}/report.json`,
    JSON.stringify(
      {
        report,
        findings,
        errors,
        internalLinksChecked: localLinks.size,
        clipboard: ["mouse", "keyboard", "touch", "denied fallback"]
      },
      null,
      2
    )
  );
  console.log(
    JSON.stringify(
      {
        pages: routes.length,
        widths: 4,
        findings,
        errors,
        internalLinksChecked: localLinks.size,
        clipboard: "mouse, keyboard, touch, failure fallback passed",
        artifacts: artifactDir
      },
      null,
      2
    )
  );
  assert.equal(findings.length, 0, "Responsive findings require review");
  assert.equal(errors.length, 0, "Console or runtime errors require review");
} finally {
  ws.close();
}
