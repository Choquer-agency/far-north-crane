import type { MetadataRoute } from "next";

const base = "https://www.farnorthcrane.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/contact",
    "/past-projects",
    "/heavy-equipment-transport-services-saskatoon",
    "/industrial-plant-maintenance-saskatoon",
    "/residential-and-commercial-crane-rentals-saskatoon",
  ].map((p) => ({ url: `${base}${p}` }));
}
