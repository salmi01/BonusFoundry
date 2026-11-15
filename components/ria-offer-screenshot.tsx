import Image from "next/image";

export function RiaOfferScreenshot() {
  return (
    <figure className="mt-4 w-full max-w-[330px]">
      <Image
        src="/images/providers/ria/ria-referral-offer-fr-2026-11-15.jpg"
        alt="Ria app showing code 9RMU-ENB7, a €20 referrer reward and a €20 friend promo code on one France-based account"
        width={709}
        height={1536}
        sizes="(max-width: 360px) 100vw, 330px"
        loading="lazy"
        className="h-auto w-full rounded-lg border"
      />
      <figcaption className="mt-2 text-xs leading-5 text-muted-foreground">
        BonusFoundry&apos;s own Ria app screenshot from a France-based account,
        checked November 15, 2026. Amounts and eligibility may vary.
      </figcaption>
    </figure>
  );
}
