import { photos } from "@/content/site";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";

const promessas = [
  ["Orçamento fechado", "no WhatsApp antes de qualquer reparo"],
  ["Peça velha na sua mão", "e foto do antes e depois"],
  ["Peças novas", "de marcas que o mecânico confia"],
  ["Garantia de 90 dias", "em peça e mão de obra, por escrito"],
];

/**
 * Bloco de destaque: argumento à esquerda, mosaico de fotos à direita.
 * É aqui que a oficina deixa de ser abstrata para o visitante.
 */
export function Showcase() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Como a gente trabalha</Eyebrow>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,2.9rem)] text-chalk">
              Peças novas e serviço feito{" "}
              <span className="text-accent">com você sabendo de tudo</span>
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-mist">
              O medo de levar o carro na oficina não é do conserto — é da conta
              no fim. Por isso nosso processo inteiro foi montado para que você
              saiba o que vai ser feito, quanto vai custar e por quê, antes de
              autorizar.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-3.5">
            {promessas.map(([forte, resto], i) => (
              <Reveal as="li" key={forte} delay={190 + i * 60} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 12.5 4.5 4.5L19 7" />
                  </svg>
                </span>
                <span className="text-[0.98rem] leading-relaxed text-mist">
                  <strong className="font-semibold text-chalk">{forte}</strong> {resto}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={440} className="mt-9">
            <WhatsAppButton source="servicos" size="lg" label="Pedir meu orçamento" />
          </Reveal>
        </div>

        {/* Mosaico: duas colunas desencontradas, como vitrine da oficina. */}
        <Reveal delay={160}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <Photo photo={photos.fachada} ratio="4/3" sizes="(max-width: 1024px) 45vw, 26vw" />
              <Photo photo={photos.pecas} ratio="4/3" sizes="(max-width: 1024px) 45vw, 26vw" />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <Photo photo={photos.atendimento} ratio="4/3" sizes="(max-width: 1024px) 45vw, 26vw" />
              <Photo photo={photos.pneus} ratio="4/3" sizes="(max-width: 1024px) 45vw, 26vw" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
