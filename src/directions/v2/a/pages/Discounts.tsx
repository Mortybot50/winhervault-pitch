import { Link } from "react-router-dom";
import { v2Partners } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function DiscountsV2A() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <p className="eyebrow">The vault · partner brands</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            Twelve brands, <em className="display-italic">on rotation.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--a2-ink-soft)", maxWidth: 600, margin: 0 }}>
            Curated Australian brands offering member-only pricing — designed to pay your
            membership back several times over, every month.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link to={toggleHref} className="btn btn-ghost" style={{ fontSize: 11 }}>
              {isMember ? "View as guest" : "Preview as member"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
          className="three-grid"
        >
          {v2Partners.map((p) => (
            <article
              key={p.name}
              style={{
                background: "var(--a2-paper)",
                border: "1px solid var(--a2-rule)",
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 9",
                  background: `linear-gradient(160deg, hsl(${p.hue} 35% 90%), hsl(${p.hue} 25% 75%))`,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="display" style={{ fontSize: 28, color: "rgba(42,37,32,0.6)" }}>
                  {p.name}
                </span>
              </div>
              <p className="eyebrow">{p.category}</p>
              <h2 className="display" style={{ fontSize: 26, margin: "10px 0 10px" }}>
                {p.name}
              </h2>
              <p style={{ fontSize: 14, color: "var(--a2-ink-soft)", lineHeight: 1.6, margin: "0 0 18px" }}>
                {p.blurb}
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--a2-rule)",
                  paddingTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span className="display" style={{ fontSize: 20 }}>
                  {p.discount}
                </span>
                {isMember ? (
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      background: "var(--a2-ink)",
                      color: "var(--a2-cream)",
                      padding: "8px 14px",
                      fontFamily: "monospace",
                    }}
                  >
                    {p.code}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--a2-spot)",
                      borderBottom: "1px solid var(--a2-spot)",
                      paddingBottom: 2,
                    }}
                  >
                    Members only
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {!isMember && (
        <section style={{ background: "var(--a2-ink)", color: "var(--a2-cream)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
            <p className="eyebrow" style={{ color: "var(--a2-cream)" }}>
              Unlock the vault
            </p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 24px" }}>
              From $2.31 a week. <em className="display-italic">Pays itself back.</em>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,241,227,0.8)", maxWidth: 540, margin: "0 auto 32px", lineHeight: 1.7 }}>
              The Edit member who uses three of these codes in a single month already
              breaks even on their membership. Most members use eight.
            </p>
            <Link to="/v2/a/memberships#join" className="btn" style={{ background: "var(--a2-cream)", color: "var(--a2-ink)" }}>
              Become a Member
            </Link>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 900px) { .dir-v2a .three-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
