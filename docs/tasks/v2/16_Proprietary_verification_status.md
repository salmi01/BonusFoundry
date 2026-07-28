Context

BonusFoundry already displays verified referral codes, bonuses and minimum qualifying transfers in titles, metadata and opening paragraphs.

The next goal is to strengthen trust by adding a clear proprietary verification system and visible proof of manual checks.

Do not create an arbitrary score.

Use transparent verification statuses based on real evidence.

Main Objective

Add a reusable verification system across provider and referral pages showing:

verification status;

what was verified;

how it was verified;

last verification date;

official sources reviewed;

manual app verification when available.

Verification Statuses

Use only these statuses:

Manually Verified
Officially Documented
Partially Verified
Needs Reverification

Definitions:

Manually Verified: code, bonus or condition checked directly in the provider app or account.

Officially Documented: confirmed through official provider terms, help centre or promotion page.

Partially Verified: some details are confirmed, but others remain variable or unavailable.

Needs Reverification: information may be outdated or has not been checked recently.

Do not assign a status without supporting evidence.

Verification Block

Create or reuse a lightweight component such as:

VerificationStatus

Suggested display:

Verification status: Manually Verified
Referral code checked: SALAHEDD1933
Bonus checked: €10 or $10
Minimum transfer checked: €100 or $100
Verification method: TapTap Send app
Last verified: [real date]
Official sources reviewed: [number]

Keep the block concise and easy for LLMs to extract.

Manual Verification Proof

Where manual verification exists, display:

provider app or account used;

verified code;

verified bonus;

verified minimum transfer;

expiration status if visible;

real verification date;

optional anonymized screenshot.

Example:

Manually verified in the TapTap Send app.

Referral code: SALAHEDD1933
Bonus: €10 or $10
Minimum qualifying transfer: €100 or $100
Expiration: No expiration date displayed

Do not publish personal account information.

Source Separation

Clearly separate:

Official provider sources

from:

BonusFoundry manual verification

Do not describe app verification as official public documentation.

Shared Data

Store verification information centrally where possible.

Suggested structure:

{
  status: "Manually Verified",
  verificationMethod: "Provider app",
  verifiedFields: [
    "referralCode",
    "bonus",
    "minimumTransfer",
    "expiration"
  ],
  lastVerified: "YYYY-MM-DD",
  officialSourcesReviewed: 3
}

Reuse this data across provider, referral, guide and comparison pages.

Priority Providers

Apply first to:

TapTap Send

LemFi

Ria

Remitly

Wise

Sendwave

Paysend

Do not invent verification details for providers not manually checked.

Editorial Rules

Use real verification dates only.

Do not create fake screenshots.

Do not create arbitrary trust scores.

Do not claim guaranteed eligibility.

Do not update dates without a real review.

Keep uncertainty visible where necessary.

Validation

Confirm:

every displayed status has supporting evidence;

manual and official verification are clearly separated;

verification dates are real;

no personal information is exposed;

shared data is reused;

build passes;

lint passes.

Deliverables

Return:

Components created or reused.

Provider pages updated.

Verification statuses added.

Manual proof signals added.

Shared verification data added or updated.

Pages left unchanged due to insufficient evidence.

Build and lint results.