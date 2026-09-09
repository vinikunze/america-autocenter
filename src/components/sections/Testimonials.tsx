import { testimonials } from "@/content/site";
import { StarIcon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * A seção só é renderizada quando existem depoimentos reais em
 * `src/content/site.ts`. Depoimento inventado destrói confiança e
 * viola as políticas de anúncio do Google e da Meta — por isso o
 * array nasce vazio e a seção simplesmente não aparece.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="depoimentos">
      <SectionHeader
        align="center"
        eyebrow="Quem já passou por aqui"
        title="A confiança de quem voltou"
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal
            as="li"
            key={item.name}
            delay={(i % 3) * 90}
            className="surface-card flex h-full flex-col p-7"
          >
            <div className="flex gap-0.5 text-brand-400" aria-label={`${item.rating} de 5 estrelas`}>
              {Array.from({ length: item.rating }).map((_, s) => (
                <StarIcon key={s} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[0.96rem] leading-relaxed text-mist">
              “{item.text}”
            </blockquote>
            <footer className="mt-6 border-t border-white/[0.07] pt-4">
              <p className="font-display text-[0.95rem] font-bold text-chalk">{item.name}</p>
              <p className="text-[0.8rem] text-slate-soft">{item.role}</p>
            </footer>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
