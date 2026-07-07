# Goal: Create TapTap Send Bonus Credit Guide

## Context

We are working on BonusFoundry.

BonusFoundry is an independent knowledge base for international money transfer referral programs, welcome bonuses and signup promotions.

BonusFoundry is not a coupon website, not an affiliate blog and not a referral code directory.

The goal is to create a new educational guide answering the user intent:

```txt
How to use TapTap Send bonus credit
```

The guide must also answer related questions:

- When is TapTap Send bonus credit applied?
- Why did TapTap Send bonus credit not apply?
- Can TapTap Send bonus credit be combined with referral rewards?
- Is TapTap Send bonus credit automatic?
- Can TapTap Send bonus credit be added after sending money?
- What should users check before making their first transfer?

Follow the editorial rules in:

- `/docs/CONTENT_GENERATION_SPEC.md`
- `/docs/PROMPT_LIBRARY.md`

Use the `Guide` prompt from `/docs/PROMPT_LIBRARY.md` as the base structure, but adapt it to this specific TapTap Send bonus credit intent.

The guide must be factual, neutral, structured, concise and evidence-based.

Do not write marketing copy.

Do not invent any information.

---

## Required Output

Create or update a guide page for:

```txt
How to Use TapTap Send Bonus Credit
```

Preferred route if no similar page already exists:

```txt
/guides/how-to-use-taptap-send-bonus-credit
```

If the existing routing structure uses another guide pattern, follow the existing project convention.

---

## Sitemap / Duplicate Prevention

Before creating the guide, inspect the current sitemap:

```txt
https://bonusfoundry.com/sitemap.xml
```

Use the sitemap and the local codebase to check whether a similar page already exists.

Do not create duplicate or near-duplicate pages.

Specifically check for existing pages about:

- TapTap Send referral code
- TapTap Send bonus
- TapTap Send promo code
- TapTap Send welcome bonus
- TapTap Send signup bonus
- TapTap Send bonus credit
- How TapTap Send referral rewards work
- How to use referral rewards
- How to avoid missing a referral reward
- Referral code vs promo code

If a very similar guide already exists, update and expand the existing page instead of creating a new route.

If no similar page exists, create the new guide at:

```txt
/guides/how-to-use-taptap-send-bonus-credit
```

If a related but broader page exists, keep this new guide focused only on the specific intent:

```txt
How to use TapTap Send bonus credit
```

Do not duplicate generic referral explanations that already exist elsewhere.

Instead, link to existing guides such as:

- referral code vs promo code
- how referral rewards work
- how to avoid missing a referral reward
- TapTap Send referral page
- TapTap Send provider page

Use exact existing routes found in the sitemap or codebase.

Do not create broken internal links.

---

## Research Requirements

Before writing the page, research TapTap Send using only official or highly reliable sources in this order:

1. Official TapTap Send website
2. TapTap Send referral terms
3. TapTap Send promotion terms
4. TapTap Send help center
5. TapTap Send FAQ
6. TapTap Send legal terms
7. Official TapTap Send app information, if available
8. Official TapTap Send support documentation

Do not use referral blogs, coupon websites or unofficial directories as sources of truth.

If official TapTap Send documentation does not verify a detail, write clearly:

```txt
BonusFoundry could not verify this information from official TapTap Send documentation.
```

Do not invent:

- bonus amounts;
- reward amounts;
- expiration rules;
- eligibility rules;
- supported countries;
- minimum transfer amounts;
- combination rules;
- timing rules;
- app behavior;
- support outcomes.

If a rule appears to be account-specific, country-specific, corridor-specific or promotion-specific, explain that clearly.

---

## Page Structure

The page must follow this structure:

1. Quick Answer
2. Key Facts
3. What Is TapTap Send Bonus Credit?
4. How to Use TapTap Send Bonus Credit
5. When Is TapTap Send Bonus Credit Applied?
6. Can TapTap Send Bonus Credit Be Combined With Referral Rewards?
7. Why Didn't My TapTap Send Bonus Credit Apply?
8. Common Mistakes
9. Troubleshooting Checklist
10. What to Do Before Your First Transfer
11. Official Resources
12. FAQ
13. Related Guides
14. Related Provider Pages
15. Disclosure

Use the existing guide page components, typography, metadata helpers and static content patterns from the codebase.

Do not introduce a new page layout system unless the project already requires it.

---

## Quick Answer Requirements

The first paragraph must answer the main question immediately.

The Quick Answer must explain:

- TapTap Send bonus credit is usually tied to a promotion, referral link or account-specific offer if verified;
- users should check the exact offer terms before sending money;
- BonusFoundry does not invent unverified bonus credit rules;
- if public official documentation is incomplete, say so clearly.

Example style:

