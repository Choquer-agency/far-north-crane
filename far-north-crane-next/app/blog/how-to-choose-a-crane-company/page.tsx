import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

const title = "Crane Company Near Me? 8 Questions to Ask Before You Book";
const headline = title;
const desc =
  "Hiring a crane company near you? These 8 questions show who plans the lift properly, and what a written quote should include before you book.";
const url = "https://www.farnorthcrane.com/blog/how-to-choose-a-crane-company";
const og =
  "https://uploads-ssl.webflow.com/606398120ed24f73ec185447/6140ed75476eab24ffa5ccd6_open-graph.jpg";
const img1 = "/images/Crane-Setup.jpg";
const img2 = "/images/Far-North-Crane---Commercial-Rental.JPG";

const faqs: [string, string][] = [
  [
    "How far ahead should I book a crane company?",
    "Booking a crane well ahead is the safer plan, especially in peak construction season. Lead time depends on the type of crane you need, where the job is, and how busy local crane companies are. Once your lift date is set, call around, share the load details, and ask each company when it can commit to that date.",
  ],
  [
    "Do I need a permit to use a crane on my site?",
    "Permits for crane work depend on your location and the type of project, so check with your local authorities well before the lift date. Saskatchewan also publishes workplace safety guidance for employers that is worth reading. Raise the question with your crane company early too, since a local company will know which questions to ask.",
  ],
  [
    "Is it cheaper to rent a crane without an operator?",
    "A rental without an operator can look cheaper on paper, but the lift planning and the operator's qualifications become your job. CCOHS says operators need \"the required training, qualifications, or certification as determined by your jurisdiction.\" An operated rental moves that responsibility onto the crane company. Far North Crane can walk you through what its rental includes when you ask for a quote.",
  ],
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: desc,
    mainEntityOfPage: url,
    datePublished: "2026-11-25",
    dateModified: "2026-11-25",
    image: ["https://www.farnorthcrane.com" + img1, "https://www.farnorthcrane.com" + img2],
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

const faqHtml = faqs.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("\n");

const rawArticle = `<section class="section"><div class="container"><div class="content-container">
<h1>${headline}</h1>
<div class="p-container">
<p>If you have typed "crane company near me" with a lift date already on the calendar, the fastest way to compare your options is to ask every company the same eight questions. The answers quickly show who has planned lifts like yours and who is guessing. Below are all eight questions, what a good answer sounds like for each one, and what a written quote should show before you sign anything.</p>
<img src="${img1}" alt="Crew setting up a mobile crane on a job site before a lift" loading="lazy" style="max-width:100%;height:auto">

<h2>1. Do they do an on-site assessment before the lift?</h2>
<p>A crane company can only plan a safe lift once it knows your site. That means access for the crane and its trucks, the ground it will set up on, and the weight and dimensions of the load. It also means how far the boom has to reach and whether power lines run overhead.</p>
<p>The Canadian Centre for Occupational Health and Safety (CCOHS) <a href="https://www.ccohs.ca/oshanswers/safety_haz/materials_handling/crane_op.html" target="_blank" rel="noopener">lists general lift-planning steps in its crane operation guidance</a>. Before a load moves, it says to make sure "the job site and lift are planned and laid out." It also says to allow "room for emergency vehicles to enter if necessary," to stay away from overhead power lines, and to check "ground conditions to ensure stability." That page is written for overhead cranes, but its planning points are sensible questions to raise about any lift.</p>
<p>A good answer: the company asks about your site, or comes to see it, before it quotes. A red flag: a fixed price with no questions asked.</p>

<h2>2. Is an operator included, and are they qualified?</h2>
<p>A bare rental gives you the crane and leaves the operating to you. An operated rental puts someone from the crane company at the controls. The difference matters for liability and for planning, because whoever runs the crane carries much of the responsibility for the lift.</p>
<p>Ask three things: who operates the crane, who rigs the load, and who gives the signals. The same CCOHS overhead crane guidance says operators need "the required training, qualifications, or certification as determined by your jurisdiction to operate the crane." It also says to follow signals "only from one slinger (signaller) in charge of the lift, except a stop signal."</p>
<p>A good answer names who fills each role. It also comes with proof of the operator's qualifications under Saskatchewan rules. If the company hesitates, keep calling.</p>

<h2>3. What crane capacities do they run, and is that enough for your load?</h2>
<p>A crane's rated capacity drops as the boom reaches further out. A crane that handles your load close in may not handle it at the far side of your site.</p>
<p>So give the company three figures: the load weight, the distance from the crane to where the load lands, and the height it has to clear. Then ask them to check those figures against the crane's load chart. The same CCOHS guidance says that the load must not exceed the crane's rated load-carrying capacity. It also says to "have a load rating chart to determine the load that can be lifted for each configuration of the crane."</p>
<p>If you started with a search for crane supply near me, this is the question that sorts the list. Who nearby can actually supply a crane sized to your job, with the chart to back it up?</p>

<h2>4. Will they give you costs up-front?</h2>
<p>Crane pricing comes down to a handful of factors. These are the type of crane, the rental period, the maximum lift capacity you need, the project location, and any special rigging equipment or accessories.</p>
<p>Expect a written price before you commit. Then ask what could change it. Delays on site, extra hours and extra equipment are the usual reasons a final bill grows. Find out how each one is handled before the crane arrives, not after.</p>

<h2>5. Can they handle transport and hauling too?</h2>
<p>Many jobs need something moved as well as lifted. Machinery, precast concrete and pre-engineered steel all have to reach the site before a crane can set them in place.</p>
<p>When one company plans both the haul and the lift, there are fewer handoffs. There is also less risk of a truck arriving early while the crane is still on the road, with someone paying for the wait.</p>
<p>Ask who moves the load to site, who unloads it, and who coordinates the timing between the truck and the crane. If the answer is "you do," plan time in your schedule for that job.</p>

<h2>6. What jobs have they done locally?</h2>
<p>Ask for specific local examples: what was lifted, which crane was used, and what conditions the crew worked in. Night work, tight sites and winter lifts are all worth asking about.</p>
<p>A company that publishes <a href="/past-projects">real project write-ups like these</a> makes the answer easy to check. Far North Crane's projects include a 100-ton crane that erected the pre-engineered steel structure and installed the oil change pit at the new Volkswagen dealership in Saskatoon. Another used a 70-ton crane to hoist the Martinsville and Warman overpass signs over two night-shifts.</p>
<p>That is what a good answer sounds like: the job, the crane and the conditions. A vague "we do everything" tells you very little.</p>

<h2>7. How do they handle emergencies and urgent lifts?</h2>
<p>Breakdowns and urgent lifts happen. Ask how quickly the company can get a crane to you, how to reach them after hours, and whether they can still assess the site properly when time is short.</p>
<p>Then ask what happens if something goes wrong during a lift. CCOHS guidance says to take signals from one signaller only, "except a stop signal," so anyone who sees a problem can call a stop. There should also be room on site for emergency vehicles to get in.</p>
<p>Finally, ask to see that the crane is inspected. CCOHS <a href="https://www.ccohs.ca/oshanswers/safety_haz/materials_handling/crane_in.html" target="_blank" rel="noopener">guidance on crane pre-operation inspection</a> says to inspect the crane "pre-operation, daily, weekly, monthly, annually and/or periodically as specified by the manufacturer." It says to record findings in a maintenance logbook and to "Keep logbook with the crane." A company that hands you that logbook without fuss is showing you how it maintains its equipment.</p>

<h2>8. What should a crane quote include?</h2>
<p>A written crane rental quote should show:</p>
<ul>
<li>the crane type and capacity proposed</li>
<li>whether the operator and the rigger or signaller are included</li>
<li>the rental period and how overtime is billed</li>
<li>transport and setup</li>
<li>any rigging equipment or accessories</li>
<li>the site assumptions, including access and ground conditions</li>
<li>what is excluded</li>
</ul>
<p>Ask two or three crane companies near you to quote the same scope, so the numbers can be compared fairly. To see how one local provider lays out its service, look at what an <a href="/residential-and-commercial-crane-rentals-saskatoon">operated commercial crane rental in Saskatoon</a> covers.</p>
<img src="${img2}" alt="Far North Crane commercial crane ready for an operated rental" loading="lazy" style="max-width:100%;height:auto">

<h2>Key takeaways</h2>
<ul>
<li>Get a site assessment before you get a price.</li>
<li>Confirm the operator is qualified under your jurisdiction's rules.</li>
<li>Check capacity against the load chart at your actual radius.</li>
<li>Get costs in writing up-front, and ask what could change them.</li>
<li>Plan the haul and the lift together where you can.</li>
<li>Ask for real local project examples.</li>
<li>Ask about inspected equipment and a clear stop plan.</li>
</ul>

<h2>Frequently asked questions</h2>
${faqHtml}

<h2>Ready to book? Call a crane company near you that answers all eight</h2>
<p>The right result for "crane company near me" is the company that answers all eight questions clearly, and in writing where it counts.</p>
<p>In Saskatoon, Far North Crane is one to put on your list. It is a family-owned crane and rigging company founded in 2018 by father and son Kevin and Chad, who have over 30 years of experience between them. The team handles crane rentals, heavy equipment transport and rigging. You can <a href="/about">meet the family-owned team behind Far North Crane</a> before you call. Their pricing promise is plain: "We let you know your costs up-front before you commit to finishing large projects with us."</p>
<p>When you are ready, <a href="/contact">ask for a quote</a> with your load, location and lift date.</p>
</div></div></div></section>`;

function slugify(t: string): string {
  return t
    .replace(/<[^>]*>/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_\- ]/g, "")
    .replace(/ /g, "-");
}

function addIds(html: string): string {
  const seen: Record<string, number> = {};
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_m, lvl, inner) => {
    const base = slugify(inner);
    const n = seen[base] ?? 0;
    seen[base] = n + 1;
    const id = n === 0 ? base : `${base}-${n}`;
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
}

const article = addIds(rawArticle);

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
