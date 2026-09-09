"use client";

import { WhatsAppIcon } from "@/components/Icons";
import { useScrolled } from "@/lib/hooks";
import { whatsappUrl } from "@/lib/links";
import { trackLead } from "@/lib/analytics";

/**
 * Botão flutuante de WhatsApp — aparece após a primeira dobra para não
 * competir com o CTA do hero. Em mobile é o principal responsável pela
 * taxa de conversão do tráfego pago.
 */
export function FloatingCta() {
  const visible = useScrolled(520);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead("whatsapp", "botao-flutuante")}
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_-10px_rgba(37,211,102,0.75)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 sm:h-15 sm:w-15 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Anel pulsante discreto, chamando atenção sem irritar. */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366]/45"
        style={{ animation: "pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite" }}
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