```txt
TapTap Send bonus credit is usually applied through a promotion, referral link or account-specific offer. The exact rules may depend on the user's country, account status and current TapTap Send promotion. BonusFoundry could not verify every bonus credit condition from public official documentation, so users should check the offer details inside TapTap Send before sending money.
```

Only use this wording if it remains accurate after research.

---

## Writing Rules

Write like technical documentation.

Do not write like an affiliate website.

Avoid marketing language such as:

- incredible;
- best ever;
- amazing;
- guaranteed;
- limited-time deal;
- exclusive;
- don't miss;
- claim now.

Use short paragraphs.

Each section must answer one question.

Use tables where possible.

Use headings written as real user questions.

Separate official TapTap Send rules from BonusFoundry editorial advice.

Never invent a bonus amount.

Never invent eligibility rules.

Never invent expiration rules.

Never invent whether bonus credit can or cannot be combined with referral rewards unless verified from official documentation.

If a fact cannot be verified from official TapTap Send documentation, explain the uncertainty instead of guessing.

---

## Required Table: Key Facts

Add a `Key Facts` table.

Use this structure and adapt answers based on verified research:

| Question | Answer |
|---|---|
| Does TapTap Send use bonus credit? | Use verified answer or explain that BonusFoundry could not verify the full rule from official documentation. |
| Is bonus credit automatic? | Use verified answer or explain uncertainty. |
| Can bonus credit be combined with referral rewards? | Use verified answer or explain uncertainty. |
| When is bonus credit applied? | Use verified answer or explain uncertainty. |
| Where should users check the offer? | TapTap Send app, official promotion terms or official support documentation if verified. |
| What should users do if credit is missing? | Check offer terms, transfer requirements and contact TapTap Send support. |

Do not include any unverified amount or rule.

---

## Required Table: Troubleshooting

Add a troubleshooting table.

Use this structure:

| Problem | Possible Reason | What to Check |
|---|---|---|
| Bonus credit did not appear | Offer may not be active for the account | Check TapTap Send app offer details or official promotion terms |
| Bonus credit was not applied to the transfer | A minimum transfer, corridor or payment method rule may apply | Check the specific promotion conditions |
| Referral reward is missing | Referral requirements may not be completed | Check TapTap Send referral terms |
| User already had an account | New-user eligibility may apply | Check whether the offer is limited to new users |
| Offer expired | Promotion may have ended | Check the offer date and app notification |
| Credit cannot be combined | Some promotions may restrict stacking | Check official terms before sending money |

Only include rows that are safe, factual and clearly framed as possible explanations.

Do not present possible explanations as confirmed TapTap Send rules unless official documentation verifies them.

---

## Section Guidance

### What Is TapTap Send Bonus Credit?

Explain what bonus credit means in the context of money transfer promotions.

Clarify that bonus credit may differ from:

- referral reward;
- promo code;
- welcome bonus;
- exchange rate promotion;
- fee discount.

Do not claim how TapTap Send defines bonus credit unless verified.

### How to Use TapTap Send Bonus Credit

Create a practical step-by-step guide.

The steps should be cautious and verification-first.

Suggested structure:

1. Open TapTap Send or the official offer page.
2. Read the promotion or referral terms.
3. Check eligibility, country, corridor and transfer requirements.
4. Confirm whether the credit appears before or during transfer checkout.
5. Make sure the correct account, referral link or promotion is active.
6. Take screenshots of the offer before sending money.
7. Contact TapTap Send support if the credit does not appear.

Only include steps that are consistent with verified information.

### When Is TapTap Send Bonus Credit Applied?

Explain that timing may depend on official offer terms.

If exact timing cannot be verified, say so clearly.

Do not invent instant, post-transfer or delayed timing unless official documentation confirms it.

### Can TapTap Send Bonus Credit Be Combined With Referral Rewards?

Answer directly.

If official documentation does not clearly confirm stacking rules, write:

```txt
BonusFoundry could not verify from official TapTap Send documentation whether TapTap Send bonus credit can always be combined with referral rewards.
```

Explain that users should check the specific promotion terms before sending money.

### Why Didn't My TapTap Send Bonus Credit Apply?

List possible reasons, clearly framed as possible causes, not confirmed outcomes.

Examples:

- promotion was not active;
- user was not eligible;
- transfer did not meet minimum requirements;
- corridor was not eligible;
- payment method was not eligible;
- account was not new;
- referral link was not used correctly;
- promotion expired;
- TapTap Send requires manual support review.

Only keep causes that are safe and consistent with official documentation.

### What to Do Before Your First Transfer

Create a checklist.

The checklist should help users avoid missing a bonus credit or referral reward.

Include practical actions such as:

