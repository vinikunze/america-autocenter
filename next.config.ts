import type { NextConfig } from "next";

/**
 * Export estático: a landing gera HTML/CSS/JS puros em `out/`.
 * Isso garante TTFB mínimo (critério decisivo para Quality Score no
 * Google Ads) e permite deploy em Vercel, Netlify, Cloudflare Pages,
 * GitHub Pages ou qualquer hospedagem compartilhada.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
