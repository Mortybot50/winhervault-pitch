import { Link } from "react-router-dom";
import { finalCharities, finalCharityStats, finalPartners } from "../../../data/finalMock";

export default function CharityFinal() {
  return (
    <>
      <section className="final-hero" style={{ paddingBottom: 0 }}>
        <div className="final-container">
          <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Charity partners</span>
          <h1
            className="final-display"
            style={{
              marginTop: 16,
              fontSize: "clamp(44px, 6.4vw, 88px)",
              letterSpacing: "-0.02em",
              maxWidth: 1200,
            }}
          >
            <span style={{ display: "block", lineHeight: 1.02, marginBlock: "0.04em" }}>EVERY MONTH, A PORTION OF HERCIRCLE GOES</span>
            <span style={{ display: "block", lineHeight: 1.02, marginBlock: "0.04em", color: "var(--hot)" }}>TO CAUSES WE GENUINELY CARE ABOUT.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 760, marginTop: 32, color: "var(--ink-soft)" }}>
            {finalCharityStats.story}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="final-section" style={{ paddingBottom: 24 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-charity-stats">
            <div className="final-card" style={{ padding: 32 }}>
              <div className="final-stat-value" style={{ color: "var(--hot)" }}>${finalCharityStats.contributedYTD.toLocaleString()}</div>
              <div className="final-stat-label">Contributed to date</div>
            </div>
            <div className="final-card" style={{ padding: 32 }}>
              <div className="final-stat-value">{finalCharityStats.womenSupported.toLocaleString()}+</div>
              <div className="final-stat-label">Women & families supported</div>
            </div>
            <div className="final-card" style={{ padding: 32 }}>
              <div className="final-stat-value">3</div>
              <div className="final-stat-label">Active charity partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CHARITIES */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <span className="final-eyebrow">— Our partners</span>
          <h2 className="final-display final-display-lg" style={{ marginTop: 12, marginBottom: 56, maxWidth: 760, letterSpacing: "-0.01em" }}>
            Three charities we back.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="final-charities-grid">
            {finalCharities.map((ch, i) => (
              <article key={ch.name} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ aspectRatio: "5/4", overflow: "hidden", background: "var(--cream)" }}>
                  {ch.image ? (
                    <img src={ch.image} alt={ch.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {ch.logo && <img src={ch.logo} alt={ch.name} style={{ maxHeight: 120, maxWidth: "70%", objectFit: "contain" }} />}
                    </div>
                  )}
                </div>
                <div className="final-eyebrow" style={{ color: "var(--hot)" }}>0{i + 1}</div>
                <div className="final-display" style={{ fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.005em" }}>{ch.name}</div>
                <p style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)", margin: 0, lineHeight: 1.5 }}>{ch.tagline}</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{ch.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS — brand partners contributing */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24, alignItems: "flex-end" }}>
            <span className="final-eyebrow">— Brand partners contributing</span>
            <span className="final-eyebrow" style={{ color: "var(--muted)" }}>{finalPartners.length} brands · 2026</span>
          </div>
          <hr className="final-rule-strong" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1.5px solid var(--ink)" }} className="final-logo-grid">
            {finalPartners.slice(0, 8).map((p) => (
              <div
                key={p.name}
                style={{
                  borderRight: "1px solid var(--rule)",
                  padding: "32px 16px",
                  textAlign: "center",
                  fontFamily: "Anton, sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 96,
                }}
              >
                {p.logo ? (
                  <img src={p.logo} alt={p.name} style={{ maxHeight: 48, maxWidth: "100%", objectFit: "contain" }} loading="lazy" />
                ) : (
                  p.name.toUpperCase()
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-section" style={{ background: "var(--hot)", color: "#fff", textAlign: "center", padding: "120px 0" }}>
        <div className="final-container">
          <h2
            className="final-display"
            style={{
              color: "#fff",
              maxWidth: 1100,
              margin: "0 auto 32px",
              fontSize: "clamp(48px, 7vw, 96px)",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em" }}>BECOME A MEMBER.</span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em" }}>SUPPORT THE CAUSE.</span>
          </h2>
          <Link to="/final/memberships" className="final-cta" style={{ background: "#fff", color: "var(--hot)" }}>
            Join the circle
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .final-charities-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .final-charity-stats { grid-template-columns: 1fr !important; }
          .final-charities-grid { grid-template-columns: 1fr !important; }
          .final-logo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
