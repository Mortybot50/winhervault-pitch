import { Link } from "react-router-dom";
import { v2Charities } from "../../../../data/mock";

export default function CharityV2D() {
  const total = v2Charities.reduce((s, c) => s + c.contributedYTD, 0);
  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow">Giving · the deal</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 128px)", margin: "20px 0 32px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            Five dollars. <em className="display-italic">Every member.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", maxWidth: 640, margin: 0, lineHeight: 1.75 }}>
            $5 from every membership goes to one of four Australian women's charities. Reported on every dashboard. Audited annually. Non-negotiable.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--d2-ink)", color: "var(--d2-bone)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--d2-warm)" }}>Year to date</p>
          <p className="display" style={{ fontSize: "clamp(120px, 18vw, 240px)", margin: "32px 0", lineHeight: 0.95 }}>
            ${total.toLocaleString()}
          </p>
          <p style={{ color: "var(--d2-warm)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", margin: 0 }}>
            Updated daily · Audited annually
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
        <p className="eyebrow">Where it goes</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 64px", maxWidth: 880 }}>
          Four organisations. <em className="display-italic">Four pillars.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderLeft: "1px solid var(--d2-rule)", borderTop: "1px solid var(--d2-rule)" }} className="two-grid">
          {v2Charities.map((c) => (
            <article key={c.id} style={{ padding: 48, display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)", background: "var(--d2-paper)" }}>
              <div
                style={{
                  width: 96,
                  height: 96,
                  background: `linear-gradient(180deg, hsl(${c.hue} 16% 88%), hsl(${c.hue} 12% 60%))`,
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="eyebrow">{c.cause}</p>
                <h3 className="display" style={{ fontSize: 28, margin: "12px 0 16px" }}>
                  {c.name}
                </h3>
                <p style={{ color: "var(--d2-ink-soft)", fontSize: 14, lineHeight: 1.8, margin: "0 0 20px" }}>
                  {c.blurb}
                </p>
                <p className="display" style={{ fontSize: 28, margin: 0 }}>
                  ${c.contributedYTD.toLocaleString()}
                  <span className="eyebrow" style={{ marginLeft: 14 }}>YTD</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--d2-stone)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 40px" }}>
          <p
            className="display-italic"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.5, margin: 0, maxWidth: 880, color: "var(--d2-ink)" }}
          >
            "We didn't want to build another giveaway site. We built a circle that
            stands for something. The giving isn't a tagline. It's the deal."
          </p>
          <p className="eyebrow" style={{ marginTop: 32 }}>— HerCircle, founder's letter</p>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "0 0 40px", letterSpacing: "-0.015em" }}>
          Be in <em className="display-italic">the next number.</em>
        </h2>
        <Link to="/v2/d/memberships#join" className="btn btn-primary">
          Become a Member
        </Link>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2d .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
