import { Link } from "react-router-dom";
import { useState } from "react";

const finalPages = [
  { path: "", label: "Home" },
  { path: "/memberships", label: "Memberships" },
  { path: "/winners", label: "Winners" },
  { path: "/events", label: "Events" },
  { path: "/discounts", label: "Discounts" },
  { path: "/charity", label: "Charity" },
  { path: "/login", label: "Login" },
  { path: "/dashboard", label: "Dashboard" },
];

const v2Directions = [
  { slug: "a", brand: "HerCircle", name: "Editorial Luxe", fontPair: "Cormorant Garamond × Raleway" },
  { slug: "b", brand: "Haus Of Her", name: "Soft Premium", fontPair: "Fraunces × DM Sans" },
  { slug: "c", brand: "HerCircle", name: "Confident Femme", fontPair: "Bricolage × Inter" },
  { slug: "d", brand: "HerCircle", name: "Modern Minimal", fontPair: "Tenor Sans × Inter" },
];

const v1Directions = [
  { slug: "a", name: "v1 — Editorial Luxe", fontPair: "Playfair × Inter" },
  { slug: "b", name: "v1 — Confident Femme", fontPair: "Bricolage × Inter" },
  { slug: "c", name: "v1 — Soft Premium", fontPair: "Fraunces × DM Sans" },
  { slug: "d", name: "v1 — Maximalist", fontPair: "Archivo Black × Plus Jakarta" },
];

export default function Switcher() {
  const [showV2, setShowV2] = useState(false);
  const [showV1, setShowV1] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0B0C",
        color: "#F2EFEA",
        fontFamily: "Raleway, Inter, system-ui, sans-serif",
      }}
    >
      <header style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px 24px" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#A39B8E",
            margin: 0,
          }}
        >
          Pitch artefact · Final · May 2026
        </p>
        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(48px, 9vw, 120px)",
            fontWeight: 400,
            letterSpacing: "0.005em",
            lineHeight: 0.92,
            margin: "16px 0 0",
            textTransform: "uppercase",
          }}
        >
          HerCircle.<br />
          <span style={{ color: "#EB3644" }}>The single, signed-off direction.</span>
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
          The client requested a single design that follows the brief literally and uses
          ellamayding.com.au as the visual anchor. Eight pages. Anton + Raleway. Red + cream.
          Member-gated previews. v1 (4 directions) and v2 (4 directions) are preserved below for context.
        </p>
      </header>

      {/* HEADLINE CARD — /final */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "32px 32px 48px" }}>
        <article
          style={{
            background: "linear-gradient(135deg, #FFF1E3 0%, #F2DCC8 100%)",
            color: "#121212",
            borderRadius: 4,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 0,
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
          }}
          className="final-headline-card"
        >
          <div
            style={{
              padding: "56px 56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 540,
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "#121212" }}>
                  /final · HerCircle
                </span>
                <span
                  style={{
                    background: "#EB3644",
                    color: "#fff",
                    fontSize: 10,
                    letterSpacing: "0.24em",
                    padding: "6px 12px",
                    borderRadius: 999,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Headline · open this
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(48px, 6vw, 96px)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  margin: 0,
                  letterSpacing: "0.005em",
                }}
              >
                Per the brief.<br />
                <span style={{ color: "#EB3644" }}>Per the reference.</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 32, maxWidth: 480 }}>
                Ella May Ding aesthetic — Railroad Gothic display via Anton, Raleway body, hot-poppy red
                on cream, full-bleed lifestyle hero, marquee strip, numbered section markers.
                Eight pages, fully responsive at 375px, member-gated Events + Discounts via{" "}
                <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 3 }}>?member=1</code>.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
                {finalPages.map((p) => (
                  <Link
                    key={p.label}
                    to={`/final${p.path}`}
                    style={{
                      color: "#121212",
                      textDecoration: "none",
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      fontSize: 11,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#121212" }}>
                Anton × Raleway
              </span>
              <Link
                to="/final"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  background: "#EB3644",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 28px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Open /final →
              </Link>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: 540,
              background: "#121212",
              overflow: "hidden",
            }}
          >
            <img
              src="/final-home.jpg"
              alt="HerCircle final home preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                // Hide image and show placeholder if screenshot not yet captured.
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                padding: 40,
                pointerEvents: "none",
                background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.5) 100%)",
                color: "#fff",
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", opacity: 0.78 }}>Live preview</span>
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 36,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  marginTop: 8,
                }}
              >
                Join the circle.
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* v2 ACCORDION */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px 24px" }}>
        <button
          type="button"
          onClick={() => setShowV2((v) => !v)}
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
          {showV2 ? "Hide" : "Show"} v2 directions ({v2Directions.length}) {showV2 ? "↑" : "↓"}
        </button>
        {showV2 && (
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {v2Directions.map((d) => (
              <Link
                key={d.slug}
                to={`/v2/${d.slug}`}
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
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{d.brand} — {d.name}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: "#7E776B", letterSpacing: "0.04em" }}>{d.fontPair}</p>
                </div>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A39B8E" }}>/v2/{d.slug} →</span>
              </Link>
            ))}
            <p style={{ gridColumn: "1 / -1", fontSize: 12, color: "#7E776B", margin: "8px 0 0", fontStyle: "italic" }}>
              Second-pass shotgun — four brand worlds. Superseded by /final above.
            </p>
          </div>
        )}
      </section>

      {/* v1 ACCORDION */}
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
          {showV1 ? "Hide" : "Show"} v1 directions ({v1Directions.length}) {showV1 ? "↑" : "↓"}
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
              First-pass shotgun. Kept for context.
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
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>What /final is</p>
          <p style={{ margin: "6px 0 0" }}>
            One direction, eight pages. Anton display + Raleway body. Hot-poppy red + cream + ink.
            Built to the brief, anchored to ellamayding.com.au.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>How to demo</p>
          <p style={{ margin: "6px 0 0" }}>
            Open /final, walk the nav. On Events / Discounts, append <code style={{ color: "#C2BBAE", fontFamily: "ui-monospace, monospace" }}>?member=1</code> to
            see the unlocked-member view. Login is a stub — submit goes to /final/dashboard.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>Charity partner</p>
          <p style={{ margin: "6px 0 0" }}>
            Share The Dignity — $5 per member, per month. Counter on every member dashboard.
            Pitch artefact: all numbers, winners and dashboard state are mock data.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .final-headline-card {
            grid-template-columns: 1fr !important;
          }
          .final-headline-card > div:last-child {
            min-height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
