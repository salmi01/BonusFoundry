# Taptap Send implementation and verification report

Review date: 8 September 2026. Goal: `docs/tasks/v2/18_bonusfoundry-taptap-send-research-and-codex-goal.md`.

## Evidence and factual corrections

The owner's supplied transcription of the Referrals screen establishes the personal code **SALAHEDD1933**, **EUR 5 for the referred friend** and **EUR 10 for the referrer**. The evidence review date is **7 September 2026**. It does not establish a completed referral transaction, an exact minimum, eligible countries/corridors or a campaign expiry.

The named original image, `WhatsApp Image 2026-09-07 at 20.26.36.jpeg`, was not available in the repository. The implementation uses the expressly permitted transcription fallback, labels the evidence and missing image, and creates no substitute or broken image reference. Exact minimum, geographic scope, campaign validity and image path are stored as `null`, not zero or unlimited.

The former EUR/USD 10 friend reward and EUR/USD 100 minimum were removed from the Taptap provider, referral page, Morocco comparison and bonus-credit guide. LemFi's separately documented EUR10/$10 and EUR100/$100 statements were not relabeled as Taptap claims or changed by this goal.

Rules now distinguish new registration, first-transfer code entry, one-code/no-stacking restrictions, an eligible successful uncanceled transfer to someone other than the referrer, full-balance credit use, noncash/nontransferable/nonrefundable rewards, deposit-based 90-day expiry, uncertain delivery timing, failed-transfer recredit and the 20-action rolling-30-day reward limit. Country/payment/payout/service availability are separated from referral eligibility. The page contains no instant-arrival or universal-code guarantee.

## Official sources actually reopened

All sources below were reopened on **8 September 2026**. Source publication/update dates are not the date of our check. Main page records are maintained in `data/taptap-send.ts`.

