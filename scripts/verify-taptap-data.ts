import assert from "node:assert/strict";
import { providers } from "@/data/providers";
import {
  taptapOffer,
  taptapProvider,
  taptapSources,
  taptapFaq,
  taptapMetadata,
  taptapSummary
} from "@/data/taptap-send";

assert.equal(
  providers.find((provider) => provider.slug === "taptap-send"),
  taptapProvider
);
assert.equal(taptapOffer.code, "SALAHEDD1933");
assert.deepEqual(taptapOffer.friendReward, { amount: 5, currency: "EUR" });
assert.deepEqual(taptapOffer.referrerReward, { amount: 10, currency: "EUR" });
for (const field of [
  "minimumTransfer",
  "eligibleCountries",
  "campaignExpiresAt",
  "evidenceFile"
] as const) {
  assert.equal(taptapOffer[field], null, `${field} remains explicitly unknown`);
}
assert.equal(taptapOffer.evidenceReviewedAt, "2026-09-07");
assert.equal(taptapOffer.officialCheckedAt, "2026-09-08");
assert.equal(taptapOffer.contentUpdatedAt, "2026-09-08");
assert.equal(taptapSources.length, 10);
assert.equal(
  taptapSources.find((source) => source.key === "licenses")?.updatedAt,
  "2026-07-14"
);
for (const source of taptapSources) {
  assert(
    ["help.taptapsend.com", "www.taptapsend.com"].includes(
      new URL(source.url).hostname
    )
  );
}
assert.equal(taptapFaq.length, 12);
assert.equal(new Set(taptapFaq.map((faq) => faq.question)).size, 12);
const words = taptapSummary.split(/\s+/).length;
assert(words >= 40 && words <= 70);
const fullTitle = `${taptapMetadata.title} | BonusFoundry`;
assert(fullTitle.length >= 50 && fullTitle.length <= 60);
assert(
  taptapMetadata.description.length >= 130 &&
    taptapMetadata.description.length <= 160
);
assert(
  !/EUR 100|USD 100|USD 10|New Zealand|90 days to redeem/.test(
    JSON.stringify(taptapProvider)
  )
);
console.log(
  `Canonical offer, role separation, null unknowns, dates, 10 sources and 12 FAQ answers passed. Summary: ${words} words; title: ${fullTitle.length}; description: ${taptapMetadata.description.length}.`
);
