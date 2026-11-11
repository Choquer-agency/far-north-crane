import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Crane supply in Saskatoon for commercial sites. 70-ton and 100-ton cranes, up-front costs and on-time lifts. Ask Far North Crane for a quote.";
const title = "Crane Supply Saskatoon: Commercial Crane Rental | Far North Crane";

const PAGE_URL =
  "https://www.farnorthcrane.com/residential-and-commercial-crane-rentals-saskatoon";

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Crane Rental in Saskatoon",
  serviceType: "Crane rental",
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Far North Crane",
    url: "https://www.farnorthcrane.com/",
    telephone: "(306) 291-4631",
  },
  areaServed: { "@type": "City", name: "Saskatoon" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.farnorthcrane.com/",
    },
    { "@type": "ListItem", position: 2, name: "Commercial Crane Rental" },
  ],
};

const newSections = `
<section class="section">
  <div class="container">
    <div class="content-container">
      <h2>How Long Can I Rent a Crane?</h2>
      <div class="p-container">
        <p>Our crane rental is flexible and can follow your project's schedule, whether that is a few hours, days, weeks or months. We work with you to settle on the rental length that suits the job. (Draft answer: Far North to confirm.)</p>
      </div>
      <h2>Do Rentals Come With Operators?</h2>
      <div class="p-container">
        <p>Our crane rentals are supplied with skilled, certified operators who follow safety procedures and industry regulations. (Draft answer: Far North to confirm.)</p>
      </div>
      <h2>On-Site Assessments Before a Lift</h2>
      <div class="p-container">
        <p>Before a rental we assess the site for access, ground conditions and the specific lifting requirements, then recommend a plan for the project. For hauling the crane or your equipment, see our <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport services</a>. (Draft answer: Far North to confirm.)</p>
      </div>
      <h2>Our 70-Ton and 100-Ton Cranes</h2>
      <div class="p-container">
        <p>Our 100-ton crane was used to complete the new Volkswagen dealership in Saskatoon, where we erected the pre-engineered steel structure and installed the oil change pit. Our 70-ton crane hoisted the Martinsville and Warman overpass signs over two night-shifts. See more on our <a href="/past-projects">past projects</a> page.</p>
      </div>
      <h2>What Commercial Crane Rental Costs</h2>
      <div class="p-container">
        <p>We let you know your costs up-front before you commit to finishing large projects with us. <a href="/contact">Contact us</a> for a quote on your crane rental.</p>
      </div>
      <h2>Crane Rental for Commercial Sites in Saskatoon</h2>
      <div class="p-container">
        <p>If you are searching for crane supply near me, Far North Crane offers commercial crane rental in Saskatoon with the whole job handled from start to finish. We move machinery and materials safely and on-time. Need equipment hauled to site? See our <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport</a> services, or review our <a href="/past-projects">past projects</a>.</p>
      </div>
      <h2>Safety on Site</h2>
      <div class="p-container">
        <p>Workplace safety matters on every lift. The Government of Saskatchewan publishes guidance on <a href="https://www.saskatchewan.ca/business/safety-in-the-workplace" target="_blank" rel="noopener">safety in the workplace</a>.</p>
      </div>
    </div>
  </div>
</section>
`;

function transform(html: string): string {
  let out = html.replace(
    /(<h1[^>]*>)[\s\S]*?(<\/h1>)/,
    "$1Crane Supply in Saskatoon for Commercial Crane Rental$2"
  );
  out = out.replace(
    /(<\/h1>[\s\S]*?<p[^>]*>)/,
    "$1Far North Crane is your crane supply in Saskatoon for commercial crane rental. "
  );
  const marker = '<section class="section is--footer">';
  const i = out.lastIndexOf(marker);
  if (i >= 0) out = out.slice(0, i) + newSections + out.slice(i);
  else out += newSections;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <WebflowPage
        file="residential-and-commercial-crane-rentals-saskatoon.html"
        transform={transform}
      />
    </>
  );
}
