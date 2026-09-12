import { getProvider, getProviderAuthority } from "@/data/providers";

export const moroccoGuideUpdatedAt = "2026-09-12";

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

// Keep offers tied to the same records as the provider pages. Morocco-specific
// delivery and pricing notes remain in the guide; global coverage is not route proof.
export function getMoroccoProvider(slug: MoroccoProviderSlug) {
  const provider = getProvider(slug);
  if (!provider) throw new Error(`Missing Morocco guide provider: ${slug}`);
  const authority = getProviderAuthority(provider);
  const referral = authority.referral;
  return {
    provider,
    authority,
    referral,
    method:
      referral.code ||
      (referral.link
        ? "Personal referral link"
        : "No BonusFoundry code or referral link listed"),
    minimum:
      referral.minimumTransfer ||
      "No universal minimum is published in the reviewed provider terms; check your invitation offer."
  };
}

export const moroccoCodeSummary = moroccoProviderSlugs
  .map(getMoroccoProvider)
  .filter(({ referral }) => referral.code)
  .map(({ provider, referral }) => `${provider.name}: ${referral.code}`)
  .join("; ");

export const moroccoReferralMethodsAnswer = `BonusFoundry lists these codes: ${moroccoCodeSummary}. ${moroccoProviderSlugs
  .map(getMoroccoProvider)
  .filter(({ referral }) => !referral.code && referral.link)
  .map(({ provider }) => provider.name)
  .join(
    ", "
  )} use personal referral links. Offers depend on the provider's current terms. WorldRemit can display its own promotions, although BonusFoundry has no WorldRemit code or referral link listed.`;

export const moroccoQuickAnswer = [
  "Taptap Send, Remitly, Wise, LemFi, Ria, Sendwave, Paysend and WorldRemit are worth comparing for Morocco. Choose by sender country, payout method and the final MAD amount in the live quote. Compare cash-pickup options separately from Wise's bank-account transfers.",
  getMoroccoProvider("taptap-send").provider.welcomeBonus,
  getMoroccoProvider("sendwave").referral.welcomeBonus.trim(),
  `LemFi ${getMoroccoProvider("lemfi").method}: ${getMoroccoProvider("lemfi").referral.welcomeBonus}`,
  getMoroccoProvider("ria").provider.eligibleUsers,
  getMoroccoProvider("paysend").referral.welcomeBonus
].join(" ");