| Official source                                                                                                                  | Source update shown                                     | Use                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| [Referral and promo instructions](https://help.taptapsend.com/en/bonus-and-referrals/how-do-referral-codes-and-promo-codes-work) | 20 August 2026                                          | Code entry, route dependence, credit use, failed transfers           |
| [Referral terms](https://www.taptapsend.com/en/referrals-terms/referral-v4/referrals-en4)                                        | 28 March 2025                                           | Qualification, restrictions, expiry, limits, campaign precedence     |
| [Sending countries](https://help.taptapsend.com/en/sending-countries)                                                            | Not displayed                                           | Available regional sending guides, not offer eligibility             |
| [Europe](https://help.taptapsend.com/en/sending-countries/how-do-i-send-money-from-europe)                                       | Not displayed                                           | Explicit country list, payment options and verification              |
| [United States](https://help.taptapsend.com/en/sending-countries/how-do-i-send-money-from-the-usa)                               | 25 August 2026                                          | Residency/presence, payment options, Nevada/Virgin Islands exclusion |
| [Fees](https://help.taptapsend.com/en/fees-and-pricing/what-fees-do-i-pay-to-send-money-with-taptap-send)                        | 20 August 2026                                          | Route/amount/delivery-dependent fees and quote                       |
| [Exchange rates](https://help.taptapsend.com/en/fees-and-pricing/how-do-exchange-rates-work-on-taptap-send)                      | 20 August 2026                                          | Exchange-rate cost and local handling/cashout caveat                 |
| [Transfer time](https://help.taptapsend.com/en/transfer-status/how-long-will-my-transfer-take)                                   | 20 August 2026                                          | Estimates, bank and verification delays                              |
| [Licenses](https://www.taptapsend.com/en/licenses)                                                                               | 14 July 2026                                            | Published entities/permissions, not a safety guarantee               |
| [Support](https://help.taptapsend.com/en/how-do-i-contact-taptap-send-support)                                                   | 28 August 2026                                          | In-app contact path and registered-email support                     |
| [Morocco help](https://support.taptapsend.com/hc/en-gb/articles/1500004995482-Morocco)                                           | Not displayed                                           | Existing comparison's bank and cash-pickup context                   |
| [Morocco landing page](https://www.taptapsend.com/fr/send-money-to/morocco)                                                      | No page update; cited speed statistic dated 26 May 2025 | Existing dated speed statement and fee/payout context                |
| [Sending limits](https://support.taptapsend.com/hc/en-gb/articles/4402258052371-How-much-can-I-send)                             | No update date recorded                                 | Existing comparison source link; no new numerical limit inferred     |
| [Recipient methods](https://support.taptapsend.com/hc/en-gb/articles/360001303188-How-do-recipients-receive-their-money)         | No update date recorded                                 | Existing comparison source link                                      |

The four legacy `support.taptapsend.com` links remain reachable; the Help Center links redirect to Taptap Send's Zendesk pages. Other providers' service sources were not independently re-researched in this Taptap-specific goal.

## Ambiguities and manual follow-up

- The minimum amount and captured EUR offer geography still require the owner's in-app “Minimum send requirements & conditions apply” details. This is an allowed evidence gap, not a reason to invent EUR 100.
- The original screenshot still needs to be supplied for publication. No image upload or replacement was fabricated.
- Terms clauses 2.2.2 and 2.4 use different threshold language: meeting a minimum versus exceeding it. The page points to the applicable app/campaign requirement.
- The Help Center's “wallet transfers” exclusion is not precise enough to exclude every Mobile Money payout. The page explains this uncertainty and directs route-specific questions to support.
- The captured screen describes a friend reward on the first transfer, whereas the legal terms describe credit after qualification. Both are attributed; immediate cash or discount delivery is not promised.
- The Morocco marketing page has broad country wording and historical speed statistics. The overview uses the operational sending-country guides, not a universal European eligibility claim or a delivery guarantee.
- No Search Console export or connected Search Console data was available. No settings were changed and no ranking/citation outcome is claimed.

## Search intent, structure and accessibility

Primary intent URL remains **`/providers/taptap-send/referral-code`**. Its explicit path, existing internal references and focused code instructions support this choice without inventing Search Console evidence. All existing canonicals are preserved, with no redirects.

- The referral page answers before background: a 51-word summary, labeled copy control, nearby disclosure, evidence/check dates and two primary-rule links. The captioned HTML facts table keeps role, amount and scope together. It contains one h1, structured h2/h3 sections and 12 visible referral questions.
- `/providers/taptap-send` is a service overview, with separately worded market, payment, payout and cost context. It links to the detailed referral evidence instead of duplicating the full instructions.
- The bonus-credit guide focuses on existing balance use, expiry and failed transfers. Its unsupported Markdown-table syntax was replaced with a readable checklist compatible with the repository's MDX configuration.
- Provider cards now link directly to referral details. Existing corridor referrals remain linked; the Morocco comparison and welcome-bonus guide link to the primary code page. There is no separate referral-code index route in this repository; `/providers` serves that navigation role.
- The shared copy control retains existing default labels and behavior, adds a 44px minimum target, keyboard-accessible native button, live success feedback and a visible copy-by-selection fallback if clipboard access fails.
- No new third-party scripts, tracking changes, referral URL substitutions or outbound paid links were introduced. Existing global analytics and security/disclosure behavior remain intact.

## Structured data and freshness

The two Taptap pages emit WebPage and matching BreadcrumbList data, reuse BonusFoundry's canonical publisher entity and identify Taptap Send as the subject. Neither emits Offer, Product, Review, AggregateRating or FAQPage markup. Visible FAQ text remains useful without a promised rich result: [Google's changelog](https://developers.google.com/search/updates) records withdrawal of FAQ rich results in May 2026 and removal of the documentation in June.

The Morocco guide retains its existing FAQ schema; its answers were synchronized to the visible FAQ, including the Taptap answer drawn from the shared data. Other providers' visible offer content was not changed by this schema synchronization.

Evidence review (7 September), official checks (8 September), source update dates and content modification (8 September) are separate fields. The sitemap now uses stored content dates instead of stamping every URL with the build time. The four directory dates requested separately by the owner are centralized in `data/index-review.ts`; they do not silently redate linked articles. Robots/crawler/AI permissions are unchanged.

## Checks and acceptance evidence

- `npx tsx scripts/verify-taptap-data.ts`: passed; separate rewards, explicit nulls, source count/dates, 12 FAQ questions, 51-word answer, 53-character final title and 141-character description.
- `npm run lint` and `npm run typecheck`: passed again on the final implementation.
- `npm run build`: passed, generating 76 pages. One subsequent local-server run encountered missing generated manifests; the server was stopped and the production build regenerated, without altering app logic or manually fabricating build files.
- Prettier was run over `app components content data lib scripts`: 51 files have style warnings, including untouched files. A check against `HEAD:app/about/page.tsx` confirms pre-existing formatting differences. No repository-wide formatting rewrite was made. New core modules, the rewritten credit guide and audit scripts are formatted explicitly.
- Reproducible browser audit: `node scripts/verify-taptap-rendered.mjs` with a local production server and headless Chrome debug port 9225. It checks 11 routes at 320, 390, 768 and 1440 CSS pixels, rendered metadata/schema, offer-role rows, raw server HTML, image failures, internal links, console errors and actual clipboard interactions.
- Final browser result: **passed**, 44 rendered page/width combinations, **64 internal URLs** checked successfully, no broken loaded images, no console/runtime/hydration errors, no document-level horizontal overflow. Actual clipboard contents and live feedback passed for mouse, Tab/Enter and emulated touch; the denied-clipboard fallback also passed. All FAQ schemas encountered in the tested pages matched their visible questions and answers.
- The primary page's copy button ends at y=730.5 on the 320px viewport and y=579.5 on the 390px viewport (844px height). The screenshot at 390px shows the code, both rewards, disclosure, dated evidence and official links within the first screen. Desktop 1440px also shows the captioned offer table. Screenshots were visually inspected.
- Observed layout-shift total was **0** across the tested navigations. This is a local lab observation, not a field Core Web Vitals score. Existing comparison/troubleshooting tables scroll inside their own containers on narrow screens; the dedicated Taptap facts table wraps within the viewport.
- Raw fetched HTML, with script elements removed, still contains the code, both rewards, caption, disclosure and verification note. Canonicals and indexability passed; the referral URL is in the sitemap and allowed by robots. Native HTML content remains usable without an evidence image.
- Final targeted Prettier check passed for the canonical data, new page component, copy control, credit guide, sitemap and both verification scripts. `git diff --check` passed. The broader 51-file formatting backlog is the only unresolved tooling check and was intentionally not turned into a repository-wide rewrite.

The repository had no pre-existing automated test script. The two new audit scripts supply focused data and browser regression checks; they do not claim a full WCAG certification, a real-device test or production field Core Web Vitals. Screenshot omission cannot hide the offer: the complete facts are rendered as HTML with no dependency on the image.

## Changed-file inventory and handoff

- Canonical offer: `data/taptap-send.ts`, `data/providers.ts`.
- Rendering/routes: `components/taptap-send-page.tsx`, `app/providers/[slug]/page.tsx`, `app/providers/[slug]/referral-code/page.tsx`.
- Shared controls/navigation: `components/copy-code-button.tsx`, `components/provider-card.tsx`.
- Comparison/guides: `components/morocco-guide-tables.tsx`, `content/guides/best-money-transfer-apps-to-morocco.mdx`, `content/guides/how-to-use-taptap-send-bonus-credit.mdx`, `content/guides/how-to-claim-a-welcome-bonus.mdx`.
- Freshness: `app/sitemap.ts`; separately requested directory dates in `data/index-review.ts` and `app/{providers,corridors,guides,faq}/page.tsx`.
- Verification: `scripts/verify-taptap-data.ts`, `scripts/verify-taptap-rendered.mjs`, this report. Browser artifacts are generated under `.next/taptap-audit/` and are not deployment assets.
- The supplied goal document is user content and was not rewritten. Historical task documents describing old offers are preserved; they are not runtime publication sources. Examples outside publication scope include `docs/tasks/v2/14_goal_ai_citations_aeo_geo_seo_optimization.md`, `15_add_referral_codes_to_title_and_meta.md` and `16_Proprietary_verification_status.md`. Runtime searches found no remaining old Taptap offer; the comparison's same-line LemFi amounts are a different provider's unchanged offer.

No deployment, IndexNow submission, Search Console change, account change or external profile write was performed. Deployment remains subject to separate authorization.
