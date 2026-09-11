// Zentrale Kontakt- und Firmendaten.
// Bitte prüfen/anpassen, bevor die Seite veröffentlicht wird.

export const company = {
  name: "ANV Hansekontor GmbH",
  geschaeftsfuehrer: "Ivan Plaksin",
  address: {
    street: "Lademannbogen 6",
    zip: "22339",
    city: "Hamburg",
    country: "Deutschland",
  },
  register: {
    court: "Amtsgericht Hamburg",
    hrb: "HRB 153739",
  },
  ustId: "DE320216525",
  steuernummer: "50/702/01323",
  eori: "DE383540654052819",
  phoneMain: "+49 151 41261888",
  phoneIvanDirect: "+49 151 17820888",
  whatsapp: "4915141261888", // wa.me erwartet nur Ziffern, ohne "+" und ohne Leerzeichen
  email: "info@anv-hansekontor.de",
  hours: "Mo–Sa, 7–20 Uhr", // Platzhalter – bitte bestätigen
};

export const whatsappHref = (text: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

// Eine Seite, Anker-Navigation. "/#leistungen" funktioniert auch von den
// Rechtstexten aus (führt zurück zur Startseite und scrollt zum Anker).
export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Vorteile", href: "/#vorteile" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];
