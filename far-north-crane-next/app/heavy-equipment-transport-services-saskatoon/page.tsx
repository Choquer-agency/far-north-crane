import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Heavy equipment transport in Saskatoon. We move machinery and materials safely and on-time, with costs up-front. Request a quote.";
const title = "Heavy Equipment Transport in Saskatoon | Far North Crane";
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
