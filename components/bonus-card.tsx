export function BonusCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border bg-card p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-muted-foreground">{children}</div>
    </section>
  );
}
