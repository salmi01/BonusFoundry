import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";

export function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={buttonStyles()}>
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
