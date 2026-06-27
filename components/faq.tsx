export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="divide-y rounded-md border bg-card">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
