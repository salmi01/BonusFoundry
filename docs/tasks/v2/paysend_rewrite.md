# Mission — Optimize ONLY the Paysend Referral / Bonus Page

## Objective

Optimize the existing BonusFoundry Paysend referral page for:

- organic SEO;
- Google Search;
- answer engines / AEO;
- generative search / GEO;
- accurate extraction and citation by LLMs;
- factual accuracy and freshness.

Target page:

`https://bonusfoundry.com/providers/paysend/referral-code`

This task applies **ONLY to Paysend**.

Do not modify, rewrite, migrate, update, or otherwise change the content, metadata, structured data, configuration, referral information, or behavior of any other provider.

---

# 1. Exact Scope — Paysend Only

The only target provider for this mission is:

**Paysend**

The only target public page is:

`https://bonusfoundry.com/providers/paysend/referral-code`

Codex must first inspect the repository to determine which files, data records, components, metadata definitions, schema generators, and configuration entries generate this specific Paysend page.

Repository paths are intentionally unspecified until repository inspection.

## Strict provider isolation

Do not modify another provider to complete this task.

Shared components may be modified only when all of the following are true:

1. the change is strictly necessary to correctly implement the Paysend page;
2. provider-specific configuration cannot reasonably handle the requirement;
3. the behavior and output of all other providers remain unchanged;
4. the final diff confirms that the change does not alter another provider.

Prefer Paysend-specific data/configuration/content over global modifications.

If a global issue is discovered — for example robots.txt, sitemap infrastructure, shared schema logic or a global component — report it instead of changing it unless the change is necessary for Paysend and demonstrably safe for every other provider.

---

# 2. Target Search Queries

Primary query cluster:

- paysend bonus
- paysend bonus code
- paysend referral link
- paysend bonus link
- paysend referral code
- paysend invite code
- paysend referral bonus

Secondary semantic intents:

- Paysend referral
- Paysend invite link
- Paysend referral program
- Paysend referral reward
- Paysend friend referral
- Paysend promo code
- Paysend promotional code
- Paysend first transfer bonus
- Paysend first transfer free
- how does Paysend referral work
- how to use Paysend referral link
- does Paysend have a referral code
- does Paysend have a bonus code
- Paysend referral eligibility
- Paysend referral countries
- Paysend referral limits

Do not keyword-stuff these terms.

The page should satisfy the different search intents naturally and explicitly.

---

# 3. Source Hierarchy

For factual claims about Paysend, use this hierarchy:

1. Current official Paysend referral/invite pages.
2. Current Paysend Help Center documentation.
3. Current official Paysend legal/promotional terms.
4. Current official Paysend blog/campaign pages.
5. Existing BonusFoundry content only as material to audit, never as the authoritative source for Paysend facts.
6. Third-party sources only for SERP/competitive analysis, never as the primary authority for Paysend promotional terms.

If BonusFoundry conflicts with a current official Paysend source, the official Paysend source wins.

If two official Paysend sources conflict, do not silently choose the more commercially attractive version.

Record the conflict and use the most conservative wording supported by the currently applicable source.

---

# 4. Verified Paysend Research / Source of Truth

Verification date for this research:

**2026-10-03**

These facts are the factual baseline for this mission.

Codex must re-check official live sources when practical before publishing if implementation occurs significantly after this verification date.

---

## PYS-01 — Paysend uses a personal invite/referral link

### Verified fact

Paysend's referral mechanism uses a personal invitation/referral link that an existing Paysend user can share with friends.

The invited person must use the invitation flow when registering.

### Official sources

Paysend referral program:

`https://paysend.com/en/bonus`

Paysend Help Center — inviting friends:

`https://help.paysend.com/hc/fr/articles/6330383807389-Comment-puis-je-inviter-des-amis`

BonusFoundry's current official Paysend invite destination:

`https://paysend.com/en/referral/06mvt6`

### Classification

Current.

### Content implication

Use terms such as:

- Paysend referral link
- Paysend invite link
- Paysend bonus link

when they accurately describe the personalized invitation mechanism.

Do not automatically call this link a generic public "referral code."

---

## PYS-02 — The invited user's currently verified benefit is a fee-free first transfer

### Verified fact

Current official Paysend material indicates that a new user who registers through an applicable invitation link can receive a **fee-free first transfer**.

The live Paysend invitation destination associated with BonusFoundry currently communicates that the first transfer is on Paysend.

### Official sources

Paysend invite-link Help Center:

`https://help.paysend.com/hc/fr/articles/6330530248989-Comment-utiliser-un-lien-d-invitation`

Live Paysend referral destination:

`https://paysend.com/en/referral/06mvt6`

### Classification

Current based on the sources verified on 2026-10-03.

### Important wording rule

Prefer:

> New users who register through an eligible Paysend invite link can currently receive a fee-free first transfer, subject to Paysend's applicable referral terms and market availability.

Avoid presenting the benefit as universally guaranteed forever.

---

## PYS-03 — The referral link must be used before account creation

### Verified fact

Paysend states that the invitation link must be used before creating the account.

An already registered user cannot retroactively apply the invitation link.

### Official source

`https://help.paysend.com/hc/fr/articles/24789296324765-J-ai-oubli%C3%A9-d-utiliser-un-lien-d-invitation-lors-de-mon-inscription-Puis-je-l-utiliser-plus-tard`

The current live referral page also supports the new-user registration requirement:

`https://paysend.com/en/referral/06mvt6`

### Classification

