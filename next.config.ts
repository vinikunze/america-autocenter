import type { NextConfig } from "next";

/**
 * Em subdiretório (GitHub Pages de projeto, ex.: /america-autocenter),
 * o Next precisa saber o prefixo — sem isso todo asset dá 404.
 * Em domínio próprio (Vercel, Netlify, hospedagem com domínio raiz),
 * a variável fica vazia e o site é servido da raiz.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Export estático: a landing gera HTML/CSS/JS puros em `out/`.
 * Isso garante TTFB mínimo (critério decisivo para Quality Score no
 * Google Ads) e permite deploy em Vercel, Netlify, Cloudflare Pages,
 * GitHub Pages ou qualquer hospedagem compartilhada.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
