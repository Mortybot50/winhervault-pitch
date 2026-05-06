import { Link } from "react-router-dom";
import { v2Partners } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function DiscountsV2C() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--c2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <span className="pill">The Vault</span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px" }}>
            Twelve brands. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>One vault.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", maxWidth: 640, margin: 0, lineHeight: 1.7 }}>
            Standing 10–25% discounts at twelve curated Australian brands. Most members recoup their fee inside a month.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to={toggleHref} className="btn btn-ghost" style={{ fontSize: 12 }}>
              {isMember ? "View as guest" : "Preview as member →"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="three-grid">
          {v2Partners.map((p) => (
            <article key={p.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div
                style={{
                  aspectRatio: "16 / 9",
                  background: `linear-gradient(160deg, hsl(${p.hue} 35% 90%), hsl(${p.hue} 28% 60%))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="display" style={{ fontSize: 26, color: "rgba(31,15,24,0.65)" }}>
                  {p.name}
                </span>
              </div>
              <div style={{ padding: 22 }}>
                <p className="eyebrow">{p.category}</p>
                <h2 className="display" style={{ fontSize: 22, margin: "8px 0 8px" }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: 14, color: "var(--c2-ink-soft)", lineHeight: 1.6, margin: "0 0 16px" }}>
                  {p.blurb}
                </p>
                <div style={{ borderTop: "1px solid var(--c2-rule)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="display" style={{ fontSize: 20, color: "var(--c2-berry)" }}>{p.discount}</span>
                  {isMember ? (
                    <code style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, background: "var(--c2-berry)", color: "var(--c2-gold)", padding: "8px 14px", borderRadius: 8, letterSpacing: "0.08em", fontWeight: 600 }}>
                      {p.code}
                    </code>
                  ) : (
                    <span className="pill" style={{ background: "var(--c2-cream-warm)" }}>Members only</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!isMember && (
        <section style={{ background: "var(--c2-berry)", color: "var(--c2-cream)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
            <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Unlock the vault</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 24px" }}>
              From $2.31/wk. <em className="display-italic" style={{ color: "var(--c2-gold)" }}>Pays itself back.</em>
            </h2>
            <Link to="/v2/c/memberships#join" className="btn btn-gold" style={{ marginTop: 16 }}>
              Become a Member →
            </Link>
          </div>
        </section>
      )}

      <style>{`@media (max-width: 900px) { .dir-v2c .three-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .dir-v2c .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
