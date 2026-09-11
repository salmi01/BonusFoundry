// App screenshot reviewed on September 12; public terms reviewed on September 11.
export const sendwaveReviewedAt = "2026-09-12";
export const sendwaveTermsReviewedAt = "2026-09-11";
export const sendwaveCode = "I4H9G";
export const sendwaveSources = {
  program:
    "https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits",
  terms: "https://www.sendwave.com/en/terms-and-conditions/referral-program",
  promo: "https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion"
};

export const sendwaveMetadata = {
  title: `Sendwave Referral Code ${sendwaveCode} — €10 / $10 Welcome Credit`,
  description: `Sendwave referral code: ${sendwaveCode}. Get €10 / $10 welcome credit with the eligible currency offer. Enter it before your first transaction; Sendwave terms apply.`
};

export const sendwaveEligibility =
  "New Sendwave users who have never previously completed a transaction through the Sendwave app. Country, transfer corridor, minimum-transfer and identity verification (KYC) conditions may apply.";
export const sendwaveTiming =
  "Enter the referral code in the Sendwave app before completing your first transaction.";
export const sendwaveReward =
  "Eligible new users can receive €10 / $10 in Sendwave welcome credit with I4H9G, depending on the offer currency. Check the applicable offer in your Sendwave app.";
export const sendwaveRewardEvidence =
  "";
export const sendwaveExpiry =
  "Referral credits are valid for 12 months from the date they are credited unless otherwise specified by Sendwave.";
export const sendwavePayout =
  "Enter the code before your first transaction, then check the welcome credit and its availability in the Sendwave app. The supplied screen does not specify a separate payout time for the new user's credit.";

export const sendwaveSteps = [
  "Download or open the official Sendwave app.",
  "Create a new Sendwave account if eligible.",
  `Enter referral code ${sendwaveCode} in the app before completing your first transaction.`,
  "Complete any identity verification requested by Sendwave.",
  "Review the reward, country, transfer route and qualifying conditions shown in the app.",
  "Complete the qualifying first transaction after checking fees, exchange rate and recipient details.",
  "Applicable referral credits are awarded according to Sendwave's current terms."
];

export const sendwaveFaq = [
  {
    question: "What is the Sendwave referral code?",
    answer: `The Sendwave referral code is ${sendwaveCode}.`
  },
  {
    question: `What is the Sendwave code ${sendwaveCode}?`,
    answer: `${sendwaveCode} is the Sendwave referral code provided by BonusFoundry. Eligible new users can enter it in the Sendwave app before their first transaction, subject to Sendwave's current referral terms.`
  },
  {
    question: `How much bonus do I get with Sendwave code ${sendwaveCode}?`,
    answer: sendwaveReward
  },
  {
    question: "When should I enter the Sendwave referral code?",
    answer: sendwaveTiming
  },
  {
    question: "Can I use a Sendwave referral code after my first transfer?",
    answer:
      "No. Sendwave's published referral terms limit referral-code use to new users with no previous Sendwave app transaction. The code must be entered before the first transaction is completed."
  },
  {
    question: "Who is eligible to use a Sendwave referral code?",
    answer: `According to Sendwave's official referral terms: ${sendwaveEligibility}`
  },
  {
    question: "How long do Sendwave referral credits last?",
    answer: sendwaveExpiry
  },
  {
    question: "Is a Sendwave referral code the same as a promo code?",
    answer: `No. Sendwave publishes separate terms for referral codes and promotional campaign codes. ${sendwaveCode} is BonusFoundry's Sendwave referral code, not a universal promotional campaign code.`
  },
  {
    question: "Is the Sendwave €10 / $10 welcome credit available everywhere?",
    answer:
      "The supplied official Sendwave app screen confirms €10 credit for a new user entering I4H9G. BonusFoundry's owner also reports $10 for the dollar offer. Currency and eligibility depend on the offer shown in your app; this is not a promise for every country or account."
  }
];
