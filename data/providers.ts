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
  referralLink: string | null;
  welcomeBonus: string;
  referral?: {
    hasProgram: string;
    code: string | null;
    link: string | null;
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
      "Taptap Send says referral codes can give both users bonus credit after the referred friend enters the code on their first transfer and sends with Taptap Send for the first time. The public help article does not publish one fixed reward amount for every country.",
    supportedCountries: ["France", "United Kingdom", "United States", "Canada", "Morocco", "Senegal", "Mali"],
    eligibleUsers:
      "New Taptap Send users who enter an eligible referral code when making their first transfer may qualify, subject to country, transfer, verification, and promotion rules shown by Taptap Send.",
    requirements: [
      "Create a new account before using Taptap Send for the first time.",
      "Enter the referral code when making the first transfer, because Taptap Send says this is required for both accounts to receive referral credit.",
      "Complete identity verification with a valid government-issued ID and selfie when Taptap Send requests it.",
      "Pass any payment verification, including 3D Secure card authentication when the sender's bank requires it.",
      "Send a qualifying first transfer to an eligible destination and meet any transfer amount or campaign rules shown in the app."
    ],
    steps: [
      "Copy the referral code before starting the first transfer.",
      "Install Taptap Send and sign up with accurate personal details.",
      "Check the bonus terms shown in the app, including country, destination, minimum amount, and the 90-day redemption window for referred friends.",
      "Add your recipient and review the exchange rate, fee, payment method, and delivery option.",
      "Enter the referral code during the first-transfer flow and send only if the terms match what you expected."
    ],
    keyFacts: [
      { label: "Best for", value: "Users sending to eligible Taptap Send destination countries." },
      { label: "Referral code", value: "SALAHEDD1933, if the first-transfer flow accepts the code." },
      { label: "Reward type", value: "Bonus credit applied to a future transfer, according to Taptap Send's help article." },
      { label: "When to apply", value: "When making the first transfer; referred friends have 90 days to redeem a code." }
    ],
    currentOffer:
      "If you do not already have a Taptap Send referral code, you can use SALAHEDD1933. Taptap Send's help centre verifies that referral codes can credit both accounts after the referred friend enters the code on their first transfer, but the exact reward amount and eligible countries are controlled by the live app terms.",
    lastOfferUpdate: "2026-07-04",
    lastManualReview: "2026-07-04",
    referral: {
      hasProgram:
        "Taptap Send's official help centre explains that users can refer friends by sharing a personal code, and both users can receive bonus credit when the referred friend uses the code and sends with Taptap Send for the first time.",
      code: "SALAHEDD1933",
      link: "https://www.taptapsend.com/",
      welcomeBonus:
        "Taptap Send describes the referral reward as bonus credit. The public official pages reviewed do not publish one fixed reward amount for every country, so the app controls the live reward value.",
      minimumTransfer: "",
      expiry: "Taptap Send says the referred friend has 90 days to redeem the referral code.",
      payoutTiming: "Taptap Send says both accounts receive credit directly in the account after the referred friend uses the code and sends their first transfer; the credit is automatically added to the next transfer.",
      limitations: [
        "The referred friend must be new to Taptap Send; the help article says the offer will not work if the friend already uses Taptap Send.",
        "The referred friend needs to enter the code when making their first transfer.",
        "Taptap Send says users can refer as many friends as they want, with no referral-count limit stated in the help article.",
        "Marketing promo codes are separate from referral codes and work only when they match the criteria defined by Taptap Send's marketing team."
      ]
    },
    availability: {
      sendingCountries: ["Australia", "Brazil", "Canada", "Eurozone countries", "Non-Eurozone European countries listed by Taptap Send", "New Zealand", "United Arab Emirates", "United Kingdom", "United States"],
      receivingCountries: ["Supported destinations shown by Taptap Send, including countries in Africa, Asia, Latin America, and other listed markets."],
      currencies: ["Currencies vary by sender country and destination; confirm the live corridor in the app."],
      paymentMethods: ["Sender debit card", "Recipient mobile money wallet", "Recipient bank account", "Cash pickup where available"],
      countryAvailability: [
        {
          country: "France",
          supported: "Taptap Send lists France on its country availability page and provides France-specific 3D Secure guidance for card payment verification.",
          paymentMethods: ["Sender debit card", "Recipient mobile money wallet", "Recipient bank", "Cash pickup where available"],
          notes: "Taptap Send referral eligibility and delivery methods still depend on the selected destination and live app flow."
        },
        {
          country: "Morocco",
          supported: "Taptap Send lists Morocco among supported countries on its public website.",
          paymentMethods: ["Recipient mobile money wallet, bank account, or cash pickup where the live route supports it"],
          notes: "Destination availability does not prove referral eligibility; confirm the live Morocco route and referral terms in the app."
        }
      ]
    },
    verification: {
      identityRequired:
        "Taptap Send says every user must verify identity by uploading a valid government-issued ID and a selfie through the app.",
      proofOfAddress: "Taptap Send may request proof of address when account limits need to be lifted or documents do not match account details.",
      bankVerification: "Taptap Send card transfers may require 3D Secure authentication through the sender's bank app, SMS code, temporary PIN, password, or card reader."
    },
    support: {
      supportEmail: "support@taptapsend.com",
      supportUrl: "https://support.taptapsend.com/hc/en-gb/articles/360035876954-Contact-Taptap-Send-Support",
      helpCenter: "Taptap Send says existing customers should contact support from the app; non-customers can email support@taptapsend.com."
    },
    officialResources: [
      { label: "Taptap Send official website", href: "https://www.taptapsend.com/" },
      { label: "Taptap Send promo codes and referrals", href: "https://support.taptapsend.com/hc/en-gb/articles/360001301127-How-do-promo-codes-work" },
      { label: "Taptap Send account verification", href: "https://support.taptapsend.com/hc/en-gb/articles/1500000672181-How-to-verify-your-Taptap-Send-account" },
      { label: "Taptap Send 3D Secure help", href: "https://support.taptapsend.com/hc/en-gb/articles/4408602423315-Payment-verification-issue-3DS-Why-did-my-transfer-not-go-through" },
      { label: "Taptap Send support", href: "https://support.taptapsend.com/hc/en-gb/articles/360035876954-Contact-Taptap-Send-Support" }
    ],
    sources: [
      {
        label: "Taptap Send official website",
        url: "https://www.taptapsend.com/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Taptap Send promo codes and referrals",
        url: "https://support.taptapsend.com/hc/en-gb/articles/360001301127-How-do-promo-codes-work",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Taptap Send account verification",
        url: "https://support.taptapsend.com/hc/en-gb/articles/1500000672181-How-to-verify-your-Taptap-Send-account",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Taptap Send support",
        url: "https://support.taptapsend.com/hc/en-gb/articles/360035876954-Contact-Taptap-Send-Support",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.taptapsend.com/",
        lastReviewed: "2026-07-04",
        confidence: "internal"
      }
    ],
    researchProfile: {
      completeness:
        "Reviewed Taptap Send's official website, country list, referral/promo-code help article, verification article, payment-authentication article, transfer troubleshooting articles, legal index, licences page, and support article.",
      confidence: "high",
      sourcesReviewed: [
        "Taptap Send official website",
        "Taptap Send promo codes and referrals",
        "Taptap Send account verification",
        "Taptap Send 3D Secure help",
        "Taptap Send support",
        "Bonus Foundry owner-supplied referral code"
      ],
      remainingItems: [
        "Public official pages reviewed did not publish one universal referral reward amount.",
        "Public official pages reviewed did not publish a universal minimum transfer for referral-code eligibility.",
        "Country-specific referral eligibility and reward amount should still be confirmed in the Taptap Send app."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-04",
        note: "Verified Taptap Send referral-code mechanics, 90-day redemption window, bonus-credit payout, identity verification, 3D Secure payment checks, transfer troubleshooting, support channels, and country/payment-method caveats from official help pages."
      },
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
      "Forgetting to enter the referral code when making the first transfer.",
      "Assuming a code works for every destination country.",
      "Ignoring identity or 3D Secure payment verification prompts before expecting the transfer or reward to complete.",
      "Confusing a marketing promo code with a personal referral code."
    ],
    missingBonus: [
      "Check whether the code or referral link was applied before signup.",
      "Confirm that the code was entered during the first-transfer flow and that the referred account had not used Taptap Send before.",
      "Check whether the first transfer is still delayed, failed, awaiting documents, or blocked by 3D Secure payment verification.",
      "Contact Taptap Send support with your signup date, transfer date, and referral details if the terms appear to be met."
    ],
    countryNotes: [
      "France users may need to complete bank 3D Secure authentication before a card-funded transfer can go through.",
      "Taptap Send sending limits differ by sender country, with separate public limits for Eurozone, UK, US, Canada, Brazil, UAE, Australia, New Zealand, and non-Eurozone European markets.",
      "Recipient wallet thresholds and provider limits can block a transfer even when the sender is otherwise eligible."
    ],
    faq: [
      {
        question: "Is this Taptap Send referral code official?",
        answer:
          "No. Bonus Foundry is independent and is not an official Taptap Send website. Taptap Send officially supports personal referral codes, but SALAHEDD1933 is Bonus Foundry's own code."
      },
      {
        question: "When does a Taptap Send referral code need to be entered?",
        answer:
          "Taptap Send's help article says the referred friend needs to enter the code when making their first transfer."
      },
      {
        question: "How long does a referred friend have to redeem a Taptap Send code?",
        answer:
          "Taptap Send says the referred friend has 90 days to redeem the referral code."
      }
    ],
    lastUpdated: "2026-07-04"
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
      "Wise referral offers are not uniform across all countries. The public invite page reviewed required the live Wise invite/account flow, so the reward can depend on the inviting account, the new user's country, the product used, and the qualifying transfer or account action.",
    lastOfferUpdate: "2026-07-04",
    lastManualReview: "2026-07-04",
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
        "Wise's public invite page did not publish one fixed reward amount, expiry, payout timing, or minimum transfer for every user.",
        "Wise payment options can include debit or credit card, online banking, Wise balance, bank transfer, PISP, and SWIFT depending on the route.",
        "Wise says transfer availability, currencies, payment types, and delivery times can vary by sender country, destination, verification status, and payment method."
      ]
    },
    availability: {
      sendingCountries: ["Wise-supported sender countries shown in the transfer flow and Wise availability checker"],
      receivingCountries: ["Route-specific destinations shown by Wise; destination availability depends on where the sender lives."],
      currencies: ["Route-specific currencies shown by Wise; the Germany availability checker showed transfers from 32 currencies to 106 currencies on 2026-07-04."],
      paymentMethods: ["Debit or credit card", "Online banking", "Wise account", "Bank transfer", "PISP", "SWIFT"],
      countryAvailability: [
        {
          country: "France",
          supported: "Wise availability depends on the route, currency, account type, and selected payment method.",
          paymentMethods: ["Card", "Online banking", "Wise account", "Bank transfer", "PISP", "SWIFT where available"],
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
      identityRequired: "Wise's help centre covers account setup and verification, and Wise may ask users to verify their identity as part of account or transfer checks.",
      proofOfAddress: "Wise may request additional documents depending on country, account activity, or regulatory checks.",
      bankVerification: "Wise says bank-transfer payments should normally come from an account in the sender's own name, and joint bank accounts may require extra verification."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://wise.com/help/",
      helpCenter: "Wise says users should log in to get account-specific help and contact Wise customer support."
    },
    officialResources: [
      { label: "Wise official website", href: "https://wise.com/" },
      { label: "Wise international money transfer page", href: "https://wise.com/gb/send-money/" },
      { label: "Wise bank transfer payment method", href: "https://wise.com/gb/send-money/send-money-from-bank-account" },
      { label: "Wise availability checker", href: "https://wise.com/de/availability/" },
      { label: "Wise help centre", href: "https://wise.com/help/" },
      { label: "Wise public invite page", href: "https://wise.com/invite/" },
      { label: "Wise referral invitation", href: "https://wise.com/invite/ahpc/salaheddines203" }
    ],
    sources: [
      {
        label: "Wise official website",
        url: "https://wise.com/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise international money transfer page",
        url: "https://wise.com/gb/send-money/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise bank transfer payment method",
        url: "https://wise.com/gb/send-money/send-money-from-bank-account",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise availability checker",
        url: "https://wise.com/de/availability/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise public invite page",
        url: "https://wise.com/invite/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise help centre",
        url: "https://wise.com/help/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Wise referral invite link",
        url: "https://wise.com/invite/ahpc/salaheddines203",
        lastReviewed: "2026-07-04",
        confidence: "referral-link"
      }
    ],
    researchProfile: {
      completeness:
        "Reviewed Wise's official send-money page, bank-transfer payment page, availability checker, help centre, public invite page, and Bonus Foundry's Wise invite link for transfer coverage, payment methods, support path, security/verification caveats, and referral visibility.",
      confidence: "medium",
      sourcesReviewed: [
        "Wise official website",
        "Wise international money transfer page",
        "Wise bank transfer payment method",
        "Wise availability checker",
        "Wise public invite page",
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
        date: "2026-07-04",
        note: "Verified Wise invite visibility, route-specific payment methods, availability-checker caveats, bank-transfer verification notes, support path, and transfer security wording from official Wise pages."
      },
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
      "A transfer from France to Morocco should be checked in Wise's live flow for fee, exchange rate, delivery time, payment method, recipient method, and any invite terms before considering any bonus.",
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
    lastUpdated: "2026-07-04"
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
      "Use the referral link or QR invite before creating the account.",
      "Complete verification if Remitly requests identity information.",
      "Send a qualifying first transfer to a person other than the referrer, with an eligible destination and payment method.",
      "Keep the transfer from being canceled by either the referred user or Remitly."
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
    lastOfferUpdate: "2026-07-04",
    lastManualReview: "2026-07-04",
    referral: {
      hasProgram:
        "Remitly publishes referral program terms. Users can invite family and friends with a referral link or QR code, and referred friends must complete a qualified first transfer for the referral to qualify.",
      code: null,
      link: "https://remit.ly/35sixkkg",
      welcomeBonus:
        "Remitly referral rewards may change and depend on the active offer. The official terms say rewards may be a discount, bonus, fee-free transfer, gift card, or another reward type, and have no cash value unless Remitly states otherwise.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "Remitly says it will automatically apply referral rewards to the relevant account or profile, but the terms do not guarantee a delivery time.",
      limitations: [
        "Canceled transfers are not qualified referrals under Remitly's referral terms.",
        "Remitly limits the program to 20 rewards for qualified referrals.",
        "The referred friend must not be an existing Remitly customer and must sign up through the referral link or QR invite.",
        "The referred friend's first transfer must be sent to a person other than the referrer.",
        "Accounts must remain in good standing and pass required know-your-customer and fraud-prevention checks."
      ]
    },
    availability: {
      sendingCountries: ["Remitly-supported sender countries shown on the official website or app"],
      receivingCountries: ["Remitly says it serves 175+ countries, with supported destination countries shown on its website and transfer flow."],
      currencies: ["Currencies vary by sender country, destination country, and delivery method."],
      paymentMethods: ["Bank account", "Debit card", "Credit card", "Mobile wallet", "Cash pickup", "Other route-specific methods shown by Remitly"],
      countryAvailability: [
        {
          country: "France",
          supported: "Remitly route availability should be checked in the live transfer flow.",
          paymentMethods: ["Route-specific payment methods shown by Remitly"],
          notes: "Referral eligibility still depends on the active terms, account standing, and the referred friend's first qualified transfer."
        },
        {
          country: "Morocco",
          supported: "Remitly publishes a United States-to-Morocco route page and lists Morocco among destination countries.",
          paymentMethods: ["Bank deposit", "Mobile money", "Cash pickup", "Home delivery", "Debit card deposit where available"],
          notes: "Remitly says Morocco delivery options vary by recipient location; do not assume a destination or delivery method qualifies for the referral offer until Remitly displays the live terms."
        }
      ]
    },
    verification: {
      identityRequired:
        "Remitly referral terms require users to pass know-your-customer and fraud-prevention checks to receive rewards, and Remitly's security page says new website accounts must provide personal information and complete email verification.",
      proofOfAddress: "Remitly may request additional documentation depending on the amount sent or when it cannot verify identity.",
      bankVerification: "Remitly may verify personal and financial information through manual and automated checks; payment-method and transfer checks can affect reward eligibility."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.remitly.com/us/en/help",
      helpCenter: "Use Remitly's official help page, app, referral offer page, or referral terms page for account-specific support context."
    },
    officialResources: [
      { label: "Remitly official website", href: "https://www.remitly.com/" },
      { label: "Remitly United States website", href: "https://www.remitly.com/us/en" },
      { label: "Remitly United States to Morocco route", href: "https://www.remitly.com/us/en/money-transfer/send-money-to-morocco" },
      { label: "Remitly referral offer program", href: "https://www.remitly.com/us/en/home/referral-offer-program" },
      { label: "Remitly referral program terms", href: "https://www.remitly.com/us/en/home/referral-program-tnc" },
      { label: "Remitly security", href: "https://www.remitly.com/us/en/home/security" },
      { label: "Remitly referral invitation", href: "https://remit.ly/35sixkkg" }
    ],
    sources: [
      {
        label: "Remitly official website",
        url: "https://www.remitly.com/",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly United States website",
        url: "https://www.remitly.com/us/en",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly United States to Morocco route",
        url: "https://www.remitly.com/us/en/money-transfer/send-money-to-morocco",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly referral offer program",
        url: "https://www.remitly.com/us/en/home/referral-offer-program",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly referral program terms",
        url: "https://www.remitly.com/us/en/home/referral-program-tnc",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly security",
        url: "https://www.remitly.com/us/en/home/security",
        lastReviewed: "2026-07-04",
        confidence: "official"
      },
      {
        label: "Remitly referral link",
        url: "https://remit.ly/35sixkkg",
        lastReviewed: "2026-07-04",
        confidence: "referral-link"
      }
    ],
    ineligibleUsers: [
      "Existing Remitly customers.",
      "Users whose first transfer is canceled by the referred friend or by Remitly.",
      "Accounts that do not remain in good standing or do not pass required know-your-customer and fraud-prevention checks.",
      "Users who do not sign up through the referral invite.",
      "Users under 18, duplicate or fictitious accounts, self-referrals, commercial spam, bulk messages to strangers, or referrals prohibited by law or Remitly's terms."
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
        "Reviewed Remitly's official website, United States page, Morocco route page, referral offer page, referral program terms, security page, help page, and referral link for referral rules, qualification requirements, ineligible cases, maximum referral rewards, payout method, verification dependencies, supported countries, delivery methods, and support links.",
      confidence: "high",
      sourcesReviewed: [
        "Remitly official website",
        "Remitly United States website",
        "Remitly United States to Morocco route",
        "Remitly referral offer program",
        "Remitly referral program terms",
        "Remitly security",
        "Remitly help page",
        "Remitly referral link"
      ],
      remainingItems: [
        "The public terms reviewed allow reward changes and do not provide one fixed reward amount for every user.",
        "Route-specific minimum transfer, expiry, and delivery-method restrictions should be confirmed in Remitly's live offer flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-04",
        note: "Verified Remitly referral reward types, automatic account/profile reward application, no guaranteed reward delivery time, 20-referral limit, new-user/link requirements, self-referral restrictions, verification/security requirements, 175+ country claim, Morocco route delivery methods, and support links from official Remitly pages."
      },
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
      "Completing signup outside the referral link or QR invite and expecting Remitly to attach the referral later.",
      "Sending the first transfer to the referrer, which Remitly's terms exclude from valid referrals.",
      "Expecting an instant reward when Remitly's terms do not guarantee a delivery time."
    ],
    missingBonus: [
      "Review the confirmation email or app screen for the applied promotion.",
      "Check that signup happened through the referral link or QR invite and that the first transfer was sent to someone other than the referrer.",
      "Make sure verification, email verification, payment settlement, and transfer completion are finished.",
      "Contact Remitly support with your transfer receipt and referral details if needed."
    ],
    countryNotes: [
      "Remitly says product availability may vary by jurisdiction and is subject to change.",
      "Remitly says delivery options for Morocco can include cash pickup, mobile money, home delivery, debit card deposit, or bank deposit depending on recipient location.",
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
    lastUpdated: "2026-07-04"
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
      "Sendwave's public support page includes a promo-code step during signup, but Bonus Foundry could not verify public Sendwave referral-program terms or a fixed public reward amount from official pages. Bonus Foundry lists I4H9G as an owner-supplied code that must be confirmed in the Sendwave app.",
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
      "Bonus Foundry lists I4H9G as the Sendwave referral code. Sendwave's official public pages reviewed on 2026-07-05 did not publish a fixed referral reward table, so use the code only if the Sendwave signup or transfer flow accepts it and displays current terms.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "Bonus Foundry lists an owner-supplied Sendwave code, but Sendwave's public official pages reviewed on 2026-07-05 did not publish a public referral-program page or reward table.",
      code: "I4H9G",
      link: "https://www.sendwave.com/",
      welcomeBonus:
        "Sendwave's public site highlights app transfers and wallet offers in select markets. Any referral reward should be treated as app-only unless Sendwave shows terms in the user's region.",
      minimumTransfer: "",
      expiry: "",
      payoutTiming: "",
      limitations: [
        "The official Sendwave public pages reviewed did not expose a public referral-program terms page or fixed reward amount.",
        "Sendwave's support FAQ shows a promo-code step during signup, but it does not prove that every code is eligible in every country.",
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
      identityRequired:
        "Sendwave says users link a debit card and verify identity before sending; its support FAQ says Sendwave may ask for photo ID and a selfie video.",
      proofOfAddress: "Confirm any address or document request in the Sendwave app for the sender country.",
      bankVerification: "Sendwave support says card errors can mean connectivity or app-version issues, and 3DS issues may require updating the sender bank's app or contacting the bank."
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
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Sendwave countries page",
        url: "https://www.sendwave.com/en-us/countries",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Sendwave support FAQ",
        url: "https://www.sendwave.com/en-us/support",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.sendwave.com/",
        lastReviewed: "2026-07-05",
        confidence: "internal"
      }
    ],
    researchProfile: {
      completeness:
        "Reviewed Sendwave's official homepage, structured organization data, wallet copy, countries page, support FAQ, sender/recipient route signals, verification FAQ, limits FAQ, cancellation/refund FAQ, and public referral signals.",
      confidence: "medium",
      sourcesReviewed: ["Sendwave official website", "Sendwave countries page", "Sendwave support FAQ", "Bonus Foundry owner-supplied referral code"],
      remainingItems: [
        "No official public Sendwave referral terms page was found in the public pages reviewed.",
        "The I4H9G code should be confirmed in the Sendwave app before a user relies on any reward.",
        "Route-specific transfer limits and payout methods should be checked in Sendwave's live app flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified Sendwave's public promo-code caveat, app-only sending, debit-card payment, identity verification, 3DS/card troubleshooting, limits, wrong-recipient warnings, cancellation/refund timing, support path, Wallet availability, and country-route caveats from official Sendwave pages."
      },
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
      "Ignoring destination-specific availability.",
      "Using a credit card or PayPal even though Sendwave support says debit cards are the accepted pay-in method.",
      "Sending to the wrong recipient details and expecting a guaranteed refund."
    ],
    missingBonus: [
      "Check whether Sendwave showed an offer before signup or transfer.",
      "Confirm that your first transfer met any displayed minimum amount.",
      "Check whether identity verification, 3DS, card authorization, or app-version issues blocked the transfer.",
      "Contact Sendwave support from the app with screenshots if you relied on a visible app offer."
    ],
    countryNotes: [
      "Sendwave availability depends on sender and destination country.",
      "Mobile wallet and bank delivery options can vary by destination.",
      "Check local transfer limits and verification requirements before sending.",
      "Sendwave support says every account has daily and monthly limits, and the maximum per transaction depends on receive country and delivery method."
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
    lastUpdated: "2026-07-05"
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
      "Ria's official promo page lists new-customer promo codes, including HelloRia for $0 fees on first-time money transfers of $50 or more through December 31, 2026, but Bonus Foundry did not verify a public Ria referral-code program.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "New customers aged 18 or older may be eligible only for promotions Ria displays in the relevant country site, app, store, or checkout flow.",
    requirements: [
      "Use the correct Ria country website or app for your sender location.",
      "Check for any displayed promo terms before payment, including minimum principal amount and channel restrictions.",
      "Complete identity verification if requested.",
      "Send through an eligible route and payout method.",
      "Enter any promo code at checkout when Ria requires the code to be quoted before the money transfer order is placed."
    ],
    steps: [
      "Choose the sender country and destination in Ria.",
      "Review payout options such as bank deposit, cash pickup, or wallet where available.",
      "Check whether a promotion is shown before checkout.",
      "Complete payment only after reviewing total cost and delivery timing."
    ],
    keyFacts: [
      { label: "Referral program", value: "No official public referral program found in the pages reviewed." },
      { label: "Current public promo", value: "HelloRia: $0 fees on first-time $50+ transfers, according to Ria's US promo page." },
      { label: "Main caution", value: "Cash pickup and online offers may have different terms." },
      { label: "Bonus certainty", value: "Only Ria's live flow can confirm a current promotion." }
    ],
    currentOffer:
      "Bonus Foundry does not currently display a verified public Ria invite reward. Ria's official US promo page lists HelloRia for $0 fees on first-time money transfers of $50 or more through December 31, 2026, plus accepted codes HOLARIA, HOLAYAPE, and HOLANEQUI; it also lists RDADD5 and RCADD5 as select US store new-customer offers.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "No official public Ria referral-program page was found in the official public pages reviewed on 2026-07-05. Ria does publish promo-code offers, which are separate from a referral program.",
      code: null,
      link: "https://www.riamoneytransfer.com/",
      welcomeBonus:
        "Ria's public US promo page lists HelloRia for $0 fees on first-time money transfers of $50 or more; additional accepted codes include HOLARIA, HOLAYAPE, and HOLANEQUI. RDADD5 and RCADD5 are listed as select US Ria store new-customer offers that add $5 or $10 to the transferred principal amount.",
      minimumTransfer: "$50 or more for the public US promo codes reviewed.",
      expiry: "HelloRia expires on December 31, 2026; Ria says it may terminate promotions at any time.",
      payoutTiming: "",
      limitations: [
        "Do not use a Ria code unless Ria displays an official code field and terms in your country flow.",
        "Ria says promo codes can be limited to one use per customer and cannot be combined with another promo code.",
        "RDADD5 and RCADD5 are described as available only at select US Ria stores.",
        "Ria's online, app, WhatsApp, and agent-location channels can have different availability and offer rules.",
        "Country, destination, payout method, and payment method can affect whether a Ria promotion applies."
      ]
    },
    availability: {
      sendingCountries: ["Ria-supported sender countries shown on the selected country site or app"],
      receivingCountries: ["Ria's official homepage says users can send to over 200 countries; the header and cash-pickup pages also describe 190+ country coverage."],
      currencies: ["100+ receive currencies according to Ria's official website", "Route-specific currencies shown in the Ria flow"],
      paymentMethods: ["Debit card", "Credit card where available", "Bank account", "Cash at 7-Eleven where available", "Cash pickup", "Bank deposit", "Digital wallet", "Home delivery where available", "ATM pickup where available"],
      countryAvailability: [
        {
          country: "United States",
          supported: "Ria's official homepage is framed around sending from the US to 190+ or 200+ countries depending on page section.",
          paymentMethods: ["US-issued Visa or Mastercard credit card", "US-issued Visa or Mastercard debit card", "US bank account", "Cash at 7-Eleven where available", "Cash pickup", "Bank deposit", "Digital wallet", "Home delivery where available"],
          notes: "Ria's public promo page lists US new-customer promo-code offers, not a general referral-code program."
        },
        {
          country: "Morocco",
          supported: "Ria lists Morocco among destination countries on its official website.",
          paymentMethods: ["Cash pickup", "Bank deposit or wallet where available"],
          notes: "Cash pickup and online delivery choices can change by route."
        }
      ]
    },
    verification: {
      identityRequired:
        "Ria's security page says it verifies sender and recipient identities and accepts proof of identity such as passport, driver's license, national identity card, or residence permit card; the document must match the Ria account name and be valid.",
      proofOfAddress: "Ria terms allow the company to require additional information to complete a transfer, so confirm any address-document request in Ria's live country flow.",
      bankVerification: "Ria terms say payment and delivery depend on identity verification, card or bank authorization, compliance screening, and recipient information when required."
    },
    support: {
      supportEmail: "us_support@riamoneytransfer.com",
      supportUrl: "https://help.riamoneytransfer.com/hc/en-us",
      helpCenter: "Ria links to its Help center, phone support, chat, complaint form, and fraud-reporting channels; US terms list 1-877-443-1399 for customer service."
    },
    officialResources: [
      { label: "Ria official website", href: "https://www.riamoneytransfer.com/" },
      { label: "Ria promotions", href: "https://www.riamoneytransfer.com/en-us/promo/" },
      { label: "Ria terms and conditions", href: "https://www.riamoneytransfer.com/en-us/terms/" },
      { label: "Ria security", href: "https://www.riamoneytransfer.com/en-us/security/" },
      { label: "Ria Help center", href: "https://help.riamoneytransfer.com/hc/en-us" },
      { label: "Ria cash pickup", href: "https://www.riamoneytransfer.com/en-us/send-money-cash-pickup/" },
      { label: "Ria bank deposit", href: "https://www.riamoneytransfer.com/en-us/send-money-to-bank-account/" },
      { label: "Ria digital wallet", href: "https://www.riamoneytransfer.com/en-us/wallets/" }
    ],
    sources: [
      {
        label: "Ria official website",
        url: "https://www.riamoneytransfer.com/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria promotions",
        url: "https://www.riamoneytransfer.com/en-us/promo/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria terms and conditions",
        url: "https://www.riamoneytransfer.com/en-us/terms/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria security",
        url: "https://www.riamoneytransfer.com/en-us/security/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria cash pickup",
        url: "https://www.riamoneytransfer.com/en-us/send-money-cash-pickup/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria bank deposit",
        url: "https://www.riamoneytransfer.com/en-us/send-money-to-bank-account/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Ria Help center",
        url: "https://help.riamoneytransfer.com/hc/en-us",
        lastReviewed: "2026-07-05",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users relying on a public referral code that Ria does not show in the live flow.",
      "Users attempting to apply a local promotion from another country site.",
      "Users trying to combine two Ria promo codes on one transfer.",
      "Users trying to reuse a one-per-customer new-customer promo code.",
      "Transfers whose channel, destination, payout method, payment method, or user status does not match the displayed Ria terms."
    ],
    bonusChecklist: [
      "Open the correct Ria country site or app.",
      "Check whether Ria displays a promo code, promo rate, or local offer before payment.",
      "Do not assume a referral code exists unless Ria shows an official code field and terms.",
      "Enter the promo code at checkout before placing the money transfer order when Ria requires it.",
      "Compare the fee, exchange rate, delivery method, and arrival timing before sending.",
      "Keep the transfer receipt and any displayed promotion screen."
    ],
    researchProfile: {
      completeness:
        "Reviewed Ria's official public website, promo page, terms and conditions, security page, cash pickup page, bank deposit page, support links, transfer coverage, delivery methods, verification requirements, and public referral evidence.",
      confidence: "high",
      sourcesReviewed: ["Ria official website", "Ria promotions", "Ria terms and conditions", "Ria security", "Ria cash pickup", "Ria bank deposit", "Ria Help center"],
      remainingItems: [
        "No official public referral-code terms were found in the public official pages reviewed.",
        "Country-specific promotions must be confirmed in Ria's live country flow.",
        "Ria's public pages use both 190+ and over 200 country-coverage language; Bonus Foundry preserves the variation instead of normalizing it."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified Ria's public promo codes, first-transfer $50+ fee offer, select US store code caveats, no public referral-program evidence, identity document rules, payment methods, delivery methods, support channels, refund/cancellation terms, and country-coverage caveats from official Ria pages."
      },
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
      "Forgetting that agent-location transfers and online transfers can have different rules.",
      "Trying to apply a promo code after checkout even though Ria says the code must be quoted at checkout."
    ],
    missingBonus: [
      "Check whether the offer was attached to the transfer before payment.",
      "Review the sender country, destination, payout method, payment method, minimum principal amount, and one-use-per-customer rules.",
      "Contact Ria support with transfer details if a displayed promotion did not apply."
    ],
    countryNotes: [
      "Ria's online service and agent network can differ by market.",
      "France to Morocco users should compare online availability, pickup options, fee, exchange rate, and any visible promotion.",
      "Identity and transfer limits can vary by country.",
      "Ria says bank deposit transfers are available to over 180 countries, while cash pickup is available in 190+ countries and territories."
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
    lastUpdated: "2026-07-05"
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
      "Western Union publishes US Refer a Friend pages where invited friends can receive a $0 transfer fee on their first international digital money transfer and both users receive rewards after requirements are completed. Western Union's official terms are country-specific, so Bonus Foundry does not treat the US offer as a universal global reward.",
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
      { label: "US friend benefit", value: "$0 transfer fee on the first international digital money transfer, subject to US terms." },
      { label: "Reward timing", value: "Usually minutes, but up to 15 business days after all requirements are met." },
      { label: "Main caution", value: "Western Union referral terms are country-specific and rewards expire 6 months after processing." }
    ],
    currentOffer:
      "Bonus Foundry lists a Western Union referral link. Western Union's US Refer a Friend page says friends receive a $0 transfer fee on their first international digital money transfer, while both users receive rewards after the friend completes all requirements. Check the sender-country terms before treating the US rules as available elsewhere.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "Western Union publishes official US Refer a Friend pages and legal terms. The program is operated by the applicable Western Union entity by country of residence, so local terms control eligibility.",
      code: null,
      link: "https://ssqt.co/mQVq5Jg",
      welcomeBonus:
        "In the US flow reviewed, invited friends receive $0 transfer fee on their first international digital money transfer and both users receive rewards after all requirements are completed. The legal terms do not make that offer universal for every country.",
      minimumTransfer: "Country-specific; check the local Western Union referral terms and transfer flow.",
      expiry: "Rewards expire 6 months after processing in the US FAQ; other countries may have local rules.",
      payoutTiming: "The US FAQ says processing usually takes minutes but can take up to 15 business days after all requirements are met.",
      limitations: [
        "The invitee must not already have a wu.com or Western Union app profile under the US FAQ.",
        "Rewards cannot be redeemed for cash, transferred, sold, bartered, traded, or auctioned.",
        "Western Union prohibits duplicate or fake profiles, self-referrals, spam, automated participation, and non-genuine transfers.",
        "Online, app, and agent-location transfers may not share the same offer rules."
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
      { label: "Western Union US Refer a Friend FAQ", href: "https://www.westernunion.com/us/en/frequently-asked-questions/faq-refer-a-friend.html" },
      { label: "Western Union US Refer a Friend Terms", href: "https://www.westernunion.com/us/en/legal/refer-a-friend-terms-and-conditions.html" },
      { label: "Western Union referral link", href: "https://ssqt.co/mQVq5Jg" }
    ],
    sources: [
      {
        label: "Western Union official website",
        url: "https://www.westernunion.com/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Western Union US home",
        url: "https://www.westernunion.com/us/en/home.html",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Western Union US Refer a Friend",
        url: "https://www.westernunion.com/us/en/refer-a-friend.html",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Western Union US Refer a Friend FAQ",
        url: "https://www.westernunion.com/us/en/frequently-asked-questions/faq-refer-a-friend.html",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Western Union US Refer a Friend Terms",
        url: "https://www.westernunion.com/us/en/legal/refer-a-friend-terms-and-conditions.html",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Western Union referral link",
        url: "https://ssqt.co/mQVq5Jg",
        lastReviewed: "2026-07-05",
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
        "Reviewed Western Union's official global site, US country site, US Refer a Friend page, US Refer a Friend FAQ, US Refer a Friend legal terms, and the Bonus Foundry referral link for referral, reward, eligibility, verification, countries, payment methods, troubleshooting, support, and FAQ details.",
      confidence: "high",
      sourcesReviewed: [
        "Western Union official website",
        "Western Union US home",
        "Western Union US Refer a Friend",
        "Western Union US Refer a Friend FAQ",
        "Western Union US Refer a Friend Terms",
        "Western Union referral link"
      ],
      remainingItems: [
        "Western Union referral terms should be checked separately for each sender country before publishing a local reward amount outside the US offer.",
        "The short referral link destination and live offer should be retested before major content updates.",
        "Agent-location, app, web, and My WU rewards may have separate local rules."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified US Refer a Friend reward, $0 first digital transfer fee for invited friends, reward timing, 6-month expiry, new-profile rule, support phone, and prohibited-use terms from official Western Union pages."
      },
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
      "Treating a US Refer a Friend page as a global Western Union reward.",
      "Expecting cash redemption when Western Union says rewards cannot be redeemed for cash."
    ],
    missingBonus: [
      "Confirm the referral or promo was visible and applied before payment.",
      "Check whether the transfer channel matched the offer.",
      "Review the sender-country terms for minimum transfer, destination, expiry, and new-user rules.",
      "For the US Refer a Friend program, wait up to 15 business days after all requirements are met and check email spam or junk folders.",
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
        question: "When does Western Union send Refer a Friend rewards?",
        answer: "Western Union's US FAQ says reward processing usually takes minutes but can take up to 15 business days after all requirements are met."
      },
      {
        question: "Should I compare Western Union even without a referral code?",
        answer:
          "Yes. Fees, exchange rate, delivery speed, cash pickup coverage, and reliability can matter more than a one-time bonus."
      }
    ],
    lastUpdated: "2026-07-05"
  },
  {
    name: "MoneyGram",
    slug: "moneygram",
    website: "https://www.moneygram.com/",
    description:
      "MoneyGram provides international transfers through online, mobile, and agent-location channels in many markets.",
    referralCode: null,
    referralLink: null,
    welcomeBonus:
      "MoneyGram publishes a US Invite Friends program. The US page says new customers get $20 toward their first qualifying transfer and the referrer gets $20 after the friend completes a first qualifying transfer of $50 or more.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Eligibility depends on MoneyGram's active local offer, MoneyGram Plus Rewards status, account status, transfer channel, and transfer details.",
    requirements: [
      "Use the correct MoneyGram country site or app.",
      "For the US Invite Friends program, the friend must sign up through the referral link and complete a first qualifying transfer of $50 or more.",
      "Confirm that the transfer is from the United States to a select receive country before relying on the US Invite Friends offer.",
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
      { label: "Bonus Foundry referral link", value: "No Bonus Foundry-owned MoneyGram referral link is currently published." },
      { label: "US friend reward", value: "$20 toward the first qualifying transfer." },
      { label: "US referrer reward", value: "$20 after the friend's first qualifying transfer." },
      { label: "Minimum transfer", value: "$50 or more for the friend's first qualifying transfer under the US page reviewed." },
      { label: "Main caution", value: "Online and agent-location offers may differ." },
      { label: "Bonus certainty", value: "MoneyGram says the program can be modified, canceled, replaced, suspended, or terminated." }
    ],
    currentOffer:
      "MoneyGram's official US Invite Friends page says new customers get $20 toward their first qualifying transfer and the referrer gets $20 after the friend signs up with the link and completes a first qualifying transfer of $50 or more. The promotion is available only when sending from the United States to select receive countries.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "MoneyGram publishes an official US Invite Friends referral page.",
      code: null,
      link: null,
      welcomeBonus:
        "The US Invite Friends page says new customers get $20 toward their first qualifying transfer and the referrer gets $20 on the next transfer after the friend completes their first one.",
      minimumTransfer: "The US page says the friend's first qualifying money transfer must be $50 or more.",
      expiry: "MoneyGram does not publish a fixed expiry date on the US Invite Friends page reviewed; it reserves the right to modify, cancel, replace, suspend, or terminate the program.",
      payoutTiming: "The US page says the referrer receives the bonus after the friend signs up with the link and completes the first qualifying transfer.",
      limitations: [
        "The US Invite Friends promotion is only available when sending from the United States to select receive countries.",
        "The friend must be a new customer and use the referral link.",
        "MoneyGram says rates, fees, availability, payment type, delivery method, and timing vary by transaction details.",
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
          notes: "MoneyGram publishes a US Invite Friends program, but it is limited to transfers from the United States to select receive countries."
        },
        {
          country: "France",
          supported: "MoneyGram availability should be checked on the France country flow for online and agent options.",
          paymentMethods: ["Card or bank where available", "Cash pickup", "Bank deposit or wallet where supported"],
          notes: "Bonus Foundry could not verify a France-specific MoneyGram Invite Friends reward from official public documentation."
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
      { label: "MoneyGram US Invite Friends", href: "https://www.moneygram.com/us/en/services/invite-friends" },
      { label: "MoneyGram US Help Center", href: "https://www.moneygram.com/us/en/help-center" },
      { label: "MoneyGram US Terms and Conditions", href: "https://www.moneygram.com/us/en/help-center/terms-and-conditions" }
    ],
    sources: [
      {
        label: "MoneyGram official website",
        url: "https://www.moneygram.com/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "MoneyGram US home",
        url: "https://www.moneygram.com/us/en",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "MoneyGram US Invite Friends",
        url: "https://www.moneygram.com/us/en/services/invite-friends",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "MoneyGram US Help Center",
        url: "https://www.moneygram.com/us/en/help-center",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "MoneyGram US Terms and Conditions",
        url: "https://www.moneygram.com/us/en/help-center/terms-and-conditions",
        lastReviewed: "2026-07-05",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users outside the US sending flow when the only verified Invite Friends terms are US-specific.",
      "Friends who do not sign up through the MoneyGram referral link.",
      "Friends whose first qualifying transfer is below $50 under the US Invite Friends page reviewed.",
      "Users attempting to apply an offer from another country, channel, or account type.",
      "Transfers that do not meet the displayed promotion, Plus Rewards, channel, destination, payment, or verification rules."
    ],
    bonusChecklist: [
      "Open the official MoneyGram country site or app.",
      "For the US Invite Friends program, sign up or log in and copy the unique referral link.",
      "Confirm the friend is new and sends from the United States to a select receive country.",
      "Confirm the friend's first qualifying transfer is $50 or more.",
      "Confirm the channel, destination, payout method, transfer amount, and expiry before payment.",
      "Keep the offer screen and transfer receipt."
    ],
    researchProfile: {
      completeness:
        "Reviewed MoneyGram's official website, US home page, US Invite Friends page, US Help Center, and US terms for referral, reward, eligibility, verification, countries, payment methods, troubleshooting, support, FAQ, and legal caveats.",
      confidence: "high",
      sourcesReviewed: ["MoneyGram official website", "MoneyGram US home", "MoneyGram US Invite Friends", "MoneyGram US Help Center", "MoneyGram US Terms and Conditions"],
      remainingItems: [
        "Bonus Foundry could not verify equivalent MoneyGram Invite Friends rewards for non-US sender countries from official public pages.",
        "MoneyGram's US Invite Friends page does not publish the full list of select receive countries in the static page text reviewed.",
        "Support details and route-specific payout methods should be checked inside the relevant local site or app."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified MoneyGram's official US Invite Friends program, $20 new-customer and referrer reward, $50 qualifying-transfer threshold, US-to-select-countries limitation, Help Center, and transaction-availability caveats."
      },
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
      "Ignoring identity checks or transfer limits.",
      "Assuming MoneyGram's US Invite Friends reward applies to every sender country."
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
      "MoneyGram's US Invite Friends promotion is limited to transfers from the United States to select receive countries."
    ],
    faq: [
      {
        question: "Does MoneyGram have a referral code on this site?",
        answer: "No. Bonus Foundry does not currently publish a MoneyGram referral code or Bonus Foundry-owned MoneyGram referral link."
      },
      {
        question: "How much is the MoneyGram US referral reward?",
        answer: "MoneyGram's US Invite Friends page says the new customer gets $20 toward the first qualifying transfer and the referrer gets $20 after the friend completes the first qualifying transfer."
      },
      {
        question: "What is the MoneyGram US minimum qualifying transfer?",
        answer: "MoneyGram's US Invite Friends page says the friend's first qualifying money transfer must be $50 or more."
      },
      {
        question: "Can a MoneyGram promo code expire?",
        answer: "Yes. Promotions can expire or be limited by country, channel, and transfer method."
      }
    ],
    lastUpdated: "2026-07-05"
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
      "Paysend publishes a referral program where invited friends get their first transfer fee-free and referrers can earn bonuses for up to 12 successful transfers made by each friend within the friend's first 12 months. The published bonus is £1.50, €2.25, or $3 per eligible transfer, up to £18, €27, or $36 per friend, or the local equivalent.",
    supportedCountries: ["United Kingdom", "France", "Germany", "United States", "Morocco", "India"],
    eligibleUsers:
      "New Paysend users who sign up through an eligible referral link, meet Paysend's country rules, complete verification if requested, and make a qualifying first transfer may be eligible.",
    requirements: [
      "Create a new Paysend account through the referral link before the first transfer.",
      "Confirm that the sender country is not excluded from Paysend's referral program.",
      "Verify identity if required.",
      "Complete a qualifying first transfer; bonus withdrawals and card-verification microdebits do not count toward bonus eligibility."
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
      { label: "Referrer reward", value: "£1.50, €2.25, or $3 per eligible transfer for up to 12 transfers within 12 months, depending on registration country." },
      { label: "Withdrawal minimum", value: "£5, €5, $5, or local equivalent." },
      { label: "Main caution", value: "Program availability, withdrawal availability, and reward currency vary by country." }
    ],
    currentOffer:
      "Bonus Foundry lists a Paysend referral link. Paysend's official bonus page says invited friends get their first transfer fee-free and referrers earn £1.50, €2.25, or $3 per eligible transfer for up to 12 successful transfers made by each friend within the first 12 months, up to £18, €27, or $36 per friend, or the local equivalent.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "Paysend publishes a public referral program through its bonus and referral pages.",
      code: null,
      link: "https://paysend.com/en/referral/06mvt6",
      welcomeBonus:
        "Paysend's official bonus page says the invited friend receives a fee waiver on the first transfer and the referrer earns per-transfer bonuses for eligible transfers made by the friend.",
      minimumTransfer: "Paysend's static bonus page reviewed does not publish a minimum transfer amount; it excludes bonus withdrawals and card-verification microdebits from bonus eligibility.",
      expiry: "Paysend referral terms can change; check the live referral page before signup.",
      payoutTiming: "Paysend pays referrer bonuses for up to 12 successful transfers made by each friend within the friend's first 12 months.",
      limitations: [
        "Paysend says the program is available to all Paysend customers except those registered in Brazil, Chile, Colombia, Kazakhstan, Moldova, Peru, and Uzbekistan.",
        "The first-transfer benefit is a fee waiver, not a guaranteed exchange-rate bonus.",
        "The referrer reward depends on registration country: £1.50, €2.25, $3, or local equivalent per eligible transfer.",
        "Referral credit cannot be applied retroactively if the friend did not use the invite link during signup.",
        "Bonus withdrawals are unavailable in some countries; Paysend lists Moldova, Ukraine, Belarus, and China as examples."
      ]
    },
    availability: {
      sendingCountries: ["Paysend-supported sender countries shown in the live transfer flow"],
      receivingCountries: ["Over 170 countries from the UK page and over 100 countries from the US page, according to Paysend's official country pages"],
      currencies: ["Route-specific currencies shown in the Paysend transfer flow"],
      paymentMethods: ["Debit card", "Credit card", "Apple Pay where available", "Google Pay where available", "Local payment methods where available", "Card delivery", "Bank account delivery", "Wallet delivery where available", "Cash pickup where available"],
      countryAvailability: [
        {
          country: "United Kingdom",
          supported: "Paysend supports UK users and publishes UK-facing transfer and referral experiences.",
          paymentMethods: ["Card", "Bank account where available", "Recipient card", "Recipient bank or wallet where supported"],
          notes: "Paysend's UK page links to the referral program and shows UK reward currency examples."
        },
        {
          country: "France",
          supported: "Paysend supports selected France sender and destination routes through the live transfer flow.",
          paymentMethods: ["Card", "Recipient card", "Recipient bank or wallet where supported"],
          notes: "France is not listed among the excluded registration countries on the official bonus page reviewed, but local route and withdrawal terms still need live-flow confirmation."
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
      helpCenter: "Paysend's official pages point users to the Help Centre, real-time live chat, and an email support link for account-specific referral and transfer questions."
    },
    officialResources: [
      { label: "Paysend official website", href: "https://paysend.com/" },
      { label: "Paysend US bonus page", href: "https://paysend.com/en-us/bonus" },
      { label: "Paysend UK home", href: "https://paysend.com/en-gb" },
      { label: "Paysend US home", href: "https://paysend.com/en-us" },
      { label: "Paysend Help Center", href: "https://paysend.com/en-gb/help" },
      { label: "Paysend referral link", href: "https://paysend.com/en/referral/06mvt6" }
    ],
    sources: [
      {
        label: "Paysend official website",
        url: "https://paysend.com/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Paysend US bonus page",
        url: "https://paysend.com/en-us/bonus",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Paysend UK home",
        url: "https://paysend.com/en-gb",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Paysend US home",
        url: "https://paysend.com/en-us",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Paysend Help Center",
        url: "https://paysend.com/en-gb/help",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Paysend referral link",
        url: "https://paysend.com/en/referral/06mvt6",
        lastReviewed: "2026-07-05",
        confidence: "referral-link"
      }
    ],
    ineligibleUsers: [
      "Existing Paysend users opening a second account to claim a first-transfer referral benefit.",
      "Users registered in Brazil, Chile, Colombia, Kazakhstan, Moldova, Peru, or Uzbekistan under the official bonus page reviewed.",
      "Users who do not start from the referral link when the referral flow requires it.",
      "Transfers that fail Paysend's qualifying-transfer, verification, payment-method, route, or account-review rules.",
      "Bonus withdrawals and card-verification microdebits, because Paysend says they are excluded from bonus eligibility."
    ],
    bonusChecklist: [
      "Open the Paysend referral link before signup.",
      "Confirm the country exclusions and current reward currency on Paysend's live referral page.",
      "Verify that the first-transfer fee waiver appears before sending.",
      "Check whether the friend is within the first 12 months after signup and whether the transfer counts toward the 12-transfer reward limit.",
      "Complete identity verification if Paysend requests it.",
      "Keep the referral page, transfer receipt, and any reward-credit screen."
    ],
    researchProfile: {
      completeness:
        "Reviewed Paysend's official website, US bonus page, UK country page, US country page, Help Center, and public referral landing flow for referral, reward, eligibility, verification, countries, payment methods, troubleshooting, support, FAQ, and official documentation.",
      confidence: "high",
      sourcesReviewed: ["Paysend official website", "Paysend US bonus page", "Paysend UK home", "Paysend US home", "Paysend Help Center", "Paysend referral link"],
      remainingItems: [
        "Paysend's live referral terms should be rechecked before publishing a country-specific local-equivalent reward outside the £, €, and $ examples.",
        "Bonus withdrawal availability should be verified for each sender country because Paysend only gives examples of unavailable countries.",
        "Route-specific delivery methods and limits should be confirmed in the Paysend transfer flow."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified Paysend's per-transfer bonus amounts, 12-transfer and 12-month reward window, withdrawal minimum, excluded registration countries, retroactive-credit rule, microdebit exclusion, and official support channels."
      },
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
      "Treating the first-transfer fee waiver as a cash reward.",
      "Trying to add the invite link after signup even though Paysend says referrals cannot be credited retroactively."
    ],
    missingBonus: [
      "Check whether the Paysend referral link was used before signup.",
      "Confirm that your country was not excluded by the referral terms.",
      "Confirm the transfer was not a bonus withdrawal or card-verification microdebit.",
      "Confirm the transfer occurred within the friend's first 12 months and did not exceed the 12-transfer reward limit.",
      "Contact Paysend support with screenshots and transfer details."
    ],
    countryNotes: [
      "Paysend availability and transfer methods vary by country.",
      "Sender and recipient card rules can affect whether a transfer is eligible.",
      "Referral reward amount, currency, withdrawal availability, and exclusions should be checked for the user's sender country."
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
        question: "How much can a Paysend referrer earn?",
        answer: "Paysend's official bonus page says referrers can earn £1.50, €2.25, or $3 per eligible transfer for up to 12 successful transfers made by each friend within the first 12 months, up to £18, €27, or $36 per friend, or the local equivalent."
      },
      {
        question: "Can Paysend offers vary by product?",
        answer: "Yes. Transfer, card, and account features may have different promotional rules."
      }
    ],
    lastUpdated: "2026-07-05"
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
      "LemFi's Europe invite-and-earn page says both users can receive EUR 10 when a referred friend signs up, verifies, and sends over EUR 100 in one transfer. A separate Europe Referral & Earn campaign page lists referrer-only rewards, but its terms say the campaign period ended June 30, 2026 while page metadata lists July 31, 2026.",
    supportedCountries: ["France", "Germany", "Belgium", "Ireland", "Italy", "United Kingdom", "Canada", "United States", "Nigeria", "Ghana", "Kenya"],
    eligibleUsers:
      "New users may be eligible when they sign up with a valid LemFi referral code, verify their account, and complete the qualifying transfer shown in LemFi's terms. Europe campaign referrer rewards require an existing fully verified LemFi Europe account.",
    requirements: [
      "Create a new LemFi account in a supported market.",
      "Enter SALABGWQ during signup if LemFi provides a referral code field.",
      "Complete identity verification if LemFi requires it.",
      "For the Europe invite-and-earn flow, the referred friend must verify and send over EUR 100 in a single transfer.",
      "For the Europe Referral & Earn campaign, referred friends must be new LemFi users and complete a qualifying transfer of EUR 100 or more during the campaign period."
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
      { label: "Invite reward", value: "EUR 10 for both users after a qualifying EUR 100+ first transfer, according to LemFi's invite page." },
      { label: "Campaign date caution", value: "LemFi's campaign metadata and campaign terms show different end dates." },
      { label: "When to apply", value: "Before or during signup, not after completing the qualifying action." }
    ],
    currentOffer:
      "For Europe users, LemFi's invite-and-earn page says both accounts can receive EUR 10 when the invited friend signs up, verifies, and sends over EUR 100 in one transfer. LemFi's Europe Referral & Earn campaign page also describes EUR 10 per successful referral plus EUR 50 for every 5 qualifying referrals for referrers only, but the campaign terms say the promotion period ended June 30, 2026 while page metadata lists July 31, 2026; confirm the live app terms before relying on that campaign.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "LemFi publishes an Invite and Earn page and Europe referral campaign terms for supported European users.",
      code: "SALABGWQ",
      link: "https://www.lemfi.com/en-fr/invite-and-earn",
      welcomeBonus:
        "The Europe invite-and-earn page says both users can receive EUR 10 after the referred friend signs up, verifies, and sends over EUR 100 in one transfer. The Europe campaign terms reward the referrer only.",
      minimumTransfer: "Over EUR 100 for the invite-and-earn page; EUR 100 or more for the Europe Referral & Earn campaign.",
      expiry:
        "Europe Referral & Earn campaign terms state May 20, 2026 to June 30, 2026 for the qualifying campaign period; the promotion page metadata lists the campaign through July 31, 2026.",
      payoutTiming:
        "Europe campaign terms say rewards are credited in EUR to the referrer's LemFi wallet within 7 working days of each qualifying referral being confirmed.",
      limitations: [
        "The Europe Referral & Earn campaign rewards apply only to the referrer; referred friends do not receive a reward under that campaign.",
        "Referred users must be new LemFi users who have not previously held a LemFi account.",
        "Users who signed up with a referral code before the start of the Europe Referral & Earn campaign period are not eligible for that campaign.",
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
          notes: "The invite-and-earn page applies to supported LemFi routes, subject to account verification and the EUR 100+ qualifying transfer; the separate Europe campaign date remains ambiguous because the terms and metadata conflict."
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
      bankVerification: "LemFi says payments may be processed by third-party payment processors whose own terms can apply, and funding, payment, and transfer checks can vary by country and payment method."
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
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "LemFi Europe Invite and Earn",
        url: "https://www.lemfi.com/en-fr/invite-and-earn",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "LemFi Europe Referral & Earn campaign",
        url: "https://www.lemfi.com/en-fr/promotions/eu-referral-campaign",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "LemFi Europe terms",
        url: "https://www.lemfi.com/en-fr/legal/terms",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "LemFi contact page",
        url: "https://www.lemfi.com/en-fr/contact-us",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Referral code supplied by Bonus Foundry owner",
        url: "https://www.lemfi.com/",
        lastReviewed: "2026-07-05",
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
      "Send more than EUR 100 for the invite-and-earn page, or EUR 100 or more for the Europe Referral & Earn campaign.",
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
        date: "2026-07-05",
        note: "Verified LemFi invite-and-earn EUR 10 / EUR 100 mechanics, Europe campaign referrer-only rewards, June 30 terms end date versus July 31 metadata conflict, reward-credit timing, verification rules, payment-processor caveats, supported Europe country data, and support channels from official LemFi pages."
      },
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
      "Missing the EUR 100 transfer threshold or sending outside the campaign period.",
      "Trying to qualify with an existing LemFi account, duplicate account, or self-referral.",
      "Treating the Europe Referral & Earn campaign as currently active without checking the live app, because LemFi's metadata and terms show different end dates."
    ],
    missingBonus: [
      "Check whether SALABGWQ was applied before signup or the qualifying action.",
      "Confirm that the referred user was new, verified, and completed the required EUR 100+ transfer.",
      "For Europe campaign referrers, allow up to 7 working days after each qualifying referral is confirmed for EUR wallet credit, according to the campaign terms.",
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
          "LemFi's Europe invite-and-earn page says both users can receive EUR 10 after the referred friend verifies and sends over EUR 100. The Europe Referral & Earn campaign pays the referrer EUR 10 per successful referral plus EUR 50 for every 5 qualifying referred friends, but its terms and metadata show different end dates."
      },
      {
        question: "Who is excluded from the LemFi Europe campaign?",
        answer:
          "Existing users, unverified accounts, self-referrals, duplicate-account referrals, and referrals sharing the same device, IP address, payment method, or household may be excluded under LemFi's campaign terms."
      }
    ],
    lastUpdated: "2026-07-05"
  },
  {
    name: "Xe",
    slug: "xe",
    website: "https://www.xe.com/",
    description:
      "Xe provides international money transfers and currency tools for personal and business users in supported countries.",
    referralCode: null,
    referralLink: null,
    welcomeBonus:
      "Xe publishes a US Refer a Friend landing page that says referrers get $50 for each referral and both users get to choose a gift card when the friend's transfer qualifies. Bonus Foundry does not currently list its own Xe referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Canada", "Australia", "New Zealand"],
    eligibleUsers:
      "Eligibility depends on Xe's active referral or promotion terms, sender country, account type, transfer route, verification status, and whether the user is new to the relevant Xe flow.",
    requirements: [
      "Open an eligible Xe account in a supported country.",
      "Use Xe's official Refer a Friend flow or app referral code before the friend's first qualifying transfer when the offer is available.",
      "Complete any identity or account checks.",
      "The friend must enter the referral code on their first qualifying transfer under the US page reviewed."
    ],
    steps: [
      "Open Xe's official Send Money page or US Refer a Friend page and check whether the offer applies in your region.",
      "Create or open your Xe account and select the transfer route.",
      "Review the rate, fee, recipient method, and delivery estimate.",
      "Use the referral code from the Xe app when the friend makes the first qualifying transfer.",
      "Proceed only after confirming the current terms."
    ],
    keyFacts: [
      { label: "Bonus Foundry referral link", value: "No Bonus Foundry-owned Xe referral link is currently published." },
      { label: "US referrer reward", value: "$50 for each referral, subject to qualifying-transfer rules." },
      { label: "Reward type", value: "Gift card selection for both users when the friend's transfer qualifies." },
      { label: "Bonus Foundry code", value: "No Bonus Foundry-owned Xe referral code is currently published." },
      { label: "Main caution", value: "Personal and business transfer terms can differ." },
      { label: "Bonus certainty", value: "Confirm the country-specific Xe referral flow before relying on the US reward." }
    ],
    currentOffer:
      "Xe's official US Refer a Friend landing page says referrers get $50 for each referral and both users receive a gift card choice when the friend's transfer qualifies. The friend must register and enter the code on their first qualifying transfer. Bonus Foundry does not currently publish its own Xe referral code.",
    lastOfferUpdate: "2026-07-05",
    lastManualReview: "2026-07-05",
    referral: {
      hasProgram:
        "Xe's official Send Money page links to a US Refer a Friend landing page.",
      code: null,
      link: null,
      welcomeBonus:
        "The US page says the referrer gets $50 for each referral and both users get to choose a gift card if the friend makes a qualifying transfer.",
      minimumTransfer: "Xe's US landing page reviewed says the friend must make a first qualifying transfer, but Bonus Foundry could not verify a fixed minimum amount from the static page.",
      expiry: "Offer-specific; check Xe's current referral or promotion terms.",
      payoutTiming: "The US landing page says both users get rewarded if the friend's transfer qualifies; exact processing timing was not verified from the static page.",
      limitations: [
        "Bonus Foundry does not currently publish a Xe referral code.",
        "The friend must enter the code on the first qualifying transfer under the US page reviewed.",
        "Personal and business account terms may differ.",
        "Country, route, verification, and transfer amount can affect eligibility.",
        "The US referral page should not be assumed to apply to non-US sender accounts without local confirmation."
      ]
    },
    availability: {
      sendingCountries: ["Austria", "Belgium", "Bulgaria", "Canada", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Gibraltar", "Greece", "Guernsey", "Hungary", "Ireland", "Isle of Man", "Italy", "Jersey", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Spain", "Sweden", "Switzerland", "United Kingdom", "United States", "Australia", "New Zealand"],
      receivingCountries: ["200+ countries and territories according to Xe's official money-transfer messaging"],
      currencies: ["Route-specific currencies shown in Xe's transfer flow"],
      paymentMethods: ["Bank or wire transfer", "Bank debit including ACH in the US", "Debit card", "Credit card", "Interac for CAD where available", "Express bank transfer where available", "Bill payment in Canada where supported by bank", "Osko for AUD where available", "Recipient bank account", "Cash pickup where available", "Mobile wallet where available"],
      countryAvailability: [
        {
          country: "United States",
          supported: "Xe's US-facing Send Money page exposes the Refer a Friend entry point and a US referral landing page.",
          paymentMethods: ["Bank or wire transfer", "ACH", "Debit card", "Credit card", "Recipient bank account", "Cash pickup where available", "Mobile wallet where available"],
          notes: "The US referral page says the referrer gets $50 per referral and both users choose a gift card after a qualifying transfer."
        },
        {
          country: "United Kingdom",
          supported: "Xe supports UK money-transfer users, subject to route, currency, and verification requirements.",
          paymentMethods: ["Bank or wire transfer", "Debit card", "Credit card", "Express bank transfer where available", "Recipient bank account", "Cash pickup where available"],
          notes: "Do not assume a US referral landing page applies to UK users without checking Xe's local flow."
        },
        {
          country: "France",
          supported: "Xe's Help Centre lists France among countries where users can register to send money.",
          paymentMethods: ["Bank or wire transfer", "Debit card", "Credit card", "Express bank transfer where available", "Recipient bank account", "Cash pickup where available"],
          notes: "Check whether the referral entry point and terms are displayed for France before sending."
        }
      ]
    },
    verification: {
      identityRequired: "Xe may ask for an identity document and selfie because it is a regulated financial service.",
      proofOfAddress: "Xe may request proof of address or source-of-funds documents depending on transfer amount, sending country, and receiving country.",
      bankVerification: "Funding and recipient checks vary by payment method, bank account, card, route, account type, and region."
    },
    support: {
      supportEmail: null,
      supportUrl: "https://www.xe.com/",
      helpCenter: "Use Xe's official Help Centre or logged-in support flow for account-specific referral, payment, and transfer questions."
    },
    officialResources: [
      { label: "Xe official website", href: "https://www.xe.com/" },
      { label: "Xe Send Money", href: "https://www.xe.com/send-money/" },
      { label: "Xe US Refer a Friend", href: "https://www.xe.com/mt/us-money-transfer/lp/refer-a-friend-onsite/" },
      { label: "Xe Help Centre", href: "https://help.xe.com/hc/en-gb" },
      { label: "Xe payment methods", href: "https://help.xe.com/hc/en-gb/articles/360019845777-Which-payment-methods-can-I-use" },
      { label: "Xe supported sender countries", href: "https://help.xe.com/hc/en-gb/articles/4405589187985-Can-I-register-to-send-money-from-my-country" },
      { label: "Xe verification", href: "https://help.xe.com/hc/en-gb/articles/360019467417-How-do-I-complete-verification" }
    ],
    sources: [
      {
        label: "Xe official website",
        url: "https://www.xe.com/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe Send Money page",
        url: "https://www.xe.com/send-money/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe US Refer a Friend",
        url: "https://www.xe.com/mt/us-money-transfer/lp/refer-a-friend-onsite/",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe Help Centre",
        url: "https://help.xe.com/hc/en-gb",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe payment methods",
        url: "https://help.xe.com/hc/en-gb/articles/360019845777-Which-payment-methods-can-I-use",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe supported sender countries",
        url: "https://help.xe.com/hc/en-gb/articles/4405589187985-Can-I-register-to-send-money-from-my-country",
        lastReviewed: "2026-07-05",
        confidence: "official"
      },
      {
        label: "Xe verification",
        url: "https://help.xe.com/hc/en-gb/articles/360019467417-How-do-I-complete-verification",
        lastReviewed: "2026-07-05",
        confidence: "official"
      }
    ],
    ineligibleUsers: [
      "Users expecting a Bonus Foundry-owned Xe referral link when none is published here.",
      "Users whose country or account type does not show Xe's current Refer a Friend terms.",
      "Friends who do not enter the referral code on their first qualifying transfer under the US page reviewed.",
      "Users whose transfer route, amount, payment method, verification status, or timing does not match Xe's displayed offer."
    ],
    bonusChecklist: [
      "Open Xe's official Send Money or Refer a Friend flow.",
      "Confirm whether the referral offer is available for your country and account type.",
      "Get the referral code from the Xe app when using the official referral program.",
      "Make sure the friend enters the code on the first qualifying transfer.",
      "Review the minimum transfer, expiry, reward timing, and qualifying route in the live flow.",
      "Complete any identity or payment verification Xe requests.",
      "Keep the offer terms and transfer receipt."
    ],
    researchProfile: {
      completeness:
        "Reviewed Xe's official website, Send Money page, US Refer a Friend landing page, Help Centre, payment-method article, supported sender country article, and verification article for referral, reward, eligibility, verification, countries, payment methods, troubleshooting, support, FAQ, and official documentation.",
      confidence: "high",
      sourcesReviewed: ["Xe official website", "Xe Send Money page", "Xe US Refer a Friend", "Xe Help Centre", "Xe payment methods", "Xe supported sender countries", "Xe verification"],
      remainingItems: [
        "Bonus Foundry does not currently publish an owner Xe referral code.",
        "Xe's exact minimum qualifying transfer, reward processing time, and full referral terms were not visible in the static US landing page reviewed.",
        "Non-US referral reward amounts and availability should be checked in the local Xe referral flow before publishing a fixed value.",
        "Personal and business transfer terms should be verified separately for local pages."
      ]
    },
    updateHistory: [
      {
        date: "2026-07-05",
        note: "Verified Xe's US Refer a Friend page, $50 referrer reward, gift-card reward type, app-code flow, first qualifying transfer requirement, supported sender countries, payment-method matrix, verification requirements, and support channels."
      },
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
      "Assuming Xe's public referral entry point means Bonus Foundry has a publishable Xe referral code.",
      "Forgetting that the friend must enter the code on the first qualifying transfer under the US page reviewed."
    ],
    missingBonus: [
      "Confirm the offer was visible for your account type.",
      "Check transfer amount, currency route, referral-code entry, and verification status.",
      "Contact Xe support if an active offer appeared but did not apply."
    ],
    countryNotes: [
      "Xe availability and account features vary by country.",
      "Business transfers may have different rules from personal transfers.",
      "Currency route and minimum transfer amount can affect eligibility.",
      "A public US Refer a Friend page should still be checked against the user's local Xe flow."
    ],
    faq: [
      {
        question: "Does Xe have a public referral program?",
        answer: "Yes. Xe's official Send Money page links to a US Refer a Friend landing page. Bonus Foundry does not currently publish its own Xe referral code."
      },
      {
        question: "How much is the Xe US referral reward?",
        answer: "Xe's US Refer a Friend page says referrers get $50 for each referral and both users get to choose a gift card when the friend's transfer qualifies."
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
    lastUpdated: "2026-07-05"
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
  const website = provider.website ?? provider.referralLink ?? "";
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
