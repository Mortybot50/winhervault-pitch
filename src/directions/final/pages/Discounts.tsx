import { Link } from "react-router-dom";
import { useState } from "react";
import { useMemberMode } from "../hooks/useMemberMode";
import { finalPartners } from "../../../data/finalMock";

export default function DiscountsFinal() {
  const { isMember, toggleHref } = useMemberMode();
  const [copied, setCopied] = useState<string | null>(null);

  const onCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* noop — pitch artefact */
    }
    setCopied(code);
    setTimeout(() => setCopied((c) => (c === code ? null : c)), 1400);
  };

  return (
    <>
      <section className="final-hero">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="final-eyebrow">— Discount vault</span>
              <h1 className="final-display final-display-xl" style={{ marginTop: 16 }}>
                Eight brands.<br /><span style={{ color: "var(--hot)" }}>One vault.</span>
              </h1>
            </div>
            <Link to={toggleHref || "?"} className="final-pill hot" style={{ textDecoration: "none" }}>
              {isMember ? "● Member view" : "Lock · preview"} <span style={{ opacity: 0.7 }}>· toggle</span>
            </Link>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, marginTop: 32 }}>
            {isMember
              ? "Your codes — copy and use at checkout. Codes refresh quarterly."
              : "Curated Australian brands. Member-only codes refresh quarterly. Pays for the membership in one or two uses."}
          </p>
        </div>
      </section>

      <section className="final-section" style={{ paddingTop: 0 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="final-discounts-grid">
            {finalPartners.map((p) => (
              <article key={p.name} className="final-card" style={{ padding: 28, justifyContent: "space-between", minHeight: 320 }}>
                <div>
                  <div className="final-eyebrow" style={{ color: "var(--muted)" }}>{p.category}</div>
                  <div
                    className="final-display final-display-md"
                    style={{
                      fontSize: 32,
                      marginTop: 12,
                      letterSpacing: "0.01em",
                      color: "var(--ink)",
                    }}
                  >
                    {p.name.toUpperCase()}
                  </div>
                  <hr className="final-rule" style={{ margin: "16px 0" }} />
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{p.blurb}</p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <div className="final-display" style={{ fontSize: 28, color: "var(--hot)", marginBottom: 16 }}>
                    {p.discount}
                  </div>
                  {isMember ? (
                    <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                      <code
                        style={{
                          flex: 1,
                          background: "var(--cream)",
                          border: "1.5px dashed var(--ink)",
                          padding: "12px 14px",
                          fontFamily: "ui-monospace, monospace",
                          fontSize: 13,
                          letterSpacing: "0.16em",
                          textAlign: "center",
                          color: "var(--ink)",
                        }}
                      >
                        {p.code}
                      </code>
                      <button type="button" onClick={() => onCopy(p.code)} className="final-cta" style={{ padding: "12px 16px", fontSize: 11 }}>
                        {copied === p.code ? "Copied" : "Copy"}
                      </button>
                    </div>
                  ) : (
                    <div className="final-locked" style={{ minHeight: 56 }}>
                      <div className="final-locked-overlay" style={{ position: "relative", inset: "auto", padding: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                          <span className="final-locked-icon" style={{ marginBottom: 0, width: 24, height: 24, fontSize: 12 }}>🔒</span>
                          <Link to="/final/memberships" className="final-cta-text">Unlock code</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {!isMember && (
        <section className="final-section" style={{ background: "var(--ink)", color: "var(--cream)", textAlign: "center", padding: "96px 0" }}>
          <div className="final-container">
            <h2 className="final-display final-display-lg" style={{ color: "var(--cream)" }}>
              The vault pays for itself.
            </h2>
            <p style={{ fontSize: 16, marginTop: 16, marginBottom: 32, opacity: 0.78, maxWidth: 520, marginInline: "auto" }}>
              Two purchases at average member discount and your year of membership is in the green.
            </p>
            <Link to="/final/memberships" className="final-cta">Become a member</Link>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 1100px) { .final-discounts-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 800px)  { .final-discounts-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px)  { .final-discounts-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
