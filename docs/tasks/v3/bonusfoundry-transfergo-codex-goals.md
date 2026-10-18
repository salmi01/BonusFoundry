# Codex Implementation Brief — TransferGo Referral Page for BonusFoundry

**Project:** BonusFoundry (`bonusfoundry.com`)  
**Provider:** TransferGo ONLY  
**Priority:** High  
**Language:** English (US/international English), no French in user-facing content  
**Page target:** `/providers/transfergo/referral-code`  
**Verification reference date:** October 18, 2026  
**Primary conversion destination:** `https://trgo.co/en/r/salmi01`

## Mission

Implement and integrate a trustworthy, accurate, fast, mobile-friendly TransferGo referral page targeting relevant organic searches and answer-engine citations. Optimize for SEO, AEO and GEO without keyword stuffing, misleading financial claims, fake credentials, fabricated testimonials, or unsupported promises of rankings/citations. This is an implementation task, not merely a content proposal.

**Critical evidence distinction:** The BonusFoundry owner's TransferGo app shows **“Earn €5 per friend once they send €100 or more abroad.”** This is a **referrer-side reward**, NOT proof that a new referred customer receives €5. Do not describe €5 as a signup bonus or reward for the referred friend. The public TransferGo French landing page still cites €20 in some descriptions, but the official terms say bonuses vary by user and by programme. The owner's app-specific €5 offer is the grounded amount for this link. Keep the referrer's earnings to a short, secondary section and focus on what a prospective new customer must do, where to find the link, whether they themselves receive a reward (currently not verified), and eligible transfer requirements.

## Authoritative references and evidence

1. Official TransferGo Refer a Friend terms (effective Sept 30, 2025): https://www.transfergo.com/terms-conditions/refer-a-friend-programme
2. Official TransferGo referral overview (French-language source; user-facing BonusFoundry page remains English): https://www.transfergo.com/fr/parrainez-un-ami
3. Owner-provided October 18, 2026 screenshots of the TransferGo referral screen and in-app rules, available as conversation attachments. They show:
   - Invite link: `https://trgo.co/en/r/salmi01`
   - Referrer gets €5 per qualifying referral, upon transfer of at least €100 abroad.
   - A new user must register with the invitation link or code; the first qualifying transfer must be at least €100 and international; cannot send to the inviter or themselves.
   - Revolut, N26, Monese, Apple Pay, Google Pay and certain prepaid cards/wallets may not qualify.
   - No stated maximum number of successful referrals in the app view.
   - Referrer must claim an available reward within 30 days; identity/account checks apply.
4. Official T&Cs also specify:
   - Qualifying transfers must cross borders **and currencies**; same-currency transfers (e.g., EUR to EUR) do not qualify (clauses 2.4–2.5).
   - Requirements appearing in the app/web govern the number and amount of qualifying transfers; qualifying transfers are to be completed within six months after being referred (clause 2.4).
   - Referrals by link may require cookies enabled for attribution (clause 2.11).
   - Transfers must actually complete, not be rejected or refunded (clause 2.9).
   - TransferGo may deny rewards for abuse, multiple accounts, or problematic payment sources (clause 2.13).
   - **No pay-per-click or other paid or automated lead-generation services for this referral programme** (clause 2.15). DO NOT recommend or implement paid ads for this invite link.
   - Rewards vary by user and can be changed; referred friends **may** receive discounts or bonuses, but none is established for this specific link (clauses 3.1–3.3).
   - Claiming deadline of 30 days concerns the referrer's reward (clause 4.2), not necessarily a new customer's signup benefit.

For time-sensitive claims, prefer the user's live in-app offer for their particular account and the official legal terms for qualification; explain the discrepancy with public marketing pages. Re-check live sources during implementation where possible. Do not silently substitute a different campaign or reward.

## Goal 1 — Add an accurate, conversion-friendly TransferGo referral page

Implement `/providers/transfergo/referral-code` using **existing BonusFoundry page components and design conventions**. Inspect the repository first; prefer reusable provider templates, data records, CTA components, internal links, and existing styling rather than duplicating code. If TransferGo already exists in a provider registry, extend it rather than introducing parallel, inconsistent records.

**Visible above the fold:**
- H1: `TransferGo Referral Link & Bonus: How to Join (2026)` (adjust for naturalness and length).
- Concise, independently useful **Quick answer** (approximately 45–75 words) including the direct link, registration/first-transfer requirements, €100 threshold, and clear distinction between what is and is not verified for the referred customer.
- High-visibility, real anchor `<a href="https://trgo.co/en/r/salmi01">` CTA such as `Open TransferGo Invite Link`, placed prominently near the top; repeat a relevant CTA after the steps and near the conclusion without excessive duplication. Ensure it is keyboard accessible, usable on mobile, and points to the actual invite link rather than an intermediary redirect. If opening a new tab, use appropriate `rel` attributes; preserve site-wide disclosure conventions.
- Show the actual invite URL in selectable/copyable text, not only behind a button, so both people and crawlers can see it.
- A compact informational table or fact list: provider name, invite URL, offer proof date, qualifying transfer minimum (€100 in the observed offer), new-customer requirement, international **and cross-currency** transfer, reward for a referred customer (`Not verified for this invite; check the offer displayed by TransferGo`), referrer reward (`€5 in the account owner's app, not a customer welcome bonus`).
- A clearly visible disclosure: `BonusFoundry may earn a referral reward if you register through this link and complete an eligible transfer. BonusFoundry is independent of TransferGo.` Adapt to existing publisher policies.

