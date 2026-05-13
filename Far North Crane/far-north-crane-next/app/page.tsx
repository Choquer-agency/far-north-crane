import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  title: "Saskatoon Crane Service - Far North Crane",
  description:
    "Want quality crane service in Saskatoon? Far North Crane is the leading Saskatoon crane service & heavy equipment transport service provider. Get in touch today!",
  alternates: { canonical: "https://www.farnorthcrane.com" },
  openGraph: {
    title: "Saskatoon Crane Service - Far North Crane",
    description:
      "Want quality crane service in Saskatoon? Far North Crane is the leading Saskatoon crane service & heavy equipment transport service provider. Get in touch today!",
    images: [
      "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saskatoon Crane Service - Far North Crane",
    description:
      "Want quality crane service in Saskatoon? Far North Crane is the leading Saskatoon crane service & heavy equipment transport service provider. Get in touch today!",
    images: [
      "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg",
    ],
  },
};

export default function Home() {
  return <WebflowPage file="index.html" />;
}
