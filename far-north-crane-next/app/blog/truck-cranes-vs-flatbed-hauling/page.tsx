import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const title = "Truck Cranes vs. Flatbed Hauling: Which Do You Need?";
const headline =
  "Truck Cranes vs. Flatbed Hauling: Which Do You Need to Move Heavy Equipment?";
const desc =
  "Truck cranes lift, flatbeds carry. See when a flatbed haul is enough, when you need a lift or both, plus Saskatchewan permit and winter-weight basics.";
const url =
  "https://www.farnorthcrane.com/blog/truck-cranes-vs-flatbed-hauling";
const og =
  "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";

const permitUrl =
  "https://www.saskatchewan.ca/business/transportation-and-road-construction/information-for-truckers-and-commercial-trucking-companies/commercial-vehicle-overweight-and-overdimensional-permits";
const weightsUrl =
  "https://www.saskatchewan.ca/business/transportation-and-road-construction/information-for-truckers-and-commercial-trucking-companies/regulations-and-road-restrictions/increased-weights-and-road-restrictions";

const faqs: [string, string][] = [
  [
    "Is a truck crane the same as a boom truck?",
    "A truck crane and a boom truck are related but different machines. A truck crane is a hydraulic crane on a purpose-built carrier designed to transport it. A boom truck is a hydraulic crane mounted on a standard commercial truck chassis. Because people use the names interchangeably, describe the lift when you ask for one.",
  ],
  [
    "Can a truck crane carry equipment as well as lift it?",
    "A truck crane is built to lift. It carries little or no cargo of its own, so moving equipment any real distance takes a trailer. A job that needs both a lift and travel usually books both.",
  ],
  [
    "Do I need a permit to haul heavy equipment in Saskatchewan?",
    "Hauling heavy equipment needs a permit when the vehicle or load is over the limits in The Vehicle Weights and Dimensions Regulations, 2010. Applications go through the SGI Permit Office, and a single trip permit covers a one-time move on a specific route. City streets, municipal roads and loads over 5.18 metres high can need extra approvals.",
  ],
  [
    "When are winter weights and spring road bans in Saskatchewan?",
    "Winter weights typically run November 16 to March 14, or December 1 to the last day of February in the southwest, and can be postponed if the weather stays mild. Spring road bans usually begin in the first week of March in the southwest and spread across the province over two to three weeks. They can last up to six weeks and change on 48 hours' notice.",
  ],
  [
    "Can one company handle both the lift and the haul?",
    "Having one company plan the lift and the haul means one schedule, one rigging decision and no waiting between crews. It is worth asking about whenever a load has to be lifted and then moved. Far North Crane offers both heavy equipment transport and crane rentals. We let you know your costs up-front before you commit to finishing large projects with us.",
  ],
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: desc,
    mainEntityOfPage: url,
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    image: [
      "https://www.farnorthcrane.com/images/Far-North-Crane---Transport.jpg",
      "https://www.farnorthcrane.com/images/Far-North-Crane---Commercial-Rental.JPG",
    ],
    author: { "@type": "Organization", name: "Far North Crane" },
    publisher: { "@type": "Organization", name: "Far North Crane" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.farnorthcrane.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.farnorthcrane.com/blog" },
      { "@type": "ListItem", position: 3, name: headline, item: url },
    ],
  },
];

const faqHtml = faqs
  .map(([q, a], i) => `<h3 id="faq-${i + 1}">${q}</h3><p>${a}</p>`)
  .join("\n");

