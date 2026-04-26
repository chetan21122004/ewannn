import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

const SITE_URL = "https://ewan.co.in";

function upsertMeta(name: string, content: string) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", name);
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

const Seo = ({ title, description, canonicalPath }: SeoProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    document.documentElement.lang = i18n.resolvedLanguage || "en";
    document.title = title;
    upsertMeta("description", description);
    upsertCanonical(canonicalUrl);
    upsertAlternate("en", canonicalUrl);
    upsertAlternate("zh", `${SITE_URL}/zh${canonicalPath === "/" ? "" : canonicalPath}`);
    upsertAlternate("ja", `${SITE_URL}/ja${canonicalPath === "/" ? "" : canonicalPath}`);
  }, [title, description, canonicalPath, i18n.resolvedLanguage]);

  return null;
};

export default Seo;
