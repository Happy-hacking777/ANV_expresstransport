import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
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

        {company.operationsBase && (
          <div>
            <p className="font-semibold">{company.operationsBase.label}</p>
            <p>
              {company.operationsBase.street}
              <br />
              {company.operationsBase.zip} {company.operationsBase.city}
            </p>
          </div>
        )}

        <div>
          <p className="font-semibold">Vertreten durch</p>
          <p>Geschäftsführer: {company.geschaeftsfuehrer}</p>
        </div>

        <div>
          <p className="font-semibold">Kontakt</p>
          <p>
            E-Mail: {company.email}
            <br />
            Telefon: {company.phoneMain}
          </p>
        </div>

        <div>
          <p className="font-semibold">Registereintrag</p>
          <p>
            Registergericht: {company.register.court}
            <br />
            Registernummer: {company.register.hrb}
          </p>
        </div>

        <div>
          <p className="font-semibold">Umsatzsteuer-Identifikationsnummer</p>
          <p>gemäß § 27 a Umsatzsteuergesetz: {company.ustId}</p>
        </div>

        <div>
          <p className="font-semibold">Verbraucherstreitbeilegung</p>
          <p>
            Unser Angebot richtet sich ausschließlich an Unternehmer. Wir sind nicht
            bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </Section>
  );
}
