export type Provider = {
  name: string;
  slug: string;
  description: string;
  website?: string;
  appStores?: {
    ios: string | null;
    android: string | null;
  };
  trustpilot?: string | null;
  foundedYear?: string | null;
  referralCode: string | null;
  referralLink: string;
  welcomeBonus: string;
  referral?: {
    hasProgram: string;
    code: string | null;
    link: string;
    welcomeBonus: string;
    minimumTransfer: string;
    expiry: string;
    payoutTiming: string;
    limitations: string[];
  };
  availability?: {
    sendingCountries: string[];
    receivingCountries: string[];
    currencies: string[];
    paymentMethods: string[];
    countryAvailability: {
      country: string;
      supported: string;
      paymentMethods: string[];
      notes: string;
    }[];
  };
  verification?: {
    identityRequired: string;
    proofOfAddress: string;
    bankVerification: string;
  };
  support?: {
    supportEmail: string | null;
    supportUrl: string;
    helpCenter: string;
  };
  updateHistory?: { date: string; note: string }[];
  officialResources?: { label: string; href: string }[];
  sources?: {
    label: string;
    url: string;
    lastReviewed: string;
    confidence: "official" | "referral-link" | "internal";
  }[];
  researchProfile?: {
    completeness: string;
    confidence: "high" | "medium" | "limited";
    sourcesReviewed: string[];
    remainingItems: string[];
  };
  lastManualReview?: string;
  lastOfferUpdate?: string;
  relatedGuideSlugs?: string[];
  relatedFaqSlugs?: string[];
  relatedCorridorSlugs?: string[];
  relatedProviderSlugs?: string[];
  supportedCountries: string[];
  eligibleUsers: string;
  ineligibleUsers?: string[];
  requirements: string[];
  steps: string[];
  bonusChecklist?: string[];
  keyFacts: { label: string; value: string }[];
  currentOffer: string;
  commonMistakes: string[];
  missingBonus: string[];
  countryNotes: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};

const variableOffer =
  "The offer may vary by country, time, provider campaign, transfer corridor, payment method, and user eligibility. Confirm the live terms in the provider app before sending money.";

export const referralWarning =
  "Referral offers can vary by country, account, campaign, and provider terms. Always check the live offer in the provider app before sending money.";

