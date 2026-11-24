import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const title = "Crane Certification in Saskatchewan: Operator Tickets Explained";
const headline =
  "Crane Certification in Saskatchewan: What Operator Tickets Mean and How to Check Them";
const desc =
  "What crane certification means in Saskatchewan, how operators earn their tickets, and the documents to ask for before any crane lifts on your Saskatoon site.";
const url = "https://www.farnorthcrane.com/blog/crane-certification-saskatchewan";
const og =
  "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";
const img = "/images/Far-North-Crane---Commercial-Rental.JPG";

const faqs: [string, string][] = [
  [
    "Is crane operator certification mandatory in Saskatchewan?",
    "Crane operator trade certification is voluntary in Saskatchewan, according to Job Bank, which lists it as \"available, but voluntary\" in the province. SATCC's trade list does not mark Mobile Crane Operator as compulsory. Many employers and customers still ask for a ticket, and some employers require their own internal company certification.",
  ],
  [
    "What is the difference between a Red Seal and a provincial crane ticket?",
    "A provincial crane ticket is the trade certificate Saskatchewan issues through SATCC. A Red Seal is an endorsement on that certificate, earned by passing the Red Seal exam. It shows the holder's knowledge and skills are recognised across Canada.",
  ],
  [
    "How can I check a crane operator's ticket online?",
    "A Saskatchewan crane ticket can be checked on the SATCC Journeyperson and Apprentice Lookup. You need the operator's name, trade and certification number, which appears on their certificate or wallet card. The tool returns Certified, Apprentice or Not Found. Tickets from other provinces are checked with that province's apprenticeship authority.",
  ],
  [
    "Does a boom truck operator need a different ticket from a mobile crane operator?",
    "Boom truck operators have their own credentials in Saskatchewan. SATCC lists Boom Truck Operator A and Boom Truck Operator B as sub-trades of Mobile Crane Operator, and notes that individuals normally specialize in one sub-trade. Ask which one an operator holds before a boom truck lift.",
  ],
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: desc,
    mainEntityOfPage: url,
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    image: ["https://www.farnorthcrane.com" + img],
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
<p>Crane certification is worth checking before any crane lifts on your site. This guide is for site managers, contractors and owners about to book a lift in Saskatoon or elsewhere in Saskatchewan. The short answer: the term usually covers two separate things, the operator's trade certificate (the "ticket") and the crane's own inspection and maintenance records. You can check both before the lift.</p>
<p>Below you'll find the crane trade names Saskatchewan uses, how an operator earns a ticket, what to ask about the machine itself, and a short checklist of documents to request before lift day.</p>
<img src="${img}" alt="Mobile crane set up for a commercial lift in Saskatoon" loading="lazy" style="max-width:100%;height:auto">

<h2 id="what-crane-certification-actually-covers">What crane certification actually covers</h2>
<p>People use the phrase crane certification for both the person and the machine. Each is checked separately, and one never stands in for the other.</p>
<h3 id="the-operators-ticket">The operator's ticket</h3>
<p>An operator's ticket is a trade certificate issued by the province through the Saskatchewan Apprenticeship and Trade Certification Commission (SATCC). It can also carry a Red Seal endorsement, which is recognised across Canada.</p>
<p>One accuracy point matters here. Job Bank, the Government of Canada's job site, lists mobile crane operator trade certification as compulsory in Nova Scotia, New Brunswick, Quebec, Ontario, Manitoba, Alberta and British Columbia. In the other provinces, including Saskatchewan, it is "available, but voluntary." SATCC's trade list does not mark Mobile Crane Operator as compulsory either.</p>
<p>The ticket still carries weight. It is the province's independent proof that an operator completed the training and passed the exams. Job Bank also notes that some employers require their own internal company certification. Operators may also need a provincial licence to drive mobile cranes on public roads.</p>
<h3 id="the-cranes-own-inspections-and-records">The crane's own inspections and records</h3>
<p>The crane is a machine. It is inspected and maintained, and it has its own load chart and service records.</p>
<p>A ticketed operator cannot make an uninspected crane safe. A well-kept crane cannot make an untrained operator qualified. You want evidence of both.</p>

<h2 id="which-crane-operator-trades-saskatchewan-certifies">Which crane operator trades Saskatchewan certifies</h2>
<p>The <a href="https://saskapprenticeship.ca/" target="_blank" rel="noopener">Saskatchewan Apprenticeship and Trade Certification Commission</a> lists these crane trades among its designated trades, as published in November 2026:</p>
<ul>
<li><strong>Mobile Crane Operator</strong>, a Construction Sector trade with Red Seal status</li>
<li><strong>Boom Truck Operator</strong>, a sub-trade or endorsement. SATCC describes it this way: "Boom Truck A operators operate and maintain truck mounted crane devices."</li>
<li><strong>Boom Truck Operator B</strong>, also a sub-trade or endorsement</li>
</ul>
<p>SATCC's Mobile Crane Operator page names Boom Truck Operator A and Boom Truck Operator B as the trade's sub-trades. It adds: "Normally individuals specialize in one of the Mobile Crane Operator sub-trades."</p>
<p>Boom trucks are the truck-mounted cranes many people mean when they look for a crane truck service. The matching credential is a Boom Truck Operator certificate. Ask which sub-trade the operator holds.</p>
<p>SATCC's credential lookup can also verify three other names: Hydraulic Crane Operator, Mobile Crane Operator (Hydraulic) and Tower Crane Operator. These are names the lookup recognises, and this guide does not present them as current apprenticeship programs. Nationally, <a href="https://red-seal.ca/eng/trades/mobile-crane-op.shtml" target="_blank" rel="noopener">Red Seal notes</a> that Mobile Crane Operator (Hydraulic) is no longer a designated Red Seal trade as of June 1, 2016, while Mobile Crane Operator continues to be one. Tower Crane Operator is also on the national Red Seal list.</p>

<h2 id="how-an-operator-earns-a-ticket-apprenticeship-exams-and-the-red-seal">How an operator earns a ticket: apprenticeship, exams and the Red Seal</h2>
<h3 id="apprenticeship-and-technical-training">Apprenticeship and technical training</h3>
<p>Job Bank says completing secondary school is usually required. It adds that "completion of a one- to three-year apprenticeship program or industry courses in crane operating are usually required."</p>
<p>SATCC publishes an On-the-Job Checklist for the Mobile Crane Operator trade. It sets out the work an apprentice is expected to learn on real job sites.</p>
<h3 id="exams-and-the-red-seal-endorsement">Exams and the Red Seal endorsement</h3>
<p>SATCC's Mobile Crane Operator page publishes exam information for Level One, Level Two and the Interprovincial Journeyperson Examination. Those are the exam steps SATCC documents for the trade.</p>
<p>According to <a href="https://www.red-seal.ca/" target="_blank" rel="noopener">Red Seal</a>, "a Red Seal endorsement is a seal on your provincial or territorial trade certificate." It shows the holder has the knowledge and skills to practise the trade across Canada. To get it, an operator must pass the Red Seal exam. Mobile Crane Operator became a Red Seal trade in 1991, and Saskatchewan is one of the provinces that designates it.</p>
<p>Red Seal's trade description is a useful picture of the work itself. Mobile crane operators "perform pre-operational inspections. They calculate crane capacities, determine load weight, and set up, position and stabilize the crane before the lift."</p>
<h3 id="experienced-workers-who-challenge-the-exam">Experienced workers who challenge the exam</h3>
<p>Not every operator comes through a formal apprenticeship. SATCC runs an Experienced Workers route for trade qualifiers, who apply to write the exams. The Mobile Crane Operator page includes a Verify Trade Experience form (Form 6A) for this route.</p>

<h2 id="the-crane-itself-inspections-load-charts-and-records-you-can-ask-to-see">The crane itself: inspections, load charts and records you can ask to see</h2>
<p>An operator's ticket says nothing about the condition of the machine. These are reasonable things to ask about the specific crane coming to your site:</p>
<ul>
<li><strong>The load chart.</strong> A crane's capacity changes with boom length, radius and setup. That is why operators calculate capacities before each lift.</li>
<li><strong>The pre-use inspection.</strong> Red Seal lists pre-operational inspections as part of the operator's job. Ask when it happens on lift day.</li>
<li><strong>Maintenance and inspection records.</strong> Ask for the service and periodic inspection history of that specific unit.</li>
</ul>
<p>For the rules themselves, Saskatchewan workplace safety falls under The Saskatchewan Employment Act and The Occupational Health and Safety Regulations, 2020. The province's <a href="https://www.saskatchewan.ca/business/safety-in-the-workplace" target="_blank" rel="noopener">workplace safety pages</a> explain both and note that employers must keep copies readily available.</p>

<h2 id="how-to-check-crane-certification-before-a-lift-on-your-site">How to check crane certification before a lift on your site</h2>
<p>Checking crane certification takes a few minutes if you ask early. Work through this list before lift day:</p>
<ol>
<li><strong>Ask for the operator's name, trade and certification number.</strong> SATCC says certification numbers appear on certificates and on apprentice and journeyperson wallet cards.</li>
<li><strong>Verify it on the <a href="https://saskapprenticeship.ca/check-credentials/" target="_blank" rel="noopener">SATCC Journeyperson and Apprentice Lookup</a>.</strong> It confirms whether someone is a registered apprentice in Saskatchewan or holds a journeyperson, Red Seal or other Saskatchewan certificate. Results come back as Certified, Apprentice or Not Found.</li>
<li><strong>Check out-of-province tickets at the source.</strong> The SATCC tool will not find someone certified in another province. Contact that province's apprenticeship authority, or use the lookup tools listed on the Red Seal website.</li>
<li><strong>Ask whether the operator is a journeyperson or an apprentice.</strong> If an apprentice will run the crane, ask how they are supervised.</li>
<li><strong>Ask for the load chart and records</strong> for the crane coming to site.</li>
<li><strong>Confirm who plans the lift and who does the rigging.</strong> Get names for both jobs.</li>
</ol>
<p>If something does not match, SATCC takes questions and reports of fraudulent credentials at 1-877-363-0536.</p>

<h2 id="what-a-crane-rental-service-with-an-operator-should-include">What a crane rental service with an operator should include</h2>
<p>When a crane rental service comes with an operator, you are hiring a machine and a person together. Before you book, you should get clear answers to these questions:</p>
<ul>
<li>Which crane is coming, and what is its capacity for this lift at the radius you need?</li>
<li>Who is the operator, and what ticket do they hold? (Check it as above.)</li>
<li>Will someone look at the site before lift day, including access, ground conditions and overhead hazards such as power lines?</li>
<li>Who supplies and handles the rigging?</li>
<li>What will the job cost, stated before you commit?</li>
<li>What paperwork comes with the crane, such as the load chart and inspection records?</li>
</ul>
<p>Capacity is the question that shapes the rest. On Far North Crane's own jobs, a 100-ton crane erected the pre-engineered steel structure and installed the oil change pit at the new Volkswagen dealership in Saskatoon. A 70-ton crane hoisted the Martinsville and Warman overpass signs over two night shifts.</p>
<p>Far North Crane's page on <a href="/residential-and-commercial-crane-rentals-saskatoon">crane rentals in Saskatoon</a> is one place to start, and the same questions apply to any company you call. You can also read about <a href="/about">who runs Far North Crane</a> before you book.</p>

<h2 id="frequently-asked-questions">Frequently asked questions</h2>
${faqHtml}

<h2 id="key-takeaways">Key takeaways</h2>
<ul>
<li>Certification covers two things: the operator's ticket and the crane's own inspection records.</li>
<li>Saskatchewan's crane trade is Mobile Crane Operator (Red Seal), with the Boom Truck Operator A and B sub-trades.</li>
<li>Job Bank lists trade certification as voluntary in Saskatchewan, but a ticket is the independent proof worth asking for.</li>
<li>A Red Seal is earned by passing the Red Seal exam.</li>
<li>Check any Saskatchewan ticket on the SATCC lookup with a certification number.</li>
<li>Ask for the load chart and inspection records before the lift.</li>
</ul>

<h2 id="booking-a-lift-in-saskatoon">Booking a lift in Saskatoon</h2>
<p>Knowing what crane certification means lets you ask the right questions before any crane lifts on your site. If you are planning a <a href="/residential-and-commercial-crane-rentals-saskatoon">commercial crane rental</a> with Far North Crane, ask about the operator and the crane when you <a href="/contact">request a quote</a>. As the company puts it: "We let you know your costs up-front before you commit to finishing large projects with us."</p>
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
