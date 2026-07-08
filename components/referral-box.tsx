import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Provider } from "@/data/providers";
import { buttonStyles } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReferralBox({ provider }: { provider: Provider }) {
  const hasOwnedReferralLink = Boolean(
    provider.referralLink &&
      provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  );

  return (
    <Card className="overflow-hidden">
      <aside>
        <CardHeader>
          <CardTitle>{provider.name} referral details</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">{provider.welcomeBonus}</p>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Referral code</p>
            <p className="mt-1 break-all text-2xl font-bold">
              {provider.referralCode ?? (hasOwnedReferralLink ? "Use referral link" : "Check live offer")}
            </p>
            {!provider.referralCode ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {hasOwnedReferralLink
                  ? "Open the referral link before signup, then review the provider's live offer terms."
                  : "Use the provider app or website to check whether a promo, referral, or first-transfer offer is active."}
              </p>
            ) : null}
          </div>
          {hasOwnedReferralLink && provider.referralLink ? (
            <Link
              href={provider.referralLink}
              className={buttonStyles({ className: "mt-4 w-full" })}
              rel="nofollow sponsored"
            >
              Open referral link
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Check the live terms in the provider app before sending money. Eligibility is controlled by the provider.
          </p>
        </CardContent>
      </aside>
    </Card>
  );
}
