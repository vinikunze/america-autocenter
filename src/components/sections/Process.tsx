import { steps } from "@/content/site";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

export function Process() {
  return (
    <Section id="processo" className="relative overflow-hidden border-y border-ink-800">
      <SectionHeader
        align="center"
        eyebrow="Como funciona"
        title={<>Três passos entre o problema e o carro pronto</>}
        description="Nada de burocracia nem daquela ligação no meio do serviço dizendo que apareceu mais coisa."
      />

      <ol className="relative mt-16 grid gap-8 md:grid-cols-3 [&>li]:relative">
        {/* Trilha conectando os passos (apenas em telas grandes) */}
        <div
          aria-hidden
          className="absolute inset-x-[16%] top-7 hidden h-px bg-gradient-to-r from-brand-500/60 via-ink-700 to-transparent md:block"
        />

        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 130} className="relative">
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-[1.3rem] font-extrabold text-white shadow-[0_12px_30px_-14px_rgba(224,31,45,0.9)]">
              0{i + 1}
            </span>
            <h3 className="mt-6 text-[1.28rem] text-chalk">
              {step.title}
            </h3>
            <p className="mt-2.5 max-w-sm text-[0.94rem] leading-relaxed text-mist">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={200} className="mt-14 flex justify-center">
        <WhatsAppButton source="processo" size="lg" label="Começar pelo passo 1" />
      </Reveal>
    </Section>
  );
}
