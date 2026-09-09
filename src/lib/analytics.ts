/**
 * Camada única de rastreamento de conversões.
 *
 * A landing existe para alimentar tráfego pago, então todo clique que
 * representa um lead precisa virar evento em GA4, Google Ads e Meta.
 * Os IDs vêm de variáveis de ambiente (`.env.local`) — sem nenhum ID
 * configurado, nada é carregado e o site continua funcionando.
 *
 * Ver `.env.example` para as chaves disponíveis.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const hasGoogleTag = Boolean(GA_ID || GOOGLE_ADS_ID);
export const hasMetaPixel = Boolean(META_PIXEL_ID);

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
    fbq?: FbqFn;
  }
}

/** Origem do lead, para saber qual CTA converte melhor. */
export type LeadSource =
  | "header"
  | "hero"
  | "servicos"
  | "processo"
  | "contato"
  | "mapa"
  | "rodape"
  | "botao-flutuante";

export type LeadChannel = "whatsapp" | "telefone" | "formulario" | "instagram" | "rota";

/**
 * Dispara o mesmo evento de conversão nas três plataformas.
 * Nunca lança erro: se um script foi bloqueado por adblock, o clique
 * do usuário segue normalmente.
 */
export function trackLead(channel: LeadChannel, source: LeadSource): void {
  if (typeof window === "undefined") return;

  const label = `${channel}_${source}`;

  try {
    window.gtag?.("event", "generate_lead", {
      event_category: "conversao",
      event_label: label,
      channel,
      source,
    });

    // Conversão específica do Google Ads (usada para otimização de lances).
    if (GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL) {
      window.gtag?.("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      });
    }

    window.fbq?.("track", "Contact", { content_name: label });
  } catch {
    /* rastreamento nunca pode quebrar a navegação */
  }
}

/** Eventos de engajamento (não são conversão, servem para diagnóstico). */
export function trackEngagement(name: string, detail?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, detail);
  } catch {
    /* noop */
  }
}
