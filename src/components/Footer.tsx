import { business } from "@/content/site";
import { Logo } from "@/components/Logo";
import { InstagramIcon, PinIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { fullAddress, mailUrl, telUrl } from "@/lib/links";

const navGroups = [
  {
    title: "Navegação",
    links: [
      { href: "#servicos", label: "Serviços" },
      { href: "#diferenciais", label: "Por que a América" },
      { href: "#processo", label: "Como funciona" },
      { href: "#duvidas", label: "Dúvidas frequentes" },
      { href: "#local", label: "Onde estamos" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950">
      <div className="stripe-hazard h-2" aria-hidden />

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-slate-soft">
              {business.tagline}. Peças, acessórios e serviços com diagnóstico
              honesto e garantia por escrito.
            </p>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${business.instagram.handle}`}
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-mist transition-colors hover:border-brand-500 hover:text-brand-400"
            >
              <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
            </a>
          </div>

          {navGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-chalk">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.9rem] text-slate-soft transition-colors hover:text-chalk"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-chalk">
              Contato
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5 text-[0.9rem] text-slate-soft">
              <li className="flex gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{fullAddress}</span>
              </li>
              <li>
                <a href={telUrl} className="flex gap-2.5 transition-colors hover:text-chalk">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {business.phone.display}
                </a>
              </li>
              <li>
                <a href={mailUrl} className="flex gap-2.5 transition-colors hover:text-chalk">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink-800 pt-7 text-[0.78rem] text-slate-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Todos os direitos reservados.
          </p>
          <p>
            {business.legalName} · CNPJ {business.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
