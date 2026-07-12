# Goal 1 — Build an AI-First Content Design System for BonusFoundry

## Context

BonusFoundry has reached the Authority phase.

The next objective is no longer to publish more pages, but to make every page easier for:

- humans to scan,
- Google to understand,
- AI assistants (ChatGPT, Gemini, Claude, Perplexity, Copilot...) to extract and cite.

This goal is **NOT** about rewriting existing content.

This goal is about building a reusable **AI-first content design system** that every page on the website can use.

After this goal, all Provider pages, Referral pages, Corridor pages, Guides, FAQ pages, Country Hubs and Comparison pages should be able to reuse the same content modules.

---

# Existing Project Rules

Before making any changes, read and follow:

- PROJECT_HANDOVER.md
- CONTENT_GENERATION_SPEC.md
- PROMPT_LIBRARY.md

The architecture of BonusFoundry must remain:

- static-first
- Next.js App Router
- reusable
- TypeScript
- TailwindCSS
- no CMS
- no database
- no authentication

Do not break the current architecture.

---

# Main Objective

Create a reusable library of AI-friendly content components.

These components should improve:

- readability
- scanability
- structured extraction
- GEO
- AI citations
- maintainability

Every module must be reusable.

Do NOT duplicate JSX.

---

# Components to Create

Create reusable components (or equivalent reusable architecture depending on the existing codebase).

The exact implementation is up to you.

Suggested component names:

- QuickAnswer
- KeyTakeaways
- KeyFacts
- ProviderQuickCard
- HowItWorks
- StepChecklist
- NextSteps
- EligibilitySummary
- RewardSummary
- TypicalReward
- MinimumTransfer
- WhereToEnterCode
- CommonMistakes
- Troubleshooting
- ProviderMiniFAQ
- BestFor
- ProsCons
- LastVerified
- OfficialSources
- ResearchConfidence
- EditorialNote
- RelatedResources

Use existing project conventions if naming differs.

---

# Component Requirements

Each component must:

- be reusable
- accept props
- remain static-friendly
- support SSR
- require no client-side JS unless already needed
- be easy to compose

The goal is that every future page can be assembled from these blocks.

---

# 1. Quick Answer

Purpose:

Immediately answer the user's question.

Should appear near the top.

Small block.

Easy for LLM extraction.

---

# 2. Key Takeaways

Create a reusable callout box.

Example:

✓ Verify eligibility

✓ Enter the referral code before the first transfer

✓ Complete identity verification

✓ Send the qualifying transfer

✓ Receive the reward

This component should support custom bullet items.

---

# 3. Key Facts

Reusable fact table.

Example:

| Item | Value |
|------|-------|
| Reward | ... |
| Eligibility | ... |
| Minimum transfer | ... |
| Countries | ... |
| Last verified | ... |

Must support arbitrary rows.

---

# 4. Provider Quick Card

Reusable summary card.

Possible fields:

- Provider
- Reward
- Eligibility
- Minimum transfer
- Code or referral link
- Typical transfer speed
- Last verified

The card should be compact and highly scannable.

---

# 5. How It Works

Reusable numbered steps.

Example:

1. Create account

2. Enter referral code

3. Verify ID

4. Send first transfer

5. Receive reward

---

# 6. Step Checklist

Reusable checklist.

Should support:

✓ completed

○ pending

Used for:

How to claim bonuses.

---

# 7. Next Steps

Small reusable block.

Example:

Next:

- Compare providers
- Read corridor guide
- Read FAQ

---

# 8. Eligibility Summary

Reusable component summarizing:

- New users
- Existing users
- Country restrictions
- Verification requirements

---

# 9. Reward Summary

Reusable summary box.

Supports:

- reward type
- reward range
- qualifying transfer
- important notes

---

# 10. Typical Reward

Reusable badge or small table.

Supports:

- amount
- currency
- notes

---

# 11. Minimum Transfer

Reusable component.

Supports:

minimum qualifying transfer.

---

# 12. Where to Enter the Code

Reusable section.

Example:

Signup

↓

Referral Code field

↓

Before first transfer

---

# 13. Common Mistakes

Reusable warning list.

Example:

- entered code too late

- existing account

- transfer below minimum

- unsupported country

---

# 14. Troubleshooting

Reusable accordion or section.

Supports:

Problem

↓

Possible reason

↓

Suggested action

Must remain server-renderable.

---

# 15. Provider Mini FAQ

Small FAQ module.

Supports:

Question

Answer

Optimized for extraction.

---

# 16. Best For

Reusable badges.

Examples:

Best for:

- Bank transfers

- Mobile money

- Cash pickup

- Large transfers

- Low fees

---

# 17. Pros / Cons

Reusable two-column component.

---

# 18. Last Verified

Reusable metadata block.

Example:

Last verified

11 July 2026

Should support dates through props.

---

# 19. Official Sources

Reusable component.

Supports:

- source name

- source type

- URL

- reviewed information

- review date

---

# 20. Research Confidence

Reusable badge.

Example:

Research completeness

95%

Should support percentage.

---

# 21. Editorial Note

Reusable note.

Clearly separated from provider rules.

---

# 22. Related Resources

Reusable links section.

Supports:

- providers

- corridors

- guides

- comparisons

- FAQ

---

# Design Requirements

Components should be:

- lightweight
- highly readable
- consistent
- mobile friendly
- visually subtle
- accessible

Avoid excessive styling.

Performance always comes first.

---

# Rich Content

Do NOT add decorative images.

Instead, ensure the design system can easily support:

- comparison tables
- checklists
- timelines
- flow steps
- info callouts

without changing page architecture later.

---

# AI Optimization

Every component should be independently understandable.

Avoid references like:

"As explained above"

Instead:

Repeat the subject naturally.

Every component should be extractable independently by LLMs.

---

# Reusability

After this goal, the following page types should be composable entirely from these modules:

- Provider pages
- Referral pages
- Corridor pages
- Country hubs
- Guides
- FAQ pages
- Comparison pages

No duplicated layouts.

---

# Backward Compatibility

Do NOT migrate every page yet.

Only:

- build the system
- integrate it where necessary for demonstration if appropriate
- preserve existing pages

The migration will happen in future goals.

---

# Technical Constraints

Do NOT:

- add a database
- add a CMS
- add authentication
- add client-side state unnecessarily
- duplicate markup

Prefer composition.

Prefer server components.

---

# Deliverables

At the end, provide:

1. Components created.
2. File tree.
3. Component responsibilities.
4. Example composition for:
   - Provider page
   - Corridor page
   - Guide page
5. Any reusable utility functions added.
6. Any design decisions made.
7. Confirmation that no existing page behavior was broken.
8. Build result.
9. Lint result.

The objective is to create the long-term AI-first content foundation for BonusFoundry that every future page will reuse.