export function KeyFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Key facts</h2>
      <div className="mt-4 overflow-hidden rounded-md border bg-card">
        <table className="w-full border-collapse text-left text-sm">
          <tbody className="divide-y">
            {facts.map((fact) => (
              <tr key={fact.label}>
                <th className="w-1/3 bg-muted/60 px-4 py-3 font-semibold align-top">{fact.label}</th>
                <td className="px-4 py-3 leading-6 text-muted-foreground">{fact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
