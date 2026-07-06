# Goal

Create country landing pages that act as authority hubs for outbound money transfer corridors.

Start with the United States.

The objective is to strengthen topical authority, improve internal linking, and help users understand which providers and corridors are relevant from one sending country.

---

# Read First

- /docs/CONTENT_GENERATION_SPEC.md
- /docs/PROMPT_LIBRARY.md

Follow the same editorial rules used for corridor pages.

---

# Create This Page

- /from/usa

Page title:

Send money from the United States: providers, bonuses, and corridors

---

# Page Purpose

This page should answer:

- Which money transfer providers are available from the United States?
- Which providers have referral links or welcome bonuses?
- Which countries can users send money to from the US?
- Which corridors are already covered by BonusFoundry?
- Which payment methods are commonly available?
- What should users check before signing up?
- Which provider should users consider depending on their need?

---

# Page Structure

The page must include:

1. Quick Answer

2. Key Facts

3. Providers available from the United States

4. Referral and welcome bonus opportunities

5. Popular USA corridors

6. Provider comparison table

7. Payment methods from the US

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

# Popular USA Corridors

Link to the existing USA corridor pages:

- USA → Morocco
- USA → Egypt
- USA → Ghana
- USA → Ethiopia
- USA → Kenya
- USA → Nigeria

Use route format already used in the project.

Example:

/corridors/usa-to-morocco

---

# Provider Comparison

Compare providers already present in the project, but only when they are relevant to the US.

Potential providers:

- LemFi
- Remitly
- Wise
- Sendwave
- Taptap Send
- Ria
- Western Union
- MoneyGram
- WorldRemit
- Paysend
- Xe

Do not invent availability.

If US availability is not verified from provider data, either omit the provider from the table or show cautious wording.

---

# Recommendation Framework

Do not declare one universal best provider.

Instead classify providers by use case:

- Best for checking referral rewards
- Best for bank deposits
- Best for mobile wallet transfers
- Best for cash pickup
- Best for broad country coverage
- Best for transparent fees
- Best for first-time users

Only include a category when supported by existing provider/corridor data.

---

# Internal Linking Requirements

The page must link to:

- /providers
- /corridors
- /guides
- /faq
- all USA corridor pages
- relevant provider pages
- relevant referral pages
- relevant guides

Add a "Related USA corridors" section.

Add a "Related providers" section.

---

# SEO Requirements

Add:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- JSON-LD WebPage schema
- Breadcrumb schema
- FAQ schema if FAQ is included

Update sitemap generation so /from/usa is included.

---

# Data Model

If needed, create structured data for sending-country hubs.

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

# Content Rules

Use factual, cautious language.

Do not invent fees, limits, rewards, or availability.

Do not duplicate corridor page content.

This page is a hub, not a replacement for corridor pages.

Each corridor card should briefly explain why that route matters, then link to the dedicated corridor page.

---

# Acceptance Criteria

- /from/usa works.
- /from/usa is included in sitemap.
- The page links to all USA corridor pages.
- The page links to relevant provider and referral pages.
- The page follows BonusFoundry editorial style.
- No fake availability claims.
- No duplicated corridor content.
- npm run build succeeds.

---

# Out of Scope

- Adding more USA corridors beyond existing ones.
- Adding other country hubs.
- Database.
- Authentication.
- Admin dashboard.
- Automatic scraping.