# Goal 9 — Strengthen BonusFoundry Brand Entity and Organization Schema

## Context

BonusFoundry received an AEO audit score of `0/10` for Entity & Brand Trust.

The main issues are:

- inconsistent brand identity signals;
- missing logo in the `Organization` schema;
- weak cross-platform identity links;
- limited publisher and author connections;
- insufficient proprietary verification signals.

The new BonusFoundry logo is available as a PNG asset.

Use the exact brand name everywhere:

```txt
BonusFoundry
```

Do not use:

```txt
Bonus Foundry
Bonus-Foundry
bonus foundry
```

except where technically required, such as the domain name.

---

## Main Objective

Make BonusFoundry easier for Google and AI systems to recognize as a consistent organization and publisher.

Implement:

- the new logo;
- complete `Organization` schema;
- consistent brand naming;
- publisher connections;
- editorial identity connections;
- valid cross-platform identity links;
- stronger proprietary verification signals.

---

## Logo Asset

Add the new horizontal PNG logo to the public assets directory.

Suggested path:

```txt
/public/brand/bonusfoundry-logo.png
```

Expected public URL:

```txt
https://bonusfoundry.com/brand/bonusfoundry-logo.png
```

Requirements:

- PNG format;
- transparent background;
- horizontally cropped;
- minimal empty space;
- icon and wordmark must fill most of the image width;
- readable at small sizes;
- accessible without authentication;
- not blocked by `robots.txt`;
- returned with a successful HTTP status.

Also create or retain a square icon version if needed for:

- favicon;
- social profiles;
- app icons;
- structured data;
- Open Graph images.

Suggested square path:

```txt
/public/brand/bonusfoundry-icon.png
```

---

## Website Logo Integration

Use the new logo consistently in:

- site header;
- footer where appropriate;
- About page;
- Open Graph metadata;
- social metadata;
- Organization structured data.

Preserve accessibility.

Example:

```tsx
<Image
  src="/brand/bonusfoundry-logo.png"
  alt="BonusFoundry"
  width={600}
  height={200}
  priority
/>
```

Use dimensions matching the real image ratio.

Do not stretch or distort the logo.

---

## Organization Schema

Locate the existing `Organization` schema and complete it.

Use one canonical organization identifier:

```txt
https://bonusfoundry.com/#organization
```

Suggested structure:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bonusfoundry.com/#organization",
  "name": "BonusFoundry",
  "url": "https://bonusfoundry.com/",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://bonusfoundry.com/#logo",
    "url": "https://bonusfoundry.com/brand/bonusfoundry-logo.png",
    "contentUrl": "https://bonusfoundry.com/brand/bonusfoundry-logo.png",
    "caption": "BonusFoundry"
  },
  "description": "Independent knowledge base for international money transfer referral programs, welcome bonuses and signup promotions.",
  "sameAs": []
}
```

Use the real production logo URL.

Do not create duplicate `Organization` objects with different IDs.

---

## Brand Name Consistency

Audit the entire codebase for inconsistent brand spelling.

Use exactly:

```txt
BonusFoundry
```

Review:

- metadata titles;
- meta descriptions;
- Open Graph tags;
- structured data;
- header;
- footer;
- About page;
- Editorial Policy;
- Research Methodology;
- contact page;
- `llms.txt`;
- sitemap-related metadata;
- JSON content;
- social descriptions.

Do not alter the domain:

```txt
bonusfoundry.com
```

---

## SameAs Identity Links

Add only real, public BonusFoundry profiles to `sameAs`.

Possible platforms:

- X;
- Reddit;
- LinkedIn;
- GitHub;
- other official BonusFoundry profiles.

Example:

```json
"sameAs": [
  "https://x.com/REAL_BONUSFOUNDRY_PROFILE",
  "https://www.reddit.com/user/REAL_BONUSFOUNDRY_PROFILE",
  "https://www.linkedin.com/company/REAL_BONUSFOUNDRY_PROFILE"
]
```

Do not add:

- placeholder URLs;
- unrelated personal profiles;
- profiles that do not visibly reference BonusFoundry;
- inactive or private accounts.

If no valid profiles are currently available, keep `sameAs` empty or omit it until they exist.

---

## WebSite Schema

Ensure the website has one canonical `WebSite` schema connected to the organization.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bonusfoundry.com/#website",
  "url": "https://bonusfoundry.com/",
  "name": "BonusFoundry",
  "publisher": {
    "@id": "https://bonusfoundry.com/#organization"
  }
}
```

