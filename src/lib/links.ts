import { business } from "@/content/site";

/**
 * Link do WhatsApp com a mensagem já preenchida.
 * A origem do clique NÃO entra no texto (o cliente veria jargão como
 * "(header)" na própria mensagem) — ela é registrada só no analytics.
 */
export function whatsappUrl(): string {
  return `https://wa.me/${business.phone.raw}?text=${encodeURIComponent(
    business.whatsappMessage,
  )}`;
}

export const telUrl = `tel:+${business.phone.raw}`;

export const mailUrl = `mailto:${business.email}`;

/** Abre a rota no app de mapas do dispositivo. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.address.mapsQuery,
)}`;

/** Iframe do mapa sem exigir chave de API. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  business.address.mapsQuery,
)}&z=16&output=embed`;

export const fullAddress = [
  business.address.street,
  business.address.district,
  `${business.address.city}/${business.address.state}`,
  `CEP ${business.address.zip}`,
]
  .filter(Boolean)
  .join(" · ");
