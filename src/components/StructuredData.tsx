import { business, faq, services, siteUrl } from "@/content/site";
import { fullAddress } from "@/lib/links";

/**
 * JSON-LD do negócio e do site, aplicado a todas as páginas.
 *
 * O FAQPage NÃO entra aqui: ele é específico de cada página, e repetir o
 * da home em toda URL criaria dois FAQPage no mesmo HTML — marcação
 * inválida. A home usa <HomeFaqSchema>, e cada página de serviço gera o
 * seu a partir do próprio FAQ.
 */
export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteUrl}/#negocio`,
    name: business.name,
    legalName: business.legalName,
    description: business.shortDescription,
    url: siteUrl,
    telephone: `+${business.phone.raw}`,
    email: business.email,
    image: `${siteUrl}/og.png`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Pix, Cartão de débito, Cartão de crédito",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: `${business.city}, ${business.state}`,
    },
    openingHours: business.hoursSchema,
    sameAs: [business.instagram.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços automotivos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${business.name} — ${fullAddress}`,
    url: siteUrl,
    inLanguage: "pt-BR",
  };

  return (
    <>
      {[localBusiness, website].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/** FAQPage da home. Montado só nela, para não duplicar nas outras rotas. */
export function HomeFaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
