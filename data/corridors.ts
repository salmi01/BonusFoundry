import { providers } from "@/data/providers";

export type Corridor = {
  slug: string;
  from: string;
  to: string;
  summary: string;
  providerSlugs: string[];
  keyFacts: { label: string; value: string }[];
  currentOffer: string;
  requirements: string[];
  steps: string[];
  commonMistakes: string[];
  missingBonus: string[];
  countryNotes: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};

export const corridors: Corridor[] = [
  {
    slug: "france-to-morocco",
    from: "France",
    to: "Morocco",
    summary:
      "People sending money from France to Morocco should compare provider coverage, transfer method, fees, exchange rate, delivery speed, and whether a first-transfer bonus or referral offer applies to that exact route.",
    providerSlugs: ["taptap-send", "wise", "remitly", "ria", "western-union", "moneygram"],
    keyFacts: [
      { label: "Route", value: "France to Morocco" },
      { label: "Main bonus risk", value: "A provider may support the route but exclude it from a referral campaign." },
      { label: "What to compare", value: "Total fee, exchange rate, delivery method, transfer speed, and bonus eligibility." },
      { label: "Best timing", value: "Check the referral or welcome offer before creating the account or sending the first transfer." }
    ],
    currentOffer:
      "For France to Morocco transfers, Taptap Send, Wise, Remitly, Ria, Western Union, and MoneyGram are useful providers to check. A referral bonus can depend on sender country, destination, payment method, and minimum transfer amount, so the provider's live transfer screen is the source of truth.",
    requirements: [
      "A verified account with the transfer provider.",
      "Recipient details for bank, wallet, or cash pickup delivery.",
      "A qualifying first transfer if you want to use a welcome or referral bonus.",
      "A route and payout method that the provider includes in the active offer."
    ],
    steps: [
      "Choose two or three providers that support France to Morocco.",
      "Open each provider's live transfer screen and enter the same amount and recipient method.",
      "Compare fee, exchange rate, delivery time, and whether a welcome or referral offer is shown.",
      "Read the minimum amount, expiry, and payout timing before creating an account or sending.",
      "Use the provider that gives the best overall result, not just the largest advertised bonus."
    ],
    commonMistakes: [
      "Choosing a provider only because a referral code exists.",
      "Comparing exchange rates without adding the transfer fee.",
      "Assuming a France signup offer also applies to Morocco as a destination.",
      "Using cash pickup when the bonus requires bank or wallet delivery."
    ],
    missingBonus: [
      "Check whether the referral link or code was applied before signup.",
      "Confirm the Morocco transfer met the minimum amount and payout method rules.",
      "Wait for the provider's stated reward timing if the transfer is still under review.",
      "Contact provider support with transfer receipt, offer screenshot, and referral details if the terms appear to be met."
    ],
    countryNotes: [
      "France-based users may see different offers from UK, US, or Canada users.",
      "Morocco payout options can include bank deposit, cash pickup, or other local methods depending on the provider.",
      "Identity verification may be required before a France to Morocco transfer or reward can be completed."
    ],
    faq: [
      {
        question: "What is the best app to send money from France to Morocco?",
        answer:
          "There is no single best app for every transfer. Compare fees, exchange rate, delivery option, and current bonus terms before sending."
      },
      {
        question: "Do referral bonuses apply to France to Morocco transfers?",
        answer:
          "They can apply when the corridor is eligible and the user meets the provider's current referral terms."
      },
      {
        question: "Should I choose the provider with the biggest bonus?",
        answer:
          "Not automatically. Compare total cost, exchange rate, delivery method, transfer speed, reliability, and eligibility before relying on a bonus."
      }
    ],
    lastUpdated: "2026-06-27"
  }
];

export function getCorridor(slug: string) {
  return corridors.find((corridor) => corridor.slug === slug);
}

export function getCorridorProviders(corridor: Corridor) {
  return providers.filter((provider) => corridor.providerSlugs.includes(provider.slug));
}
