import type { Provider } from "@/data/providers";

// Keep observed offer evidence separate from official rules and modification dates.
export const taptapOffer = {
  code: "SALAHEDD1933",
  friendReward: { amount: 5, currency: "EUR" },
  referrerReward: { amount: 10, currency: "EUR" },
  minimumTransfer: null,
  eligibleCountries: null,
  campaignExpiresAt: null,
  evidenceReviewedAt: "2026-09-07",
  officialCheckedAt: "2026-09-08",
  contentUpdatedAt: "2026-09-08",
  evidenceFile: null,
  evidenceFilename: "WhatsApp Image 2026-09-07 at 20.26.36.jpeg"
} as const;

export const taptapSources = [
  {
    key: "referrals",
    label: "Referral and promo code instructions",
    url: "https://help.taptapsend.com/en/bonus-and-referrals/how-do-referral-codes-and-promo-codes-work",
    updatedAt: "2026-08-20"
  },
  {
    key: "terms",
    label: "Referral Programme Terms and Conditions",
    url: "https://www.taptapsend.com/en/referrals-terms/referral-v4/referrals-en4",
    updatedAt: "2025-03-28"
  },
  {
    key: "countries",
    label: "Sending country guides",
    url: "https://help.taptapsend.com/en/sending-countries",
    updatedAt: null
  },
  {
    key: "europe",
    label: "Sending from Europe",
    url: "https://help.taptapsend.com/en/sending-countries/how-do-i-send-money-from-europe",
    updatedAt: null
  },
  {
    key: "usa",
    label: "Sending from the United States",
    url: "https://help.taptapsend.com/en/sending-countries/how-do-i-send-money-from-the-usa",
    updatedAt: "2026-08-25"
  },
  {
    key: "fees",
    label: "Transfer fees",
    url: "https://help.taptapsend.com/en/fees-and-pricing/what-fees-do-i-pay-to-send-money-with-taptap-send",
    updatedAt: "2026-08-20"
  },
  {
    key: "rates",
    label: "Exchange rates",
    url: "https://help.taptapsend.com/en/fees-and-pricing/how-do-exchange-rates-work-on-taptap-send",
    updatedAt: "2026-08-20"
  },
  {
    key: "speed",
    label: "Transfer delivery times",
    url: "https://help.taptapsend.com/en/transfer-status/how-long-will-my-transfer-take",
    updatedAt: "2026-08-20"
  },
  {
    key: "licenses",
    label: "Regulatory licenses",
    url: "https://www.taptapsend.com/en/licenses",
    updatedAt: "2026-07-14"
  },
  {
    key: "support",
    label: "Contact Taptap Send support",
    url: "https://help.taptapsend.com/en/how-do-i-contact-taptap-send-support",
    updatedAt: "2026-08-28"
  }
] as const;

export type TaptapSourceKey = (typeof taptapSources)[number]["key"];
export const taptapSource = (key: TaptapSourceKey) =>
  taptapSources.find((source) => source.key === key)!;
export const taptapFriendReward = `${taptapOffer.friendReward.currency} ${taptapOffer.friendReward.amount}`;
export const taptapReferrerReward = `${taptapOffer.referrerReward.currency} ${taptapOffer.referrerReward.amount}`;
export const taptapMinimum =
  "A minimum applies; its amount is not shown in the captured offer. Confirm it in the app.";
