import type { Metadata } from "next";
import Script from "next/script";
import { loadPage } from "@/lib/loadPage";

const title = "Crane and Heavy Haul Guides | Far North Crane";
const desc =
  "Practical guides from Far North Crane in Saskatoon on renting cranes, choosing a crane company and moving heavy equipment.";
const og =
  "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "https://www.farnorthcrane.com/blog" },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

// Add each article here as it publishes.
const articles = [
  {
    href: "/blog/how-long-can-you-rent-a-crane",
    title:
      "How Long Can You Rent a Crane? A Saskatoon Guide to Rental Periods, Operators and Site Assessments",
  },
  {
    href: "/blog/how-to-choose-a-crane-company",
    title: "How to Choose a Crane Company Near You: 8 Questions to Ask Before You Book",
  },
  {
    href: "/blog/truck-cranes-vs-flatbed-hauling",
    title:
      "Truck Cranes vs. Flatbed Hauling: Which Do You Need to Move Heavy Equipment?",
  },
];

const list = articles
  .map(
    (a) =>
      `<h2><a href="${a.href}">${a.title}</a></h2>`
  )
  .join("\n");

const content = `<header class="section"><div class="container is--header serivces"><div class="content-container"><h1>Crane and Heavy Haul Guides</h1><div class="p-container"><p>Practical guides on renting cranes, choosing a crane company and moving heavy equipment in Saskatoon.</p></div></div></div></header>
<section class="section"><div class="container"><div class="content-container">
${list}
</div></div></section>
`;

const ld = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.farnorthcrane.com/" },
    { "@type": "ListItem", position: 2, name: "Guides" },
  ],
};

export default function Page() {
  const loaded = loadPage("past-projects.html");
  const bodyHtml = loaded.bodyHtml.replace(
    /<header class="section">[\s\S]*?(?=<section class="section is--cta">)/,
    () => content
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {loaded.inlineScripts.map((s, i) => (
        <Script key={`blog-${i}`} id={`page-inline-blog-${i}`} strategy="afterInteractive">
          {s}
        </Script>
      ))}
    </>
  );
}
