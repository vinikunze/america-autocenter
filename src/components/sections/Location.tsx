import { business } from "@/content/site";
import { directionsUrl, mapEmbedUrl, mailUrl, fullAddress } from "@/lib/links";
import { PinIcon, MailIcon, InstagramIcon, Icon } from "@/components/Icons";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ActionLink, CallButton } from "@/components/CTA";

export function Location() {
  return (
    <Section id="local" className="relative overflow-hidden border-t border-ink-800 bg-ink-900">
      <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Onde estamos"
            title={
              <>
                Estrutura própria em <span className="text-accent">{business.city}</span>
              </>
            }
            description="Fácil de achar, com espaço para manobra e atendimento presencial. Toque em “Como chegar” e o mapa traça a rota do lugar onde você está agora."
          />

          <div className="mt-10 flex flex-col gap-6">
            <Reveal delay={80} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[1rem] font-bold text-chalk">Endereço</p>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-mist">{fullAddress}</p>
              </div>
            </Reveal>

            <Reveal delay={140} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                <Icon.clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[1rem] font-bold text-chalk">
                  Horário de atendimento
                </p>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {business.hours.map((h) => (
                    <li key={h.days} className="text-[0.92rem] text-mist">
                      <span className="text-slate-soft">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[1rem] font-bold text-chalk">Outros canais</p>
                <div className="mt-1 flex flex-col gap-0.5">
                  <a
                    href={mailUrl}
                    className="w-fit text-[0.92rem] text-mist transition-colors hover:text-brand-400"
                  >
                    {business.email}
                  </a>
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-1.5 text-[0.92rem] text-mist transition-colors hover:text-brand-400"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {business.instagram.handle}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260} className="mt-2 flex flex-col gap-3 sm:flex-row">
              <ActionLink
                href={directionsUrl}
                channel="rota"
                source="mapa"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Como chegar
              </ActionLink>
              <CallButton source="mapa" size="lg" className="w-full sm:w-auto" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={160} className="min-h-[22rem] lg:min-h-0">
          <div className="surface-card relative h-full overflow-hidden rounded-2xl p-2">
            <iframe
              src={mapEmbedUrl}
              title={`Mapa — ${business.name}, ${fullAddress}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[21rem] w-full rounded-xl border-0 grayscale-[0.55] contrast-[1.1] transition-[filter] duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
