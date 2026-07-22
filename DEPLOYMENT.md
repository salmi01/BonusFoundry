# Deployment Notes

## Environment

Configure these variables in Vercel and in any local environment that needs the related integration:

- `SITE_URL`: canonical site URL, usually `https://bonusfoundry.com`.
- `INDEXNOW_KEY`: IndexNow verification key.
- `NEXT_PUBLIC_GOOGLE_ADS_ID`: Google Ads global tag ID. Leave empty to disable the Google Ads tag.

## Pre-deploy checks

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

Verify:

- `/sitemap.xml` is generated.
- `/robots.txt` points to the sitemap.
- Provider, referral, corridor, guide, FAQ, and blog routes build statically.
- Referral disclosures remain visible on pages that show codes or links.

## Hosting

Deploy as a standard Next.js application. The project is static-first and uses no database, background workers, or authentication service.
