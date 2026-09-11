import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AGB",
};

export default function AgbPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Allgemeine Geschäftsbedingungen
      </h1>

      <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-ink">
        <div>
          <h2 className="text-lg font-semibold">1. Geltungsbereich</h2>
          <p className="mt-2">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Transport- und
            Logistikleistungen, die {company.name} (nachfolgend „wir" oder
            „ANV Hansekontor") gegenüber Geschäfts- und Privatkunden (nachfolgend
            „Auftraggeber") erbringt.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2. Vertragsschluss</h2>
          <p className="mt-2">
            Der Auftraggeber übermittelt uns eine Anfrage (z. B. per WhatsApp,
            Telefon oder E-Mail) mit Abhol- und Zieladresse, Maße, Gewicht und
            Wunschtermin. Wir unterbreiten daraufhin ein verbindliches
            Festpreisangebot. Der Vertrag kommt durch Annahme dieses Angebots durch
            den Auftraggeber zustande.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Leistungen</h2>
          <p className="mt-2">
            Wir führen Direktfahrten mit Transportern bis 3,5 t durch, ohne
            Umladung und ohne Sammelgut, sofern nicht ausdrücklich anders vereinbart.
            Eine Ladebordwand wird nur gestellt, wenn dies bei der Anfrage angegeben
            und im Angebot bestätigt wurde.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. Preise und Zahlung</h2>
          <p className="mt-2">
            Für Strecken ab 500 km gilt, sofern nicht abweichend vereinbart, ein
            Preis ab 0,90 €/km zzgl. gesetzlicher Mehrwertsteuer. Für Strecken unter
            500 km wird ein individueller Festpreis vereinbart. Sofern nicht anders
            angegeben, ist die Rechnung innerhalb von 7 Tagen nach Zustellung ohne
            Abzug zur Zahlung fällig.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Haftung</h2>
          <p className="mt-2">
            Unsere Haftung für Schäden am transportierten Gut richtet sich nach den
            gesetzlichen Bestimmungen des Frachtrechts (§§ 407 ff. HGB). Abweichend
            von der gesetzlichen Regelhaftung von 8,33 Sonderziehungsrechten (SZR)
            pro Kilogramm vereinbaren wir eine erhöhte Haftung bis 40 SZR/kg. Für
            Schäden, die auf höherer Gewalt, unzureichender Verpackung durch den
            Auftraggeber oder Angaben zu Maßen/Gewicht beruhen, haften wir nicht.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            6. Widerrufsrecht für Verbraucher
          </h2>
          <p className="mt-2">
            Schließen Sie den Vertrag als Verbraucher außerhalb unserer Geschäftsräume
            oder im Fernabsatz (z. B. per WhatsApp, Telefon, E-Mail), steht Ihnen
            grundsätzlich ein gesetzliches Widerrufsrecht zu. Beauftragen Sie uns
            ausdrücklich damit, die Leistung vor Ablauf der Widerrufsfrist zu
            beginnen, und wird die Leistung vollständig erbracht, erlischt Ihr
            Widerrufsrecht mit vollständiger Erbringung (§ 356 Abs. 4 BGB). Über die
            genauen Widerrufsmodalitäten informieren wir Sie gesondert vor
            Vertragsschluss.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Schlussbestimmungen</h2>
          <p className="mt-2">
            Es gilt deutsches Recht. Gerichtsstand für Streitigkeiten mit
            Unternehmern ist, soweit gesetzlich zulässig, Hamburg. Sollten einzelne
            Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
            Bestimmungen unberührt.
          </p>
        </div>

        <p className="text-sm text-muted">
          Dieser Text ist ein allgemeiner Entwurf und keine Rechtsberatung. Bitte
          lassen Sie diese AGB vor Veröffentlichung von einem Rechtsanwalt prüfen und
          an Ihr konkretes Geschäftsmodell (insbesondere Widerrufsrecht bei
          B2C-Aufträgen) anpassen.
        </p>
      </div>
    </Section>
  );
}
