import { Link } from "react-router-dom";
import { v2Partners } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function DiscountsV2B() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <p className="eyebrow">The vault</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Twelve brands, <em className="display-italic">on rotation.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--b2-ink-soft)", maxWidth: 600, margin: 0, lineHeight: 1.7 }}>
            Standing member discounts at twelve curated Australian brands. Most members
            recoup their membership inside a month.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to={toggleHref} className="btn btn-ghost" style={{ fontSize: 11 }}>
              {isMember ? "View as guest" : "Preview as member"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {v2Partners.map((p) => (
            <article key={p.name} className="card" style={{ background: "var(--b2-paper)", padding: 0, overflow: "hidden" }}>
              <div
                style={{
                  aspectRatio: "16 / 9",
                  background: `linear-gradient(160deg, hsl(${p.hue} 30% 90%), hsl(${p.hue} 22% 72%))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="display" style={{ fontSize: 24, color: "rgba(47,50,44,0.7)" }}>
                  {p.name}
                </span>
              </div>
              <div style={{ padding: 24 }}>
                <p className="eyebrow">{p.category}</p>
                <h2 className="display" style={{ fontSize: 24, margin: "10px 0 10px" }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: 14, color: "var(--b2-ink-soft)", lineHeight: 1.6, margin: "0 0 18px" }}>
                  {p.blurb}
                </p>
                <div style={{ borderTop: "1px solid var(--b2-rule)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span className="display" style={{ fontSize: 20 }}>{p.discount}</span>
                  {isMember ? (
                    <code style={{ fontFamily: "monospace", fontSize: 12, background: "var(--b2-ink)", color: "var(--b2-paper)", padding: "8px 14px", borderRadius: 999, letterSpacing: "0.08em" }}>
                      {p.code}
                    </code>
                  ) : (
                    <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--b2-sage-deep)" }}>
                      Members only
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!isMember && (
        <section style={{ background: "var(--b2-ink)", color: "var(--b2-paper)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
            <p className="eyebrow" style={{ color: "var(--b2-paper)" }}>Unlock the vault</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 24px" }}>
              From $2.31/wk. <em className="display-italic">Pays itself back.</em>
            </h2>
            <Link to="/v2/b/memberships#join" className="btn btn-soft" style={{ marginTop: 20 }}>
              Become a Member
            </Link>
          </div>
        </section>
      )}

      <style>{`@media (max-width: 900px) { .dir-v2b .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
