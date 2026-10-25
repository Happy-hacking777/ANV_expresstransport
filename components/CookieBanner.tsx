"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "anv-express-cookie-consent";
const OPEN_EVENT = "anv:open-cookie-settings";

type Consent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  savedAt: string;
};

// Öffnet den Dialog erneut (z. B. über „Cookie-Einstellungen" im Footer).
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? (parsed as Consent) : null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setStatistics(Boolean(stored.statistics));
      setMarketing(Boolean(stored.marketing));
    }
    const open = () => {
      const current = readConsent();
      setStatistics(Boolean(current?.statistics));
      setMarketing(Boolean(current?.marketing));
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  // Schwebenden „Angebot anfragen"-Button ausblenden, solange der Dialog offen ist.
  useEffect(() => {
    if (visible) document.documentElement.dataset.cookieOpen = "true";
    else delete document.documentElement.dataset.cookieOpen;
  }, [visible]);

  function save(next: { statistics: boolean; marketing: boolean }) {
    const consent: Consent = {
      necessary: true,
      statistics: next.statistics,
      marketing: next.marketing,
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // Speicher nicht verfügbar – Auswahl gilt nur für diese Sitzung.
    }
    setStatistics(next.statistics);
    setMarketing(next.marketing);
    setShowSettings(false);
    setVisible(false);
  }

  if (!visible) return null;

  const btnPrimary =
    "rounded-sm bg-accent px-4 py-2.5 text-[0.84rem] font-bold text-white hover:bg-accent-dark";
  const btnSecondary =
    "rounded-sm border border-ink px-4 py-2.5 text-[0.84rem] font-bold text-ink hover:bg-ink hover:text-paper";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed bottom-3 left-3 right-3 z-[70] max-h-[85vh] overflow-y-auto rounded border border-line bg-paper p-5 shadow-xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[420px]"
    >
      <p id="cookie-title" className="font-bold text-ink">
        {showSettings ? "Cookie-Einstellungen" : "Ihre Privatsphäre"}
      </p>

      {!showSettings ? (
        <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">
          Wir verwenden technisch notwendige Speicher, damit diese Website
          funktioniert. Mit Ihrer Einwilligung dürften wir zusätzlich Statistik-
          und Marketing-Dienste einsetzen – aktuell sind solche Dienste jedoch
          nicht eingebunden. Ihre Auswahl können Sie jederzeit unter
          „Cookie-Einstellungen" im Seitenfuß ändern. Mehr in der{" "}
          <Link href="/datenschutz" className="underline hover:text-ink">
            Datenschutzerklärung
          </Link>
          .
        </p>
      ) : (
        <div className="mt-3 space-y-3">
          <Category
            title="Notwendig"
            text="Erforderlich für den Betrieb der Website, z. B. zum Speichern dieser Auswahl."
            checked
            disabled
          />
          <Category
            title="Statistik"
            text="Anonyme Reichweitenmessung. Derzeit nicht im Einsatz."
            checked={statistics}
            onChange={setStatistics}
          />
          <Category
            title="Marketing"
            text="Inhalte und Werbung von Drittanbietern. Derzeit nicht im Einsatz."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => save({ statistics: true, marketing: true })}
          className={btnPrimary}
        >
          Alle akzeptieren
        </button>
        {showSettings ? (
          <button
            type="button"
            onClick={() => save({ statistics, marketing })}
            className={btnSecondary}
          >
            Auswahl speichern
          </button>
        ) : (
          <button
            type="button"
            onClick={() => save({ statistics: false, marketing: false })}
            className={btnSecondary}
          >
            Ablehnen
          </button>
        )}
        {!showSettings && (
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className="px-1 py-2.5 text-[0.84rem] font-semibold text-muted underline hover:text-ink"
          >
            Einstellungen
          </button>
        )}
      </div>
    </div>
  );
}

function Category({
  title,
  text,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  text: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  const id = `cookie-${title.toLowerCase()}`;
  return (
    <div className="flex items-start justify-between gap-4 rounded-sm border border-line p-3">
      <label htmlFor={id} className="text-[0.84rem]">
        <span className="font-semibold text-ink">{title}</span>
        {disabled && <span className="ml-1.5 text-muted">(immer aktiv)</span>}
        <span className="mt-0.5 block leading-snug text-muted">{text}</span>
      </label>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 flex-none accent-[#C2410C]"
      />
    </div>
  );
}
