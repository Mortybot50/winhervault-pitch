import { Link } from "react-router-dom";
import { v2Partners } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function DiscountsV2D() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow">The vault</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 128px)", margin: "20px 0 32px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            Twelve houses. <em className="display-italic">Standing offers.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", maxWidth: 640, margin: "0 0 32px", lineHeight: 1.75 }}>
            Standing 10–25% offers at twelve curated Australian houses. Most members recoup their fee inside a month.
          </p>
          <Link to={toggleHref} className="btn btn-ghost">
            {isMember ? "View as guest" : "Preview as member"}
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="three-grid">
          {v2Partners.map((p) => (
            <article key={p.name} style={{ borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)", borderTop: "1px solid var(--d2-rule)", background: "var(--d2-paper)" }}>
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: `linear-gradient(180deg, hsl(${p.hue} 16% 88%), hsl(${p.hue} 12% 62%))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="display" style={{ fontSize: 28, color: "rgba(26,24,20,0.55)", letterSpacing: "0.04em" }}>
                  {p.name}
                </span>
              </div>
              <div style={{ padding: 32 }}>
                <p className="eyebrow">{p.category}</p>
                <h2 className="display" style={{ fontSize: 26, margin: "12px 0 12px" }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: 14, color: "var(--d2-ink-soft)", lineHeight: 1.75, margin: "0 0 24px" }}>
                  {p.blurb}
                </p>
                <hr className="rule" style={{ marginBottom: 20 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="display" style={{ fontSize: 22 }}>{p.discount}</span>
                  {isMember ? (
                    <code style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, background: "var(--d2-ink)", color: "var(--d2-bone)", padding: "10px 16px", letterSpacing: "0.1em" }}>
                      {p.code}
                    </code>
                  ) : (
                    <span className="eyebrow">Members only</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!isMember && (
        <section style={{ background: "var(--d2-ink)", color: "var(--d2-bone)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
            <p className="eyebrow" style={{ color: "var(--d2-warm)" }}>The vault, opened</p>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "20px 0 32px" }}>
              From $2.31/wk. <em className="display-italic" style={{ color: "var(--d2-warm)" }}>Pays itself back.</em>
            </h2>
            <Link to="/v2/d/memberships#join" className="btn btn-light">
              Become a Member
            </Link>
          </div>
        </section>
      )}

      <style>{`@media (max-width: 900px) { .dir-v2d .three-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .dir-v2d .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
