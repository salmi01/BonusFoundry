// Shared Sendwave referral offer, eligibility and code-entry instructions.
export const sendwaveReviewedAt = "2026-10-06";
export const sendwaveTermsReviewedAt = "2026-10-06";
export const sendwaveCode = "I4H9G";
export const sendwaveSources = {
  program:
    "https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits",
  terms: "https://www.sendwave.com/en/terms-and-conditions/referral-program",
  promo: "https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion"
};

export const sendwaveMetadata = {
  title: `Sendwave Referral Code ${sendwaveCode}: €20 Bonus`,
  description: `Use Sendwave referral code ${sendwaveCode} at signup for €20 credit with an eligible first transfer. Get bonus details, code-entry steps and promo code answers.`
};

export const sendwaveEligibility =
  "New Sendwave users who have never completed a transaction in the app may use a referral code. Eligibility can depend on the sending country, destination, minimum transfer and identity verification.";
export const sendwaveTiming =
  "Enter the referral code during signup, before completing your first Sendwave transaction.";
export const sendwaveReward =
  "Use Sendwave referral code I4H9G at signup to receive €20 transfer credit as an eligible new user completing a qualifying first transfer. The referrer also receives €20 credit after your first transfer is successfully delivered, to use toward their next Sendwave transfer.";
export const sendwaveRewardEvidence =
  "The €20 reward and code I4H9G were checked against the Sendwave app's Invite a friend screen supplied by BonusFoundry's publisher on October 5, 2026. The account is registered in France. Sendwave's official referral terms provide the eligibility, code-entry and credit-validity rules.";
export const sendwaveMinimum =
  "Check the qualifying transfer amount in the Sendwave app before paying. The €20 offer screen does not specify a minimum; Sendwave's referral terms allow minimum amounts and conditions for particular sending countries and destinations.";
export const sendwaveExpiry =
  "Sendwave's public referral terms give credits a 12-month validity period from the date they are credited, unless Sendwave specifies otherwise.";
export const sendwavePayout =
  "The eligible new user receives €20 transfer credit with code I4H9G entered at signup and a qualifying first transfer. The referrer's €20 credit is awarded after that transfer is successfully delivered, for their next Sendwave transfer. Check the credit balance and redemption instructions in the app.";

export const sendwaveSteps = [
  "Download or open the official Sendwave app and create a new account if eligible.",
  `Enter referral code ${sendwaveCode} during signup, before completing your first transaction.`,
  "Review the €20 referral offer and any qualifying transfer amount or destination conditions in the app.",
  "Complete the identity verification requested by Sendwave and check fees, the exchange rate and recipient details.",
  "Complete the qualifying first transfer and track it until it is successfully delivered.",
  "Check your credit in the app. The referrer's €20 credit is awarded after successful delivery for use on their next transfer."
];

export const sendwaveFaq = [
  {
    question: "What is the Sendwave referral code and welcome bonus?",
    answer: `Sendwave referral code ${sendwaveCode} gives an eligible new user €20 transfer credit with a qualifying first transfer. Enter the code in the Sendwave app at signup, before completing your first transaction. The referrer also receives €20 credit after successful delivery.`
  },
  {
    question: "What is the Sendwave bonus code for €20 credit?",
    answer: `Use ${sendwaveCode} for the €20 Sendwave referral bonus. This personal referral code is for eligible new users who enter it during signup and complete a qualifying first transfer. The bonus is transfer credit, rather than a cash payment to your bank account.`
  },
  {
    question: "Can I use Sendwave referral code I4H9G in France?",
    answer:
      "Yes. Code I4H9G and the €20 referral offer were checked on a France-registered Sendwave account. New users in France should enter the code at signup and complete a first transfer that meets the app's destination, amount and verification conditions."
  },
  {
    question: "Where and when do I enter the Sendwave referral code?",
    answer: `Enter ${sendwaveCode} in the Sendwave app during signup. The code must be entered before your first transaction is completed; use the app's referral-code field.`
  },
  {
    question: "Can I use a Sendwave referral code after my first transfer?",
    answer:
      "No. Sendwave's published referral terms limit referral-code use to new users with no previous Sendwave app transaction. The code must be entered before the first transaction is completed."
  },
  {
    question: "What is the minimum transfer for the Sendwave €20 offer?",
    answer: sendwaveMinimum
  },
  {
    question: "When do the friend and referrer receive their Sendwave credit?",
    answer: sendwavePayout
  },
  {
    question: "Which countries and transfers qualify for the Sendwave bonus?",
    answer:
      "Eligibility depends on the sending country, recipient destination and transfer conditions shown in the Sendwave app. Check your route and any qualifying transfer amount before paying. Sendwave's referral terms allow country and destination restrictions."
  },
  {
    question: "Who is eligible to use a Sendwave referral code?",
    answer: sendwaveEligibility
  },
  {
    question: "Is the Sendwave referral bonus cash or transfer credit?",
    answer:
      "It is promotional credit toward Sendwave transfers. The app screen describes the referrer's €20 as credit for their next transfer; it does not describe a cash payout to a bank account. Fees and exchange-rate costs can still apply."
  },
  {
    question: "How long do Sendwave referral credits last?",
    answer: sendwaveExpiry
  },
  {
    question: "Why has my Sendwave referral credit not appeared?",
    answer:
      "Check code entry before the first transaction, new-user eligibility, successful delivery, any minimum transfer, country and destination restrictions, and identity verification. If all conditions are met, contact Sendwave support in the app with the offer screenshot and transfer reference."
  },
  {
    question: "Is a Sendwave referral code the same as a promo code?",
    answer: `If you are looking for a Sendwave promo code for a first-transfer bonus, ${sendwaveCode} is a personal referral code offering €20 credit to eligible new users. Enter it at signup. Sendwave also runs separate promo-code campaigns with their own rewards and qualifying conditions.`
  }
];
