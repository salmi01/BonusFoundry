import { getProvider, getProviderAuthority } from "@/data/providers";

export const moroccoGuideUpdatedAt = "2026-11-15";
export const moroccoProviderSlugs = [
  "taptap-send",
  "remitly",
  "wise",
  "lemfi",
  "ria",
  "sendwave",
  "paysend",
  "worldremit"
] as const;
export type MoroccoProviderSlug = (typeof moroccoProviderSlugs)[number];
type MoroccoSource = { label: string; url: string };

// Shared records own codes and invitation URLs. Route facts and reviewed offers
// are local: global marketing copy is not Morocco route proof.
export function getMoroccoProvider(slug: MoroccoProviderSlug) {
  const provider = getProvider(slug);
  if (!provider) throw new Error(`Missing Morocco guide provider: ${slug}`);
  const referral = getProviderAuthority(provider).referral;
  return {
    provider,
    referral,
    method:
      referral.code ||
      (referral.link
        ? "Personal referral link"
        : "No BonusFoundry invitation listed")
  };
}

export type MoroccoRoute = {
  slug: MoroccoProviderSlug | "xoom";
  name: string;
  bestFor: string;
  delivery: string;
  senders: string;
  fees: string;
  timing: string;
  limitations: string;
  checkedAt: string;
  sources: MoroccoSource[];
};

