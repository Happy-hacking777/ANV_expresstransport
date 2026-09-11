import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import { company, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Expresstransport bis 3,5 t | Abholung Düsseldorf & Köln | Deutschlandweit",
  description:
    "Direktfahrten mit Transportern bis 3,5 t: Abholung im Rheinland, Zustellung in ganz Deutschland. Ladebordwand optional. Festpreis per WhatsApp anfragen.",
};

const leistungen = [
  "Express- und Direktfahrten innerhalb Deutschlands",
  "Transporter bis 3,5 t: Kastenwagen, Koffer oder Plane – passend zu Ihrer Sendung",
  "Ladebordwand optional – bitte bei der Anfrage angeben",
  "Paletten, Ersatzteile, Maschinenteile, Messegut",
  "Terminfahrten nach Absprache",
];

const abholorte = [
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
    text: "Wir sitzen mitten im Rheinland und sind schnell bei Ihnen.",
  },
  {
    title: "Direktfahrt",
    text: "Ihre Sendung fährt allein – ohne Umladung, ohne Sammelgut.",
  },
  {
    title: "Hohe Haftung",
    text: "Bis 40 SZR/kg – fast fünfmal so hoch wie die gesetzliche Regelhaftung von 8,33 SZR/kg.",
  },
  {
    title: "Unkompliziert",
    text: "Abstimmung per WhatsApp – ohne Formulare und Warteschleifen.",
  },
  {
    title: "Passendes Fahrzeug",
    text: "Wir wählen den Transporter nach Ihrer Sendung, auf Wunsch mit Ladebordwand.",
  },
];

const ablauf = [
  {
    step: "01",
    title: "Anfrage senden",
    text: "Abhol- und Zieladresse, Maße, Gewicht und Wunschtermin per WhatsApp – gern mit Foto der Ware.",
  },
  {
    step: "02",
    title: "Festpreis erhalten",
    text: "Sie bekommen ein verbindliches Angebot.",
  },
  {
    step: "03",
    title: "Abholung & Zustellung",
    text: "Wir holen ab und fahren direkt zum Empfänger.",
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
      "Paletten, Kartons, Ersatzteile, Maschinenteile, Messematerial und andere Güter, die in einen Transporter bis 3,5 t passen. Teilen Sie uns Maße und Gewicht mit – wir wählen das passende Fahrzeug.",
  },
  {
    question: "Brauche ich eine Ladebordwand?",
    answer:
      "Wenn am Abhol- oder Zielort keine Rampe oder kein Stapler vorhanden ist, empfehlen wir die Ladebordwand. Bitte geben Sie das bei der Anfrage an.",
  },
  {
    question: "Wie ist meine Sendung versichert?",
    answer: "Wir haften bis 40 SZR/kg und damit deutlich über der gesetzlichen Regelhaftung.",
  },
  {
    question: "Wie erhalte ich einen Preis?",
    answer:
      "Am schnellsten per WhatsApp. Für Strecken ab 500 km gilt ab 0,90 €/km zzgl. MwSt., für kürzere Strecken erstellen wir einen individuellen Festpreis.",
  },
];

