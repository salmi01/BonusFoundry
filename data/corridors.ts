import { providers, type Provider } from "@/data/providers";

export type Corridor = {
  slug: string;
  from: string;
  to: string;
  summary: string;
  providerSlugs: string[];
  keyFacts: { label: string; value: string }[];
  currentOffer: string;
  feeOverview: string[];
  paymentMethods: string[];
  transferSpeed: string[];
  receivingOptions: string[];
  identityVerification: string[];
  supportedCurrencies: string[];
  providerStrengths: string[];
  providerLimitations: string[];
  whenToChoose: string[];
  requirements: string[];
  steps: string[];
  commonMistakes: string[];
  missingBonus: string[];
  countryNotes: string[];
  relatedGuideSlugs: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};

const allComparisonProviderSlugs = [
  "wise",
  "taptap-send",
  "lemfi",
  "remitly",
  "sendwave",
  "ria",
  "paysend",
  "western-union",
  "moneygram",
  "worldremit"
];

const defaultGuides = [
  "how-referral-codes-work",
  "how-to-claim-a-welcome-bonus",
  "how-to-avoid-missing-signup-bonus",
  "what-to-check-before-using-money-transfer-referral-link"
];

function routeTitle(from: string, to: string) {
  return `${from} to ${to}`;
}