- read the offer terms;
- verify sender country and recipient country;
- check minimum transfer requirements;
- confirm whether a referral link or promo code is required;
- check whether the credit appears before confirming the transfer;
- keep screenshots;
- contact support if something is unclear.

---

## FAQ Requirements

Include FAQ answers for these questions:

1. How do I use TapTap Send bonus credit?
2. Is TapTap Send bonus credit applied automatically?
3. When does TapTap Send bonus credit appear?
4. Why did my TapTap Send bonus credit not apply?
5. Can I use TapTap Send bonus credit with a referral reward?
6. Can I add bonus credit after sending money?
7. Does TapTap Send bonus credit expire?
8. Is TapTap Send bonus credit the same as a referral reward?
9. Is TapTap Send bonus credit the same as a promo code?
10. What should I do if my TapTap Send bonus credit is missing?

Each FAQ answer must:

- answer immediately;
- stay under 150 words;
- avoid speculation;
- mention uncertainty when official documentation is not clear;
- link internally to related TapTap Send pages or referral guides where relevant;
- avoid repeating long explanations already covered in the main sections.

---

## Internal Links

Add internal links to existing BonusFoundry pages where relevant.

Use exact existing routes from the sitemap or codebase.

Potential internal links:

- TapTap Send provider page
- TapTap Send referral page
- TapTap Send corridor pages, if they exist
- Referral code vs promo code guide
- How referral rewards work guide
- How to avoid missing a referral reward guide
- General money transfer referral FAQ
- Related provider pages such as Wise, Remitly, LemFi, Sendwave or Ria if contextually useful

Do not create broken links.

If a related page does not exist yet, skip the link or add a TODO comment only if that matches the existing project convention.

---

## Metadata

Add SEO/GEO metadata consistent with the existing guide pages.

Suggested title:

```txt
How to Use TapTap Send Bonus Credit
```

Suggested meta description:

```txt
Learn how TapTap Send bonus credit works, when it may be applied, why it may not appear, and what to check before making a transfer.
```

Suggested H1:

```txt
How to Use TapTap Send Bonus Credit
```

Avoid clickbait.

Avoid unsupported claims.

---

## Structured Data

If existing guide pages use structured data, add the same schema pattern.

Use FAQ structured data only if the project already supports FAQ schema.

Do not introduce a new schema system unless required by the existing architecture.

Make sure schema content matches visible page content.

---

## Official Resources Section

Add an `Official Resources` section listing official TapTap Send sources reviewed.

For each source, include:

- source title;
- official URL;
- what information was reviewed;
- whether the information was verified, partially verified or not verified.

Do not cite unofficial coupon websites, referral directories or blogs.

If official documentation does not clearly explain bonus credit behavior, say so clearly.

---

## Disclosure Section

Add a disclosure consistent with existing BonusFoundry pages.

The disclosure must explain that:

- BonusFoundry is independent;
- the page is informational;
- TapTap Send promotions may change;
- users should verify current offer terms directly with TapTap Send before sending money;
- BonusFoundry does not guarantee bonus credit eligibility or reward payment.

Reuse the existing disclosure component or pattern if available.

---

## Implementation Requirements

- Follow the existing Next.js App Router structure.
- Follow existing static content patterns.
- Do not add a database.
- Do not add a CMS.
- Do not add authentication.
- Do not add an admin dashboard.
- Do not add client-side JavaScript unless already required by existing components.
- Reuse existing layout and components for guide pages.
- Keep the page static-first.
- Ensure the page is included in sitemap generation if sitemap uses static route lists.
- Ensure internal navigation does not break.
- Preserve existing performance.
- Avoid unnecessary dependencies.

---

## Quality Checklist

Before finishing, verify:

- The sitemap and codebase were checked for duplicate or near-duplicate pages.
- The page answers the main question in the first paragraph.
- The guide does not invent any TapTap Send reward amount.
- The guide does not invent any eligibility condition.
- The guide does not invent any expiration condition.
- The guide explains uncertainty clearly.
- The page uses short paragraphs.
- Tables are included.
- FAQ is included.
- Internal links are added where available.
- No broken internal links are introduced.
- Official resources are included.
- Disclosure is included.
- No marketing language is present.
- No duplicated paragraphs are present.
- Sitemap/indexing behavior is preserved.
- TypeScript build passes.
- Lint passes if the project has linting configured.

---

## Final Response Required From Codex

After implementation, return:

1. Files created or modified.
2. Route created or updated.
3. Whether the sitemap contained any similar existing page.
4. Whether a new guide was created or an existing page was updated.
5. Official TapTap Send sources used.
6. Information that could not be verified from official TapTap Send documentation.
7. Internal links added.
8. Sitemap or indexing changes made.
9. Build result.
10. Lint result, if available.
