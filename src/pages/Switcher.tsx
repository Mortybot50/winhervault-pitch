import { Link } from "react-router-dom";

const directions = [
  {
    slug: "a",
    name: "Editorial Luxe",
    tagline: "Vogue meets a giveaway club.",
    description:
      "Serif display, generous whitespace, magazine-style art direction. Cream + black + ink-spot accent. Reserved, premium, calm confidence.",
    fontPair: "Playfair Display × Inter",
    swatches: ["#F5EFE6", "#111111", "#7A2A2A", "#C9B79C"],
    bg: "linear-gradient(135deg, #F5EFE6 0%, #E8DDC9 100%)",
    fg: "#111",
  },
  {
    slug: "b",
    name: "Confident Femme",
    tagline: "Glossier-era confidence with a luxury twist.",
    description:
      "Bold geometric sans, saturated brand palette, tight modular grids. Deep berry · champagne gold · cream. Modern, energetic, unapologetic.",
    fontPair: "Bricolage Grotesque × Inter",
    swatches: ["#FFF7F2", "#5A1530", "#D4A85A", "#1A0A12"],
    bg: "linear-gradient(135deg, #5A1530 0%, #2C0A18 100%)",
    fg: "#FFF7F2",
  },
  {
    slug: "c",
    name: "Soft Premium",
    tagline: "Aesop / Le Labo for lifestyle club.",
    description:
      "Muted pastels, humanist serif × neo-grotesque sans. Powder pink, sand, sage, ivory. Quiet luxury, restraint, taste.",
    fontPair: "Fraunces × DM Sans",
    swatches: ["#F4E8DD", "#E5C8C2", "#A8B5A0", "#3A3A36"],
    bg: "linear-gradient(135deg, #F4E8DD 0%, #E5C8C2 100%)",
    fg: "#3A3A36",
  },
  {
    slug: "d",
    name: "Maximalist Aspirational",
    tagline: "Selfridges / Net-a-Porter energy.",
    description:
      "Big imagery, bold colour blocks, motion-forward feel. Saturated jewel tones — emerald, royal violet, hot pink, gold. Loud, joyful, celebratory.",
    fontPair: "Archivo Black × Plus Jakarta Sans",
    swatches: ["#0E3B2E", "#E5267A", "#F5C518", "#3B1F8B"],
    bg: "linear-gradient(135deg, #0E3B2E 0%, #3B1F8B 50%, #E5267A 100%)",
    fg: "#FFFFFF",
  },
];

export default function Switcher() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0B0C",
        color: "#F2EFEA",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <header style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px 24px" }}>
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
              Pitch artefact · April 2026
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "12px 0 0",
              }}
            >
              WinHerVault — four redesign directions.
            </h1>
            <p
              style={{
                maxWidth: 720,
                color: "#C2BBAE",
                fontSize: 17,
                lineHeight: 1.6,
                margin: "20px 0 0",
              }}
            >
              Same four screens — Home, Memberships, Current Draw, Member Dashboard — rendered four
              completely different ways. Pick the direction that feels most like the brand you want to
              build, and we&rsquo;ll polish that one to production fidelity.
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
          maxWidth: 1280,
          margin: "0 auto",
          padding: "32px 32px 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: 24,
        }}
      >
        {directions.map((d) => (
          <article
            key={d.slug}
            style={{
              background: d.bg,
              color: d.fg,
              borderRadius: 24,
              overflow: "hidden",
              minHeight: 460,
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
                  Direction {d.slug.toUpperCase()}
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
                  margin: "32px 0 8px",
                  fontFamily:
                    d.slug === "a"
                      ? "'Playfair Display', serif"
                      : d.slug === "b"
                      ? "'Bricolage Grotesque', sans-serif"
                      : d.slug === "c"
                      ? "'Fraunces', serif"
                      : "'Archivo Black', sans-serif",
                  textTransform: d.slug === "d" ? "uppercase" : "none",
                }}
              >
                {d.name}
              </h2>
              <p style={{ fontSize: 14, opacity: 0.85, margin: "0 0 20px", fontStyle: d.slug === "a" ? "italic" : "normal" }}>
                {d.tagline}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.85, margin: 0 }}>{d.description}</p>
            </div>

            <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7 }}>
                {d.fontPair}
              </span>
              <Link
                to={`/${d.slug}`}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: d.fg,
                  color: d.bg.includes("#0B") || d.fg === "#FFF7F2" || d.fg === "#FFFFFF" ? d.swatches[1] : "#fff",
                  textDecoration: "none",
                  padding: "12px 22px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                View this direction →
              </Link>
            </div>
          </article>
        ))}
      </main>

      <footer
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px 56px",
          color: "#7E776B",
          fontSize: 13,
          lineHeight: 1.6,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>How to read these</p>
          <p style={{ margin: "6px 0 0" }}>
            Each direction is a fully-distinct visual world covering the same four screens. Click into any
            direction and use its in-page nav to move between Home, Memberships, Current Draw, and Dashboard.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>What every direction does</p>
          <p style={{ margin: "6px 0 0" }}>
            Pricing-forward hero · women-first copy · weekly-cost framing · live charity number (never $0) ·
            cleaned 4-item nav · custom premium typography.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#C2BBAE", fontWeight: 500 }}>What this is not</p>
          <p style={{ margin: "6px 0 0" }}>
            A pitch artefact, not a production rebuild. All numbers, winners, and dashboard state are mock
            data. Nothing is wired to a backend.
          </p>
        </div>
      </footer>
    </div>
  );
}
