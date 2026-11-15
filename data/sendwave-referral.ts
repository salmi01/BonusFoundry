// Offer observation dates stay distinct from this content and terms review.
import { sendwaveCode, sendwaveSources, sendwaveContentUpdatedAt, sendwaveReviewedAt, sendwaveTermsReviewedAt, sendwaveScreenshotAt, sendwavePopupAt, sendwaveMinimum } from "@/data/sendwave";

export { sendwaveCode, sendwaveSources };
export const sendwaveReferralUpdatedAt = sendwaveContentUpdatedAt;
export const sendwaveReferralTermsCheckedAt = sendwaveTermsReviewedAt;
export const sendwaveReferralVerifiedAt = sendwaveReviewedAt;
export const sendwaveOfferEvidenceAt = sendwaveScreenshotAt;
export const sendwavePopupEvidenceAt = sendwavePopupAt;
export const sendwaveReferralMetadata = {
  title: `Sendwave Referral Code ${sendwaveCode}: €20 EUR Offer`,
  description: `Sendwave referral code ${sendwaveCode}: €20 credit shown in a France/EUR account offer with a €50+ first transfer. See screenshots, eligibility and signup steps.`
};
export const sendwaveQuickAnswer =
  "Sendwave referral code I4H9G is entered at signup, before your first transaction. The supplied France/EUR account offer shows €20 off the friend’s first transfer of €50 or more in the November 15, 2026 popup. This offer is account-specific: confirm the reward, route eligibility and conditions in your own app before sending.";
export const sendwaveReferralMinimum = sendwaveMinimum;
export const sendwaveReferralExpiry =
  "Sendwave’s public referral terms give credit a validity of 12 months from the date it is credited, unless Sendwave specifies otherwise. Check the expiry in your app. This is a credit-use deadline, not a confirmed expiry date for code I4H9G or the €20 offer.";
export const sendwaveFriendSteps = [
  "Create a new Sendwave account if eligible. Referred users must have no previous completed Sendwave app transaction.",
  "Enter I4H9G during signup, before completing the first transaction. Confirm that the app accepts the code and displays your applicable reward.",
  "Check the sending country, destination and qualifying minimum. The November 15 popup shows €50 or more for this France/EUR account offer; do not assume that threshold applies to another account. Complete requested identity checks and review fees, the exchange rate and recipient details.",
  "Complete the first qualifying transfer and track successful delivery. Check the app’s credit balance and redemption instructions; keep the offer and transfer reference."
];
export const sendwaveReferrerSteps = [
  "Open Refer a Friend in Sendwave and share your personal code. The current referral terms place this option under Me; app navigation can vary by version.",
  "The friend must enter the code before completing their first qualifying transaction and meet Sendwave’s eligibility rules.",
  "After the friend’s first transfer is delivered successfully, check your account for the credit toward a later Sendwave transfer. The November 15, 2026 screenshot shows €20 for the supplied France/EUR account; your own app offer determines your reward."
];
export const sendwaveReferralFaq = [
  {
    question: "What is the Sendwave referral code?",
    answer:
      "I4H9G is the personal Sendwave referral code supplied by BonusFoundry’s publisher. Enter it during signup, before completing your first Sendwave transaction, and check the offer accepted by your app. It is a referral code, not a universal Sendwave campaign code."
  },
  {
    question: "How do I get the Sendwave €20 bonus?",
    answer:
      "Enter I4H9G at signup, before your first transaction. The supplied France/EUR account popup dated November 15, 2026 shows €20 off the first transfer when sending €50 or more. This does not establish the reward or minimum for every account: confirm the accepted offer, sending country, destination and identity requirements in your app."
  },
  {
    question: "Where and when do I enter a Sendwave referral code?",
    answer:
      "Enter I4H9G in the Sendwave app’s referral-code field during signup. The November 15, 2026 screenshot instructs the friend to enter the code at first signup. Public referral terms require entry before completing the first transaction; separate promo-code campaigns have their own entry instructions."
  },
  {
    question: "Can I use Sendwave referral code I4H9G in France?",
    answer:
      "The publisher confirms the supplied EUR-denominated account is registered in France. Its November 15 screenshot shows I4H9G and €20 credit, and its November 15 popup shows a €50 minimum. These images do not prove acceptance on every French account or an eligible-destination list. Confirm your app’s offer before your first transfer."
  },
  {
    question: "What is the minimum transfer for the Sendwave €20 offer?",
    answer: sendwaveReferralMinimum
  },
  {
    question: "Can existing customers use a Sendwave referral code?",
    answer:
      "Sendwave’s referral terms allow code use only by new users who have never completed a transaction in the Sendwave app. An existing customer with completed transaction history cannot qualify as the referred new user. If you already registered without sending, ask Sendwave to confirm your eligibility and code entry before completing a transaction."
  },
  {
    question: "When will I receive my Sendwave referral credit?",
    answer:
      "The November 15 popup describes €20 off the friend’s first transfer of €50 or more under the supplied France/EUR offer. The November 15 screenshot links the referrer’s €20 credit to successful delivery of that first transfer, for a later transfer. No fixed processing time is established for either account; check your app’s credit and redemption instructions."
  },
  {
    question: "Why did I not receive my Sendwave credit?",
    answer:
      "Check that the code was accepted before your first transaction, that you qualify as a new user, that the transfer succeeded, and that country, destination, minimum and identity checks were met. For unresolved credit, contact Sendwave through in-app support with your offer screenshot, code and transfer reference. Only Sendwave can confirm account eligibility and credit status."
  },
  {
    question: "Does Sendwave referral credit expire?",
    answer: sendwaveReferralExpiry
  },
  {
    question: "Is the Sendwave bonus cash or transfer credit?",
    answer:
      "It is promotional transfer credit under the supplied France/EUR offer. The November 15 popup describes €20 off the friend’s first transfer, and the November 15 screenshot says the referrer’s credit goes toward a later Sendwave transfer. Neither image documents a cash payment to a bank account. Fees and exchange-rate costs can still apply."
  }
];
export const sendwaveTroubleshooting = [
  {
    problem: "Code not accepted",
    reason:
      "The entered code or account may not meet the active referral offer’s conditions.",
    action:
      "Check I4H9G exactly, your new-user status and the offer displayed in the app. Ask in-app support before completing a transfer if it is still rejected."
  },
  {
    problem: "Code entered too late",
    reason: "The first transaction was already completed before code entry.",
    action:
      "The public referral terms require entry before completion. Do not assume a later transaction will qualify; ask Sendwave to review the account."
  },
  {
    problem: "Account not eligible",
    reason:
      "The referred user has previous completed transactions, or required identity checks are unresolved.",
    action:
      "Review transaction history and finish requested verification. A user with previous completed transactions does not meet the published new-user rule."
  },
  {
    problem: "Transfer not eligible",
    reason:
      "The first transfer has not succeeded or does not meet the offer’s minimum amount.",
    action:
      "Track delivery and compare the amount with your app’s qualifying threshold. Keep the transfer reference for support."
  },
  {
    problem: "Credit not received",
    reason:
      "Successful completion or other eligibility checks may still be unresolved; the individual credit status is not public.",
    action:
      "Check the credit balance and reward instructions. If the conditions appear met, send the offer screenshot and transfer reference to Sendwave’s in-app support."
  },
  {
    problem: "Sending country or destination not eligible",
    reason:
      "Sendwave may exclude specific sending countries, receiving countries or combinations of the two.",
    action:
      "Check referral eligibility for the exact route in your app. Availability of a money-transfer route alone does not establish bonus eligibility."
  }
];