Avoid duplicate `WebSite` schema definitions.

---

## Publisher Connections

Connect all relevant content schemas to BonusFoundry.

For `Article`, `BlogPosting`, `WebPage`, guides, provider pages and referral pages, use:

```json
"publisher": {
  "@id": "https://bonusfoundry.com/#organization"
}
```

Do not redefine the complete organization object on every page.

Reference the canonical organization ID.

---

## Editorial Identity

Use the existing editorial identity consistently:

```txt
BonusFoundry Editorial Team
```

Suggested identifier:

```txt
https://bonusfoundry.com/#editorial-team
```

Connect article schemas to it:

```json
"author": {
  "@id": "https://bonusfoundry.com/#editorial-team"
}
```

The editorial identity must not claim fictional qualifications or certifications.

Describe the team through its process:

- reviews official provider websites;
- checks referral terms;
- verifies app offers manually;
- reviews help-center documentation;
- updates pages when offers change.

---

## Open Graph and Social Metadata

Use consistent brand metadata.

Suggested values:

```txt
og:site_name = BonusFoundry
twitter:title = page title
twitter:card = summary_large_image
```

Use an appropriate social image.

Do not use the narrow horizontal logo as a large social preview if it produces excessive whitespace.

Create or retain a dedicated Open Graph image if needed.

---

## Proprietary Verification Signals

Strengthen BonusFoundry as a primary verification source.

Where information was manually checked, expose:

- manually verified status;
- verification date;
- provider app used;
- reward amount;
- minimum qualifying transfer;
- offer expiration status;
- relevant country or currency;
- anonymized screenshot when appropriate.

Example:

```txt
Manually verified in the TapTap Send app on [date].

Referral code: SALAHEDD1933
Bonus: €10 or $10
Minimum transfer: €100 or $100
Expiration: No expiration date displayed
```

Do not describe app-verified information as official public documentation.

Keep the distinction clear:

- Official provider source
- Manual BonusFoundry verification

---

## Official Source Links

Every provider or referral page should link directly to relevant official sources when available:

- provider website;
- referral terms;
- promotion terms;
- help center;
- FAQ;
- support page;
- legal terms.

Do not rely on unofficial coupon or referral websites as primary sources.

---

## Internal Identity Links

Ensure the footer or relevant site navigation links to:

- About;
- Editorial Policy;
- Research Methodology;
- Disclosure;
- Contact.

These pages should refer consistently to:

```txt
BonusFoundry
BonusFoundry Editorial Team
```

---

## Technical Requirements

- Keep the site static-first.
- Reuse existing schema utilities.
- Do not add a database.
- Do not add a CMS.
- Do not introduce unnecessary client-side JavaScript.
- Do not create duplicate JSON-LD blocks.
- Use absolute production URLs inside structured data.
- Escape JSON-LD safely.
- Preserve existing metadata and schema where valid.

---

## Validation

Confirm:

- the logo URL returns HTTP 200;
- the logo is visible and not distorted;
- the logo is included in `Organization` schema;
- only one canonical organization ID exists;
- only one canonical website ID exists;
- publisher references resolve to the organization ID;
- brand spelling is consistent;
- no placeholder social links remain;
- structured data passes validation;
- no schema duplication was introduced;
- build passes;
- lint passes.

Also test the homepage with:

- Google Rich Results Test;
- Schema.org Validator;
- browser source inspection;
- structured data inspection.

---

## Deliverables

Return:

1. Files created or modified.
2. Final logo asset paths.
3. Final public logo URLs.
4. Organization schema changes.
5. WebSite schema changes.
6. Publisher and author connections added.
7. Brand spelling inconsistencies corrected.
8. `sameAs` links added or intentionally omitted.
9. Official source links improved.
10. Structured data validation result.
11. Build result.
12. Lint result.