import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sprinter Yazılım — Modern Headless E-Ticaret & Dijital Ürünler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e3a8a 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Arka plan parıltı */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(59,130,246,0.45), rgba(6,182,212,0.0) 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -60,
            width: 460,
            height: 460,
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(6,182,212,0.35), rgba(6,182,212,0.0) 60%)",
            display: "flex",
          }}
        />

        {/* Logo satırı */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 800,
              color: "white",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "white", fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>
              Sprinter Yazılım
            </div>
            <div style={{ color: "#93c5fd", fontSize: 15, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
              DİJİTAL ÜRÜNLER STÜDYOSU
            </div>
          </div>
        </div>

        {/* Ana başlık */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "white",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            İşletmenizi geleceğe taşıyan modern dijital altyapılar
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 26, fontWeight: 500, maxWidth: 900 }}>
            Next.js + Shopify Headless · SEO · AI Otomasyon · Mobil Uygulama
          </div>
        </div>

        {/* Alt rozetler */}
        <div style={{ display: "flex", gap: 14 }}>
          {["1 saniyenin altında açılış", "SEO skoru 90+", "AI-okunabilir altyapı"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 22px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "white",
                fontSize: 19,
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#22d3ee", fontSize: 20 }}>✦</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
