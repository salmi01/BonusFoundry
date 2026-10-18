import type { Provider } from "@/data/providers";

export const aceCode = "4262293";
export const aceReferralLink =
  "https://acemoneytransfer.eu.go.link/acemoneytransfer.com/referral-link/?referral_code=4262293&adj_t=1fbed427&adj_deep_link=https%3A%2F%2Facemoneytransfer.com%2Freferral-link%3Freferral_code%3D4262293&adj_fallback=https%3A%2F%2Facemoneytransfer.com%2Fsign-up%3Freferral_code%3D4262293&adj_redirect_macos=https%3A%2F%2Facemoneytransfer.com%2Fsign-up%3Freferral_code%3D4262293";
export const acePath = "/providers/ace-money-transfer/referral-code";
export const aceReviewedAt = "2026-10-18";
export const aceSources = {
  terms: "https://acemoneytransfer.com/terms-and-conditions-wallet",
  guide:
    "https://acemoneytransfer.com/blog/how-to-earn-big-with-the-ace-invite-a-friend-program-instant-rewards-wallet-credits-monthly-prizes"
};

export const aceMetadata = {
  title: `ACE Money Transfer Referral Code ${aceCode} | €10 Bonus`,
  description: `Use ACE Money Transfer referral code ${aceCode}. Eligible new customers can get €10 in wallet credits after a €100+ transfer. Get the referral link and rules.`
};
export const aceLead = `Use ACE Money Transfer referral code ${aceCode} when signing up through the invitation link. Eligible new customers making a paid euro transfer of €100 or more outside Nigeria can receive €10 in ACE Wallet credits after ACE's checks. Rewards for other sending currencies and routes differ.`;
export const aceNigeria =
  "Transfers to Nigeria follow a separate offer: three paid qualifying referrals with higher thresholds, and no reward for the invited friend. The €10/£10 dual-reward offer does not apply to Nigeria.";
export const aceWallet =
  "ACE Wallet credits reduce the cost of future transfers. They cannot be withdrawn as cash, sent to another user or refunded. ACE limits how much credit can be used on each transfer; check the wallet terms and checkout for the applicable limit.";
export const aceTiming =
  "ACE credits the wallet once the paid qualifying transfer is approved and clears KYC, AML and fraud checks. Approval or investigation can take time; an instant cash payment at signup is not promised.";
export const aceRewards = [
  { currency: "EUR", minimum: "€100", reward: "€10" },
  { currency: "GBP", minimum: "£100", reward: "£10" },
  { currency: "AUD", minimum: "A$200", reward: "A$20" },
  { currency: "PLN", minimum: "PLN 500", reward: "PLN 50" },
  { currency: "CAD", minimum: "C$200", reward: "C$20" },
  { currency: "NOK", minimum: "NOK 1,350", reward: "NOK 135" },
  { currency: "SEK", minimum: "SEK 1,300", reward: "SEK 130" },
  { currency: "DKK", minimum: "DKK 835", reward: "DKK 85" },
  { currency: "RON", minimum: "RON 600", reward: "RON 60" },
  { currency: "CHF", minimum: "CHF 110", reward: "CHF 11" },
  { currency: "CZK", minimum: "CZK 3,000", reward: "CZK 300" }
];
export const aceSteps = [
  "Open the ACE referral invitation before creating your account.",
  `Register with referral code ${aceCode} attributed during signup. If the deep link does not open, enter the code in ACE's signup flow; signup without it may not qualify.`,
  "Check your sending currency and destination in the app, then complete a paid international transfer meeting the qualifying minimum: €100 for EUR or £100 for GBP, outside Nigeria.",
  "Complete ACE's identity, anti-money-laundering and fraud checks. Eligible ACE Wallet credits are applied after the qualifying transfer is approved."
];
export const aceFaq = [
  {
    id: "ace-referral-code",
    question: "What is the ACE Money Transfer referral code?",
    answer: `The ACE Money Transfer referral code listed by BonusFoundry is ${aceCode}. Use the invitation link or enter this code during signup to attribute your referral.`
  },
  {
    id: "ace-referral-link",
    question: "How do I use the ACE Money Transfer referral link?",
    answer: `Open the ACE invitation on this page and register in the linked signup flow. If the deep link fails, enter ${aceCode} during signup and confirm the referral is applied before transferring.`
  },
  {
    id: "ace-euro-bonus",
    question: "How much is the ACE Money Transfer referral bonus in euros?",
    answer:
      "Eligible new customers can receive €10 in ACE Wallet credits after a paid qualifying EUR transfer of at least €100 and successful checks. The dual-reward offer excludes transfers to Nigeria."
  },
  {
    id: "ace-minimum-transfer",
    question: "What is the minimum first transfer to qualify?",
    answer:
      "ACE's qualifying minimum is €100 for EUR transfers or £100 for GBP transfers outside Nigeria. Other sending currencies have different thresholds, listed in the reward table. Nigeria has separate higher thresholds."
  },
  {
    id: "ace-friend-reward",
    question: "Does ACE Money Transfer give the invited friend a reward?",
    answer:
      "Yes, both the eligible invited new customer and the referrer receive ACE Wallet credits on qualifying routes outside Nigeria. For Nigeria referrals, the invited friend receives no reward."
  },
  {
    id: "ace-wallet-credit",
    question: "Is the ACE referral bonus cash or wallet credit?",
    answer: aceWallet
  },
  {
    id: "ace-reward-timing",
    question: "When do ACE referral rewards arrive?",
    answer: aceTiming
  },
  {
    id: "ace-nigeria",
    question: "Does the ACE referral code work for transfers to Nigeria?",
    answer: aceNigeria
  },
  {
    id: "ace-after-registration",
    question: "Can I apply the ACE referral code after registration?",
    answer:
      "Do not rely on adding an ACE referral code after registration. ACE attributes the referral to the code used at registration, so use the correct invitation or code during signup. Ask ACE support about an attribution issue before transferring."
  },
  {
    id: "ace-official-terms",
    question: "Where can I find the official ACE Invite a Friend terms?",
    answer:
      "ACE publishes the Invite a Friend rules on its Wallet Services Terms and Conditions page. Follow the official terms link in this page's sources section. The legal rules take priority over marketing articles and app imagery."
  }
];