export const moroccoRoutes: MoroccoRoute[] = [
  {
    slug: "taptap-send",
    name: "Taptap Send",
    bestFor: "Bank, Orange Money and a choice of cash-pickup partners",
    delivery:
      "Bank accounts; Orange Money; cash pickup at CashPlus, Wafacash, Barid Cash, Al Barid Bank, LanaCash and DamaneCash.",
    senders: "Morocco help reviewed; confirm your sending country in the app.",
    fees: "No separate bank/Orange Money transfer fee; FX margin applies. France-origin cash pickup: €2.99; other origins differ.",
    timing:
      "Cash pickup and Orange Money typically minutes; bank deposits same/next business day, sometimes two working days.",
    limitations:
      "The November 11 help update distinguishes sender fees from pickup cashout fees. App limits and availability apply; service minimums do not establish a referral minimum.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "Morocco delivery, fees and timing (updated November 11)",
        url: "https://help.taptapsend.com/en/receiving-countries/how-can-i-send-money-to-morocco"
      }
    ]
  },
  {
    slug: "remitly",
    name: "Remitly",
    bestFor: "Comparing several payout methods on France and US routes",
    delivery:
      "Bank deposit, cash pickup and mobile wallet on the reviewed France/US pages.",
    senders:
      "France → Morocco and US → Morocco reviewed; other origins require a quote.",
    fees: "Quote depends on amount, funding and payout. First-transfer rates or fee waivers have separate conditions.",
    timing:
      "Use the arrival estimate for your payment and delivery method; verification can add time.",
    limitations:
      "A method advertised for France or the US is not proof of availability from every country. Compare ordinary pricing separately from introductory rates.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "France to Morocco",
        url: "https://www.remitly.com/fr/en/money-transfer/send-money-to-morocco"
      },
      {
        label: "US to Morocco",
        url: "https://www.remitly.com/us/en/money-transfer/send-money-to-morocco"
      }
    ]
  },
  {
    slug: "wise",
    name: "Wise",
    bestFor: "An itemized bank-account quote",
    delivery:
      "Moroccan individual or business bank account; recipient's full name and 24-digit RIB required. No cash pickup.",
    senders:
      "US destination page and MAD help reviewed; funding-country availability varies.",
    fees: "Upfront fee and mid-market exchange rate. A Moroccan receiving bank may charge separately.",
    timing:
      "Typically 1–3 working days after Wise receives and converts the money; conversion itself may take up to two working days.",
    limitations:
      "Use a RIB, not a guessed IBAN. Funding and recipient-bank processing affect the actual arrival time and final amount.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "MAD transfer guide",
        url: "https://wise.com/help/articles/2932363/guide-to-mad-transfers"
      },
      {
        label: "US to Morocco",
        url: "https://wise.com/us/send-money/send-money-to-morocco"
      }
    ]
  },
  {
    slug: "lemfi",
    name: "LemFi",
    bestFor: "An additional app quote if its Morocco flow supports your needs",
    delivery:
      "Morocco destination confirmed; specific bank/wallet partners were not established by the reviewed destination page. Confirm payout in the app.",
    senders:
      "Morocco page lists Australia, Canada, UK, US and selected European origins; confirm your country.",
    fees: "Compare the app's total charge and MAD exchange rate; generic low-fee marketing does not establish your route's cost.",
    timing:
      "Use the Morocco payout estimate shown in the app; no method-specific timing independently established here.",
    limitations:
      "Generic bank/mobile-money marketing is not confirmation of a particular Moroccan wallet. Current public referral pages differ from older owner-offer data.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "Morocco destination page",
        url: "https://lemfi.com/en-us/international-money-transfer/morocco"
      }
    ]
  },
  {
    slug: "ria",
    name: "Ria",
    bestFor: "Cash pickup, bank deposit or Orange Money on the US route",
    delivery:
      "Bank deposit, cash pickup and Orange Money mobile wallet on the reviewed US page.",
    senders:
      "US → Morocco reviewed; app/online/agent routes and funding differ by origin.",
    fees: "Check the live fee and exchange rate for the origin, payment and payout method.",
    timing:
      "Use the route's quoted arrival time; payment, checks and partner hours can delay delivery.",
    limitations:
      "General transfer coverage is broader than referral eligibility. An available Moroccan payout method does not establish eligibility for a France-account promotion.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "US to Morocco",
        url: "https://www.riamoneytransfer.com/en-us/send-money-to-morocco/"
      }
    ]
  },
  {
    slug: "sendwave",
    name: "Sendwave",
    bestFor: "Cash pickup from four documented sender countries",
    delivery:
      "Cash pickup only for Morocco in the current country FAQ; payout in MAD.",
    senders: "US, Canada, France and UK listed for Morocco.",
    fees: "Check the app's charge, exchange rate and final MAD; do not assume a zero fee means the best rate.",
    timing:
      "Use the app's estimate and the pickup partner's opening hours; collection must follow the stated pickup deadline.",
    limitations:
      "The Morocco FAQ excludes recipient USD and business-account transfers. The France/EUR referral evidence does not establish eligibility for every Morocco transfer.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "Morocco country FAQ",
        url: "https://www.sendwave.com/en/support?to=ma"
      }
    ]
  },
  {
    slug: "paysend",
    name: "Paysend",
    bestFor: "Card deposit alongside bank/wallet quotes on the US route",
    delivery:
      "Mastercard cards, bank accounts and digital wallets on the reviewed US destination page.",
    senders:
      "US → Morocco reviewed; other sender routes and recipient eligibility vary.",
    fees: "Live quote shows fee, rate and arrival estimate. Invitation fee waivers and US public bonuses are different offers.",
    timing:
      "The US page describes card/bank delivery as usually same day; the individual quote controls.",
    limitations:
      "Confirm the specific card or wallet is eligible before paying. The old $5-after-second-$100 invitation amount is not verified as current.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "US to Morocco",
        url: "https://paysend.com/en-us/send-money/from-the-united-states-of-america-to-morocco"
      }
    ]
  },
  {
    slug: "worldremit",
    name: "WorldRemit",
    bestFor: "A documented cash-pickup alternative",
    delivery:
      "Cash pickup at Al Barid Bank, Cash Plus and Damane Cash. Bank deposit is not confirmed.",
    senders:
      "Morocco documentation reviewed; select your sending country for current availability.",
    fees: "Check the displayed transfer fee and exchange rate in the live quote.",
    timing:
      "Cash pickup is usually available within minutes, subject to checks and partner operating hours.",
    limitations:
      "Official pages conflict: the general page advertises bank transfer, but the dedicated bank page says it is not supported. No live bank-payout route was independently verified; bank deposit is excluded from recommendations.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "Morocco overview (conflicting bank claim)",
        url: "https://www.worldremit.com/en/morocco"
      },
      {
        label: "Bank-transfer availability notice",
        url: "https://www.worldremit.com/en/morocco/bank-transfer"
      },
      {
        label: "Morocco cash pickup",
        url: "https://www.worldremit.com/en/morocco/cash-pickup"
      }
    ]
  },
  {
    slug: "xoom",
    name: "Xoom (PayPal)",
    bestFor: "Another bank/cash quote, including for PayPal users",
    delivery:
      "Bank deposit and cash pickup; documented pickup partners include Wafacash, Banque Populaire and Cash Plus.",
    senders:
      "Morocco page lists US, Canada, UK, EEA and Australia; funding currencies/methods vary.",
    fees: "Upfront fee plus an exchange-rate margin; compare the final MAD, including funding costs.",
    timing:
      "Cash pickup typically minutes; bank deposit typically two business days, subject to funding, review and partner hours.",
    limitations:
      "A PayPal service, with separate Xoom transfer conditions. Airtime top-up is not a money payout. No BonusFoundry referral offer is verified.",
    checkedAt: "2026-11-15",
    sources: [
      {
        label: "Xoom Morocco delivery and conditions",
        url: "https://www.xoom.com/morocco/send-money?languagecode=en"
      }
    ]
  }
];

