"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "anv-express-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage nicht verfügbar (z. B. Privatmodus) – Banner sicherheitshalber zeigen
      setVisible(true);
    }
  }, []);

  function setConsent(value: "all" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignorieren – Zustimmung gilt dann nur für diese Sitzung
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-4 left-4 right-4 z-[70] max-w-[360px] rounded border border-line bg-paper p-[18px] shadow-xl sm:right-auto sm:bottom-5 sm:left-5"
    >
      <p className="text-[0.86rem] leading-relaxed text-muted">
        Wir verwenden nur technisch notwendige Cookies für den Betrieb dieser
        Seite. Mit „Alle akzeptieren" erlauben Sie zusätzlich Cookies zur
        Reichweitenmessung.
      </p>
      <div className="mt-3.5 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setConsent("all")}
          className="rounded-sm bg-accent px-4 py-2.5 text-[0.84rem] font-bold text-white hover:bg-accent-dark"
        >
          Alle akzeptieren
        </button>
        <button
          type="button"
          onClick={() => setConsent("essential")}
          className="rounded-sm border border-line px-4 py-2.5 text-[0.84rem] font-bold text-ink hover:border-ink"
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
