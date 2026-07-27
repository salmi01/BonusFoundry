# Goal — Add Verified Referral Codes to SEO Titles and Meta Descriptions

## Objective

Optimize provider referral pages so Google and AI search results immediately expose the verified referral code, bonus and main qualifying condition.

Apply this only when BonusFoundry has verified:

- the referral code;
- the bonus amount;
- the minimum qualifying transfer;
- the offer validity.

---

## Metadata Format

For providers with a verified code, use:

```txt
[Provider] Referral Code [CODE] — [BONUS] Bonus

Example for TapTap Send:
Title:
TapTap Send Referral Code SALAHEDD1933 — €10 / $10 Bonus

Meta description:
Use TapTap Send referral code SALAHEDD1933 to get a €10 or $10 bonus after a qualifying first transfer of at least €100 or $100.

Example for LemFi:

Title:
LemFi Referral Code SALABGWQ — €10 / $10 Bonus

Meta description:
Use LemFi referral code SALABGWQ to get a €10 or $10 bonus after a qualifying first transfer of at least 

Rules
Apply this to referral or promo-code pages, not generic provider pages unless referral intent is primary.
Keep the title concise.
Ensure metadata matches visible page content.
Do not use “official”, “guaranteed” or unsupported claims.
Do not invent codes, rewards or minimum transfers.
For providers using only a referral link, do not invent a code.
For variable rewards, describe the referral program without a fixed bonus claim.
Preserve existing canonical URLs and structured data.

Audit Scope

Review all provider referral pages and classify them as:

Verified code and fixed reward → include code and reward in title and description.
Verified code but variable reward → include code, but describe reward as variable.
Referral link only → use “Referral Program” or “Invite Link” metadata.
No verified offer → keep neutral metadata.


Validation

Confirm:

titles are unique;
meta descriptions are unique;
verified codes match the shared provider data;
metadata matches the visible Quick Answer;
no unsupported claims were introduced;
build passes;
lint passes.

Deliverables

Return:

Pages updated.
New titles and meta descriptions.
Pages intentionally left unchanged and why.
Build and lint results.