"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyCodeButton({ code, label = "Copy code" }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button type="button" onClick={copyCode} className={cn(buttonStyles({ variant: "default" }), "gap-2")}>
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      {copied ? "Copied" : `${label}: ${code}`}
    </button>
  );
}