export const taptapSummary = `${taptapOffer.code} is the Taptap Send referral code displayed in the code owner's app. The captured offer gives the referred friend ${taptapFriendReward} on the first qualifying transfer and the referrer ${taptapReferrerReward}. Enter the code before confirming the first transfer. Eligibility, minimums and rewards depend on the sending country and destination.`;
export const taptapDisclosure = `The code owner may receive a referral reward if you use ${taptapOffer.code} and complete an eligible transfer. BonusFoundry is an independent information website.`;
export const taptapMetadata = {
  title: `Taptap Send Referral Code ${taptapOffer.code}`,
  description: `Use Taptap Send referral code ${taptapOffer.code}. Check the ${taptapFriendReward} first-transfer offer, eligibility rules, minimum requirements and official terms.`
};
export const taptapEligibility = [
  "The referred friend must never have registered for Taptap Send before.",
  "Enter one referral or promo code before confirming the first transfer; codes cannot be added afterwards or combined.",
  "The first transfer must meet the applicable minimum, succeed, remain uncanceled and go to someone other than the referrer.",
  "Check the sending country, destination and any campaign conditions in the app."
];
export const taptapRewardRules = [
  "Rewards go to the Taptap Send account; applying credit increases the recipient's amount without increasing the sender's payment.",
  "The entire reward balance is used at once; partial use is not supported.",
  "Rewards cannot be transferred, refunded or exchanged for cash.",
  "Credit expires 90 days after deposit into the account. This is not the code or campaign expiry.",
  "Reward delivery time is not guaranteed.",
  "A failed transfer's bonus is recredited, sometimes after a short delay.",
  "The referrer can earn rewards for at most 20 successful qualifying actions in a rolling 30-day period."
];
export const taptapFaq = [
  {
    question: "What is the Taptap Send referral code?",
    answer: `${taptapOffer.code} is the personal referral code displayed in the code owner's Taptap Send app, according to the offer evidence reviewed on 7 September 2026.`
  },
  {
    question: "Does Taptap Send have a referral bonus?",
    answer:
      "Yes. Taptap Send documents bonuses for the referrer and new customer after a qualifying first transfer. The amount depends on the sending country and destination."
  },
  {
    question: `How much does a new customer receive with ${taptapOffer.code}?`,
    answer: `The captured offer shows ${taptapFriendReward} for the referred friend's first qualifying transfer. This EUR offer is not evidence of the amount available on every route.`
  },
  {
    question: "How much does the referrer receive?",
    answer: `The captured offer shows ${taptapReferrerReward} for the code owner per qualifying referral. This is separate from the referred friend's ${taptapFriendReward}.`
  },
  {
    question:
      "What is the minimum transfer for the Taptap Send referral offer?",
    answer: taptapMinimum
  },
  {
    question: "Where do I enter a Taptap Send referral code?",
    answer: `Enter ${taptapOffer.code} in the Have a referral code? field when entering your first-transfer amount, before confirmation. A personal referral code differs from a marketing promo code entered through ADD PROMO CODE.`
  },
  {
    question: "Can the code be added after the first transfer?",
    answer:
      "No. Taptap Send says the code must be applied before confirming the first transfer and cannot be added afterwards."
  },
  {
    question: "Can a referral code and promo code be combined?",
    answer:
      "No. Only one referral or promo code can be applied to the first transfer."
  },
  {
    question: "Can an existing Taptap Send customer use a referral code?",
    answer:
      "No. The referred friend must not have registered previously. Existing customers can instead refer eligible new users."
  },
  {
    question: "When does a Taptap Send reward expire?",
    answer:
      "Rewards expire 90 days after being deposited in the account. The screenshot does not establish a code or campaign expiry date."
  },
  {
    question: "Why did the referral bonus not appear?",
    answer:
      "Check new-customer status, code entry before confirmation, route conditions, the minimum and successful transfer status. The recipient must not be the referrer. Reward delivery is not guaranteed immediately; contact in-app support if the issue persists."
  },
  {
    question: "Can I use the code from another country?",
    answer:
      "Taptap Send makes offers dependent on the sending country and destination. Confirm the amount, minimum and eligibility shown for your route in the app; the captured EUR offer does not establish worldwide eligibility."
  }
];

