import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Call Far North Crane for residential & commercial crane rentals in Saskatoon. Access safest & most efficient cranes for heavy lifting & hauling.";
const title =
  "Residential & Commercial Crane Rentals Saskatoon | Far North Crane";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: {
    canonical:
      "https://www.farnorthcrane.com/residential-and-commercial-crane-rentals-saskatoon",
  },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return (
    <WebflowPage file="residential-and-commercial-crane-rentals-saskatoon.html" />
  );
}
