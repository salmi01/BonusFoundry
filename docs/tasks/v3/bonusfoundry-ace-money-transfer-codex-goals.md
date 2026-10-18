# CODEX IMPLEMENTATION BRIEF — ACE Money Transfer Referral Code Page

**Project:** BonusFoundry (`bonusfoundry.com`)
**Provider:** ACE Money Transfer ONLY
**Language:** English only, including metadata, UI labels, schema, and FAQ
**Target URL:** `https://bonusfoundry.com/providers/ace-money-transfer/referral-code`
**As-of date for editorial research:** 2026-10-18
**Priority:** Accurate, useful referral landing page optimized for organic search, AI search and answer engines (SEO/AEO/GEO). No rankings, AI citations or rich results are guaranteed.

## Hard-coded referral assets

- **ACE Money Transfer referral/invite code:** `4262293`
- **Official app-generated referral URL (preserve all parameters):**

```text
https://acemoneytransfer.eu.go.link/acemoneytransfer.com/referral-link/?referral_code=4262293&adj_t=1fbed427&adj_deep_link=https%3A%2F%2Facemoneytransfer.com%2Freferral-link%3Freferral_code%3D4262293&adj_fallback=https%3A%2F%2Facemoneytransfer.com%2Fsign-up%3Freferral_code%3D4262293&adj_redirect_macos=https%3A%2F%2Facemoneytransfer.com%2Fsign-up%3Freferral_code%3D4262293
```

- Present the clickable invitation as **"Claim ACE referral offer"** or **"Sign up with referral link"** and provide a separate accessible **"Copy code"** action.
- Preserve the exact full URL in the actual `href` (HTML attribute escaping is acceptable). Do not inadvertently truncate parameters, use URL shorteners, or replace with a provider's generic homepage. Avoid putting the full extremely long URL into visible UI or metadata; use meaningful link text.
- Fallback if deep link does not open: show code `4262293` and explain entering it at signup. Do not promise that signup without the code will qualify.
- The ACE app screenshot provided by the project owner advertises **"you both earn £10 each"**. It also shows the app user's ACE ID `4262293`. This supports both-side rewards, but editorial details must follow the official program terms, including corridor exceptions.

## Editorial fact sheet — use as source of truth

The official ACE Wallet/Invite-a-Friend terms effective **November 20, 2025** establish:

1. For supported sending/receiving routes **excluding money sent to Nigeria**, an eligible new customer registers using the invite link or code, completes a **paid qualifying transfer**, and passes KYC/AML/fraud checks. Both participants receive rewards in ACE Wallet credits.
2. Official ACE explanatory guide states these reward amounts for both friend and referrer, as examples by sending currency:

| Sending currency | Minimum qualifying transfer | Reward for eligible invited new customer |
|---|---:|---:|
| EUR | €100 | €10 wallet credits |
| GBP | £100 | £10 wallet credits |
| AUD | A$200 | A$20 wallet credits |
| PLN | PLN 500 | PLN 50 wallet credits |
| CAD | C$200 | C$20 wallet credits |
| NOK | NOK 1,350 | NOK 135 wallet credits |
| SEK | SEK 1,300 | SEK 130 wallet credits |
| DKK | DKK 835 | DKK 85 wallet credits |
| RON | RON 600 | RON 60 wallet credits |
| CHF | CHF 110 | CHF 11 wallet credits |
| CZK | CZK 3,000 | CZK 300 wallet credits |

