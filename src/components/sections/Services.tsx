import { services, servicePhotos } from "@/content/site";
import { ServiceIcon, ArrowIcon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/CTA";
import { whatsappUrl } from "@/lib/links";

/**
 * Seção clara — o contraste com os blocos escuros quebra a monotonia da
 * rolagem e faz os cards de serviço saltarem.
 */
export function Services() {
  return (
    <section id="servicos" className="section-light py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-500">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            O que fazemos
          </span>
          <h2 className="text-[clamp(2rem,4.8vw,3.1rem)] text-[color:var(--color-paper-ink)]">
            Tudo que o seu carro precisa{" "}
            <span className="text-accent">em um endereço só</span>
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-[color:var(--color-paper-muted)]">
            Da peça ao serviço executado. Você não precisa rodar a cidade atrás
            de três fornecedores diferentes para resolver um problema só.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={(i % 3) * 80}>
              <article className="surface-paper group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-[0_18px_46px_-22px_rgba(16,16,24,0.45)]">
                <Photo
                  photo={servicePhotos[service.id] ?? { src: "", alt: service.title }}
                  ratio="16/10"
                  tone="light"
                  rounded=""
                  className="border-0 border-b border-[color:var(--color-paper-line)]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                      <ServiceIcon name={service.icon} className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <h3 className="text-[1.18rem] text-[color:var(--color-paper-ink)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-[color:var(--color-paper-muted)]">
                    {service.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-[color:var(--color-paper-line)] bg-[color:var(--color-paper)] px-2.5 py-1 text-[0.73rem] font-medium text-[color:var(--color-paper-muted)]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Fecha a grade de três e vira mais um ponto de conversão. */}
          <Reveal as="li" delay={160} className="sm:col-span-2 lg:col-span-2">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-[color:var(--color-paper-ink)] p-8 sm:p-10">
              <div className="glow-shop absolute inset-x-0 -top-16 h-56 opacity-70" aria-hidden />
              <h3 className="relative text-[clamp(1.4rem,2.6vw,1.85rem)] text-chalk">
                Não achou o que precisa?
              </h3>
              <p className="relative mt-2.5 max-w-md text-[0.98rem] leading-relaxed text-mist">
                Descreva o problema no WhatsApp. Se for serviço que a gente faz,
                já sai o orçamento; se não for, indicamos quem faz direito.
              </p>
              <div className="relative mt-7 flex items-center gap-3">
                <WhatsAppButton source="servicos" size="lg" label="Falar com a equipe" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden
                  tabIndex={-1}
                  className="hidden text-slate-soft transition-colors hover:text-chalk sm:block"
                >
                  <ArrowIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
