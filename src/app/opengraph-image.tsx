import { ImageResponse } from "next/og";
import { business } from "@/content/site";

/**
 * Card de compartilhamento gerado em build. É o que aparece quando o
 * link é colado no WhatsApp, no Instagram ou no Facebook — um dos
 * fatores que mais afetam o CTR do link em campanhas sociais.
 */
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${business.name} — auto center em ${business.city}/${business.state}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          backgroundImage:
            "radial-gradient(900px 480px at 50% -12%, rgba(238,59,50,0.34), transparent 70%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <path
              d="M20 1.8 36.5 7.6v12.1c0 8.7-6.6 16.6-16.5 18.5C10.1 36.3 3.5 28.4 3.5 19.7V7.6Z"
              fill="#ee3b32"
            />
            <path
              d="M20 10.5 27.8 28h-4.3l-1.35-3.35h-4.3L16.5 28h-4.3Zm0 6.9-1.4 3.6h2.8Z"
              fill="#08090b"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f6f7f9", fontSize: 38, fontWeight: 800, letterSpacing: -1 }}>
              AMÉRICA
            </span>
            <span style={{ color: "#737d8c", fontSize: 19, letterSpacing: 7 }}>
              AUTO CENTER
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span
            style={{
              color: "#f6f7f9",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 900,
            }}
          >
            Seu carro nas mãos de quem explica antes de cobrar.
          </span>
          <span style={{ color: "#a8b0bd", fontSize: 30, maxWidth: 860 }}>
            Peças, acessórios e serviços automotivos em {business.city}/{business.state}.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <span
            style={{
              background: "#ee3b32",
              color: "#fff",
              fontSize: 27,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 999,
            }}
          >
            {business.phone.display}
          </span>
          <span style={{ color: "#737d8c", fontSize: 25 }}>
            {business.address.street} · {business.city}/{business.state}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
