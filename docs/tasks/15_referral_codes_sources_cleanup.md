# Goal

Add the real referral codes/links, reduce unhelpful "unknown" content, and introduce a source-based review system.

# Requirements

1. Add real referral codes and links from the uploaded referral_code.txt file:
   - Remitly: https://remit.ly/35sixkkg
   - Taptap Send: SALAHEDD1933
   - Sendwave: I4H9G
   - Western Union: https://ssqt.co/mQVq5Jg
   - Ria: 9RMU-ENB7
   - Paysend: https://paysend.com/en/referral/06mvt6
   - LemFi: SALABGWQ
   - Wise: https://wise.com/invite/ahpc/salaheddines203

2. Add LemFi as a provider if it does not already exist.

3. Do not show fake placeholder codes such as BONUSFOUNDRY, WISE-REF, or REMIT-BONUS.

4. Replace unhelpful "Unknown" values with either:
   - hidden fields, if the field is not important, or
   - cautious explanatory text, if the missing information matters.

5. Do not automatically display "Checked today" unless the data was manually reviewed today.

6. Add separate date concepts:
   - displayedDate: today's date generated dynamically
   - lastManualReview: one week before today's date.
   - lastOfferUpdate: static date updated manually when referral details change

7. Add source notes to each provider.

Example:

sources: [
  {
    label: "Official referral terms",
    url: "...",
    lastReviewed: "2026-06-28",
    confidence: "official"
  }
]

8. Render source notes on provider pages and referral pages.

9. Hide optional fields such as founded year, Trustpilot, minimum transfer, or payout timing when the value is unknown and not useful.

10. Keep warning text where important:

"Referral offers can vary by country, account, campaign, and provider terms. Always check the live offer in the provider app before sending money."

# Acceptance Criteria

- All real referral codes/links are present.
- No placeholder referral codes remain.
- LemFi has a provider page and referral page.
- Pages no longer look unfinished because of repeated "unknown" values.
- Provider pages show official/source notes where available.
- Today's date is not presented as a fake verification date.
- npm run build succeeds.
- No database is added.
- No scraping automation is added yet.

# Out of Scope

- Automated scraping
- Database
- CMS
- Admin dashboard
- User-submitted codes
- Referral marketplace

# Final Instructions

Keep the website honest and useful. If a detail cannot be verified, do not invent it. Either hide the field or explain that users should confirm the live terms inside the provider app.