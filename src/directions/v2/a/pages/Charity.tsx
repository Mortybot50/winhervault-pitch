import { Link } from "react-router-dom";
import { v2Charities } from "../../../../data/mock";

export default function CharityV2A() {
  const total = v2Charities.reduce((s, c) => s + c.contributedYTD, 0);
  return (
    <div>
      <section style={{ background: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">Charity partners</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            Five dollars, <em className="display-italic">every member</em>, every month.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--a2-ink-soft)", maxWidth: 640, margin: "0 auto" }}>
            We tell you exactly where the contribution goes. We publish it on every dashboard.
            We audit it once a year. That's the deal.
          </p>
        </div>
      </section>

      {/* Big number */}
      <section style={{ background: "var(--a2-ink)", color: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--a2-cream)" }}>
            Contributed in 2026, year to date
          </p>
          <p
            className="display"
            style={{
              fontSize: "clamp(96px, 16vw, 200px)",
              margin: "20px 0",
              lineHeight: 0.95,
            }}
          >
            ${total.toLocaleString()}
          </p>
          <p style={{ color: "rgba(255,241,227,0.7)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
            Updated daily · Audited annually
          </p>
        </div>
      </section>

      {/* Partner list */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Where it goes</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 56px", maxWidth: 880 }}>
          Four organisations. <em className="display-italic">Four pillars</em> of women's wellbeing.
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          className="two-grid"
        >
          {v2Charities.map((c) => (
            <article
              key={c.id}
              style={{
                background: "var(--a2-paper)",
                border: "1px solid var(--a2-rule)",
                padding: 36,
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 28,
                alignItems: "start",
              }}
              className="charity-card"
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  background: `linear-gradient(160deg, hsl(${c.hue} 50% 86%), hsl(${c.hue} 35% 60%))`,
                }}
              />
              <div>
                <p className="eyebrow">{c.cause}</p>
                <h3 className="display" style={{ fontSize: 28, margin: "10px 0 12px" }}>
                  {c.name}
                </h3>
                <p style={{ color: "var(--a2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: "0 0 18px" }}>
                  {c.blurb}
                </p>
                <p
                  className="display"
                  style={{ fontSize: 28, margin: 0 }}
                >
                  ${c.contributedYTD.toLocaleString()}
                  <span className="eyebrow" style={{ marginLeft: 12 }}>YTD</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community impact */}
      <section
        style={{
          background: "var(--a2-cream-deep)",
          borderTop: "1px solid var(--a2-rule)",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">Why it matters</p>
          <p
            className="display-italic"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.4,
              margin: "20px 0 0",
              maxWidth: 880,
            }}
          >
            "We didn't want to build another giveaway site. We wanted to build a circle that
            stood for something. The charity contribution isn't a marketing line — it's the
            reason this exists."
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>
            — HerCircle, founder's note
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "0 0 24px" }}>
          Be part of <em className="display-italic">the next number.</em>
        </h2>
        <Link to="/v2/a/memberships#join" className="btn btn-dark">
          Become a Member
        </Link>
      </section>

      <style>{`
        @media (max-width: 880px) { .dir-v2a .two-grid { grid-template-columns: 1fr !important; } .dir-v2a .charity-card { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
