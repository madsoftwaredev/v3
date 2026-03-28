import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants";

import { getPostBySlug } from "../_data";

/** OG image metadata */
export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OGImageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Dynamic OG image for individual blog posts.
 * Renders the post title, author, and reading time over a branded background.
 */
export default async function OGImage({ params }: OGImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog Post";
  const author = post?.author ?? siteConfig.creator;
  const readingTime = post?.readingTime ?? "";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, sans-serif",
        padding: "60px",
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
          top: "-150px",
          right: "-50px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Top: v3 icon + reading time */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
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
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#0a0a0a",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "white",
              display: "flex",
              letterSpacing: "-0.5px",
            }}
          >
            v3
          </div>
          <div
            style={{
              position: "absolute",
              top: "6px",
              right: "5px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ef4444",
              display: "flex",
            }}
          />
        </div>
        {readingTime ? (
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
            }}
          >
            {readingTime}
          </div>
        ) : null}
      </div>

      {/* Center: title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 1,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: title.length > 60 ? "42px" : "56px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
            display: "flex",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
      </div>

      {/* Bottom: author + site URL */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Author avatar placeholder */}
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "white",
            }}
          >
            {author.charAt(0).toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "white", display: "flex" }}>
              {author}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
            display: "flex",
          }}
        >
          {siteConfig.url.replace(/https?:\/\//, "")}
        </div>
      </div>

      {/* Bottom accent bar */}
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