Current.

### Required correction

Remove any BonusFoundry language suggesting that an existing Paysend user should:

- open a second account;
- create another account;
- re-register;
- otherwise attempt to circumvent the new-user requirement.

Do not recommend workarounds around Paysend eligibility rules.

---

## PYS-04 — Current referrer reward structure

### Verified fact

The current global Paysend referral page describes a model where a referrer can earn rewards from the invited friend's first 12 qualifying transfers made during the friend's first 12 months.

The USD example displayed by Paysend is:

- $3 per qualifying transfer;
- up to 12 rewards;
- up to $36 per referred friend.

Paysend's Help Center also references localized examples including approximately:

- £1.50;
- €2.25;
- $3;

or a similar amount depending on registration location.

### Official sources

`https://paysend.com/en/bonus`

`https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend`

### Classification

Current but **market-dependent**.

### Critical content rule

Do not turn `$3 / $36` into a universal global promise.

Whenever a specific reward amount is displayed, keep the market/currency/availability qualification close to the amount.

Safe formulation:

> Paysend currently shows a $3 reward per qualifying transfer in its USD example, for up to 12 qualifying transfers during the referred friend's first 12 months — up to $36 per friend. Reward amounts and availability can vary by country.

---

## PYS-05 — Referral rewards vary by country

### Verified fact

Paysend indicates that referral reward availability and amounts can depend on the user's country/registration location.

### Official source

`https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend`

### Classification

Current.

### Required behavior

Never convert a country-specific example into a worldwide claim.

If the site knows the user's market and already has reliable Paysend-specific market configuration, use that configuration.

Otherwise prefer conditional language.

---

## PYS-06 — Paysend publishes a list of participating markets

Paysend's Help Center currently publishes country availability information for the referral program.

Treat any country list as a **dated snapshot**, not a permanent worldwide rule.

Official source:

`https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend`

Do not hard-code a country list into long-lived copy unless the existing application has an established update mechanism.

A safer page treatment is:

> Paysend referral availability varies by country. Check Paysend's current referral terms for your registration market.

The page may provide examples or a collapsible current list if there is a clear "Last verified" date and official source.

---

## PYS-07 — Users may invite multiple friends

Paysend documentation states that users can share their invite link and invite friends.

The documentation reviewed indicates that users can invite multiple friends.

Official source:

`https://help.paysend.com/hc/fr/articles/6330383807389-Comment-puis-je-inviter-des-amis`

Avoid inventing a numeric friend limit unless Paysend explicitly provides one in the currently applicable terms.

---

## PYS-08 — Some transactions do not qualify

The live Paysend invite information indicates that bonus withdrawals and card-verification microcharges are not transactions that count toward bonus eligibility.

Official source:

`https://paysend.com/en/referral/06mvt6`

Do not extrapolate additional exclusions without official evidence.

---

# 5. Referral Link vs Bonus Code vs Promo Code

This distinction is strategically important because users search for:

- paysend bonus code
- paysend referral code
- paysend invite code

but Paysend's official referral mechanism is based primarily on an invitation link.

---

## PYS-09 — Paysend referral and Paysend promo codes are separate mechanisms

### Verified fact

Paysend separately documents promotional codes.

Promo codes may be distributed through channels such as:

- newsletters;
- push notifications;
- social media;
- in-app communications;
- specific promotional campaigns.

Paysend also documents entering an applicable promo code during the transfer flow using an "Add a code" mechanism.

### Official sources

How to obtain a promo code:

`https://help.paysend.com/hc/fr/articles/6330326718493-Comment-puis-je-obtenir-un-code-promo`

How to apply a promo code:

`https://help.paysend.com/hc/en-us/articles/6330337183005-How-do-I-apply-a-promo-code`

### Classification

Current general mechanism.

### Required answer to "Paysend bonus code"

The page must not fabricate a BonusFoundry "Paysend bonus code."

Explain the distinction directly:

> Paysend referrals normally use an invite link rather than a universal referral code. Paysend also issues separate promo codes for certain campaigns. Those promotional codes are campaign-specific and should not be confused with the referral link.

This answer can satisfy the "paysend bonus code" and "paysend referral code" intent without inventing a code.

---

# 6. Expired / Historical Paysend Promotions

Historical campaigns must never be presented as the current standard referral offer.

---

## PYS-10 — Summer 2026 $5 promotion is expired

Paysend ran an official summer 2026 referral promotion.

During that campaign, the invited friend could receive:

- a fee-free first transfer; and
- $5 after a second transfer of at least $100 under the campaign's conditions.

The promotion ran from:

**2026-06-01 through 2026-07-31**

The campaign closed on July 31, 2026.

Official source:

`https://paysend.com/eu/blog/paysend-referral-promotion-summer-2026`

### Classification

**EXPIRED**

### Critical instruction

Do not present:

- "$5 after your second transfer";
- "$100 second-transfer requirement";

as the current standard Paysend referral offer.

If historical promotions are mentioned, label them explicitly as expired and include the dates.

---

## PYS-11 — September 2026 double-reward promotion is expired

Paysend ran a September 2026 referral promotion offering double referrer rewards.

The campaign described:

- $6 rather than $3 per qualifying transfer;
- up to $72 rather than $36;
- promotion period from September 1 through September 30, 2026;
- exclusions/market restrictions including the United States as described by Paysend.

Paysend explicitly stated that the standard $3 rate would return from October 1.

Official source:

`https://paysend.com/fr/blog/september-referral-rewards-2026`

