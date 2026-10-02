import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { business, siteUrl } from "@/content/site";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

/** Corpo: grotesca neutra, ótima legibilidade em tela pequena. */
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-family",
});

/** Títulos: grotesca de peso alto, em caixa mista e tracking fechado. */
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
  variable: "--font-display-family",
});

const title = `${business.name} | Auto center em ${business.city}/${business.state}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  keywords: [
    "auto center Sinop",
    "oficina mecânica Sinop MT",
    "auto peças Sinop",
    "troca de óleo Sinop",
    "alinhamento e balanceamento Sinop",
    "freios e suspensão Sinop",
    business.name,
  ],
  applicationName: business.name,
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.name,
    title,
    description: business.shortDescription,
    // URL absoluta e com extensão: hospedagens estáticas simples servem
    // o arquivo sem extensão como octet-stream e o WhatsApp não renderiza
    // a prévia. Ver scripts/og.mjs.
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: business.shortDescription,
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${body.variable} ${display.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        {/* Atalho de teclado para leitores de tela e navegação por Tab. */}
        <a
          href="#servicos"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-500 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
