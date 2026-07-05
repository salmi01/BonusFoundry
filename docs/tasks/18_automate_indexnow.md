# Goal

Automate IndexNow submission after deployment.

# Requirements

1. the IndexNow key file is already in /public:
   /public/d5775f67f15d4277a2de928533af6055.txt

2. Add environment variable:
   INDEXNOW_KEY=d5775f67f15d4277a2de928533af6055
   SITE_URL=https://bonusfoundry.com

3. Create a script:
   scripts/submit-indexnow.ts

4. The script must:
   - fetch or read sitemap.xml
   - extract all <loc> URLs
   - submit them to https://api.indexnow.org/IndexNow
   - use host: bonusfoundry.com
   - use keyLocation: https://bonusfoundry.com/{INDEXNOW_KEY}.txt
   - log success/failure
   - fail safely without breaking production build

5. Add package.json script:
   "indexnow": "tsx scripts/submit-indexnow.ts"

6. Do not submit localhost URLs.

# Acceptance Criteria

- npm run build succeeds
- npm run indexnow submits sitemap URLs
- key file is publicly accessible
- IndexNow request uses the current SITE_URL
- No hardcoded Vercel URL remains