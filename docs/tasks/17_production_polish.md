# Goal

Polish the production version of BonusFoundry before launch.

Focus on clarity, trust wording, headings, and final SEO consistency.

---

# Read First

- PROJECT_CONTEXT.md
- SEO_AI.md
- WRITING_GUIDELINES.md
- DATA_MODEL.md

---

# Requirements

## 1. Fix duplicate “Key facts” sections

Provider pages currently may show more than one section titled “Key facts”.

Keep the first one as:

- Key facts

Rename the second verification-related section to:

- Verification requirements

or:

- Account and verification requirements

Acceptance:

- No provider page has two sections with the same “Key facts” heading.
- Heading hierarchy remains clean.
- H2/H3 structure is logical.

---

## 2. Improve source confidence wording

Replace vague confidence labels such as:

- low
- medium
- high
- internal
- verified

with user-friendly trust labels.

Use these labels instead:

- Official source reviewed
- Owner-supplied referral code
- Provider terms vary by country
- Provider terms vary by campaign
- BonusFoundry editorial guidance
- Public offer not verified

Examples:

Instead of:

`Confidence: medium`

Use:

`Source status: Official source reviewed`

Instead of:

`Confidence: internal`

Use:

`Source status: Owner-supplied referral code`

Instead of:

`Confidence: unknown`

Use:

`Source status: Public offer not verified`

---

## 3. Improve source note display

Source notes should help users understand where information comes from.

Each source note should display:

- Source name
- Source type
- Source status
- Last manual review
- Link to official source when available

Avoid technical labels that only make sense internally.

Do not show raw enum values.

---

## 4. Keep dates clear

Use separate labels:

- Displayed date
- Last manual review
- Last offer update

Do not imply that provider terms were checked today unless the manual review date was actually updated.

---

## 5. Robots and sitemap

Keep current robots.txt structure: 

```txt
User-Agent: *
Allow: /

Sitemap: https://bonusfoundry.com/sitemap.xml
