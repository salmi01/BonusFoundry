# ACE Money Transfer implementation and verification

Reviewed and implemented: 18 October 2026. Scope: ACE Money Transfer only.

## Delivered

- `/providers/ace-money-transfer/referral-code`: English referral landing page with code `4262293`, both exact app-generated invitation anchors, copy control with shared accessible feedback, signup fallback, referral disclosure, EUR/GBP conditions, all 11 currency rows, Nigeria exclusion, wallet-credit restrictions, instructions, 10 visible anchored FAQs, contextual official citations and editorial attribution.
- `/providers/ace-money-transfer`: distinct service overview linking to referral details.
- Unique title/description, absolute rendered canonical, OG/Twitter metadata using the existing hosted BonusFoundry asset, English document language, WebPage schema with ACE as its subject, site identity references, four-level BreadcrumbList, and FAQPage matching visible answers.
- Provider registration automatically supplies the directory links, static route parameters and both sitemap entries. No separate sitemap architecture or unsupported corridor relationships were added.

## Files

| File | Purpose |
| --- | --- |
| `data/ace-money-transfer.ts` | Central ACE invitation, code, rewards, review date, FAQ, sources and provider record |
| `components/ace-money-transfer-page.tsx` | Referral page and distinct overview, using existing components and design tokens |
| `data/providers.ts` | Append ACE to the existing registry, preserving existing provider order and fallback related-provider selection |
| `app/(main)/providers/[slug]/page.tsx` | Select ACE overview and metadata |
| `app/(main)/providers/[slug]/referral-code/page.tsx` | Select ACE referral page and metadata |
| `scripts/verify-ace-referral.ts` | ACE data, generated HTML, schema and optional HTTP regression checks |
| `package.json` | Add `npm run check:ace` |
| `docs/ace-money-transfer-verification.md` | This report |

Other providers' referral assets were not edited. The supplied task document was left intact.

## Official sources consulted

1. [ACE Wallet / Invite a Friend legal terms](https://acemoneytransfer.com/terms-and-conditions-wallet), reopened on 18 October 2026. The effective date remains 20 November 2025. Confirmed registration attribution, paid transfer minimums, checks, dual rewards outside Nigeria, Nigeria's separate policy, wallet restrictions and ACE's discretion over rewards.
2. [ACE explanatory referral guide](https://acemoneytransfer.com/blog/how-to-earn-big-with-the-ace-invite-a-friend-program-instant-rewards-wallet-credits-monthly-prizes), published 21 November 2025. The standard English endpoint failed in the research browser. Its English article content was available through the [official indexed localized edition](https://acemoneytransfer.com/it/blog/how-to-earn-big-with-the-ace-invite-a-friend-program-instant-rewards-wallet-credits-monthly-prizes?category=blog%2Fcategory%2Fbusiness-updates), including all 11 currency reward examples. The published page links to the requested standard guide URL.

The guide's Nigeria amount and wallet-use wording differ from the legal text. The implementation follows the legal terms, excludes Nigeria from the invited-friend reward, omits the Nigerian referrer's monetary award, and avoids a numeric per-transfer wallet-use maximum. No newer effective legal rules were visible at review. The supplied invitation and owner-provided code are distinguished from publicly documented program rules; no completed-transfer test or code acceptance is claimed.

## Executed verification

- `npm run lint`: passed.
- `npm run typecheck`: passed, including the new regression script.
- `npm run build`: passed; 80 static pages generated. Webpack emitted cache snapshot/dependency warnings for the existing MDX loader, without compilation, type or build failures.
- `npm run check:ace`: passed against production HTML. Confirms exact code; all five referral parameters and decoded nested destinations; both complete CTA hrefs and sponsored rel; EUR/GBP amounts; currency row data; visible disclosure/Nigeria/wallet wording; accessible copy status; title/description/canonical/OG URL; English WebPage identity; four breadcrumbs; 10 visible FAQ answers and anchor/schema agreement; directory/overview links; and sitemap inclusion.
- `node node_modules/tsx/dist/cli.mjs scripts/verify-ace-referral.ts http://localhost:3120`: passed. ACE page, overview, provider index, sitemap, hosted OG asset, all 12 ACE CSS/JS assets and all linked internal destinations returned HTTP 200.
- `npm run check:internal-links`: passed for 15 corridor pages, 26 provider pages and 444 relationship directions.
- `node scripts/check-preview.mjs http://localhost:3120`: passed existing preview smoke checks; all 14 referenced assets returned HTTP 200 and Tailwind utilities were present.
- Prettier checks on new TypeScript/TSX files and `git diff --check`: passed.

## Manual checklist and remaining limits

- [x] Core code, invitation, offer, FAQs and disclosure are present in server-rendered HTML and remain readable without JavaScript.
- [x] Both invitation anchors preserve the entire supplied URL; the long URL is not visible UI copy or metadata.
- [x] Table has explicit currency units, scoped headers, a caption and a named keyboard-focusable horizontal scroll region. Buttons use existing mobile sizing and clipboard feedback components.
- [x] No unsupported corridor coverage, ratings, offer expiry, cash payout or provider endorsement is claimed.
- [ ] Visual inspection at mobile and desktop widths and a real clipboard click: unavailable because this session exposed no browser automation surface (`iab` creation returned “Browser is not available”). Responsive classes and shared clipboard implementation were reviewed, but actual layout/clipboard behavior was not browser-tested.
- [ ] ACE app/signup acceptance and real qualifying transfer: not exercised. Public sources do not verify an individual invitation's acceptance.

Changes are local; deployment was not performed. Production preview was started at `http://localhost:3120`.
