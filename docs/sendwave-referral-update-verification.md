# Sendwave referral page verification

## Current update — 12 September 2026

The owner supplied an official Sendwave app screenshot showing `I4H9G` and €10 credit for the new user, and separately reports a $10 offer. The page, shared provider data, FAQ, metadata, Morocco guide and llms.txt now present €10 / $10 welcome credit with that source distinction. Referrer reward details have been removed; a simple referral disclosure remains. See [the evidence record](sendwave-app-offer-evidence.md).

The September 11 variable-only wording and checks below are historical, superseded by this new evidence and owner instruction. The app screenshot was reviewed on September 12; the public terms retain their September 11 review date. Prior `.next` audit artifacts were temporary and were cleared by development-server startup.

Validation for this update: lint and TypeScript checks passed. The existing development server returned HTTP 200 for both Sendwave pages and the Morocco guide, including their CSS. Rendered HTML contains €10 / $10 and the source distinction; FAQ JSON-LD answers match visible content. The referral page has the updated title, one H1 and a facts table. Neither Sendwave page describes the referrer's reward. No second server or concurrent production build was started.

## Historical verification — 11 September 2026

Reviewed and implemented on 11 September 2026 for `/providers/sendwave/referral-code`.

## Result

The page identifies `I4H9G` as BonusFoundry's owner-supplied Sendwave referral code. It now includes a direct answer, visible code and copy action, ten-row HTML facts table, instructions, eligibility, variable reward explanation, credit validity, restrictions, nine FAQs, official sources and referral disclosure. The existing design system and URL are preserved.

The referral facts, FAQ answers, code and review date live in `data/sendwave.ts` and feed the shared provider record. The FAQ JSON-LD uses the same answers as the visible FAQ. No Product, Offer, AggregateRating or fixed reward value was added.

## First-party review

All three requested URLs returned HTTP 200 via direct HTTP retrieval:

- [Sendwave referral-program terms](https://www.sendwave.com/en/terms-and-conditions/referral-program): code entry before completing the first transaction; eligible new users have no previous app transaction; app-displayed referrer reward; credits after a successful first qualifying transaction; future-transfer credits; country, corridor, minimum-transfer and KYC restrictions; 12-month credit validity unless otherwise specified; cancellation for misuse and possible program changes.
- [Sendwave referral-program article](https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits): personal codes, possible rewards for both participants, and reward amounts varying by country and promotion.
- [Separate Sendwave promo-code terms](https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion): confirms the separate promotional campaign rules. Linked only in the referral-versus-promo explanation on the referral page.

These sources verify the program mechanics, not Sendwave's acceptance of the individual owner-supplied code or a particular user's reward. That distinction is visible on the page. Older country/service source dates were retained.

## Checks completed

- `npm run build`: passed; all 76 static pages generated.
- `npm run lint`: passed with no warnings after removing the now-unused generic offer constant.
- `npm run typecheck`: passed.
- `git diff --check`: passed.
- Production HTTP response: 200; no noindex header or metadata.
- Exact title: `Sendwave Referral Code I4H9G — Bonus & Terms (2026) | BonusFoundry`.
- Exact description: `Sendwave referral code: I4H9G. Enter it in the Sendwave app before your first transaction. Reward amount varies by country and promotion; official terms apply.`
- Open Graph title matches the title without the brand suffix.
- Canonical: `https://bonusfoundry.com/providers/sendwave/referral-code`.
- One H1: `Sendwave Referral Code I4H9G`.
- Code and facts table present in server-rendered HTML with scripts removed.
- Valid JSON-LD; all nine referral-page FAQ answers exactly match the visible answers.
- Both Sendwave pages tested in Chrome at 320, 390, 768 and 1440 pixels: no horizontal overflow, broken images or runtime/console errors.
- Desktop and mobile screenshots visually reviewed; copy action writes `I4H9G` to the clipboard and shows confirmation.
- All 26 internal links discovered on the two Sendwave pages returned successful responses.
- Neither Sendwave page contains a fixed currency reward or obsolete before-signup instruction.
- Repository Sendwave references checked: preserved the owner-supplied code; corrected the shared provider data, provider-page helper text and Morocco guide referral terminology.
- Sitemap includes the existing referral URL.
- Robots output is `User-Agent: *` with `Allow: /`. OAI-SearchBot is not blocked. No robots or GPTBot policy change was needed.

The build was followed only by removing an unused constant; final lint and type checks cover that cleanup. Runtime checks used the successful production build.

## Files changed

- `app/providers/[slug]/referral-code/page.tsx`: Sendwave page and metadata routing.
- `app/providers/[slug]/page.tsx`: precise Sendwave code-entry wording.
- `components/sendwave-referral-page.tsx`: referral page using existing layout and UI components.
- `data/sendwave.ts`: shared referral facts, metadata, source URLs and FAQs.
- `data/providers.ts`: canonical provider record, source attribution, review history and eligibility.
- `components/morocco-guide-tables.tsx`: descriptive referral link and entry timing.
- `content/guides/best-money-transfer-apps-to-morocco.mdx`: referral-code distinction and eligibility.
- `public/llms.txt`: consistent link to the referral page.
- `docs/sendwave-referral-update-verification.md`: this report.

Local verification artifacts are under `.next/sendwave-audit/` (HTML, JSON report, mobile and desktop screenshots). The browser audit helper is `.next/verify-sendwave.mjs`; these temporary files are ignored by Git. The supplied task document was left unchanged. Changes are local and have not been deployed.
