export type FAQPage = {
  slug: string;
  question: string;
  answer: string;
  examples: string[];
  providerLinks: string[];
  lastUpdated: string;
};

export const faqs: FAQPage[] = [
  {
    slug: "can-i-use-referral-code-after-signing-up",
    question: "Can I use a referral code after signing up?",
    answer:
      "Usually no. Many money transfer providers require the referral link or code to be used before or during account creation, and they may not attach it after the account already exists.",
    examples: [
      "If you created an account and sent your first transfer, the provider may treat you as an existing user.",
      "If the account is new but no transfer has been sent, support may still say the code cannot be added manually.",
      "Some apps use referral links instead of code fields, so opening the link before signup matters."
    ],
    providerLinks: ["taptap-send", "wise", "remitly"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "why-did-i-not-receive-my-referral-bonus",
    question: "Why did I not receive my referral bonus?",
    answer:
      "A referral bonus may be missing because the code was not applied, the account was not eligible, verification is incomplete, the transfer did not meet the minimum amount, or the offer changed before the qualifying action.",
    examples: [
      "A first transfer below the minimum amount may not qualify.",
      "A transfer to an excluded country or payout method may not trigger the reward.",
      "Some providers pay rewards only after the transfer is completed and reviewed."
    ],
    providerLinks: ["taptap-send", "remitly", "wise"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "can-i-refer-myself",
    question: "Can I refer myself?",
    answer:
      "No. Referral programs are generally designed for inviting another person, and self-referrals can violate provider rules or lead to cancelled rewards.",
    examples: [
      "Creating a second account to use your own referral link can trigger account review.",
      "Using the same payment method, phone number, or identity details on multiple accounts may be treated as abuse.",
      "Provider rules vary, but self-referral is rarely allowed."
    ],
    providerLinks: ["wise", "remitly", "taptap-send"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "are-referral-codes-and-promo-codes-the-same",
    question: "Are referral codes and promo codes the same?",
    answer:
      "No. A referral code is usually tied to an invitation from an existing user, while a promo code is usually tied to a company campaign. Both can have restrictions.",
    examples: [
      "A referral code may reward both the inviter and the new user.",
      "A promo code may only discount a transfer fee or apply a promotional rate.",
      "Some providers use the words loosely, so always read the terms."
    ],
    providerLinks: ["wise", "remitly", "ria"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "do-referral-bonuses-expire",
    question: "Do referral bonuses expire?",
    answer:
      "Yes. Referral bonuses can expire, and providers can change the amount, country availability, qualifying transfer amount, and payout timing.",
    examples: [
      "An invitation may require the new user to send their first transfer within a set number of days.",
      "A campaign may end before you complete verification.",
      "A code from an old article may no longer be accepted."
    ],
    providerLinks: ["taptap-send", "worldremit", "paysend"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "can-i-use-more-than-one-promo-code",
    question: "Can I use more than one promo code?",
    answer:
      "Usually no. Most providers allow only one referral, promo, or welcome offer per new account or transfer, but the exact rule depends on the provider.",
    examples: [
      "A referral reward and first-transfer promotional rate may not stack.",
      "A code field may replace the previous code when a new code is entered.",
      "Some offers apply automatically and cannot be combined with manual codes."
    ],
    providerLinks: ["remitly", "moneygram", "western-union"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "are-money-transfer-referral-codes-safe",
    question: "Are money transfer referral codes safe?",
    answer:
      "Referral codes can be safe when used through the provider's official app or website, but you should avoid sharing sensitive information with third-party pages or people claiming to be support.",
    examples: [
      "A code should not require you to share passwords, card details, or identity documents outside the provider app.",
      "Use the official provider website or app store listing before entering personal information.",
      "Be cautious with screenshots or messages that promise guaranteed rewards."
    ],
    providerLinks: ["taptap-send", "wise", "western-union"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "do-referral-codes-work-in-every-country",
    question: "Do referral codes work in every country?",
    answer:
      "No. Referral codes and welcome bonuses often depend on sender country, destination country, payment method, and local provider rules.",
    examples: [
      "A code that works for one sender country may not appear in another country.",
      "A France to Morocco route may have different terms from a France to Senegal route.",
      "Provider availability can differ from bonus eligibility."
    ],
    providerLinks: ["taptap-send", "wise", "remitly"],
    lastUpdated: "2026-06-27"
  },
  {
    slug: "do-i-need-identity-verification-to-receive-bonus",
    question: "Do I need identity verification to receive a bonus?",
    answer:
      "Often yes. Money transfer providers may require identity verification before completing a transfer or paying a referral or welcome bonus.",
    examples: [
      "A provider may let you create an account but block the transfer until verification is complete.",
      "A reward may not be paid until the qualifying transfer clears review.",
      "Verification requirements can vary by country, amount, and provider."
    ],
    providerLinks: ["wise", "remitly", "taptap-send"],
    lastUpdated: "2026-06-27"
  }
];

export function getFaq(slug: string) {
  return faqs.find((faq) => faq.slug === slug);
}
