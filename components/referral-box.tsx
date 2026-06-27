import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Provider } from "@/data/providers";
import { buttonStyles } from "@/components/ui/button";

export function ReferralBox({ provider }: { provider: Provider }) {
  return (
    <aside className="rounded-md border bg-card p-5">
      <h2 className="text-xl font-semibold">{provider.name} referral details</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{provider.welcomeBonus}</p>
      <div className="mt-4 rounded-md border bg-muted p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Referral code</p>
        <p className="mt-1 break-all text-2xl font-bold">{provider.referralCode ?? "No known code listed"}</p>
        {!provider.referralCode ? (
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            We do not publish a code for this provider unless we have one to disclose. Check the provider&apos;s live
            offer terms directly.
          </p>
        ) : null}
      </div>
      <Link href={provider.referralLink} className={buttonStyles({ className: "mt-4 w-full" })} rel="nofollow sponsored">
        Open provider site
        <ExternalLink className="size-4" aria-hidden="true" />
      </Link>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Check the live terms in the provider app before sending money. Rewards are not guaranteed.
      </p>
    </aside>
  );
}
