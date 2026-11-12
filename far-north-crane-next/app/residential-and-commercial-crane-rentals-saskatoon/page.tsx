import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Crane supply in Saskatoon for commercial sites. 70-ton and 100-ton cranes, up-front costs and on-time lifts. Ask Far North Crane for a quote.";
const title = "Crane Supply Saskatoon: Commercial Crane Rental | Far North Crane";

const intro = `<div class="p-container is--inherit"><p>Far North Crane is your crane supply in Saskatoon for commercial crane rental, from steel erection to concrete pours. Our crane rental service covers the whole job, start to finish.</p></div>`;

const sections = `<section class="section"><div class="container"><div class="content-container">
<h2>How long can I rent a crane?</h2>
<div class="p-container"><p>Crane rental periods are set around your project. Draft answer, to be confirmed by Far North Crane: we can discuss a rental for a single lift or for a longer commercial build. <a href="/contact">Contact us</a> with your schedule and we will plan the right crane rental period with you.</p></div>
<h2>Do rentals come with operators?</h2>
<div class="p-container"><p>Draft answer, to be confirmed by Far North Crane: our commercial crane rental work is run by experienced operators and riggers, so you are not left to plan the lift on your own. Ask us what is included when you request a quote.</p></div>
<h2>On-site assessments before a lift</h2>
<div class="p-container"><p>Draft answer, to be confirmed by Far North Crane: before a lift we look at the site, including access, ground conditions and what has to be lifted, so the plan is safe. For workplace safety requirements, see the <a href="https://www.saskatchewan.ca/business/safety-in-the-workplace" target="_blank" rel="noopener">Government of Saskatchewan workplace safety page</a>.</p></div>
<h2>Our 70-ton and 100-ton cranes</h2>
<div class="p-container"><p>We used our 100-ton crane on the new Volkswagen dealership in Saskatoon, erecting the pre-engineered steel structure and installing the oil change pit. Our 70-ton crane hoisted the Martinsville and Warman overpass signs over two night-shifts. See more on our <a href="/past-projects">past projects</a>, or read about <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport</a> when your crane rental also needs hauling.</p></div>
<h2>What it costs</h2>
<div class="p-container"><p>We let you know your costs up-front before you commit to finishing large projects with us. We move machinery and materials safely and on-time. <a href="/contact">Ask for a quote</a> on your crane supply and commercial crane rental.</p></div>
</div></div></section>`;

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Crane Rental",
    serviceType: "Crane supply and commercial crane rental",
    provider: { "@type": "LocalBusiness", name: "Far North Crane", url: "https://www.farnorthcrane.com/" },
    areaServed: { "@type": "City", name: "Saskatoon" },
    url: "https://www.farnorthcrane.com/residential-and-commercial-crane-rentals-saskatoon",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.farnorthcrane.com/" },
      { "@type": "ListItem", position: 2, name: "Crane Supply Saskatoon" },
    ],
  },
];

function transform(html: string): string {
  let out = html.replace(
    /<h1([^>]*)>[\s\S]*?<\/h1>/,
    (_m, attrs) =>
      `<h1${attrs}>Crane Supply in Saskatoon for Commercial Crane Rental</h1>${intro}`
  );
  out = out.replace(
    '<section class="section is--footer">',
    `${sections}<section class="section is--footer">`
  );
  return out;
}
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
    <>
      {ld.map((j, i) => (
        <script
          key={`svc-ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }}
        />
      ))}
      <WebflowPage
        file="residential-and-commercial-crane-rentals-saskatoon.html"
        transform={transform}
      />
    </>
  );
}
