# Codex goal — Ria pages: factual refresh + in-page app screenshot

**Verification date:** 2026-11-15. **Scope (only):**
- https://bonusfoundry.com/providers/ria
- https://bonusfoundry.com/providers/ria/referral-code

These pages rank well. **Make the smallest possible diff.** Preserve URLs, slugs, SEO titles/descriptions, canonical/hreflang, H1–H3, section order, tables, FAQ questions, JSON-LD structure, links, CTAs, disclosures, styling, and referral code **`9RMU-ENB7`**. Do not refactor, redesign, or touch unrelated pages.

## 1. Screenshot: exact source and display location (required)

The screenshot is supplied with this goal in the ZIP package at this **repository-relative source path**:

`public/images/providers/ria/ria-referral-offer-fr-2026-11-15.jpg`

- **Before editing**, check that this image file actually exists in the repository (709 × 1536 px). If missing, ask for it; **do not** fabricate an image or pretend Codex can read the ChatGPT attachment or `/mnt/data` on the deployment server.
- If the project uses a conventional `public/` folder, the **public website URL** is:
  `/images/providers/ria/ria-referral-offer-fr-2026-11-15.jpg`
  Use the project's existing image component/pattern and confirm this URL resolves after build. If the repository uses a different static-asset convention, adapt the placement while preserving the same filename and working URL.
- **Display the actual screenshot on both Ria pages**, reusing this one asset:
  - `/providers/ria`: within the existing **Reward summary** section, immediately after its existing reward information (no new section or heading).
  - `/providers/ria/referral-code`: immediately after the existing **Ria referral rewards by country** table and its source/qualification note (no new section or heading).
- Keep the original image unedited. Display it responsively with preserved aspect ratio, a restrained max width (~300–360 px on desktop), lazy loading, descriptive alt text, and a short caption, e.g.:
  *“Ria app referral offer shown on a France-based account, checked November 15, 2026. Amounts and eligibility may vary.”*
- Do not add a second copy of the file, a gallery, pop-up, new H2, or layout overhaul. Ensure the screenshot is visible on mobile and desktop and does not cause layout shift.

## 2. Update only outdated facts

**Official Ria Help Center** (article updated **October 16, 2026**):
https://help.riamoneytransfer.com/hc/en-us/articles/4416994463633-Ria-s-refer-a-friend-program

- Ria now lists **10 eligible countries of residence**: **Australia, Belgium, Canada, Chile, France, Germany, Italy, Spain, United Kingdom, United States**. **Malaysia is no longer listed.** Fix all *current* references to 11 countries, Malaysia's eligibility, the country table (remove Malaysia row), FAQ answers, verification summary, source notes, and corresponding current structured data on both pages. Do not confuse referral-program eligibility with general Ria transfer coverage.
- Correct descriptions that say the **main** official article was updated October 5: its current revision is **October 16, 2026**. Do not invent revision dates for other Ria articles.
- The attached screenshot is **direct evidence of the offer shown in one France-based Ria account on November 15, 2026**, not proof of a universal public French offer:
  - **Referrer:** earns **€20** for each referred friend who completes their **first international transfer**.
  - **Referred friend:** gets a **€20 promo code on their first international transfer**, **plus other eligible offers**.
  - **Code shown:** `9RMU-ENB7`.
- In the existing France row on `/providers/ria/referral-code`, replace generic reward placeholders with these accurately qualified amounts; update the existing **“How much is the Ria referral reward in France?”** FAQ answer and the closest existing reward summary on `/providers/ria`. Keep the broader caveat that offers may vary by account, location, and time. **Do not call the friend's promo code a €20 cash payout.**
- Do not invent a numeric minimum transfer, reward expiry, additional eligibility condition, or guarantee that every French customer receives this offer. Preserve accurate referral mechanics and the existing code-verification caveat.

## 3. Dates and SEO protection

- Set visible **Last verified** and **Last content update** to **November 15, 2026** on **both** pages, using each page's existing date format. Also update any current **Last reviewed / Last offer update / source Last checked** field and relevant `dateModified` metadata **only where it refers to this actual refresh**.
- Preserve original publication dates, historical changelog entries, source article publication dates, and unrelated metadata. Do not change existing SEO copy unless a factual correction requires it.
- Keep source attribution distinct: **official Ria Help Center** for general program rules; **BonusFoundry's own Ria-app screenshot** for this account-specific €20/€20 offer.

## 4. Acceptance criteria

1. Both URLs retain the existing SEO structure and code `9RMU-ENB7`.
2. Both pages show the **real screenshot**, loaded from the repository asset path above, in the specified existing sections; no broken image or oversized mobile layout.
3. All current eligibility references say **10 countries**, without Malaysia; France reward text correctly distinguishes **€20 referrer reward** and **€20 friend promo code**.
4. Both pages display **Last verified** and **Last content update: November 15, 2026**, with matching applicable current metadata.
5. Run available checks/build. Report only changed files, factual changes, image URL, updated date fields, and test result. **No unrelated changes.**
