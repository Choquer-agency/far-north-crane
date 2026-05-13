import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  title: "Not Found",
  alternates: { canonical: "https://www.farnorthcrane.com/404" },
  openGraph: { title: "Not Found", type: "website" },
};

export default function NotFound() {
  return <WebflowPage file="404.html" />;
}
