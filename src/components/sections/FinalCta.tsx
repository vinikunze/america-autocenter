import { WhatsAppButton, CallButton } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";

/** Último ponto de conversão antes do rodapé. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="bg-noise relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] px-7 py-16 text-center sm:px-14 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-800 to-ink-950" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(65%_65%_at_50%_0%,#000,transparent)]" />
          <div className="glow-brand absolute inset-x-0 -top-24 -z-10 h-80 opacity-80" />

          <h2 className="mx-auto max-w-2xl text-[clamp(1.85rem,4.6vw,2.9rem)] font-extrabold leading-[1.05] text-chalk">
            Seu carro parado é dinheiro parado.{" "}
            <span className="text-gradient">Resolve hoje.</span>
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
