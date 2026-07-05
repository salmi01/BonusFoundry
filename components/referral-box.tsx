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
              {provider.referralCode ?? (hasOwnedReferralLink ? "Use the referral link when available" : "No code listed")}
            </p>
            {!provider.referralCode ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {hasOwnedReferralLink
                  ? "This provider uses a Bonus Foundry referral link rather than a manual code. Check the provider's live offer terms directly."
                  : "Bonus Foundry does not currently publish a referral code or owned referral link for this provider. Check the provider's live offer terms directly."}
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
            Check the live terms in the provider app before sending money. Rewards are not guaranteed.
          </p>
        </CardContent>
      </aside>
    </Card>
  );
}
