# Goal — Integrate BonusFoundry Social Profiles Across the Website

## Context

BonusFoundry now has official social profiles on:

- Instagram: https://www.instagram.com/bonusfoundry/
- Pinterest: https://www.pinterest.com/bonusfoundry/
- X: https://x.com/bonusfoundry

These profiles must be integrated consistently across the website to strengthen:

- brand entity recognition;
- AEO;
- GEO;
- SEO;
- Organization schema;
- cross-platform identity signals;
- user trust.

Use the exact brand name:

```txt
BonusFoundry
```

Do not use alternate brand spellings unless technically required.

---

## Main Objective

Integrate the official BonusFoundry social profiles into the website in a clean, consistent, schema-friendly way.

The implementation should connect the website entity `BonusFoundry` with its official social profiles through:

- `Organization` schema;
- footer links;
- About page;
- Editorial / trust pages where relevant;
- metadata where appropriate.

Do not overuse social links.

Keep the implementation lightweight and static-first.

---

## Official Social Profiles

Use exactly these URLs:

```txt
Instagram
https://www.instagram.com/bonusfoundry/

Pinterest
https://www.pinterest.com/bonusfoundry/

X
https://x.com/bonusfoundry
```

---

## Organization Schema

Update the canonical `Organization` schema.

Use the existing canonical organization ID:

```txt
https://bonusfoundry.com/#organization
```

Add the social profiles to `sameAs`.

Expected structure:

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
    "url": "https://bonusfoundry.com/brand/bonusfoundry-logo.png"
  },
  "sameAs": [
    "https://www.instagram.com/bonusfoundry/",
    "https://www.pinterest.com/bonusfoundry/",
    "https://x.com/bonusfoundry"
  ]
}
```

Do not create a second `Organization` object.

Do not duplicate `sameAs` elsewhere unless required by the existing schema architecture.

---

## Footer Integration

Add a compact social-links section to the global footer.

Display:

- Instagram
- Pinterest
- X

Use accessible text links, lightweight icons, or both if consistent with the current design system.

Example:

```txt
Follow BonusFoundry

Instagram
Pinterest
X
```

Requirements:

- preserve the existing footer layout;
- use descriptive `aria-label` values if icons are used;
- keep the section compact;
- do not add unnecessary client-side JavaScript.

---

## About Page

Add a small section:

```txt
Follow BonusFoundry
```

Suggested copy:

```txt
BonusFoundry publishes updates and educational content about money transfer referral programs, welcome bonuses and transfer guides across Instagram, Pinterest and X.
```

Then list the three official profiles.

Keep the copy concise and neutral.

---

## Editorial / Trust Pages

Where appropriate, reference the official social presence from:

- About;
- Editorial Policy;
- Research Methodology;
- Contact.

Do not repeat the links on every page.

The footer should remain the main global navigation location for social profiles.

---

## Brand Consistency

Audit brand references around social integration.

Use exactly:

```txt
BonusFoundry
```

Avoid inconsistent variants such as:

```txt
Bonus Foundry
Bonus-Foundry
bonus foundry
```

unless technically necessary.

---

## Social Metadata

Review existing Open Graph and X metadata.

Ensure:

```txt
og:site_name = BonusFoundry
```

If the current Next.js metadata architecture supports an X site handle, set:

```txt
@bonusfoundry
```

Do not invent Instagram or Pinterest metadata fields.

---

## External Link Handling

For visible social links:

- use normal `<a>` links;
- use `target="_blank"` only if consistent with existing site behavior;
- if `target="_blank"` is used, include appropriate `rel` attributes;
- do not add `nofollow` solely because these are social profiles.

These are official identity links.

---

## Icons

If the project already uses an icon library, reuse it.

Do not install a new icon library solely for these links.

If icons are used, include:

- Instagram
- Pinterest
- X

Ensure each icon has an accessible label.

---

## Homepage

Do not add a large social-media section to the homepage.

A compact footer presence is enough.

If the homepage already contains a trust or brand section, a subtle link to official profiles may be added there.

Avoid clutter.

---

## `llms.txt`

If `llms.txt` already exists, add:

```txt
## Official BonusFoundry Profiles

- Instagram: https://www.instagram.com/bonusfoundry/
- Pinterest: https://www.pinterest.com/bonusfoundry/
- X: https://x.com/bonusfoundry
```

Do not create `llms.txt` solely for this task if it does not already exist.

---

## Reusable Component

If appropriate, create or reuse a component such as:

```txt
SocialLinks
```

It should support:

- Instagram;
- Pinterest;
- X;
- compact mode;
- icon + label;
- external-link accessibility.

Use it in:

- footer;
- About page;
- trust pages only where relevant.

Avoid duplicate markup.

---

## Technical Constraints

Keep the site:

- static-first;
- lightweight;
- accessible;
- server-rendered where possible.

Do not:

- add a database;
- add a CMS;
- add authentication;
- add unnecessary JavaScript;
- install social-media SDKs;
- embed Instagram, Pinterest or X feeds;
- add third-party social tracking scripts;
- create duplicate schema objects.

---

## Structured Data Validation

After implementation, verify:

- `Organization.sameAs` contains all three profiles;
- no duplicate `Organization` schema exists;
- all social URLs are absolute;
- the organization logo remains present;
- publisher references still point to the canonical organization ID;
- JSON-LD remains valid.

---

## Validation

Confirm:

- Instagram link works;
- Pinterest link works;
- X link works;
- all three appear in `Organization.sameAs`;
- footer links are visible;
- links are accessible;
- no duplicate Organization schema exists;
- logo remains in Organization schema;
- brand spelling is consistent;
- build passes;
- lint passes.

---

## Deliverables

Return:

1. Files modified.
2. Reusable social component created or reused.
3. Footer changes.
4. About / trust-page changes.
5. Final `Organization.sameAs` values.
6. X metadata changes, if applicable.
7. `llms.txt` changes, if applicable.
8. Structured-data validation result.
9. Build result.
10. Lint result.