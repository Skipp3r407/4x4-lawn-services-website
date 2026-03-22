import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    areaServed: {
      "@type": "Place",
      name: "Orlando, FL",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    url: site.url,
    sameAs: [site.instagramUrl],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
