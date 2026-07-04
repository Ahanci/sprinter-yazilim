import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Tüm sayfalar için tutarlı metadata üretir (Open Graph + Twitter + canonical).
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = `${SITE.url}${image ?? SITE.ogImage}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: SITE.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/**
 * Schema.org JSON-LD üretir (script etiketi olarak basılır).
 */
export function jsonLd(payload: Record<string, unknown>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...payload,
  });
}