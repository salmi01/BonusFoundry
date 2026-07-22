# Google Ads Integration

BonusFoundry loads the Google Ads global tag from the App Router root layout only when `NEXT_PUBLIC_GOOGLE_ADS_ID` is configured.

## Environment Variable

Set this variable locally and in Vercel:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
```

Configure the actual Google Ads account ID outside the codebase. Do not hardcode the account ID in source files.

## Vercel Configuration

In Vercel, open the project settings and add `NEXT_PUBLIC_GOOGLE_ADS_ID` under Environment Variables for Production. Add it to Preview and Development only when those deployments should load the tag.

Redeploy after changing the variable because Next.js reads public environment variables at build time.

## How It Loads

The root layout renders `GoogleAdsTag` from `components/google-ads-tag.tsx`.

The component:

- uses `next/script`;
- loads `https://www.googletagmanager.com/gtag/js`;
- uses `strategy="afterInteractive"`;
- initializes `window.dataLayer`;
- initializes `window.gtag`;
- calls `gtag("js", new Date())`;
- calls `gtag("config", NEXT_PUBLIC_GOOGLE_ADS_ID)`;
- renders nothing when the environment variable is empty.

Because the component is mounted in `app/layout.tsx`, the tag is included once for the whole App Router tree.

## Future Conversion Events

Use the generic helper in `lib/google-ads.ts`:

```ts
import { trackGoogleAdsConversion } from "@/lib/google-ads";

trackGoogleAdsConversion({
  conversionLabel: "CONVERSION_LABEL",
  callback: () => {
    window.location.href = referralUrl;
  }
});
```

The helper sends:

```ts
gtag("event", "conversion", {
  send_to: "AW-XXXXXXXXX/CONVERSION_LABEL"
});
```

Keep provider-specific conversion labels outside the helper. Provider buttons can call the helper before redirecting users.

## Verification

To verify locally:

1. Set `NEXT_PUBLIC_GOOGLE_ADS_ID`.
2. Run `npm run build`.
3. Run `npm run start`.
4. Open the site and inspect the page source or browser network panel.
5. Confirm one request to `https://www.googletagmanager.com/gtag/js?id=...`.
6. Confirm the inline initialization script contains one `gtag("config", "...")` call.

To verify in production, use Google Tag Assistant or the browser network panel after a Vercel deployment with the environment variable configured.

## Debugging

If the tag is missing, confirm that `NEXT_PUBLIC_GOOGLE_ADS_ID` is set in the environment used for the build.

If conversions do not fire, confirm that the conversion label is correct and that `window.gtag` exists before the provider redirect happens.

If a callback does not run, the helper still calls the callback when Google Ads is unavailable so redirects should continue to work.