function corridor({
  slug,
  from,
  to,
  providerSlugs,
  focus,
  receivingOptions,
  countryNotes,
  faq
}: {
  slug: string;
  from: string;
  to: string;
  providerSlugs: string[];
  focus: string;
  receivingOptions: string[];
  countryNotes: string[];
  faq: { question: string; answer: string }[];
}): Corridor {
  const title = routeTitle(from, to);

  return {
    slug,
    from,
    to,
    summary: `${title} transfers should be compared by route availability, total cost, delivery method, identity checks, and whether the provider shows a corridor-eligible welcome or referral offer. ${focus}`,
    providerSlugs,
    keyFacts: [
      { label: "Route", value: title },
      { label: "Main user need", value: focus },
      {
        label: "Bonus risk",
        value: "A provider can support a transfer route without including that route in a referral or welcome campaign."
      },
      {
        label: "Best comparison method",
        value: "Enter the same amount, sender country, destination, and receiving method in each provider's live flow."
      }
    ],
    currentOffer:
      `${title} referral and welcome rewards depend on the provider, sender country, destination, transfer amount, payment method, delivery method, and account status. Bonus Foundry uses provider-level reward data and does not invent corridor-specific reward amounts.`,
    feeOverview: [
      `${title} transfer fees vary by provider, payment method, delivery method, amount, and exchange rate.`,
      "Card-funded transfers can cost more than bank-funded transfers, but they may be faster.",
      "Cash pickup can have different pricing from bank, wallet, or card delivery.",
      "Compare the total received amount instead of comparing only the visible transfer fee."
    ],
    paymentMethods: [
      "Debit card or credit card where the provider supports card funding.",
      "Bank transfer or local account debit where available for the sender country.",
      "Cash payment at an agent location where the provider supports agent transfers.",
      "Mobile wallet or local payment method only when the provider shows it in the route flow."
    ],
    transferSpeed: [
      "Card-funded transfers can be fast, but speed still depends on provider review, receiving method, and destination processing.",
      "Bank-funded transfers can be cheaper but may take longer than card-funded transfers.",
      "Cash pickup can be fast after approval, but identity checks or agent availability can delay completion.",
      "First transfers are more likely to be delayed by verification than repeat transfers."
    ],
    receivingOptions,
    identityVerification: [
      "The sender may need identity verification before the first transfer is released.",
      "The provider may request proof of address, source of funds, payment verification, or additional review based on country and amount.",
      "Cash pickup recipients may need a valid ID and exact pickup details that match the transfer record.",
      "Verification can affect both transfer speed and referral or welcome reward timing."
    ],
    supportedCurrencies: [
      "Sender currency depends on the country where the account is opened.",
      "Recipient currency and payout currency depend on the destination route and receiving method.",
      "Exchange rate comparison should use the same transfer amount and delivery method across providers.",
      "Confirm the final route currency in the provider's live flow before sending."
    ],
    providerStrengths: [
      "Digital-first providers can be useful when the recipient can receive by bank account, wallet, or card.",
      "Agent-network providers can be useful when cash pickup is more important than a digital-only flow.",
      "Referral-code providers can be useful for first transfers only when the route and account meet the live terms.",
      "Broad global providers can be useful as backup options when a specialist provider does not support the exact route."
    ],
    providerLimitations: [
      "A provider listed for comparison is not guaranteed to support every payout method on this corridor.",
      "Referral rewards can be unavailable even when the transfer route itself is available.",
      "Published country coverage can change and should be checked before signup or payment.",
      "Bonus Foundry does not treat an official provider referral page as a Bonus Foundry-owned referral link."
    ],
    whenToChoose: [
      "For lowest fees, compare the total received amount after fees and exchange rate rather than the advertised transfer fee alone.",
      "For fastest delivery, compare card-funded, wallet, and cash pickup routes against slower bank-funded routes in the live flow.",
      "For the best first-transfer reward, use only a Bonus Foundry-owned code or link when the provider's live terms match this route.",
      "For bank transfer, choose a provider that shows bank deposit for the destination and a funding method you can verify.",
      "For mobile wallet, choose a provider that shows wallet delivery for the destination and recipient account type.",
      "For cash pickup, choose an agent-network provider and verify recipient ID requirements before sending.",
      "For ease of use, choose the provider with the clearest signup, payment, verification, and recipient setup for your route."
    ],
    requirements: [
      "A sender account in the country shown on this corridor page.",
      "Recipient details that match the selected delivery method.",
      "A payment method accepted for the sender country and transfer amount.",
      "Identity verification when the provider requests it.",
      "A qualifying first transfer if the user wants to rely on a welcome or referral reward."
    ],
    steps: [
      `Open two or three providers from the ${title} comparison list.`,
      "Enter the same transfer amount, destination, and receiving method in each provider.",
      "Compare total fee, exchange rate, delivery estimate, payment method, and verification prompts.",
      "Check whether the provider shows a referral, welcome, or first-transfer offer for the exact route.",
      "Choose the provider based on total outcome, not only the advertised reward."
    ],
    commonMistakes: [
      "Choosing a provider only because a referral code exists.",
      "Comparing exchange rates without adding the transfer fee.",
      "Assuming a sender-country offer applies to every destination.",
      "Ignoring payout method differences such as bank deposit, wallet delivery, and cash pickup.",
      "Creating an account before checking whether the bonus must be applied during signup."
    ],
    missingBonus: [
      "Check whether the referral code or Bonus Foundry-owned link was used before signup or the first transfer.",
      "Confirm that the transfer amount, destination, delivery method, payment method, and timing matched the displayed terms.",
      "Wait for the provider's stated reward timing if the transfer is still pending or under review.",
      "Save the offer screen, transfer receipt, and referral details before contacting support.",
      "Contact the provider through its official support channel if the displayed terms appear to be met."
    ],
    countryNotes,
    relatedGuideSlugs: defaultGuides,
    faq,
    lastUpdated: "2026-07-07"
  };
}

