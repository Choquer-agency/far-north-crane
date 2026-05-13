import fs from "node:fs";
import path from "node:path";

export type LoadedPage = {
  wfPageId: string;
  bodyHtml: string;
  jsonLd: string[];
  inlineScripts: string[];
};

const SRC_DIR = path.join(process.cwd(), "lib", "source-html");

const LINK_MAP: Record<string, string> = {
  "index.html": "/",
  "about.html": "/about",
  "contact.html": "/contact",
  "past-projects.html": "/past-projects",
  "heavy-equipment-transport-services-saskatoon.html":
    "/heavy-equipment-transport-services-saskatoon",
  "industrial-plant-maintenance-saskatoon.html":
    "/industrial-plant-maintenance-saskatoon",
  "residential-and-commercial-crane-rentals-saskatoon.html":
    "/residential-and-commercial-crane-rentals-saskatoon",
};

function rewriteUrls(html: string): string {
  let out = html;
  // Asset paths: relative -> absolute under /public
  out = out.replace(/(src|href|poster)="images\//g, '$1="/images/');
  out = out.replace(/(src|href|poster)="videos\//g, '$1="/videos/');
  out = out.replace(/(src|href)="css\//g, '$1="/css/');
  out = out.replace(/(src|href)="js\//g, '$1="/js/');
  // url("images/...") inside inline styles
  out = out.replace(/url\("images\//g, 'url("/images/');
  out = out.replace(/url\('images\//g, "url('/images/");
  out = out.replace(/url\(images\//g, "url(/images/");
  // Internal page links
  for (const [src, dst] of Object.entries(LINK_MAP)) {
    const re = new RegExp(`href="${src.replace(/\./g, "\\.")}"`, "g");
    out = out.replace(re, `href="${dst}"`);
  }
  return out;
}

export function loadPage(file: string): LoadedPage {
  const raw = fs.readFileSync(path.join(SRC_DIR, file), "utf8");

  const wfMatch = raw.match(/data-wf-page="([^"]+)"/);
  const wfPageId = wfMatch ? wfMatch[1] : "";

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : raw;

  // Pull out JSON-LD scripts (rendered separately so dangerouslySetInnerHTML doesn't strip them)
  const jsonLd: string[] = [];
  body = body.replace(
    /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    (_, content) => {
      jsonLd.push(content.trim());
      return "";
    }
  );

  // Pull out inline scripts that follow farnorthcrane.js (page-specific behaviors)
  const inlineScripts: string[] = [];
  body = body.replace(
    /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g,
    (_, content) => {
      const trimmed = content.trim();
      if (trimmed) inlineScripts.push(trimmed);
      return "";
    }
  );

  // Remove external script tags - they're loaded globally in layout
  body = body.replace(/<script[^>]*\bsrc="[^"]*"[^>]*>\s*<\/script>/g, "");

  body = rewriteUrls(body);

  return { wfPageId, bodyHtml: body, jsonLd, inlineScripts };
}
