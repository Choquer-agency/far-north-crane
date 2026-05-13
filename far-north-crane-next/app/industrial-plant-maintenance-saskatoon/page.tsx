import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Optimize operations & prevent downtime with our industrial plant maintenance services in Saskatoon. Our experts ensure efficiency and reliability for your industry.";
const title = "Industrial Plant Maintenance & Junk Removal Services Saskatoon";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: {
    canonical:
      "https://www.farnorthcrane.com/industrial-plant-maintenance-saskatoon",
  },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return <WebflowPage file="industrial-plant-maintenance-saskatoon.html" />;
}
