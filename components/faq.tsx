import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <Card className="divide-y overflow-hidden">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-semibold transition-colors hover:bg-muted/50">
              <span>{item.question}</span>
              <ChevronDown
                className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </Card>
    </section>
  );
}
