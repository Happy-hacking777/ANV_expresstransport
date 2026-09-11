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

## Bitte vor Veröffentlichung prüfen

- **Kontaktdaten** in `lib/site-config.ts`: Erreichbarkeitszeiten sind aktuell
  ein Platzhalter ("Mo–Sa, 7–20 Uhr") — bitte bestätigen oder anpassen.
- **Rechtstexte**: Impressum, Datenschutzerklärung, AGB und die Erklärung zur
  Barrierefreiheit sind Entwürfe auf Basis Ihrer Angaben und ersetzen keine
  Rechtsberatung. Bitte von einem Rechtsanwalt/Steuerberater prüfen lassen —
  insbesondere die Widerrufsrecht-Klausel in den AGB (B2C-Geschäft).
- **Bilder/Logo**: Es wurden bewusst keine Fotos eingebaut (keine
  Bildrechte vorhanden). Der Auftritt arbeitet mit Farbflächen/Icons im
  bestehenden Stil. Eigene Fotos/Logo können in `public/` abgelegt und in
  `app/page.tsx` eingebunden werden.
- **Barrierefreiheit (BFSG)**: Grundstruktur ist auf WCAG 2.1 AA ausgelegt
  (Tastaturbedienbarkeit, Kontraste, Fokusring, Skip-Link). Bei realen Bildern
  bitte Alt-Texte ergänzen; bei künftigem Einsatz von Video/Formularen die
  entsprechenden Anforderungen (Untertitel, Fehlermeldungen etc.) beachten.
- **Cookies/Analytics**: Cookie-Banner (`components/CookieBanner.tsx`) ist
  eingebaut und fragt "Alle akzeptieren" vs. "Nur notwendige" ab, aktuell aber
  noch ohne angeschlossenen Analyse-Dienst. Wird später Google Analytics o. Ä.
  ergänzt, darf das entsprechende Skript erst nach "Alle akzeptieren" geladen
  werden (§ 25 TTDSG) — und `app/datenschutz/page.tsx`, Abschnitt 5, muss um
  Anbieter/Zweck/Speicherdauer ergänzt werden.
- **Navigation/Domain**: Diese Seite ersetzt den bisherigen Auftritt komplett
  (gleiche Domain/Marke ANV Hansekontor, gleiches Impressum). Anker-Links in
  `lib/site-config.ts` (`nav`-Array) anpassen, falls Sektionen umbenannt oder
  neu geordnet werden.
