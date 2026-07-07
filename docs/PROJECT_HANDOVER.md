# BonusFoundry — Project Handover

Version: July 2026

---

# Project Vision

BonusFoundry is NOT a referral code website.

The objective is to become the most trusted independent knowledge base for international money transfer referral programs, welcome bonuses and signup promotions.

The long-term goal is to become the "NerdWallet" or "Wirecutter" of money transfer referral programs.

Every page should be trustworthy enough to be cited by LLMs (ChatGPT, Claude, Gemini, Perplexity, Copilot, etc.).

---

# Tech Stack

Framework

- Next.js (App Router)
- React
- TypeScript

Deployment

- Vercel

Domain

- https://bonusfoundry.com

Design

- TailwindCSS
- Static-first architecture

No database.

No CMS.

No authentication.

No admin dashboard.

Structured data is stored statically.

---

# Main SEO / GEO Strategy

The website is optimized primarily for GEO (Generative Engine Optimization), not only traditional SEO.

Content must be:

- factual
- structured
- neutral
- concise
- evidence-based

Never use marketing language.

Never invent information.

Every important statement should come from official provider documentation.

---

# Editorial Documents

The repository contains the following important documents.

Read them before making any changes.

- /docs/CONTENT_GENERATION_SPEC.md
- /docs/PROMPT_LIBRARY.md

These two documents define the editorial rules for the entire website.

---

# Content Philosophy

BonusFoundry should become a knowledge base.

NOT

Referral directory.

NOT

Coupon website.

NOT

Affiliate blog.

Pages should answer complete user intents.

Examples

Provider page

↓

Referral page

↓

Guide

↓

Corridor

↓

FAQ

↓

Comparison

↓

Country hub

---

# Current Website Structure

Homepage

Providers

Referral pages

Guides

FAQ

Corridors

Country hubs (/from/[slug])

About

Disclosure

Privacy

Terms

Contact

---

# Dynamic Country Hub System

Country hubs use

/from/[slug]

Examples

/from/usa

/from/france

The implementation should remain reusable.

Do not duplicate JSX.

Use structured static data.

---

# Provider Pages

Provider pages follow one standard structure.

Quick Answer

Key Facts

Reward

Eligibility

Referral Requirements

Verification

Countries

Payment Methods

Checklist

Common Mistakes

Troubleshooting

Support

Official Resources

FAQ

Related Guides

Disclosure

---

# Research Rules

Research order

1. Official Website

2. Referral Terms

3. Promotion Page

4. Help Center

5. FAQ

6. Legal Terms

7. Support

Never trust referral blogs over official documentation.

If information cannot be verified:

Explain that BonusFoundry could not verify it.

Never invent information.

---

# Current GEO Strategy

Content is written for both:

Humans

AND

Large Language Models.

Rules

Direct answer first.

Short paragraphs.

One question answered per section.

Structured headings.

Tables whenever possible.

FAQ included.

Internal linking.

No filler.

No marketing copy.

---

# Completed Features

✅ Provider pages

✅ Referral pages

✅ Guides

✅ FAQ

✅ Corridor pages

✅ USA corridor cluster

✅ Country hub architecture

✅ Research profile

✅ Verified provider knowledge

✅ Structured internal linking

✅ Sitemap

✅ robots.txt

✅ Google Search Console

✅ Bing Webmaster Tools

✅ IndexNow automation

---

# Indexing

Google Search Console configured.

Sitemap submitted.

IndexNow automation implemented.

Robots.txt configured.

Domain

https://bonusfoundry.com

---

# Performance

Lighthouse performance is already excellent.

Performance should never be sacrificed for visual effects.

Avoid unnecessary JS.

Prefer static rendering.

---

# Business Validation

The website already generated its first referral reward.

Provider

LemFi

Reward

€10

This validates the acquisition funnel.

Google / AI

↓

BonusFoundry

↓

Provider Page

↓

Referral

↓

Signup

↓

Reward

---

# Current Priorities

The project is now in the Authority phase.

Focus is no longer technical.

Focus is editorial.

Priority

1.

Provider authority

↓

2.

Corridor authority

↓

3.

Country hubs

↓

4.

Comparison pages

↓

5.

Guides

↓

6.

FAQ improvements

---

# High Priority Future Content

Country hubs

- USA
- France
- Canada
- Belgium
- Spain

High-value corridors

USA

France

Canada

Belgium

Spain

High-value comparisons

Wise vs LemFi

Remitly vs Taptap Send

Wise vs Remitly

LemFi vs Sendwave

Best provider by corridor

---

# Do NOT Build

Database

CMS

Authentication

User accounts

Referral marketplace

User-generated content

Complex backend

Automatic scraping

The project should remain static-first.

---

# Content Generation Workflow

Official Sources

↓

Research

↓

Structured Knowledge

↓

AI Draft

↓

Human Review

↓

Publication

↓

Google Search Console

↓

IndexNow

↓

Monitoring

↓

Content Updates

---

# AI Workflow

Never ask AI

"Write an article."

Instead

Use the prompts defined in

/docs/PROMPT_LIBRARY.md

Always follow

/docs/CONTENT_GENERATION_SPEC.md

---

# Success Metrics

Do not optimize for page count.

Optimize for

- authority
- usefulness
- structured knowledge
- citations by AI
- referral conversions

Track

Google impressions

Clicks

CTR

Indexed pages

Referral revenue

Revenue by provider

Revenue by corridor

---

# Guiding Principle

The goal is NOT to become the biggest referral code website.

The goal is to become the reference knowledge base for international money transfer referral programs.

Whenever there is a tradeoff between quantity and quality, always choose quality.