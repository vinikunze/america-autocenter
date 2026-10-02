import { WhatsAppButton, CallButton } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";

/**
 * Argumentos que ficavam na seção de orçamento. Ela foi removida por
 * repetir o mesmo formulário da primeira dobra — dois formulários
 * idênticos na mesma página dividem a atenção sem aumentar conversão.
 */
const garantias = [
  "Você não paga nada para receber o diagnóstico",
  "Nenhuma peça é trocada sem a sua autorização",
  "Se não for com a gente, você leva o orçamento e compara",
];

/** Último ponto de conversão antes do rodapé. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-ink-700 px-7 py-16 text-center sm:px-14 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-850 to-ink-950" />
          <div className="bg-mesh absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_70%_at_50%_0%,#000,transparent)]" />
          <div className="glow-shop absolute inset-x-0 -top-24 -z-10 h-80" />
          <div className="stripe-hazard absolute inset-x-0 top-0 h-2" aria-hidden />

          <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.8vw,3.1rem)] text-chalk">
            Seu carro parado é dinheiro parado.{" "}
            <span className="text-accent">Resolve hoje.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-mist">
            Mande uma mensagem agora e receba o orçamento antes mesmo de trazer
            o veículo. Sem compromisso e sem pegadinha.
          </p>

          <ul className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-3 sm:flex-row sm:flex-wrap">
            {garantias.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.93rem] text-mist">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 12.5 4.5 4.5L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              source="contato"
              size="lg"
              label="Chamar no WhatsApp"
              className="w-full sm:w-auto"
            />
            <CallButton source="contato" size="lg" className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