export const corridors: Corridor[] = [
  corridor({
    slug: "france-to-morocco",
    from: "France",
    to: "Morocco",
    providerSlugs: ["taptap-send", "wise", "remitly", "ria", "western-union", "moneygram", "worldremit"],
    focus:
      "This route often needs a practical comparison between digital transfers, cash pickup, bank deposit, and first-transfer referral eligibility.",
    receivingOptions: [
      "Bank deposit where supported by the selected provider.",
      "Cash pickup where an agent-network provider supports Morocco.",
      "Mobile wallet or local account delivery only when shown in the provider's live route flow."
    ],
    countryNotes: [
      "France-based users may see different offers from UK, US, or Canada users.",
      "Morocco payout options can include bank deposit, cash pickup, or local account delivery depending on the provider.",
      "A France signup offer should not be assumed to include Morocco unless the live route terms show it."
    ],
    faq: [
      {
        question: "What is the best app to send money from France to Morocco?",
        answer:
          "There is no single best app for every transfer. Compare total cost, exchange rate, delivery option, speed, and current bonus terms before sending."
      },
      {
        question: "Do referral bonuses apply to France to Morocco transfers?",
        answer:
          "They can apply only when the corridor, sender account, transfer amount, and delivery method meet the provider's current referral terms."
      },
      {
        question: "Should I choose the provider with the biggest bonus?",
        answer:
          "Not automatically. A smaller or unavailable bonus can still be better if the exchange rate, fee, delivery method, or speed is stronger."
      }
    ]
  }),
  corridor({
    slug: "france-to-algeria",
    from: "France",
    to: "Algeria",
    providerSlugs: ["lemfi", "western-union", "moneygram", "ria", "remitly", "worldremit"],
    focus:
      "This route is mainly a coverage and pickup-method question, because some digital providers may not expose the same Algeria payout options in static documentation.",
    receivingOptions: [
      "Cash pickup where an agent-network provider supports Algeria.",
      "Bank deposit only when the selected provider shows it for Algeria.",
      "Digital wallet delivery only when shown in the live transfer flow."
    ],
    countryNotes: [
      "France to Algeria users should verify destination availability before creating an account for a bonus.",
      "Cash pickup may be more relevant than a digital-only provider if the recipient cannot receive by bank or wallet.",
      "Check the live provider flow for Algeria payout methods before creating an account for a bonus."
    ],
    faq: [
      {
        question: "Which providers should I check first for France to Algeria?",
        answer:
          "Start with providers that have broad agent or global transfer coverage, then verify the exact Algeria payout method in the live flow."
      },
      {
        question: "Can I rely on a France referral code for Algeria?",
        answer:
          "Only if the provider's live terms include the France to Algeria route, transfer amount, and receiving method."
      }
    ]
  }),
  corridor({
    slug: "france-to-tunisia",
    from: "France",
    to: "Tunisia",
    providerSlugs: ["lemfi", "western-union", "moneygram", "ria", "remitly", "worldremit"],
    focus:
      "This route should be checked for cash pickup, bank deposit, and whether first-transfer offers exclude specific payout methods.",
    receivingOptions: [
      "Cash pickup where supported by the provider.",
      "Bank deposit where the provider shows a Tunisia bank route.",
      "Wallet or local delivery only when visible in the live route."
    ],
    countryNotes: [
      "Tunisia availability can differ by provider and payout method.",
      "LemFi should be checked in the live France to Tunisia flow when the official site shows Tunisia as an available destination.",
      "A provider may support France as a sender country but still not show every Tunisia receiving method.",
      "Identity review can be more important on first transfers than repeat transfers."
    ],
    faq: [
      {
        question: "What should I compare for France to Tunisia?",
        answer:
          "Compare total cost, exchange rate, receiving method, transfer speed, verification prompts, and whether the offer applies to Tunisia."
      },
      {
        question: "Is cash pickup always eligible for referral rewards?",
        answer:
          "No. Some provider offers can depend on delivery method, so confirm whether cash pickup is included before sending."
      }
    ]
  }),
  corridor({
    slug: "france-to-senegal",
    from: "France",
    to: "Senegal",
    providerSlugs: ["lemfi", "taptap-send", "remitly", "sendwave", "ria", "western-union", "moneygram", "worldremit"],
    focus:
      "This route often requires comparing mobile money, cash pickup, and bank delivery rather than looking only at the referral reward.",
    receivingOptions: [
      "Mobile money where supported by the provider.",
      "Cash pickup through agent-network providers.",
      "Bank deposit where the provider shows a Senegal bank route.",
      "Airtime or wallet-related options only when the provider offers them for the route."
    ],
    countryNotes: [
      "Senegal routes can involve mobile money, cash pickup, or bank delivery depending on provider.",
      "LemFi should be checked in the live France to Senegal flow when the official site shows Senegal as an available destination.",
      "Sendwave and Taptap Send may be useful to check when the recipient can receive through supported digital channels.",
      "Provider-specific destination and payout rules should be checked before relying on a bonus."
    ],
    faq: [
      {
        question: "What receiving method matters most for France to Senegal?",
        answer:
          "The recipient's usable method matters most. Compare mobile money, cash pickup, and bank deposit before comparing rewards."
      },
      {
        question: "Can a referral bonus fail on France to Senegal?",
        answer:
          "Yes. The bonus can fail if the route, payout method, amount, or account status does not match the live terms."
      }
    ]
  }),
  corridor({
    slug: "france-to-cote-divoire",
    from: "France",
    to: "Cote d'Ivoire",
    providerSlugs: ["lemfi", "taptap-send", "remitly", "sendwave", "ria", "western-union", "moneygram", "worldremit"],
    focus:
      "This route should prioritize receiving method support, because mobile money, cash pickup, and bank delivery can have different availability and offer rules.",
    receivingOptions: [
      "Mobile money where available for the selected provider.",
      "Cash pickup through agent-network providers.",
      "Bank deposit where the provider exposes a Cote d'Ivoire bank route."
    ],
    countryNotes: [
      "Cote d'Ivoire delivery options can vary substantially by provider.",
      "LemFi should be checked in the live France to Cote d'Ivoire flow when the official site shows Cote d'Ivoire as an available destination.",
      "A digital provider can be useful when the recipient has a supported wallet or account.",
      "An agent-network provider can be useful when the recipient needs cash pickup."
    ],
    faq: [
      {
        question: "Should I compare mobile money for France to Cote d'Ivoire?",
        answer:
          "Yes. If the recipient can use mobile money, compare that option against cash pickup and bank deposit in the live provider flow."
      },
      {
        question: "Do all providers support Cote d'Ivoire?",
        answer:
          "No. Use the corridor comparison table as a shortlist, then confirm the exact Cote d'Ivoire route in the provider flow."
      }
    ]
  }),
  corridor({
    slug: "belgium-to-morocco",
    from: "Belgium",
    to: "Morocco",
    providerSlugs: ["lemfi", "wise", "ria", "western-union", "moneygram", "worldremit", "remitly"],
    focus:
      "This route is useful for users comparing EU-funded transfers to Morocco, especially where France-specific offers do not apply to Belgium accounts.",
    receivingOptions: [
      "Bank deposit where supported for Morocco.",
      "Cash pickup through agent-network providers.",
      "Wallet or local account delivery only when shown for Belgium to Morocco."
    ],
    countryNotes: [
      "Belgium users should not assume France referral or welcome terms apply to their account.",
      "LemFi should be checked in the live Belgium to Morocco flow when the official site shows Morocco as an available destination.",
      "EU sender-country rules can still differ by provider, even when the destination is the same.",
      "Morocco receiving options should be checked by payout method before signup."
    ],
    faq: [
      {
        question: "Can I use a France offer from Belgium to Morocco?",
        answer:
          "Do not assume that. Belgium accounts should rely on the offer shown in the provider's Belgium flow."
      },
      {
        question: "What providers should Belgium to Morocco users compare?",
        answer:
          "Compare broad global providers, bank-focused providers, and agent-network providers, then verify live Belgium to Morocco availability."
      }
    ]
  }),
  corridor({
    slug: "spain-to-morocco",
    from: "Spain",
    to: "Morocco",
    providerSlugs: ["lemfi", "wise", "ria", "western-union", "moneygram", "remitly", "worldremit"],
    focus:
      "This route should be checked for Spain-specific account eligibility and Morocco receiving method support, not copied from France or Belgium pages.",
    receivingOptions: [
      "Bank deposit where supported.",
      "Cash pickup where agent-network providers support Morocco.",
      "Wallet or local delivery only when visible in the Spain to Morocco route."
    ],
    countryNotes: [
      "Spain sender accounts can have different payment methods and referral terms from France or Belgium accounts.",
      "LemFi should be checked in the live Spain to Morocco flow when the official site shows Morocco as an available destination.",
      "Morocco cash pickup and bank deposit options may not have the same cost or speed.",
      "Bonus eligibility should be checked before creating a new provider account."
    ],
    faq: [
      {
        question: "Is Spain to Morocco the same as France to Morocco?",
        answer:
          "No. The destination may be the same, but sender-country payment methods, fees, verification, and offers can differ."
      },
      {
        question: "What should Spain users check first?",
        answer:
          "Check whether the provider supports Spain as the sender country and Morocco as the destination with the desired receiving method."
      }
    ]
  }),
  corridor({
    slug: "canada-to-morocco",
    from: "Canada",
    to: "Morocco",
    providerSlugs: ["lemfi", "wise", "western-union", "moneygram", "remitly", "worldremit", "ria"],
    focus:
      "This route should focus on Canadian payment methods, Morocco payout options, and whether any offer is limited to a different sender country.",
    receivingOptions: [
      "Bank deposit where supported for Morocco.",
      "Cash pickup through agent-network providers.",
      "Local wallet or account delivery only when shown in the provider's Canada to Morocco flow."
    ],
    countryNotes: [
      "Canada users can see different funding methods and offer rules from EU or US users.",
      "LemFi should be checked in the live Canada to Morocco flow when the official site shows Morocco as an available destination.",
      "Canadian bank or card funding can change total transfer cost and speed.",
      "Do not rely on US-only referral terms for a Canada sender account."
    ],
    faq: [
      {
        question: "Can Canada users use US-only referral offers?",
        answer:
          "No. A US-only offer should not be treated as available to Canada accounts unless the provider's Canada flow shows matching terms."
      },
      {
        question: "What matters most for Canada to Morocco?",
        answer:
          "Compare Canadian funding method, exchange rate, total fee, Morocco receiving method, and verification requirements."
      }
    ]
  }),
  corridor({
    slug: "usa-to-morocco",
    from: "USA",
    to: "Morocco",
    providerSlugs: ["remitly", "sendwave", "ria", "western-union", "moneygram", "worldremit", "wise", "paysend", "xe"],
    focus:
      "This route should compare US funding methods, Morocco receiving options, and whether a provider rewards only the first qualifying transfer.",
    receivingOptions: [
      "Bank deposit where the provider supports Morocco.",
      "Cash pickup through providers with agent-network support.",
      "Mobile wallet or local account delivery only when the route flow shows it.",
      "Card or account delivery where supported by the selected provider."
    ],
    countryNotes: [
      "US sender accounts may have card, bank, ACH, or cash funding options depending on provider.",
      "Morocco receiving options can differ between bank deposit, cash pickup, wallet, and card delivery.",
      "US-only referral terms still need destination, amount, and payout-method confirmation."
    ],
    faq: [
      {
        question: "Which providers should USA to Morocco users compare?",
        answer:
          "Compare digital providers, agent-network providers, and broad global providers. Use the live flow to confirm Morocco payout method, total received amount, and reward eligibility."
      },
      {
        question: "Can a US referral offer apply to USA to Morocco?",
        answer:
          "Yes, but only when the provider's current terms include the US sender account, Morocco route, amount, payment method, and receiving method."
      }
    ]
  }),
  corridor({
    slug: "usa-to-egypt",
    from: "USA",
    to: "Egypt",
    providerSlugs: ["lemfi", "remitly", "ria", "western-union", "moneygram", "worldremit", "paysend", "xe"],
    focus:
      "This route should prioritize live route confirmation, because provider-level coverage can be broad while Egypt payout methods vary by transfer flow.",
    receivingOptions: [
      "Bank deposit where supported for Egypt.",
      "Cash pickup through providers with agent-network support.",
      "Wallet or local delivery only when visible in the USA to Egypt route.",
      "Card or account delivery only when the selected provider shows it."
    ],
    countryNotes: [
      "USA to Egypt users should check whether the provider shows Egypt before relying on a bonus.",
      "LemFi should be checked in the live USA to Egypt flow when the official site shows Egypt as an available destination.",
      "Cash pickup and bank deposit can have different fees, speeds, and verification requirements.",
      "A US referral program may still exclude a specific route, amount, payment method, or delivery method."
    ],
    faq: [
      {
        question: "What should I compare for USA to Egypt?",
        answer:
          "Compare provider availability, total received amount, transfer fee, exchange rate, delivery method, speed, and any first-transfer reward shown in the live flow."
      },
      {
        question: "Is a referral reward guaranteed on USA to Egypt?",
        answer:
          "No. Referral rewards depend on the provider's current terms, account status, transfer amount, and receiving method."
      }
    ]
  }),
  corridor({
    slug: "usa-to-ghana",
    from: "USA",
    to: "Ghana",
    providerSlugs: ["sendwave", "lemfi", "remitly", "ria", "western-union", "moneygram", "worldremit", "xe"],
    focus:
      "This route often needs comparison between mobile money, bank delivery, cash pickup, and first-transfer reward eligibility.",
    receivingOptions: [
      "Mobile money where supported by the selected provider.",
      "Bank deposit where the provider shows a Ghana bank route.",
      "Cash pickup through providers with agent-network support.",
      "Wallet or local account delivery only when visible in the live route."
    ],
    countryNotes: [
      "Ghana routes can involve mobile money, bank deposit, or cash pickup depending on provider.",
      "Sendwave, LemFi, Remitly, and WorldRemit are useful to check when the recipient can receive through supported digital channels.",
      "US funding method can affect speed, fee, and whether the first transfer qualifies for a reward."
    ],
    faq: [
      {
        question: "What receiving method matters most for USA to Ghana?",
        answer:
          "The recipient's usable method matters most. Compare mobile money, bank deposit, and cash pickup before comparing bonus amounts."
      },
      {
        question: "Can mobile money affect USA to Ghana reward eligibility?",
        answer:
          "Yes. Some offers depend on delivery method, so confirm whether mobile money is included before sending."
      }
    ]
  }),
  corridor({
    slug: "usa-to-ethiopia",
    from: "USA",
    to: "Ethiopia",
    providerSlugs: ["remitly", "ria", "western-union", "moneygram", "worldremit", "xe"],
    focus:
      "This route should be checked for destination support, bank or cash payout availability, and first-transfer verification timing.",
    receivingOptions: [
      "Bank deposit where the provider supports Ethiopia.",
      "Cash pickup through providers with agent-network support.",
      "Wallet or local delivery only when shown in the live route.",
      "Digital delivery only when the recipient can use the supported account or wallet."
    ],
    countryNotes: [
      "USA to Ethiopia users should confirm the exact payout method before creating an account for a reward.",
      "First transfers may take longer if the provider requests identity, source-of-funds, or payment verification.",
      "Provider-level country coverage should still be checked in the live USA to Ethiopia transfer flow."
    ],
    faq: [
      {
        question: "Which providers should I check for USA to Ethiopia?",
        answer:
          "Start with broad global and agent-network providers, then confirm live Ethiopia delivery options and reward eligibility before signup."
      },
      {
        question: "Can verification delay a USA to Ethiopia transfer bonus?",
        answer:
          "Yes. Identity, payment, or source-of-funds checks can delay both the transfer and any reward tied to a qualifying first transfer."
      }
    ]
  }),
  corridor({
    slug: "usa-to-kenya",
    from: "USA",
    to: "Kenya",
    providerSlugs: ["sendwave", "lemfi", "remitly", "ria", "western-union", "moneygram", "worldremit", "xe"],
    focus:
      "This route often needs comparison between mobile wallet delivery, bank deposit, cash pickup, and US funding method tradeoffs.",
    receivingOptions: [
      "Mobile wallet where supported by the selected provider.",
      "Bank deposit where the provider shows a Kenya bank route.",
      "Cash pickup through providers with agent-network support.",
      "Local account delivery only when visible in the USA to Kenya route."
    ],
    countryNotes: [
      "Kenya delivery can involve mobile wallet, bank deposit, or cash pickup depending on provider.",
      "Sendwave, LemFi, Remitly, and WorldRemit are useful to check for digital delivery routes.",
      "US card or bank funding can change speed, fee, and reward eligibility."
    ],
    faq: [
      {
        question: "Should USA to Kenya users compare mobile wallet delivery?",
        answer:
          "Yes. If the recipient can use a supported wallet, compare wallet delivery against bank deposit and cash pickup."
      },
      {
        question: "Can a USA to Kenya bonus depend on payment method?",
        answer:
          "Yes. Card, bank, ACH, and cash-funded transfers can have different provider rules and reward eligibility."
      }
    ]
  }),
  corridor({
    slug: "uk-to-nigeria",
    from: "UK",
    to: "Nigeria",
    providerSlugs: ["lemfi", "taptap-send", "sendwave", "remitly", "ria", "western-union", "moneygram", "worldremit"],
    focus:
      "This route often needs comparison between specialist diaspora apps, mobile or bank delivery, and broad global providers.",
    receivingOptions: [
      "Bank deposit where supported by the selected provider.",
      "Mobile wallet or local account delivery where available.",
      "Cash pickup through providers with agent-network support.",
      "Airtime or wallet-related services only when the provider shows them for Nigeria."
    ],
    countryNotes: [
      "UK to Nigeria users should compare specialist apps with global transfer providers.",
      "LemFi, Taptap Send, Sendwave, and Remitly can be useful to check when the recipient can use supported digital delivery.",
      "Provider rules for Nigeria transfers can depend on verification, account type, and payout method."
    ],
    faq: [
      {
        question: "Which providers should UK to Nigeria users check?",
        answer:
          "Check specialist diaspora apps and broad global providers, then compare the live route, payout method, fee, exchange rate, and bonus terms."
      },
      {
        question: "Can a Nigeria transfer bonus depend on payout method?",
        answer:
          "Yes. Bank, wallet, cash pickup, and other delivery methods can have different eligibility rules."
      }
    ]
  }),
  corridor({
    slug: "usa-to-nigeria",
    from: "USA",
    to: "Nigeria",
    providerSlugs: ["remitly", "sendwave", "ria", "western-union", "moneygram", "worldremit", "lemfi", "xe"],
    focus:
      "This route should compare US funding methods, Nigeria receiving options, and whether a provider's referral terms are US-specific or route-specific.",
    receivingOptions: [
      "Bank deposit where the provider supports Nigeria.",
      "Mobile wallet or local delivery where available.",
      "Cash pickup through agent-network providers.",
      "Digital-only delivery only when the recipient can use the supported account or wallet."
    ],
    countryNotes: [
      "US sender accounts may have ACH, card, bank, or cash funding options depending on provider.",
      "US-only referral programs still need route, amount, and payout-method confirmation.",
      "Nigeria delivery options can differ by provider and can affect both speed and bonus eligibility."
    ],
    faq: [
      {
        question: "Can a US referral offer apply to USA to Nigeria?",
        answer:
          "It can apply only when the provider's current terms include the USA sender account, Nigeria route, transfer amount, and delivery method."
      },
      {
        question: "Should USA to Nigeria users compare ACH and card funding?",
        answer:
          "Yes. Funding method can affect fee, speed, verification, and whether an offer is eligible."
      }
    ]
  })
];

export function getCorridor(slug: string) {
  return corridors.find((corridor) => corridor.slug === slug);
}

export function getCorridorProviders(corridor: Corridor) {
  return providers.filter((provider) => corridor.providerSlugs.includes(provider.slug));
}

export function getComparisonProviders() {
  return allComparisonProviderSlugs
    .map((slug) => providers.find((provider) => provider.slug === slug))
    .filter((provider): provider is Provider => Boolean(provider));
}
