import { differentials, photos } from "@/content/site";
import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";

/**
 * Bloco escuro sobre foto de bastidor. Enquanto não houver imagem em
 * `photos.bastidor`, o gradiente sozinho já sustenta o contraste.
 */
export function Differentials() {
  const temFundo = photos.bastidor.src.length > 0;

  return (
    <section id="diferenciais" className="relative isolate overflow-hidden py-20 sm:py-28">
      {temFundo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(photos.bastidor.src)}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      ) : null}
      <div
        className={`absolute inset-0 -z-10 ${
          temFundo ? "bg-ink-950/88" : "bg-ink-900"
        }`}
        aria-hidden
      />
      {!temFundo ? <div className="bg-mesh absolute inset-0 -z-10 opacity-60" aria-hidden /> : null}

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4.8vw,3rem)] text-chalk">
            Por que escolher a <span className="text-accent">América Auto Center</span>
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-mist">
            Quatro compromissos que valem para todo carro que entra no nosso box
            — do serviço de trinta minutos ao reparo mais caro.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 90}
              className="surface-card flex h-full flex-col items-center rounded-2xl bg-ink-850/85 p-7 text-center backdrop-blur-sm transition-colors duration-300 hover:border-brand-500/50"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/12 text-brand-500">
                <ServiceIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-[1.12rem] text-chalk">{item.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-mist">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