export type MoroccoBonus = {
  offer: string;
  minimum: string;
  evidence: string;
  sources: MoroccoSource[];
};

// Source checks do not re-date historical evidence or establish successful redemption.
export const moroccoBonuses: Record<MoroccoProviderSlug, MoroccoBonus> = {
  "taptap-send": {
    offer:
      "Owner's captured EUR offer: €5 for the friend's first qualifying transfer; €10 for the referrer. Country/destination eligibility must be confirmed.",
    minimum: "Not visible in the owner evidence; check the accepted offer.",
    evidence:
      "Owner transcription from September 7, 2026, reviewed October 3; original screenshot unavailable in the repository. Official rules checked November 15, 2026; no new redemption test.",
    sources: [
      {
        label: "Referral instructions",
        url: "https://help.taptapsend.com/en/bonus-and-referrals/how-do-referral-codes-and-promo-codes-work"
      },
      {
        label: "Referral terms",
        url: "https://www.taptapsend.com/en/referrals-terms/referral-v4/referrals-en4"
      }
    ]
  },
  remitly: {
    offer:
      "Owned France-to-Morocco invitation: €10 discount for a new user's first transfer of €100 or more, plus no first-transfer fee and a special rate; €10 for the referrer. Country, funding and promotion conditions apply.",
    minimum:
      "€100 on the reviewed France-to-Morocco invitation; not a worldwide threshold.",
    evidence:
      "Owned invitation checked November 15, 2026: new customers only, one per customer, limited time. Promotional FX rate applies to the first €500; the displayed rate assumes Easy bank transfer. No redemption tested.",
    sources: [
      {
        label: "Owned France-to-Morocco invitation",
        url: "https://remit.ly/35sixkkg"
      }
    ]
  },
  wise: {
    offer:
      "Personal invitation; confirm any fee discount and its cap on the invitation. No universal cash bonus verified.",
    minimum: "Invitation-specific; no current universal minimum verified.",
    evidence:
      "Morocco service conditions checked November 15, 2026. The owned invitation's current offer was not independently reverified; check its live conditions.",
    sources: [
      {
        label: "Owned Wise invitation (check live conditions)",
        url: "https://wise.com/invite/ahpc/salaheddines203"
      }
    ]
  },
  lemfi: {
    offer:
      "Code preserved; no current fixed Morocco reward established. The public France page advertises LemFi Cash under different terms, while the earlier EU campaign is marked expired.",
    minimum:
      "No current qualifying minimum verified for this code on a Morocco transfer.",
    evidence:
      "Public France invitation and expired EU campaign checked November 15, 2026. Older €10/$10 owner-offer figures are withheld; public LemFi Cash is not proof of this code's entitlement.",
    sources: [
      {
        label: "Current France invitation page",
        url: "https://www.lemfi.com/en-fr/invite-and-earn"
      },
      {
        label: "Expired EU campaign",
        url: "https://www.lemfi.com/en-fr/promotions/eu-referral-campaign"
      }
    ]
  },
  ria: {
    offer:
      "France-account example: €20 promo code for the friend's first international transfer and €20 later-transfer reward for the referrer. Account-specific, not a cash payout or universal French offer.",
    minimum:
      "No numeric qualifying minimum shown in the account evidence; check Ria's accepted offer.",
    evidence:
      "Publisher app screenshot reviewed November 15, 2026; official referral help checked the same day (article updated October 16). Eligible residences: Australia, Belgium, Canada, Chile, France, Germany, Italy, Spain, UK and US — 10 countries.",
    sources: [
      {
        label: "Official referral eligibility and mechanics",
        url: "https://help.riamoneytransfer.com/hc/en-us/articles/4416994463633-Ria-s-refer-a-friend-program"
      }
    ]
  },
  sendwave: {
    offer:
      "Publisher's France/EUR account: €20 transfer credit for the friend's first eligible transfer of €50 or more; €20 credit for the referrer after delivery, toward a later transfer. Not withdrawable cash; other accounts/routes may differ.",
    minimum:
      "€50 in that EUR-account popup only; not a universal Sendwave minimum.",
    evidence:
      "Publisher account evidence reviewed November 15, 2026; France registration publisher-confirmed. Official terms checked the same day. Morocco eligibility for this particular offer and third-party redemption were not independently tested.",
    sources: [
      {
        label: "General referral terms",
        url: "https://www.sendwave.com/en/terms-and-conditions/referral-program"
      }
    ]
  },
  paysend: {
    offer:
      "Owned invitation visibly advertises a fee-free first transfer. No current fixed cash reward verified for that invitation; do not substitute the separate US public campaign.",
    minimum:
      "Owned invitation: no current fixed-reward threshold verified. Separate US campaign: $200+ within 30 days for the advertised $10 new-user reward.",
    evidence:
      "Owned invitation and US public bonus page checked November 15, 2026. US page separately advertises $50 for the referrer; its country-specific terms are not evidence of this invitation's worldwide availability.",
    sources: [
      {
        label: "Owned invitation",
        url: "https://paysend.com/en/referral/06mvt6"
      },
      {
        label: "Separate US public campaign",
        url: "https://paysend.com/en-us/bonus"
      }
    ]
  },
  worldremit: {
    offer:
      "No BonusFoundry referral code, invitation or fixed reward listed. Check any provider promotion separately.",
    minimum: "Not applicable to a BonusFoundry invitation.",
    evidence:
      "Morocco service documentation checked November 15, 2026; this does not verify a promotional reward.",
    sources: [
      {
        label: "Morocco service page",
        url: "https://www.worldremit.com/en/morocco"
      }
    ]
  }
};

export const moroccoCodeSummary = moroccoProviderSlugs
  .map(getMoroccoProvider)
  .filter(({ referral }) => referral.code)
  .map(({ provider, referral }) => `${provider.name}: ${referral.code}`)
  .join("; ");
export const moroccoReferralMethodsAnswer = `Listed codes: ${moroccoCodeSummary}. Wise, Remitly and Paysend use personal invitation links. See the separate bonus table for evidence, restrictions and offer dates; none establishes a universal Morocco reward. No BonusFoundry invitation is listed for WorldRemit or Xoom.`;
export const moroccoQuickAnswer =
  "There is no universally best or cheapest app for Morocco: compare the MAD delivered for the same total amount paid, sender country, payout method and arrival estimate. Wise offers an itemized bank-account quote; Taptap Send documents bank, Orange Money and cash-pickup options; Remitly and Ria also merit cash-pickup comparisons on supported routes. Check the live route and any eligible discount before paying; introductory offers do not establish the best ongoing price.";
