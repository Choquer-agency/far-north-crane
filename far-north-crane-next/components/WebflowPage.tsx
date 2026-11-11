import Script from "next/script";
import { loadPage } from "@/lib/loadPage";

type Props = { file: string; transform?: (html: string) => string };

export default function WebflowPage({ file, transform }: Props) {
  const loaded = loadPage(file);
  const { jsonLd, inlineScripts } = loaded;
  const bodyHtml = transform ? transform(loaded.bodyHtml) : loaded.bodyHtml;

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
