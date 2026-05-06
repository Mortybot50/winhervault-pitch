import { Link } from "react-router-dom";
import { finalCharity, portraitStyle } from "../../../data/finalMock";

const PARTNER_LOGOS = [
  "Aje", "Camilla & Marc", "Aesop", "Bondi Sands", "Frank Body", "T2", "Mecca", "P.E Nation",
] as const;

export default function CharityFinal() {
  return (
    <>
      <section className="final-hero" style={{ paddingBottom: 0 }}>
        <div className="final-container">
          <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Charity partner</span>
          <h1 className="final-display final-display-xl" style={{ marginTop: 16 }}>
            Share The<br />Dignity.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 720, marginTop: 32 }}>
            {finalCharity.story}
          </p>
        </div>
      </section>

      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="final-charity-feature">
            <div className="final-portrait" style={{ ...portraitStyle(350), aspectRatio: "5/4" }} />
            <div>
              <div className="final-numeral" style={{ marginBottom: 12 }}>$5</div>
              <h2 className="final-display final-display-lg">
                From every<br />membership.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, marginTop: 24, color: "var(--ink-soft)", maxWidth: 480 }}>
                Direct, unconditional, every month. No marketing carve-outs, no admin slice. The contribution is published
                on every member dashboard so you can see what your membership is doing.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
                <div>
                  <div className="final-stat-value" style={{ color: "var(--hot)" }}>${finalCharity.contributedYTD.toLocaleString()}</div>
                  <div className="final-stat-label">Contributed YTD</div>
                </div>
                <div>
                  <div className="final-stat-value">{finalCharity.womenSupported.toLocaleString()}</div>
                  <div className="final-stat-label">Women supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTS */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <span className="final-eyebrow">— Where the money goes</span>
          <h2 className="final-display final-display-lg" style={{ marginTop: 12, marginBottom: 64, maxWidth: 720 }}>
            Four impact pillars.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="final-impact-grid">
            {finalCharity.impacts.map((imp, i) => (
              <article key={imp.title}>
                <div className="final-portrait" style={{ ...portraitStyle(imp.hue), aspectRatio: "1/1" }} />
                <div className="final-eyebrow" style={{ color: "var(--hot)", marginTop: 16 }}>0{i + 1}</div>
                <h3 className="final-display final-display-md" style={{ marginTop: 8, fontSize: 28 }}>{imp.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", marginTop: 12 }}>{imp.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32, alignItems: "flex-end" }}>
            <span className="final-eyebrow">— Brand partners contributing</span>
            <span className="final-eyebrow" style={{ color: "var(--muted)" }}>2026</span>
          </div>
          <hr className="final-rule-strong" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1.5px solid var(--ink)" }} className="final-logo-grid">
            {PARTNER_LOGOS.map((p) => (
              <div
                key={p}
                style={{
                  borderRight: "1px solid var(--rule)",
                  padding: "32px 16px",
                  textAlign: "center",
                  fontFamily: "Anton, sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-section" style={{ background: "var(--hot)", color: "#fff", textAlign: "center", padding: "120px 0" }}>
        <div className="final-container">
          <h2 className="final-display final-display-xl" style={{ color: "#fff", maxWidth: 1100, margin: "0 auto 32px" }}>
            Become a member.<br />Support the cause.
          </h2>
          <Link to="/final/memberships" className="final-cta" style={{ background: "#fff", color: "var(--hot)" }}>
            Join the circle
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .final-charity-feature { grid-template-columns: 1fr !important; gap: 32px !important; }
          .final-impact-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .final-logo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .final-impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