### Classification

**EXPIRED as of 2026-10-03**

### Critical instruction

Do not display $6 or $72 as a current Paysend referral reward.

If mentioned, identify it clearly as a September 2026 historical promotion.

---

# 7. High-Uncertainty Paysend Finding

## PYS-12 — Live referral page metadata still references the old $5 offer

The current official referral destination:

`https://paysend.com/en/referral/06mvt6`

has been observed with document/title metadata referencing:

> Get $5 USD after your second transfer

However, the currently visible live content reviewed does not provide sufficient confirmation that the old summer `$5 after a $100+ second transfer` promotion remains an active standard offer.

The old `$5` mechanism matches Paysend's documented summer 2026 campaign that expired July 31, 2026.

### Classification

**HIGH UNCERTAINTY**

### Required interpretation

Do not use the page title alone to claim the $5 promotion is currently active.

Use the visible current terms and Paysend's current referral documentation as the factual basis.

If implementation discovers new official live terms explicitly confirming a currently active $5 offer for the exact BonusFoundry invite and applicable market, document that evidence before changing the Source of Truth.

---

# 8. BonusFoundry Issues Found During Research

Target page:

`https://bonusfoundry.com/providers/paysend/referral-code`

These are audit inputs, not instructions to blindly replace strings.

---

## BF-01 — Current BonusFoundry copy appears to treat the expired $5 campaign as current

Existing BonusFoundry material has described:

- first transfer fee-free;
- $5 after a second transfer of $100 or more;
- the mechanism as officially documented/current.

This appears to originate from the expired summer 2026 Paysend promotion.

### Required action

Audit every occurrence of:

- `$5`
- `$100`
- `second transfer`
- `second transfer of $100`
- equivalent wording

on the target Paysend referral page.

Remove or clearly historicalize the claim unless a current official Paysend source applicable to the live offer confirms it.

---

## BF-02 — Existing-user FAQ conflicts with Paysend documentation

BonusFoundry has contained language suggesting existing Paysend users could open a second account to obtain the new-user referral offer.

This conflicts with current Paysend documentation stating that the invite link must be used before registration.

### Required action

Remove this recommendation.

Replace it with a direct factual answer:

> No. Paysend says the invite link must be used before account creation and cannot be applied retroactively to an existing account.

Do not recommend account duplication or eligibility circumvention.

---

## BF-03 — Related Paysend page may also contain stale information

The general provider page:

`https://bonusfoundry.com/providers/paysend`

has also been observed with old `$5 / $100` referral language.

This mission still applies **ONLY to the target referral page**.

Do not edit the general Paysend provider page unless repository inspection proves that both pages directly consume the same Paysend-specific source record and correcting that record is required to make the target page factually correct.

If the stale information remains outside the target page, report it as a follow-up issue instead of expanding scope.

---

# 9. Current vs Expired Offer Model

The target page should make temporal status easy for users, Google and LLMs to understand.

Recommended conceptual table:

| Paysend item | Status on 2026-10-03 | Treatment |
|---|---|---|
| Fee-free first transfer through an eligible invite link | Current based on verified live sources | May appear in Quick Answer |
| Standard referrer rewards | Current, market-dependent | Explain with conditions |
| $3 / up to $36 USD example | Current USD example | Never present as universal |
| $5 after $100+ second transfer | Summer 2026 campaign expired July 31 | Historical only |
| $6 / up to $72 double rewards | September 2026 campaign expired Sept. 30 | Historical only |
| Paysend promo codes | Campaign-dependent | Explain separately from referral |
| Universal public Paysend referral code | Not verified | Do not invent one |

Do not necessarily reproduce this exact table if the site's design has a better semantic component.

Preserve the underlying distinctions.

---

# 10. Statements Codex MUST NOT Make

Unless new current official evidence is found during implementation, do not claim:

- "Use code X to get the Paysend referral bonus."
- "BonusFoundry's Paysend referral code is X."
- "Every Paysend user gets $3."
- "Every Paysend referral earns $36."
- "New Paysend users currently get $5 after sending $100."
- "The current Paysend bonus is $5."
- "Paysend's September double reward is still active."
- "Existing Paysend users can open a second account to claim the offer."
- "The referral program works in every country."
- "The referral offer never expires."
- "Paysend guarantees the same referral reward worldwide."
- "A promo code and a referral link are the same thing."

Never invent:

- a code;
- an amount;
- a minimum transfer;
- an eligibility condition;
- a country;
- an expiry date;
- a reward limit.

---

# 11. Safe Core Answers

These are semantic models, not mandatory exact copy.

## What is the Paysend referral bonus?

> Paysend's referral program currently uses a personal invite link. Eligible new users who register through the link can receive a fee-free first transfer. Referrers may earn rewards from qualifying transfers made by the invited friend, with reward amounts and availability varying by market.

## Does Paysend have a referral code?

> Paysend's standard referral flow uses a personal invite link rather than a universal public referral code. Separate Paysend promo codes can exist for specific promotional campaigns.

## Does Paysend have a bonus code?

> Paysend sometimes distributes promotional codes through specific campaigns, but these are separate from the standard referral invite link. Do not assume that one universal Paysend bonus code is currently available.

## How does the Paysend referral link work?

> A new user opens an eligible Paysend invite link before creating an account, registers through that flow and follows Paysend's referral conditions. Paysend currently advertises a fee-free first transfer for eligible invitees.

## Can an existing Paysend user apply the referral link?