const article = `<section class="section"><div class="container"><div class="content-container">
<h1>${headline}</h1>
<div class="p-container">
<p>Truck cranes lift, and flatbed hauling carries. That is the whole comparison in one line, and plenty of heavy equipment moves need both. This guide is for anyone in the Saskatoon area with machinery, equipment or materials to move who isn't sure what to book.</p>
<p>We compare the options by what each one physically does (lift or carry), the kind of load, the site, the route and permit rules, and Saskatchewan's seasonal road weights. The permit and seasonal-weight facts come from the Government of Saskatchewan's own pages, linked below.</p>

<h2 id="the-short-answer">The short answer</h2>
<p>If the equipment can drive or be winched onto a trailer and off again at the other end, flatbed or lowboy hauling is usually enough. A tracked excavator or a dozer driving up a ramp onto a lowboy is the classic case.</p>
<p>If the load has to be lifted, set in place, raised onto a roof or over a structure, or can't be driven or rolled, you need a crane. That covers vessels, tanks, steel and machinery sitting inside a plant. Truck cranes are the common choice because they drive to the site on public roads.</p>
<p>If the load has to be lifted at one end and carried any real distance, you need both. Booking them under one plan saves the co-ordination.</p>

<h2 id="truck-crane-vs-flatbed-haul-at-a-glance">Truck crane vs. flatbed haul at a glance</h2>
<p>Here are the same six questions asked of both options.</p>
<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
<thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid currentColor">Criteria</th><th style="text-align:left;padding:8px;border-bottom:1px solid currentColor">Truck crane</th><th style="text-align:left;padding:8px;border-bottom:1px solid currentColor">Flatbed / lowboy haul</th></tr></thead>
<tbody>
<tr><td style="padding:8px">What it does</td><td style="padding:8px">Lifts and places a load</td><td style="padding:8px">Carries a load over the road</td></tr>
<tr><td style="padding:8px">Suited to</td><td style="padding:8px">Loads that must be lifted, placed or set</td><td style="padding:8px">Equipment and materials that need moving from A to B</td></tr>
<tr><td style="padding:8px">Gets the load on and off by</td><td style="padding:8px">Its own boom</td><td style="padding:8px">Driving, winching, a forklift or a separate crane</td></tr>
<tr><td style="padding:8px">Site needs</td><td style="padding:8px">Firm, level setup area with room for outriggers and clear overhead space</td><td style="padding:8px">Room for the truck and trailer to get in, turn and unload</td></tr>
<tr><td style="padding:8px">Road rules</td><td style="padding:8px">The crane carrier is a road vehicle in its own right</td><td style="padding:8px">A trailer load may be oversize or overweight and need a provincial permit</td></tr>
<tr><td style="padding:8px">Typical limit</td><td style="padding:8px">Lifts, but carries little or no cargo</td><td style="padding:8px">Carries, but can't lift on its own</td></tr>
</tbody></table></div>
<p>Neither column wins outright. They answer different questions about the same move.</p>

<h2 id="what-a-truck-crane-does">What a truck crane does</h2>
<p>A truck crane is a hydraulic crane on a purpose-built carrier designed to transport it. A boom truck is a hydraulic crane mounted on a standard commercial truck chassis, as <a href="https://www.customtruck.com/blog/the-difference-between-a-truck-crane-and-a-boom-truck/" target="_blank" rel="noopener">Custom Truck One Source explains in its comparison of the two</a>. The two names get mixed up all the time.</p>
<p>When people search for a crane truck service, they usually mean the smaller boom-truck style used for loading, unloading and short lifts. Both truck cranes and boom trucks drive to the job on public roads. For the decision in this guide, what matters is that both lift.</p>
<h3 id="where-truck-cranes-earn-their-keep">Where truck cranes earn their keep</h3>
<p>A truck crane drives to the site, sets up, lifts the load and leaves. It can place a load into a building, onto a foundation, onto a trailer or over an obstacle. The crane travels on its own wheels, so no trailer is needed to bring it in.</p>
<h3 id="where-a-truck-crane-falls-short">Where a truck crane falls short</h3>
<p>It isn't built to haul heavy cargo long distances. It needs a firm, level setup area with room for its outriggers, plus clear overhead space, which means checking for power lines. Truck cranes still have to be sized for the load's weight and how far the boom must reach. Every lift has to be planned before the crane arrives.</p>

<h2 id="when-flatbed-hauling-is-enough">When flatbed hauling is enough</h2>
<img src="/images/Far-North-Crane---Transport.jpg" alt="Far North Crane truck hauling a piece of heavy equipment" loading="lazy" style="max-width:100%;height:auto">
<p>A flatbed, step-deck or lowboy trailer is the right tool when the job is moving equipment or materials over the road. With no lift involved, a haul is usually the simpler booking.</p>
<h3 id="loads-a-trailer-handles-on-its-own">Loads a trailer handles on its own</h3>
<p>Self-propelled machinery is the easy case. Excavators, dozers, loaders and other machines that can drive or be winched on and off need no lift at either end. Materials that a forklift can load at each end fit the same pattern.</p>
<p>If that describes your move, our page on <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport in Saskatoon</a> explains how a transport job works.</p>
<h3 id="where-a-flatbed-falls-short">Where a flatbed falls short</h3>
<p>A trailer can't lift. If nothing at the pickup or drop-off can load the item, the haul alone fails. Large or heavy loads can go past legal size or weight limits and need a permit. Tight sites may not fit the truck and trailer, let alone give them room to turn.</p>

<h2 id="loads-that-need-both">Loads that need both</h2>
<img src="/images/Far-North-Crane---Commercial-Rental.JPG" alt="Far North Crane crane set up on a commercial lift" loading="lazy" style="max-width:100%;height:auto">
<p>Many real jobs sit between the two columns. Use these three cases to sort yours.</p>
<h3 id="choose-a-truck-crane-if">Choose a truck crane if…</h3>
<p>The work is a lift and set on one site, and nothing has to travel. Think of a heating unit going onto a roof, structural steel, a sign, or equipment set onto a pad.</p>
<p>Two of Far North Crane's own jobs show the lifting side. A 100-ton crane erected the pre-engineered steel structure and installed the oil change pit at the new Volkswagen dealership in Saskatoon. A 70-ton crane hoisted the Martinsville and Warman overpass signs over two night shifts.</p>
<h3 id="choose-flatbed-hauling-if">Choose flatbed hauling if…</h3>
<p>You have a tracked or wheeled machine that drives on and off under its own power. Both ends also need room for the trailer.</p>
<h3 id="book-both-if">Book both if…</h3>
<p>Machinery comes out of a plant and gets hauled away. A vessel or tank is delivered and set in place. Old equipment goes out and new equipment comes in during plant maintenance.</p>
<p>One plan for the lift and the haul matters in these cases. The crane and the truck have to arrive in the right order, the rigging is decided once, and nobody waits on a second company. If the lift is the missing piece, start with <a href="/residential-and-commercial-crane-rentals-saskatoon">commercial crane rental in Saskatoon</a>.</p>

<h2 id="planning-a-move-weight-route-and-site-access">Planning a move: weight, route and site access</h2>
<p>This is what to know before you book, not legal advice. The provincial rules below come from the Government of Saskatchewan.</p>
<h3 id="weight-and-size">Weight and size</h3>
<p>A permit is needed when a vehicle or load doesn't meet the limits in The Vehicle Weights and Dimensions Regulations, 2010. Most permits are issued when a load can't meet legal size or weight limits, is non-divisible (can't be broken into smaller parts), or both. The application asks for dimensions, axle weights and the full route, so know your load's weight and dimensions early.</p>
<h3 id="route-and-permits">Route and permits</h3>
<p>A single trip permit covers a one-time move on a specific route, and most give up to two weeks to complete it. Applications go through the SGI Permit Office, according to the province's <a href="${permitUrl}" target="_blank" rel="noopener">page on overweight and overdimensional permits</a>. For most non-complicated moves the goal is one business day. Many permits are issued within an hour when all the information is provided.</p>
<p>The provincial permit isn't the only approval. City permits are required for travel on city streets. Rural municipality approval is required if the route uses municipal roads and the vehicle exceeds legal secondary weights. SaskPower and SaskTel approval is required if the overall load height is more than 5.18 metres.</p>
<p>Most permits also require warning signs, lights and escort vehicles. What applies depends on the load's size and the time of day.</p>
<h3 id="site-access-at-both-ends">Site access at both ends</h3>
<p>Check the pickup and the drop-off separately. A crane needs firm ground, space to set up and clear overhead room. A trailer needs room to get in, turn and unload. A site that works for one may not work for the other.</p>

<h2 id="moving-equipment-in-a-saskatchewan-winter">Moving equipment in a Saskatchewan winter</h2>
<p>Frozen roads can carry more weight, which makes winter worth considering for heavy hauls. The province's <a href="${weightsUrl}" target="_blank" rel="noopener">page on increased weights and road restrictions</a> says the winter weight period typically runs November 16 to March 14. It may be postponed if the weather stays mild. In the southwest it doesn't start until December 1 and ends on the last day of February.</p>
<p>Spring road bans depend on the weather. They typically start in the first week of March in the southwest and spread across the rest of the province over two to three weeks. Bans can last up to six weeks and can change on 48 hours' notice. Rural municipalities set their own limits on municipal roads.</p>
<p>Three practical takeaways follow. Plan heavy hauls around spring bans. Allow for snow and frozen ground where the crane sets up. Confirm the route close to the move date on the Highway Hotline or by calling 5-1-1.</p>

<h2 id="frequently-asked-questions">Frequently asked questions</h2>
${faqHtml}

<h2 id="getting-a-quote">Getting a quote</h2>
<p>Tell Far North Crane what needs to move, where it's coming from and where it's going. Include its approximate weight and size, and whether it needs a lift. We let you know your costs up-front before you commit to finishing large projects with us. We move machinery and materials safely and on-time.</p>
<p>You can <a href="/contact">request a quote on the contact page</a>. If you'd like to see how a transport job works first, the <a href="/heavy-equipment-transport-services-saskatoon">heavy equipment transport page</a> walks through it.</p>
</div></div></div></section>`;

function transform(html: string): string {
  const s = html.indexOf('<section class="section is--contact-pattern">');
  const e = html.indexOf('<section class="section is--footer">');
  if (s < 0 || e < 0) return html;
  return html.slice(0, s) + article + html.slice(e);
}

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: url },
  openGraph: { title, description: desc, images: [og], type: "article" },
  twitter: { card: "summary_large_image", title, description: desc, images: [og] },
};

export default function Page() {
  return (
    <>
      {ld.map((j, i) => (
        <script
          key={`post-ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }}
        />
      ))}
      <WebflowPage file="contact.html" transform={transform} />
    </>
  );
}
