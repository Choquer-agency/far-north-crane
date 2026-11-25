import type { MetadataRoute } from "next";

const base = "https://www.farnorthcrane.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/contact",
    "/past-projects",
    "/blog",
    "/heavy-equipment-transport-services-saskatoon",
    "/industrial-plant-maintenance-saskatoon",
    "/residential-and-commercial-crane-rentals-saskatoon",
    "/blog/truck-cranes-vs-flatbed-hauling",
    "/blog/how-to-choose-a-crane-company",
    "/blog/crane-certification-saskatchewan",
  ].map((p) => ({ url: `${base}${p}` }));
}
