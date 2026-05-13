import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Far North Crane is a Saskatoon hauling services business offering crane rentals, heavy equipment transportation & industrial plant maintenance.";
const title = "Saskatoon Hauling Services | Far North Crane";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "https://www.farnorthcrane.com/about" },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return <WebflowPage file="about.html" />;
}