const requestText =
  "Hallo, ich möchte einen Transport anfragen. Abholadresse: ___ Zieladresse: ___ Maße/Gewicht: ___ Wunschtermin: ___";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-11 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
              Expresstransporte bis 3,5 t
            </p>
            <h1 className="mt-3.5 max-w-3xl font-display text-[2.3rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[3.6rem]">
              Abholung im Rheinland, Zustellung deutschlandweit
            </h1>
            <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-muted sm:text-lg">
              Direktfahrt ohne Umladung: Wir holen Ihre Sendung in Düsseldorf, Köln und
              Umgebung ab und liefern an jede Adresse in Deutschland.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={whatsappHref(requestText)} external>
                Jetzt per WhatsApp anfragen
              </Button>
              <Button href="#preise" variant="ghost">
                Preise ansehen
              </Button>
            </div>
          </div>

          <div className="rounded border border-line bg-paper p-5 shadow-sm">
            <svg
              viewBox="0 0 380 320"
              role="img"
              aria-label="Abholradius von ca. 100 km rund um Düsseldorf, mit Direktfahrt in ganz Deutschland"
              className="block h-auto w-full"
            >
              <circle
                cx="150"
                cy="165"
                r="96"
                fill="none"
                className="text-line"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              <g className="text-line" stroke="currentColor" strokeWidth="1.5">
                <line x1="150" y1="165" x2="86" y2="108" />
                <line x1="150" y1="165" x2="150" y2="72" />
                <line x1="150" y1="165" x2="222" y2="96" />
                <line x1="150" y1="165" x2="232" y2="168" />
                <line x1="150" y1="165" x2="205" y2="232" />
                <line x1="150" y1="165" x2="122" y2="248" />
                <line x1="150" y1="165" x2="70" y2="210" />
              </g>
              <g className="text-muted" fill="currentColor">
                <circle cx="86" cy="108" r="3.5" />
                <circle cx="150" cy="72" r="3.5" />
                <circle cx="222" cy="96" r="3.5" />
                <circle cx="232" cy="168" r="3.5" />
                <circle cx="205" cy="232" r="3.5" />
                <circle cx="122" cy="248" r="3.5" />
                <circle cx="70" cy="210" r="3.5" />
              </g>
              <line
                x1="228"
                y1="130"
                x2="358"
                y2="55"
                className="text-accent"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="1 7"
                strokeLinecap="round"
              />
              <circle cx="150" cy="165" r="7" className="text-accent" fill="currentColor" />
              <circle
                cx="150"
                cy="165"
                r="7"
                fill="none"
                className="text-accent"
                stroke="currentColor"
                strokeWidth="6"
                opacity="0.18"
              />
              <text
                x="150"
                y="196"
                textAnchor="middle"
                className="text-ink"
                fill="currentColor"
                fontSize="10"
                fontWeight="600"
              >
                DÜS
              </text>
              <text
                x="345"
                y="42"
                textAnchor="end"
                className="text-accent"
                fill="currentColor"
                fontSize="10"
                fontWeight="600"
              >
                → DE
              </text>
            </svg>
            <div className="mt-2.5 flex justify-between font-mono text-[0.72rem] uppercase tracking-wide text-muted">
              <span>Radius ≈ 100 km</span>
              <span>Direktfahrt · keine Umladung</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Leistungen */}
      <Section tone="line" id="leistungen">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Leistungen
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Was wir fahren</h2>
        <div className="mt-7 border-t border-line">
          {leistungen.map((item, i) => (
            <div
              key={item}
              className={`flex items-baseline gap-4 py-4 ${
                i < leistungen.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span aria-hidden="true" className="flex-none font-bold text-accent">
                —
              </span>
              <p className="text-[1.1rem] font-medium leading-snug text-ink sm:text-[1.28rem]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Abholgebiet */}
      <Section id="abholgebiet">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Abholgebiet
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">
          Rheinland ab, ganz Deutschland an
        </h2>
        <div className="mt-7 grid gap-9 sm:grid-cols-2">
          <div>
            <p className="max-w-[46ch] text-base text-muted">
              Wir holen im Umkreis von ca. 100 km um Düsseldorf ab – unter anderem in:
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
          </div>
        </div>
      </Section>

      {/* Preise */}
      <Section tone="line" id="preise">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Preise
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">
          Klar kalkuliert, ohne Warteschleife
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
            <span className="text-sm text-muted">Individuell per WhatsApp</span>
          </div>
          <div className="flex flex-col gap-1.5 rounded border border-line bg-paper p-6">
            <span className="font-mono text-[0.76rem] uppercase tracking-wide text-muted">
              Ladebordwand
            </span>
            <span className="font-display text-[1.9rem] font-extrabold text-ink">Optional</span>
            <span className="text-sm text-muted">Aufpreis auf Anfrage</span>
          </div>
        </div>
        <p className="mt-7 max-w-[56ch] text-base leading-relaxed text-muted">
          Senden Sie uns Abhol- und Zieladresse, Maße, Gewicht und Wunschtermin – Sie
          erhalten umgehend ein verbindliches Festpreisangebot.
        </p>
        <div className="mt-[18px]">
          <Button href={whatsappHref(requestText)} external>
            Festpreis per WhatsApp anfragen
          </Button>
        </div>
      </Section>

      {/* Vorteile */}
      <Section id="vorteile">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Ihre Vorteile
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Warum ANV Express</h2>
        <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vorteile.map((v) => (
            <div key={v.title}>
              <h3 className="text-[1.08rem] font-bold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* So funktioniert es */}
      <Section tone="ink" id="ablauf">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          So funktioniert es
        </p>
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
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Häufige Fragen
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Bevor Sie schreiben</h2>
        <div className="mt-7">
          <Faq items={faqItems} />
        </div>
      </Section>

      {/* Kontakt */}
      <Section tone="line" id="kontakt">
        <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Kontakt
        </p>
        <h2 className="mt-2.5 text-[1.9rem] text-ink sm:text-[2.4rem]">Sprechen Sie mit uns</h2>
        <div className="mt-7 grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">
                WhatsApp — schnellster Weg
              </div>
              <a
                href={whatsappHref(requestText)}
                className="text-[1.15rem] font-semibold text-ink hover:text-accent"
              >
                {company.phoneMain}
              </a>
            </div>
            <div>
              <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">
                Telefon
              </div>
              <a
                href={`tel:${company.phoneMain.replace(/\s/g, "")}`}
                className="text-[1.15rem] font-semibold text-ink hover:text-accent"
              >
                {company.phoneMain}
              </a>
            </div>
            <div>
              <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">
                E-Mail
              </div>
              <a
                href={`mailto:${company.email}`}
                className="text-[1.15rem] font-semibold text-ink hover:text-accent"
              >
                {company.email}
              </a>
            </div>
            <div>
              <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">
                Erreichbarkeit
              </div>
              <span className="text-[1.15rem] font-semibold text-ink">{company.hours}</span>
            </div>
          </div>
          <div className="rounded border border-line bg-paper p-6">
            <div className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">
              Firma
            </div>
            <p className="mt-2 text-[1.05rem] font-semibold text-ink">{company.name}</p>
            <p className="mt-1.5 text-muted">
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
