// Page-specific research. Shared provider summaries retain their own review dates.
import { sendwaveCode, sendwaveSources } from "@/data/sendwave";

export { sendwaveCode, sendwaveSources };
export const sendwaveReferralUpdatedAt = "2026-10-25";
export const sendwaveReferralTermsCheckedAt = "2026-10-25";
export const sendwaveOfferEvidenceAt = "2026-10-25";
export const sendwaveReferralMetadata = {
  title: `Sendwave Referral Code ${sendwaveCode}: €20 Credit & Eligibility`,
  description: `Sendwave referral code ${sendwaveCode}: €20 credit for eligible new users. App screenshot reviewed October 25, 2026. See signup steps and referral conditions.`
};
export const sendwaveQuickAnswer =
  "Use Sendwave referral code I4H9G during your first signup for €20 transfer credit, subject to eligibility and a qualifying first transfer. The publisher’s app screenshot reviewed on October 25, 2026 shows I4H9G and €20 credit for the new user. The referrer receives €20 credit after that transfer is delivered successfully, toward their next Sendwave transfer. Check your sending country, destination and any minimum in the app before paying.";
export const sendwaveReferralMinimum =
  "The app screenshot reviewed on October 25, 2026 does not show a numeric minimum. Sendwave may set a minimum for your sending country and destination, including an amount at least equal to the credit. Check your app before paying; €20 is the reward, not a confirmed transfer minimum.";
export const sendwaveReferralExpiry =
  "Sendwave’s public referral terms give credit a validity of 12 months from the date it is credited, unless Sendwave specifies otherwise. Check the expiry in your app. This is a credit-use deadline, not a confirmed expiry date for code I4H9G or the €20 offer.";
export const sendwaveFriendSteps = [
  "Create a new Sendwave account if eligible. Referred users must have no previous completed Sendwave app transaction.",
  "Enter I4H9G during signup, before completing the first transaction. Confirm that the app accepts the code and displays your applicable reward.",
  "Check the sending country, destination and any qualifying minimum. Complete identity verification requested by Sendwave and review fees, the exchange rate and recipient details.",
  "Complete the first qualifying transfer and track successful delivery. Check the app’s credit balance and redemption instructions; keep the offer and transfer reference."
];
export const sendwaveReferrerSteps = [
  "Open Earn in Sendwave and select Refer a Friend, as shown in the supplied screenshot, then share your personal code.",
  "The friend must enter the code before completing their first qualifying transaction and meet Sendwave’s eligibility rules.",
  "After the friend’s first transfer is delivered successfully, check your account for €20 credit toward your next Sendwave transfer, as shown in the screenshot reviewed on October 25, 2026. Your own app offer determines your reward."
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
      "Enter I4H9G when signing up to Sendwave for the first time, before completing your first transaction. The publisher’s app screenshot reviewed on October 25, 2026 shows €20 credit for the new user. Complete a qualifying first transfer and meet the country, destination, minimum-transfer and verification conditions shown in your app."
  },
  {
    question: "Where and when do I enter a Sendwave referral code?",
    answer:
      "Enter I4H9G in the Sendwave app’s referral-code field during signup. The screenshot reviewed on October 25, 2026 instructs the friend to enter the code when signing up for the first time. Sendwave’s public referral terms require entry before completing the first transaction; separate promo-code campaigns can use a different field."
  },
  {
    question: "Can I use Sendwave referral code I4H9G in France?",
    answer:
      "The publisher previously confirmed a France-registered Sendwave account. The screenshot reviewed on October 25, 2026 confirms I4H9G and the €20 offer but does not display a country or destination list. Confirm acceptance and the applicable reward in your app before completing your first transfer from France."
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
      "The screenshot reviewed on October 25, 2026 says the referrer receives €20 credit once the friend’s first transfer is delivered successfully, toward the referrer’s next transfer. It shows €20 for the friend entering the code at first signup but gives no separate deadline for that credit. Check your app’s reward and redemption instructions; no fixed number of hours or days is verified here."
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
      "The €20 reward shown in the screenshot reviewed on October 25, 2026 is transfer credit. The screen explicitly says the referrer can put it toward their next Sendwave transfer; it does not describe a cash payment to a bank account. Fees and exchange-rate costs can still apply."
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
