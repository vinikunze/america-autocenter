import { differentials } from "@/content/site";
import { ServiceIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Differentials() {
  return (
    <Section id="diferenciais" className="overflow-hidden">
      {/* Halo de acento à esquerda, criando profundidade na seção */}
      <div className="bg-plate absolute inset-0 -z-10 opacity-45" aria-hidden />

      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Por que a América"
            title={
              <>
                O medo não é do conserto.{" "}
                <span className="text-accent">É da conta no fim.</span>
              </>
            }
            description="Todo mundo já saiu de uma oficina com a sensação de ter pago por algo que não entendeu. Nosso processo inteiro foi montado para que isso não aconteça aqui."
          />
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {differentials.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 100}
              className="surface-card group p-7 transition-colors duration-300 hover:border-amber-500/60"
            >
              <span className="flex h-12 w-12 items-center justify-center border-2 border-ink-700 bg-ink-950 text-brand-500 transition-colors duration-300 group-hover:text-amber-400">
                <ServiceIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-[1.32rem] font-bold text-chalk">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-mist">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
