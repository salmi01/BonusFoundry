import { CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm">
      <CalendarClock className="size-4" aria-hidden="true" />
      Last updated {formatDate(date)}
    </p>
  );
}
