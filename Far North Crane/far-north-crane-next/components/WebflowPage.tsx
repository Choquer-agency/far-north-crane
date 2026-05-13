import Script from "next/script";
import { loadPage } from "@/lib/loadPage";

type Props = { file: string };

export default function WebflowPage({ file }: Props) {
  const { bodyHtml, jsonLd, inlineScripts } = loadPage(file);

  return (
    <>
      {jsonLd.map((j, i) => (
        <script
          key={`ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: j }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {inlineScripts.map((s, i) => (
        <Script
          key={`is-${file}-${i}`}
          id={`page-inline-${file}-${i}`}
          strategy="afterInteractive"
        >
          {s}
        </Script>
      ))}
    </>
  );
}
