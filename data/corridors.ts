import { providers } from "@/data/providers";

export type Corridor = {
  slug: string;
  from: string;
  to: string;
  summary: string;
  providerSlugs: string[];
  requirements: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};

export const corridors: Corridor[] = [
  {
    slug: "france-to-morocco",
    from: "France",
    to: "Morocco",
    summary:
      "People sending money from France to Morocco should compare provider coverage, transfer method, fees, exchange rate, delivery speed, and whether a first-transfer bonus applies.",
    providerSlugs: ["taptap-send", "wise", "remitly"],
    requirements: [
      "A verified account with the transfer provider.",
      "Recipient details for bank, wallet, or cash pickup delivery.",
      "A qualifying first transfer if you want to use a welcome or referral bonus."
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
