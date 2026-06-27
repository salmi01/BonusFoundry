import * as React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Alert({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn("rounded-lg border bg-card p-4 shadow-sm", className)} {...props}>
      <div className="flex gap-3">
        <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="text-sm leading-6 text-muted-foreground">{children}</div>
      </div>
    </aside>
  );
}
