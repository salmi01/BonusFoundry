# BonusFoundry

BonusFoundry is a static-first knowledge base for welcome bonuses and referral programs from money transfer and fintech apps.

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

Open http://localhost:3000. The development command uses an explicit port so a
second launch stops with `EADDRINUSE` instead of starting another server that
overwrites the same generated files. If the server is already running, use it
or stop it with Ctrl+C before restarting. Avoid bypassing this with a second
`next dev` command or a different port in the same checkout.

Development assets live in `.next-dev`; production build/start assets remain in
`.next`. This prevents a production build from deleting CSS used by development.
Keep browser test profiles outside both directories and close test browsers when
finished. When checking the preview, verify its CSS responses as well as the HTML.

With the dev server running, use `npm run check:preview` to check the home,
providers and Sendwave pages plus their linked CSS and JavaScript assets.

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
