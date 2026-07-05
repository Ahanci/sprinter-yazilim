import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind class birleştirici (clsx + tailwind-merge).
 * Aynı utility'nin farklı değerleri varsa sonuncuyu tutar.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * WhatsApp derin linki üretir. Mesajı URL encode eder.
 * Telefona Türkiye ülke kodunu (90) otomatik ekler — wa.me gereksinimi.
 */
export function whatsappLink(_phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${getWhatsAppWaMe()}?text=${encoded}`;
}

/**
 * wa.me için uluslararası formatlı numara üretir (Türkiye: 90 ekler).
 * Kabul: "5396540461", "05396540461", "905396540461" — hepsi → "905396540461".
 */
export function getWhatsAppWaMe(): string {
  const raw = (process.env.NEXT_PUBLIC_WHATSAPP ?? "5396540461").replace(/\D/g, "");
  if (raw.startsWith("90")) return raw;
  if (raw.startsWith("0")) return `9${raw}`;
  return `90${raw}`;
}

/**
 * Hizmet iletişim formu için önceden doldurulmuş mesaj şablonu.
 */
export function buildLeadMessage({
  ad,
  firma,
  hizmet,
  telefon,
  mesaj,
}: {
  ad: string;
  firma: string;
  hizmet: string;
  telefon: string;
  mesaj: string;
}): string {
  return [
    "Merhaba Sprinter,",
    "",
    `Ad: ${ad}`,
    `Firma: ${firma}`,
    `Hizmet: ${hizmet}`,
    `Telefon: ${telefon}`,
    "",
    "Mesaj:",
    mesaj,
  ].join("\n");
}

/**
 * WhatsApp numarasını ortamdan okur (client + server uyumlu).
 */
export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP ?? "5396540461";
  return raw.replace(/\D/g, "");
}

/**
 * Site URL'ini ortamdan okur.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://sprinteryazilim.com";
}

/**
 * Slug üretir (Türkçe karakterleri korur, ASCII fallback ile).
 * Örnek: "E-Ticaret Sitesi" → "e-ticaret-sitesi"
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Meta description için kısa özet üretir.
 */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const sliced = text.slice(0, max);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${sliced.slice(0, lastSpace > 0 ? lastSpace : max).trim()}…`;
}

/**
 * Türkiye telefon numarasını görsel formata çevirir.
 */
export function formatPhoneTR(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("0")) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
  }
  return phone;
}