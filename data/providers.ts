export type Provider = {
  name: string;
  slug: string;
  description: string;
  referralCode: string;
  referralLink: string;
  welcomeBonus: string;
  supportedCountries: string[];
  eligibleUsers: string;
  requirements: string[];
  steps: string[];
  faq: { question: string; answer: string }[];
  lastUpdated: string;
};

export const providers: Provider[] = [
  {
    name: "Taptap Send",
    slug: "taptap-send",
    description:
      "Taptap Send is a money transfer app focused on sending funds from Europe, North America, and the UK to selected countries in Africa, Asia, and Latin America.",
    referralCode: "BONUSFOUNDRY",
    referralLink: "https://www.taptapsend.com/",
    welcomeBonus:
      "Referral rewards can vary by country and time. Check the app before sending your first transfer.",
    supportedCountries: ["France", "United Kingdom", "United States", "Morocco", "Senegal", "Mali"],
    eligibleUsers: "New users who meet Taptap Send's current referral terms in their country.",
    requirements: [
      "Create a new account through the referral link or enter the referral code if the app asks for one.",
      "Complete identity checks when required.",
      "Send a qualifying first transfer that meets the current minimum amount."
    ],
    steps: [
      "Install Taptap Send and create a new account.",
      "Use the referral link or enter the referral code during signup.",
      "Review the live bonus terms in the app before sending money.",
      "Send an eligible first transfer and wait for the reward to appear if you qualify."
    ],
    faq: [
      {
        question: "Is the Taptap Send referral code official?",
        answer:
          "No. This site is independent and only explains how referral programs work. The code shown is our own referral code."
      },
      {
        question: "Can the Taptap Send bonus change?",
        answer:
          "Yes. Referral rewards, supported corridors, and eligibility rules can change. Always confirm the current terms in the app."
      }
    ],
    lastUpdated: "2026-06-27"
  },
  {
    name: "Wise",
    slug: "wise",
    description:
      "Wise provides international money transfers, multi-currency balances, and debit card features in many markets.",
    referralCode: "WISE-REF",
    referralLink: "https://wise.com/",
    welcomeBonus:
      "Wise referral benefits depend on the country, product, and active campaign shown during signup.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "India", "Canada"],
    eligibleUsers: "New Wise users who qualify under Wise's referral terms.",
    requirements: [
      "Open a new Wise account using a referral invitation when available.",
      "Verify your account if Wise asks for identity documents.",
      "Complete the required transfer or product action listed in the referral terms."
    ],
    steps: [
      "Open the referral invitation.",
      "Create your Wise account with accurate personal details.",
      "Check the bonus conditions shown by Wise.",
      "Complete the qualifying action before the offer expires."
    ],
    faq: [
      {
        question: "Does Wise always offer a signup bonus?",
        answer:
          "No. Wise referral offers vary and may not be available to every user or country."
      },
      {
        question: "Where should I confirm the Wise bonus?",
        answer:
          "Confirm the current bonus inside Wise's signup flow or account area before relying on it."
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
      "Remitly may offer first-transfer promotions or referral rewards depending on corridor and campaign.",
    supportedCountries: ["United States", "United Kingdom", "France", "Morocco", "Philippines", "Mexico"],
    eligibleUsers: "New users who satisfy Remitly's active offer requirements.",
    requirements: [
      "Sign up as a new Remitly customer.",
      "Use the referral link or apply the code when the app supports it.",
      "Send a qualifying transfer to an eligible destination."
    ],
    steps: [
      "Create your Remitly account.",
      "Add recipient and transfer details.",
      "Review fees, exchange rate, delivery speed, and bonus eligibility.",
      "Complete the transfer if the terms are acceptable."
    ],
    faq: [
      {
        question: "Are Remitly referral rewards guaranteed?",
        answer:
          "No. Rewards depend on the active terms, user eligibility, and successful completion of qualifying steps."
      },
      {
        question: "Can existing Remitly users use a referral code?",
        answer:
          "Referral codes are usually intended for new users, but Remitly's current terms decide eligibility."
      }
    ],
    lastUpdated: "2026-06-27"
  }
];

export function getProvider(slug: string) {
  return providers.find((provider) => provider.slug === slug);
}
