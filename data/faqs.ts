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
      "Usually no. Many money transfer providers require the referral link or code before account creation or before the first qualifying transfer. Check the provider's support flow if the offer was visible but did not attach.",
    examples: [
      "If you created an account and sent your first transfer, the provider may treat you as an existing user.",
      "If the account is new but no transfer has been sent, support may still decide whether the code can be attached.",
      "Some apps use referral links instead of code fields, so opening the link before signup matters."
    ],
    providerLinks: ["taptap-send", "wise", "remitly"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "why-did-i-not-receive-my-referral-bonus",
    question: "Why did I not receive my referral bonus?",
    answer:
      "A referral bonus is usually missing because one condition was not met. Check code entry, new-user status, verification, transfer amount, destination, payout method, and reward timing before contacting provider support.",
    examples: [
      "A first transfer below the minimum amount may not qualify.",
      "A transfer to an excluded country or payout method may not trigger the reward.",
      "Some providers pay rewards only after the transfer is completed and reviewed."
    ],
    providerLinks: ["taptap-send", "remitly", "wise"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "can-i-refer-myself",
    question: "Can I refer myself?",
    answer:
      "No. Referral programs are generally for inviting another person. Self-referrals can violate provider rules, trigger account review, and cancel rewards, so use referral codes only for eligible separate users.",
    examples: [
      "Creating a second account to use your own referral link can trigger account review.",
      "Using the same payment method, phone number, or identity details on multiple accounts may be treated as abuse.",
      "Provider terms usually require a separate invited person, not a second account controlled by the same user."
    ],
    providerLinks: ["wise", "remitly", "taptap-send"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "are-referral-codes-and-promo-codes-the-same",
    question: "Are referral codes and promo codes the same?",
    answer:
      "No. A referral code usually connects a new user to an invitation, while a promo code usually belongs to a provider campaign. Check eligibility, timing, and whether the provider allows combining offers.",
    examples: [
      "A referral code may reward both the inviter and the new user.",
      "A promo code may only discount a transfer fee or apply a promotional rate.",
      "Some providers use the words loosely, so always read the terms."
    ],
    providerLinks: ["wise", "remitly", "ria"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "do-referral-bonuses-expire",
    question: "Do referral bonuses expire?",
    answer:
      "Yes. Referral bonuses can expire or change. Before sending money, check the offer date, qualifying transfer deadline, country availability, minimum amount, and provider reward timing.",
    examples: [
      "An invitation may require the new user to send their first transfer within a set number of days.",
      "A campaign may end before you complete verification.",
      "A code from an old article may no longer be accepted."
    ],
    providerLinks: ["taptap-send", "worldremit", "paysend"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "can-i-use-more-than-one-promo-code",
    question: "Can I use more than one promo code?",
    answer:
      "Usually no. Most providers allow only one referral, promo, or welcome offer per account or transfer. Check the checkout screen and offer terms before replacing or stacking codes.",
    examples: [
      "A referral reward and first-transfer promotional rate may not stack.",
      "A code field may replace the previous code when a new code is entered.",
      "Some offers apply automatically and cannot be combined with manual codes."
    ],
    providerLinks: ["remitly", "moneygram", "western-union"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "are-money-transfer-referral-codes-safe",
    question: "Are money transfer referral codes safe?",
    answer:
      "Referral codes can be safe when used inside the provider's real app or website. Do not share passwords, card details, or identity documents outside the provider's secure flow.",
    examples: [
      "A code should not require you to share passwords, card details, or identity documents outside the provider app.",
      "Use the official provider website or app store listing before entering personal information.",
      "Be cautious with screenshots or messages that promise fixed rewards without provider terms."
    ],
    providerLinks: ["taptap-send", "wise", "western-union"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "do-referral-codes-work-in-every-country",
    question: "Do referral codes work in every country?",
    answer:
      "No. Referral codes and welcome bonuses often depend on sender country, destination, payment method, account status, and local provider rules. Check the live route before signup or transfer.",
    examples: [
      "A code that works for one sender country may not appear in another country.",
      "A France to Morocco route may have different terms from a France to Senegal route.",
      "Provider availability can differ from bonus eligibility."
    ],
    providerLinks: ["taptap-send", "wise", "remitly"],
    lastUpdated: "2026-07-09"
  },
  {
    slug: "do-i-need-identity-verification-to-receive-bonus",
    question: "Do I need identity verification to receive a bonus?",
    answer:
      "Often yes. Money transfer providers may require identity verification before completing a transfer or paying a referral or welcome bonus. Complete requested checks before treating the reward as missing.",
    examples: [
      "A provider may let you create an account but block the transfer until verification is complete.",
      "A reward may not be paid until the qualifying transfer clears review.",
      "Verification requirements can vary by country, amount, and provider."
    ],
    providerLinks: ["wise", "remitly", "taptap-send"],
    lastUpdated: "2026-07-09"
  }
];

export function getFaq(slug: string) {
  return faqs.find((faq) => faq.slug === slug);
}
