# Goal: improve Sendwave SEO and update verified referral facts (BonusFoundry)

Target URLs (preserve both):
- https://bonusfoundry.com/providers/sendwave
- https://bonusfoundry.com/providers/sendwave/referral-code

## Evidence and verified facts
- User's Sendwave app screenshot (Oct 24, 2026): code `I4H9G`; new referred user receives **€20 credit**; referrer receives **€20 credit** after the referred user's first successful delivered transfer. Referrer credit is usable toward a later Sendwave transfer.
- User's Sendwave in-app popup (Nov 4, 2026): friend gets **€20 off the first transfer** and both parties receive €20 on successful referral; popup states **send €50 or more**. Present €50 as a condition **shown in this France/EUR account offer**, not a universal threshold.
- Official terms: https://www.sendwave.com/en/terms-and-conditions/referral-program — first eligible transaction, new customers only, enter code before first transaction, sender/destination restrictions and possible minimums, KYC, credits valid 12 months unless otherwise specified. Reward amount determined by in-app offer.
- Also check https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion ; distinguish promo-code terms from referral terms and do not merge distinct programs.
- These screenshots show a specific EUR-denominated account offer; **do not claim all countries, corridors or users get €20**. No claim that screenshots independently prove code redemption by a third party.

## SEO objectives
1. Audit both pages' current HTML, metadata, headings, FAQ, internal links, canonical, robots, structured data, and rendering. Record current state before editing.
2. Differentiate intent: `/providers/sendwave` = provider overview, eligibility, mechanics, official terms, practical transfer context; `/providers/sendwave/referral-code` = exact `Sendwave referral code I4H9G`, €20 offer in the verified EUR account, how/when to enter code, conditions, troubleshooting. Both pages should have unique titles, descriptions, H1, and genuinely differentiated content. Avoid keyword stuffing, duplicated answer blocks and FAQ cannibalization.
3. Put a concise, factual direct-answer paragraph near the top of the referral-code page; make code easy to copy, but preserve existing design system and working interactions. Prioritize invitee benefit; do not overemphasize referrer payout.
4. Add original first-party evidence with image, date and neutral caption. Use descriptive alt text, optimized dimensions, lazy-load images below the fold, and avoid layout shift. Do not place the entire screenshot above the fold if it harms UX.
5. Link to official Sendwave terms, cross-link the two pages contextually, preserve existing valuable links, and check other BonusFoundry pages/corridors for outdated €10 references. Update only where factually justified by scope; do not generalize the €20 EUR offer globally.
6. Verify JSON-LD accuracy and eligibility; do not invent reviews, ratings, offers, dates, or rich-result eligibility. Ensure self-referencing canonical on each distinct indexable page unless repository evidence warrants a different SEO strategy.
7. Maintain URL paths, functional components, existing analytics, author/editorial attribution, accessibility, site conventions and overall design. No broad refactor or redesign.

## Screenshots: exact repository paths
Files included in this ZIP. Copy these into the repository at:
- `public/images/providers/sendwave/offer-details-2026-10-24.jpg` (contains code, €20+€20, mechanics)
- `public/images/providers/sendwave/referral-code-2026-11-04.jpg` (contains €50 minimum popup and €20+€20)

Public URLs (assuming standard public/ mapping):
- `/images/providers/sendwave/offer-details-2026-10-24.jpg`
- `/images/providers/sendwave/referral-code-2026-11-04.jpg`

Show the clearest screenshot in an existing relevant offer/evidence section of the referral-code page, and optionally link to the second as supporting evidence; avoid redundant full-size screenshots on both pages. If an existing image convention/component exists, use it. Captions should explicitly say 'Offer displayed in a EUR-denominated Sendwave account, screenshot dated [date]; availability and conditions may vary.' Do not label images as official public global offers.

## Freshness and validation
- Update `Last verified` to **2026-11-15** only for information actually checked against official terms and the supplied screenshots; distinguish screenshot observation dates from verification date.
- Update `Last content update` / `dateModified` to actual implementation/publication date, not a future or invented date; keep original `datePublished` and historical changelog entries intact.
- Check exact current terms again during implementation and flag any conflict with screenshots instead of silently guessing.
- Run repository build/lint/tests where available; inspect page metadata, broken links, image paths, responsive display and structured data; report changed files and before/after SEO titles and descriptions.

## Deliverable
Make focused changes directly in the existing repository. Provide a concise change log, source URLs, any unresolved eligibility ambiguity, and test results. Never promise rankings or AI citations.