> Paysend says the invite link must be used before account creation and cannot be added retroactively after registration.

## What does the Paysend referrer earn?

> Paysend currently describes rewards for qualifying transfers made by the invited friend during their first 12 months. Its USD example is $3 for each of the first 12 qualifying transfers, up to $36 per friend, but amounts and availability vary by market.

---

# 12. Recommended SEO Metadata

The target page is currently an English route/content context unless repository configuration indicates otherwise.

Do not translate the page merely because this implementation brief contains French research sources.

## Recommended English title

`Paysend Bonus & Referral Link: Fee-Free First Transfer | BonusFoundry`

Keep within the site's established title conventions where possible.

## Recommended English meta description

`Paysend referral link explained: new users get a fee-free first transfer. See referrer rewards, eligibility, limits, promo-code differences and official sources.`

## Recommended H1

`Paysend bonus and referral link: how it works`

The exact final metadata can be adjusted for length or existing site conventions, but preserve:

- Paysend;
- bonus;
- referral link;
- the current fee-free first-transfer benefit;
- informational intent rather than fabricated "code" claims.

---

# 13. Recommended Content Architecture

Use one clear H1.

Recommended structure:

```text
H1 Paysend bonus and referral link: how it works

H2 Quick answer: current Paysend referral offer

H2 How the Paysend referral link works

H2 Paysend referral bonus: what the referrer earns

H2 Paysend bonus code vs referral link

H2 Eligibility, limits and country availability

H2 Recent expired Paysend referral promotions

H2 Paysend referral FAQ

H2 Official Paysend sources and last verification
```

Subheadings may be added where useful.

Do not create headings solely to repeat keywords.

---

# 14. Quick Answer Requirements

The first substantive section should provide a concise answer without requiring the visitor to read the full page.

It should explain:

1. Paysend uses an invite/referral link.
2. The eligible new-user benefit currently verified is a fee-free first transfer.
3. The link must be used before registration.
4. Referrer rewards can vary by country.
5. Paysend promo codes are a separate mechanism.
6. Historical $5 and September double-reward campaigns should not be confused with the current standard offer.

Keep this section concise.

Detailed conditions belong below.

---

# 15. GEO / AEO / LLM Citation Requirements

Optimize for accurate extraction, not for "AI tricks."

Important answer blocks should be independently understandable.

For important factual paragraphs:

1. explicitly name **Paysend** rather than relying heavily on pronouns;
2. answer the question in the first sentence;
3. keep critical conditions in the same paragraph as the claim;
4. state whether an amount is market-specific;
5. state whether an offer is current or expired when temporally relevant;
6. link to the relevant official Paysend source nearby;
7. avoid vague phrases such as "this bonus" where the referent could be ambiguous.

Example of an atomic statement:

> Paysend currently advertises a fee-free first transfer for eligible new users who register through an applicable invite link. The link must be used before account creation, and referral availability can vary by market.

This is preferable to scattering each condition across unrelated sections.

---

# 16. Provenance and Freshness

Display a visible freshness indicator such as:

`Last verified against official Paysend sources: October 3, 2026`

Use the site's existing date/update component if available.

Do not imply that BonusFoundry is Paysend.

Clearly distinguish:

- BonusFoundry editorial explanations;
- official Paysend conditions;
- historical Paysend promotions.

Important claims should have nearby official source links.

---

# 17. Official Sources Section

The page should link to the most relevant official Paysend sources rather than overwhelming users with every research URL.

Recommended primary sources:

Paysend referral program:

`https://paysend.com/en/bonus`

Paysend invite link documentation:

`https://help.paysend.com/hc/fr/articles/6330530248989-Comment-utiliser-un-lien-d-invitation`

Paysend referral bonus documentation:

`https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend`

Paysend invitation documentation:

`https://help.paysend.com/hc/fr/articles/6330383807389-Comment-puis-je-inviter-des-amis`

Paysend existing-account rule:

`https://help.paysend.com/hc/fr/articles/24789296324765-J-ai-oubli%C3%A9-d-utiliser-un-lien-d-invitation-lors-de-mon-inscription-Puis-je-l-utiliser-plus-tard`

Paysend promo code documentation:

`https://help.paysend.com/hc/fr/articles/6330326718493-Comment-puis-je-obtenir-un-code-promo`

`https://help.paysend.com/hc/en-us/articles/6330337183005-How-do-I-apply-a-promo-code`

Historical summer promotion:

`https://paysend.com/eu/blog/paysend-referral-promotion-summer-2026`

Historical September promotion:

`https://paysend.com/fr/blog/september-referral-rewards-2026`

Prefer localized official sources matching the page language when an equivalent current official page exists and communicates the same terms.

---

# 18. FAQ Topics

Create FAQ content only when it genuinely helps users.

Recommended questions:

1. What is the Paysend referral bonus?
2. How do I use a Paysend referral link?
3. Does Paysend have a referral code?
4. Does Paysend have a bonus or promo code?
5. What does a new Paysend user get from the referral link?
6. What does the Paysend referrer earn?
7. Can existing Paysend users use a referral link?
8. Is the Paysend referral program available in every country?
9. Is the old $5 Paysend referral promotion still available?
10. Are Paysend promo codes the same as referral links?

Do not pad answers for word count.

Answer directly, then add only necessary qualifications.

---

# 19. Internal Linking

Inspect BonusFoundry's existing internal-link architecture.

Add only contextually useful links.

Potential destinations may include:

