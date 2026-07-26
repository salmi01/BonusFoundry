Goal — Improve BonusFoundry for AI Citations, AEO, GEO and SEO

Context

BonusFoundry already has a strong technical and editorial foundation.

The next objective is to improve the probability that Google AI Overviews, ChatGPT Search, Perplexity, Bing Copilot, Gemini and other AI systems can:

understand BonusFoundry pages quickly;

extract referral codes and bonus conditions;

cite BonusFoundry as a useful source;

distinguish verified facts from variable provider conditions;

recognize BonusFoundry as a consistent and trustworthy entity.

This goal must improve the existing site without creating unnecessary content, fake freshness signals, or excessive schema.

Follow:

PROJECT_HANDOVER.md

CONTENT_GENERATION_SPEC.md

PROMPT_LIBRARY.md

Keep the website:

static-first;

factual;

concise;

source-based;

easy for humans and LLMs to read.

Main Objective

Upgrade provider, referral, guide, corridor and FAQ content so the most important answer is immediately visible and easily extractable.

The most important priorities are:

direct answer in the first 100 words;

referral code, bonus and qualifying amount visible in plain text;

provider-specific FAQ;

official source links;

manual verification signals;

strong brand and editorial identity;

correct structured data;

internal linking;

truthful freshness signals;

no unnecessary repetition or keyword stuffing.

1. Direct Answer in the First 100 Words

For every relevant provider or referral page, ensure the user gets the answer immediately.

For pages targeting referral or promo intent, expose:

provider name;

referral or promo code;

bonus amount;

qualifying transfer amount;

who the offer is for;

last verified status when available.

Example pattern:

TapTap Send referral code: SALAHEDD1933. Eligible new users can receive a €10 or $10 bonus after completing a qualifying first transfer of at least €100 or $100.

Use the actual verified provider data.

Do not hide the answer after a long introduction.

Do not force users or LLMs to open another page just to see the code.

2. Referral Codes Must Be Visible in Plain Text

Where a verified BonusFoundry code exists:

render the code directly in HTML text;

keep it visible without user interaction;

a copy button may be added as a secondary feature;

do not expose the code only in schema, metadata, images, accordions or JavaScript state.

Examples:

TapTap Send referral code: SALAHEDD1933
LemFi referral code: SALABGWQ

Use shared provider data where possible.

Do not duplicate the same code independently across many files if a central source of truth already exists.

3. Provider-Specific FAQ

Every major provider/referral page should include a concise FAQ based on real search intent.

Examples:

What is the TapTap Send referral code?
How much is the TapTap Send referral bonus?
What is the minimum qualifying transfer?
Where do I enter the referral code?
Is the code still valid?
When is the bonus applied?
Can existing users use the code?
Why did my bonus not appear?

Rules:

answer immediately;

keep answers short;

include the exact referral code where relevant;

avoid repeating generic disclaimers;

use conditional wording only where conditions genuinely vary.

4. Structured Data

Review the existing structured-data implementation.

Use schema only when it matches content visible on the page.

Preserve or improve:

Organization;

WebSite;

Article / BlogPosting;

BreadcrumbList;

FAQPage where appropriate;

publisher references;

author/editorial-team references;

datePublished;

dateModified.

Important:

Do not treat FAQPage schema as the primary GEO strategy.

The visible FAQ content is more important than the schema itself.

Do not create hidden FAQ answers only for JSON-LD.

Do not duplicate schema objects across the same page.

5. Official Sources

Every provider or referral page should link directly to relevant official provider documentation where available.

Preferred source order:

Official referral terms

Official promotion page

Official help center

Official FAQ

Official corridor page

Official website

Official legal terms

Official support documentation

For TapTap Send, ensure the page contains direct links to available official referral or promotion documentation.

Do not use competitor referral sites, coupon websites or unofficial blogs as primary sources.

6. Manual Verification Signals

Where BonusFoundry manually verified an offer inside a provider app, display that clearly.

Example:

Manually verified in the TapTap Send app.

Referral code: SALAHEDD1933
Bonus: €10 or $10
Minimum qualifying transfer: €100 or $100
Expiration: No expiration date currently displayed

Include the real verification date.

Keep a clear distinction between:

Official provider documentation

and:

Manual BonusFoundry verification

Do not describe manual verification as official public documentation.

7. Last Verified / Freshness

Do not automatically update review dates just to appear fresh.

Only change:

Last reviewed
Last verified
dateModified

when a real review or meaningful content update occurred.

Preferred pattern:

Offer last verified: July 26, 2026

Use a real manual review date.

Avoid artificial freshness.

8. Year in Titles

Use 2026 only where freshness is genuinely part of the search intent.

Good examples:

Best Money Transfer Apps to Morocco (2026)
TapTap Send Referral Code 2026
LemFi Referral Code 2026

Do not automatically append 2026 to every page.

Use it when:

the offer is time-sensitive;

the user is likely searching for current information;

the content is actually reviewed for 2026.

9. Remove Excessive Hedging

Review content for unnecessary phrases such as:

