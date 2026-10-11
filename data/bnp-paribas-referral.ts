export const bnpReferralPath = "/fr/banques/bnp-paribas/parrainage";

// Owner-supplied destination; never pass this URL to analytics or structured data.
export const bnpReferralUrl =
  "https://mabanque.bnpparibas/fr/parrainage-filleul/?code=PARBNP150OCTOBRE26&token=283GD892";

export const bnpCampaign = {
  campaignEndAt: "2026-10-29T15:00:00+01:00",
  offerLastVerifiedAt: "2026-10-11",
  contentModifiedAt: "2026-10-11",
  openingAmount: 80,
  mobilityAmount: 80,
  totalAmount: 160,
  sponsorAmount: 150,
  maxReferralsPerYear: 20,
  definitiveOpeningDeadline: "2027-01-29",
  conditionsUrl: "https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage",
  rulesUrl:
    "https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage/reglement-parrainage",
  tariffsUrl:
    "https://mabanque.bnpparibas/fr/notre-offre/tarifs-et-conditions-bnp-paribas/conditions-tarifaires",
  tariffsPdfUrl:
    "https://mabanque.bnpparibas/content/dam/mabanque/rsc/contrib/pdf/conditions-et-tarifs/PV37407_Tarifs_Part_Janvier_2026.pdf"
} as const;

export function isBnpCampaignActive(now = new Date()): boolean {
  return now.getTime() < new Date(bnpCampaign.campaignEndAt).getTime();
}

export function bnpPageCopy(active: boolean) {
  return active
    ? {
        title: `Parrainage BNP Paribas 2026 : jusqu'à ${bnpCampaign.totalAmount} € offerts`,
        description: `Parrainage BNP Paribas 2026 : découvrez comment obtenir jusqu'à ${bnpCampaign.totalAmount} € en ouvrant un compte éligible et avec Facilimouv'. Conditions, délais et lien de parrainage.`
      }
    : {
        title: "Parrainage BNP Paribas : campagne d'octobre 2026 terminée",
        description:
          "La campagne de parrainage BNP Paribas se terminait le 29 octobre 2026 à 15 h. Retrouvez ses conditions et vérifiez les nouvelles offres auprès de la banque."
      };
}
