import { CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <CalendarClock className="size-4" aria-hidden="true" />
      Last updated {formatDate(date)}
    </p>
  );
}