3. **Nigeria exception:** the current terms establish a separate offer for transfers sent to Nigeria: three paid qualifying referrals, higher transaction thresholds, and **no reward for the invited friend**. Do not generalize the dual-reward offer to Nigeria. Do not feature the Nigerian referrer-only rewards prominently on this consumer-facing page.
4. Credits arrive once the qualifying transaction has cleared all applicable checks. ACE states credits are **non-transferable, non-refundable and cannot be exchanged for cash**; credits apply toward future transfers, with usage limits specified in their terms. Never call them cash payouts or guaranteed instant cash.
5. ACE may change, suspend or deny promotions and rewards; eligibility and route availability are subject to current app/terms. Use brief, specific qualifiers where they matter—not repeated generic hedges. Do not claim a benefit applies in an excluded route.
6. For competing invites, ACE attributes the referral to the code used at registration. Emphasize using the correct link or code **during signup**, not after a completed transfer.
7. Never conflate the separate ACE **Associate Program** with ordinary app-based Invite-a-Friend referrals; they have different eligibility and rules.
8. Do not rely on older ACE blog articles when they conflict with the effective November 2025 legal terms. The main legal terms take precedence over editorial articles and campaign imagery.

### Primary sources — include contextual source links on published page

- Official legal terms, primary authority: https://acemoneytransfer.com/terms-and-conditions-wallet
- Official referral guide published November 21, 2025: https://acemoneytransfer.com/blog/how-to-earn-big-with-the-ace-invite-a-friend-program-instant-rewards-wallet-credits-monthly-prizes
- ACE explanation of reward policy (older and possibly superseded): https://acemoneytransfer.com/fr/blog/ace-money-transfer-s-policy-for-giving-rewards-in-the-invite-a-friend-program

**Maintenance rule:** Before implementation, re-open official terms for changes after this brief's as-of date. If new terms differ, update all copy, FAQ, table and structured data consistently and record the source and date of the change. Avoid fake 'checked today' timestamps: only publish actual editorial review dates.

---

## GOAL 1 — Create the ACE Money Transfer referral-code provider page

**Scope is ACE Money Transfer only.** Inspect existing BonusFoundry provider pages and reuse their established routing, components, typography, layout, design tokens, source citation pattern, mobile experience, and data model. Do not modify another provider's referral assets.

Implement `https://bonusfoundry.com/providers/ace-money-transfer/referral-code`, with a scannable, helpful hierarchy:

1. **Breadcrumbs:** Home > Providers > ACE Money Transfer > Referral Code.
2. **Hero / H1:** `ACE Money Transfer Referral Code 4262293 — Get a €10 Bonus` (the lead amount pertains specifically to qualifying EUR transfers outside the Nigeria exception). Keep H1 readable and avoid promising universal eligibility.
3. **Concise answer-first summary, directly below H1:**
   > Use ACE Money Transfer referral code **4262293** when signing up through the invitation link. For eligible euro-denominated transfers outside the Nigeria exception, a new customer can receive **€10 in ACE Wallet credits** after completing a qualifying transfer of **€100 or more** and passing ACE's checks. Rewards for other sending currencies and routes differ.
4. **Above-the-fold referral action:** prominent CTA linking to the full invitation URL; a copyable `4262293` code; lightweight disclosure that BonusFoundry may receive a referral reward. Make code usable even if JS is disabled.
5. **Key offer facts:** provider, referral code, relevant bonus by sending currency, first qualified transfer threshold, reward type (ACE Wallet credits), intended new-customer eligibility, Nigeria exclusion, official primary source.
6. **How to use code:** open invite link; register with code attributed at signup; make eligible international paid transfer meeting threshold; complete checks; eligible ACE Wallet credits are applied on qualifying approval.
7. **Short reward table** containing the official values above; on mobile make accessible by horizontal scroll or well-labeled stacked rows. Introduce it as *eligible sending currencies, subject to route rules*, not a universal country list.
8. **What the reward actually is:** wallet credit for future transfers, not withdrawable cash; communicate usage constraints without overstating a specific per-transaction maximum from potentially ambiguous wording.
9. **Eligibility / exclusions:** new customer, registration attribution, required paid transfer, anti-fraud checks, Nigeria distinction, participating geographies and applicable terms.
10. **FAQ** (8–10 concise answers), starting with direct answers and following with detail:
    - What is the ACE Money Transfer referral code?
    - How do I use the ACE Money Transfer referral link?
    - How much is the ACE Money Transfer referral bonus in euros?
    - What is the minimum first transfer to qualify?
    - Does ACE Money Transfer give the invited friend a reward?
    - Is the ACE referral bonus cash or wallet credit?
    - When do ACE referral rewards arrive?
    - Does the ACE referral code work for transfers to Nigeria?
    - Can I apply the ACE referral code after registration?
    - Where can I find the official ACE Invite a Friend terms?
