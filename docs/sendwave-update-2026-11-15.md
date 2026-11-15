# Sendwave refresh — November 15, 2026

Scope: `/providers/sendwave` and `/providers/sendwave/referral-code`, plus the shared Sendwave summaries used in provider and corridor comparisons. Both paths remain indexable with their own self-referencing canonical.

## Before editing

Production HTML was captured for both target pages and 24 other provider pages in `.next-dev/sendwave-nov15/baseline-html.json`. The baseline records metadata, headings, links, visible answers and structured data. The overview had 21 overlapping referral FAQs; the referral guide had 10. Neither displayed an offer image. Both included BreadcrumbList and WebPage markup; the overview also included FAQPage. No page-specific noindex was present, and robots.txt allows crawling.

| Page          | SEO title before                                                       | SEO title after                                                   |
| ------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Overview      | Sendwave welcome bonus and referral program \| BonusFoundry            | Sendwave: Transfers, Eligibility & Referral Rules \| BonusFoundry |
| Referral code | Sendwave Referral Code I4H9G: €20 Credit & Eligibility \| BonusFoundry | Sendwave Referral Code I4H9G: €20 EUR Offer \| BonusFoundry       |

| Page          | Description before                                                                                                                                   | Description after                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overview      | Learn how the Sendwave welcome bonus and referral program work, including eligibility, requirements, supported countries, and referral details.      | Explore Sendwave transfer options, identity checks and referral rules. Check route availability, fees, exchange rates and the amount your recipient receives. |
| Referral code | Sendwave referral code I4H9G: €20 credit for eligible new users. App screenshot reviewed October 25, 2026. See signup steps and referral conditions. | Sendwave referral code I4H9G: €20 credit shown in a France/EUR account offer with a €50+ first transfer. See screenshots, eligibility and signup steps.       |

## Changes and evidence

- The overview now introduces transfer options, quote and identity checks, general referral mechanics and four provider FAQs. The referral guide retains its code-entry steps, copy button, 10 distinct code FAQs, troubleshooting and independent editorial/disclosure text. Contextual links connect the pages; existing valuable links remain.
- The original November 15 screenshot shows `I4H9G`, €20 credit for the new friend, and €20 for the referrer after the friend's first successful delivered transfer, usable toward a later transfer.
- The original November 15 popup shows €20 off the friend's first transfer and a send amount of €50 or more. Both amounts and the minimum are qualified as the supplied France/EUR account offer. France registration comes from the publisher; the images themselves do not identify a country or eligible-destination list.
- One responsive, lazy-loaded image appears in the referral guide's existing evidence section, with intrinsic dimensions 872 × 1536 and a 330px maximum width. Its neutral caption identifies the screenshot observation date. A supporting link opens the November 15 original (1308 × 1536). No redundant full-size image appears on the overview.
- Original image URLs: `/images/providers/sendwave/offer-details-2026-10-24.jpg` and `/images/providers/sendwave/referral-code-2026-11-04.jpg`. No image edits or duplicate assets were made.
- Last verified for referral rules and supplied app evidence is November 15, 2026. Last content update, applicable metadata and both sitemap lastmod values use the implementation date, November 15, 2026. Screenshot observation dates remain November 15. Historical changelog entries and older service-source review dates remain intact; no publication date was invented.
- Source audit found no current Sendwave €10/$10 claims in application, component, content or data files outside its preserved historical changelog. Other providers' amounts were not changed. Shared Sendwave comparison copy now qualifies the EUR account offer instead of applying it globally.
- The overview's four visible FAQ answers match its FAQPage data. The referral guide retains WebPage and breadcrumb data without adding FAQ rich-result, Offer, Product, Review or rating claims. Analytics and shared layout/copy components were not changed.

## Official sources checked

Both exact terms URLs returned HTTP 200 and their article bodies were reviewed on November 15, 2026. Local evidence is in `.next-dev/sendwave-nov15/referral-program.html` and `promo-code-promotion.html`.

- [Referral-program terms](https://www.sendwave.com/en/terms-and-conditions/referral-program): first valid transaction, no previous completed app transaction, code before the first transaction, possible sending-country/destination/minimum restrictions, KYC, credit toward later transfers, and 12-month validity unless otherwise specified. The app determines reward amounts.
- [Separate promo-code terms](https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion): campaign-specific entry, application and restrictions. Their promo-entry instructions and combination rules are not treated as personal-referral rules.
- [Sendwave program explanation](https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits): supplementary context for rewards varying by country and promotion. Its older source-review date is preserved on the overview.

No conflict was found between the current terms and the supplied offer evidence. The terms establish general rules; the images establish what one account displayed. They do not prove third-party redemption, a completed payout, eligibility for every French customer, any particular recipient destination, a global €50 threshold or current availability on another account. Confirm the accepted live offer before sending.

## Validation

- Typecheck, lint and production build passed (80 pages).
- `node scripts/verify-sendwave-rendered.mjs http://localhost:3103` passed: both target pages, unique metadata/H1 intent, canonicals, robots, visible dates, account qualifications, screenshot placement/dimensions/lazy loading, image HTTP responses and original-byte hashes, contextual/preserved links, structured data, historical entries, and sitemap dates. All 24 protected provider pages retained identical rendered content, metadata and schemas. 37 internal destinations and 12 static resources returned HTTP 200.
- `npm run check:preview -- http://localhost:3103` passed: 14 CSS/JavaScript assets returned HTTP 200 and Tailwind utilities were present. `npm run check:internal-links` passed across 15 corridor pages, 26 provider pages and 444 link directions.
- Real Chrome review confirmed the copy interaction: pasting into the address bar displayed exactly `I4H9G` without submitting it. Final isolated Chrome renders were inspected for both pages at actual 390 × 844 and 1440 × 1000 viewports. Document widths were 390px and 1425px respectively, with no horizontal document overflow. The evidence image was 316px wide on mobile and 330px on desktop; the complete decoded image and caption fit below the sticky header. Aspect ratio was preserved and the pre/post-load height difference was less than one pixel, confirming reserved image space. The evidence remains below the initial fold.
- Browser metrics and reviewed renders are saved under `.next-dev/sendwave-nov15/visual/`: `browser-metrics.json`, `referral-mobile-top.png`, `referral-mobile-evidence.png`, `referral-desktop.png`, `referral-desktop-evidence.png`, `overview-mobile.png` and `overview-desktop.png`. The viewport checks passed against the final production build. All requirements were validated locally; no live deployment was performed.

## Changed files

- `app/(main)/providers/[slug]/page.tsx`: Sendwave-specific overview metadata, introduction, practical transfer checks, cross-link, review scope and distinct FAQs; other provider rendering preserved.
- `components/sendwave-referral-page.tsx`: account-qualified facts, separate observation/review dates, evidence image and supporting popup link, contextual overview link and neutral captions.
- `data/sendwave.ts`: shared account-qualified offer, €50 condition, evidence dates, current review/content dates and provider-focused FAQ content.
- `data/sendwave-referral.ts`: referral metadata, direct answer, steps, distinct FAQ answers and account-specific minimum.
- `data/providers.ts`: refreshed Sendwave evidence/source fields, qualified summaries and a new historical update entry; existing history preserved.
- `scripts/verify-sendwave-rendered.mjs`: production checks for both target pages and 24 protected provider pages.
- `docs/sendwave-update-2026-11-15.md`: before/after audit, source attribution, limits and verification results.

The task file was supplied by the user and remains unchanged. The two existing screenshot assets are reused without modification.
