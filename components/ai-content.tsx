import Link from "next/link";
import type { ReactNode } from "react";
import { AlertTriangle, Check, Circle, ExternalLink, Info } from "lucide-react";
import { KeyFacts, type KeyFactRow } from "@/components/key-facts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type LinkItem = {
  href: string;
  label: string;
  description?: string;
};

export type SourceItem = {
  name: string;
  type: string;
  url: string;
  reviewedInformation: string;
  reviewDate: string;
};

export type TroubleshootingItem = {
  problem: string;
  possibleReason: string;
  suggestedAction: string;
};

export type FAQItem = {
  question: string;
  answer: ReactNode;
};

export type StepItem = {
  label: string;
  description?: ReactNode;
};

export type ChecklistItem = {
  label: string;
  status?: "completed" | "pending";
  description?: ReactNode;
};

export type ProviderQuickCardProps = {
  provider: string;
  reward?: ReactNode;
  eligibility?: ReactNode;
  minimumTransfer?: ReactNode;
  whereToEnterCode?: ReactNode;
  codeOrLink?: ReactNode;
  typicalTransferSpeed?: ReactNode;
  lastVerified?: string;
  officialSourcesReviewed?: ReactNode;
};

export { KeyFacts };
export type { KeyFactRow };

function ModuleCard({
  title,
  description,
  children,
  className
}: {
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-lg border bg-card shadow-sm", className)}>
      <div className="p-5">
        <h2 className="text-xl font-semibold leading-tight">{title}</h2>
        {description ? <div className="mt-2 text-sm leading-6 text-muted-foreground">{description}</div> : null}
        <div className="mt-4 text-sm leading-6 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

function ResourceLink({ item }: { item: LinkItem }) {
  const isInternal = item.href.startsWith("/");
  const className = "font-medium text-primary";

  return isInternal ? (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} className={className} rel="noreferrer" target="_blank">
      {item.label}
    </a>
  );
}

export function QuickAnswer({ answer, title = "Quick answer" }: { answer: ReactNode; title?: string }) {
  return (
    <aside className="rounded-lg border bg-card p-5 shadow-sm">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</div>
    </aside>
  );
}

export function KeyTakeaways({ items, title = "Key takeaways" }: { items: ReactNode[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

export function ProviderQuickCard(props: ProviderQuickCardProps) {
  const facts: KeyFactRow[] = [
    { label: "Provider", value: props.provider },
    { label: "Reward", value: props.reward ?? "Check the provider's current offer terms." },
    { label: "Eligibility", value: props.eligibility ?? "Eligibility depends on the provider's current rules." },
    { label: "Minimum transfer", value: props.minimumTransfer ?? "Check the qualifying transfer amount before sending." },
    { label: "Where to enter the code", value: props.whereToEnterCode ?? "Apply the code or link before the qualifying transfer when the provider shows the option." },
    { label: "Code or referral link", value: props.codeOrLink ?? "Use the listed Bonus Foundry code or link when available." },
    { label: "Typical transfer speed", value: props.typicalTransferSpeed ?? "Transfer speed varies by route and payout method." },
    { label: "Last verified", value: props.lastVerified ?? "Review date not supplied." },
    { label: "Official sources reviewed", value: props.officialSourcesReviewed ?? "See the official sources section." }
  ];

  return <KeyFacts title={`${props.provider} quick card`} facts={facts} />;
}

export function HowItWorks({ steps, title = "How it works" }: { steps: StepItem[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={step.label} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
              {index + 1}
            </span>
            <span>
              <span className="font-medium text-foreground">{step.label}</span>
              {step.description ? <span className="block">{step.description}</span> : null}
            </span>
          </li>
        ))}
      </ol>
    </ModuleCard>
  );
}

export function StepChecklist({ items, title = "Checklist" }: { items: ChecklistItem[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="space-y-3">
        {items.map((item) => {
          const completed = item.status === "completed";
          const Icon = completed ? Check : Circle;
          return (
            <li key={item.label} className="flex gap-3">
              <Icon className={cn("mt-1 size-4 shrink-0", completed ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
              <span>
                <span className="font-medium text-foreground">{item.label}</span>
                {item.description ? <span className="block">{item.description}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </ModuleCard>
  );
}

export function NextSteps({ links, title = "Next steps" }: { links: LinkItem[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <ResourceLink item={item} />
            {item.description ? <span className="block">{item.description}</span> : null}
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

export function EligibilitySummary({
  newUsers,
  existingUsers,
  countryRestrictions,
  verificationRequirements,
  title = "Eligibility summary"
}: {
  newUsers: ReactNode;
  existingUsers: ReactNode;
  countryRestrictions: ReactNode;
  verificationRequirements: ReactNode;
  title?: string;
}) {
  return (
    <KeyFacts
      title={title}
      facts={[
        { label: "New users", value: newUsers },
        { label: "Existing users", value: existingUsers },
        { label: "Country restrictions", value: countryRestrictions },
        { label: "Verification requirements", value: verificationRequirements }
      ]}
    />
  );
}

export function RewardSummary({
  rewardType,
  rewardRange,
  qualifyingTransfer,
  notes,
  title = "Reward summary"
}: {
  rewardType: ReactNode;
  rewardRange: ReactNode;
  qualifyingTransfer: ReactNode;
  notes?: ReactNode;
  title?: string;
}) {
  return (
    <KeyFacts
      title={title}
      facts={[
        { label: "Reward type", value: rewardType },
        { label: "Reward range", value: rewardRange },
        { label: "Qualifying transfer", value: qualifyingTransfer },
        { label: "Important notes", value: notes ?? "Check the provider's current promotion terms before transfer." }
      ]}
    />
  );
}

export function TypicalReward({ amount, currency, notes }: { amount: ReactNode; currency?: string; notes?: ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-4 text-sm shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Typical reward</p>
      <p className="mt-1 text-xl font-semibold text-foreground">
        {amount}
        {currency ? <span className="ml-1 text-base text-muted-foreground">{currency}</span> : null}
      </p>
      {notes ? <p className="mt-2 leading-6 text-muted-foreground">{notes}</p> : null}
    </div>
  );
}

export function MinimumTransfer({ amount, currency, notes }: { amount: ReactNode; currency?: string; notes?: ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-4 text-sm shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Minimum transfer</p>
      <p className="mt-1 text-xl font-semibold text-foreground">
        {amount}
        {currency ? <span className="ml-1 text-base text-muted-foreground">{currency}</span> : null}
      </p>
      {notes ? <p className="mt-2 leading-6 text-muted-foreground">{notes}</p> : null}
    </div>
  );
}

export function WhereToEnterCode({ steps, title = "Where to enter the code" }: { steps: string[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ol className="grid gap-2 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step} className="rounded-md border bg-background p-3 text-center text-sm">
            <span className="block text-xs font-semibold text-muted-foreground">Step {index + 1}</span>
            <span className="mt-1 block font-medium text-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </ModuleCard>
  );
}

export function CommonMistakes({ mistakes, title = "Common mistakes" }: { mistakes: ReactNode[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="space-y-2">
        {mistakes.map((mistake, index) => (
          <li key={index} className="flex gap-2">
            <AlertTriangle className="mt-1 size-4 shrink-0 text-amber-600" aria-hidden="true" />
            <span>{mistake}</span>
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

export function Troubleshooting({ items, title = "Troubleshooting" }: { items: TroubleshootingItem[]; title?: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[760px]">
          <thead>
            <TableRow>
              <TableHead>Problem</TableHead>
              <TableHead>Possible reason</TableHead>
              <TableHead>Suggested action</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {items.map((item) => (
              <TableRow key={item.problem}>
                <TableHead>{item.problem}</TableHead>
                <TableCell>{item.possibleReason}</TableCell>
                <TableCell>{item.suggestedAction}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export function ProviderMiniFAQ({ items, title = "FAQ" }: { items: FAQItem[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold text-foreground">{item.question}</h3>
            <div className="mt-1">{item.answer}</div>
          </div>
        ))}
      </div>
    </ModuleCard>
  );
}

export function BestFor({ items, title = "Best for" }: { items: string[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
            {item}
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

export function ProsCons({ pros, cons, title = "Pros and cons" }: { pros: ReactNode[]; cons: ReactNode[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-foreground">Pros</h3>
          <ul className="mt-2 space-y-2">
            {pros.map((item, index) => (
              <li key={index} className="flex gap-2">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Cons</h3>
          <ul className="mt-2 space-y-2">
            {cons.map((item, index) => (
              <li key={index} className="flex gap-2">
                <Info className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ModuleCard>
  );
}

const defaultContentUpdateDate = "July 12, 2026";

export function LastVerified({
  date,
  label = "Last verified",
  contentUpdatedAt = defaultContentUpdateDate
}: {
  date: string;
  label?: string;
  contentUpdatedAt?: string;
}) {
  return (
    <div className="rounded-lg border bg-card px-4 py-3 text-sm shadow-sm">
      <p>
        <span className="font-semibold text-foreground">{label}: </span>
        <time dateTime={date} className="text-muted-foreground">
          {date}
        </time>
      </p>
      <p className="mt-1">
        <span className="font-semibold text-foreground">Last content update: </span>
        <time dateTime={contentUpdatedAt} className="text-muted-foreground">
          {contentUpdatedAt}
        </time>
      </p>
    </div>
  );
}

export function OfficialSources({ sources, title = "Official sources" }: { sources: SourceItem[]; title?: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[860px]">
          <thead>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reviewed information</TableHead>
              <TableHead>Review date</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {sources.map((source) => (
              <TableRow key={`${source.name}-${source.url}`}>
                <TableHead>
                  <a href={source.url} className="inline-flex items-center gap-1 text-primary" rel="noreferrer" target="_blank">
                    {source.name}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </TableHead>
                <TableCell>{source.type}</TableCell>
                <TableCell>{source.reviewedInformation}</TableCell>
                <TableCell>{source.reviewDate}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export function ResearchConfidence({
  percentage,
  explanation,
  title = "Research completeness"
}: {
  percentage: number;
  explanation?: ReactNode;
  title?: string;
}) {
  const normalized = Math.max(0, Math.min(100, percentage));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-foreground">{normalized}%</span>
          <div className="h-2 flex-1 rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary" style={{ width: `${normalized}%` }} />
          </div>
        </div>
        {explanation ? <div className="mt-3 text-sm leading-6 text-muted-foreground">{explanation}</div> : null}
      </CardContent>
    </Card>
  );
}

export function EditorialNote({ children, title = "Editorial note" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="rounded-lg border bg-muted/40 p-5">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-muted-foreground">{children}</div>
    </aside>
  );
}

export function RelatedResources({ links, title = "Related resources" }: { links: LinkItem[]; title?: string }) {
  return (
    <ModuleCard title={title}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <li key={item.href} className="rounded-md border bg-background p-3">
            <ResourceLink item={item} />
            {item.description ? <p className="mt-1">{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}