11. **Official sources & editorial note** with named provider, actual last reviewed date, direct links to the terms and referral guide, and a clear distinction between provider-published rules and BonusFoundry's explanation. Use the site's existing genuine author/editor identity—do not fabricate credentials or testing.
12. **End-of-page CTA:** repeat the link and exact code and optionally link to related guides and relevant corridor content.

**Conversion UX:** fast loading, readable type, low layout shift, high contrast, mobile-first buttons, visible copy-to-clipboard success feedback, no intrusive pop-ups, no false urgency or unrelated prize imagery. Do not over-focus on what the inviter earns. Do not describe the provider's unrelated prize competition as the primary offer.

### Suggested concise on-page copy

**H1:** ACE Money Transfer Referral Code 4262293 — €10 Bonus

**Lead:** `Use ACE Money Transfer referral code 4262293 to sign up. Eligible new customers making a qualifying €100+ transfer can receive €10 in ACE Wallet credits, subject to ACE's program rules. Transfers to Nigeria follow a separate offer.`

**CTA:** `Sign up with ACE referral link`

**CTA supporting line:** `Referral code: 4262293 · Copy code`

---

## GOAL 2 — Optimize ACE Money Transfer for SEO, AEO and GEO

**Scope is ACE Money Transfer only.** Optimize for search intent and machine readability without keyword stuffing, misleading bonuses, or claims of endorsement.

### Target search intent / keywords

**Primary:**
- `ace money transfer referral code`
- `ace money transfer referral link`
- `ace money transfer bonus`
- `ace money transfer invite a friend`
- `ace referral code`

**Secondary, contextually where useful:**
- `ace money transfer promo code`
- `ace money transfer referral bonus`
- `ace money transfer refer a friend`
- `ace money transfer invitation code`
- `ace money transfer €10 bonus`
- `ace money transfer signup bonus`
- `ace money transfer referral code 2026`

Distinguish **referral code** from general **promo/discount code**. Avoid claiming every offer is combinable, universally available or a cash withdrawal.

### Search appearance

- **Suggested title:** `ACE Money Transfer Referral Code 4262293 | €10 Bonus`
- **Suggested meta description:** `Use ACE Money Transfer referral code 4262293. Eligible new customers can get €10 in wallet credits after a €100+ transfer. Get the referral link and rules.`
- Make the invitation **one tap away** in the search landing experience. The exact long tracking/deep link should **not** be pasted into the meta description: it harms readability, exceeds useful snippet length and may be truncated. The code, reward, threshold and the promise of an easily accessible referral link should appear instead.
- Add absolute canonical to target URL; a descriptive slug; unique title/description; social OG/Twitter tags with a real hosted asset if available; `en` language and correct URL in metadata; consistent on-page offer.
- Ensure self-canonical, indexable 200 page, correct sitemap inclusion, meaningful internal links from `/providers`, related provider comparisons and genuinely relevant country corridors (not arbitrary sitewide links). Avoid orphan pages, duplication and competing near-identical pages.
- Keep title and description human-readable within practical pixel limits (not arbitrary exact-character guarantees).

### Structured data (JSON-LD)

- Use `WebPage` (name, URL, description, `dateModified` only if accurate, `inLanguage: "en"`, `isPartOf` BonusFoundry website, `about` ACE Money Transfer as Organization/Service as appropriate).
- Use `BreadcrumbList` mirroring real breadcrumb links.
- Optionally use `FAQPage` only if FAQ answers are plainly visible and site policy allows it; do not promise Google FAQ rich results (eligibility is restrictive).
- Reuse accurate BonusFoundry `Organization` / `WebSite` definitions sitewide. Do not pretend ACE authored or endorsed this page. Do not invent ratings, customer reviews, recognized awards, `AggregateRating`, `Offer` prices or promotional validity dates.
- Validate JSON-LD and ensure offer numbers/eligibility match displayed facts.

