import Script from "next/script";
import "./globals.css";

const GA_ID = "G-BLZ7NLV8LW";
const GTM_ID = "GTM-5DXFQCZ";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-wf-site="606398120ed24f73ec185447" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta property="og:type" content="website" />

        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/components.css" />
        <link rel="stylesheet" href="/css/farnorthcrane.css" />
        <link rel="stylesheet" href={`/css/overrides.css?v=${Date.now()}`} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />

        <meta name="msvalidate.01" content="5A1BA4839CD8FA02CCDD952F843BEE1D" />

        <style
          dangerouslySetInnerHTML={{
            __html: `::selection {background: #0fb14a; color: #FFFFFF; text-shadow: none;}
::-webkit-scrollbar { width:10px; }
::-webkit-scrollbar-thumb { background: rgb(25, 118, 59); }`,
          }}
        />

        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="wf-fonts" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Roboto Condensed:300,400,500,600,700"]}});`}
        </Script>
        <Script id="wf-modjs" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* jQuery + Webflow runtime — must run before page-specific scripts.
            jQuery is beforeInteractive so $ is global before farnorthcrane.js runs. */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=606398120ed24f73ec185447"
          strategy="beforeInteractive"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/farnorthcrane.js" strategy="afterInteractive" />

        {/* Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}',{'anonymize_ip':false});`}
        </Script>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
