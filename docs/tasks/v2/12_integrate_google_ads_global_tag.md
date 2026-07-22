# Goal: Integrate Google Ads Global Tag & Conversion Tracking into BonusFoundry

## Objective

Integrate the Google Ads global tag into the Next.js application and prepare the project for Google Ads conversion tracking.

The implementation must:

- Follow Next.js App Router best practices.
- Load the Google Ads tag only once on every page.
- Use environment variables.
- Be production-ready.
- Be TypeScript-safe.
- Make it easy to add future conversion events (TapTap Send, LemFi, Remitly, etc.).

---

# Google Ads Account

Google Ads ID:

```
AW-838545031
```

Do NOT hardcode this value.

Use:

```
NEXT_PUBLIC_GOOGLE_ADS_ID
```

---

# Requirements

## 1. Environment variable

Create or update:

```
.env.example
```

Add:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=
```

Update the documentation so this variable is also configured on Vercel.

---

## 2. Install the global Google Ads tag

Modify the root App Router layout.

Current project uses:

```
app/layout.tsx
```

(or equivalent if the project structure differs.)

Requirements:

- use `next/script`
- load Google tag only once
- use `strategy="afterInteractive"`
- initialize

```
window.dataLayer
```

- initialize

```
window.gtag
```

- call

```
gtag('js', new Date())
```

- call

```
gtag('config', GOOGLE_ADS_ID)
```

Only initialize when the environment variable exists.

---

## 3. TypeScript support

Create global typings.

Example:

```
types/gtag.d.ts
```

Declare:

- window.gtag
- window.dataLayer

No TypeScript errors should remain.

---

## 4. Create reusable Google Ads helper

Create:

```
lib/google-ads.ts
```

Expose helpers like:

```ts
trackGoogleAdsConversion(...)
```

The helper should:

- safely detect browser
- safely detect gtag
- accept:

    conversionLabel

and optionally

    callback

Internally send

```
gtag('event','conversion',...)
```

using

```
send_to:
AW-XXXXXXX/CONVERSION_LABEL
```

The helper must gracefully fail when Google Ads is unavailable.

---

## 5. Future-ready architecture

Prepare the helper so future provider buttons can call:

```
trackGoogleAdsConversion(...)
```

before redirecting users.

No provider-specific logic should exist.

The helper must remain generic.

---

## 6. Documentation

Create

```
docs/google-ads.md
```

Explain:

- where the Google Ads ID is configured
- how to configure Vercel
- how to create future conversions
- how to use the helper
- how to verify installation
- how to debug

---

## 7. Code quality

Implementation must:

- use strict TypeScript
- avoid duplicated code
- avoid global variables outside the Google snippet
- follow project architecture
- be easy to maintain

---

# Deliverables

Codex should:

- update the necessary files
- create missing files
- explain every modification
- explain why each change was made
- ensure the project builds successfully
- ensure the Google Ads tag loads only once
- ensure no lint or TypeScript errors are introduced

Do not implement provider-specific conversions yet.
Only install the global Google Ads infrastructure and reusable conversion helper.