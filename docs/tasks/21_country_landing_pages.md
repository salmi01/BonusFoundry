# Goal

Create a reusable sending-country hub system for BonusFoundry.

The objective is to generate country landing pages such as:

- /from/usa
- /from/france
- /from/canada
- /from/belgium
- /from/spain

Each page should act as an authority hub for users sending money from one country to multiple destinations.

---

# Read First

- /docs/CONTENT_GENERATION_SPEC.md
- /docs/PROMPT_LIBRARY.md

Follow the same editorial rules used for corridor pages.

---

# Core Requirement

Do not create one hardcoded page per country.

Create a reusable dynamic route:

/from/[slug]

Country hub content must come from structured static data.

Example:

sendingCountryHub {
  slug: "usa",
  name: "United States",
  currency: "USD",
  corridors: [],
  providers: [],
  paymentMethods: [],
  notes: []
}

Keep static-first.

Do not add a database.

---

# Initial Countries

Create or support these hubs:

- /from/usa
- /from/france

If /from/usa already exists, refactor it to use the reusable system.

---

# USA Hub

Page title:

Send money from the United States: providers, bonuses, and corridors

Include corridors:

- USA → Morocco
- USA → Egypt
- USA → Ghana
- USA → Ethiopia
- USA → Kenya
- USA → Nigeria

Use existing route format:

- /corridors/usa-to-morocco
- /corridors/usa-to-egypt
- /corridors/usa-to-ghana
- /corridors/usa-to-ethiopia
- /corridors/usa-to-kenya
- /corridors/usa-to-nigeria

---

# France Hub

Page title:

Send money from France: providers, bonuses, and corridors

Include corridors:

- France → Morocco
- France → Algeria
- France → Tunisia
- France → Senegal
- France → Côte d'Ivoire

Use existing route format:

- /corridors/france-to-morocco
- /corridors/france-to-algeria
- /corridors/france-to-tunisia
- /corridors/france-to-senegal
- /corridors/france-to-cote-divoire

---

# Page Purpose

Each country hub should answer:

- Which money transfer providers are relevant from this country?
- Which providers have referral links, referral codes, or welcome bonuses?
- Which destination countries are already covered by BonusFoundry?
- Which payment methods are commonly available?
- What should users check before signing up?
- Which provider should users consider depending on their need?

---

# Page Structure

Every country hub must include:

1. Quick Answer
2. Key Facts
3. Providers available or relevant from this country
4. Referral and welcome bonus opportunities
5. Popular corridors
6. Provider comparison table
7. Payment methods
8. Receiving methods by destination
9. Verification requirements
10. How to choose a provider
11. Common mistakes
12. FAQ
13. Related provider pages
14. Related corridor pages
15. Related guides
16. Disclosure

---

# Provider Comparison

Compare only providers already present in the project.

Potential providers:

- Taptap Send
- Wise
- Remitly
- Sendwave
- Ria
- Western Union
- MoneyGram
- WorldRemit
- Paysend
- Xe
- LemFi

Do not invent availability.

If availability is not verified from provider or corridor data, either omit the provider or show cautious wording.

---

# Recommendation Framework

Do not declare one universal best provider.

Classify providers by use case only when supported by existing data:

- Best for checking referral rewards
- Best for bank deposits
- Best for mobile wallet transfers
- Best for cash pickup
- Best for broad country coverage
- Best for transparent fees
- Best for first-time users

For France, also support:

- Best for Morocco transfers
- Best for North Africa transfers
- Best for West Africa transfers

For the USA, also support:

- Best for Africa transfers
- Best for Nigeria transfers
- Best for mobile wallet destinations

---

# Internal Linking Requirements

Each hub must link to:

- /providers
- /corridors
- /guides
- /faq
- all related corridor pages
- relevant provider pages
- relevant referral pages
- relevant guides

Add:

- Related corridors
- Related providers
- Related guides

No dead ends.

---

# SEO Requirements

Each hub must include:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- JSON-LD WebPage schema
- Breadcrumb schema
- FAQ schema if FAQ is included

Update sitemap generation so every /from/[slug] hub is included.

---

# Content Rules

Use factual, cautious language.

Do not invent:

- fees
- limits
- rewards
- availability
- transfer speed
- supported methods

Do not duplicate corridor page content.

The country hub is a summary/navigation hub, not a replacement for corridor pages.

Each corridor card should briefly explain why that route matters, then link to the dedicated corridor page.

---

# Technical Requirements

- Use static generation.
- Use structured static data.
- Reuse existing components where possible.
- Avoid duplicated JSX between country hubs.
- Keep Lighthouse performance unchanged.
- Do not add a database.
- Do not add authentication.
- Do not add a CMS.

---

# Acceptance Criteria

- /from/usa works.
- /from/france works.
- Both pages use the same dynamic route/template.
- Both pages are included in sitemap.
- Each page links to its related corridors.
- Each page links to relevant providers and referral pages.
- No fake availability claims.
- No duplicated corridor content.
- No duplicated JSX.
- npm run build succeeds.

---

# Out of Scope

- Adding new corridor pages.
- Adding new providers.
- Database.
- Authentication.
- Admin dashboard.
- Automatic scraping.