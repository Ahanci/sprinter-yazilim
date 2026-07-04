import { SITE } from "@/lib/data/site";

export function OrganizationJsonLd() {
  const data = {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    description: SITE.description,
    email: SITE.email,
    telephone: `+90${SITE.whatsappRaw}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE.address.country,
      addressLocality: SITE.address.city,
    },
    sameAs: [
      `https://instagram.com/${SITE.instagram}`,
      `https://facebook.com/${SITE.facebook}`,
      `https://linkedin.com/company/${SITE.linkedin}`,
    ],
    foundingDate: `${SITE.foundedYear}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}

export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}