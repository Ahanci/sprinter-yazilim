import type { MetadataRoute } from "next";
import { HIZMETLER } from "@/lib/data/hizmetler";
import { SEKTORLER } from "@/lib/data/sektorler";
import { BLOG_YAZILAR } from "@/lib/data/blog";
import { SITE } from "@/lib/data/site";

const STATIK_SAYFALAR = [
  "",
  "/e-ticaret",
  "/hizmetler",
  "/sektorler",
  "/teknolojiler",
  "/referanslar",
  "/surec",
  "/hakkimizda",
  "/blog",
  "/sss",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const statik = STATIK_SAYFALAR.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8,
  }));

  const hizmetler = HIZMETLER.map((h) => ({
    url: `${base}/hizmetler/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: h.vurgu ? 0.9 : 0.7,
  }));

  const sektorler = SEKTORLER.map((s) => ({
    url: `${base}/sektorler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blog = BLOG_YAZILAR.map((y) => ({
    url: `${base}/blog/${y.slug}`,
    lastModified: new Date(y.tarih),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...statik, ...hizmetler, ...sektorler, ...blog];
}