**Page body:**
1. `How to use the TransferGo referral link` — click the above URL, register as a new user through that flow, meet any verification requirements, check the offer displayed in the app, send an eligible first international transfer of at least €100 to another person in a different currency, and wait for completion. Do not imply that any transfer automatically guarantees a new-user bonus.
2. `TransferGo referral requirements` — new users, transfer minimum, cross-border **and different currency**, actual transfer completion, not self-transfer/not to inviter, approved funding method, eligible account verification, possible six-month qualification window as specified in T&Cs.
3. `Does the referred friend get a TransferGo bonus?` — prominently and candidly state that the owner's screenshot demonstrates only the inviter's €5 reward; any incentive for the invitee depends on what TransferGo offers them at registration. Avoid headings like `Get €5 with code salmi01`.
4. `What does the inviter earn?` — one short secondary section: €5 per successful qualifying referral shown in the owner's app as of Oct 18, 2026, conditional and subject to change. Only here, mention referrer claim window of 30 days. Avoid repeatedly focusing on the inviter's income.
5. `Why do some TransferGo pages mention €20?` — clarify that the public marketing landing page and individual in-app offers can differ, and the Terms explicitly allow programme/user-specific differences; no claim that everyone receives €20 or €5.
6. `TransferGo invite link vs. invite code` — the confirmed asset is a **link**, `https://trgo.co/en/r/salmi01`. `salmi01` appears in the URL path; **do not assert** that it is an independently verified, manually enterable promo code. TransferGo supports invite codes generally, but the owner's separate invite code was not provided. Include related keyword phrases in explanatory text naturally.
7. `Common reasons a referral doesn't qualify` — already-registered users; wrong signup sequence; self-transfers; same-currency transfers; disallowed payment sources; uncompleted transfers; account verification; cookies/link attribution where applicable.
8. `Frequently asked questions` — original, useful answers to 6–9 questions addressing referral link, code vs. link, €100 minimum, whether the new customer receives money, eligible countries/currencies, €20 discrepancy, when rewards arrive, restrictions, whether multiple invitations are permitted. Do not invent country eligibility or transfer time estimates.
9. `Official sources and verification` — a clear linked table with source, what it confirms, and checked date; mark the app observation as `Owner app screenshot, October 18, 2026 (specific account)` and do not present it as an official public universal offer.
10. `Last verified` date and editorial/author information using real existing BonusFoundry conventions. Do not update dates automatically unless an actual verification was performed. If a future review changes the offer, update both content and any structured data coherently.

Provide real reader value: practical warnings, concise examples of non-qualifying transfers, offer discrepancy explanation, and actionable checks—not filler paragraphs invented for length. No fake app ratings, conversion numbers, special promotions, exclusivity, or guaranteed friend-side discount.

## Goal 2 — Implement technical SEO, AI-search readiness, and discoverability

**Target search intents (natural placement, not repetitive exact matching):**
- Primary: `transfergo referral code`, `transfergo referral link`, `transfergo bonus`
- Secondary: `transfer go bonus`, `transfergo invite a friend`, `transfergo refer a friend`, `transfergo referral program`, `transfergo invite link`, `transfergo promo code`, `transfergo €100 referral`

**Metadata and indexing:**
- Suggested title: `TransferGo Referral Link & Bonus (2026) | BonusFoundry` (adapt if a better concise title fits target intent).
- Suggested meta description: `TransferGo referral link: https://trgo.co/en/r/salmi01. Learn how to sign up, meet the €100 transfer requirement and check current bonus eligibility.` IMPORTANT: Keep the actual referral URL **only if** the final meta description stays readable and within practical search-snippet length. Google can rewrite snippets and cannot guarantee visibility of the link in results; display the link prominently in on-page HTML regardless.
- One logical H1, clear H2/H3 hierarchy, canonical URL pointing to the page, indexable HTML-rendered content, and appropriate `robots` metadata.
- Page included in the `/providers` index, internal search/registry where applicable, relevant money-transfer guides and referral-code explainer pages, navigational breadcrumbs, and XML sitemap. Add contextually relevant internal links to/from related provider pages without irrelevant or sitewide mass-link injection.
- Use existing site metadata abstraction and consistent Open Graph/Twitter preview tags. Add a lightweight, appropriate social-preview image only if existing site tooling supports it; no need to fabricate a promotional offer graphic.
- Avoid duplicate thin variants for each keyword; use a single canonical page unless repository architecture already makes a parent TransferGo profile necessary. Any alternate route must not compete with the canonical.
- Ensure responsive layout, performant page loading, semantic HTML, readable text, accessible link/button labels, and no layout shifts introduced by new components.