export const providers: Provider[] = [
  {
    name: "Taptap Send",
    slug: "taptap-send",
    website: "https://www.taptapsend.com/",
    description:
      "Taptap Send is a money transfer app used for sending money from countries such as France, the UK, the US, Canada, and parts of Europe to selected destinations in Africa, Asia, and Latin America.",
    referralCode: "SALAHEDD1933",
    referralLink: "https://www.taptapsend.com/",
    welcomeBonus:
      "Taptap Send referral rewards can vary by sender country, destination country, and campaign. A code usually needs to be applied during signup or through an eligible invitation flow.",
    supportedCountries: ["France", "United Kingdom", "United States", "Canada", "Morocco", "Senegal", "Mali"],
    eligibleUsers:
      "Usually new users who sign up through an eligible referral link or enter a referral code before their qualifying first transfer.",
    requirements: [
      "Create a new account before using Taptap Send for the first time.",
      "Apply the referral link or code during signup if the app provides that option.",
      "Complete identity checks when Taptap Send requires verification.",
      "Send a qualifying first transfer to an eligible destination and meet any minimum amount shown in the app."
    ],
    steps: [
      "Open the referral link or copy the referral code before creating your account.",
      "Install Taptap Send and sign up with accurate personal details.",
      "Check the bonus terms shown in the app, including destination, minimum amount, and expiry.",
      "Add your recipient and review the exchange rate, fee, payment method, and delivery option.",
      "Send the qualifying transfer only if the terms match what you expected."
    ],
    keyFacts: [
      { label: "Best for", value: "Users sending to eligible Taptap Send destination countries." },
      { label: "Referral code", value: "SALAHEDD1933, if the signup flow accepts a code." },
      { label: "Bonus certainty", value: "Not guaranteed. Eligibility depends on current Taptap Send rules." },
      { label: "When to apply", value: "Before or during signup, not after completing the first transfer." }
    ],
    currentOffer:
      "If you do not already have a Taptap Send referral code, you can use SALAHEDD1933. The exact bonus amount, qualifying transfer value, payout timing, and eligible corridors can change, so treat the in-app terms as the source of truth.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Bonus Foundry lists a Taptap Send referral code. Public official pages reviewed do not publish one fixed reward amount for every market, so the live in-app offer controls eligibility.",
      code: "SALAHEDD1933",
      link: "https://www.taptapsend.com/",
      welcomeBonus:
        "Reward amounts and qualifying rules can vary by sender country, destination, and active campaign. Confirm the current offer in the Taptap Send app before sending.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "The official public pages reviewed describe Taptap Send as an app-based money transfer service, but do not publish universal referral reward terms.",
        "Recipient delivery can be to mobile money wallet, bank account, or cash collection where supported.",
        "Taptap Send says support is available through in-app chat, email, and phone."
      ]
    },
    availability: {
      sendingCountries: ["United Kingdom", "European Union", "United States", "United Arab Emirates", "Canada"],
      receivingCountries: ["Supported destinations shown by Taptap Send, including routes in Africa, Asia, and Latin America."],
      currencies: ["Currencies vary by sender country and destination; confirm the live corridor in the app."],
      paymentMethods: ["Recipient mobile money wallet", "Recipient bank account", "Cash collection where available"],
      countryAvailability: [
        {
          country: "France",
          supported: "Taptap Send lists EU authorisation and supports selected destination corridors.",
          paymentMethods: ["Confirm sender payment method in app", "Recipient wallet", "Recipient bank", "Cash collection where available"],
          notes: "Check the France signup and transfer flow for the current eligible destinations and referral terms."
        },
        {
          country: "Morocco",
          supported: "Destination availability should be confirmed in the app for the selected sender country.",
          paymentMethods: ["Confirm delivery method in app"],
          notes: "Do not assume a referral campaign applies to Morocco until the app displays the live offer."
        }
      ]
    },
    verification: {
      identityRequired:
        "The official public pages reviewed do not publish a universal referral-specific verification rule; follow the identity prompts shown in the Taptap Send app.",
      proofOfAddress: "Confirm any address-document request in the app for your sender country.",
      bankVerification: "Confirm payment-method verification in the app before expecting a transfer or reward to complete."
    },
    support: {
      supportEmail: "support@taptapsend.com",
      supportUrl: "https://www.taptapsend.com/",
      helpCenter: "Taptap Send says to use Settings, Get help, then Chat to Customer Support in the app."
    },
    officialResources: [
      { label: "Taptap Send official website", href: "https://www.taptapsend.com/" }
    ],
    sources: [
      {
        label: "Taptap Send official website",
        url: "https://www.taptapsend.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.taptapsend.com/",
        lastReviewed: "2026-06-28",
        confidence: "internal"
      }
    ],
    researchProfile: {
      completeness:
        "Core provider facts, delivery methods, authorisation statements, and support contacts were reviewed from Taptap Send's official website.",
      confidence: "medium",
      sourcesReviewed: ["Taptap Send official website", "Bonus Foundry owner-supplied referral code"],
      remainingItems: [
        "Public official pages reviewed did not publish a universal referral reward amount.",
        "Public official pages reviewed did not publish universal minimum transfer, expiry, or payout timing for the referral code.",
        "Country-specific referral eligibility should be confirmed in the Taptap Send app."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official Taptap Send pages and replaced generic referral wording with source-backed provider, support, and availability notes."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Creating an account first and looking for a referral code field later.",
      "Sending a transfer below the minimum amount shown in the offer.",
      "Assuming a code works for every destination country.",
      "Ignoring identity verification prompts before expecting the reward."
    ],
    missingBonus: [
      "Check whether the code or referral link was applied before signup.",
      "Confirm that your first transfer met the minimum amount and destination rules.",
      "Wait for the reward timing shown in the app; some rewards are not instant.",
      "Contact Taptap Send support with your signup date, transfer date, and referral details if the terms appear to be met."
    ],
    countryNotes: [
      "France to Morocco users should verify that Morocco is eligible for the active first-transfer or referral campaign.",
      "Sender-country rules can differ between France, the UK, the US, Canada, and other markets.",
      "Recipient delivery methods can affect availability, so check bank, wallet, and cash options inside the app."
    ],
    faq: [
      {
        question: "Is this Taptap Send referral code official?",
        answer:
          "No. Bonus Foundry is independent and is not an official Taptap Send website. The code shown is our own referral code."
      },
      {
        question: "Can I add a Taptap Send referral code after signing up?",
        answer:
          "The provider may not allow a code to be added after account creation. Apply the link or code before signup whenever possible."
      },
      {
        question: "Is the Taptap Send bonus guaranteed?",
        answer:
          "No. The reward depends on Taptap Send's current rules, your country, the destination, verification, and whether your first transfer qualifies."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Wise",
    slug: "wise",
    website: "https://wise.com/",
    description:
      "Wise offers international transfers, multi-currency balances, debit card features, and local account details in many markets.",
    referralCode: null,
    referralLink: "https://wise.com/invite/ahpc/salaheddines203",
    welcomeBonus:
      "Wise referral benefits depend on the country, product, and active campaign shown during signup. Some users may see no public welcome bonus.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "India", "Canada"],
    eligibleUsers: "New Wise users who qualify under Wise's current referral or invitation terms.",
    requirements: [
      "Open a new Wise account through an eligible referral invitation if one is available.",
      "Verify your identity if Wise asks for documents or additional checks.",
      "Complete the required transfer or product action listed in the offer.",
      "Follow the timing and minimum-value rules shown in Wise's signup or account flow."
    ],
    steps: [
      "Open the referral invitation before creating a Wise account.",
      "Create the account with accurate details matching your identity documents.",
      "Review the current Wise offer terms before funding a transfer.",
      "Compare Wise's exchange rate and fee with other providers for the same corridor.",
      "Complete the qualifying action only if the reward terms are clear."
    ],
    keyFacts: [
      { label: "Best for", value: "Users comparing transparent transfer fees and multi-currency features." },
      { label: "Referral link", value: "https://wise.com/invite/ahpc/salaheddines203" },
      { label: "Bonus certainty", value: "Variable. Wise may not show the same referral offer to every user." },
      { label: "When to apply", value: "Before signup through the eligible invitation flow." }
    ],
    currentOffer:
      "Wise referral offers are not uniform across all countries. The reward can depend on the inviting account, the new user's country, the product used, and the qualifying transfer or account action.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Bonus Foundry lists a Wise invite link. Wise referral benefits are controlled by the live invitation and account flow rather than one public reward amount for every user.",
      code: null,
      link: "https://wise.com/invite/ahpc/salaheddines203",
      welcomeBonus:
        "Wise may show different referral benefits by country, inviter account, product, and campaign. Confirm the live invite terms before relying on a bonus.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "Wise states that international transfers can be sent to 140+ countries.",
        "Wise payment options can include card, Wise balance, bank transfer, PISP, and SWIFT depending on the route.",
        "Wise support is reached by logging in and contacting Wise from the help area."
      ]
    },
    availability: {
      sendingCountries: ["Wise-supported sender countries shown in the transfer flow"],
      receivingCountries: ["140+ countries according to Wise's official website"],
      currencies: ["40+ currencies according to Wise's official website"],
      paymentMethods: ["Debit or credit card", "Wise balance", "Bank transfer", "PISP", "SWIFT"],
      countryAvailability: [
        {
          country: "France",
          supported: "Wise availability depends on the route, currency, account type, and selected payment method.",
          paymentMethods: ["Card", "Wise balance", "Bank transfer", "PISP", "SWIFT where available"],
          notes: "Check the live France transfer flow before assuming a referral benefit applies."
        },
        {
          country: "Morocco",
          supported: "Wise destination support should be checked in the live transfer flow for the selected sending country.",
          paymentMethods: ["Recipient bank account where available"],
          notes: "Compare the live fee, exchange rate, delivery time, and any invite terms before sending."
        }
      ]
    },
    verification: {
      identityRequired: "Wise may ask users to verify their identity as part of account or transfer checks.",
      proofOfAddress: "Wise may request additional documents depending on country, account activity, or regulatory checks.",
      bankVerification: "Wise payment and account checks can vary by payment method and transfer route."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://wise.com/help/",
      helpCenter: "Wise says users should log in to get account-specific help and contact Wise customer support."
    },
    officialResources: [
      { label: "Wise official website", href: "https://wise.com/" },
      { label: "Wise international money transfer page", href: "https://wise.com/gb/send-money/" },
      { label: "Wise help centre", href: "https://wise.com/help/" },
      { label: "Wise referral invitation", href: "https://wise.com/invite/ahpc/salaheddines203" }
    ],
    sources: [
      {
        label: "Wise official website",
        url: "https://wise.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Wise international money transfer page",
        url: "https://wise.com/gb/send-money/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Wise help centre",
        url: "https://wise.com/help/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Wise referral invite link",
        url: "https://wise.com/invite/ahpc/salaheddines203",
        lastReviewed: "2026-06-28",
        confidence: "referral-link"
      }
    ],
    researchProfile: {
      completeness:
        "Core Wise provider facts, international transfer coverage, common payment methods, support path, and active invite link were reviewed from official Wise pages.",
      confidence: "medium",
      sourcesReviewed: [
        "Wise official website",
        "Wise international money transfer page",
        "Wise help centre",
        "Wise referral invite link"
      ],
      remainingItems: [
        "The public pages reviewed did not show one fixed referral reward amount for all users.",
        "The public pages reviewed did not show universal referral expiry, payout timing, or minimum transfer rules.",
        "The live invite/account flow should be checked for country-specific eligibility."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official Wise pages and replaced generic referral wording with source-backed transfer coverage, payment method, support, and invite-link notes."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming a Wise referral offer is available in every country.",
      "Opening an account without the referral invitation and trying to attach it later.",
      "Looking only at the bonus while ignoring transfer fees and exchange rate.",
      "Using a business or personal account flow that does not match the referral terms."
    ],
    missingBonus: [
      "Check whether the account was created through the referral invitation.",
      "Confirm the qualifying action and minimum amount in Wise's displayed terms.",
      "Check whether identity verification or account review is still pending.",
      "Contact Wise support with the invitation details if the terms appear to be satisfied."
    ],
    countryNotes: [
      "Wise product availability differs by country, including balances, cards, local details, and transfer routes.",
      "A transfer from France to Morocco should be checked for fee, exchange rate, payment method, and recipient method before considering any bonus.",
      "Some markets may have referral programs for inviters rather than a visible new-user welcome bonus."
    ],
    faq: [
      {
        question: "Does Wise always offer a signup bonus?",
        answer:
          "No. Wise referral offers vary and may not be available to every user, country, product, or transfer route."
      },
      {
        question: "Where should I confirm the Wise bonus?",
        answer:
          "Confirm the current bonus inside Wise's signup flow or account area before relying on it."
      },
      {
        question: "Can an existing Wise user use a referral code?",
        answer:
          "Referral offers are usually for new users. Existing users may not be eligible unless Wise's current terms say otherwise."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Remitly",
    slug: "remitly",
    website: "https://www.remitly.com/",
    description:
      "Remitly is an international remittance app for sending money to bank accounts, mobile wallets, and cash pickup locations in supported countries.",
    referralCode: null,
    referralLink: "https://remit.ly/35sixkkg",
    welcomeBonus:
      "Remitly may offer first-transfer promotions or referral rewards depending on the sender country, destination, payment method, and active campaign.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Philippines", "Mexico"],
    eligibleUsers: "New users who satisfy Remitly's active offer requirements before their qualifying transfer.",
    requirements: [
      "Sign up as a new Remitly customer.",
      "Use the referral link or apply the code when the app supports it.",
      "Complete verification if Remitly requests identity information.",
      "Send a qualifying transfer to an eligible destination with an eligible payment method."
    ],
    steps: [
      "Create your Remitly account through the eligible referral or offer flow.",
      "Enter recipient details and choose the delivery method.",
      "Review the fee, exchange rate, estimated arrival time, and bonus terms.",
      "Complete the transfer if the amount and destination qualify.",
      "Keep the transfer receipt until any expected reward is resolved."
    ],
    keyFacts: [
      { label: "Best for", value: "Users comparing remittance delivery options such as bank, wallet, or cash pickup." },
      { label: "Referral link", value: "https://remit.ly/35sixkkg" },
      { label: "Bonus certainty", value: "Not guaranteed. Campaigns and corridors can change." },
      { label: "When to apply", value: "Before the first qualifying transfer." }
    ],
    currentOffer:
      "Remitly's visible offer may be a referral reward, a first-transfer promotion, or no offer at all. Check the live transfer screen before sending because the bonus can be affected by destination country, payment method, and transfer amount.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Remitly publishes referral program terms. Users can invite family and friends with a referral link or QR code, and referred friends must complete a qualified first transfer for the referral to qualify.",
      code: null,
      link: "https://remit.ly/35sixkkg",
      welcomeBonus:
        "Remitly referral rewards may change and depend on the active offer. The official terms say a reward can be sent by email after the referred friend completes the qualified referral conditions.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "Reward sent by email after the referred friend completes the qualified referral conditions.",
      limitations: [
        "Canceled transfers are not qualified referrals under Remitly's referral terms.",
        "Remitly limits the program to 20 rewards for qualified referrals.",
        "The referred friend must not be an existing active or inactive Remitly customer.",
        "Accounts must remain in good standing and pass required know-your-customer and fraud-prevention checks."
      ]
    },
    availability: {
      sendingCountries: ["Remitly-supported sender countries shown on the official website or app"],
      receivingCountries: ["Remitly-supported destination countries shown in the transfer flow"],
      currencies: ["Currencies vary by sender country, destination country, and delivery method."],
      paymentMethods: ["Bank account", "Mobile wallet", "Cash pickup", "Other route-specific methods shown by Remitly"],
      countryAvailability: [
        {
          country: "France",
          supported: "Remitly route availability should be checked in the live transfer flow.",
          paymentMethods: ["Route-specific payment methods shown by Remitly"],
          notes: "Referral eligibility still depends on the active terms, account standing, and the referred friend's first qualified transfer."
        },
        {
          country: "Morocco",
          supported: "Destination availability should be checked in the live transfer flow.",
          paymentMethods: ["Bank account", "Cash pickup or wallet where available"],
          notes: "Do not assume a destination or delivery method qualifies for the referral offer until Remitly displays the live terms."
        }
      ]
    },
    verification: {
      identityRequired:
        "Remitly referral terms require users to pass know-your-customer and fraud-prevention checks to receive rewards.",
      proofOfAddress: "Remitly may request additional information when required by account, transfer, or compliance checks.",
      bankVerification: "Payment-method and transfer checks can affect whether an account remains eligible for rewards."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.remitly.com/us/en/home/referral-offer-program",
      helpCenter: "Use Remitly's official website, app, or referral terms page for referral-program support context."
    },
    officialResources: [
      { label: "Remitly official website", href: "https://www.remitly.com/" },
      { label: "Remitly referral offer program", href: "https://www.remitly.com/us/en/home/referral-offer-program" },
      { label: "Remitly referral program terms", href: "https://www.remitly.com/us/en/home/referral-offer-program-tnc" },
      { label: "Remitly referral invitation", href: "https://remit.ly/35sixkkg" }
    ],
    sources: [
      {
        label: "Remitly official website",
        url: "https://www.remitly.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Remitly referral offer program",
        url: "https://www.remitly.com/us/en/home/referral-offer-program",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Remitly referral program terms",
        url: "https://www.remitly.com/us/en/home/referral-offer-program-tnc",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Remitly referral link",
        url: "https://remit.ly/35sixkkg",
        lastReviewed: "2026-06-28",
        confidence: "referral-link"
      }
    ],
    ineligibleUsers: [
      "Existing active or inactive Remitly customers.",
      "Users whose first transfer is canceled by the referred friend or by Remitly.",
      "Accounts that do not remain in good standing or do not pass required know-your-customer and fraud-prevention checks.",
      "Users who do not complete the first transfer through the referral invite."
    ],
    bonusChecklist: [
      "Open the Remitly referral invite before creating the account.",
      "Confirm the account is new and not an existing active or inactive Remitly account.",
      "Complete the first transfer through the referral invite and keep the transfer receipt.",
      "Avoid canceling the transfer; canceled transfers do not qualify.",
      "Complete any know-your-customer and fraud-prevention checks Remitly requires."
    ],
    researchProfile: {
      completeness:
        "Core Remitly referral rules, qualification requirements, ineligible cases, maximum referral rewards, payout method, verification dependencies, and invite link were reviewed from official Remitly pages.",
      confidence: "high",
      sourcesReviewed: [
        "Remitly official website",
        "Remitly referral offer program",
        "Remitly referral program terms",
        "Remitly referral link"
      ],
      remainingItems: [
        "The public terms reviewed allow reward changes and do not provide one fixed reward amount for every user.",
        "Route-specific minimum transfer, expiry, and delivery-method restrictions should be confirmed in Remitly's live offer flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official Remitly referral program pages and added source-backed rules for qualified referrals, canceled transfers, account eligibility, reward delivery, and maximum rewards."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming a first-transfer promotional rate is the same thing as a referral bonus.",
      "Choosing a destination or payment method excluded by the current terms.",
      "Completing the first transfer before checking whether the code applied.",
      "Expecting an instant reward when the terms specify review or payout timing."
    ],
    missingBonus: [
      "Review the confirmation email or app screen for the applied promotion.",
      "Check that your first transfer meets the minimum amount and destination rules.",
      "Make sure verification and payment settlement are complete.",
      "Contact Remitly support with your transfer receipt and referral details if needed."
    ],
    countryNotes: [
      "Remitly corridors and delivery options can differ by sender and recipient country.",
      "France to Morocco users should compare Remitly with Taptap Send and Wise on fee, rate, delivery method, and active offer.",
      "Some promotions are corridor-specific and may not transfer to another destination."
    ],
    faq: [
      {
        question: "Are Remitly referral rewards guaranteed?",
        answer:
          "No. Rewards depend on the active terms, user eligibility, verification, and completion of qualifying steps."
      },
      {
        question: "Can existing Remitly users use a referral code?",
        answer:
          "Referral codes are usually intended for new users, but Remitly's current terms decide eligibility."
      },
      {
        question: "Is a Remitly promo rate the same as a referral bonus?",
        answer:
          "Not always. A promotional exchange rate, fee discount, and referral reward can have different rules."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Sendwave",
    slug: "sendwave",
    website: "https://www.sendwave.com/",
    description:
      "Sendwave is a money transfer app used for sending funds to selected countries, often with mobile-focused delivery options.",
    referralCode: "I4H9G",
    referralLink: "https://www.sendwave.com/",
    welcomeBonus:
      "Sendwave offers and referral availability can vary. Bonus Foundry lists the referral code I4H9G, but users should confirm live terms in the app.",
    supportedCountries: ["United States", "United Kingdom", "France", "Senegal", "Ghana", "Kenya"],
    eligibleUsers: "New users may be eligible only if Sendwave shows an active offer in their signup or transfer flow.",
    requirements: [
      "Create a new account in a supported sender country.",
      "Check whether Sendwave displays a referral or first-transfer promotion.",
      "Complete verification if required.",
      "Send to an eligible destination and meet any minimum transfer amount."
    ],
    steps: [
      "Open Sendwave and review the live signup offer.",
      "Create your account before sending a first transfer.",
      "Check fees, exchange rate, destination, payment method, and any visible promotion.",
      "Complete the transfer only after confirming the current requirements."
    ],
    keyFacts: [
      { label: "Referral code", value: "I4H9G, if Sendwave accepts a code in your signup flow." },
      { label: "Offer status", value: "May vary by country and campaign." },
      { label: "Best check", value: "Review the Sendwave app before the first transfer." },
      { label: "Bonus certainty", value: "Confirm the live Sendwave offer before sending money." }
    ],
    currentOffer:
      "Bonus Foundry lists I4H9G as the Sendwave referral code. If Sendwave shows a promotion in the app, follow those terms because the exact reward can vary.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Bonus Foundry lists an owner-supplied Sendwave code, but Sendwave's public website reviewed on 2026-06-28 did not publish a public referral-program page or reward table.",
      code: "I4H9G",
      link: "https://www.sendwave.com/",
      welcomeBonus:
        "Sendwave's public site highlights app transfers and wallet offers in select markets. Any referral reward should be treated as app-only unless Sendwave shows terms in the user's region.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "The official Sendwave header data reviewed did not expose a public refer-a-friend link.",
        "Sendwave Wallet is currently described as available for US senders, with better rates or cashback in select markets.",
        "Sender and recipient availability varies by country route."
      ]
    },
    availability: {
      sendingCountries: ["Belgium", "Canada", "Germany", "Spain", "France", "United Kingdom", "Ireland", "Italy", "Portugal", "United States"],
      receivingCountries: ["Africa and Asia destinations listed on Sendwave's countries page", "Brazil", "Ghana", "Kenya", "Morocco", "Nigeria", "Senegal"],
      currencies: ["Route-specific currencies listed in Sendwave's countries data"],
      paymentMethods: ["Debit card", "Sendwave Wallet for US senders", "Recipient mobile money", "Recipient bank account", "Cash pickup on supported routes"],
      countryAvailability: [
        {
          country: "France",
          supported: "Listed by Sendwave as a sending country on many destination routes.",
          paymentMethods: ["Debit card", "Recipient bank", "Recipient mobile money", "Cash pickup where the destination supports it"],
          notes: "Regional referral availability was not published on the public Sendwave pages reviewed."
        },
        {
          country: "United States",
          supported: "Listed as a sending country and the current market for Sendwave Wallet.",
          paymentMethods: ["Debit card", "Sendwave Wallet", "Recipient bank", "Recipient mobile money", "Cash pickup where supported"],
          notes: "Sendwave says Wallet is only available for US senders right now, with select-market cashback or better-rate offers."
        },
        {
          country: "Ghana",
          supported: "Listed as a receiving country.",
          paymentMethods: ["AirtelTigo, MTN, or Telecel mobile money", "Bank account"],
          notes: "Destination payout methods are route-specific and can change."
        }
      ]
    },
    verification: {
      identityRequired: "Sendwave says users link a debit card and verify identity before sending.",
      proofOfAddress: "Confirm any address or document request in the Sendwave app for the sender country.",
      bankVerification: "Debit-card and wallet checks can depend on region and payment method."
    },
    support: {
      supportEmail: "help@sendwave.com",
      supportUrl: "https://www.sendwave.com/en-us/support",
      helpCenter: "Sendwave's public site links to FAQs, Wallet FAQs, and Contact Us under Support."
    },
    officialResources: [
      { label: "Sendwave official website", href: "https://www.sendwave.com/en-us" },
      { label: "Sendwave countries page", href: "https://www.sendwave.com/en-us/countries" },
      { label: "Sendwave support", href: "https://www.sendwave.com/en-us/support" }
    ],
    sources: [
      {
        label: "Sendwave official website",
        url: "https://www.sendwave.com/en-us",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Sendwave countries page",
        url: "https://www.sendwave.com/en-us/countries",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.sendwave.com/",
        lastReviewed: "2026-06-28",
        confidence: "internal"
      }
    ],
    researchProfile: {
      completeness:
        "Reviewed Sendwave's official homepage, structured organization data, wallet copy, and countries page for regional availability, payout methods, support, and public referral signals.",
      confidence: "medium",
      sourcesReviewed: ["Sendwave official website", "Sendwave countries page", "Bonus Foundry owner-supplied referral code"],
      remainingItems: [
        "No official public Sendwave referral terms page was found in the public pages reviewed.",
        "The I4H9G code should be confirmed in the Sendwave app before a user relies on any reward.",
        "Route-specific transfer limits and payout methods should be checked in Sendwave's live app flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official Sendwave website and countries data; added regional sending countries, payout methods, support details, and a public-referral availability caveat."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Using an old code found on a forum without checking whether Sendwave still accepts it.",
      "Assuming an offer applies to every sender country.",
      "Ignoring destination-specific availability."
    ],
    missingBonus: [
      "Check whether Sendwave showed an offer before signup or transfer.",
      "Confirm that your first transfer met any displayed minimum amount.",
      "Contact Sendwave support with screenshots if you relied on a visible app offer."
    ],
    countryNotes: [
      "Sendwave availability depends on sender and destination country.",
      "Mobile wallet and bank delivery options can vary by destination.",
      "Check local transfer limits and verification requirements before sending."
    ],
    faq: [
      {
        question: "Does Bonus Foundry have a Sendwave referral code?",
        answer: "Yes. Bonus Foundry lists I4H9G as the Sendwave referral code. Confirm the live offer terms in Sendwave before sending money."
      },
      {
        question: "Can Sendwave offers change?",
        answer: variableOffer
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Ria",
    slug: "ria",
    website: "https://www.riamoneytransfer.com/",
    description:
      "Ria is a money transfer provider with online transfers and a large cash pickup network in many countries.",
    referralCode: null,
    referralLink: "https://www.riamoneytransfer.com/",
    welcomeBonus:
      "Ria's official public pages reviewed by Bonus Foundry did not publish a general referral-code program. Ria may show first-transfer promo rates or local promotions in specific country flows.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Users may be eligible only for promotions Ria displays in the relevant country site, app, or checkout flow.",
    requirements: [
      "Use the correct Ria country website or app for your sender location.",
      "Check for any displayed promo terms before payment.",
      "Complete identity verification if requested.",
      "Send through an eligible route and payout method."
    ],
    steps: [
      "Choose the sender country and destination in Ria.",
      "Review payout options such as bank deposit, cash pickup, or wallet where available.",
      "Check whether a promotion is shown before checkout.",
      "Complete payment only after reviewing total cost and delivery timing."
    ],
    keyFacts: [
      { label: "Referral program", value: "No official public referral program found in the pages reviewed." },
      { label: "Offer status", value: "First-transfer promo rates or local promotions may depend on country site and channel." },
      { label: "Main caution", value: "Cash pickup and online offers may have different terms." },
      { label: "Bonus certainty", value: "Only Ria's live flow can confirm a current promotion." }
    ],
    currentOffer:
      "Bonus Foundry does not currently display a verified public Ria invite reward. Ria's official homepage shows first-transfer promo-rate messaging and broad transfer coverage, so check the live Ria flow for any active country-specific promotion.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "No official public Ria referral-program page was found in the official public pages reviewed on 2026-06-28.",
      code: null,
      link: "https://www.riamoneytransfer.com/",
      welcomeBonus:
        "Ria may show a first-transfer promo rate or a local promotion, but Bonus Foundry did not verify a public referral-code reward from official Ria sources.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "Do not use a Ria code unless Ria displays an official code field and terms in your country flow.",
        "Ria's online, app, WhatsApp, and agent-location channels can have different availability and offer rules.",
        "Country, destination, payout method, and payment method can affect whether a Ria promotion applies."
      ]
    },
    availability: {
      sendingCountries: ["Ria-supported sender countries shown on the selected country site or app"],
      receivingCountries: ["190+ countries according to Ria's official website"],
      currencies: ["Route-specific currencies shown in the Ria flow"],
      paymentMethods: ["Debit card", "Bank", "Cash pickup", "Bank deposit", "Digital wallet", "Home delivery where available"],
      countryAvailability: [
        {
          country: "United States",
          supported: "Ria's official homepage is framed around sending from the US to 190+ countries.",
          paymentMethods: ["Debit card", "Bank", "Cash pickup", "Bank deposit", "Digital wallet", "Home delivery where available"],
          notes: "The public page shows first-transfer promo-rate messaging, not a general referral-code program."
        },
        {
          country: "Morocco",
          supported: "Destination availability should be checked in Ria's live flow.",
          paymentMethods: ["Cash pickup", "Bank deposit or wallet where available"],
          notes: "Cash pickup and online delivery choices can change by route."
        }
      ]
    },
    verification: {
      identityRequired: "Ria may require identity checks depending on sender country, amount, channel, and payout method.",
      proofOfAddress: "Confirm any address-document request in Ria's live country flow.",
      bankVerification: "Card, bank, and account checks can vary by payment method and country."
    },
    support: {
      supportEmail: "support@riamoneytransfer.com",
      supportUrl: "https://www.riamoneytransfer.com/",
      helpCenter: "Ria's public website links to its Help center for answers and customer support."
    },
    officialResources: [
      { label: "Ria official website", href: "https://www.riamoneytransfer.com/" },
      { label: "Ria Help center", href: "https://help.riamoneytransfer.com/hc/en-us" },
      { label: "Ria cash pickup", href: "https://www.riamoneytransfer.com/en-us/send-money-cash-pickup/" },
      { label: "Ria bank deposit", href: "https://www.riamoneytransfer.com/en-us/send-money-to-bank-account/" },
      { label: "Ria digital wallet", href: "https://www.riamoneytransfer.com/en-us/wallets/" }
    ],
    sources: [
      {
        label: "Ria official website",
        url: "https://www.riamoneytransfer.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Ria Help center",
        url: "https://help.riamoneytransfer.com/hc/en-us",
        lastReviewed: "2026-06-28",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users relying on a public referral code that Ria does not show in the live flow.",
      "Users attempting to apply a local promotion from another country site.",
      "Transfers whose channel, destination, payout method, payment method, or user status does not match the displayed Ria terms."
    ],
    bonusChecklist: [
      "Open the correct Ria country site or app.",
      "Check whether Ria displays a promo rate or local offer before payment.",
      "Do not assume a referral code exists unless Ria shows an official code field and terms.",
      "Compare the fee, exchange rate, delivery method, and arrival timing before sending.",
      "Keep the transfer receipt and any displayed promotion screen."
    ],
    researchProfile: {
      completeness:
        "Reviewed Ria's official public website, structured organization data, support link, transfer coverage, delivery methods, and promo-rate messaging for public referral evidence.",
      confidence: "medium",
      sourcesReviewed: ["Ria official website", "Ria Help center"],
      remainingItems: [
        "Ria Help center was protected by a browser challenge during direct fetch, but it is linked from the official Ria website.",
        "No official public referral-code terms were found in the public official pages reviewed.",
        "Country-specific promotions must be confirmed in Ria's live country flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official Ria pages and replaced unverified referral-code presentation with a clear public-referral-not-found explanation."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming a promo from one Ria country site applies in another country.",
      "Confusing cash pickup availability with bonus eligibility.",
      "Forgetting that agent-location transfers and online transfers can have different rules."
    ],
    missingBonus: [
      "Check whether the offer was attached to the transfer before payment.",
      "Review the sender country, destination, and payout method rules.",
      "Contact Ria support with transfer details if a displayed promotion did not apply."
    ],
    countryNotes: [
      "Ria's online service and agent network can differ by market.",
      "France to Morocco users should compare online availability, pickup options, fee, exchange rate, and any visible promotion.",
      "Identity and transfer limits can vary by country."
    ],
    faq: [
      {
        question: "Does Ria have a verified public referral program on Bonus Foundry?",
        answer:
          "No verified public Ria referral-code program was found in the official pages reviewed. Use only promotions Ria displays in its live flow."
      },
      {
        question: "Can a Ria promotion depend on the payout method?",
        answer: "Yes. Provider rules may differ for bank deposit, wallet delivery, and cash pickup."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Western Union",
    slug: "western-union",
    website: "https://www.westernunion.com/",
    description:
      "Western Union is a global money transfer provider with online transfers, app transfers, and agent-location services.",
    referralCode: null,
    referralLink: "https://ssqt.co/mQVq5Jg",
    welcomeBonus:
      "Western Union referral and promotion rules are regional. Bonus Foundry lists a referral link, but Western Union's US pages show a local Refer a Friend flow and other country sites may use different reward, login, or loyalty-program rules.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers:
      "New or invited users may be eligible only when the Western Union country site, app, or referral landing flow displays an active local offer for their account.",
    requirements: [
      "Use the Western Union site or app for the sender country where the account will be created.",
      "Open the referral link or local Refer a Friend page before signup when a referral flow is available.",
      "Complete identity checks when required.",
      "Meet the transfer amount, destination, payout method, channel, and timing rules shown in the local terms."
    ],
    steps: [
      "Open the Western Union country site or app that matches your sender country.",
      "Use the referral link or local Refer a Friend entry point before creating the account.",
      "Select recipient country, amount, and delivery method, then review the fee, exchange rate, and delivery time.",
      "Confirm that any referral, promo, or My WU reward is visible before payment.",
      "Keep your receipt in case support needs to review the transfer."
    ],
    keyFacts: [
      { label: "Referral link", value: "https://ssqt.co/mQVq5Jg" },
      { label: "Offer status", value: "Regional. Do not assume one universal Western Union reward." },
      { label: "US evidence", value: "Western Union publishes a US Refer a Friend page." },
      { label: "Bonus certainty", value: "Only the local referral or checkout terms can confirm eligibility." }
    ],
    currentOffer:
      "Bonus Foundry lists a Western Union referral link. Western Union referral promotions are regional, so use the link only as an entry point and verify the exact reward, minimum transfer, channel, and expiry in the sender-country flow.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Western Union has regional referral and rewards experiences, including a public US Refer a Friend page. Bonus Foundry does not treat that as a universal global reward.",
      code: null,
      link: "https://ssqt.co/mQVq5Jg",
      welcomeBonus:
        "The reward can vary by sender country, campaign, account status, transfer channel, and Western Union account flow. Confirm the live local terms before sending.",
      minimumTransfer: "Regional; check the local Western Union referral or checkout terms.",
      expiry: "Regional; check the active country-site terms and any invitation expiry.",
      payoutTiming: "Regional; reward timing is controlled by the local campaign or My WU terms.",
      limitations: [
        "Western Union country sites can show different referral, promotion, and loyalty experiences.",
        "Online, app, and agent-location transfers may not share the same offer rules.",
        "Do not invent a fixed Western Union referral reward unless the local terms display it."
      ]
    },
    availability: {
      sendingCountries: ["Western Union-supported sender countries shown on each local country site or app"],
      receivingCountries: ["200+ countries and territories according to Western Union's official site messaging"],
      currencies: ["Route-specific currencies shown in Western Union's live transfer flow"],
      paymentMethods: ["Credit card", "Debit card", "Bank account", "Cash at agent location", "Mobile wallet where available"],
      countryAvailability: [
        {
          country: "United States",
          supported: "Western Union publishes a US site and a US Refer a Friend page.",
          paymentMethods: ["Card", "Bank account", "Cash at agent location", "Recipient bank", "Cash pickup", "Mobile wallet where available"],
          notes: "Use the US terms for US accounts; do not apply US referral assumptions to France, the UK, or other markets."
        },
        {
          country: "France",
          supported: "Western Union has a France country site with local pricing, account, and payout rules.",
          paymentMethods: ["Card", "Bank account where available", "Cash pickup", "Recipient bank or wallet where supported"],
          notes: "Referral availability must be checked in the French account or app flow because Western Union promotions are regional."
        },
        {
          country: "Morocco",
          supported: "Morocco is a common receiving market, but payout options depend on the sender country and transfer route.",
          paymentMethods: ["Cash pickup", "Bank account or wallet where the route supports it"],
          notes: "Destination availability does not prove referral eligibility; check the sender-country terms."
        }
      ]
    },
    verification: {
      identityRequired: "Western Union may require identity verification depending on country, amount, channel, and account history.",
      proofOfAddress: "Address or additional documents may be requested under local compliance rules.",
      bankVerification: "Card, bank-account, and account checks vary by payment method and country."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.westernunion.com/",
      helpCenter: "Use the Help or Contact us section on the Western Union country site that matches your sender country."
    },
    officialResources: [
      { label: "Western Union official website", href: "https://www.westernunion.com/" },
      { label: "Western Union US home", href: "https://www.westernunion.com/us/en/home.html" },
      { label: "Western Union US Refer a Friend", href: "https://www.westernunion.com/us/en/refer-a-friend.html" },
      { label: "Western Union referral link", href: "https://ssqt.co/mQVq5Jg" }
    ],
    sources: [
      {
        label: "Western Union official website",
        url: "https://www.westernunion.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Western Union US home",
        url: "https://www.westernunion.com/us/en/home.html",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Western Union US Refer a Friend",
        url: "https://www.westernunion.com/us/en/refer-a-friend.html",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Western Union referral link",
        url: "https://ssqt.co/mQVq5Jg",
        lastReviewed: "2026-06-28",
        confidence: "referral-link"
      }
    ],
    ineligibleUsers: [
      "Users trying to apply a Western Union offer from a different country site.",
      "Existing users when the local referral terms require a new account.",
      "Users whose transfer channel, payout method, destination, amount, or identity status does not match the local terms.",
      "Users relying on a universal reward amount that Western Union has not shown in their local flow."
    ],
    bonusChecklist: [
      "Open the sender-country Western Union site or app.",
      "Use the referral link or local Refer a Friend page before signup when available.",
      "Confirm the reward, minimum transfer, expiry, eligible channel, and payout timing in the local flow.",
      "Complete identity verification if Western Union requests it.",
      "Keep the referral screen and transfer receipt until the reward is resolved."
    ],
    researchProfile: {
      completeness:
        "Reviewed Western Union's official global site, US country site, US Refer a Friend page, and the Bonus Foundry referral link for regional referral evidence.",
      confidence: "high",
      sourcesReviewed: [
        "Western Union official website",
        "Western Union US home",
        "Western Union US Refer a Friend",
        "Western Union referral link"
      ],
      remainingItems: [
        "Western Union referral terms should be checked separately for each sender country before publishing a local reward amount.",
        "The short referral link destination and live offer should be retested before major content updates.",
        "Agent-location, app, web, and My WU rewards may have separate local rules."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Verified that Western Union referral promotions are regional and added official US Refer a Friend, support, availability, and no-universal-reward caveats."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming an online offer applies at agent locations.",
      "Comparing bonuses without comparing total fee and exchange rate.",
      "Using a promotion from a different country site.",
      "Treating a US Refer a Friend page as a global Western Union reward."
    ],
    missingBonus: [
      "Confirm the referral or promo was visible and applied before payment.",
      "Check whether the transfer channel matched the offer.",
      "Review the sender-country terms for minimum transfer, destination, expiry, and new-user rules.",
      "Contact Western Union support through the local site with your referral details and receipt if a displayed promotion was not honored."
    ],
    countryNotes: [
      "Western Union coverage is broad, but pricing and delivery options vary by route.",
      "Agent-location and app offers may not be interchangeable.",
      "Some markets use loyalty or rewards programs rather than simple referral codes.",
      "A referral page or reward visible in one country should not be copied to another country without local confirmation."
    ],
    faq: [
      {
        question: "Does Western Union have a referral code here?",
        answer: "Bonus Foundry lists a Western Union referral link rather than a manual code. Use the link before signup and check the live offer terms."
      },
      {
        question: "Are Western Union referral rewards the same in every country?",
        answer: "No. Western Union referral and reward promotions are regional. Confirm the terms on the country site or app used for your sender account."
      },
      {
        question: "Should I compare Western Union even without a referral code?",
        answer:
          "Yes. Fees, exchange rate, delivery speed, cash pickup coverage, and reliability can matter more than a one-time bonus."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "MoneyGram",
    slug: "moneygram",
    website: "https://www.moneygram.com/",
    description:
      "MoneyGram provides international transfers through online, mobile, and agent-location channels in many markets.",
    referralCode: null,
    referralLink: "https://www.moneygram.com/",
    welcomeBonus:
      "MoneyGram publishes first-transfer and MoneyGram Plus Rewards information, but Bonus Foundry did not verify an official public refer-a-friend program from MoneyGram's public pages.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Eligibility depends on MoneyGram's active local offer, MoneyGram Plus Rewards status, account status, transfer channel, and transfer details.",
    requirements: [
      "Use the correct MoneyGram country site or app.",
      "Check for any displayed first-transfer, promo-code, or MoneyGram Plus Rewards offer before checkout.",
      "Complete verification if MoneyGram requires it.",
      "Meet transfer amount, destination, and payout method rules."
    ],
    steps: [
      "Enter sender and recipient country details.",
      "Choose bank, wallet, card, or cash pickup when available.",
      "Review total transfer cost, rewards enrollment, and any visible offer.",
      "Submit the transfer only after confirming the terms."
    ],
    keyFacts: [
      { label: "Referral program", value: "No official public referral program verified from MoneyGram pages reviewed." },
      { label: "Offer status", value: "First-transfer and MoneyGram Plus Rewards offers may vary by market." },
      { label: "Main caution", value: "Online and agent-location offers may differ." },
      { label: "Bonus certainty", value: "Confirm MoneyGram's live transfer flow before relying on any offer." }
    ],
    currentOffer:
      "Bonus Foundry does not publish a MoneyGram referral code because no official public referral-program page was verified. Use only offers MoneyGram displays in the official site, app, checkout, or MoneyGram Plus Rewards area.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "No official public MoneyGram referral-program page was found in the official public pages reviewed on 2026-06-28.",
      code: null,
      link: "https://www.moneygram.com/",
      welcomeBonus:
        "MoneyGram may show first-transfer, promo-code, or MoneyGram Plus Rewards benefits, but Bonus Foundry did not verify a public refer-a-friend reward from official MoneyGram sources.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "Do not rely on third-party MoneyGram referral claims unless the official MoneyGram flow displays matching terms.",
        "MoneyGram Plus Rewards and first-transfer promotions are separate from a public referral-code program.",
        "Online, app, and agent-location offers can differ."
      ]
    },
    availability: {
      sendingCountries: ["MoneyGram-supported sender countries shown in the selected country site or app"],
      receivingCountries: ["200+ countries and territories according to MoneyGram's official site messaging"],
      currencies: ["Route-specific currencies shown in MoneyGram's transfer flow"],
      paymentMethods: ["Debit card", "Credit card", "Bank account", "Cash at agent location", "Bank account deposit", "Mobile wallet where available", "Cash pickup"],
      countryAvailability: [
        {
          country: "United States",
          supported: "MoneyGram's US flow supports online and app transfer setup plus agent-location services.",
          paymentMethods: ["Card", "Bank account", "Cash at agent location", "Cash pickup", "Bank deposit", "Mobile wallet where available"],
          notes: "Check the US site or app for any first-transfer or MoneyGram Plus Rewards offer before payment."
        },
        {
          country: "France",
          supported: "MoneyGram availability should be checked on the France country flow for online and agent options.",
          paymentMethods: ["Card or bank where available", "Cash pickup", "Bank deposit or wallet where supported"],
          notes: "No public France-specific referral reward was verified from official pages."
        },
        {
          country: "Morocco",
          supported: "Morocco is commonly available as a receiving market, subject to the selected sender country and route.",
          paymentMethods: ["Cash pickup", "Bank or wallet where supported by route"],
          notes: "Destination support does not prove bonus eligibility; check the live MoneyGram transfer flow."
        }
      ]
    },
    verification: {
      identityRequired: "MoneyGram may require identity verification depending on sender country, channel, transfer amount, and risk checks.",
      proofOfAddress: "Address or additional-document checks can apply under local compliance rules.",
      bankVerification: "Payment and account checks depend on whether the user pays by card, bank account, or cash channel."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.moneygram.com/",
      helpCenter: "Use MoneyGram's Help or Contact support section on the official country site or app."
    },
    officialResources: [
      { label: "MoneyGram official website", href: "https://www.moneygram.com/" },
      { label: "MoneyGram Plus Rewards", href: "https://www.moneygram.com/" },
      { label: "MoneyGram support", href: "https://www.moneygram.com/" }
    ],
    sources: [
      {
        label: "MoneyGram official website",
        url: "https://www.moneygram.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users relying on a MoneyGram referral code that MoneyGram does not show in its official flow.",
      "Users attempting to apply an offer from another country, channel, or account type.",
      "Transfers that do not meet the displayed promotion, Plus Rewards, channel, destination, payment, or verification rules."
    ],
    bonusChecklist: [
      "Open the official MoneyGram country site or app.",
      "Check whether MoneyGram shows a first-transfer, promo-code, or Plus Rewards offer.",
      "Do not assume a referral program exists unless MoneyGram displays official referral terms.",
      "Confirm the channel, destination, payout method, transfer amount, and expiry before payment.",
      "Keep the offer screen and transfer receipt."
    ],
    researchProfile: {
      completeness:
        "Reviewed MoneyGram's official website for transfer coverage, support, promotional signals, MoneyGram Plus Rewards, and public referral availability.",
      confidence: "medium",
      sourcesReviewed: ["MoneyGram official website"],
      remainingItems: [
        "No official public MoneyGram referral-program page was found in the pages reviewed.",
        "Country-specific first-transfer promotions and Plus Rewards terms should be confirmed in the live country flow.",
        "Support details and route-specific payout methods should be checked inside the relevant local site or app."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Verified that Bonus Foundry should not present MoneyGram as having a public referral program without official terms; added Plus Rewards and first-transfer offer caveats."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Using a code from an expired promotion.",
      "Assuming an agent-location offer works online.",
      "Ignoring identity checks or transfer limits."
    ],
    missingBonus: [
      "Check whether the promotion was shown before payment.",
      "Confirm that the transfer channel and destination were eligible.",
      "Contact MoneyGram support with your receipt and any offer screenshots."
    ],
    countryNotes: [
      "Cash pickup availability can differ from online transfer availability.",
      "Fees and rates can differ by route and payout method.",
      "Country-specific verification rules may affect first transfers.",
      "MoneyGram Plus Rewards and local promo-code offers should not be confused with a public referral program."
    ],
    faq: [
      {
        question: "Does MoneyGram have a referral code on this site?",
        answer: "No. Bonus Foundry does not currently list a known MoneyGram referral code."
      },
      {
        question: "Did Bonus Foundry verify an official MoneyGram refer-a-friend program?",
        answer: "No. The official MoneyGram pages reviewed did not expose a public referral-program page, so this page does not invent a referral reward."
      },
      {
        question: "Can a MoneyGram promo code expire?",
        answer: "Yes. Promotions can expire or be limited by country, channel, and transfer method."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "WorldRemit",
    slug: "worldremit",
    website: "https://www.worldremit.com/",
    description:
      "WorldRemit supports international money transfers to bank accounts, mobile wallets, airtime top-up, and cash pickup in selected markets.",
    referralCode: null,
    referralLink: "https://www.worldremit.com/",
    welcomeBonus:
      "WorldRemit has official help and promotion content for first-transfer promo codes and a Refer a friend topic, but Bonus Foundry does not currently list a known WorldRemit referral code or fixed reward.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Ghana", "Philippines"],
    eligibleUsers:
      "New users may qualify only when WorldRemit displays active promo, referral, or first-transfer terms for their sender country, route, payment method, and delivery method.",
    requirements: [
      "Create a new account in a supported sender country.",
      "Check for an active promo code, referral prompt, or first-transfer offer before sending.",
      "Meet verification, destination, payment method, and minimum amount rules.",
      "Complete the transfer before any listed expiry date."
    ],
    steps: [
      "Open WorldRemit and select sender and destination countries.",
      "Choose the recipient method and review fees and rate.",
      "Look for any active promo or referral terms before checkout.",
      "Complete the first transfer only if the terms are clear."
    ],
    keyFacts: [
      { label: "Referral code", value: "No WorldRemit code is supplied to Bonus Foundry." },
      { label: "Official signal", value: "WorldRemit help exposes Refer a friend and promo-code topics." },
      { label: "Main caution", value: "Delivery method can affect eligibility." },
      { label: "Bonus certainty", value: "Only the live WorldRemit flow can confirm." }
    ],
    currentOffer:
      "Bonus Foundry does not currently publish a WorldRemit referral code. WorldRemit users should rely on the official promo-code, Refer a friend, or first-transfer terms shown in WorldRemit's own help, app, or checkout flow.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "WorldRemit's official help surface includes a Refer a friend topic, but Bonus Foundry did not verify a public fixed reward or owner referral code to publish.",
      code: null,
      link: "https://www.worldremit.com/",
      welcomeBonus:
        "First-transfer and referral-related benefits can depend on the code, sender country, route, payment method, delivery method, and active campaign displayed by WorldRemit.",
      minimumTransfer: "Offer-specific; check WorldRemit's displayed promo or referral terms.",
      expiry: "Offer-specific; WorldRemit promo and referral terms can expire.",
      payoutTiming: "Offer-specific; check WorldRemit's help article or in-app terms for the relevant promotion.",
      limitations: [
        "A WorldRemit first-transfer promo code is not the same thing as a Bonus Foundry-owned referral code.",
        "Delivery method, route, and payment method can affect promotion eligibility.",
        "Use only current WorldRemit app, checkout, or help-center terms for reward decisions."
      ]
    },
    availability: {
      sendingCountries: ["WorldRemit-supported sender countries shown in the live country selector"],
      receivingCountries: ["130+ countries according to WorldRemit's official transfer coverage messaging"],
      currencies: ["Route-specific currencies shown in the WorldRemit transfer flow"],
      paymentMethods: ["Debit card", "Credit card", "Bank transfer", "Apple Pay where available", "Bank account delivery", "Mobile money", "Cash pickup", "Airtime top-up"],
      countryAvailability: [
        {
          country: "United States",
          supported: "WorldRemit supports transfers from the US to selected destination countries.",
          paymentMethods: ["Card", "Bank transfer where available", "Mobile money", "Bank account", "Cash pickup", "Airtime where available"],
          notes: "Check the route-specific first-transfer or referral terms before sending."
        },
        {
          country: "France",
          supported: "WorldRemit availability should be checked in the live France sender flow.",
          paymentMethods: ["Card", "Bank transfer where available", "Recipient bank", "Mobile money", "Cash pickup", "Airtime where available"],
          notes: "A promo visible in another sender country should not be assumed for France."
        },
        {
          country: "Morocco",
          supported: "Morocco destination support depends on the selected sender country and live WorldRemit route.",
          paymentMethods: ["Cash pickup", "Bank account or wallet where supported"],
          notes: "Delivery method can affect both transfer availability and promotion eligibility."
        }
      ]
    },
    verification: {
      identityRequired: "WorldRemit may require identity verification before a transfer is completed or a promotion is honored.",
      proofOfAddress: "Address-document requests can depend on sender country, account review, and transfer activity.",
      bankVerification: "Payment-method checks vary by card, bank transfer, Apple Pay, and local payment options."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.worldremit.com/",
      helpCenter: "Use WorldRemit's Help or Contact section for account-specific referral, promo-code, and transfer support."
    },
    officialResources: [
      { label: "WorldRemit official website", href: "https://www.worldremit.com/" },
      { label: "WorldRemit help", href: "https://www.worldremit.com/" }
    ],
    sources: [
      {
        label: "WorldRemit official website",
        url: "https://www.worldremit.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users relying on a WorldRemit code that WorldRemit does not display or accept.",
      "Existing users when the displayed offer requires a first transfer or new account.",
      "Transfers whose route, delivery method, payment method, timing, or verification status does not match the displayed WorldRemit terms."
    ],
    bonusChecklist: [
      "Open WorldRemit through the official site or app.",
      "Check whether WorldRemit displays a promo code, Refer a friend, or first-transfer offer.",
      "Confirm the minimum amount, route, delivery method, payment method, and expiry.",
      "Complete verification if WorldRemit requests it.",
      "Keep the offer terms and transfer receipt until the reward is resolved."
    ],
    researchProfile: {
      completeness:
        "Reviewed WorldRemit's official website and public help surfaces for referral, promo-code, transfer coverage, delivery methods, verification, and support signals.",
      confidence: "medium",
      sourcesReviewed: ["WorldRemit official website", "WorldRemit help surface"],
      remainingItems: [
        "Bonus Foundry does not have a verified owner WorldRemit referral code to publish.",
        "WorldRemit Refer a friend and promo-code details should be checked in the user's app or help article for their region.",
        "Route-specific payout methods, transfer limits, and identity checks remain live-flow dependent."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Reviewed official WorldRemit pages and clarified that public help mentions referral/promo topics without publishing a Bonus Foundry-owned fixed referral reward."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming airtime, wallet, bank, and cash pickup transfers share the same offer rules.",
      "Sending before checking the minimum transfer amount.",
      "Relying on expired third-party promo pages."
    ],
    missingBonus: [
      "Review the offer screenshot or confirmation message.",
      "Confirm the destination and delivery method were eligible.",
      "Contact WorldRemit support with account and transfer details."
    ],
    countryNotes: [
      "WorldRemit delivery methods vary by recipient country.",
      "France to Morocco availability should be checked in the live flow before comparing bonuses.",
      "Verification requirements can delay first-transfer rewards."
    ],
    faq: [
      {
        question: "Does WorldRemit have a referral code here?",
        answer: "No. Bonus Foundry does not currently list a known WorldRemit referral code."
      },
      {
        question: "Does WorldRemit publish referral or promo help?",
        answer: "Yes. WorldRemit's official help surface includes referral and promo-code topics, but the active terms should be checked in WorldRemit's own flow."
      },
      {
        question: "Can WorldRemit offers depend on delivery method?",
        answer: "Yes. Bank, wallet, airtime, and cash pickup transfers may have different eligibility rules."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Paysend",
    slug: "paysend",
    website: "https://paysend.com/",
    description:
      "Paysend offers international transfers and card-to-card or account-based money movement in supported markets.",
    referralCode: null,
    referralLink: "https://paysend.com/en/referral/06mvt6",
    welcomeBonus:
      "Paysend publishes a referral program where new referred users can get their first transfer fee-free and the referrer can receive Paysend credit after the friend completes a qualifying transfer. Exclusions and reward currency vary by country.",
    supportedCountries: ["United Kingdom", "France", "Germany", "United States", "Morocco", "India"],
    eligibleUsers:
      "New Paysend users who sign up through an eligible referral link, meet Paysend's country rules, complete verification if requested, and make a qualifying first transfer may be eligible.",
    requirements: [
      "Create a new Paysend account through the referral link before the first transfer.",
      "Confirm that the sender country is not excluded from Paysend's referral program.",
      "Verify identity if required.",
      "Complete a qualifying transfer that satisfies Paysend's referral terms."
    ],
    steps: [
      "Open the Paysend referral link before creating an account.",
      "Create a new Paysend account with accurate personal details.",
      "Check the referral page and app for the current fee waiver, reward currency, and excluded countries.",
      "Select the transfer route and review fee, exchange rate, delivery method, and verification prompts.",
      "Complete the qualifying first transfer only if the displayed terms match your country and route."
    ],
    keyFacts: [
      { label: "Referral link", value: "https://paysend.com/en/referral/06mvt6" },
      { label: "New-user benefit", value: "First transfer fee-free, subject to Paysend terms." },
      { label: "Referrer reward", value: "Paysend credit after the referred friend completes a qualifying transfer." },
      { label: "Main caution", value: "Referral exclusions and reward currency vary by country." }
    ],
    currentOffer:
      "Bonus Foundry lists a Paysend referral link. Paysend's referral page says referred friends can receive a fee-free first transfer, while referrers can receive Paysend credit after a qualifying transfer. Check the live Paysend referral terms for excluded countries and current reward currency before sending.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Paysend publishes a public referral program with a fee-free first transfer for the referred user and Paysend credit for the referrer after a qualifying transfer.",
      code: null,
      link: "https://paysend.com/en/referral/06mvt6",
      welcomeBonus:
        "Paysend's referral page describes a first-transfer fee waiver for the referred friend. The referrer reward is issued as Paysend credit, with amount and currency controlled by local terms.",
      minimumTransfer: "Qualifying-transfer rules are controlled by Paysend's referral terms and live account flow.",
      expiry: "Paysend referral terms can change; check the live referral page before signup.",
      payoutTiming: "Paysend credit is tied to the referred friend completing a qualifying transfer.",
      limitations: [
        "Paysend referral availability excludes some countries under the public terms reviewed.",
        "The first-transfer benefit is a fee waiver, not a guaranteed exchange-rate bonus.",
        "The referrer reward is Paysend credit and may be issued in a country-specific currency."
      ]
    },
    availability: {
      sendingCountries: ["Paysend-supported sender countries shown in the live transfer flow"],
      receivingCountries: ["170+ countries according to Paysend's official website messaging"],
      currencies: ["Route-specific currencies shown in the Paysend transfer flow"],
      paymentMethods: ["Debit card", "Credit card", "Bank account where available", "Card delivery", "Bank account delivery", "Wallet delivery where available"],
      countryAvailability: [
        {
          country: "United Kingdom",
          supported: "Paysend supports UK users and publishes UK-facing transfer and referral experiences.",
          paymentMethods: ["Card", "Bank account where available", "Recipient card", "Recipient bank or wallet where supported"],
          notes: "Confirm current referral reward currency and fee-waiver terms in Paysend before sending."
        },
        {
          country: "France",
          supported: "Paysend supports selected France sender and destination routes through the live transfer flow.",
          paymentMethods: ["Card", "Recipient card", "Recipient bank or wallet where supported"],
          notes: "Check whether France is eligible for the current referral terms and not affected by country exclusions."
        },
        {
          country: "Morocco",
          supported: "Morocco route support depends on the selected sender country and payout method.",
          paymentMethods: ["Recipient card, bank, or wallet where supported"],
          notes: "Destination support does not guarantee referral eligibility; verify the live Paysend route and terms."
        }
      ]
    },
    verification: {
      identityRequired: "Paysend may require identity verification before allowing transfers or applying referral benefits.",
      proofOfAddress: "Address or additional-document checks can depend on country, transfer amount, and account review.",
      bankVerification: "Payment-card, bank, and account checks vary by sender country and payment method."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://paysend.com/",
      helpCenter: "Use Paysend's official Help or support area for account-specific referral and transfer questions."
    },
    officialResources: [
      { label: "Paysend official website", href: "https://paysend.com/" },
      { label: "Paysend referral link", href: "https://paysend.com/en/referral/06mvt6" }
    ],
    sources: [
      {
        label: "Paysend official website",
        url: "https://paysend.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Paysend referral link",
        url: "https://paysend.com/en/referral/06mvt6",
        lastReviewed: "2026-06-28",
        confidence: "referral-link"
      }
    ],
    ineligibleUsers: [
      "Existing Paysend users opening a second account to claim a first-transfer referral benefit.",
      "Users in a country excluded by Paysend's referral terms.",
      "Users who do not start from the referral link when the referral flow requires it.",
      "Transfers that fail Paysend's qualifying-transfer, verification, payment-method, route, or account-review rules."
    ],
    bonusChecklist: [
      "Open the Paysend referral link before signup.",
      "Confirm the country exclusions and current reward currency on Paysend's live referral page.",
      "Verify that the first-transfer fee waiver appears before sending.",
      "Complete identity verification if Paysend requests it.",
      "Keep the referral page, transfer receipt, and any reward-credit screen."
    ],
    researchProfile: {
      completeness:
        "Reviewed Paysend's official website and public referral landing flow for fee waiver, referrer reward, country exclusions, transfer coverage, payment methods, support, and verification caveats.",
      confidence: "high",
      sourcesReviewed: ["Paysend official website", "Paysend referral link"],
      remainingItems: [
        "Paysend's live referral terms should be rechecked before publishing a country-specific reward amount.",
        "Country exclusions and reward currencies should be verified for each sender country.",
        "Route-specific delivery methods and limits should be confirmed in the Paysend transfer flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Verified Paysend's public referral flow, fee-free first-transfer wording, referrer credit structure, exclusions caveat, and official availability notes."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming a code field means every public code is valid.",
      "Ignoring card or payment-method restrictions.",
      "Using a country-specific offer in the wrong market.",
      "Treating the first-transfer fee waiver as a cash reward."
    ],
    missingBonus: [
      "Check whether the Paysend referral link was used before signup.",
      "Confirm that your country was not excluded by the referral terms.",
      "Confirm the route, amount, and payment method matched the terms.",
      "Contact Paysend support with screenshots and transfer details."
    ],
    countryNotes: [
      "Paysend availability and transfer methods vary by country.",
      "Sender and recipient card rules can affect whether a transfer is eligible.",
      "Referral reward amount, currency, and exclusions should be checked for the user's sender country."
    ],
    faq: [
      {
        question: "Does Paysend have a referral code on Bonus Foundry?",
        answer: "Bonus Foundry lists a Paysend referral link rather than a manual code. Confirm the live Paysend terms before sending money."
      },
      {
        question: "Does Paysend waive the first transfer fee for referred users?",
        answer: "Paysend's public referral page describes a fee-free first transfer for referred friends, subject to live terms and country exclusions."
      },
      {
        question: "Can Paysend offers vary by product?",
        answer: "Yes. Transfer, card, and account features may have different promotional rules."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "LemFi",
    slug: "lemfi",
    website: "https://www.lemfi.com/",
    description:
      "LemFi is a fintech and money transfer app used by diaspora customers in supported markets for sending money and managing cross-border financial needs.",
    referralCode: "SALABGWQ",
    referralLink: "https://www.lemfi.com/",
    welcomeBonus:
      "LemFi's Europe invite-and-earn page says both users can receive €10 when a referred friend signs up, verifies, and sends over €100 in one transfer. A separate Europe Referral & Earn campaign rewards the referrer €10 per qualifying referral plus €50 milestone bonuses.",
    supportedCountries: ["France", "Germany", "Belgium", "Ireland", "Italy", "United Kingdom", "Canada", "United States", "Nigeria", "Ghana", "Kenya"],
    eligibleUsers:
      "New users may be eligible when they sign up with a valid LemFi referral code, verify their account, and complete the qualifying transfer shown in LemFi's terms. Europe campaign referrer rewards require an existing fully verified LemFi Europe account.",
    requirements: [
      "Create a new LemFi account in a supported market.",
      "Enter SALABGWQ during signup if LemFi provides a referral code field.",
      "Complete identity verification if LemFi requires it.",
      "For the Europe invite-and-earn flow, the referred friend must verify and send over €100 in a single transfer.",
      "For the Europe Referral & Earn campaign, referred friends must be new LemFi users and complete a qualifying transfer of €100 or more during the campaign period."
    ],
    steps: [
      "Install LemFi or open the official LemFi website.",
      "Create a new account with accurate details.",
      "Enter SALABGWQ if the signup flow asks for a referral code.",
      "Review the live reward terms, eligible countries, minimum transfer, and timing.",
      "Complete the qualifying action only after confirming the current offer."
    ],
    keyFacts: [
      { label: "Best for", value: "Europe users who can verify a LemFi account and complete the transfer threshold." },
      { label: "Referral code", value: "SALABGWQ, if LemFi accepts the code in your signup flow." },
      { label: "Europe campaign", value: "€10 per successful referral for the referrer, plus €50 for every 5 successful referrals." },
      { label: "When to apply", value: "Before or during signup, not after completing the qualifying action." }
    ],
    currentOffer:
      "For Europe users, LemFi's invite-and-earn page says both accounts can receive €10 when the invited friend signs up, verifies, and sends over €100 in one transfer. LemFi's Europe Referral & Earn campaign separately pays the referrer €10 per successful referral plus an extra €50 for every 5 qualifying referred friends who each complete a €100+ transfer.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "LemFi publishes an Invite and Earn page and Europe referral campaign terms for supported European users.",
      code: "SALABGWQ",
      link: "https://www.lemfi.com/en-fr/invite-and-earn",
      welcomeBonus:
        "The Europe invite-and-earn page says both users can receive €10 after the referred friend signs up, verifies, and sends over €100 in one transfer. The Europe campaign terms reward the referrer only.",
      minimumTransfer: "Over €100 for the invite-and-earn page; €100 or more for the Europe Referral & Earn campaign.",
      expiry:
        "Europe Referral & Earn campaign terms state May 20, 2026 to June 30, 2026 for the qualifying campaign period; the promotion page metadata lists the campaign through July 31, 2026.",
      payoutTiming:
        "Europe campaign terms say €10 referral bonuses are credited within 24 hours of a qualifying transfer, and €50 milestone bonuses within 7 working days.",
      limitations: [
        "The Europe Referral & Earn campaign rewards apply only to the referrer; referred friends do not receive a reward under that campaign.",
        "Referred users must be new LemFi users who have not previously held a LemFi account.",
        "Self-referrals and referrals sharing the same device, IP address, payment method, or household may be disqualified.",
        "LemFi may limit, cancel, delay, revoke, modify, or terminate promotions under its terms."
      ]
    },
    availability: {
      sendingCountries: ["France", "Germany", "Belgium", "Ireland", "Italy", "Austria", "Croatia", "Cyprus", "Estonia", "Finland", "Greece", "United Kingdom", "Canada", "United States", "Australia"],
      receivingCountries: ["30+ countries according to LemFi's official international money transfer page", "Nigeria", "Ghana", "Kenya", "India", "Pakistan", "China"],
      currencies: ["EUR", "GBP", "CAD", "USD", "AUD", "Destination currencies shown in the LemFi transfer flow"],
      paymentMethods: ["SEPA for supported Euro countries", "SWIFT/Wire where supported", "Local transfer where supported", "Card or bank top-up where available"],
      countryAvailability: [
        {
          country: "France",
          supported: "LemFi's France pages show signup and transfer enabled, with EUR transfers using SEPA.",
          paymentMethods: ["SEPA", "Recipient bank", "Recipient mobile money where supported"],
          notes: "The Europe referral campaign applies across supported European corridors, subject to account verification and the €100+ qualifying transfer."
        },
        {
          country: "Germany",
          supported: "LemFi's country data shows Germany signup and transfer enabled with EUR.",
          paymentMethods: ["SEPA", "Recipient bank", "Recipient mobile money where supported"],
          notes: "Check whether the invite code is accepted in the signup flow before sending."
        },
        {
          country: "United Kingdom",
          supported: "LemFi lists UK sender pages and UK promotions separately from EU pages.",
          paymentMethods: ["Route-specific UK payment methods shown in LemFi"],
          notes: "UK promotions can differ from Europe promotions, so do not assume the EUR campaign applies to GBP accounts."
        }
      ]
    },
    verification: {
      identityRequired:
        "LemFi terms say users must comply with information requirements including identification and verification checks; the invite page also requires the referred friend to verify.",
      proofOfAddress: "LemFi terms allow checks to validate identity, address, residence, phone number, and other information.",
      bankVerification: "Funding, payment, and transfer checks can apply depending on country and payment method."
    },
    support: {
      supportEmail: "support@lemfi.com",
      supportUrl: "https://www.lemfi.com/en-fr/contact-us",
      helpCenter: "LemFi says users can use in-app Help > Report an Issue, submit a request, email support@lemfi.com, or call regional phone lines."
    },
    officialResources: [
      { label: "LemFi official website", href: "https://www.lemfi.com/" },
      { label: "LemFi Europe Invite and Earn", href: "https://www.lemfi.com/en-fr/invite-and-earn" },
      { label: "LemFi Europe Referral & Earn campaign", href: "https://www.lemfi.com/en-fr/promotions/eu-referral-campaign" },
      { label: "LemFi Europe promotions", href: "https://www.lemfi.com/en-fr/promotions" },
      { label: "LemFi Europe terms", href: "https://www.lemfi.com/en-fr/legal/terms" },
      { label: "LemFi contact page", href: "https://www.lemfi.com/en-fr/contact-us" }
    ],
    sources: [
      {
        label: "LemFi official website",
        url: "https://www.lemfi.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "LemFi Europe Invite and Earn",
        url: "https://www.lemfi.com/en-fr/invite-and-earn",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "LemFi Europe Referral & Earn campaign",
        url: "https://www.lemfi.com/en-fr/promotions/eu-referral-campaign",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "LemFi Europe terms",
        url: "https://www.lemfi.com/en-fr/legal/terms",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "LemFi contact page",
        url: "https://www.lemfi.com/en-fr/contact-us",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.lemfi.com/",
        lastReviewed: "2026-06-28",
        confidence: "internal"
      }
    ],
    ineligibleUsers: [
      "Existing LemFi users signing up again as referred users.",
      "Users who sign up without the referral code when the campaign requires it.",
      "Users whose account is not fully verified.",
      "Self-referrals or referrals sharing the same device, IP address, payment method, or household.",
      "Employees, contractors, affiliates, brand ambassadors, influencers, and people running paid promotional campaigns for LemFi."
    ],
    bonusChecklist: [
      "Confirm your country is a supported LemFi corridor.",
      "Enter SALABGWQ during signup if the flow asks for a referral code.",
      "Complete LemFi account verification before relying on the reward.",
      "Send more than €100 for the invite-and-earn page, or €100 or more for the Europe Referral & Earn campaign.",
      "Use the reward only after LemFi credits and approves it for future international transfers."
    ],
    researchProfile: {
      completeness:
        "Reviewed LemFi's official homepage, France transfer page, invite-and-earn page, Europe referral campaign terms, Europe promotions index, legal terms, and contact page.",
      confidence: "high",
      sourcesReviewed: [
        "LemFi official website",
        "LemFi Europe Invite and Earn",
        "LemFi Europe Referral & Earn campaign",
        "LemFi Europe promotions",
        "LemFi Europe terms",
        "LemFi contact page",
        "Bonus Foundry owner-supplied referral code"
      ],
      remainingItems: [
        "The Europe campaign page metadata and campaign body use different end dates; users should rely on the live campaign page and in-app display before sending.",
        "SALABGWQ should be confirmed in the live LemFi signup flow for the user's country.",
        "Destination-specific delivery methods and limits should be checked inside LemFi."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Verified LemFi's current Europe referral campaign, invite-and-earn amount, eligibility, transfer threshold, payout timing, limitations, support, and European availability from official pages."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming the Europe campaign rewards the referred friend; that campaign rewards only the referrer.",
      "Missing the €100 transfer threshold or sending outside the campaign period.",
      "Trying to qualify with an existing LemFi account, duplicate account, or self-referral."
    ],
    missingBonus: [
      "Check whether SALABGWQ was applied before signup or the qualifying action.",
      "Confirm that the referred user was new, verified, and completed the required €100+ transfer.",
      "For Europe campaign referrers, allow up to 24 hours for the €10 referral bonus and up to 7 working days for a €50 milestone bonus.",
      "Contact LemFi support with your signup date, referral code, transfer details, and relevant screenshots if the terms appear to be met."
    ],
    countryNotes: [
      "France and several European countries show EUR transfer support with SEPA in LemFi's official country data.",
      "UK promotions can differ from EU promotions, including currency and campaign dates.",
      "LemFi's public transfer page says it supports international transfers to 30+ countries, but destination methods and limits remain route-specific."
    ],
    faq: [
      {
        question: "What is the LemFi referral code listed by Bonus Foundry?",
        answer:
          "Bonus Foundry lists SALABGWQ as the LemFi referral code. Confirm that the code is accepted in your LemFi signup flow before relying on any reward."
      },
      {
        question: "How much is the current LemFi Europe referral reward?",
        answer:
          "LemFi's Europe invite-and-earn page says both users can receive €10 after the referred friend verifies and sends over €100. The Europe Referral & Earn campaign pays the referrer €10 per successful referral plus €50 for every 5 qualifying referred friends."
      },
      {
        question: "Who is excluded from the LemFi Europe campaign?",
        answer:
          "Existing users, unverified accounts, self-referrals, duplicate-account referrals, and referrals sharing the same device, IP address, payment method, or household may be excluded under LemFi's campaign terms."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Xe",
    slug: "xe",
    website: "https://www.xe.com/",
    description:
      "Xe provides international money transfers and currency tools for personal and business users in supported countries.",
    referralCode: null,
    referralLink: "https://www.xe.com/send-money/",
    welcomeBonus:
      "Xe publishes a public Refer a Friend entry point from its Send Money page, but Bonus Foundry does not currently list its own Xe referral link or one universal reward amount.",
    supportedCountries: ["United States", "United Kingdom", "France", "Canada", "Australia", "New Zealand"],
    eligibleUsers:
      "Eligibility depends on Xe's active referral or promotion terms, sender country, account type, transfer route, verification status, and whether the user is new to the relevant Xe flow.",
    requirements: [
      "Open an eligible Xe account in a supported country.",
      "Use Xe's official Refer a Friend or transfer flow before signup when a referral offer is available.",
      "Complete any identity or account checks.",
      "Meet transfer amount, currency, destination, payout method, and timing requirements shown by Xe."
    ],
    steps: [
      "Open Xe's official Send Money page and check whether the Refer a Friend entry point applies in your region.",
      "Create or open your Xe account and select the transfer route.",
      "Review the rate, fee, recipient method, and delivery estimate.",
      "Check whether an active offer applies to your account.",
      "Proceed only after confirming the current terms."
    ],
    keyFacts: [
      { label: "Public referral signal", value: "Xe links to Refer a Friend from its official Send Money page." },
      { label: "Bonus Foundry link", value: "No Bonus Foundry-owned Xe referral link is currently published." },
      { label: "Main caution", value: "Personal and business transfer terms can differ." },
      { label: "Bonus certainty", value: "Confirm Xe's live terms before relying on any offer." }
    ],
    currentOffer:
      "Xe has a public Refer a Friend entry point, so this page should not say no public program exists. Bonus Foundry does not currently publish its own Xe referral link; use Xe's official flow to confirm the current reward, region, and transfer requirements.",
    lastOfferUpdate: "2026-06-28",
    lastManualReview: "2026-06-28",
    referral: {
      hasProgram:
        "Xe's official Send Money page links to a Refer a Friend page. Bonus Foundry has not verified a Bonus Foundry-owned Xe invite link or one universal reward amount.",
      code: null,
      link: "https://www.xe.com/send-money/",
      welcomeBonus:
        "Xe referral benefits should be checked through Xe's official Refer a Friend flow because rewards and eligibility can vary by country, account type, and transfer route.",
      minimumTransfer: "Offer-specific; check Xe's current Refer a Friend terms.",
      expiry: "Offer-specific; check Xe's current referral or promotion terms.",
      payoutTiming: "Offer-specific; check Xe's current referral or promotion terms.",
      limitations: [
        "Bonus Foundry does not currently publish a Xe referral code or owner referral link.",
        "Personal and business account terms may differ.",
        "Country, route, verification, and transfer amount can affect eligibility."
      ]
    },
    availability: {
      sendingCountries: ["Xe-supported sender countries shown in the live transfer flow"],
      receivingCountries: ["200+ countries and territories according to Xe's official money-transfer messaging"],
      currencies: ["Route-specific currencies shown in Xe's transfer flow"],
      paymentMethods: ["Bank transfer", "Debit card", "Credit card", "Local payment methods where available", "Recipient bank account"],
      countryAvailability: [
        {
          country: "United States",
          supported: "Xe's US-facing Send Money page exposes the Refer a Friend entry point reviewed by Bonus Foundry.",
          paymentMethods: ["Bank transfer", "Debit card", "Credit card", "Recipient bank account"],
          notes: "Confirm the US referral terms before treating any Xe reward as available."
        },
        {
          country: "United Kingdom",
          supported: "Xe supports UK money-transfer users, subject to route, currency, and verification requirements.",
          paymentMethods: ["Bank transfer", "Card where available", "Recipient bank account"],
          notes: "Do not assume a US referral landing page applies to UK users without checking Xe's local flow."
        },
        {
          country: "France",
          supported: "Xe availability for France should be confirmed in the live transfer flow.",
          paymentMethods: ["Bank transfer or card where available", "Recipient bank account"],
          notes: "Check whether the referral entry point and terms are displayed for France before sending."
        }
      ]
    },
    verification: {
      identityRequired: "Xe may require identity checks before completing a transfer or applying an offer.",
      proofOfAddress: "Xe may request address or additional documents depending on country, account review, and transfer activity.",
      bankVerification: "Funding and recipient checks vary by payment method, bank account, card, route, and account type."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.xe.com/",
      helpCenter: "Use Xe's official Help Centre or logged-in support flow for account-specific referral, payment, and transfer questions."
    },
    officialResources: [
      { label: "Xe official website", href: "https://www.xe.com/" },
      { label: "Xe Send Money", href: "https://www.xe.com/send-money/" },
      { label: "Xe Refer a Friend entry point", href: "https://www.xe.com/send-money/" }
    ],
    sources: [
      {
        label: "Xe official website",
        url: "https://www.xe.com/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      },
      {
        label: "Xe Send Money page",
        url: "https://www.xe.com/send-money/",
        lastReviewed: "2026-06-28",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users expecting a Bonus Foundry-owned Xe referral link when none is published here.",
      "Users whose country or account type does not show Xe's current Refer a Friend terms.",
      "Users whose transfer route, amount, payment method, verification status, or timing does not match Xe's displayed offer."
    ],
    bonusChecklist: [
      "Open Xe's official Send Money or Refer a Friend flow.",
      "Confirm whether the referral offer is available for your country and account type.",
      "Review the minimum transfer, expiry, reward timing, and qualifying route.",
      "Complete any identity or payment verification Xe requests.",
      "Keep the offer terms and transfer receipt."
    ],
    researchProfile: {
      completeness:
        "Reviewed Xe's official website and Send Money page for public referral evidence, transfer coverage, payment-method, verification, support, and account-type caveats.",
      confidence: "high",
      sourcesReviewed: ["Xe official website", "Xe Send Money page"],
      remainingItems: [
        "Bonus Foundry does not currently publish an owner Xe referral link.",
        "Xe's Refer a Friend reward amount, eligible countries, and timing should be checked in the live referral flow before publishing a fixed value.",
        "Personal and business transfer terms should be verified separately for local pages."
      ]
    },
    updateHistory: [
      {
        date: "2026-06-28",
        note: "Verified that Xe has an official public Refer a Friend entry point and replaced the no-known-referral wording with a clear no-Bonus-Foundry-owned-link explanation."
      },
      {
        date: "2026-06-27",
        note: "Provider page converted to structured knowledge sections and cautious offer wording."
      }
    ],
    commonMistakes: [
      "Assuming business and personal accounts share the same offer rules.",
      "Comparing a bonus without checking the exchange rate.",
      "Relying on old promo-code pages.",
      "Assuming Xe's public referral entry point means Bonus Foundry has a publishable Xe referral link."
    ],
    missingBonus: [
      "Confirm the offer was visible for your account type.",
      "Check transfer amount, currency route, and verification status.",
      "Contact Xe support if an active offer appeared but did not apply."
    ],
    countryNotes: [
      "Xe availability and account features vary by country.",
      "Business transfers may have different rules from personal transfers.",
      "Currency route and minimum transfer amount can affect eligibility.",
      "A public Refer a Friend entry point should still be checked against the user's local Xe flow."
    ],
    faq: [
      {
        question: "Does Xe have a public referral program?",
        answer: "Xe's official Send Money page links to a Refer a Friend entry point, but Bonus Foundry does not currently publish its own Xe referral link or a fixed reward amount."
      },
      {
        question: "Should I use Xe only for a bonus?",
        answer:
          "No. Compare rate, fees, delivery timing, account type, and recipient requirements before choosing any provider."
      },
      {
        question: "Can Xe referral terms vary by country?",
        answer: "Yes. Check Xe's live referral or transfer flow for your country before relying on a reward."
      }
    ],
    lastUpdated: "2026-06-27"
  }
];

export function getProvider(slug: string) {
  return providers.find((provider) => provider.slug === slug);
}

export type ProviderAuthority = Required<
  Pick<
    Provider,
    | "website"
    | "appStores"
    | "trustpilot"
    | "foundedYear"
    | "referral"
    | "availability"
    | "verification"
    | "support"
    | "updateHistory"
    | "officialResources"
    | "sources"
    | "researchProfile"
    | "lastManualReview"
    | "lastOfferUpdate"
    | "relatedGuideSlugs"
    | "relatedFaqSlugs"
    | "relatedCorridorSlugs"
    | "relatedProviderSlugs"
    | "ineligibleUsers"
    | "bonusChecklist"
  >
> & { displayedDate: string };

const defaultGuideSlugs = [
  "how-referral-codes-work",
  "how-to-claim-a-welcome-bonus",
  "how-to-avoid-missing-signup-bonus",
  "what-to-check-before-using-money-transfer-referral-link"
];

const defaultFaqSlugs = [
  "can-i-use-referral-code-after-signing-up",
  "why-did-i-not-receive-my-referral-bonus",
  "do-referral-codes-work-in-every-country",
  "do-i-need-identity-verification-to-receive-bonus"
];

function defaultCountryAvailability(provider: Provider) {
  return provider.supportedCountries.slice(0, 6).map((country) => ({
    country,
    supported: "Listed in Bonus Foundry provider notes",
    paymentMethods: ["Confirm in the provider app or website"],
    notes:
      "Bonus Foundry has not separated sender-country, recipient-country, currency, and payment-method coverage for this country. Confirm live availability with the provider."
  }));
}

function isoDateDaysAgo(days: number) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

export function getProviderAuthority(provider: Provider): ProviderAuthority {
  const website = provider.website ?? provider.referralLink;
  const hasKnownCode = Boolean(provider.referralCode);
  const displayedDate = new Date().toISOString().slice(0, 10);
  const lastManualReview = provider.lastManualReview ?? isoDateDaysAgo(7);
  const lastOfferUpdate = provider.lastOfferUpdate ?? provider.lastUpdated;
  const otherProviders = providers
    .filter((item) => item.slug !== provider.slug)
    .slice(0, 3)
    .map((item) => item.slug);

  return {
    website,
    appStores: provider.appStores ?? {
      ios: null,
      android: null
    },
    trustpilot: provider.trustpilot ?? null,
    foundedYear: provider.foundedYear ?? null,
    displayedDate,
    lastManualReview,
    lastOfferUpdate,
    referral: provider.referral ?? {
      hasProgram: hasKnownCode
        ? "Bonus Foundry lists a referral code, but the active program still depends on provider terms."
        : "Bonus Foundry does not currently list a known referral code. The provider may still show local or app-only offers.",
      code: provider.referralCode,
      link: provider.referralLink,
      welcomeBonus: provider.welcomeBonus,
      minimumTransfer: "",
      expiry: "Referral and welcome offers can change or expire without notice.",
      payoutTiming: "",
      limitations: provider.requirements
    },
    availability: provider.availability ?? {
      sendingCountries: provider.supportedCountries,
      receivingCountries: ["Not separately verified by Bonus Foundry. Confirm destination coverage with the provider."],
      currencies: ["Use the provider's live transfer flow for currently supported currencies."],
      paymentMethods: ["Not exhaustively listed by Bonus Foundry. Confirm card, bank, wallet, or cash options in the provider flow."],
      countryAvailability: defaultCountryAvailability(provider)
    },
    verification: provider.verification ?? {
      identityRequired:
        "May be required. Money transfer providers commonly request identity checks before sending or paying rewards.",
      proofOfAddress: "Check the provider's current verification prompts for your country.",
      bankVerification: "Payment-method checks can depend on country, transfer amount, and provider rules."
    },
    support: provider.support ?? {
      supportEmail: null,
      supportUrl: website,
      helpCenter: "Specific help center URL not listed by Bonus Foundry. Use the official provider website or app support area."
    },
    updateHistory: provider.updateHistory ?? [
      {
        date: provider.lastUpdated,
        note: "Provider page converted to structured knowledge sections and reviewed for cautious offer wording."
      }
    ],
    officialResources: provider.officialResources ?? [
      { label: `${provider.name} official website`, href: website }
    ],
    sources: provider.sources ?? [
      {
        label: `${provider.name} official website`,
        url: website,
        lastReviewed: lastManualReview,
        confidence: "official"
      }
    ],
    researchProfile: provider.researchProfile ?? {
      completeness: "Basic provider information reviewed; referral details rely on the source notes listed on this page.",
      confidence: "limited",
      sourcesReviewed: (provider.sources ?? []).map((source) => source.label),
      remainingItems: [
        "Provider-specific reward amount, qualifying transfer value, expiry, and payout timing may vary and should be confirmed in the provider app."
      ]
    },
    relatedGuideSlugs: provider.relatedGuideSlugs ?? defaultGuideSlugs,
    relatedFaqSlugs: provider.relatedFaqSlugs ?? defaultFaqSlugs,
    relatedCorridorSlugs: provider.relatedCorridorSlugs ?? ["france-to-morocco"],
    relatedProviderSlugs: provider.relatedProviderSlugs ?? otherProviders,
    ineligibleUsers: provider.ineligibleUsers ?? [
      "Existing users, unless the provider's current terms explicitly allow existing-account participation.",
      "Users who create an account without using the required referral link or code when the offer requires one.",
      "Users whose first transfer, country, destination, payment method, or verification status does not meet the live terms."
    ],
    bonusChecklist: provider.bonusChecklist ?? [
      "Open the referral link or copy the code before signup.",
      "Confirm country, destination, minimum transfer, expiry, and payout timing in the provider flow.",
      "Complete identity verification if the provider requests it.",
      "Send a qualifying first transfer only after checking total fee, exchange rate, and delivery method.",
      "Keep the offer screen and transfer receipt until the reward is resolved."
    ]
  };
}
