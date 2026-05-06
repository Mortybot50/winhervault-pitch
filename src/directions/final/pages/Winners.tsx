import { Link } from "react-router-dom";
import { finalWinners } from "../../../data/finalMock";

export default function WinnersFinal() {
  return (
    <>
      <section className="final-hero">
        <div className="final-container">
          <span className="final-eyebrow">— Winners</span>
          <h1
            className="final-display"
            style={{
              marginTop: 16,
              fontSize: "clamp(48px, 7.4vw, 96px)",
              letterSpacing: "-0.02em",
              maxWidth: 1100,
            }}
          >
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em" }}>REAL MEMBERS.</span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em", color: "var(--hot)" }}>REAL PRIZES.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, marginTop: 32 }}>
            Twelve recent winners. Drawn live every Wednesday on Instagram, 8pm AEDT.
          </p>
          <div style={{ display: "flex", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
            <div>
              <div className="final-stat-value" style={{ color: "var(--hot)" }}>{finalWinners.length}</div>
              <div className="final-stat-label">Recent winners</div>
            </div>
            <div>
              <div className="final-stat-value">52</div>
              <div className="final-stat-label">Draws per year</div>
            </div>
            <div>
              <div className="final-stat-value">$2,000+</div>
              <div className="final-stat-label">Average prize value</div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section" style={{ paddingTop: 24 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="final-winners-page-grid">
            {finalWinners.map((w) => (
              <article key={`${w.firstName}-${w.date}`} className="final-card">
                <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "#222" }}>
                  <img src={w.image} alt={`${w.firstName} ${w.initial}.`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: 22 }}>
                  <div className="final-eyebrow" style={{ color: "var(--muted)" }}>{w.date}</div>
                  <div className="final-display final-display-md" style={{ marginTop: 8, fontSize: 26 }}>
                    {w.firstName} {w.initial}.
                  </div>
                  <hr className="final-rule" style={{ margin: "14px 0" }} />
                  <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>{w.prize}</div>
                  {w.quote && (
                    <p style={{ fontSize: 13, fontStyle: "italic", marginTop: 14, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                      "{w.quote}"
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section" style={{ background: "var(--ink)", color: "var(--cream)", textAlign: "center", padding: "96px 0" }}>
        <div className="final-container">
          <h2 className="final-display final-display-lg" style={{ color: "var(--cream)", letterSpacing: "-0.01em" }}>
            You could be next.
          </h2>
          <p style={{ fontSize: 16, marginTop: 16, marginBottom: 32, opacity: 0.78 }}>
            From $2.50/wk. Cancel anytime.
          </p>
          <Link to="/final/memberships" className="final-cta">Become a member</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .final-winners-page-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 800px)  { .final-winners-page-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px)  { .final-winners-page-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
