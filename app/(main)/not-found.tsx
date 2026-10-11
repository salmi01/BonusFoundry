import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold tracking-normal">Page not found</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The page may have moved or the provider is not covered yet.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-primary">
        Return home
      </Link>
    </Container>
  );
}