**Structured data (only if factual and eligible):**
- `BreadcrumbList` for actual breadcrumb links.
- `WebPage` or relevant existing page schema with consistent `name`, `description`, canonical `url`, publication/review fields when verifiable, and existing publisher details.
- `Organization` data should reuse established site-wide BonusFoundry identity; do not fabricate publisher expertise or third-party affiliation.
- FAQ questions and answers must be visibly present in HTML. Only add `FAQPage` schema if appropriate to current Google policy and repository conventions; do **not** promise FAQ rich results for a commercial provider page.
- No misleading `Offer`, `AggregateRating`, `Review`, or `HowTo` markup describing an unconfirmed customer reward.
- Check schema output for conflicting bonuses, dates, currencies, or code/link claims.

**AEO / GEO practices:**
- Direct, quotable answer close to the top and each question; provider name present in standalone answers; unambiguous attribution of facts to official Terms vs account-specific screenshot.
- Clearly distinguish `referrer reward` vs `referred-user reward`, which is central to reliability of this offer.
- Cite official sources inline adjacent to nonobvious or changing claims (especially official requirements and reward variability), plus an accessible source list.
- Prefer information gain through the verified example and discrepancy analysis. No manipulative claims about being endorsed by TransferGo or guaranteed citations by AI services.
- Maintain accurate content even when read out of context as a search snippet or AI-generated summary.
- Preserve the site's English language conventions and existing content architecture; do not translate the page into French simply because one official source is French.

## Goal 3 — Integration, compliance and final validation

- Review existing BonusFoundry pages for patterns (especially Ria, Paysend, and other link-based referral providers); keep visual and technical consistency without copying their financial offers.
- Confirm all TransferGo strings, link targets, metadata, and schema are scoped to **TransferGo only**. Do not accidentally change other provider offers.
- Respect the official programme's restriction on pay-per-click and paid/automated lead generation. Do not suggest, create, or connect Google Ads campaigns to this personal referral link.
- The terms do **not expressly provide blanket authorization for every form of public SEO promotion**; avoid asserting that publishing on BonusFoundry is officially approved. If any policy or eligibility question remains open, document it for owner review instead of inventing permission.
- Keep all other existing application functionality intact. Add/update tests in the repository's established style.
- Verify the CTA has exactly `https://trgo.co/en/r/salmi01` as the destination and works on mobile and desktop; don't invent an unverified manual code.
- Check that the referral link is present in the first screen and within the body HTML, and, if practical and readable, in the meta description.
- Check title, description, canonical, OG metadata, JSON-LD, breadcrumbs, internal links, sitemap, and absence of 404/broken source links.
- Validate that the page does not incorrectly claim a €5 or €20 **new-user** reward. Verify that €100 is not asserted as a universal threshold across all accounts/regions.
- Run available lint, type-check, build and appropriate tests; report actual outcomes, not assumptions.
- Return a final Codex summary with: files changed, content and SEO decisions, URLs inserted, validation commands/results, policy caveats, and outstanding issues. Do not declare completion for unverified actions.

## Suggested on-page copy (adapt to project conventions)

**Quick answer**

> TransferGo has a refer-a-friend programme that lets new customers register through an invite link. BonusFoundry's TransferGo invitation is https://trgo.co/en/r/salmi01. The current account-specific invitation shows a minimum first international transfer of €100, with additional eligibility and currency requirements. The invitation owner may receive €5 for a qualifying referral. A bonus for the newly invited customer has **not** been confirmed for this link, so check the offer displayed by TransferGo before you send money.

**Suggested FAQ answer: “Does the TransferGo referral link give new users €5?”**

> Not necessarily. The €5 visible in the BonusFoundry owner's TransferGo app is the reward for the person making the referral. TransferGo says rewards and discounts for invited users can vary. Check the offer shown in your own signup flow instead of assuming you will receive €5.

**Suggested FAQ answer: “Is salmi01 a TransferGo promo code?”**

> `salmi01` is part of BonusFoundry's invite URL: https://trgo.co/en/r/salmi01. TransferGo also supports invite codes, but a separately enterable code for this account has not been verified. The safest method is to follow the complete invitation link before creating your account.

## Acceptance criteria

- [ ] One English, indexable TransferGo referral page exists at the agreed canonical route.
- [ ] The exact invite link is conspicuous, usable, and visibly written in on-page text.
- [ ] Source distinction is correct; no misleading referred-user reward claim.
- [ ] Requirements accurately cover €100 (observed offer), international and different-currency transfer, new-user status, disallowed transfer patterns, and identity/payment restrictions.
- [ ] Metadata, breadcrumbs, internal links, sitemap, and relevant valid structured data are implemented.
- [ ] Content answers search and AI questions naturally without repeating target keywords excessively.
- [ ] Official sources are clickable and dated; public €20 vs in-app €5 discrepancy is explained.
- [ ] Referrer income gets only brief, secondary treatment.
- [ ] No PPC or paid/automated lead-generation instructions are introduced.
- [ ] Existing provider pages are unaffected and project validation results are reported.

**Execution order:** Inspect repository → Goal 1 → Goal 2 → Goal 3 → summarize changes and remaining risks. Prefer one focused change set; avoid unrelated refactors.
