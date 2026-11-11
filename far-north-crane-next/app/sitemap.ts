import type { MetadataRoute } from "next";

const base = "https://www.farnorthcrane.com";
const paths = [
  "/",
  "/about",
  "/contact",
  "/past-projects",
  "/heavy-equipment-transport-services-saskatoon",
  "/industrial-plant-maintenance-saskatoon",
  "/residential-and-commercial-crane-rentals-saskatoon",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}` }));
}