- the main Paysend provider page;
- relevant money-transfer/referral categories;
- related provider comparison pages;
- BonusFoundry editorial methodology;
- relevant bonus/referral educational pages.

Do not modify those destination pages as part of this task.

Use descriptive anchors.

Avoid repetitive exact-match keyword anchors.

---

# 20. External Linking

For Paysend-specific factual claims, link primarily to official Paysend sources.

External links should help verify:

- referral mechanics;
- eligibility;
- reward amounts;
- country variability;
- invite-link requirements;
- promo-code mechanics;
- expired promotions when discussed.

Do not cite third-party coupon sites as evidence for a current Paysend bonus.

---

# 21. Structured Data

Structured data must match visible page content.

Do not create schema purely to manipulate rich results.

Review the site's current schema architecture before adding anything.

Appropriate candidates include:

- `WebPage`;
- `BreadcrumbList`;
- `Article` only if the page genuinely fits the site's editorial/article model.

Do not automatically use `QAPage`.

The page is primarily a referral/bonus informational landing page, not a community question page with multiple user-submitted answers.

Do not fabricate:

- `Offer`;
- prices;
- reviews;
- ratings;
- authors;
- promotional values;
- organization relationships.

If FAQ structured data is already part of the site's architecture, ensure that:

- every structured question and answer is visible on the page;
- the content exactly reflects the visible FAQ;
- current Google eligibility/support is considered;
- no expectation of a rich result is implied.

Relevant Google documentation:

`https://developers.google.com/search/docs/appearance/structured-data/search-gallery`

`https://developers.google.com/search/docs/appearance/structured-data/breadcrumb`

`https://developers.google.com/search/docs/appearance/structured-data/article`

`https://developers.google.com/search/docs/appearance/structured-data/qapage`

---

# 22. Google AI Search / GEO Technical Principles

Google's documented guidance for AI search features does not require special "AI schema."

Apply normal high-quality SEO fundamentals:

- crawlable/indexable page;
- important content available as text;
- useful internal links;
- accurate structured data matching visible content;
- descriptive titles/headings;
- factual clarity;
- source provenance.

Reference:

`https://developers.google.com/search/docs/appearance/ai-features`

Do not implement speculative "AI optimization" markup.

---

# 23. ChatGPT / LLM Discoverability

OpenAI documents OAI-SearchBot separately from GPTBot.

Check whether the site's global crawler configuration allows appropriate search discovery.

Official documentation:

`https://developers.openai.com/api/docs/bots`

If OAI-SearchBot is globally blocked, report the issue.

Do **not** silently modify a global robots.txt policy as part of this Paysend-only mission unless explicitly authorized and proven safe for the rest of the site.

No implementation can guarantee that ChatGPT or another LLM will cite this page.

Optimize for discoverability, factual extraction and provenance rather than promising citation.

---

# GOAL 1 — Audit ONLY the Paysend Page Against Verified Paysend Research

## Scope — Paysend Only

This goal applies exclusively to the **Paysend** provider and this page:

`https://bonusfoundry.com/providers/paysend/referral-code`

Do not modify any other provider.

Do not use assumptions based on another provider's referral program.

The `Verified Paysend Research / Source of Truth` section in this document is the factual baseline.

---

## Objective

Understand exactly how the Paysend page is generated and identify every factual, SEO, AEO, GEO and technical issue before implementation.

---

## Tasks

### 1. Locate the Paysend implementation

Inspect the repository before editing.

Identify:

- Paysend provider configuration;
- Paysend referral configuration;
- Paysend page content;
- Paysend metadata;
- referral URL configuration;
- reward/offer data;
- FAQ data;
- schema data;
- date/update data;
- source/citation data;
- components used by the Paysend page.

Search the repository for:

```text
paysend
06mvt6
$5 USD
$5
$100 USD
$100
second transfer
first transfer
Existing Paysend users
opening a second account
referral-code
Officially Documented
September 12, 2026
```

Do not assume that the first search result is the only source.

Trace the rendering/data path.

### 2. Audit the existing Paysend page

Review:

- `<title>`;
- meta description;
- canonical;
- robots directives;
- H1;
- H2/H3 hierarchy;
- introductory answer;
- offer summary;
- reward summary;
- eligibility;
- country information;
- referral-link instructions;
- referral-code wording;
- promo-code wording;
- FAQ;
- official source links;
- internal links;
- last-updated/verified date;
- structured data;
- OpenGraph metadata;
- rendered HTML;
- mobile content;
- accessibility basics.

### 3. Compare every Paysend claim with the Source of Truth

Specifically flag:

- current claims;
- outdated claims;
- expired promotional claims;
- unsupported claims;
- country-specific claims presented as universal;
- ambiguous code/link terminology;
- contradictory FAQ answers.

### 4. Identify the $5 / $100 legacy campaign

Find every place in the target Paysend page implementation where the expired summer campaign may still influence visible or structured content.

Do not merely replace `$5`.

Understand whether the data is:

- static copy;
- offer configuration;
- reusable provider data;
- metadata;
- schema;
- FAQ;
- cached/generated content.

### 5. Identify the existing-user issue

Find any copy recommending or implying that an existing Paysend user can create another account to obtain the referral offer.

Mark it for removal.

### 6. Record scope risks

If Paysend uses shared provider data/components, identify which changes can remain Paysend-specific.

Do not modify other providers during Goal 1.

---

## Goal 1 Deliverable

Before substantive implementation, have a clear internal audit mapping:

