import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Hire Far North Crane for fast & safe heavy equipment transport services. Every hauling equipment available at good rates in Saskatoon. Call (306) 291-4631.";
const title = "Heavy Equipment Transport Services Saskatoon - Far North Crane";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: {
    canonical:
      "https://www.farnorthcrane.com/heavy-equipment-transport-services-saskatoon",
  },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return (
    <WebflowPage file="heavy-equipment-transport-services-saskatoon.html" />
  );
}