export const taptapProvider: Provider = {
  name: "Taptap Send",
  slug: "taptap-send",
  website: "https://www.taptapsend.com/",
  description:
    "Taptap Send is an international money transfer app with route-dependent bank, mobile wallet and cash-pickup delivery. Compare its sending-country rules, payment methods, fees and delivery estimate.",
  referralCode: taptapOffer.code,
  referralLink: null,
  welcomeBonus: `Owner's app offer: ${taptapFriendReward} for the referred friend with code ${taptapOffer.code}. Minimum and geographic scope must be checked in the app.`,
  currentOffer: taptapSummary,
  supportedCountries: [
    "France",
    "Selected European countries",
    "United Kingdom",
    "United States (state restrictions)",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Bahrain",
    "Brazil"
  ],
  eligibleUsers: taptapEligibility[0],
  requirements: taptapEligibility,
  steps: [
    "Register as a new customer.",
    `Enter ${taptapOffer.code} in Have a referral code? when entering the first-transfer amount.`,
    "Confirm the applicable reward and minimum in the app.",
    "Complete the qualifying first transfer to someone other than the referrer."
  ],
  keyFacts: [
    {
      label: "Best for",
      value: "Comparing international transfers on a supported sending route."
    },
    { label: "Referral code shown in owner's app", value: taptapOffer.code },
    { label: "Referred friend (captured offer)", value: taptapFriendReward },
    { label: "Referrer (captured offer)", value: taptapReferrerReward },
    { label: "Minimum transfer", value: taptapMinimum },
    {
      label: "Offer geography and campaign expiry",
      value: "Not shown in the supplied offer evidence."
    }
  ],
  lastManualReview: taptapOffer.officialCheckedAt,
  lastOfferUpdate: taptapOffer.evidenceReviewedAt,
  lastUpdated: taptapOffer.contentUpdatedAt,
  referral: {
    code: taptapOffer.code,
    link: null,
    hasProgram:
      "Taptap Send documents a personal referral program and separate team-issued promotional codes.",
    welcomeBonus: `Captured EUR offer: referred friend ${taptapFriendReward}; referrer ${taptapReferrerReward}. Confirm your route's offer in the app.`,
    minimumTransfer: taptapMinimum,
    expiry:
      "Reward credit expires 90 days after deposit. Code and campaign expiry are not shown in the supplied offer evidence.",
    payoutTiming:
      "The captured offer describes EUR 5 on the friend's first qualifying transfer. Official terms credit accounts after qualification without guaranteeing delivery time; inspect the first-transfer preview.",
    limitations: [...taptapEligibility, ...taptapRewardRules.slice(3)]
  },
  availability: {
    sendingCountries: [
      "Selected European countries including France",
      "United States (check state restrictions)",
      "United Kingdom",
      "Canada",
      "Australia",
      "United Arab Emirates",
      "Bahrain",
      "Brazil"
    ],
    receivingCountries: [
      "Supported destinations listed in the app; availability depends on the sending country."
    ],
    currencies: ["Shown in the live transfer quote for each route."],
    paymentMethods: [
      "Debit card where supported",
      "Instant bank transfer in eligible European markets",
      "Country-specific local payment methods shown in the app"
    ],
    countryAvailability: [
      {
        country: "Europe",
        supported:
          "The official Europe guide lists specific countries including France, Belgium, Germany and Spain.",
        paymentMethods: [
          "Debit card",
          "Instant bank transfer where available",
          "Local payment methods"
        ],
        notes:
          "Service coverage is not evidence of eligibility for the captured EUR referral offer."
      },
      {
        country: "United States",
        supported:
          "The official guide requires residence and physical presence in an available state at registration; Nevada and the Virgin Islands are listed as unavailable as checked on 8 September 2026.",
        paymentMethods: [
          "Debit card",
          "Taptap Send wallet for eligible accounts"
        ],
        notes:
          "Recipient delivery can be bank account, mobile wallet or cash pickup on supported routes; these are not sender payment methods."
      }
    ]
  },
  verification: {
    identityRequired:
      "The Europe and US sending guides describe photo ID and selfie checks for identity verification and limits.",
    proofOfAddress:
      "Provide the residence details and documents requested for the selected sending country.",
    bankVerification:
      "Complete any authentication requested by your payment provider in the app."
  },
  support: {
    supportEmail: "support@taptapsend.com",
    supportUrl: taptapSource("support").url,
    helpCenter:
      "Open your initials, Support, Contact Support, then I still need help. Email from your registered address."
  },
  officialResources: taptapSources.map((s) => ({
    label: s.label,
    href: s.url
  })),
  sources: taptapSources.map((s) => ({
    label: s.label,
    url: s.url,
    lastReviewed: taptapOffer.officialCheckedAt,
    confidence: "official"
  })),
  researchProfile: {
    completeness:
      "Official rules checked on 8 September 2026; owner-supplied transcription of the referral screen reviewed on 7 September 2026.",
    confidence: "high",
    sourcesReviewed: taptapSources.map((s) => s.label),
    remainingItems: [
      "Exact minimum send requirements, eligible routes and campaign expiry are not shown.",
      "Original screenshot is not available in the repository; the verified transcription supplied by the owner is used.",
      "The screen does not demonstrate a completed referral transaction."
    ]
  },
  proprietaryVerification: {
    status: "Partially Verified",
    verificationMethod:
      "Owner's referral-screen transcription plus official Help Center and referral terms",
    verifiedFields: [
      `Personal referral code shown: ${taptapOffer.code}`,
      `Referred friend: ${taptapFriendReward}`,
      `Referrer: ${taptapReferrerReward}`,
      "Exact minimum, geographic scope and campaign expiry remain unknown"
    ],
    lastVerified: taptapOffer.evidenceReviewedAt,
    officialSourcesReviewed: taptapSources.length,
    manualProof: {
      providerAppOrAccount:
        "Owner's Taptap Send Referrals screen (verified transcription)",
      referralCode: taptapOffer.code,
      bonus: `Friend: ${taptapFriendReward}; referrer: ${taptapReferrerReward}`,
      minimumTransfer: "Amount not shown",
      expiration:
        "Code or campaign expiry not shown; credited rewards expire after 90 days",
      notes:
        "Evidence reviewed 7 September 2026. Original image pending; no completed referral transaction is evidenced."
    }
  },
  updateHistory: [
    {
      date: taptapOffer.contentUpdatedAt,
      note: "Corrected the old role/currency/minimum claims from the owner's 7 September offer evidence and rechecked official referral, fees, countries and support rules. The original screenshot remains to be added."
    },
    {
      date: "2026-07-28",
      note: "Earlier offer entry superseded by the September evidence; its reward and minimum claims should not be used."
    }
  ],
  commonMistakes: [
    "Confusing the referrer's reward with the new customer's reward.",
    "Assuming a minimum amount that is not shown.",
    "Trying two codes or adding a code after the first transfer.",
    "Treating service availability as referral eligibility.",
    "Confusing reward-credit expiry with referral-code validity."
  ],
  missingBonus: [
    "Check the first-transfer code and account registration history.",
    "Check the minimum, sending country and destination in the app.",
    "Confirm successful, uncanceled delivery to someone other than the referrer.",
    "Allow for reward processing or bonus recredit after a failed transfer, then contact support."
  ],
  countryNotes: [
    "Service availability and referral eligibility are separate checks.",
    "European availability covers the countries explicitly listed by Taptap Send, not all of Europe.",
    "The EUR screenshot does not establish an offer in USD, CAD, AUD or GBP."
  ],
  faq: [
    {
      question: "Which countries can send with Taptap Send?",
      answer:
        "Official guides cover selected European countries, the US, UK, Canada, Australia, UAE, Bahrain and Brazil. Country and US state restrictions apply; consult the linked guides."
    },
    {
      question: "How are Taptap Send transfers delivered?",
      answer:
        "Bank accounts, mobile wallets and cash pickup are receiving methods on supported routes. The app shows the methods available for your destination."
    },
    {
      question: "What referral offer does the owner's screen show?",
      answer: `Code ${taptapOffer.code}, ${taptapFriendReward} for the referred friend and ${taptapReferrerReward} for the referrer. The exact minimum and eligible routes are not visible in the evidence.`
    }
  ],
  relatedGuideSlugs: [
    "how-to-use-taptap-send-bonus-credit",
    "how-to-avoid-missing-signup-bonus",
    "how-referral-codes-work"
  ],
  relatedFaqSlugs: [
    "can-i-use-referral-code-after-signing-up",
    "why-did-i-not-receive-my-referral-bonus"
  ],
  relatedCorridorSlugs: [
    "france-to-morocco",
    "france-to-senegal",
    "france-to-cote-divoire",
    "usa-to-kenya"
  ]
};
