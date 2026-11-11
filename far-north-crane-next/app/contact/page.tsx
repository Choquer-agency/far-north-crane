import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";
import ContactFormHandler from "@/components/ContactFormHandler";

const desc =
  "Call or message Far North Crane in Saskatoon for crane rental, heavy equipment transport and plant maintenance quotes. Costs up-front.";
const title = "Contact Far North Crane | Crane & Heavy Haul Quotes in Saskatoon";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "https://www.farnorthcrane.com/contact" },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return (
    <>
      <WebflowPage file="contact.html" />
      <ContactFormHandler />
    </>
  );
}
