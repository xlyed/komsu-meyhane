import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

export const viewport: Viewport = {
  themeColor: "#0B1B2B",
  width: "device-width",
  initialScale: 1,
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Komşu Meyhane — Ayvalık",
    template: "%s | Komşu Meyhane",
  },
  description:
    "Ayvalık'ta deniz kenarında, gün batımının uzun bir sofraya dönüştüğü bir meyhane. Mevsim mezeleri, taze balık, dost sohbetleri.",
  metadataBase: new URL("https://komsumeyhane.com"),
  openGraph: {
    title: "Komşu Meyhane — Ayvalık",
    description:
      "Ayvalık'ta deniz kenarında, gün batımının uzun bir sofraya dönüştüğü bir meyhane.",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: content.location.name,
  servesCuisine: ["Türk", "Ege", "Meze", "Balık"],
  priceRange: "$$",
  telephone: content.location.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: content.location.address,
    addressLocality: "Ayvalık",
    addressRegion: "Balıkesir",
    addressCountry: "TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-deep text-cream-warm">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:bg-gold-sunset focus:text-navy-deep focus:px-4 focus:py-2 focus:font-body focus:text-sm"
        >
          İçeriğe geç
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
