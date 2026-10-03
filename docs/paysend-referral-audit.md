# Paysend referral page audit — 2026-10-03

Scope: `/providers/paysend/referral-code` only. The user's Ria, TapTap Send,
Sendwave and Remitly date edits were present before this mission and are preserved.

## Goal 1: rendering and factual audit

The dynamic referral route reads `data/providers.ts`, which imports offer strings
from `data/paysend.ts`. `getProviderAuthority` supplies the generic reward,
eligibility, checklist, sources and FAQ modules. `ReferralBox` repeats the same
welcome offer. `referralPageMetadata`, `buildReferralFaq`, `webPageJsonLd`,
`faqJsonLd` and `breadcrumbJsonLd` generate metadata and structured content.
The general provider page and comparison pages also consume the same record.

The pre-change local rendered HTML was captured for all 11 referral pages in
`.next-dev/paysend-audit/`. The Paysend page returns 200, has a correct canonical,
an H1 of “Paysend referral code”, generic invite-link metadata, and crawlable but
repetitive answers. Its FAQ schema repeats the expired offer. Global robots allow
all crawlers, including search crawlers; no global policy change is needed.

| Existing claim / issue                                                              | Source in repository                                                                                                                                     | Status          | Official evidence and action                                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Personal invite URL `06mvt6`, used before signup                                    | `data/paysend.ts`, provider record, `ReferralBox`                                                                                                        | KEEP            | Live invitation and Help Center confirm the flow. Preserve URL and sponsored attribution.                                                                                                            |
| First transfer without Paysend's transfer fee                                       | Shared welcome/eligibility/steps                                                                                                                         | CONDITIONAL     | Invitation and invite-link help support it for eligible new users; keep country and applicable-terms qualifications nearby.                                                                          |
| Current $5 after a $100 second transfer                                             | Shared offer, minimum, timing; provider requirements, steps, key facts, limitations, verification, checklist, mistakes, troubleshooting, FAQ and sidebar | HISTORICAL_ONLY | Summer campaign ended 2026-07-31. Remove from current claims and generated FAQ; retain only in an explicitly expired campaign section/answer.                                                        |
| Existing-user answer consists of “Existing Paysend users opening a second account…” | `ineligibleUsers[0]` interpolated as a positive-looking standalone FAQ answer                                                                            | REMOVE          | Help Center explicitly forbids retroactive use after registration. Replace with an unambiguous “No” answer; no account-duplication instructions.                                                     |
| Static excluded-country list                                                        | Provider limitations, checklist and eligibility                                                                                                          | UPDATE          | Current Help Center publishes participating markets. Link to it; do not promise worldwide availability or repeat an undated exclusion list.                                                          |
| Referrer rewards absent from the main explanation                                   | Generic page layout                                                                                                                                      | UPDATE          | Current bonus page and invitation: first 12 qualifying transfers within the friend's first 12 months; USD example $3 each, up to $36 per friend; amounts/availability depend on registration market. |
| Promo-code and referral-code intent ambiguous                                       | Generic headings and FAQ                                                                                                                                 | UPDATE          | Promo-code help describes campaign-specific codes and “Add a code” during transfer. Explain separately from signup through an invite.                                                                |
| September doubled rewards                                                           | Missing historical context                                                                                                                               | HISTORICAL_ONLY | Official September article ends campaign 2026-09-30 and returns to standard rate October 1. Do not present $6/$72 as current.                                                                        |
| Official invitation title still advertises $5                                       | Prior `docs/paysend-offer.md` relied on metadata                                                                                                         | UNCERTAIN       | Re-observed on October 3; visible current invitation does not establish active $5 terms. Title alone is insufficient.                                                                                |
| September article counts referrals/month; current program counts transfers/friend   | Official-source conflict                                                                                                                                 | UNCERTAIN       | Treat September as expired campaign context; use current program page plus invitation for the current 12-transfer/12-month model.                                                                    |
| Generic title/H1 and weak benefit description                                       | Shared route metadata function                                                                                                                           | UPDATE          | Paysend-only title/meta/H1; preserve canonical, English locale and existing route.                                                                                                                   |
| Stale FAQ JSON-LD                                                                   | Generic `buildReferralFaq`                                                                                                                               | UPDATE          | Paysend-specific FAQ from the same strings rendered visibly. Keep WebPage and BreadcrumbList; no Offer/Review/Rating/QAPage.                                                                         |

