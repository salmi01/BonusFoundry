import { notFound } from "next/navigation";

// Preserve the existing branded 404 when multiple root layouts are present.
export default function UnmatchedRoute() {
  notFound();
}
