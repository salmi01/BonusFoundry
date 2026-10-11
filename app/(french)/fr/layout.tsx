import "../../globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAdsTag } from "@/components/google-ads-tag";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";

// Preserve the shared brand metadata and verification tag without changing English routes.
export { metadata } from "../../(main)/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export default function FrenchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <GoogleAdsTag />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Header french />
        <main id="contenu">{children}</main>
        <Footer french />
      </body>
    </html>
  );
}
