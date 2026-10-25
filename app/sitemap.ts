import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

// Feste Datumsangaben: bei inhaltlichen Änderungen einer Seite hier anpassen.
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-10-25", priority: 1 },
  { path: "/agb", lastModified: "2026-10-25", priority: 0.3 },
  { path: "/impressum", lastModified: "2026-10-25", priority: 0.2 },
  { path: "/datenschutz", lastModified: "2026-10-25", priority: 0.2 },
  { path: "/barrierefreiheit", lastModified: "2026-10-25", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified: p.lastModified,
    priority: p.priority,
  }));
}
