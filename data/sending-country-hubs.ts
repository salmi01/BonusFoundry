import { corridors } from "@/data/corridors";
import { providers } from "@/data/providers";

export type SendingCountryHub = {
  slug: string;
  name: string;
  shortName: string;
  currency: string;
  title: string;
  summary: string;
  providerSlugs: string[];
  corridorSlugs: string[];
  keyFacts: { label: string; value: string }[];
  paymentMethods: string[];
  receivingMethods: string[];
  verificationRequirements: string[];
  chooseProvider: { useCase: string; guidance: string; providerSlugs: string[] }[];
  commonMistakes: string[];
  faq: { question: string; answer: string }[];
  relatedGuideSlugs: string[];
  lastUpdated: string;
};

export const sendingCountryHubs: SendingCountryHub[] = [
  {
    slug: "usa",
    name: "United States",
    shortName: "USA",
    currency: "USD",
    title: "Send money from the United States: providers, bonuses, and corridors",
    summary:
      "United States users should compare money transfer providers by destination coverage, payment method, receiving method, verification requirements, total received amount, and whether a referral or welcome reward applies to the exact route.",
    providerSlugs: [
      "remitly",
      "wise",
      "sendwave",
      "taptap-send",
      "ria",
      "western-union",
      "moneygram",
      "worldremit",
      "paysend",
      "lemfi",
      "xe"
    ],
    corridorSlugs: [
      "usa-to-morocco",
      "usa-to-egypt",
      "usa-to-ghana",
      "usa-to-ethiopia",
      "usa-to-kenya",
      "usa-to-nigeria"
    ],
    keyFacts: [
      { label: "Sending country", value: "United States" },
      { label: "Sender currency", value: "USD" },
      {
        label: "Provider choice",
        value: "Use the destination, receiving method, fee, exchange rate, and live reward terms to choose a provider."
      },
      {
        label: "Bonus rule",
        value: "A US account can be eligible only when the provider's current terms include the route, amount, and delivery method."
      }
    ],
    paymentMethods: [
      "Debit card or credit card where the provider supports card funding.",
      "Bank account, ACH, or local account debit where available in the provider flow.",
      "Wire or bank transfer where the provider accepts it for US accounts.",
      "Cash payment at an agent location where agent transfers are supported."
    ],
    receivingMethods: [
      "Bank deposit where the destination route supports account delivery.",
      "Mobile wallet or mobile money where the recipient country and provider support it.",
      "Cash pickup where an agent-network provider supports the destination.",
      "Card, local account, airtime, or other delivery methods only when shown in the provider's live route flow."
    ],
    verificationRequirements: [
      "US senders may need identity verification before the first transfer is released.",
      "Providers may request payment verification, proof of address, or source-of-funds information depending on amount and route.",
      "Recipients using cash pickup may need a valid ID and pickup details that match the transfer record.",
      "Verification can delay both delivery and referral or welcome reward timing."
    ],
    chooseProvider: [
      {
        useCase: "Best for checking referral rewards",
        guidance:
          "Start with providers where Bonus Foundry lists an owned code or link, then confirm the US route is eligible in the live terms.",
        providerSlugs: ["remitly", "taptap-send", "western-union", "paysend"]
      },
      {
        useCase: "Best for bank deposits",
        guidance:
          "Compare providers that show bank-account delivery for the destination and use the total received amount, not only the visible fee.",
        providerSlugs: ["wise", "remitly", "worldremit", "xe"]
      },
      {
        useCase: "Best for mobile wallet transfers",
        guidance:
          "Use wallet-focused providers only when the destination route shows the recipient wallet or mobile money option.",
        providerSlugs: ["sendwave", "lemfi", "worldremit", "remitly"]
      },
      {
        useCase: "Best for cash pickup",
        guidance:
          "Use agent-network providers when the recipient needs cash collection and can meet local pickup ID requirements.",
        providerSlugs: ["western-union", "moneygram", "ria", "worldremit"]
      },
      {
        useCase: "Best for broad country coverage",
        guidance:
          "Use broad global providers as backups when specialist apps do not support the destination or payout method.",
        providerSlugs: ["western-union", "moneygram", "ria", "xe"]
      },
      {
        useCase: "Best for first-time users",
        guidance:
          "Choose the provider with the clearest signup, verification, payment method, and recipient setup for the destination.",
        providerSlugs: ["remitly", "wise", "sendwave", "worldremit"]
      }
    ],
    commonMistakes: [
      "Choosing a provider only because a referral code exists.",
      "Assuming a US referral offer applies to every destination country.",
      "Comparing transfer fees without comparing the exchange rate and final received amount.",
      "Creating an account before checking whether the reward must be applied during signup or first transfer.",
      "Ignoring receiving-method differences such as bank deposit, mobile wallet, and cash pickup."
    ],
    faq: [
      {
        question: "Which money transfer providers are available from the United States?",
        answer:
          "Bonus Foundry tracks US-relevant providers including Remitly, Wise, Sendwave, Taptap Send, Ria, Western Union, MoneyGram, WorldRemit, Paysend, LemFi, and Xe. Availability still depends on destination, payment method, receiving method, and live provider terms."
      },
      {
        question: "Which USA corridors does Bonus Foundry cover?",
        answer:
          "Bonus Foundry currently covers USA to Morocco, Egypt, Ghana, Ethiopia, Kenya, and Nigeria as dedicated corridor pages."
      },
      {
        question: "Can a US referral bonus apply to any destination?",
        answer:
          "No. A US referral or welcome reward applies only when the provider's current terms include the sender account, destination, amount, payment method, and receiving method."
      },
      {
        question: "What should US users check before signing up?",
        answer:
          "Check destination support, payment method, receiving method, total cost, verification requirements, reward timing, and whether the bonus must be applied before signup or the first transfer."
      }
    ],
    relatedGuideSlugs: [
      "how-referral-codes-work",
      "how-to-claim-a-welcome-bonus",
      "how-to-avoid-missing-signup-bonus",
      "what-to-check-before-using-money-transfer-referral-link"
    ],
    lastUpdated: "2026-07-07"
  }
];

export function getSendingCountryHub(slug: string) {
  return sendingCountryHubs.find((hub) => hub.slug === slug);
}

export function getSendingCountryHubProviders(hub: SendingCountryHub) {
  return providers.filter((provider) => hub.providerSlugs.includes(provider.slug));
}

export function getSendingCountryHubCorridors(hub: SendingCountryHub) {
  return corridors.filter((corridor) => hub.corridorSlugs.includes(corridor.slug));
}