```text
Current Paysend claim
→ Source file/data
→ Current status
→ Official Paysend evidence
→ Required action
```

Statuses:

```text
KEEP
UPDATE
REMOVE
HISTORICAL_ONLY
CONDITIONAL
UNCERTAIN
```

---

## Goal 1 Acceptance Criteria

Goal 1 is complete only when:

- the exact implementation path for the Paysend referral page is understood;
- current Paysend-specific data sources in the repository are identified;
- stale `$5 / $100` content is located;
- existing-user misinformation is located;
- metadata and structured-data sources are identified;
- every important visible Paysend promotional claim can be mapped to official evidence or flagged as unsupported;
- no other provider has been modified.

---

# GOAL 2 — Implement ONLY the Paysend SEO + GEO + AEO Optimization

## Scope — Paysend Only

This goal applies exclusively to **Paysend** and:

`https://bonusfoundry.com/providers/paysend/referral-code`

Do not optimize another provider.

Do not copy offer mechanics from Wise, Remitly, Revolut, Western Union or any other provider into Paysend.

All Paysend-specific factual claims must come from the Verified Paysend Research or newer official Paysend evidence found during implementation.

---

## Objective

Rewrite and restructure the Paysend referral page so that it:

- accurately describes the current Paysend referral mechanism;
- satisfies the target search intents;
- clearly distinguishes referral links from promo codes;
- clearly separates current offers from expired campaigns;
- provides answer-first content;
- is easy for Google and LLMs to extract accurately;
- exposes clear provenance and freshness.

---

## Required implementation

### A. Correct outdated Paysend offer information

Remove the expired summer `$5 after $100+ second transfer` mechanism from any section that presents it as current.

If useful, mention it only in a clearly labeled historical/expired promotions section.

Remove the expired September double-reward promotion from current-offer sections.

Never show `$6 / $72` as current.

### B. Correct existing-user information

Remove recommendations to create a second account.

Explain that Paysend says the referral link must be used before account creation.

### C. Implement the new answer-first structure

Use approximately:

```text
H1 Paysend bonus and referral link: how it works

H2 Quick answer: current Paysend referral offer

H2 How the Paysend referral link works

H2 Paysend referral bonus: what the referrer earns

H2 Paysend bonus code vs referral link

H2 Eligibility, limits and country availability

H2 Recent expired Paysend referral promotions

H2 Paysend referral FAQ

H2 Official Paysend sources and last verification
```

Adapt to existing component architecture without losing semantic clarity.

### D. Cover all primary intents

The page must naturally answer:

- What is the Paysend bonus?
- Is there a Paysend bonus code?
- Is there a Paysend referral code?
- Where is the Paysend referral link?
- What is the Paysend bonus link?
- What does the new user receive?
- What does the referrer receive?
- How does Paysend referral work?
- Can an existing user use it?
- Is it available everywhere?
- Are promo codes and referral links the same?
- Is the old $5 offer still active?

### E. Implement safe reward wording

If using the current USD example, write the conditions with it.

Do not isolate "$36 bonus" in a heading or callout in a way that implies every user receives $36.

Prefer:

> Paysend's current USD example pays the referrer $3 for each of the referred friend's first 12 qualifying transfers during their first 12 months, up to $36 per friend. Amounts and availability vary by market.

### F. Implement the code-vs-link distinction

This is essential for SEO.

Searchers using `paysend bonus code`, `paysend referral code` and `paysend invite code` should receive a useful answer even if there is no universal public code.

Do not invent a code to match the keyword.

### G. Add visible official-source attribution

Important claims should have appropriate official Paysend references.

Do not hide all provenance at the bottom if a claim is especially time-sensitive.

### H. Add freshness information

Use a visible Last Verified treatment.

Initial research verification:

`October 3, 2026`

If Codex independently re-verifies the official sources on a later implementation date, use that actual verification date.

Never fabricate a verification date.

### I. Improve title/meta/H1

Recommended starting point:

Title:

`Paysend Bonus & Referral Link: Fee-Free First Transfer | BonusFoundry`

Meta:

`Paysend referral link explained: new users get a fee-free first transfer. See referrer rewards, eligibility, limits, promo-code differences and official sources.`

H1:

`Paysend bonus and referral link: how it works`

Adjust only when required by established site conventions or length constraints.

### J. Improve internal linking

Add useful internal links using existing BonusFoundry destinations/components.

Do not edit the destination pages.

### K. Preserve useful existing functionality

Do not break:

- referral CTA;
- tracking;
- attribution;
- analytics;
- provider routing;
- locale behavior;
- responsive behavior;
- reusable components.

Do not change the live Paysend referral destination unless repository evidence shows it is incorrect.

---

## GEO/AEO implementation rules

Important answer blocks should:

- mention Paysend explicitly;
- answer immediately;
- contain essential conditions;
- avoid dependence on preceding paragraphs;
- distinguish current vs expired;
- distinguish referral vs promo code;
- include market qualifications where necessary.

Avoid:

- keyword stuffing;
- repeated near-identical FAQs;
- hidden SEO text;
- fake expert quotes;
- fake authors;
- fake reviews;
- unsupported superlatives;
- artificial "LLM schema";
- promotional claims unsupported by Paysend.

---

## Goal 2 Acceptance Criteria

Goal 2 is complete only when:

