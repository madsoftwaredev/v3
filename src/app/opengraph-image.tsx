import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants";

/** OG image metadata — used by Next.js file-based metadata convention */
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates a branded Open Graph image on the fly.
 * Next.js auto-discovers this file and injects the correct `<meta>` tags.
 */
export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Decorative grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Center content — v3 icon + description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          zIndex: 1,
        }}
      >
        {/* v3 icon — matches src/app/icon.svg */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "120px",
            height: "120px",
            borderRadius: "30px",
            background: "#0a0a0a",
            marginBottom: "40px",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: 800,
              color: "white",
              display: "flex",
              letterSpacing: "-1px",
            }}
          >
            v3
          </div>
          <div
            style={{
              position: "absolute",
              top: "18px",
              right: "16px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#ef4444",
              display: "flex",
            }}
          />
        </div>

        {/* Description — big and center */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "800px",
            lineHeight: 1.3,
            display: "flex",
            textAlign: "center",
          }}
        >
          {siteConfig.description}
        </div>
      </div>

      {/* Bottom: site name — small */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "4px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)",
          display: "flex",
        }}
      />
    </div>,
    { ...size },
  );
}
