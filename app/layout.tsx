import type { Metadata } from "next";
import { Archivo, Big_Shoulders_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import CookieBanner from "@/components/CookieBanner";
import { company, serviceLocation, siteUrl } from "@/lib/site-config";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Güterbeförderung mit Transportern bis 3,5 t: Direktfahrten ohne Umladung, Abholung im Rheinland, Zustellung deutschlandweit. Angebot innerhalb von 30 Minuten.";

// Kein globales `alternates.canonical` hier – sonst erben alle Unterseiten
// den Canonical der Startseite. Jede Seite setzt ihren eigenen.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Güterbeförderung bis 3,5 t | ANV Express",
    template: "%s | ANV Express",
  },
  description,
  applicationName: company.brand,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: `${company.brand} – ein Service der ${company.name}`,
    title: "ANV Express – Güterbeförderung bis 3,5 t, deutschlandweit",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANV Express – Direktfahrten bis 3,5 t ohne Umladung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: company.brand,
  legalName: company.name,
  description,
  slogan: "Güterbeförderung seit 2018",
  url: siteUrl,
  logo: `${siteUrl}/brand/anv-express-logo.png`,
  image: `${siteUrl}/og-image.png`,
  email: company.email,
  telephone: company.phoneMain,
  foundingDate: String(company.foundingYear),
  vatID: company.ustId,
  priceRange: "ab 0,90 €/km",
  address: {
    "@type": "PostalAddress",
    streetAddress: serviceLocation.street,
    postalCode: serviceLocation.zip,
    addressLocality: serviceLocation.city.replace(" (Rheinland)", ""),
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  knowsAbout: [
    "Güterbeförderung",
    "Expresstransport",
    "Direktfahrt",
    "Sonderfahrt",
    "Kurierfahrt",
    "Palettentransport",
    "Transporter bis 3,5 t",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Güterbeförderung mit Transportern bis 3,5 t",
      serviceType: "Güterbeförderung / Direktfahrt",
      areaServed: { "@type": "Country", name: "Deutschland" },
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${archivo.variable} ${bigShoulders.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCta />
        <CookieBanner />
      </body>
    </html>
  );
}
