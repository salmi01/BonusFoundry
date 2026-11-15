// Checked against current official Ria guidance and BonusFoundry's own
// France-based Ria-app screenshot on 2026-11-15.
export const riaReviewedAt = "2026-11-15";
export const riaEligibleCountries = [
  "Australia",
  "Belgium",
  "Canada",
  "Chile",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "United Kingdom",
  "United States"
] as const;

export const riaCountryList = `${riaEligibleCountries.slice(0, -1).join(", ")}, and the United States`;
export const riaResidenceRule = `Both the referrer and referred friend must be at least 18 and live in one of these eligible countries: ${riaCountryList}.`;
export const riaReferrerHistory =
  "The referrer must have completed at least one transfer with Ria before referring friends.";
export const riaReward =
  "Both people receive a discount on a qualifying international transfer. Ria shows the exact reward in the app; the friend's reward depends on their country of residence.";
export const riaFranceReward =
  "BonusFoundry's own Ria-app screenshot, checked November 15, 2026 on one France-based account, shows a €20 reward for the referrer for each friend who completes their first international transfer, and a €20 promo code for the friend on their first international transfer, plus other eligible offers. Offers may vary by account, location, and time; confirm your offer in the Ria app.";
export const riaMinimum =
  "Send at least the offer's minimum amount in one international transfer. Ria's current referral articles do not publish numeric minimums; check your offer in the Ria app before sending.";
export const riaRewardTiming =
  "The friend's discount appears at checkout on the first qualifying international transfer. The referrer's reward is earned when that transfer is completed and paid, may take up to two days to appear, and applies automatically to the referrer's next qualifying transfer.";
export const riaCombiningRewards =
  "Up to two earned referral rewards can be used on one qualifying transfer. Referral rewards cannot be combined with promo codes.";
export const riaMultipleReferrals =
  "Ria places no limit on the number of friends you can refer. Each referral must meet the program conditions.";

export const riaSources = {
  program:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4416994463633-Ria-s-refer-a-friend-program",
  france: "https://www.riamoneytransfer.com/en-fr/refer-a-friend/",
  claim:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4407688298385-I-was-referred-to-Ria-how-do-I-claim-my-reward",
  missing:
    "https://help.riamoneytransfer.com/hc/en-us/articles/36107077964561-Why-didn-t-I-receive-a-referral-discount",
  promo:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4406279777169-How-do-I-use-a-promo-code"
} as const;
