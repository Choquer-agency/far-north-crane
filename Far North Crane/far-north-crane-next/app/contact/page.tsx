import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";
import ContactFormHandler from "@/components/ContactFormHandler";

const desc =
  "Reach out to the Far North Crane Team with inquiries regarding crane rental or heavy equipment trucking for an upcoming or current project idea you may have.";
const title = "Contact Us | Far North Crane | Saskatoon";
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