- the current Paysend referral mechanism is explained accurately;
- the fee-free first-transfer benefit is explained with appropriate eligibility language;
- referrer rewards are presented with market variability;
- referral link and promo code are clearly distinguished;
- `paysend bonus code` intent is answered without inventing a code;
- the old `$5 / $100` promotion is not presented as current;
- the September `$6 / $72` promotion is not presented as current;
- existing Paysend users are not told to create another account;
- primary search intents are answered;
- important answers are understandable when extracted independently;
- official Paysend provenance is visible;
- a Last Verified date is visible;
- no other provider has been intentionally modified.

---

# GOAL 3 — Validate ONLY the Final Paysend Page

## Scope — Paysend Only

This validation goal applies exclusively to the final implementation of:

`https://bonusfoundry.com/providers/paysend/referral-code`

The validation must explicitly check that work on Paysend has not unintentionally changed another provider.

Do not use Goal 3 as permission to "clean up" unrelated providers or global SEO issues.

---

## Objective

Verify factual accuracy, technical SEO, structured data, crawlability, rendering, tests and provider isolation before considering the mission complete.

---

## A. Factual validation

Re-read the final rendered Paysend page.

Confirm:

- referral link mechanism is correct;
- new-user requirement is correct;
- fee-free first-transfer wording is properly qualified;
- referrer reward conditions are present;
- market variability is stated;
- promo codes are distinguished from referral links;
- expired campaigns are explicitly historical;
- no unsupported bonus amount appears.

Search the final output/source for:

```text
$5
$100
second transfer
$6
$72
second account
opening a second account
```

Any occurrence must be intentionally historical/contextualized or removed.

---

## B. Metadata validation

Check:

- title;
- meta description;
- canonical;
- robots meta;
- OpenGraph title;
- OpenGraph description;
- social URL;
- H1.

Canonical should be self-referencing unless the existing site architecture has a valid documented reason otherwise.

Target canonical:

`https://bonusfoundry.com/providers/paysend/referral-code`

---

## C. Indexability and crawlability

Confirm:

- page is indexable;
- critical text exists in crawlable rendered HTML;
- important answers do not require unnecessary interaction;
- links are standard crawlable links where appropriate;
- no accidental `noindex`;
- no accidental canonical to another provider.

If global robots configuration blocks an important search crawler, report it rather than changing unrelated global policy.

---

## D. Structured data validation

Inspect rendered JSON-LD.

Confirm:

- schema is syntactically valid;
- visible content matches schema;
- breadcrumb URLs are correct;
- no expired reward remains in structured data;
- no fabricated offer/review/rating exists;
- no another provider's entity data leaks into Paysend;
- FAQ data, if present, matches visible FAQ exactly.

Prefer the site's established `WebPage` / `BreadcrumbList` architecture.

Use `Article` only if semantically justified.

Do not introduce `QAPage` merely because the page has an FAQ.

---

## E. Link validation

Check:

- Paysend CTA destination;
- official Paysend source links;
- internal links;
- breadcrumb links.

No broken links.

Do not replace official Paysend citations with coupon/affiliate sites.

---

## F. Mobile and accessibility validation

At minimum check:

- heading hierarchy;
- CTA accessibility;
- source links;
- table responsiveness;
- FAQ controls;
- keyboard behavior where applicable;
- descriptive link text;
- no essential content hidden on mobile.

---

## G. Repository validation

Run the repository's existing relevant commands.

Examples, only if available:

```text
lint
typecheck
test
build
```

Do not invent commands.

Inspect package scripts / project documentation first.

Resolve errors introduced by this Paysend work.

Do not fix unrelated pre-existing failures unless necessary to validate the change.

Document unrelated pre-existing failures separately.

---

## H. Provider-isolation validation

This is mandatory.

Review the final diff.

Confirm that:

- Paysend-specific content changed only where intended;
- no other provider's content changed;
- no other provider's metadata changed;
- no other provider's referral reward changed;
- no other provider's schema changed unexpectedly;
- shared-component changes, if any, preserve existing behavior.

If snapshots/tests exist for other providers affected by a shared component, run the relevant validation.

---

## I. Final rendered-content check

The final Paysend page should allow a user or search engine to answer, without ambiguity:

1. What is the current Paysend referral benefit?
2. How does the invite link work?
3. Does Paysend use a referral code?
4. Are promo codes different?
5. What does the referrer earn?
6. Do reward amounts vary?
7. Can existing users apply the link?
8. Is the program universally available?
9. Is the old $5 promotion current?
10. When was BonusFoundry's information last verified?

If any answer is unclear, revise the Paysend page before completion.

---

## Goal 3 Acceptance Criteria

Goal 3 is complete only when:

- final Paysend claims match current official evidence;
- expired offers cannot reasonably be mistaken for current offers;
- title/meta/H1 are coherent;
- canonical is correct;
- page remains indexable;
- important content is crawlable;
- structured data matches visible content;
- links work;
- relevant build/lint/typecheck/tests pass or unrelated failures are documented;
- mobile/basic accessibility checks pass;
- final diff has been reviewed;
- no other provider has been unintentionally modified.

---

# 24. Global Rules for All Three Goals

These rules apply throughout the task.

## Paysend-only rule

Every goal applies only to Paysend.

Never infer Paysend behavior from another provider.

Never edit another provider merely for consistency.

## Factual rule

Current official Paysend documentation is authoritative for Paysend-specific promotional facts.

Never fabricate facts for SEO.

## Temporal rule

Always distinguish:

- current;
- market-specific;
- conditional;
- historical;
- expired;
- uncertain.

