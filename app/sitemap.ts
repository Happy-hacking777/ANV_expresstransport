import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anv-hansekontor.de";
  const routes = [
    "",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/barrierefreiheit",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
