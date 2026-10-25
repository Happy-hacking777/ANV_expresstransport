import Link from "next/link";

// Schwebender Button (mobil gut erreichbar). Primärer Kanal: E-Mail-Anfrage.
export default function FloatingCta() {
  return (
    <Link
      href="/#anfrage"
      aria-label="Transport-Angebot anfragen"
      className="floating-cta fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dark sm:bottom-6 sm:right-6"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      Angebot anfragen
    </Link>
  );
}