## Reward rule

Never present an example reward amount as globally universal when Paysend says rewards vary by market.

## Referral-code rule

Do not invent a referral code simply because users search for "Paysend referral code."

Answer the intent truthfully.

## Promo-code rule

Do not claim that a Paysend promotional code is the same mechanism as a Paysend referral invite link.

## Existing-user rule

Do not recommend opening a second account to bypass new-user eligibility.

## URL rule

Keep the existing target URL:

`/providers/paysend/referral-code`

unless a severe technical issue makes a URL change unavoidable.

A keyword-based URL change is not sufficient justification.

## Architecture rule

Preserve the application's existing architecture and coding conventions.

Reuse existing components when appropriate.

Prefer provider-specific configuration to unnecessary global component forks.

## Quality rule

SEO, GEO and AEO changes must improve factual usefulness and clarity, not merely increase keyword frequency.

## Testing rule

Inspect available project scripts and run relevant validation after implementation.

---

# 25. Final Acceptance Criteria for the Entire Mission

The complete mission is finished only if all of the following are true.

### Scope

- [ ] Only the Paysend referral/bonus page was intentionally optimized.
- [ ] No other provider was modified unintentionally.
- [ ] Any necessary shared-component change was verified against other providers.

### Paysend factual accuracy

- [ ] Current Paysend referral mechanics are based on official Paysend sources.
- [ ] The invite/referral link requirement is correctly explained.
- [ ] The new-user registration requirement is correctly explained.
- [ ] The fee-free first transfer is accurately described.
- [ ] Referrer rewards include relevant conditions.
- [ ] Market/country variability is disclosed.
- [ ] No universal reward amount is invented.
- [ ] No universal referral code is invented.
- [ ] Promo codes are distinguished from referral links.

### Expired promotions

- [ ] Summer 2026 `$5 / $100` promotion is not presented as current.
- [ ] September 2026 `$6 / $72` promotion is not presented as current.
- [ ] Historical campaigns, if retained, include dates and expired status.

### Existing users

- [ ] No recommendation to open a second Paysend account remains.
- [ ] Page explains that the referral link must be used before registration.

### SEO

- [ ] Title is optimized for Paysend intent.
- [ ] Meta description accurately represents the page.
- [ ] One clear H1 exists.
- [ ] Heading structure reflects user questions/intents.
- [ ] Target queries are covered naturally.
- [ ] Internal links are useful rather than stuffed.
- [ ] Official external sources are present.

### GEO / AEO

- [ ] Important answers are answer-first.
- [ ] Important claims are atomic and understandable independently.
- [ ] Paysend is explicitly named in critical answer blocks.
- [ ] Current vs expired information is unambiguous.
- [ ] Referral link vs promo code is unambiguous.
- [ ] Official provenance is visible.
- [ ] A genuine Last Verified date is visible.

### Technical SEO

- [ ] Canonical is correct.
- [ ] Page is indexable.
- [ ] Important content is crawlable.
- [ ] Structured data matches visible content.
- [ ] Breadcrumb structured data is correct where used.
- [ ] No fabricated Offer/Review/Rating data exists.
- [ ] No stale expired bonus exists in JSON-LD.
- [ ] No another provider's structured data leaks into Paysend.

### Quality assurance

- [ ] Relevant tests pass.
- [ ] Relevant lint/typecheck/build checks pass or unrelated existing failures are documented.
- [ ] Mobile rendering is checked.
- [ ] Basic accessibility is checked.
- [ ] Links are checked.
- [ ] Final diff is reviewed.

---

# 26. Required Final Codex Report

When implementation is complete, return a concise report containing:

## 1. Paysend files changed

List every modified file and explain why it was necessary for the Paysend page.

## 2. Paysend factual corrections

List the important outdated/incorrect claims removed or corrected.

Explicitly mention the treatment of:

- `$5 / $100` summer promotion;
- September double rewards;
- existing-user/second-account wording;
- referral link vs promo code.

## 3. SEO changes

Summarize:

- title;
- meta description;
- H1/headings;
- internal links;
- source links;
- canonical changes if any.

## 4. GEO/AEO changes

Summarize:

- answer-first blocks;
- atomic claims;
- source attribution;
- Last Verified;
- current-vs-expired distinction;
- referral-link-vs-code distinction.

## 5. Structured-data changes

List exactly what schema changed and why.

## 6. Validation performed

List actual commands/checks run.

Do not claim tests were run if they were not.

## 7. Remaining uncertainties

Document any unresolved conflict in official Paysend material.

In particular, mention the live referral page metadata `$5` anomaly if it remains unresolved.

## 8. Provider isolation confirmation

Explicitly state whether any non-Paysend provider files/content/output changed.

If a shared component changed, explain how other providers were checked.

---

# Final Instruction to Codex

Implement this mission in the order:

**GOAL 1 → GOAL 2 → GOAL 3**

Do not skip the factual audit and immediately rewrite the page.

The most important constraint is:

> **This task is exclusively about Paysend. Do not modify or infer behavior for any other provider.**

The second most important constraint is:

> **Do not improve keyword coverage by inventing a Paysend bonus, referral code, promo code, reward amount, eligibility condition or active promotion that is not supported by current official Paysend evidence.**

The desired result is not simply a page that mentions more Paysend keywords.

The desired result is a **current, source-backed, search-friendly Paysend referral resource that Google, users and LLMs can understand without confusing expired promotions, market-specific rewards, referral links and promotional codes.**