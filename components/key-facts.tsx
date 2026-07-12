import type { ReactNode } from "react";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";

export type KeyFactRow = {
  label: string;
  value: ReactNode;
};

export function KeyFacts({
  facts,
  title = "Key facts",
  description
}: {
  facts: KeyFactRow[];
  title?: string;
  description?: string;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p> : null}
      <div className="mt-4 overflow-hidden rounded-lg border bg-card shadow-sm">
        <Table>
          <tbody className="divide-y">
            {facts.map((fact, index) => (
              <TableRow key={`${fact.label}-${index}`}>
                <TableHead>{fact.label}</TableHead>
                <TableCell>{fact.value}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
