import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-ink">
        <Block title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />
            {company.name}, {company.address.street}, {company.address.zip}{" "}
            {company.address.city}, {company.address.country}
            <br />
            E-Mail: {company.email} · Telefon: {company.phoneMain}
          </p>
        </Block>

        <Block title="2. Hosting und Server-Logfiles">
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA, gehostet. Beim Aufruf der Website erhebt unser Hoster
            automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Seite, Browsertyp, Referrer-URL). Die
            Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an
            einem sicheren und funktionsfähigen Betrieb der Website (Art. 6 Abs. 1
            lit. f DSGVO). Da Vercel Inc. ihren Sitz in den USA hat, kann es zu einer
            Datenübermittlung in ein Drittland kommen; Vercel verwendet hierfür die
            EU-Standardvertragsklauseln als geeignete Garantien gemäß Art. 46 DSGVO.
          </p>
        </Block>

        <Block title="3. Anfrageformular und Kontakt per E-Mail oder Telefon">
          <p>
            Unser Anfrageformular überträgt keine Daten an unseren Server. Es stellt
            Ihre Eingaben lediglich zu einer E-Mail zusammen und öffnet diese in Ihrem
            E-Mail-Programm; erst wenn Sie die E-Mail dort absenden, erhalten wir Ihre
            Angaben.
          </p>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die
            mitgeteilten Daten (u. a. Firma, Ansprechpartner, Kontaktdaten, Abhol- und
            Zieladressen, Angaben zur Sendung) zur Bearbeitung Ihrer Anfrage, zur
            Angebotserstellung und zur Durchführung des Auftrags (Art. 6 Abs. 1 lit. b
            DSGVO) sowie auf Grundlage unseres berechtigten Interesses an der
            Kommunikation mit Geschäftskunden (Art. 6 Abs. 1 lit. f DSGVO). Die Daten
            werden gelöscht, sobald sie nicht mehr erforderlich sind und keine
            gesetzlichen Aufbewahrungspflichten (insbesondere handels- und
            steuerrechtliche) entgegenstehen.
          </p>
        </Block>

        <Block title="4. Kontakt per WhatsApp (optional)">
          <p>
            Wenn Sie uns freiwillig über WhatsApp kontaktieren, erfolgt die
            Kommunikation über den Dienst der WhatsApp Ireland Limited bzw. der Meta
            Platforms, Inc. (USA). Ihre Nachricht, Telefonnummer und weitere
            übermittelte Daten werden dabei über Server von Meta verarbeitet; eine
            Übermittlung in die USA ist möglich. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. b bzw. lit. f DSGVO. Wenn Sie dies nicht wünschen, nutzen Sie bitte
            E-Mail oder Telefon.
          </p>
        </Block>

        <Block title="5. Cookies, lokaler Speicher und Einwilligung">
          <p>
            Beim ersten Besuch zeigen wir einen Hinweis, in dem Sie zwischen
            „Alle akzeptieren“, „Ablehnen“ und individuellen Einstellungen wählen
            können. Ihre Auswahl speichern wir im lokalen Speicher Ihres Browsers
            (localStorage). Dieser Speicher ist technisch erforderlich, damit Ihre
            Entscheidung berücksichtigt wird (§ 25 Abs. 2 Nr. 2 TDDDG; Art. 6 Abs. 1
            lit. f DSGVO).
          </p>
          <p>
            Statistik- oder Marketing-Dienste setzen wir derzeit nicht ein. Sollten wir
            solche Dienste künftig nutzen, geschieht das nur mit Ihrer Einwilligung
            (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO); diese Erklärung wird dann
            um Anbieter, Zweck und Speicherdauer ergänzt. Ihre Auswahl können Sie
            jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen.
          </p>
        </Block>

        <Block title="6. Ihre Rechte">
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
            DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18
            DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die
            Verarbeitung (Art. 21 DSGVO). Eine erteilte Einwilligung können Sie
            jederzeit mit Wirkung für die Zukunft widerrufen. Zudem haben Sie das Recht,
            sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </Block>

        <Block title="7. Aktualität dieser Erklärung">
          <p>
            Diese Datenschutzerklärung wird bei Änderungen unseres Angebots oder der
            Rechtslage angepasst. Stand: 25.10.2026.
          </p>
        </Block>
      </div>
    </Section>
  );
}
