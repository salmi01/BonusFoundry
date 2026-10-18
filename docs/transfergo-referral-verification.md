# TransferGo referral implementation and verification

Verified October 18, 2026. Implementation is local; deployment and production indexing were not performed.

## Evidence and content decisions

- Reviewed both owner-provided screenshots in the conversation. The invitation screen shows `https://trgo.co/en/r/salmi01`, a €5 reward for the inviter, and a €100 transfer threshold. The rules screen confirms a new account, a first international transfer of at least €100, recipient/funding restrictions, account checks, unlimited successful invitations and a 30-day referrer claim window. Screenshots were not published or added to public assets.
- Rechecked the official [Refer a Friend terms](https://www.transfergo.com/terms-conditions/refer-a-friend-programme), effective September 30, 2025, and the [French referral overview](https://www.transfergo.com/fr/parrainez-un-ami) live. The latter still advertises €20 for inviters. Terms clauses 3.1–3.3 permit account/programme differences; the specific account evidence remains €5. Neither source establishes a new-customer incentive for this invitation.
- The page consistently distinguishes inviter earnings from an unverified referred-customer reward. The €100 first-transfer rule is attributed to this account's observed offer, rather than asserted worldwide. Qualification includes cross-border AND cross-currency transfers, completion, eligible funding, new-user registration, account checks, attribution cookies and the terms' six-month qualification window.
- The owner subsequently personalized the invitation on October 18, 2026 and confirmed both the new link `https://trgo.co/en/r/bonus2026` and the directly enterable invite code `bonus2026`. The earlier screenshot URL is historical evidence and is superseded for signup. The 30-day claim deadline appears only in the short inviter section.
- Nine FAQs answer the reader's practical questions. Official sources are linked inline and in a dated source table; the app evidence is explicitly account-specific. Editorial identity reuses BonusFoundry's existing team convention.

## Files changed

- `data/transfergo-referral.ts`: shared link, evidence date, copy, requirements, FAQs and provider record.
- `data/providers.ts`: appends TransferGo to the existing registry. Existing ordering is preserved so fallback related-provider selections do not change.
- `components/transfergo-referral-page.tsx`: referral page and a separate, concise transfer overview using existing components and styles.
- `app/(main)/providers/[slug]/referral-code/page.tsx`: TransferGo rendering and metadata branch; all other provider branches retain their behavior.
- `app/(main)/providers/[slug]/page.tsx`: distinct TransferGo service/transfer-check overview and metadata.
- `components/paysend-referral-page.tsx`: one contextual TransferGo related link. Paysend offers and schema are unchanged.
- `content/guides/promo-code-vs-referral-code.mdx` and `content/guides/what-to-check-before-using-money-transfer-referral-link.mdx`: contextual TransferGo examples and links; modified dates reflect these edits.
- `scripts/verify-transfergo-rendered.mjs`: focused rendered-content, metadata, linking, evidence and optional browser checks.
- `docs/transfergo-referral-verification.md`: this verification record.

The task brief was already an untracked user file and was not edited. Build-generated `next-env.d.ts` and `tsconfig.tsbuildinfo` changes were restored to their original contents.

## SEO and inserted URLs

- Canonical referral route: `/providers/transfergo/referral-code`. One logical H1, English server-rendered content, explicit index/follow, shared Open Graph/Twitter image, canonical and preview metadata.
- Title: `TransferGo Referral Code bonus2026 (2026) | BonusFoundry`.
- Description: `Use TransferGo invite code bonus2026 or https://trgo.co/en/r/bonus2026. Check the observed €100 transfer requirement; a new-customer bonus is not verified.` (155 characters).
- Exact direct invitation in real anchors, visible selectable URL text and repeated contextual CTAs: `https://trgo.co/en/r/bonus2026`. Uses `rel="nofollow sponsored"` and same-tab navigation.
- Official evidence URLs: `https://www.transfergo.com/terms-conditions/refer-a-friend-programme` and `https://www.transfergo.com/fr/parrainez-un-ami`.
- Service overview links to `https://www.transfergo.com/` and the canonical referral guide. `/providers/transfergo` has distinct overview content and its own canonical, following existing architecture.
- Registry-driven provider index and XML sitemap include both routes automatically with October 18, 2026 dates. Incoming links exist from the provider index, overview, two guides and Paysend's related-resources section. Referral page links back to relevant guides, Paysend, Ria and editorial policies. No corridor eligibility was invented.
- `WebPage` and `BreadcrumbList` reuse the established publisher identity. Visible FAQs have no `FAQPage` markup: this commercial page is not being presented as eligible for Google's restricted FAQ rich results. No `Offer`, `Review`, `AggregateRating` or `HowTo` markup was introduced.

## Validation results

- `npm run lint`: PASS after correcting JSX apostrophe escaping.
- `npm run typecheck`: PASS.
- `npm run build`: PASS, 78 generated pages; includes build lint and type validation.
- `npm run check:internal-links`: PASS, 24 provider pages and 444 directional corridor relationship checks.
- `node scripts/verify-transfergo-rendered.mjs http://localhost:3104 9228`: PASS. Checks actual HTTP 200 pages, exact invitation destinations, crawlable text, fact/source distinctions, heading count, metadata, canonical, robots, JSON-LD, nine visible FAQs, sitemap and incoming/outgoing internal links.
- The same verifier's isolated headless Chrome checks: PASS at 320×740, 390×844, 768×900 and 1440×1000. CTA and written invitation are in the first screen, touch target is at least 44 px, keyboard focus works, heading order is logical, no empty links, no horizontal overflow and no runtime exceptions. Mobile and desktop screenshots were visually inspected.
- Regression comparison against pre-build HTML: PASS for Ria, Sendwave, Taptap Send and Paysend referral content and JSON-LD, allowing only the intentional new related link on Paysend.
- Exact external invitation check: HTTP 200, redirecting to `https://www.transfergo.com/referral-gift?deep_link_value=applyRafCode&lang=en&rafCode=bonus2026&fname=S.+S.`. No account creation, transfer, actual referral attribution or reward payout was attempted. Public terms and marketing links loaded successfully during live research.
- `git diff --check`: PASS.
- QA artifacts, including server HTML, plain text, viewport screenshots and browser findings, are stored under ignored `.next-dev/transfergo-audit/`.

## Policy caveat and outstanding checks

Terms clause 2.15 prohibits PPC and other paid or automated lead-generation services for this referral programme. No campaign, advertising configuration, paid promotion or automated lead-generation service was created or connected. Existing site analytics/advertising-tag code was not modified.

The terms do not expressly give blanket permission for every form of public SEO promotion. The rules screenshot allows referrals to people the inviter does not know personally, but that does not resolve every publisher-policy question. Owner review with TransferGo remains appropriate for this personal invitation's use on a public commercial publisher; no official approval is claimed.

The new-customer reward, account/route-specific signup eligibility and end-to-end attribution/payout remain unverified. The personalized invite code is owner-confirmed; a completed signup with it has not been tested. Deployment, production-route availability, search indexing, ranking and AI citations have not been claimed or tested. Recheck the account offer and public sources before changing the fixed evidence date or reward claims.

## Personalized invitation update (October 18, 2026)

The referral page, transfer overview, provider registry, metadata, FAQ, signup steps, copy button and code explainer now use `bonus2026` and `https://trgo.co/en/r/bonus2026`. The owner's explicit confirmation establishes the direct invite code; the earlier screenshot does not show this personalized code. No reward terms were inferred from the code change. The new link returned HTTP 200 at TransferGo's referral-gift landing page with `rafCode=bonus2026`.

Personalization validation: production build (including lint and type checks), rendered HTML/metadata/link/code checks, internal-link checks, and isolated headless browser checks at 320/390/768/1440 px all passed. The personalized description is 155 characters. The earlier regression baseline comparison belongs to the initial implementation; no baseline files were available during this follow-up.
