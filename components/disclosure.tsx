import { Info } from "lucide-react";

export function Disclosure() {
  return (
    <aside className="flex gap-3 rounded-md border bg-card p-4 text-sm leading-6 text-muted-foreground">
      <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
      <p>
        This website is independent and is not an official provider page. Referral links or codes may generate a reward
        for us if you qualify and use them.
      </p>
    </aside>
  );
}