### AI answer quality / citation friendliness

- Put a plain-English definition, exact code, euro bonus and minimum threshold in the first ~100 words.
- Make each FAQ answer self-contained, no dangling pronouns or missing context.
- Provide compact factual tables with explicit units and separated Nigeria exception.
- Anchor claims to direct official links near relevant sections (not just in the footer). Include source dates when known; label the actual review date.
- Use consistent provider entity naming `ACE Money Transfer`, code `4262293`, and reward terminology `ACE Wallet credits`.
- Favor helpful original organization/synthesis over copied promotional prose. No ranking guarantees, no AI-citation guarantees, no unsupported "best" or "highest paying" comparisons.
- Optimize core web vitals through normal Next.js practices and test semantic headings, accessible links, and mobile readability.

---

## GOAL 3 — Integrate ACE Money Transfer into BonusFoundry and verify quality

**Scope is ACE Money Transfer only.** Follow established repository conventions rather than inventing a second content architecture.

1. Inspect app routing/components/provider model; implement ACE Money Transfer page using existing shared components.
2. Register ACE Money Transfer in the providers directory/index and link correctly to the referral-code page; use provider's official name and appropriate logo if legitimately available.
3. Add contextually appropriate related links, avoid navigation bloat and irrelevant corridor claims.
4. Keep referral details centralized in the project's existing data source/config if one exists; avoid multiple hard-coded copies of URL and code that drift out of sync.
5. Ensure referral `href` correctly retains `referral_code=4262293`, `adj_t`, `adj_deep_link`, `adj_fallback`, `adj_redirect_macos`. External link should be a normal discoverable anchor and clearly labeled; use existing affiliate/sponsored disclosure and rel policy as appropriate. Do not cloak the destination or alter attribution.
6. Confirm link and copy-code work on mobile and desktop and that important information remains readable without JavaScript.
7. Confirm document title, meta description, canonical, OG URL, schema and sitemap all point to the **ACE Money Transfer** page and that no TransferGo/Paysend/Ria/other provider content remains from copied templates.
8. Run available lint, typecheck, build and applicable tests. Resolve any failures caused by the change; report unrelated preexisting failures separately.
9. Add lightweight regression checks if project has a testing framework: exact code, referral URL params, offer EUR/GBP figures, Nigeria exclusion, FAQ anchor links, and visible editorial disclosure.
10. Produce a brief implementation report: modified files, SEO artifacts, tests executed/results, source URLs consulted, and manual checklist items.

### Acceptance criteria

- [ ] English-only ACE Money Transfer page exists and has a 200 response.
- [ ] Referral code `4262293` visible and copyable near top of page.
- [ ] Exact full official app-generated referral URL used in above-fold and final CTA.
- [ ] Euro-focused headline states €10 wallet-credit bonus and qualifying €100 threshold.
- [ ] GBP £10 offer and additional currency thresholds documented accurately when shown.
- [ ] Nigeria exception prominent enough to prevent false generalization.
- [ ] Rewards consistently described as wallet credits rather than withdrawable cash.
- [ ] Explicit condition of register via code/link + paid qualifying transfer + checks.
- [ ] Main facts supported by ACE official terms and official current referral guide.
- [ ] Unique metadata, canonical, breadcrumbs, sitemap, reasonable schema, internal links.
- [ ] Correct no-fabricated-claim/disclosure standards respected.
- [ ] Responsive, accessible UI; lint/build/tests pass or failures explained.

## Final execution instruction to Codex

Implement **all three goals sequentially**, inspect current code patterns before changing anything, and modify **only ACE Money Transfer-related content** plus the minimal shared index/sitemap/navigation code necessary. Use official terms as the authority when other ACE marketing pages conflict. Do not ask for approval between the three goals unless a critical blocking ambiguity would make implementation unsafe. Finish with a concise list of changes, verification results and any open issues.
