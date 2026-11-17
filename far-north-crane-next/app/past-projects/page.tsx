import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const desc =
  "Have a look at our great track of projects including commercial crane rentals, industrial plant maintenance & heavy transportation. We deliver efficiency!";
const title = "Past Crane Projects in Saskatoon | Far North Crane";

const cases = `<section class="section"><div class="container"><div class="content-container">
<h2>Volkswagen Dealership, Saskatoon: 100-Ton Crane</h2>
<div class="p-container"><p>We were the expert team behind the new Volkswagen dealership in Saskatoon. We used our 100-ton crane to erect the pre-engineered steel structure and to install the oil change pit into the ground. We handled all the logistical challenges for this project, which let us provide a fast and reliable commercial crane and rigging service for the building.</p>
<p>The crane did two jobs on this site: steel erection above ground and the oil change pit below it. Taking on both meant one team planned the work from start to finish. We have a track record of delivering on time and within budget, this is because we are able to take on the entire project from start to finish, ensuring fluidity throughout.</p>
<p><em>Details to be confirmed by Far North Crane: project dates, the size of the building and the number of lifts.</em></p>
<p>Need a crane for a commercial build? See our <a href="/residential-and-commercial-crane-rentals-saskatoon">commercial crane rentals in Saskatoon</a>.</p></div>
<h2>Martinsville and Warman Overpass Signs: 70-Ton Crane</h2>
<div class="p-container"><p>Another example of our 70-ton crane's hard work is the construction of the Martinsville and Warman overpass signs. This job was expertly executed over two night-shifts, where the new signs were hoisted up to their posts.</p>
<p>We move machinery and materials safely and on-time, and a job done over two night-shifts depends on that.</p>
<p><em>Details to be confirmed by Far North Crane: the dates of the night-shifts, the size and weight of the signs and who the work was done for.</em></p>
<p>If your project also needs equipment moved, read about our <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport in Saskatoon</a>.</p></div>
<h2>Who Does the Work</h2>
<div class="p-container"><p>We let you know your costs up-front before you commit to finishing large projects with us. To learn who is behind these jobs, read <a href="/about">about Far North Crane</a>, or <a href="/contact">contact us</a> about your project.</p></div>
</div></div></section>`;

function transform(html: string): string {
  let out = html.replace(
    /<h1([^>]*)>[\s\S]*?<\/h1>/,
    (_m, attrs) => `<h1${attrs}>Past Crane Projects in Saskatoon</h1>`
  );
  out = out.replace(
    '<section class="section is--cta">',
    `${cases}<section class="section is--cta">`
  );
  return out;
}
const og = "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "https://www.farnorthcrane.com/past-projects" },
  openGraph: { title, description: desc, images: [og], type: "website" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return <WebflowPage file="past-projects.html" transform={transform} />;
}
