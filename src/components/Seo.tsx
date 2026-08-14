import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { organizationNode } from "@/lib/schemaHelpers";
import type { JsonLdObject } from "@/lib/schemaHelpers";
import { COMPANY_X_HANDLE, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

export const JSON_LD_SCRIPT_ID = "uvan-jsonld";

type JsonLdProp = JsonLdObject | JsonLdObject[] | undefined;

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string;
  /** Optional legacy meta keywords (comma-separated) */
  keywords?: string;
  /** Extra JSON-LD nodes merged with Organization into one @graph */
  jsonLd?: JsonLdProp;
};

function upsertMeta(name: string, content: string) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertProperty(property: string, content: string) {
  let node = document.querySelector(`meta[property="${property}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("property", property);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let node = document.querySelector("link[rel='canonical']");
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function upsertAlternate(hreflang: string, href: string) {
  let node = document.querySelector(`link[rel='alternate'][hreflang='${hreflang}']`);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "alternate");
    node.setAttribute("hreflang", hreflang);
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function normalizeExtras(jsonLd?: JsonLdProp): JsonLdObject[] {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd];
}

const Seo = ({ title, description, canonicalPath, keywords, jsonLd }: SeoProps) => {
  const { i18n } = useTranslation();

  const pathForCanonical =
    canonicalPath === "/" ? "/" : canonicalPath.endsWith("/") ? canonicalPath : `${canonicalPath}/`;

  const canonicalUrl = pathForCanonical === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathForCanonical}`;

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || "en";
    document.title = title;
    upsertMeta("description", description);
    if (keywords?.trim()) {
      upsertMeta("keywords", keywords.trim());
    }
    upsertCanonical(canonicalUrl);
    upsertAlternate("en", canonicalUrl);
    upsertAlternate("zh", `${SITE_URL}/zh${pathForCanonical === "/" ? "" : pathForCanonical}`);
    upsertAlternate("ja", `${SITE_URL}/ja${pathForCanonical === "/" ? "" : pathForCanonical}`);
    upsertProperty("og:url", canonicalUrl);
    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:image", SITE_OG_IMAGE);
    upsertMeta("twitter:url", canonicalUrl);
    upsertMeta("twitter:site", COMPANY_X_HANDLE);
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", SITE_OG_IMAGE);
  }, [canonicalUrl, title, description, keywords, pathForCanonical, i18n.resolvedLanguage]);

  useEffect(() => {
    const extras = normalizeExtras(jsonLd);
    const merged = {
      "@context": "https://schema.org",
      "@graph": [organizationNode, ...extras],
    };
    let script = document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = JSON_LD_SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(merged);
    return () => {
      script?.remove();
    };
  }, [canonicalUrl, jsonLd, title]);

  return null;
};

export default Seo;
