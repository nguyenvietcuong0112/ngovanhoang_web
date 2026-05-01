import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertMeta = (key: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector(`meta[${key}="${value}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    const resolvedUrl = url ?? window.location.href;
    const resolvedImage = image
      ? image.startsWith("http")
        ? image
        : `${window.location.origin}${image}`
      : `${window.location.origin}/logo.png`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", resolvedUrl);
    upsertMeta("property", "og:image", resolvedImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", resolvedImage);

    upsertCanonical(resolvedUrl);

    const existingScripts = Array.from(
      document.head.querySelectorAll('script[data-seo-json-ld="true"]')
    );
    existingScripts.forEach((script) => script.remove());

    if (jsonLd) {
      const payloads = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      payloads.forEach((payload) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-json-ld", "true");
        script.text = JSON.stringify(payload);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, image, url, type, jsonLd]);

  return null;
};

export default SEO;
