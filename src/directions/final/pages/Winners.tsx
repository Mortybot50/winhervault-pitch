import { Link } from "react-router-dom";
import { finalWinners, portraitStyle } from "../../../data/finalMock";

export default function WinnersFinal() {
  const totalValue = finalWinners.reduce((s, w) => s + w.value, 0);
  return (
    <>
      <section className="final-hero">
        <div className="final-container">
          <span className="final-eyebrow">— Winners</span>
          <h1 className="final-display final-display-xl" style={{ marginTop: 16 }}>
            Real members.<br /><span style={{ color: "var(--hot)" }}>Real prizes.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 560, marginTop: 32 }}>
            Twelve winners from the past three months. Drawn live every Wednesday on Instagram.
          </p>
          <div style={{ display: "flex", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
            <div>
              <div className="final-stat-value" style={{ color: "var(--hot)" }}>{finalWinners.length}</div>
              <div className="final-stat-label">Winners</div>
            </div>
            <div>
              <div className="final-stat-value">${totalValue.toLocaleString()}</div>
              <div className="final-stat-label">Total prize value</div>
            </div>
            <div>
              <div className="final-stat-value">7</div>
              <div className="final-stat-label">States represented</div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-section" style={{ paddingTop: 24 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="final-winners-page-grid">
            {finalWinners.map((w) => (
              <article key={`${w.firstName}-${w.date}`} className="final-card">
                <div className="final-portrait" style={portraitStyle(w.hue)} />
                <div style={{ padding: 24 }}>
                  <div className="final-eyebrow" style={{ color: "var(--muted)" }}>{w.date}</div>
                  <div className="final-display final-display-md" style={{ marginTop: 8, fontSize: 28 }}>
                    {w.firstName} {w.initial}.
                  </div>
                  <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>
                    {w.suburb}, {w.state}
                  </div>
                  <hr className="final-rule" style={{ margin: "16px 0" }} />
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)" }}>{w.prize}</div>
                  <div className="final-eyebrow" style={{ color: "var(--hot)", marginTop: 8 }}>${w.value.toLocaleString()}</div>
                  {w.quote && (
                    <p style={{ fontSize: 13, fontStyle: "italic", marginTop: 16, color: "var(--ink-soft)", lineHeight: 1.6 }}>
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
          <h2 className="final-display final-display-lg" style={{ color: "var(--cream)" }}>
            You could be next.
          </h2>
          <p style={{ fontSize: 16, marginTop: 16, marginBottom: 32, opacity: 0.78 }}>
            From $9.99 a week. Cancel anytime.
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
