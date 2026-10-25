"use client";

import { FormEvent, useState } from "react";
import { company, mailtoHref } from "@/lib/site-config";

// Das Formular sendet nichts an einen Server: Es baut eine vollständige
// E-Mail-Anfrage zusammen und öffnet sie im E-Mail-Programm des Nutzers.
export default function RequestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const from = v("abholung");
    const to = v("zustellung");

    const body = [
      "Transportanfrage über anv-hansekontor.de",
      "",
      `Firma: ${v("firma")}`,
      `Ansprechpartner: ${v("name")}`,
      `Telefon: ${v("telefon") || "–"}`,
      "",
      `Abholung (PLZ/Ort): ${from}`,
      `Zustellung (PLZ/Ort): ${to}`,
      `Wunschtermin: ${v("termin") || "nach Absprache"}`,
      "",
      `Sendung (Art, Anzahl, Maße): ${v("sendung")}`,
      `Gesamtgewicht: ${v("gewicht")} kg`,
      `Ladebordwand benötigt: ${f.get("ladebordwand") ? "Ja" : "Nein"}`,
      "",
      `Hinweise: ${v("hinweise") || "–"}`,
    ].join("\n");

    window.location.href = mailtoHref(`Transportanfrage: ${from} → ${to}`, body);
    setSent(true);
  }

  const label = "block text-[0.8rem] font-semibold text-ink";
  const input =
    "mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-[0.95rem] text-ink placeholder:text-muted/70 focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="rounded border border-line bg-paper p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firma" className={label}>Firma *</label>
          <input id="firma" name="firma" required autoComplete="organization" className={input} />
        </div>
        <div>
          <label htmlFor="name" className={label}>Ansprechpartner *</label>
          <input id="name" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="abholung" className={label}>Abholung (PLZ, Ort) *</label>
          <input id="abholung" name="abholung" required placeholder="z. B. 40210 Düsseldorf" className={input} />
        </div>
        <div>
          <label htmlFor="zustellung" className={label}>Zustellung (PLZ, Ort) *</label>
          <input id="zustellung" name="zustellung" required placeholder="z. B. 80331 München" className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sendung" className={label}>Sendung: Art, Anzahl, Maße *</label>
          <input
            id="sendung"
            name="sendung"
            required
            placeholder="z. B. 2 Europaletten, je 120 × 80 × 110 cm"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="gewicht" className={label}>Gesamtgewicht in kg *</label>
          <input id="gewicht" name="gewicht" required inputMode="numeric" placeholder="z. B. 450" className={input} />
        </div>
        <div>
          <label htmlFor="termin" className={label}>Wunschtermin</label>
          <input id="termin" name="termin" placeholder="z. B. morgen ab 8 Uhr" className={input} />
        </div>
        <div>
          <label htmlFor="telefon" className={label}>Telefon für Rückfragen</label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={input} />
        </div>
        <div className="flex items-end">
          <label className="flex cursor-pointer items-center gap-2.5 py-2.5 text-[0.92rem] text-ink">
            <input type="checkbox" name="ladebordwand" className="h-5 w-5 accent-[#C2410C]" />
            Ladebordwand benötigt
          </label>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="hinweise" className={label}>Hinweise</label>
          <textarea
            id="hinweise"
            name="hinweise"
            rows={3}
            placeholder="z. B. Rampe vorhanden, Zeitfenster beim Empfänger, Referenznummer"
            className={input}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          className="rounded-sm bg-accent px-[22px] py-[13px] text-[0.92rem] font-bold text-white hover:bg-accent-dark"
        >
          Anfrage per E-Mail senden
        </button>
        <span className="text-[0.85rem] text-muted">
          {company.responseTime} · {company.hours}
        </span>
      </div>

      <p className="mt-4 text-[0.78rem] leading-relaxed text-muted">
        Das Formular übermittelt keine Daten an unseren Server: Es öffnet Ihr
        E-Mail-Programm mit der vorbereiteten Anfrage an {company.email}. Pflichtfelder
        sind mit * gekennzeichnet.
      </p>

      {sent && (
        <p role="status" className="mt-3 rounded-sm bg-accent-tint px-3.5 py-2.5 text-[0.86rem] text-ink">
          Ihr E-Mail-Programm wurde mit der Anfrage geöffnet – bitte dort absenden.
          Hat sich nichts geöffnet? Schreiben Sie uns direkt an{" "}
          <a href={`mailto:${company.email}`} className="font-semibold underline">
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
