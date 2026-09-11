import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-ink">
        <div>
          <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />
            {company.name}, {company.address.street}, {company.address.zip}{" "}
            {company.address.city}, {company.address.country}
            <br />
            E-Mail: {company.email} · Telefon: {company.phoneMain}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2. Server-Logfiles / Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA, gehostet. Beim Aufruf der Website erhebt unser Hoster
            automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Seite, Browsertyp, Referrer-URL). Diese
            Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an
            einem sicheren und funktionsfähigen Betrieb der Website (Art. 6 Abs. 1
            lit. f DSGVO). Da Vercel Inc. ihren Sitz in den USA hat, kann es zu einer
            Datenübermittlung in ein Drittland kommen; Vercel verwendet hierfür die
            EU-Standardvertragsklauseln als geeignete Garantien gemäß Art. 46 DSGVO.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Kontaktaufnahme per WhatsApp</h2>
          <p className="mt-2">
            Wenn Sie uns über den WhatsApp-Button kontaktieren, wird die Verbindung
            über den Dienst WhatsApp der WhatsApp Ireland Limited bzw. der Meta
            Platforms, Inc. (USA) hergestellt. Ihre Nachricht, Telefonnummer und
            weitere im Rahmen der Anfrage übermittelte Daten (z. B. Adresse, Maße,
            Gewicht, Fotos) werden dabei an Meta-Server übertragen und dort
            verarbeitet; hierbei ist eine Datenübermittlung in die USA möglich.
            Grundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung Ihrer Anfrage) bzw.
            lit. f DSGVO. Es gelten zusätzlich die Datenschutzbestimmungen von
            WhatsApp/Meta. Wenn Sie dies nicht möchten, kontaktieren Sie uns
            alternativ per Telefon oder E-Mail.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. Kontaktaufnahme per E-Mail/Telefon</h2>
          <p className="mt-2">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von
            Ihnen mitgeteilten Daten (u. a. Name, Kontaktdaten, Inhalt der Anfrage)
            ausschließlich zur Bearbeitung Ihrer Anfrage und einer möglichen
            Anschlusskommunikation (Art. 6 Abs. 1 lit. b, lit. f DSGVO). Die Daten
            werden gelöscht, sobald sie für die Zweckerreichung nicht mehr
            erforderlich sind und keine gesetzlichen Aufbewahrungspflichten (z. B.
            handels- und steuerrechtliche Vorschriften) entgegenstehen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Cookies und Einwilligung</h2>
          <p className="mt-2">
            Beim ersten Besuch zeigen wir einen Cookie-Hinweis mit der Wahl
            zwischen „Alle akzeptieren" und „Nur notwendige". Technisch
            notwendige Cookies (z. B. zur Speicherung Ihrer Auswahl) werden in
            jedem Fall gesetzt, Grundlage ist unser berechtigtes Interesse an
            einem funktionsfähigen Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
            Cookies zur Reichweitenmessung werden ausschließlich gesetzt, wenn
            Sie „Alle akzeptieren" wählen (Einwilligung gemäß § 25 TTDSG, Art.
            6 Abs. 1 lit. a DSGVO). Derzeit ist noch kein Analyse-Dienst aktiv
            eingebunden; sobald einer hinzukommt, wird diese Erklärung um den
            jeweiligen Anbieter, Zweck und Speicherdauer ergänzt. Sie können
            Ihre Auswahl jederzeit ändern, indem Sie die Website-Daten Ihres
            Browsers für diese Seite löschen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">6. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
            DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18
            DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die
            Verarbeitung (Art. 21 DSGVO). Zudem haben Sie das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren, z. B. beim Hamburgischen
            Beauftragten für Datenschutz und Informationsfreiheit.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Aktualität dieser Erklärung</h2>
          <p className="mt-2">
            Diese Datenschutzerklärung kann aufgrund geänderter Rechtslage oder bei
            Änderungen unseres Angebots angepasst werden. Stand: {new Date().toLocaleDateString("de-DE")}.
          </p>
        </div>

        <p className="text-sm text-muted">
          Dieser Text ist ein Entwurf auf Basis der von Ihnen bereitgestellten
          Angaben und ersetzt keine Rechtsberatung. Bitte lassen Sie ihn vor
          Veröffentlichung von einem Rechtsanwalt prüfen, insbesondere im Hinblick auf
          die tatsächlich eingesetzten Dienste.
        </p>
      </div>
    </Section>
  );
}
