import { steps } from "@/content/site";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

export function Process() {
  return (
    <Section id="processo" className="relative overflow-hidden border-y-2 border-ink-800 bg-ink-900">
      <div className="bg-plate absolute inset-0 opacity-50" aria-hidden />

      <SectionHeader
        align="center"
        eyebrow="Como funciona"
        title={<>Três passos entre o problema e o carro pronto</>}
        description="Sem burocracia, sem enrolação e sem aquela ligação surpresa dizendo que apareceu mais coisa."
      />

      <ol className="relative mt-16 grid gap-8 md:grid-cols-3 [&>li]:relative">
        {/* Trilha conectando os passos (apenas em telas grandes) */}
        <div
          aria-hidden
          className="absolute inset-x-[16%] top-8 hidden h-0.5 bg-ink-700 md:block"
        />

        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 130} className="relative">
            <span className="relative z-10 flex h-16 w-16 items-center justify-center border-2 border-amber-500 bg-ink-950 font-display text-[1.7rem] font-extrabold text-amber-400">
              0{i + 1}
            </span>
            <h3 className="mt-6 font-display text-[1.45rem] font-bold text-chalk">
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
