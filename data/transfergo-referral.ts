import type { Provider } from "@/data/providers";

export const transfergoReviewedAt = "2026-10-18";
export const transfergoReferralPath = "/providers/transfergo/referral-code";
export const transfergoReferralCode = "bonus2026";
export const transfergoReferralLink = "https://trgo.co/en/r/bonus2026";
export const transfergoSources = {
  terms: "https://www.transfergo.com/terms-conditions/refer-a-friend-programme",
  overview: "https://www.transfergo.com/fr/parrainez-un-ami"
} as const;
export const transfergoMetadata = {
  title: "TransferGo Referral Code bonus2026 (2026)",
  description:
    "Use TransferGo invite code bonus2026 or https://trgo.co/en/r/bonus2026. Check the observed €100 transfer requirement; a new-customer bonus is not verified."
};
export const transfergoCustomerReward =
  "Not verified for this invite; check the offer displayed by TransferGo. The inviter's reward is not a customer welcome bonus.";
export const transfergoMinimum =
  "At least €100 on the first transfer in the owner's observed offer; requirements can vary by account and programme. The transfer must cross borders and currencies.";
export const transfergoQuickAnswer =
  "Join TransferGo through https://trgo.co/en/r/bonus2026 or enter invite code bonus2026 when registering as a new customer. The owner's observed offer requires a first international transfer of at least €100 to another person in a different currency, completed after account checks. The €5 shown is the inviter's reward. A new-customer bonus is not verified: check TransferGo's displayed offer and funding restrictions before sending.";
export const transfergoSteps = [
  "Open the complete TransferGo invite link before creating your account, or enter invite code bonus2026 in TransferGo's invite-code field during signup. Enable browser cookies when using the link, as required by the terms.",
  "Register as a new TransferGo customer with the invitation link or code and complete the requested identity and account checks.",
  "Read the offer shown to you. Confirm your country, currencies, minimum, approved funding method, fees and exchange rate; save the offer screen.",
  "For the observed offer, send at least €100 on your first international transfer to another person in a different currency. Do not send to yourself or the inviter.",
  "Wait for the transfer to complete without rejection or refund. Keep the receipt. A qualifying referral does not establish a new-customer bonus."
];
export const transfergoRequirements = [
  "Be new to TransferGo and register through the invitation flow before sending. Do not create multiple accounts.",
  transfergoMinimum,
  "Send to another person abroad, not yourself or the inviter. Several referred users sending to the same third person can also disqualify a reward.",
  "Use an eligible funding source in your own name matching your TransferGo profile. Prepaid cards and some wallets do not qualify in the observed app rules. The terms name Revolut, N26, Monese, Apple Pay and Google Pay as examples of restricted sources.",
  "Complete the transfer: a rejected or refunded payment does not count. Both accounts must pass TransferGo's checks.",
  "The terms require the amount and number of qualifying transfers displayed in the app or web to be completed within six months of referral. Check your own offer before sending."
];
export const transfergoMistakes = [
  "Already having a TransferGo account, or signing up without using the invitation link or code.",
  "Sending domestically, to yourself or to the inviter. An international EUR-to-EUR transfer also fails the different-currency rule.",
  "Sending less than the minimum shown in your offer, or missing the qualification window.",
  "Using a restricted prepaid card, wallet or financial provider, or funding with a name that does not match the profile.",
  "A transfer that is pending, rejected or refunded, or outstanding identity checks.",
  "Disabled browser cookies preventing link attribution, multiple profiles or other abuse of the programme."
];
export const transfergoFaq = [
  {
    question: "What is BonusFoundry's TransferGo referral link?",
    answer: `BonusFoundry's TransferGo invite link is ${transfergoReferralLink}. Follow it before registering as a new customer, or enter invite code ${transfergoReferralCode} during signup. Check the offer in TransferGo before paying for a transfer.`
  },
  {
    question: "Can I use TransferGo invite code bonus2026 directly?",
    answer: `Yes. The account owner confirmed that ${transfergoReferralCode} is the personalized TransferGo invite code on October 18, 2026. Enter it during signup, or register through ${transfergoReferralLink}. It is an invitation code, not proof of a separate promotional or new-customer bonus.`
  },
  {
    question: "Does the TransferGo referral link give new users €5?",
    answer:
      "A new-user reward is not verified for this TransferGo link. The €5 shown in the owner's app is for the inviter. Any discount or bonus for the referred customer depends on the offer TransferGo displays to that customer."
  },
  {
    question: "Is the minimum TransferGo referral transfer €100?",
    answer:
      "The owner's October 18, 2026 app evidence requires a first transfer of at least €100. This is account-specific, not a universal minimum. TransferGo's terms require the amount and number of transfers displayed in the app or web, completed within six months of referral."
  },
  {
    question:
      "Which countries and currencies qualify for TransferGo referrals?",
    answer:
      "Check your sending country, destination and currencies in TransferGo's live flow; this page does not verify a universal country list. A qualifying TransferGo referral transfer must cross both borders and currencies. EUR-to-EUR does not qualify, even between different countries."
  },
  {
    question: "Why do some TransferGo pages mention €20?",
    answer:
      "TransferGo's French public referral page mentions €20 for the inviter, while this owner's app shows €5. TransferGo's terms allow programmes and rewards to differ by user and to change. Neither amount establishes a welcome bonus for this link's new customers."
  },
  {
    question: "When do TransferGo referral rewards arrive?",
    answer:
      "The observed TransferGo app rules require transfer completion and checks on both accounts before the inviter's reward arrives. Public terms say the Referral section is updated within five business days after qualifying transfers complete, subject to eligibility. No new-customer payout timing is verified for this link."
  },
  {
    question: "Which transfers or payment methods can fail to qualify?",
    answer:
      "TransferGo excludes self-transfers, transfers to the inviter and same-currency transfers. Rejected or refunded transfers do not count. The observed rules exclude prepaid cards and some wallets; the terms name Revolut, N26, Monese, Apple Pay and Google Pay as restricted-source examples. Check your intended funding source with TransferGo first."
  },
  {
    question: "Can TransferGo users invite more than one friend?",
    answer:
      "The owner's observed TransferGo app rules state no limit on successful invitations. Each referral must qualify separately, and abuse restrictions still apply, including several referred users sending to the same third person. Check the current rules in your own account."
  }
];

