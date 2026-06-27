# Bonus Foundry

Bonus Foundry is a static-first knowledge base for welcome bonuses and referral programs from money transfer and fintech apps.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- MDX
- Static data in `data/`
- No database and no authentication

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Content

- Providers live in `data/providers.ts`.
- Corridors live in `data/corridors.ts`.
- FAQ entries live in `data/faqs.ts`.
- Guides live in `content/guides/` and are routed through `lib/content.ts`.
- Blog posts live in `content/blog/` and are routed through `lib/content.ts`.

Referral links and codes should stay transparent, factual, and clearly disclosed.
