import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Have a look at our great track of projects including commercial crane rentals, industrial plant maintenance & heavy transportation. We deliver efficiency!";
const title = "Our Great Past Projects| Far North Crane";
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "https://www.farnorthcrane.com/past-projects" },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return <WebflowPage file="past-projects.html" />;
}
