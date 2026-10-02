import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business, services, siteUrl } from "@/content/site";
import { servicePages, findServicePage } from "@/content/servicePages";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton, CallButton } from "@/components/CTA";
import { ServiceIcon, ArrowIcon, PlusIcon, PinIcon } from "@/components/Icons";
import { fullAddress } from "@/lib/links";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/servicos/${page.slug}/` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `${siteUrl}/servicos/${page.slug}/`,
      siteName: business.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const service = services.find((s) => s.id === page.id);
  const outros = services.filter((s) => s.id !== page.id);

  /**
   * Schema do serviço + FAQ da página. Cada página de serviço tem o seu,
   * para o Google entender que são ofertas distintas do mesmo negócio.
   */
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service?.title ?? page.heading,
      description: page.metaDescription,
      serviceType: service?.title,
      areaServed: { "@type": "City", name: `${business.city}, ${business.state}` },
      provider: {
        "@type": "AutoRepair",
        "@id": `${siteUrl}/#negocio`,
        name: business.name,
        telephone: `+${business.phone.raw}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.state,
          postalCode: business.address.zip,
          addressCountry: "BR",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: service?.title ?? page.heading,
          item: `${siteUrl}/servicos/${page.slug}/`,
        },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <Header />

      <main>
        {/* ----------------------------- Hero ----------------------------- */}
        <section className="relative isolate overflow-hidden pb-14 pt-[calc(var(--header-h)+2rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+3rem)]">
          <div className="bg-mesh absolute inset-0 -z-20 [mask-image:radial-gradient(75%_60%_at_50%_0%,#000_10%,transparent_78%)]" />
          <div className="glow-shop absolute inset-x-0 -top-32 -z-20 h-[32rem]" />

          <div className="container-page grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="lg:pt-4">
              <Reveal>
                <nav aria-label="Você está em" className="mb-5 flex items-center gap-2 text-[0.82rem] text-slate-soft">
                  <Link href="/" className="transition-colors hover:text-chalk">
                    Início
                  </Link>
                  <span aria-hidden>/</span>
                  <span className="text-mist">{service?.title}</span>
                </nav>
              </Reveal>

              <Reveal delay={60}>
                <div className="flex items-center gap-3">
                  {service ? (
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </span>
                  ) : null}
                  <h1 className="text-[clamp(2rem,4.6vw,3.1rem)] text-chalk">
                    {page.heading}
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-mist">
                  {page.intro}
                </p>
              </Reveal>

              <Reveal delay={190}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    source="servicos"
                    size="lg"
                    label="Pedir orçamento"
                    className="w-full sm:w-auto"
                  />
                  <CallButton source="servicos" size="lg" className="w-full sm:w-auto" />
                </div>
              </Reveal>

              <Reveal delay={250}>
                <p className="mt-7 flex items-center gap-2 text-[0.9rem] text-slate-soft">
                  <PinIcon className="h-4 w-4 shrink-0 text-brand-500" />
                  {fullAddress}
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <LeadForm
                source="servicos"
                title={`Orçamento de ${service?.title.toLowerCase() ?? "serviço"}`}
                subtitle="Responde em poucos minutos no horário comercial."
                defaultService={service?.title ?? ""}
              />
            </Reveal>
          </div>
        </section>

        <div className="stripe-hazard h-2.5" aria-hidden />

        {/* --------------------------- Sintomas --------------------------- */}
        <section className="py-20 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                Quando procurar
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.6rem)] text-chalk">
                Sinais de que o seu carro já está pedindo
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-mist">
                Se você marcou algum destes, mande uma mensagem. Quanto antes,
                mais barato costuma sair.
              </p>
            </Reveal>

            <ul className="flex flex-col gap-3">
              {page.sintomas.map((sintoma, i) => (
                <Reveal
                  as="li"
                  key={sintoma}
                  delay={i * 60}
                  className="surface-card flex items-start gap-4 rounded-2xl p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-[0.78rem] font-bold text-brand-400">
                    {i + 1}
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-mist">
                    {sintoma}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------- Etapas ---------------------------- */}
        <section className="section-light py-20 sm:py-28">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                Como fazemos
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,2.8rem)] text-[color:var(--color-paper-ink)]">
                O passo a passo do serviço
              </h2>
            </Reveal>

            <ol className="mt-14 grid gap-5 sm:grid-cols-2">
              {page.etapas.map((etapa, i) => (
                <Reveal
                  as="li"
                  key={etapa.titulo}
                  delay={(i % 2) * 80}
                  className="surface-paper flex h-full flex-col rounded-2xl p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-[1.05rem] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[1.18rem] text-[color:var(--color-paper-ink)]">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[color:var(--color-paper-muted)]">
                    {etapa.texto}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------ FAQ ------------------------------ */}
        <section className="py-20 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                Dúvidas frequentes
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.6rem)] text-chalk">
                Sobre {service?.title.toLowerCase()}
              </h2>
              <div className="mt-8">
                <WhatsAppButton
                  source="servicos"
                  label="Tirar minha dúvida"
                  variant="outline"
                />
              </div>
            </Reveal>

            <ul className="flex flex-col gap-3">
              {page.faq.map((item, i) => (
                <Reveal as="li" key={item.question} delay={i * 60}>
                  <details className="surface-card group overflow-hidden rounded-2xl transition-colors duration-200 open:border-brand-500/50 hover:border-ink-600">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[1.02rem] leading-snug text-chalk sm:text-[1.08rem]">
                        {item.question}
                      </h3>
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-700 text-mist transition-all duration-300 group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500/10 group-open:text-brand-400">
                        <PlusIcon className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[0.95rem] leading-relaxed text-mist">
                      {item.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------ Outros serviços ------------------------ */}
        <section className="border-t border-ink-800 py-20 sm:py-24">
          <div className="container-page">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3.4vw,2.2rem)] text-chalk">
                Outros serviços da América
              </h2>
            </Reveal>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {outros.map((outro, i) => {
                const destino = findServicePage(outro.id);
                if (!destino) return null;
                return (
                  <Reveal as="li" key={outro.id} delay={(i % 3) * 60}>
                    <Link
                      href={`/servicos/${destino.slug}/`}
                      className="surface-card group flex items-center gap-3.5 rounded-2xl p-5 transition-colors duration-200 hover:border-brand-500/50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
                        <ServiceIcon name={outro.icon} className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-[0.98rem] font-semibold text-chalk">
                        {outro.title}
                      </span>
                      <ArrowIcon className="h-4 w-4 shrink-0 text-slate-soft transition-colors group-hover:text-brand-400" />
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCta />
    </>
  );
}
