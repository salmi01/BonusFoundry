import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BonusCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-muted-foreground">{children}</CardContent>
    </Card>
  );
}
