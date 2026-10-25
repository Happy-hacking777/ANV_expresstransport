import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import RequestForm from "@/components/RequestForm";
import { company, serviceLocation, telHref, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Güterbeförderung bis 3,5 t – Direktfahrten ab Rheinland | ANV Express",
  },
  description:
    "Güterbeförderung mit Transportern bis 3,5 t: Direktfahrt ohne Umladung, Abholung in Düsseldorf, Köln und dem Rheinland, Zustellung deutschlandweit. Festpreis-Angebot innerhalb von 30 Minuten.",
  alternates: { canonical: "/" },
};

const leistungen = [
  "Güterbeförderung und Direktfahrten innerhalb Deutschlands",
  "Transporter bis 3,5 t: Kastenwagen, Koffer oder Plane – passend zu Ihrer Sendung",
  "Ladebordwand optional – bitte bei der Anfrage angeben",
  "Paletten, Ersatzteile, Maschinenteile, Messegut",
  "Terminfahrten nach Absprache",
  "Rückladungen: Abholung bundesweit nach Absprache",
];

const abholorte = [
  "Düsseldorf",
  "Köln",
  "Leverkusen",
  "Duisburg",
  "Essen",
  "Dortmund",
  "Wuppertal",
  "Krefeld",
  "Mönchengladbach",
  "Bonn",
  "Aachen",
];

const vorteile = [
  {
    title: "Kurze Wege",
    text: "Unsere Einsatzbasis liegt in Langenfeld, mitten im Rheinland – schnell in Düsseldorf, Köln und im Ruhrgebiet.",
  },
  {
    title: "Direktfahrt",
    text: "Ihre Sendung fährt allein – ohne Umladung, ohne Sammelgut.",
  },
  {
    title: "Hohe Haftung",
    text: "Bis 40 SZR/kg – fast fünfmal so hoch wie die gesetzliche Regelhaftung von 8,33 SZR/kg, abgesichert über unsere Verkehrshaftungsversicherung.",
  },
  {
    title: "Angebot in 30 Minuten",
    text: "Verbindlicher Festpreis per E-Mail – schriftlich, nachvollziehbar, Mo–Sa von 7 bis 20 Uhr.",
  },
  {
    title: "Passendes Fahrzeug",
    text: "Wir wählen den Transporter nach Ihrer Sendung, auf Wunsch mit Ladebordwand.",
  },
  {
    title: "Klare Bedingungen",
    text: "Wir arbeiten auf Grundlage der ADSp 2017 – der Standardbedingungen der deutschen Logistikbranche.",
  },
];

const ablauf = [
  {
    step: "01",
    title: "Anfrage senden",
    text: "Formular ausfüllen oder E-Mail schreiben: Abhol- und Zieladresse, Maße, Gewicht und Wunschtermin – gern mit Foto der Ware.",
  },
  {
    step: "02",
    title: "Festpreis erhalten",
    text: "Innerhalb von 30 Minuten erhalten Sie ein verbindliches Angebot per E-Mail.",
  },
  {
    step: "03",
    title: "Abholung & Zustellung",
    text: "Nach Ihrer Auftragsbestätigung holen wir ab und fahren direkt zum Empfänger.",
  },
];