Official pages were opened on October 3, 2026:

- [Current referral program](https://paysend.com/en/bonus)
- [Exact publisher invitation](https://paysend.com/en/referral/06mvt6)
- [Using an invitation](https://help.paysend.com/hc/fr/articles/6330530248989-Comment-utiliser-un-lien-d-invitation)
- [No retroactive application](https://help.paysend.com/hc/fr/articles/24789296324765-J-ai-oubli%C3%A9-d-utiliser-un-lien-d-invitation-lors-de-mon-inscription-Puis-je-l-utiliser-plus-tard)
- [Rewards and participating markets](https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend)
- [Inviting friends](https://help.paysend.com/hc/fr/articles/6330383807389-Comment-puis-je-inviter-des-amis)
- [Finding promo codes](https://help.paysend.com/hc/fr/articles/6330326718493-Comment-puis-je-obtenir-un-code-promo)
- [Applying a promo code](https://help.paysend.com/hc/en-us/articles/6330337183005-How-do-I-apply-a-promo-code)
- [Expired summer campaign](https://paysend.com/eu/blog/paysend-referral-promotion-summer-2026)
- [Expired September campaign, English version](https://paysend.com/en/blog/september-referral-rewards-2026)

Short English Help Center URLs were inaccessible through the research tool;
verified French articles are retained and identified as French. The English
September article confirms the same dates as the supplied French source.

## Implementation boundary

Use a dedicated Paysend referral data module and page component, consistent with
the existing provider-specific page pattern. Only the Paysend routing and metadata
branches change in the shared route. Reuse existing UI, disclosure, corridor-link
and schema helpers without changing their implementations. Import only the invite
URL from the legacy offer module. Keep all providers' shared data unchanged.
The sitemap uses the dedicated date for this one referral URL; a rendered XML
comparison confirms every other sitemap entry remains identical. This avoids
changing the overview's historical review date just to update the target page.

The general Paysend page, comparison outputs and `docs/paysend-offer.md` still
contain the earlier claims and require a separate follow-up. They are outside this
mission; the target page can be corrected without modifying their source record.

Google's FAQ documentation now redirects to its updates page, which records the
FAQ rich-result feature's removal. Existing FAQPage semantics may be retained for
matching visible answers, without promising a Google rich result. No special AI
markup or global crawler policy change is needed.

## Goal 3 validation

Completed against the final production build on October 3, 2026.

| Requirement                                                                  | Evidence / result                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current facts, eligibility, market conditions, referrer/new-user distinction | Re-read the complete production HTML text in `.next-dev/paysend-audit/paysend-final.txt` against the official sources above. First-transfer fee waiver is conditional; $3/up to $36 is explicitly a USD example with 12 qualifying transfers in the friend's first 12 months.                                                                                                                                     |
| Code/link intent and existing accounts                                       | Explicit answers distinguish an invitation before account creation from campaign codes during a transfer. No second-account or re-registration instructions remain on the target page.                                                                                                                                                                                                                            |
| Expired amounts                                                              | `$5`, `$100`, `second transfer`, `$6`, `$72` occur only in labeled historical/discrepancy sections and corresponding historical FAQs. JSON-LD also identifies those FAQ claims as expired.                                                                                                                                                                                                                        |
| Title, meta, OpenGraph, canonical, H1                                        | Browser assertions verify exact title, matched meta/OG descriptions, `website` OG type, target social URL, self-referencing canonical and one H1.                                                                                                                                                                                                                                                                 |
| Crawlability                                                                 | Production HTTP 200; critical answers present in server HTML before JavaScript. No robots/header noindex. Standard anchors. `/robots.txt` allows `*`; no crawler-policy edits.                                                                                                                                                                                                                                    |
| Sitemap freshness                                                            | Target referral entry now has October 3, 2026; all other XML entries match the captured baseline byte-for-byte.                                                                                                                                                                                                                                                                                                   |
| Structured data                                                              | Parsed every JSON-LD block. Updated WebPage name/description/date, breadcrumb label and FAQPage answers. All 10 FAQ questions and answers match visible DOM exactly. Existing site organization/website/editorial identities retained; no Offer, Review, Rating, Article or QAPage added.                                                                                                                         |
| Internal links and assets                                                    | All 8 target-page internal destinations return HTTP 200; production CSS/JS assets load. Existing repository link verifier passes 444 directional relationship checks.                                                                                                                                                                                                                                             |
| External links                                                               | All 10 official URLs were successfully opened through the research browser, including the unchanged publisher invite. The verified French Help Center links are explicitly labeled.                                                                                                                                                                                                                               |
| CTA, attribution, analytics, locale                                          | Same live invite URL, Next Link anchor and `nofollow sponsored`; disclosure preserved. Global Google Ads code and layout unchanged. Page stays English.                                                                                                                                                                                                                                                           |
| Mobile and accessibility                                                     | Browser assertions at 320, 390, 768 and 1440 px: no horizontal overflow, skipped heading levels, empty links or hidden sections; all FAQs visible without controls. CTA is reachable with Tab and has a visible focus ring. No JavaScript exceptions. Screenshots visually inspected for mobile, desktop, rewards, expired campaigns and sources. No data table is introduced; historical cards reflow on mobile. |
| Provider isolation                                                           | All 11 provider data objects serialize identically to baseline. All 10 other referral pages match baseline main HTML, title, meta/OG/Twitter, canonical and JSON-LD (only React streaming markers excluded). General Paysend overview also matches its baseline.                                                                                                                                                  |
| Final diff                                                                   | Only the Paysend route branches and this URL's sitemap date change in shared source. Four new Paysend-specific files provide content, rendering, verification and this audit. Prior user-authorized provider date edits remain intact.                                                                                                                                                                            |

Commands actually run:

```text
npm run lint
npm exec -- tsc --noEmit --incremental false
npm run build
npm run check:internal-links
node scripts/verify-paysend-rendered.mjs http://localhost:3104 9227
git -c safe.directory=C:/Users/salah/Desktop/BonusFoundry diff --check
```

All final checks pass. There is no `test` script in `package.json`. The first
internal-link run detected the omitted corridor section; the existing component
was restored to the Paysend page and the final build/link check passes. An initial
isolation comparison differed only in React dev/production streaming markers;
the verifier excludes those markers while retaining actual content and markup.

Final metadata:

- Title: `Paysend Bonus & Referral Link: Fee-Free First Transfer | BonusFoundry`
- Description: `Paysend referral link: eligible new users can get a fee-free first transfer. See referrer rewards, country limits, promo-code differences and official sources.`
- H1: `Paysend bonus and referral link: how it works`
- Canonical unchanged: `https://bonusfoundry.com/providers/paysend/referral-code`
- Visible last verification and WebPage modification date: October 3, 2026.

## Remaining uncertainty and follow-up outside this mission

The invitation's $5 metadata anomaly remains unresolved by current visible terms;
it is disclosed on the final page and not used as evidence of an active offer.
The expired September article counts referrals/month differently from the current
program's transfers/friend model; current program and invitation evidence govern
the current explanation. Neither issue prevents an accurate conditional page.

The legacy shared Paysend offer record, general provider overview, comparison
outputs and `docs/paysend-offer.md` still describe the old $5/$100 offer. They were
intentionally left outside this exact-page mission and should be addressed in a
separate task. No publishing or live deployment was performed.
