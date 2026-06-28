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

export const providers: Provider[] = [
  {
    name: "Taptap Send",
    slug: "taptap-send",
    description:
      "Taptap Send is a money transfer app used for sending money from countries such as France, the UK, the US, Canada, and parts of Europe to selected destinations in Africa, Asia, and Latin America.",
    referralCode: "BONUSFOUNDRY",
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
      { label: "Referral code", value: "BONUSFOUNDRY, if the signup flow accepts a code." },
      { label: "Bonus certainty", value: "Not guaranteed. Eligibility depends on current Taptap Send rules." },
      { label: "When to apply", value: "Before or during signup, not after completing the first transfer." }
    ],
    currentOffer:
      "If you do not already have a Taptap Send referral code, you can use the code listed on this page. The exact bonus amount, qualifying transfer value, payout timing, and eligible corridors can change, so treat the in-app terms as the source of truth.",
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
    description:
      "Wise offers international transfers, multi-currency balances, debit card features, and local account details in many markets.",
    referralCode: "WISE-REF",
    referralLink: "https://wise.com/",
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
      { label: "Referral code", value: "WISE-REF, if Wise accepts it in your country or flow." },
      { label: "Bonus certainty", value: "Variable. Wise may not show the same referral offer to every user." },
      { label: "When to apply", value: "Before signup through the eligible invitation flow." }
    ],
    currentOffer:
      "Wise referral offers are not uniform across all countries. The reward can depend on the inviting account, the new user's country, the product used, and the qualifying transfer or account action.",
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
    description:
      "Remitly is an international remittance app for sending money to bank accounts, mobile wallets, and cash pickup locations in supported countries.",
    referralCode: "REMIT-BONUS",
    referralLink: "https://www.remitly.com/",
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
      { label: "Referral code", value: "REMIT-BONUS, if Remitly accepts a code in your signup flow." },
      { label: "Bonus certainty", value: "Not guaranteed. Campaigns and corridors can change." },
      { label: "When to apply", value: "Before the first qualifying transfer." }
    ],
    currentOffer:
      "Remitly's visible offer may be a referral reward, a first-transfer promotion, or no offer at all. Check the live transfer screen before sending because the bonus can be affected by destination country, payment method, and transfer amount.",
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
    description:
      "Sendwave is a money transfer app used for sending funds to selected countries, often with mobile-focused delivery options.",
    referralCode: null,
    referralLink: "https://www.sendwave.com/",
    welcomeBonus:
      "Sendwave offers and referral availability can vary. Bonus Foundry does not currently list a known Sendwave referral code.",
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
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "May vary by country and campaign." },
      { label: "Best check", value: "Review the Sendwave app before the first transfer." },
      { label: "Bonus certainty", value: "Unknown until Sendwave shows live terms." }
    ],
    currentOffer:
      "Bonus Foundry does not currently publish a Sendwave referral code. If Sendwave shows a promotion in the app, follow those terms rather than relying on third-party claims.",
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
        answer: "No. We do not currently list a known Sendwave referral code."
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
    description:
      "Ria is a money transfer provider with online transfers and a large cash pickup network in many countries.",
    referralCode: null,
    referralLink: "https://www.riamoneytransfer.com/",
    welcomeBonus: "Ria promotions may vary by country and channel. Bonus Foundry does not currently list a known Ria referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Eligibility depends on the Ria country site, app flow, and current offer terms.",
    requirements: [
      "Use the correct Ria country website or app for your sender location.",
      "Check for any displayed promo or referral terms before payment.",
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
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "May depend on Ria country site and channel." },
      { label: "Main caution", value: "Cash pickup and online offers may have different terms." },
      { label: "Bonus certainty", value: "Not known unless Ria displays active terms." }
    ],
    currentOffer:
      "Ria may show promotions in specific markets, but Bonus Foundry does not publish a Ria referral code. Check the Ria checkout flow for active terms.",
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
        question: "Does Ria have a referral code on Bonus Foundry?",
        answer: "No. We do not currently list a known Ria referral code."
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
    description:
      "Western Union is a global money transfer provider with online transfers, app transfers, and agent-location services.",
    referralCode: null,
    referralLink: "https://www.westernunion.com/",
    welcomeBonus:
      "Western Union promotions can vary by country, channel, and customer status. Bonus Foundry does not currently list a known Western Union referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Eligibility depends on Western Union's current local offer, transfer channel, and customer history.",
    requirements: [
      "Use the Western Union site or app for your sender country.",
      "Check whether a promo is shown before checkout.",
      "Complete identity checks when required.",
      "Meet any destination, payout method, and transfer amount rules."
    ],
    steps: [
      "Select sender country, recipient country, amount, and delivery method.",
      "Review the fee, exchange rate, and delivery time.",
      "Check whether any promo or reward applies before payment.",
      "Keep your receipt in case support needs to review the transfer."
    ],
    keyFacts: [
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "Often country-specific or channel-specific." },
      { label: "Channels", value: "Online, app, and agent-location terms can differ." },
      { label: "Bonus certainty", value: "Only Western Union's checkout terms can confirm eligibility." }
    ],
    currentOffer:
      "Bonus Foundry does not list a Western Union referral code. If Western Union shows a local promotion or rewards offer, verify the terms in the checkout flow.",
    commonMistakes: [
      "Assuming an online offer applies at agent locations.",
      "Comparing bonuses without comparing total fee and exchange rate.",
      "Using a promotion from a different country site."
    ],
    missingBonus: [
      "Confirm the promo was visible and applied before payment.",
      "Check whether the transfer channel matched the offer.",
      "Contact Western Union support with your receipt if a displayed promotion was not honored."
    ],
    countryNotes: [
      "Western Union coverage is broad, but pricing and delivery options vary by route.",
      "Agent-location and app offers may not be interchangeable.",
      "Some markets use loyalty or rewards programs rather than simple referral codes."
    ],
    faq: [
      {
        question: "Does Western Union have a referral code here?",
        answer: "No. Bonus Foundry does not currently list a known Western Union referral code."
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
    description:
      "MoneyGram provides international transfers through online, mobile, and agent-location channels in many markets.",
    referralCode: null,
    referralLink: "https://www.moneygram.com/",
    welcomeBonus:
      "MoneyGram offers can vary by market and channel. Bonus Foundry does not currently list a known MoneyGram referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Mexico", "India"],
    eligibleUsers: "Eligibility depends on MoneyGram's active local offer, account status, and transfer details.",
    requirements: [
      "Use the correct MoneyGram country site or app.",
      "Check for any displayed promo before checkout.",
      "Complete verification if MoneyGram requires it.",
      "Meet transfer amount, destination, and payout method rules."
    ],
    steps: [
      "Enter sender and recipient country details.",
      "Choose bank, wallet, card, or cash pickup when available.",
      "Review total transfer cost and any visible offer.",
      "Submit the transfer only after confirming the terms."
    ],
    keyFacts: [
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "May vary by local MoneyGram campaign." },
      { label: "Main caution", value: "Online and agent-location offers may differ." },
      { label: "Bonus certainty", value: "Unknown unless MoneyGram confirms it in the flow." }
    ],
    currentOffer:
      "Bonus Foundry does not publish a MoneyGram referral code. Treat any public code claims cautiously and verify current terms with MoneyGram.",
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
      "Country-specific verification rules may affect first transfers."
    ],
    faq: [
      {
        question: "Does MoneyGram have a referral code on this site?",
        answer: "No. Bonus Foundry does not currently list a known MoneyGram referral code."
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
    description:
      "WorldRemit supports international money transfers to bank accounts, mobile wallets, airtime top-up, and cash pickup in selected markets.",
    referralCode: null,
    referralLink: "https://www.worldremit.com/",
    welcomeBonus:
      "WorldRemit promotions and referral availability can change. Bonus Foundry does not currently list a known WorldRemit referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Ghana", "Philippines"],
    eligibleUsers: "New users may qualify only when WorldRemit displays active offer terms for their route.",
    requirements: [
      "Create a new account in a supported sender country.",
      "Check for an active promo or referral prompt before sending.",
      "Meet verification, destination, payment method, and minimum amount rules.",
      "Complete the transfer before any listed expiry date."
    ],
    steps: [
      "Open WorldRemit and select sender and destination countries.",
      "Choose the recipient method and review fees and rate.",
      "Look for any active bonus terms before checkout.",
      "Complete the first transfer only if the terms are clear."
    ],
    keyFacts: [
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "Can vary by corridor and campaign." },
      { label: "Main caution", value: "Delivery method can affect eligibility." },
      { label: "Bonus certainty", value: "Only the live WorldRemit flow can confirm." }
    ],
    currentOffer:
      "Bonus Foundry does not currently publish a WorldRemit referral code. If the app shows a first-transfer offer, review its route, amount, and delivery-method limits.",
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
        question: "Can WorldRemit offers depend on delivery method?",
        answer: "Yes. Bank, wallet, airtime, and cash pickup transfers may have different eligibility rules."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Paysend",
    slug: "paysend",
    description:
      "Paysend offers international transfers and card-to-card or account-based money movement in supported markets.",
    referralCode: null,
    referralLink: "https://paysend.com/",
    welcomeBonus:
      "Paysend promotions may vary by country and campaign. Bonus Foundry does not currently list a known Paysend referral code.",
    supportedCountries: ["United Kingdom", "France", "Germany", "United States", "Morocco", "India"],
    eligibleUsers: "Eligibility depends on Paysend's active local terms and whether the user is new.",
    requirements: [
      "Create a new Paysend account in a supported market.",
      "Check whether Paysend displays a promo or referral field.",
      "Verify identity if required.",
      "Use an eligible transfer method, amount, and destination."
    ],
    steps: [
      "Open Paysend and select your transfer route.",
      "Check the full cost and delivery method before using any offer.",
      "Apply a code only if Paysend presents a valid code field.",
      "Complete the transfer after reviewing the live terms."
    ],
    keyFacts: [
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "May vary by country and product." },
      { label: "Main caution", value: "Card, bank, and wallet flows may have different rules." },
      { label: "Bonus certainty", value: "Unknown unless Paysend confirms live terms." }
    ],
    currentOffer:
      "Bonus Foundry does not publish a Paysend referral code. Check Paysend directly for any active first-transfer or referral offer.",
    commonMistakes: [
      "Assuming a code field means every public code is valid.",
      "Ignoring card or payment-method restrictions.",
      "Using a country-specific offer in the wrong market."
    ],
    missingBonus: [
      "Check whether Paysend accepted the code before transfer.",
      "Confirm the route, amount, and payment method matched the terms.",
      "Contact Paysend support with screenshots and transfer details."
    ],
    countryNotes: [
      "Paysend availability and transfer methods vary by country.",
      "Sender and recipient card rules can affect whether a transfer is eligible.",
      "Some markets may show product-specific offers rather than general referral codes."
    ],
    faq: [
      {
        question: "Does Paysend have a referral code on Bonus Foundry?",
        answer: "No. Bonus Foundry does not currently list a known Paysend referral code."
      },
      {
        question: "Can Paysend offers vary by product?",
        answer: "Yes. Transfer, card, and account features may have different promotional rules."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Xe",
    slug: "xe",
    description:
      "Xe provides international money transfers and currency tools for personal and business users in supported countries.",
    referralCode: null,
    referralLink: "https://www.xe.com/",
    welcomeBonus:
      "Xe referral or welcome offers may vary. Bonus Foundry does not currently list a known Xe referral code.",
    supportedCountries: ["United States", "United Kingdom", "France", "Canada", "Australia", "New Zealand"],
    eligibleUsers: "Eligibility depends on Xe's current terms, account type, transfer route, and user status.",
    requirements: [
      "Open an eligible Xe account in a supported country.",
      "Check whether Xe shows a referral or welcome offer before transfer.",
      "Complete any identity or account checks.",
      "Meet transfer amount, currency, and destination requirements."
    ],
    steps: [
      "Create or open your Xe account and select the transfer route.",
      "Review the rate, fee, recipient method, and delivery estimate.",
      "Check whether an active offer applies to your account.",
      "Proceed only after confirming the current terms."
    ],
    keyFacts: [
      { label: "Known referral code", value: "No known code listed by Bonus Foundry." },
      { label: "Offer status", value: "May vary by account type and country." },
      { label: "Main caution", value: "Personal and business transfer terms can differ." },
      { label: "Bonus certainty", value: "Unknown unless Xe displays active terms." }
    ],
    currentOffer:
      "Bonus Foundry does not currently publish an Xe referral code. Check Xe directly for any current welcome or referral offer before sending.",
    commonMistakes: [
      "Assuming business and personal accounts share the same offer rules.",
      "Comparing a bonus without checking the exchange rate.",
      "Relying on old promo-code pages."
    ],
    missingBonus: [
      "Confirm the offer was visible for your account type.",
      "Check transfer amount, currency route, and verification status.",
      "Contact Xe support if an active offer appeared but did not apply."
    ],
    countryNotes: [
      "Xe availability and account features vary by country.",
      "Business transfers may have different rules from personal transfers.",
      "Currency route and minimum transfer amount can affect eligibility."
    ],
    faq: [
      {
        question: "Does Xe have a referral code here?",
        answer: "No. Bonus Foundry does not currently list a known Xe referral code."
      },
      {
        question: "Should I use Xe only for a bonus?",
        answer:
          "No. Compare rate, fees, delivery timing, account type, and recipient requirements before choosing any provider."
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
    | "relatedGuideSlugs"
    | "relatedFaqSlugs"
    | "relatedCorridorSlugs"
    | "relatedProviderSlugs"
    | "ineligibleUsers"
    | "bonusChecklist"
  >
>;

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

export function getProviderAuthority(provider: Provider): ProviderAuthority {
  const website = provider.website ?? provider.referralLink;
  const hasKnownCode = Boolean(provider.referralCode);
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
    referral: provider.referral ?? {
      hasProgram: hasKnownCode
        ? "Bonus Foundry lists a referral code, but the active program still depends on provider terms."
        : "Bonus Foundry does not currently list a known referral code. The provider may still show local or app-only offers.",
      code: provider.referralCode,
      link: provider.referralLink,
      welcomeBonus: provider.welcomeBonus,
      minimumTransfer: "Unknown. Check the live offer terms before sending money.",
      expiry: "Unknown. Referral and welcome offers can change or expire without notice.",
      payoutTiming: "Unknown. Confirm payout timing in the provider app or support documentation.",
      limitations: provider.requirements
    },
    availability: provider.availability ?? {
      sendingCountries: provider.supportedCountries,
      receivingCountries: ["Not separately verified by Bonus Foundry. Confirm destination coverage with the provider."],
      currencies: ["Not listed by Bonus Foundry. Confirm supported currencies in the transfer flow."],
      paymentMethods: ["Not exhaustively listed by Bonus Foundry. Confirm card, bank, wallet, or cash options in the provider flow."],
      countryAvailability: defaultCountryAvailability(provider)
    },
    verification: provider.verification ?? {
      identityRequired:
        "May be required. Money transfer providers commonly request identity checks before sending or paying rewards.",
      proofOfAddress: "Unknown. Check the provider's current verification prompts for your country.",
      bankVerification: "Unknown. Payment-method checks can depend on country, transfer amount, and provider rules."
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