may
could
should
might
could not verify
not official
not guaranteed

When a fact has been verified, state it directly.

Example:

Instead of:

TapTap Send may offer a €10 bonus.

Use:

TapTap Send currently shows a €10 or $10 referral bonus for the verified offer.

Use hedging only when:

the offer varies by country;

the provider controls eligibility;

the value changes by campaign;

the information genuinely cannot be verified.

10. Keep Disclosures Concise

Do not repeat referral disclosures throughout the page.

Use one concise disclosure near the end.

Example:

BonusFoundry may receive a referral reward when a user signs up or completes a qualifying transfer through a listed referral code or link. Bonus eligibility is controlled by the provider and may depend on country, account status and current offer terms.

Do not repeat this message in Quick Answer, Key Facts, FAQ and Troubleshooting.

11. Internal Linking

Improve contextual links between:

Provider page

Referral page

Guides

FAQ

Corridors

Country hubs

Comparison content

Recommended flow:

Provider
→ Referral
→ Guide
→ Corridor
→ Country Hub

Do not create broken links.

Do not duplicate full explanations when an existing page already covers the topic.

Summarize and link.

12. Brand and Editorial Authority

Ensure all content consistently identifies:

BonusFoundry

and:

BonusFoundry Editorial Team

Use the canonical Organization ID:

https://bonusfoundry.com/#organization

Use the canonical editorial identity if already implemented:

https://bonusfoundry.com/#editorial-team

Relevant content schemas should reference the organization as publisher.

Do not create fictional financial credentials.

Authority should come from:

official source review;

transparent methodology;

manual app verification;

update history;

consistent editorial process.

13. Content Targeting

Prioritize exact high-intent topics already visible in Search Console or referral demand.

Examples:

taptap send referral code
taptap send bonus code
lemfi referral code
ria money transfer promo code
remitly first transfer bonus
wise referral bonus

Create a new page only when the intent is materially different from an existing page.

Avoid keyword-cannibalization.

14. French Content Strategy

Do not automatically duplicate the entire English site in French.

First inspect Search Console and existing demand.

If French queries show meaningful impressions, prepare localized pages for high-value intents such as:

code parrainage taptap send
code promo lemfi
bonus premier transfert remitly

French pages must be genuinely localized.

Do not create machine-translated duplicates with no added value.

Use proper hreflang if multilingual routes are introduced.

15. Backlink and External Authority Readiness

Do not add spammy links or automated backlink systems.

Make pages worth referencing externally.

Ensure each important page has:

a unique answer;

verified data;

useful comparison information;

direct sources;

stable URL;

clear title;

last verified information.

External promotion can then point to the most relevant provider/referral page.

16. Homepage and Category Pages

Ensure homepage and major category pages clearly explain what BonusFoundry is.

Use a concise value proposition such as:

BonusFoundry is an independent knowledge base for money transfer referral programs, welcome bonuses and signup promotions.

Avoid presenting BonusFoundry as a coupon directory.

Category pages should link clearly to the highest-value provider and guide pages.

17. Validation Audit

Audit all major provider/referral pages for these conditions:

Check

Required

Direct answer within first 100 words

Yes

Referral code visible in plain text

Yes, when verified

Bonus amount visible

Yes, when verified

Minimum qualifying transfer visible

Yes, when verified

Provider-specific FAQ

Yes

Official sources

Yes

Last verified

Yes when manually reviewed

Organization publisher reference

Yes

Editorial identity

Yes

Excessive disclaimer repetition

No

Artificial review date

No

Broken internal links

No

Hidden code only in schema

No

18. Priority Providers

Start the audit with providers that already show Search Console demand:

TapTap Send

LemFi

Ria

Wise

Sendwave

Remitly

Paysend

Do not rewrite pages that already comply unless there is a clear improvement.

19. Technical Constraints

Do not:

add a database;

add a CMS;

add authentication;

add unnecessary JavaScript;

change existing URLs without a strong reason;

introduce duplicate schemas;

generate fake ratings;

generate fake reviews;

generate artificial freshness;

invent referral codes;

invent provider eligibility conditions.

Keep the site static-first and performant.

20. Final Deliverables

After completing the goal, return:

Pages audited.

Pages modified.

Direct-answer improvements.

Referral codes exposed in plain text.

Provider-specific FAQs added or improved.

Official sources added.

Structured-data changes.

Internal-linking improvements.

Excessive hedging/disclaimers removed.

Freshness/date corrections.

Any pages intentionally left unchanged.

Any facts that still could not be verified.

Build result.

Lint result.

Final Goal

The finished site should make it easy for a human or an AI system to answer:

What is the TapTap Send referral code?

with a direct, citation-ready answer such as:

The TapTap Send referral code listed by BonusFoundry is SALAHEDD1933. The manually verified offer provides a €10 or $10 bonus after a qualifying first transfer of at least €100 or $100.

The same principle should apply consistently to every provider where BonusFoundry has verified referral information.

Optimize for usefulness, verification, extraction and trust — not for content length or schema volume.