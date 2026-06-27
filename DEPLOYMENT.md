# Deployment Notes

## Environment

No required environment variables are needed for the MVP.

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
