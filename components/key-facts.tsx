import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";

export function KeyFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Key facts</h2>
      <div className="mt-4 overflow-hidden rounded-lg border bg-card shadow-sm">
        <Table>
          <tbody className="divide-y">
            {facts.map((fact) => (
              <TableRow key={fact.label}>
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
