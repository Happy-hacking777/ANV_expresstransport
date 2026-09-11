import type { Metadata } from "next";
import { Archivo, Big_Shoulders_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://anv-hansekontor.de"),
  title: {
    default: "ANV Hansekontor GmbH | Expresstransporte bis 3,5 t",
    template: "%s | ANV Hansekontor GmbH",
  },
  description:
    "Expresstransporte bis 3,5 t: Abholung im Rheinland, Zustellung deutschlandweit – zuverlässig, direkt, ohne Umladung.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
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
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