export const aceProvider: Provider = {
  name: "ACE Money Transfer",
  slug: "ace-money-transfer",
  website: "https://acemoneytransfer.com/",
  description:
    "ACE Money Transfer provides international money transfers. Its Invite a Friend program offers eligible new customers wallet credits on qualifying routes.",
  referralCode: aceCode,
  referralLink: aceReferralLink,
  welcomeBonus:
    "€10 in ACE Wallet credits after an eligible €100+ paid EUR transfer and checks. Transfers to Nigeria are excluded from the dual-reward offer.",
  supportedCountries: [],
  eligibleUsers:
    "New ACE customers registering with the referral link or code, completing a paid qualifying transfer and passing ACE's checks on a participating route outside Nigeria.",
  requirements: [
    "Use the referral link or code at registration.",
    "Complete a paid transfer meeting the sending-currency threshold.",
    "Pass KYC, AML and fraud checks.",
    aceNigeria
  ],
  steps: aceSteps,
  keyFacts: [
    { label: "Referral code", value: aceCode },
    { label: "EUR minimum", value: "€100 paid qualifying transfer" },
    { label: "Reward type", value: "ACE Wallet credits for future transfers" }
  ],
  currentOffer: aceLead,
  commonMistakes: [
    "Registering without the correct invitation or code.",
    "Assuming Nigeria qualifies for the dual-reward offer.",
    "Treating wallet credits as withdrawable cash."
  ],
  missingBonus: [
    "Confirm the code used at signup and the paid transfer amount.",
    "Check compliance approval and contact ACE support if attribution or a reward is unresolved."
  ],
  countryNotes: [
    aceNigeria,
    "Sending currency is not a country eligibility list. Confirm the sending location and receiving route in ACE's live app."
  ],
  faq: aceFaq,
  sources: [
    {
      label: "ACE Invite a Friend legal terms (effective 20 November 2025)",
      url: aceSources.terms,
      lastReviewed: aceReviewedAt,
      confidence: "official"
    },
    {
      label: "ACE referral guide (published 21 November 2025)",
      url: aceSources.guide,
      lastReviewed: aceReviewedAt,
      confidence: "official"
    },
    {
      label: "Publisher-supplied ACE app invitation",
      url: aceReferralLink,
      lastReviewed: aceReviewedAt,
      confidence: "referral-link"
    }
  ],
  relatedCorridorSlugs: [],
  relatedGuideSlugs: [
    "how-referral-codes-work",
    "how-to-compare-welcome-bonuses-between-transfer-apps"
  ],
  lastManualReview: aceReviewedAt,
  lastUpdated: aceReviewedAt
};
