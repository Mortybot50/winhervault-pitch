import { Link } from "react-router-dom";
import { useState } from "react";

// v2 — new client brief: premium lifestyle membership platform for women.
// Featured prominently. v1 collapsed below for prospect comparison.
const v2Directions = [
  {
    slug: "a",
    brand: "HerCircle",
    name: "Editorial Luxe",
    tagline: "A Vogue-grade members club. Considered, restrained, premium.",
    description:
      "Display serif italic emphasis, generous whitespace, square-cornered cards. Cream + ink + saffron-blush accent. Reserved confidence.",
    fontPair: "Cormorant Garamond × Raleway",
    swatches: ["#FFF1E3", "#1E1A18", "#A14444", "#D9CDB6"],
    bg: "linear-gradient(135deg, #FFF1E3 0%, #F2E1CA 100%)",
    fg: "#1E1A18",
    accent: "#A14444",
  },
  {
    slug: "b",
    brand: "Haus Of Her",
    name: "Soft Premium",
    tagline: "Aesop-adjacent. Slow luxury, considered giveaways, soft-paced gatherings.",
    description:
      "Sand + blush + sage. Fraunces display × DM Sans body. Rounded 24px cards, pill buttons, generous breath. Spa-calm.",
    fontPair: "Fraunces × DM Sans",
    swatches: ["#F4ECDF", "#E8C8BE", "#A6B5A0", "#3A3A36"],
    bg: "linear-gradient(135deg, #F4ECDF 0%, #E8C8BE 100%)",
    fg: "#3A3A36",
    accent: "#5B6B54",
  },
  {
    slug: "c",
    brand: "WinHer Vault",
    name: "Confident Femme",
    tagline: "Glossier-era confidence with a luxury twist. Conversion-shaped.",
    description:
      "Deep berry + champagne gold + cream. Bricolage Grotesque × Inter. Punchy CTAs, saturated accents, commercial energy. Brand kept.",
    fontPair: "Bricolage Grotesque × Inter",
    swatches: ["#FFF7F2", "#5A1530", "#D4A85A", "#1F0F18"],
    bg: "linear-gradient(135deg, #5A1530 0%, #2C0A18 100%)",
    fg: "#FFF7F2",
    accent: "#D4A85A",
  },
  {
    slug: "d",
    brand: "HerCircle",
    name: "Modern Minimal",
    tagline: "Aesop-museum-store quiet. Whitespace-driven, monochrome, type-led.",
    description:
      "Bone + warm grey + ink. Tenor Sans display × Inter body. Hairline rules, museum-grid layouts, no decoration. Maximum restraint.",
    fontPair: "Tenor Sans × Inter",
    swatches: ["#F8F6F2", "#EDE9E2", "#8E867B", "#1A1814"],
    bg: "linear-gradient(135deg, #F8F6F2 0%, #D9D2C5 100%)",
    fg: "#1A1814",
    accent: "#5C5145",
  },
];

const v1Directions = [
  { slug: "a", name: "v1 — Editorial Luxe", fontPair: "Playfair × Inter" },
  { slug: "b", name: "v1 — Confident Femme", fontPair: "Bricolage × Inter" },
  { slug: "c", name: "v1 — Soft Premium", fontPair: "Fraunces × DM Sans" },
  { slug: "d", name: "v1 — Maximalist", fontPair: "Archivo Black × Plus Jakarta" },
];

