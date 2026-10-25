import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  alternates: { canonical: "/agb" },
};

function Clause({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

export default function AgbPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="mt-3 text-muted">
        {company.name} ({company.brand}) · Stand: 25.10.2026
      </p>

      <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-ink">
        <Clause title="1. Geltungsbereich">
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verkehrsverträge
            über Güterbeförderungen und damit zusammenhängende Leistungen der{" "}
            {company.name} (nachfolgend „wir“) unter der Marke {company.brand}.
          </p>
          <p>
            Unser Angebot richtet sich ausschließlich an Unternehmer im Sinne von
            § 14 BGB, juristische Personen des öffentlichen Rechts und
            öffentlich-rechtliche Sondervermögen (nachfolgend „Auftraggeber“).
            Verträge mit Verbrauchern schließen wir nicht.
          </p>
          <p>
            Abweichende Geschäftsbedingungen des Auftraggebers gelten nur, wenn wir
            ihnen ausdrücklich in Textform zugestimmt haben.
          </p>
        </Clause>

        <Clause title="2. Geltung der ADSp 2017">
          <p>
            Wir arbeiten auf Grundlage der Allgemeinen Deutschen Spediteurbedingungen
            2017 (ADSp 2017). Diese gelten ergänzend, soweit in diesen AGB oder im
            Einzelvertrag nichts Abweichendes geregelt ist. Den Text der ADSp 2017
            senden wir Ihnen auf Anfrage gern zu.
          </p>
          <p>
            Rangfolge: Individuelle Vereinbarung im Auftrag, danach diese AGB,
            danach die ADSp 2017, im Übrigen die gesetzlichen Vorschriften, insbesondere
            §§ 407 ff. HGB.
          </p>
        </Clause>

        <Clause title="3. Angebot und Vertragsschluss">
          <p>
            Der Auftraggeber übermittelt uns seine Anfrage mit Abhol- und Zieladresse,
            Art, Anzahl, Maßen und Gewicht der Güter sowie dem Wunschtermin. Wir
            unterbreiten daraufhin ein verbindliches Festpreisangebot in Textform
            (in der Regel per E-Mail). Der Vertrag kommt mit der Annahme dieses
            Angebots durch den Auftraggeber in Textform zustande.
          </p>
          <p>
            Grundlage des Angebots sind die Angaben des Auftraggebers. Weichen die
            tatsächlichen Verhältnisse davon ab (z. B. Maße, Gewicht, Ladestellen),
            können wir den Preis entsprechend anpassen oder die Durchführung ablehnen.
          </p>
        </Clause>

        <Clause title="4. Leistungen">
          <p>
            Wir führen Direktfahrten mit Fahrzeugen bis 3,5 t zulässiger Gesamtmasse
            durch – ohne Umladung und ohne Sammelgut, sofern nicht ausdrücklich anders
            vereinbart. Eine Ladebordwand wird nur gestellt, wenn dies bei der Anfrage
            angegeben und im Angebot bestätigt wurde.
          </p>
          <p>
            Angegebene Abhol- und Zustellzeiten sind Zielzeiten. Feste Termine
            (Fixtermine) gelten nur, wenn sie ausdrücklich als solche vereinbart wurden.
          </p>
        </Clause>

        <Clause title="5. Pflichten des Auftraggebers">
          <p>
            Der Auftraggeber hat die Güter beförderungssicher zu verpacken und zu
            kennzeichnen sowie vollständige und zutreffende Angaben zu Art, Menge,
            Maßen und Gewicht zu machen. Soweit nicht anders vereinbart, obliegen das
            beförderungssichere Verladen und Entladen dem Auftraggeber (§ 412 HGB).
          </p>
          <p>
            Gefahrgut, temperaturgeführte Güter, lebende Tiere sowie besonders wertvolle
            oder diebstahlgefährdete Güter (z. B. Geld, Edelmetalle, Schmuck, Kunst,
            Ausweise) befördern wir nur nach vorheriger ausdrücklicher Vereinbarung.
          </p>
        </Clause>

        <Clause title="6. Lade- und Wartezeiten">
          <p>
            Für Be- und Entladung steht eine angemessene Ladezeit zur Verfügung, deren
            Umfang sich nach dem Angebot richtet. Wird sie aus Gründen überschritten,
            die nicht in unserem Risikobereich liegen, steht uns ein angemessenes
            Standgeld zu (§ 412 Abs. 3 HGB), sofern im Angebot nichts anderes
            vereinbart ist.
          </p>
        </Clause>

        <Clause title="7. Preise und Zahlung">
          <p>
            Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer.
            Für Strecken ab 500 km gilt, sofern nicht abweichend vereinbart, ein
            Preis ab 0,90 €/km. Für Strecken unter 500 km wird ein individueller
            Festpreis vereinbart.
          </p>
          <p>
            Rechnungen werden per E-Mail übermittelt und sind, sofern nicht anders
            vereinbart, innerhalb von 7 Tagen nach Zustellung ohne Abzug zur Zahlung
            fällig.
          </p>
        </Clause>

        <Clause title="8. Kündigung durch den Auftraggeber">
          <p>
            Kündigt der Auftraggeber den Vertrag vor oder während der Durchführung, gilt
            § 415 HGB. Wir können danach wahlweise die vereinbarte Fracht abzüglich
            ersparter Aufwendungen oder pauschal ein Drittel der vereinbarten Fracht
            (Fautfracht) verlangen.
          </p>
        </Clause>

        <Clause title="9. Haftung">
          <p>
            Unsere Haftung für Verlust oder Beschädigung des Gutes richtet sich nach
            den Bestimmungen des Frachtrechts (§§ 407 ff. HGB) und den ADSp 2017.
          </p>
          <p className="rounded-sm border-l-4 border-accent bg-accent-tint px-4 py-3 font-bold">
            Abweichend von § 431 Abs. 1 HGB und Ziffer 23 ADSp 2017 ist unsere Haftung
            für Güterschäden auf 40 Sonderziehungsrechte (SZR) je Kilogramm des
            Rohgewichts der Sendung begrenzt (§ 449 Abs. 2 HGB).
          </p>
          <p>
            Diese Haftung ist über unsere Verkehrshaftungsversicherung abgesichert.
            Die Haftungsbegrenzungen gelten nicht, soweit gesetzlich zwingend
            unbeschränkt gehaftet wird, insbesondere bei Vorsatz oder Leichtfertigkeit
            im Bewusstsein eines wahrscheinlichen Schadens (§ 435 HGB).
          </p>
        </Clause>

        <Clause title="10. Schlussbestimmungen">
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Ausschließlicher
            Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist der
            Sitz unserer Gesellschaft. Sollten einzelne Bestimmungen unwirksam sein,
            bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </Clause>
      </div>
    </Section>
  );
}
