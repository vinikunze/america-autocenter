import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <Logo className="h-14" />
      <h1 className="mt-8 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-mist">
        O endereço que você tentou acessar não existe. Volte para a página
        inicial e fale com a gente pelo WhatsApp.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex h-12 items-center rounded-xl bg-brand-500 px-7 font-semibold text-white transition-colors hover:bg-brand-400"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
