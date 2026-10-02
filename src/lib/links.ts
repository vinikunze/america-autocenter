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

const { lat, lng } = business.address;

/**
 * Rota até a oficina, pelas coordenadas da ficha no Google.
 * Por endereço, o Google às vezes para no número errado da quadra;
 * por coordenada, chega na porta.
 */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

/** Iframe do mapa, sem exigir chave de API. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=17&hl=pt-BR&output=embed`;

/** Ficha do negócio no Google — avaliações, fotos e horários. */
export const googleMapsUrl = business.address.googleMapsUrl;

export const fullAddress = [
  business.address.street,
  business.address.district,
  `${business.address.city}/${business.address.state}`,
  `CEP ${business.address.zip}`,
]
  .filter(Boolean)
  .join(" · ");
