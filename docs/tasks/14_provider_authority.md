# Goal

Transform provider pages from static articles into authoritative, structured knowledge hubs.

The objective is NOT to add more pages.

The objective is to make every provider page the best answer on the Internet for questions related to that provider's referral program, welcome bonus and signup process.

Every provider page should answer multiple related search intents while avoiding duplicate content.

---

# Read First

- PROJECT_CONTEXT.md
- CONTENT_STRATEGY.md
- DATA_MODEL.md
- WRITING_GUIDELINES.md
- SEO_AI.md
- ROUTING.md

---

# Core Principles

The website is NOT a referral code directory.

The website is an independent knowledge base.

Referral codes are only one small part of each provider page.

Every provider page must become a reusable source of structured knowledge.

Prefer structured data over long paragraphs.

Avoid generic content.

Never invent facts.

If information is unknown, clearly state it.

---

# Main Objective

Replace article-centric pages with structured provider knowledge.

Instead of writing pages like:

Provider

↓

Overview

↓

Referral Code

↓

FAQ

Build pages composed of reusable knowledge sections.

Example:

Quick Answer

↓

Key Facts

↓

Current Welcome Bonus

↓

Eligibility

↓

Supported Sending Countries

↓

Supported Receiving Countries

↓

Supported Currencies

↓

Payment Methods

↓

Identity Verification

↓

Referral Requirements

↓

Step-by-step Signup

↓

Bonus Checklist

↓

Common Mistakes

↓

Troubleshooting

↓

Country Notes

↓

FAQ

↓

Related Guides

↓

Related Corridors

↓

Official Resources

↓

Disclosure

---

# Data Model

Extend the provider model.

Instead of storing long paragraphs, store structured information.

Examples:

Provider

- name
- slug
- website
- appStores
- trustpilot
- foundedYear

Referral

- code
- link
- welcomeBonus
- minimumTransfer
- expiry
- payoutTiming
- limitations

Availability

- sendingCountries
- receivingCountries
- currencies
- paymentMethods

Verification

- identityRequired
- proofOfAddress
- bankVerification

Support

- supportEmail
- supportUrl
- helpCenter

CommonMistakes

[]

FAQ

[]

UpdateHistory

[]

Every section should be independently reusable.

---

# New Components

Create reusable components.

Examples:

ProviderFacts

WelcomeBonusCard

EligibilityTable

CountryAvailability

PaymentMethods

VerificationRequirements

ReferralChecklist

CommonMistakes

TroubleshootingGuide

CountryNotes

UpdateHistory

RelatedGuides

RelatedCorridors

OfficialResources

Do not hardcode provider-specific layouts.

Every provider page should be assembled from reusable blocks.

---

# Provider Page Requirements

Every provider page must answer these questions.

What is this provider?

Does it currently have a referral program?

Who is eligible?

Who is NOT eligible?

How do I receive the welcome bonus?

Can I add a referral code later?

What happens if I forget?

What minimum transfer is required?

How long does the reward usually take?

What payment methods are supported?

Which countries are supported?

Which currencies are supported?

What verification is required?

What common mistakes prevent receiving the reward?

Where can users contact support?

When was this information last verified?

If the answer is unknown, explicitly say so.

Never guess.

---

# Country Information

Do NOT generate one page per country.

Instead,

store country information as structured provider data.

Example:

France

- Supported
- Payment methods
- Notes

Belgium

- Supported
- Payment methods
- Notes

Germany

...

Display this information inside the provider page.

Only create dedicated pages when the content becomes substantially unique.

Examples:

France → Morocco

Canada → Nigeria

UK → Ghana

These are corridor pages.

Do not create pages that only change the country name.

---

# AI Optimization

Every provider page should satisfy multiple search intents.

Examples:

Provider referral code

Provider promo code

Provider welcome bonus

Provider signup bonus

How referral works

Can I use a referral code later?

Why didn't I receive my reward?

Referral requirements

Supported countries

Verification

Payment methods

Common mistakes

Support

A single page should answer all of these.

Avoid creating many thin pages.

---

# Internal Linking

Every provider page must link naturally to:

Referral page

Relevant guides

Relevant FAQs

Relevant corridors

Related providers

Disclosure

Official provider website

The user should never reach a dead end.

---

# SEO

Maintain:

Unique metadata

Canonical URL

JSON-LD

Breadcrumbs

FAQ schema

Last Updated

Author

Internal links

Semantic HTML

---

# Content Quality

Every important statement should be useful.

Avoid generic sentences like:

"Use this app to send money internationally."

Prefer:

"New users generally need to create their account using the referral link, complete identity verification if required, and send a qualifying first transfer before becoming eligible for the welcome reward. Exact conditions vary by country and promotion."

Avoid repetition.

If multiple providers share the same rule, express it differently while remaining factual.

---

# Acceptance Criteria

Provider pages feel like authoritative documentation rather than blog articles.

Information is structured.

Components are reusable.

No duplicate layouts.

No duplicate paragraphs.

No invented information.

Adding a new provider requires only updating structured data.

Every provider page can realistically become the best answer for that provider.

---

# Out of Scope

Database

Authentication

CMS

User accounts

Referral marketplace

Automated scraping

Rate comparison engine

Country-specific duplicate pages

---

# Final Instructions

Before coding:

1. Read all referenced documentation.
2. Refactor before adding.
3. Prefer reusable data structures over prose.
4. Prefer reusable components over duplicated JSX.
5. Keep everything static-first.
6. Explain every structural change.
7. List every modified file.
8. Suggest the next task after completion.