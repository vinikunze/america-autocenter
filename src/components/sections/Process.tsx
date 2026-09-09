import { steps } from "@/content/site";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

export function Process() {
  return (
    <Section id="processo" className="border-y border-white/[0.06] bg-ink-900/40">
      <SectionHeader
        align="center"
        eyebrow="Como funciona"
        title={<>Três passos entre o problema e o carro pronto</>}
        description="Sem burocracia, sem enrolação e sem aquela ligação surpresa dizendo que apareceu mais coisa."
      />

      <ol className="relative mt-16 grid gap-8 md:grid-cols-3">
        {/* Trilha conectando os passos (apenas em telas grandes) */}
        <div
          aria-hidden
          className="absolute inset-x-[16%] top-7 hidden h-px bg-gradient-to-r from-brand-500/50 via-white/10 to-transparent md:block"
        />

        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 130} className="relative">
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-ink-950 font-display text-[1.1rem] font-extrabold text-brand-400 shadow-[0_0_40px_-12px_rgba(238,59,50,0.7)]">
              0{i + 1}
            </span>
            <h3 className="mt-6 font-display text-[1.2rem] font-bold tracking-tight text-chalk">
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
