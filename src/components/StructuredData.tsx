import { business, faq, services, siteUrl } from "@/content/site";
import { fullAddress } from "@/lib/links";

/**
 * JSON-LD para rich results do Google:
 *  - AutoRepair (LocalBusiness) alimenta o painel de negócio local;
 *  - FAQPage habilita o acordeão de perguntas direto na busca.
 * Ambos são gerados a partir de `src/content/site.ts`, então nunca
 * ficam dessincronizados do conteúdo visível.
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

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
      {[localBusiness, faqPage, website].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
