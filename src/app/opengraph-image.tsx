import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { business } from "@/content/site";

/**
 * Card de compartilhamento gerado no build. É o que aparece quando o
 * link é colado no WhatsApp, no Instagram ou no Facebook — um dos
 * fatores que mais afetam o CTR do link em campanhas sociais.
 *
 * A logo e a fachada entram como data URI porque o Satori não busca
 * arquivos por caminho relativo durante o build estático.
 */
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${business.name} — auto center em ${business.city}/${business.state}`;

function dataUri(caminho: string, mime: string) {
  const bytes = readFileSync(join(process.cwd(), "public", caminho));
  return `data:${mime};base64,${bytes.toString("base64")}`;
}

export default function OpengraphImage() {
  const logo = dataUri("marca/logo-escuro.png", "image/png");
  const fachada = dataUri("fotos/fachada.jpg", "image/jpeg");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0d",
          padding: "62px 72px 68px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Fachada ao fundo, esmaecida para o texto ficar legível. */}
        <img
          src={fachada}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        {/* O Satori ignora `inset: 0` sem dimensão declarada — daí a
            largura e a altura explícitas nesta camada de escurecimento. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background:
              "linear-gradient(100deg, rgba(11,11,13,0.97) 30%, rgba(11,11,13,0.86) 62%, rgba(11,11,13,0.7) 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#d7101a",
          }}
        />

        <img src={logo} alt="" width={300} height={151} style={{ position: "relative" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
          <span
            style={{
              color: "#f7f7f9",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 820,
            }}
          >
            Seu carro nas mãos de quem explica antes de cobrar
          </span>
          <span style={{ color: "#a9a9b6", fontSize: 29, maxWidth: 780 }}>
            Alinhamento, freios, suspensão, escapamento e revisão em {business.city}/
            {business.state}.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22, position: "relative" }}>
          <span
            style={{
              background: "#d7101a",
              color: "#fff",
              fontSize: 27,
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: 12,
            }}
          >
            {business.phone.display}
          </span>
          <span style={{ color: "#7a7a88", fontSize: 25 }}>
            {business.address.street} · {business.city}/{business.state}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