export default function Switcher() {
  const [showV1, setShowV1] = useState(false);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0B0C",
        color: "#F2EFEA",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <header style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#A39B8E",
                margin: 0,
              }}
            >
              Pitch artefact · v2 · May 2026
            </p>
            <h1
              style={{
                fontFamily: "'Tenor Sans', 'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "16px 0 0",
              }}
            >
              WinHerVault — four redesign directions.
            </h1>
            <p
              style={{
                maxWidth: 760,
                color: "#C2BBAE",
                fontSize: 17,
                lineHeight: 1.65,
                margin: "20px 0 0",
              }}
            >
              Repositioning from "lottery club" to a <strong style={{ color: "#F2EFEA" }}>premium lifestyle members club for women</strong> —
              giveaways are one perk, not the product. Each direction renders eight pages: Home, Memberships,
              Winners, Events, Discounts, Charity, Login, Member Dashboard. Pick the brand world that feels right.
            </p>
          </div>
          <a
            href="https://winhervault.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              textDecoration: "none",
              color: "#F2EFEA",
              border: "1px solid rgba(242,239,234,0.2)",
              padding: "10px 16px",
              borderRadius: 999,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            View existing site ↗
          </a>
        </div>
      </header>

      <main
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "32px 32px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: 24,
        }}
      >
        {v2Directions.map((d) => (
          <article
            key={d.slug}
            style={{
              background: d.bg,
              color: d.fg,
              borderRadius: 20,
              overflow: "hidden",
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 36,
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  /v2/{d.slug} · {d.brand}
                </span>
                <div style={{ display: "flex", gap: 6 }}>
                  {d.swatches.map((s) => (
                    <span
                      key={s}
                      title={s}
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: s,
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  margin: "36px 0 8px",
                  fontFamily:
                    d.slug === "a"
                      ? "'Cormorant Garamond', serif"
                      : d.slug === "b"
                      ? "'Fraunces', serif"
                      : d.slug === "c"
                      ? "'Bricolage Grotesque', sans-serif"
                      : "'Tenor Sans', serif",
                }}
              >
                {d.name}
              </h2>
              <p style={{ fontSize: 14, opacity: 0.85, margin: "0 0 20px", fontStyle: "italic" }}>
                {d.tagline}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.85, margin: 0 }}>{d.description}</p>
            </div>

            <div style={{ marginTop: 32 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18, fontSize: 11, opacity: 0.7, letterSpacing: "0.04em" }}>
                {["Home", "Memberships", "Winners", "Events", "Discounts", "Charity", "Login", "Dashboard"].map((p) => (
                  <Link
                    key={p}
                    to={`/v2/${d.slug}/${p === "Home" ? "" : p.toLowerCase()}`}
                    style={{
                      color: d.fg,
                      textDecoration: "none",
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(0,0,0,0.06)",
                      fontSize: 11,
                      border: "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    {p}
                  </Link>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7 }}>
                  {d.fontPair}
                </span>
                <Link
                  to={`/v2/${d.slug}`}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: d.fg,
                    color: d.fg === "#FFF7F2" || d.fg === "#FFFFFF" ? d.accent : d.bg.includes("#5A1530") ? "#fff" : "#fff",
                    textDecoration: "none",
                    padding: "12px 22px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Open {d.brand} →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* v1 collapsed for prospect comparison */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px 64px" }}>
        <button
          type="button"
          onClick={() => setShowV1((v) => !v)}
          style={{
            background: "transparent",
            border: "1px solid rgba(242,239,234,0.18)",
            color: "#C2BBAE",
            padding: "14px 24px",
            borderRadius: 999,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {showV1 ? "Hide" : "Show"} v1 first-pass directions ({v1Directions.length}) {showV1 ? "↑" : "↓"}
        </button>
        {showV1 && (
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {v1Directions.map((d) => (
              <Link
                key={d.slug}
                to={`/${d.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#F2EFEA",
                  padding: "20px 24px",
                  border: "1px solid rgba(242,239,234,0.12)",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.02)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{d.name}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: "#7E776B", letterSpacing: "0.04em" }}>{d.fontPair}</p>
                </div>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A39B8E" }}>/{d.slug} →</span>
              </Link>
            ))}
            <p style={{ gridColumn: "1 / -1", fontSize: 12, color: "#7E776B", margin: "8px 0 0", fontStyle: "italic" }}>
              First-pass design explorations — kept for context. v2 above is the live recommendation.
            </p>
          </div>
        )}
      </section>

      <footer
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 32px 64px",
          color: "#7E776B",
          fontSize: 13,
          lineHeight: 1.65,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>What v2 is</p>
          <p style={{ margin: "6px 0 0" }}>
            A reposition. Members club first, giveaways one of four perks. 8 pages × 4 brand worlds. Cancel-anytime,
            weekly pricing, member-gated previews, $5/mo charity baked into every tier.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>How to demo</p>
          <p style={{ margin: "6px 0 0" }}>
            Open any direction, walk the nav top-to-bottom. On Events / Discounts, append <code style={{ color: "#C2BBAE", fontFamily: "ui-monospace, monospace" }}>?member=1</code> to
            see the unlocked-member view. Login is a stub — submit goes to /dashboard.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>What this is not</p>
          <p style={{ margin: "6px 0 0" }}>
            A pitch artefact, not a production rebuild. All numbers, winners, and dashboard state are mock data.
            Nothing is wired to a backend.
          </p>
        </div>
      </footer>
    </div>
  );
}
