# ANV Hansekontor — Website (Next.js)

Neuer Internetauftritt für **ANV Hansekontor GmbH**, fokussiert ausschließlich
auf **Expresstransporte bis 3,5 t**. Eine Landingpage mit Anker-Navigation
(Leistungen, Preise, Vorteile, FAQ, Kontakt). Die bisherigen Inhalte der alten
Seite (Fahrzeugüberführung, Fahrzeugexport) wurden bewusst nicht übernommen.
Rechtstexte (Impressum, Datenschutz, AGB, Barrierefreiheit) liegen als
Entwürfe auf eigenen Seiten bereit.

## Struktur

```
app/
  page.tsx                  Startseite – die eine Landingpage mit allen Sektionen
  impressum/                Impressum
  datenschutz/              Datenschutzerklärung
  agb/                      AGB
  barrierefreiheit/         Erklärung zur Barrierefreiheit
  layout.tsx                Grundgerüst (Header, Footer, WhatsApp-Button)
  globals.css               Globale Styles
components/                 Wiederverwendbare UI-Bausteine
lib/site-config.ts          Zentrale Kontakt-/Firmendaten und Navigation (hier ändern!)
```

## Lokal starten

```bash
npm install
npm run dev
```

Seite läuft dann unter http://localhost:3000

## Build-Check vor dem Deploy

```bash
npm run build
```

Wichtig: Dieses Projekt wurde in einer Umgebung ohne Zugriff auf das
npm-Registry erstellt — `npm install`/`npm run build` konnte hier **nicht**
ausgeführt werden. Bitte führen Sie diesen Befehl als ersten Schritt lokal aus
und beheben Sie eventuelle Fehlermeldungen, bevor Sie deployen.

## Deploy über GitHub + Vercel

1. Projekt in ein neues GitHub-Repository pushen.
2. Auf vercel.com „Add New… → Project" wählen, das Repository verbinden.
3. Framework Preset „Next.js" wird automatisch erkannt — keine weiteren
   Einstellungen nötig.
4. Nach dem Deploy: eigene Domain (anv-hansekontor.de) unter
   Project → Settings → Domains verbinden und DNS gemäß Vercel-Anleitung
   umstellen.

## Nach Eintragung der Sitzverlegung (Hamburg → Langenfeld)

In `lib/site-config.ts`:
1. `address` auf Lessingstraße 16, 40764 Langenfeld (Rheinland) ändern.
2. `register.court` / `register.hrb` an den neuen HR-Auszug anpassen.
3. `operationsBase` auf `null` setzen – dann verschwindet die separate
   „Einsatzbasis“ automatisch aus Impressum und Kontaktbereich.
4. Datum in `app/sitemap.ts` für `/impressum` aktualisieren.

## Domain: nur anv-hansekontor.de (ohne www)

Canonical, Sitemap und robots.txt verweisen auf `https://anv-hansekontor.de`.
Die Weiterleitung www → ohne www wird in Vercel eingestellt (nicht im Code,
um Weiterleitungsschleifen zu vermeiden):
Vercel → Projekt → Settings → Domains →
`anv-hansekontor.de` ohne Redirect (primär), `www.anv-hansekontor.de` →
„Redirect to anv-hansekontor.de“ (308 Permanent).

## Google-Unternehmensprofil

Unter business.google.com ein Profil „ANV Express“ anlegen (Kategorie z. B.
„Transportunternehmen“/„Kurierdienst“, Servicegebiet Deutschland, Adresse
Langenfeld ausblenden falls kein Kundenverkehr) und diese Website verlinken.
Die strukturierten Daten (JSON-LD) in `app/layout.tsx` passen dazu.
