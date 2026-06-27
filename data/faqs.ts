export const faqs = [
  {
    slug: "welcome-bonus-not-received",
    question: "Why was my welcome bonus not received?",
    answer:
      "A welcome bonus may not appear if the account was not eligible, the referral code was not applied, the first transfer did not meet the minimum amount, verification is incomplete, or the offer changed before the qualifying action.",
    lastUpdated: "2026-06-27"
  },
  {
    slug: "referral-code-vs-promo-code",
    question: "What is the difference between a referral code and a promo code?",
    answer:
      "A referral code is usually tied to an existing user's invitation. A promo code is usually a marketing campaign code from the company. Both can have eligibility rules and expiration dates.",
    lastUpdated: "2026-06-27"
  }
];

export function getFaq(slug: string) {
  return faqs.find((faq) => faq.slug === slug);
}
