import { WhatsAppButton, CallButton } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";

/** Último ponto de conversão antes do rodapé. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="bg-grain relative isolate overflow-hidden border-2 border-ink-700 px-7 py-16 text-center sm:px-14 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-850 to-ink-950" />
          <div className="bg-plate absolute inset-0 -z-10 opacity-70" />
          <div className="glow-shop absolute inset-x-0 -top-20 -z-10 h-72" />
          <div className="stripe-hazard absolute inset-x-0 top-0 h-2.5" aria-hidden />
          <div className="stripe-hazard absolute inset-x-0 bottom-0 h-2.5" aria-hidden />

          <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.6vw,3.6rem)] font-extrabold text-chalk">
            Seu carro parado é dinheiro parado.{" "}
            <span className="text-accent">Resolve hoje.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-mist">
            Mande uma mensagem agora e receba o orçamento antes de trazer o veículo.
            Sem compromisso, sem pegadinha.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
