import { Link } from "react-router-dom";
import { v2Charities } from "../../../../data/mock";

export default function CharityV2C() {
  const total = v2Charities.reduce((s, c) => s + c.contributedYTD, 0);
  return (
    <div>
      <section style={{ background: "var(--c2-cream-warm)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <span className="pill">Giving · the deal</span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px" }}>
            Five dollars. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Every member.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            $5 from every membership goes to one of four Australian women's charities. Reported on every dashboard. Audited annually. Non-negotiable.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--c2-berry-deep)", color: "var(--c2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Year to date</p>
          <p className="display" style={{ fontSize: "clamp(96px, 16vw, 200px)", margin: "20px 0", lineHeight: 0.95, color: "var(--c2-gold)" }}>
            ${total.toLocaleString()}
          </p>
          <p style={{ color: "rgba(255,247,242,0.65)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
            Updated daily · Audited annually
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Where it goes</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 56px", maxWidth: 880 }}>
          Four organisations. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Four pillars.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="two-grid">
          {v2Charities.map((c) => (
            <article key={c.id} className="card" style={{ padding: 32, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 14,
                  background: `linear-gradient(160deg, hsl(${c.hue} 35% 88%), hsl(${c.hue} 28% 55%))`,
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="eyebrow">{c.cause}</p>
                <h3 className="display" style={{ fontSize: 26, margin: "10px 0 12px" }}>
                  {c.name}
                </h3>
                <p style={{ color: "var(--c2-ink-soft)", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>
                  {c.blurb}
                </p>
                <p className="display" style={{ fontSize: 28, margin: 0, color: "var(--c2-berry)" }}>
                  ${c.contributedYTD.toLocaleString()}
                  <span className="eyebrow" style={{ marginLeft: 12, color: "var(--c2-mute)" }}>YTD</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--c2-cream-warm)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px" }}>
          <p
            className="display-italic"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.4, margin: 0, maxWidth: 880, color: "var(--c2-berry)" }}
          >
            "We didn't want to build another giveaway site. We built a club that
            stands for something. The giving isn't a tagline — it's the deal."
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>— WinHer Vault, founder's letter</p>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "0 0 28px" }}>
          Be in <em className="display-italic" style={{ color: "var(--c2-berry)" }}>the next number.</em>
        </h2>
        <Link to="/v2/c/memberships#join" className="btn btn-primary" style={{ fontSize: 14, padding: "18px 32px" }}>
          Become a Member →
        </Link>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2c .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
