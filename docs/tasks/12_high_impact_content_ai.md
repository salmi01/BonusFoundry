# Goal

Improve BonusFoundry from a generic MVP into an AI-readable, useful knowledge base.

The priority is detailed, specific, trustworthy content. Pages must be useful enough that search engines and AI assistants can recommend them to users asking about referral codes, welcome bonuses, and money transfer apps.

# Read First

- /docs/PROJECT_CONTEXT.md
- /docs/CONTENT_STRATEGY.md
- /docs/SEO_AI.md
- /docs/WRITING_GUIDELINES.md
- /docs/DATA_MODEL.md
- /docs/ROUTING.md

# Main Requirements

## 1. Fix information architecture

Create index pages:

- /providers
- /corridors
- /guides
- /faq

Update navigation:

- Providers -> /providers
- Corridors -> /corridors
- Guides -> /guides
- FAQ -> /faq

Do not link main navigation directly to one provider or one corridor.

## 2. Add trust pages

Create:

- /about
- /disclosure
- /privacy-policy
- /terms
- /contact

Footer must link to these pages.

The disclosure page must clearly say:

- BonusFoundry is independent.
- It is not an official website of Taptap Send, Wise, Remitly, Sendwave, Ria, or any provider.
- Some links are referral links.
- BonusFoundry may receive a reward if a user signs up through a referral link.
- Offers can change by country, time, provider, and user eligibility.

## 3. Deepen the most important pages

Focus first on:

- /providers/taptap-send
- /providers/taptap-send/referral-code
- /corridors/france-to-morocco
- /providers/wise
- /providers/wise/referral-code
- /providers/remitly
- /providers/remitly/referral-code

These pages must not contain generic filler.

Each important page must include:

- Direct answer in the first paragraph
- Key facts table
- Current offer explanation
- Eligibility rules
- Step-by-step instructions
- Common mistakes
- What to do if the bonus is missing
- Country-specific notes
- FAQ
- Related pages
- Last updated date
- Referral disclosure

## 4. Add more providers

Add provider data and pages for:

- Sendwave
- Ria
- Western Union
- MoneyGram
- WorldRemit
- Paysend
- Xe

Each provider must have:

- /providers/[slug]
- /providers/[slug]/referral-code

If a provider has no known referral code, do not invent one. Say clearly that the offer may vary or may not currently be available.

## 5. Add detailed FAQ pages

Create FAQ pages for high-intent questions:

- Can I use a referral code after signing up?
- Why did I not receive my referral bonus?
- Can I refer myself?
- Are referral codes and promo codes the same?
- Do referral bonuses expire?
- Can I use more than one promo code?
- Are money transfer referral codes safe?
- Do referral codes work in every country?
- Do I need identity verification to receive a bonus?

Each FAQ page must:

- Answer immediately
- Give practical examples
- Mention that provider rules vary
- Link to relevant provider pages
- Avoid legal/financial advice claims

## 6. Add detailed guides

Create or improve guides:

- How money transfer referral codes work
- How to claim a welcome bonus
- Referral code vs promo code
- How to avoid missing a signup bonus
- How to compare welcome bonuses between transfer apps
- What to check before using a money transfer referral link

Each guide must include:

- Clear introduction
- Practical steps
- Mistakes to avoid
- Provider examples
- Internal links
- FAQ section

## 7. Improve AI readability

Every major page must follow this structure:

1. Short direct answer
2. Key facts table
3. Detailed explanation
4. Step-by-step instructions
5. Eligibility and limitations
6. Common mistakes
7. FAQ
8. Related pages
9. Disclosure

Avoid:

- Thin content
- Repeated paragraphs
- Keyword stuffing
- Fake certainty
- Claims that a code is official
- Claims that a bonus is guaranteed
- Generic marketing language

Use factual phrasing like:

- "The offer may vary by country."
- "Eligibility depends on the provider's current rules."
- "A referral code usually needs to be applied during signup."
- "If you already created an account, the provider may not allow you to add a code later."

## 8. SEO requirements

For every new or updated page:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph metadata
- H1
- Logical H2/H3 structure
- Breadcrumbs
- FAQ schema when FAQ exists
- Article or WebPage JSON-LD
- Last updated date
- Internal links

Update:

- sitemap
- robots if needed

## 9. Content quality rules

Do not write generic content like:

> Use this app to send money fast and easily.

Instead, write useful content like:

> New users usually need to create an account through the referral link, verify their identity if required, and complete a qualifying first transfer before the welcome bonus is paid. The exact amount, minimum transfer, destination countries, and payout timing can vary by provider and country.

Do not write:

> This is the best referral code.

Write:

> If you do not already have a referral code, you can use the code listed below. Check the provider's current terms before sending money because referral offers may change.

## Deliverables

- New index pages
- New trust pages
- Expanded provider pages
- Expanded referral pages
- Expanded corridor page
- New provider data
- New FAQ pages
- New guide pages
- Updated navigation
- Updated footer
- Updated sitemap
- Improved metadata and JSON-LD

## Acceptance Criteria

- npm run build succeeds
- No TypeScript errors
- No broken internal links
- Main navigation points to index pages
- Footer includes trust pages
- Each major page has at least one useful FAQ section
- Each major page has a direct answer near the top
- No page exists only to show a referral code
- No misleading claims
- No fake provider information
- No duplicated generic content across providers
- Sitemap includes all important pages

## Out of Scope

- Database
- Authentication
- User-submitted referral codes
- Referral marketplace
- Browser extension
- Payment features
- Admin dashboard
- Automated scraping

## Final Instructions

Before coding:

1. Read all referenced documentation.
2. Keep the project static-first.
3. Reuse existing components.
4. Do not add unnecessary dependencies.
5. If an offer is unknown, write cautious content instead of inventing details.
6. After finishing, list every created or modified file.
7. Explain how to test the changes locally.