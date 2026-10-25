import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit",
  alternates: { canonical: "/barrierefreiheit" },
};

export default function BarrierefreiheitPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Erklärung zur Barrierefreiheit
      </h1>

      <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-ink">
        <p>
          {company.name} ist bemüht, diese Website im Einklang mit den Vorgaben des
          Barrierefreiheitsstärkungsgesetzes (BFSG) sowie den Anforderungen der EN
          301 549 und den Web Content Accessibility Guidelines (WCAG) 2.1, Stufe AA,
          zugänglich zu gestalten.
        </p>

        <div>
          <h2 className="text-lg font-semibold">Umsetzung</h2>
          <p className="mt-2">
            Diese Website wurde unter anderem mit folgenden Maßnahmen umgesetzt:
            semantische HTML-Struktur und Überschriftenhierarchie, Tastaturbedienbarkeit
            aller interaktiven Elemente, sichtbarer Fokusindikator, ausreichende
            Farbkontraste, ein „Zum Inhalt springen"-Link sowie beschreibende
            Alternativtexte und ARIA-Bezeichnungen für Bedienelemente.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Feedback und Kontaktangaben</h2>
          <p className="mt-2">
            Sollten Ihnen Barrieren auffallen, die einer barrierefreien Nutzung
            dieser Website entgegenstehen, kontaktieren Sie uns bitte:
            <br />
            E-Mail: {company.email} · Telefon: {company.phoneMain}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Schlichtungsverfahren</h2>
          <p className="mt-2">
            Sollte keine zufriedenstellende Lösung gefunden werden, können Sie sich
            an die zuständige Überwachungsstelle bzw. Schlichtungsstelle für
            Barrierefreiheit Ihres Bundeslandes wenden.
          </p>
        </div>

        <p className="text-sm text-muted">Stand dieser Erklärung: 25.10.2026.</p>
      </div>
    </Section>
  );
}
