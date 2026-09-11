import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <Section className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Impressum</h1>

      <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-ink">
        <div>
          <p className="font-semibold">Angaben gemäß § 5 DDG</p>
          <p>
            {company.name}
            <br />
            {company.address.street}
            <br />
            {company.address.zip} {company.address.city}
            <br />
            {company.address.country}
          </p>
        </div>

        <div>
          <p className="font-semibold">Vertreten durch</p>
          <p>Geschäftsführer: {company.geschaeftsfuehrer}</p>
        </div>

        <div>
          <p className="font-semibold">Kontakt</p>
          <p>
            Telefon: {company.phoneMain}
            <br />
            E-Mail: {company.email}
          </p>
        </div>

        <div>
          <p className="font-semibold">Registereintrag</p>
          <p>
            Eintragung im Handelsregister
            <br />
            Registergericht: {company.register.court}
            <br />
            Registernummer: {company.register.hrb}
          </p>
        </div>

        <div>
          <p className="font-semibold">Umsatzsteuer-Identifikationsnummer</p>
          <p>
            gemäß § 27 a Umsatzsteuergesetz: {company.ustId}
            <br />
            Steuernummer: {company.steuernummer}
          </p>
        </div>

        <div>
          <p className="font-semibold">Zollnummer</p>
          <p>EORI-Nummer: {company.eori}</p>
        </div>

        <div>
          <p className="font-semibold">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </p>
          <p>
            {company.geschaeftsfuehrer}
            <br />
            {company.address.street}, {company.address.zip} {company.address.city}
          </p>
        </div>

        <div>
          <p className="font-semibold">EU-Streitschlichtung</p>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse
            finden Sie oben. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <p className="text-sm text-muted">
          Dieses Impressum wurde auf Basis der von Ihnen bereitgestellten Angaben
          erstellt. Bitte lassen Sie es vor Veröffentlichung von einem Rechtsanwalt
          oder Steuerberater prüfen.
        </p>
      </div>
    </Section>
  );
}