const faqItems = [
  {
    question: "Wie schnell können Sie abholen?",
    answer: "Im Rheinland kurzfristig – nach Absprache auch am selben Tag.",
  },
  {
    question: "Was kann transportiert werden?",
    answer:
      "Paletten, Kartons, Ersatzteile, Maschinenteile, Messematerial und andere Güter, die in einen Transporter bis 3,5 t passen. Teilen Sie uns Maße und Gewicht mit – wir wählen das passende Fahrzeug. Gefahrgut nur nach vorheriger Absprache.",
  },
  {
    question: "Holen Sie auch außerhalb des Rheinlands ab?",
    answer:
      "Ja, als Rückladung: Wenn wir ohnehin in Ihrer Region sind – etwa nach einer Zustellung in München, Berlin oder Hamburg –, holen wir bundesweit ab. Fragen Sie einfach an.",
  },
  {
    question: "Brauche ich eine Ladebordwand?",
    answer:
      "Wenn am Abhol- oder Zielort keine Rampe oder kein Stapler vorhanden ist, empfehlen wir die Ladebordwand. Bitte geben Sie das bei der Anfrage an.",
  },
  {
    question: "Wie ist meine Sendung versichert?",
    answer:
      "Wir haften bis 40 SZR/kg und damit deutlich über der gesetzlichen Regelhaftung; das ist über unsere Verkehrshaftungsversicherung abgesichert. Grundlage unserer Aufträge sind die ADSp 2017.",
  },
  {
    question: "Wie erhalte ich einen Preis?",
    answer:
      "Über das Anfrageformular oder per E-Mail – Sie erhalten innerhalb von 30 Minuten (Mo–Sa, 7–20 Uhr) ein verbindliches Festpreisangebot. Für Strecken ab 500 km gilt ab 0,90 €/km zzgl. MwSt.",
  },
  {
    question: "Arbeiten Sie auch für Privatkunden?",
    answer:
      "Nein. Unser Angebot richtet sich ausschließlich an Unternehmen, Gewerbetreibende und Selbstständige.",
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
      {children}
    </p>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[3px] flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-tint text-accent"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-11 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <Kicker>Güterbeförderung bis 3,5 t · seit {company.foundingYear}</Kicker>
            <h1 className="mt-3.5 max-w-3xl font-display text-[2.3rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[3.4rem]">
              Ihre Sendung direkt ans Ziel – ohne Umladung, auf Wunsch noch heute abgeholt
            </h1>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted sm:text-lg">
              Abholung in Düsseldorf, Köln und dem gesamten Rheinland, Zustellung an
              jede Adresse in Deutschland. Rückladungen holen wir nach Absprache
              bundesweit ab.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#anfrage">Angebot per E-Mail anfragen</Button>
              <Button href="#preise" variant="ghost">
                Preise ansehen
              </Button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-[0.88rem] text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none text-accent">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>
                <strong className="font-semibold text-ink">{company.responseTime}</strong> ·{" "}
                {company.hours} · nur für Geschäftskunden
              </span>
            </p>
          </div>

          <div className="rounded border border-line bg-paper p-5 shadow-sm">
            <svg
              viewBox="0 0 380 320"
              role="img"
              aria-label="Abholradius von ca. 100 km rund um Düsseldorf, Direktfahrt in ganz Deutschland"
              className="block h-auto w-full"
            >
              <circle cx="150" cy="165" r="96" fill="none" className="text-line" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
              <g className="text-line" stroke="currentColor" strokeWidth="1.5">
                <line x1="150" y1="165" x2="76.5" y2="103.3" />
                <line x1="150" y1="165" x2="150.0" y2="69.0" />
                <line x1="150" y1="165" x2="220.2" y2="99.5" />
                <line x1="150" y1="165" x2="245.9" y2="168.4" />
                <line x1="150" y1="165" x2="209.1" y2="240.6" />
                <line x1="150" y1="165" x2="121.9" y2="256.8" />
                <line x1="150" y1="165" x2="64.5" y2="208.6" />
              </g>
              <g className="text-muted" fill="currentColor">
                <circle cx="76.5" cy="103.3" r="3.5" />
                <circle cx="150.0" cy="69.0" r="3.5" />
                <circle cx="220.2" cy="99.5" r="3.5" />
                <circle cx="245.9" cy="168.4" r="3.5" />
                <circle cx="209.1" cy="240.6" r="3.5" />
                <circle cx="121.9" cy="256.8" r="3.5" />
                <circle cx="64.5" cy="208.6" r="3.5" />
              </g>
              <line x1="231.4" y1="114.1" x2="282" y2="62" className="text-accent" stroke="currentColor" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
              <circle cx="150" cy="165" r="13" className="text-accent" fill="currentColor" opacity="0.15" />
              <circle cx="150" cy="165" r="7" className="text-accent" fill="currentColor" />
              <rect x="98" y="186" width="104" height="24" rx="12" className="text-accent" fill="currentColor" />
              <text x="150" y="202" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="600" letterSpacing="1.2" className="font-mono">
                DÜSSELDORF
              </text>
              <rect x="268" y="36" width="98" height="24" rx="12" className="text-accent" fill="#FAFAF8" stroke="currentColor" strokeWidth="1.5" />
              <text x="317" y="52" textAnchor="middle" className="text-accent font-mono" fill="currentColor" fontSize="11" fontWeight="600" letterSpacing="1.2">
                GANZ DE
              </text>
            </svg>
            <div className="mt-2.5 flex justify-between gap-3 font-mono text-[0.72rem] uppercase tracking-wide text-muted">
              <span>Abholradius ≈ 100 km</span>
              <span>Direktfahrt · keine Umladung</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Leistungen */}
      <Section tone="line" id="leistungen">
        <Kicker>Leistungen</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Was wir fahren</h2>
        <ul className="mt-7 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
          {leistungen.map((item) => (
            <li key={item} className="flex items-start gap-3.5 border-b border-line py-4">
              <CheckIcon />
              <p className="text-[1.05rem] font-medium leading-snug text-ink sm:text-[1.15rem]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Abholgebiet */}
      <Section id="abholgebiet">
        <Kicker>Abholgebiet</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">
          Rheinland ab, ganz Deutschland an
        </h2>
        <div className="mt-7 grid gap-9 sm:grid-cols-2">
          <div>
            <p className="max-w-[46ch] text-base text-muted">
              Von unserer Einsatzbasis in {serviceLocation.city} holen wir im Umkreis
              von ca. 100 km um Düsseldorf ab – unter anderem in:
            </p>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              {abholorte.map((ort) => (
                <span
                  key={ort}
                  className="rounded-sm border border-line bg-paper px-3.5 py-1.5 font-mono text-[0.82rem] text-ink"
                >
                  {ort}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded border border-line bg-paper p-[22px]">
            <span className="font-display text-[2.4rem] font-extrabold text-accent">100 km</span>
            <span className="font-mono text-[0.85rem] text-muted">Abholradius um Düsseldorf</span>
            <div className="my-3.5 h-px bg-line" />
            <span className="font-bold text-ink">Zustellung an jede Adresse in Deutschland.</span>
            <span className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              <strong className="font-semibold text-ink">Rückladungen bundesweit:</strong> Sind
              wir nach einer Zustellung in Ihrer Region, holen wir auch dort ab –
              sprechen Sie uns an.
            </span>
          </div>
        </div>
      </Section>

      {/* Preise */}
      <Section tone="line" id="preise">
        <Kicker>Preise</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">
          Klar kalkuliert, schriftlich bestätigt
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5 rounded border border-line bg-paper p-6">
            <span className="font-mono text-[0.76rem] uppercase tracking-wide text-muted">
              Fernstrecken ab 500 km
            </span>
            <span className="font-display text-[1.9rem] font-extrabold text-ink">
              <span className="mr-1 font-mono text-[0.95rem] font-semibold text-muted">ab</span>
              0,90 €/km
            </span>
            <span className="text-sm text-muted">Zzgl. MwSt.</span>
          </div>
          <div className="flex flex-col gap-1.5 rounded border border-line bg-paper p-6">
            <span className="font-mono text-[0.76rem] uppercase tracking-wide text-muted">
              Strecken unter 500 km
            </span>
            <span className="font-display text-[1.9rem] font-extrabold text-ink">Festpreis</span>
            <span className="text-sm text-muted">Individuell per E-Mail</span>
          </div>
          <div className="flex flex-col gap-1.5 rounded border border-line bg-paper p-6">
            <span className="font-mono text-[0.76rem] uppercase tracking-wide text-muted">
              Ladebordwand
            </span>
            <span className="font-display text-[1.9rem] font-extrabold text-ink">Optional</span>
            <span className="text-sm text-muted">Aufpreis auf Anfrage</span>
          </div>
        </div>
        <p className="mt-7 max-w-[60ch] text-base leading-relaxed text-muted">
          Senden Sie uns Abhol- und Zieladresse, Maße, Gewicht und Wunschtermin – Sie
          erhalten ein verbindliches Festpreisangebot{" "}
          <strong className="font-semibold text-ink">innerhalb von 30 Minuten</strong> (
          {company.hours}). Alle Preise netto zzgl. MwSt.; unser Angebot richtet sich
          ausschließlich an Geschäftskunden.
        </p>
        <div className="mt-[18px]">
          <Button href="#anfrage">Festpreis per E-Mail anfragen</Button>
        </div>
      </Section>

      {/* Vorteile */}
      <Section id="vorteile">
        <Kicker>Ihre Vorteile</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Warum ANV Express</h2>
        <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vorteile.map((v) => (
            <div key={v.title} className="border-t-2 border-accent pt-4">
              <h3 className="text-[1.08rem] font-bold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* So funktioniert es */}
      <Section tone="ink" id="ablauf">
        <Kicker>So funktioniert es</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] sm:text-[2.4rem]">Drei Schritte zum Termin</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {ablauf.map((step) => (
            <div key={step.step}>
              <span className="font-mono text-[0.95rem] text-accent">{step.step}</span>
              <h3 className="mt-2.5 text-[1.08rem] font-bold">{step.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/70">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Kicker>Häufige Fragen</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Bevor Sie schreiben</h2>
        <div className="mt-7">
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* Kontakt / Anfrage */}
      <Section tone="line" id="kontakt">
        <Kicker>Kontakt</Kicker>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Angebot anfragen</h2>
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted">
          Füllen Sie das Formular aus – Ihr E-Mail-Programm öffnet sich mit der fertigen
          Anfrage. Oder schreiben Sie uns direkt an{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-ink underline hover:text-accent">
            {company.email}
          </a>
          .
        </p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
          <div id="anfrage">
            <RequestForm />
          </div>

          <div className="flex flex-col gap-5">
            <ContactItem label="E-Mail — bevorzugter Weg">
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </ContactItem>
            <ContactItem label="Telefon">
              <a href={telHref} className="hover:text-accent">
                {company.phoneMain}
              </a>
            </ContactItem>
            <ContactItem label="Erreichbarkeit">
              <span>{company.hours}</span>
              <span className="mt-0.5 block text-[0.9rem] font-normal text-muted">
                {company.responseTime}
              </span>
            </ContactItem>
            <ContactItem label="Auch per WhatsApp">
              <a
                href={whatsappHref("Hallo, ich möchte einen Transport anfragen.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Nachricht senden
              </a>
            </ContactItem>

            <div className="rounded border border-line bg-paper p-5">
              <p className="text-[1rem] font-semibold text-ink">
                {company.brand}
                <span className="block text-[0.85rem] font-normal text-muted">
                  ein Service der {company.name}
                </span>
              </p>
              {company.operationsBase && (
                <div className="mt-3.5">
                  <div className="font-mono text-[0.7rem] uppercase tracking-wide text-accent">
                    {company.operationsBase.label}
                  </div>
                  <p className="mt-1 text-[0.92rem] text-muted">
                    {company.operationsBase.street}
                    <br />
                    {company.operationsBase.zip} {company.operationsBase.city}
                  </p>
                </div>
              )}
              <div className="mt-3.5">
                <div className="font-mono text-[0.7rem] uppercase tracking-wide text-accent">
                  Sitz der Gesellschaft
                </div>
                <p className="mt-1 text-[0.92rem] text-muted">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">{label}</div>
      <div className="text-[1.1rem] font-semibold text-ink">{children}</div>
    </div>
  );
}