export const transfergoProvider: Provider = {
  name: "TransferGo",
  slug: "transfergo",
  website: "https://www.transfergo.com/",
  description:
    "TransferGo provides international money transfers and foreign currency payments. Confirm route availability, fees and exchange rates in its live flow.",
  referralCode: transfergoReferralCode,
  referralLink: transfergoReferralLink,
  welcomeBonus: transfergoCustomerReward,
  currentOffer: transfergoCustomerReward,
  eligibleUsers:
    "New TransferGo customers who register through the invitation and meet the displayed offer, transfer and account requirements.",
  supportedCountries: [],
  requirements: transfergoRequirements,
  steps: transfergoSteps,
  commonMistakes: transfergoMistakes,
  missingBonus: [transfergoCustomerReward, ...transfergoMistakes],
  countryNotes: [
    "Country and route eligibility must be checked in TransferGo; supported destinations alone do not establish referral eligibility."
  ],
  keyFacts: [
    { label: "Invite code", value: transfergoReferralCode },
    { label: "Invitation", value: transfergoReferralLink },
    { label: "New-customer reward", value: transfergoCustomerReward },
    { label: "Observed minimum", value: transfergoMinimum }
  ],
  referral: {
    hasProgram:
      "TransferGo documents a Refer a Friend programme; offers vary by user.",
    code: transfergoReferralCode,
    link: transfergoReferralLink,
    welcomeBonus: transfergoCustomerReward,
    minimumTransfer: transfergoMinimum,
    expiry:
      "No fixed invitation expiry verified. The terms set a six-month qualification window; check the live offer.",
    payoutTiming:
      "No new-customer reward or payout timing verified for this invitation.",
    limitations: transfergoRequirements
  },
  relatedGuideSlugs: [
    "what-to-check-before-using-money-transfer-referral-link",
    "promo-code-vs-referral-code"
  ],
  relatedProviderSlugs: ["paysend", "ria"],
  relatedCorridorSlugs: [],
  sources: [
    {
      label: "TransferGo Refer a Friend terms",
      url: transfergoSources.terms,
      lastReviewed: transfergoReviewedAt,
      confidence: "official"
    },
    {
      label: "TransferGo French referral overview",
      url: transfergoSources.overview,
      lastReviewed: transfergoReviewedAt,
      confidence: "official"
    },
    {
      label:
        "Personalized TransferGo link and invite code (owner-confirmed October 18, 2026)",
      url: transfergoReferralLink,
      lastReviewed: transfergoReviewedAt,
      confidence: "referral-link"
    }
  ],
  faq: transfergoFaq,
  lastManualReview: transfergoReviewedAt,
  lastOfferUpdate: transfergoReviewedAt,
  lastUpdated: transfergoReviewedAt
};
