# Goal

Build BonusFoundry's first corridor authority pages.

The objective is NOT to create landing pages.

The objective is to create definitive knowledge pages for the most important international money transfer corridors.

Read first

- CONTENT_GENERATION_SPEC.md
- PROMPT_LIBRARY.md

Use:

Prompt 3 — Corridor Page

---

Create the following corridor pages.

Priority 1

- France → Algeria
- France → Tunisia
- France → Senegal
- France → Côte d'Ivoire
- Belgium → Morocco
- Spain → Morocco
- Canada → Morocco
- UK → Nigeria
- USA → Nigeria

Keep the existing

- France → Morocco

---

Each corridor page must include

Quick Answer

Best Providers

Provider Comparison Table

Referral Opportunities

Current Welcome Rewards

Payment Methods

Transfer Speed

Receiving Options

Identity Verification

Supported Currencies

Provider Strengths

Provider Limitations

Common Mistakes

Troubleshooting

FAQ

Related Providers

Related Guides

Disclosure

---

Comparison Table

Compare

- Wise
- Taptap Send
- LemFi
- Remitly
- Sendwave
- Ria
- Paysend
- Western Union
- MoneyGram
- WorldRemit

Use provider data already available in the project.

Do not invent facts.

If a provider is unavailable for a corridor,

say so.

---

Rules

Do not duplicate provider pages.

Only include corridor-specific information.

Explain tradeoffs.

Never declare one universal winner.

Keep the implementation static-first.

Reuse existing components.

Reuse provider knowledge.

Do not duplicate JSX.

---

Acceptance Criteria

Every corridor page feels unique.

Every corridor answers a different user need.

Comparison tables are generated from structured provider data.

No duplicated paragraphs.

No fake provider claims.

npm run build succeeds.

List every modified file.

Summarize every new corridor.