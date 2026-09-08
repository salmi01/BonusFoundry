"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyCodeButton({
  code,
  label = "Copy code"
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setFailed(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setFailed(true);
    }
  }

  return (
    <span className="inline-flex max-w-full flex-col items-start gap-2">
      <button
        type="button"
        onClick={copyCode}
        className={cn(
          buttonStyles({ variant: "default" }),
          "h-auto min-h-11 max-w-full gap-2 whitespace-normal break-words"
        )}
      >
        {copied ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
        {copied ? "Copied" : `${label}: ${code}`}
      </button>
      <span
        role="status"
        className={failed ? "text-sm text-muted-foreground" : "sr-only"}
      >
        {failed
          ? `Copy unavailable. Select and copy this code: ${code}`
          : copied
            ? "Referral code copied."
            : ""}
      </span>
    </span>
  );
}
