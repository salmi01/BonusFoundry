import { paysendReferralLink } from "@/data/paysend";

// Scoped to the referral landing page; do not import the legacy shared offer copy.
export { paysendReferralLink };
export const paysendReferralReviewedAt = "2026-10-03";
export const paysendReferralPath = "/providers/paysend/referral-code";
export const paysendReferralMetadata = {
  title: "Paysend Bonus & Referral Link: Fee-Free First Transfer",
  description:
    "Paysend referral link: eligible new users can get a fee-free first transfer. See referrer rewards, country limits, promo-code differences and official sources."
};

export const paysendReferralSources = {
  program: {
    label: "Paysend referral program",
    url: "https://paysend.com/en/bonus"
  },
  invite: { label: "Live Paysend invitation", url: paysendReferralLink },
  useLink: {
    label: "Using an invite link (French)",
    url: "https://help.paysend.com/hc/fr/articles/6330530248989-Comment-utiliser-un-lien-d-invitation"
  },
  existingAccount: {
    label: "Invite links and existing accounts (French)",
    url: "https://help.paysend.com/hc/fr/articles/24789296324765-J-ai-oubli%C3%A9-d-utiliser-un-lien-d-invitation-lors-de-mon-inscription-Puis-je-l-utiliser-plus-tard"
  },
  rewards: {
    label: "Referral rewards and participating countries (French)",
    url: "https://help.paysend.com/hc/fr/articles/6330378397341-Qu-est-ce-que-le-bonus-Paysend"
  },
  share: {
    label: "Inviting friends (French)",
    url: "https://help.paysend.com/hc/fr/articles/6330383807389-Comment-puis-je-inviter-des-amis"
  },
  getPromo: {
    label: "Finding Paysend promo codes (French)",
    url: "https://help.paysend.com/hc/fr/articles/6330326718493-Comment-puis-je-obtenir-un-code-promo"
  },
  applyPromo: {
    label: "Applying a Paysend promo code",
    url: "https://help.paysend.com/hc/en-us/articles/6330337183005-How-do-I-apply-a-promo-code"
  },
  summer: {
    label: "Expired summer 2026 campaign",
    url: "https://paysend.com/eu/blog/paysend-referral-promotion-summer-2026"
  },
  september: {
    label: "Expired September 2026 campaign",
    url: "https://paysend.com/en/blog/september-referral-rewards-2026"
  }
};

export const paysendReferralQuickAnswer =
  "Paysend uses a personal invite link. Eligible new users who open the link before registration can currently receive a fee-free first transfer, subject to Paysend's terms and market availability. Referrer rewards vary by country. Promo codes are separate campaign offers; the summer cash bonus and September double rewards are expired promotions.";

export const paysendReferrerAnswer =
  "Paysend's current USD example gives the referrer $3 for each of the invited friend's first 12 qualifying transfers within the friend's first 12 months, up to $36 per friend. Reward amounts and availability vary by registration country; check the offer in your Paysend account.";

export const paysendReferralSteps = [
  {
    label: "Open the Paysend invite link before registering",
    description:
      "New users must begin account creation through the invitation flow so Paysend can associate the referral."
  },
  {
    label: "Register through the invitation",
    description:
      "Check the offer for your registration country and follow Paysend's account and verification prompts."
  },
  {
    label: "Check the first-transfer quote",
    description:
      "Confirm that the Paysend transfer fee is waived. Review the exchange rate and amount the recipient will receive before confirming."
  },
  {
    label: "Complete an eligible transfer",
    description:
      "Follow the terms shown by Paysend. The new-user benefit is a transfer-fee waiver; the referrer's rewards follow separate qualifying-transfer rules."
  }
];

// Both the visible FAQ and FAQPage JSON-LD consume these exact strings.
export const paysendReferralFaq = [
  {
    question: "What is the current Paysend referral bonus?",
    answer:
      "Paysend currently offers eligible new users a fee-free first transfer when they register through an applicable invite link. The referrer may earn rewards from the friend's qualifying transfers. Availability and reward amounts depend on the registration market."
  },
  {
    question: "Where is the Paysend referral link, and how do I use it?",
    answer: `BonusFoundry's Paysend bonus link is ${paysendReferralLink}. Open it before creating your Paysend account, register through the invitation and check that your first-transfer fee is waived before confirming the transfer. Local terms apply.`
  },
  {
    question: "Does Paysend have a referral code, bonus code or invite code?",
    answer:
      "Paysend's standard referral flow uses a personal invitation link. BonusFoundry has no verified universal Paysend referral code or bonus code to enter. Paysend separately distributes campaign-specific promo codes, which have their own conditions."
  },
  {
    question: "What does the Paysend referrer earn?",
    answer: paysendReferrerAnswer
  },
  {
    question: "Can existing Paysend users apply a referral link?",
    answer:
      "No. Paysend says the invitation link must be used before account creation and cannot be applied retroactively to an existing account. Eligible existing users can share their own invite link as referrers where the program is available."
  },
  {
    question: "Is the Paysend referral program available in every country?",
    answer:
      "No. Paysend referral availability and reward amounts depend on the registration country. Check Paysend's current participating-market information and the offer in your account; money-transfer destination coverage does not establish referral eligibility."
  },
  {
    question: "Is there a minimum transfer or a limit on invitations?",
    answer:
      "The current Paysend invite information reviewed does not establish a universal minimum for the fee-free first transfer. Check your live quote and local conditions. Paysend permits inviting multiple friends; the current standard reward model covers up to 12 qualifying transfers per friend within that friend's first 12 months."
  },
  {
    question: "Are Paysend promo codes the same as referral links?",
    answer:
      "No. A Paysend referral link is used before registration. Separate Paysend promotional codes are entered through Add a code during a transfer and follow the specific campaign's conditions. Do not assume a promo code also registers a referral or can be combined with one."
  },
  {
    question:
      "Is the old $5 Paysend bonus after a $100 second transfer current?",
    answer:
      "No current entitlement is verified. Paysend documented the $5 bonus after a second transfer of at least $100 in its June 1–July 31, 2026 summer campaign, which is expired. The invitation's remaining $5 title metadata does not establish a current offer; its visible content describes a fee-free first transfer."
  },
  {
    question: "Are Paysend's September double rewards still available?",
    answer:
      "No. Paysend's September 1–30, 2026 promotion advertising $6 and up to $72 is expired. It excluded the United States, and Paysend said the standard rate returned on October 1. Current rewards remain market-dependent."
  }
];
