// Zentrale Kontakt- und Firmendaten.

export const siteUrl = "https://anv-hansekontor.de";

export const company = {
  name: "ANV Hansekontor GmbH",
  brand: "ANV Express",
  foundingYear: 2018,
  geschaeftsfuehrer: "Ivan Plaksin",

  // Eingetragener Sitz laut Handelsregister.
  // NACH EINTRAGUNG DER SITZVERLEGUNG: hier Langenfeld eintragen
  // (Lessingstraße 16, 40764 Langenfeld (Rheinland)), Registergericht
  // anpassen (siehe unten) und `operationsBase` auf null setzen.
  address: {
    street: "Lademannbogen 6",
    zip: "22339",
    city: "Hamburg",
    country: "Deutschland",
  },

  // Einsatzbasis im Rheinland – wird überall neben dem Sitz angezeigt,
  // solange die Sitzverlegung noch nicht eingetragen ist.
  operationsBase: {
    label: "Einsatzbasis Langenfeld (Rheinland)",
    street: "Lessingstraße 16",
    zip: "40764",
    city: "Langenfeld (Rheinland)",
    country: "Deutschland",
  } as { label: string; street: string; zip: string; city: string; country: string } | null,

  register: {
    // Nach Sitzverlegung ggf. neues Registergericht + HRB-Nummer eintragen.
    court: "Amtsgericht Hamburg",
    hrb: "HRB 153739",
  },
  ustId: "DE320216525",
  phoneMain: "+49 151 41261888",
  whatsapp: "4915141261888", // wa.me erwartet nur Ziffern, ohne "+" und ohne Leerzeichen
  email: "info@anv-hansekontor.de",
  hours: "Mo–Sa, 7–20 Uhr",
  responseTime: "Angebot innerhalb von 30 Minuten",
};

// Für Anzeige/Schema: Einsatzbasis, falls vorhanden, sonst Sitz.
export const serviceLocation = company.operationsBase ?? company.address;

export const whatsappHref = (text: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailtoHref = (subject: string, body?: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const telHref = `tel:${company.phoneMain.replace(/\s/g, "")}`;

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
