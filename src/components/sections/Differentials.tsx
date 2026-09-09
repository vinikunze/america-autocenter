import { differentials } from "@/content/site";
import { ServiceIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Differentials() {
  return (
    <Section id="diferenciais" className="overflow-hidden">
      {/* Halo de acento à esquerda, criando profundidade na seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-600/12 blur-[110px]"
      />

      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Por que a América"
            title={
              <>
                O medo não é do conserto.{" "}
                <span className="text-gradient">É da conta no fim.</span>
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
              className="surface-card group rounded-3xl p-7 transition-colors duration-500 hover:border-white/20"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/12 text-brand-400">
                <ServiceIcon name={item.icon} className="h-[1.3rem] w-[1.3rem]" />
              </span>
              <h3 className="mt-5 font-display text-[1.08rem] font-bold tracking-tight text-chalk">
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
