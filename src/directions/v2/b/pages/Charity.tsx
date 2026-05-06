import { Link } from "react-router-dom";
import { v2Charities } from "../../../../data/mock";

export default function CharityV2B() {
  const total = v2Charities.reduce((s, c) => s + c.contributedYTD, 0);
  return (
    <div>
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">Giving · the Haus</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Five dollars, <em className="display-italic">every month.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--b2-ink-soft)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Five dollars from every membership goes to an Australian women's charity. Reported
            on every dashboard. Audited annually. That's the deal.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--b2-ink)", color: "var(--b2-paper)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--b2-paper)" }}>Year to date</p>
          <p className="display" style={{ fontSize: "clamp(96px, 16vw, 200px)", margin: "20px 0", lineHeight: 0.95 }}>
            ${total.toLocaleString()}
          </p>
          <p style={{ color: "rgba(250,246,238,0.7)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
            Updated daily · Audited annually
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Where it goes</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 56px", maxWidth: 880 }}>
          Four organisations. <em className="display-italic">Four pillars.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="two-grid">
          {v2Charities.map((c) => (
            <article key={c.id} className="card" style={{ background: "var(--b2-paper)", padding: 32, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: `linear-gradient(160deg, hsl(${c.hue} 30% 88%), hsl(${c.hue} 22% 65%))`,
                }}
              />
              <div>
                <p className="eyebrow">{c.cause}</p>
                <h3 className="display" style={{ fontSize: 24, margin: "10px 0 12px" }}>
                  {c.name}
                </h3>
                <p style={{ color: "var(--b2-ink-soft)", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>
                  {c.blurb}
                </p>
                <p className="display" style={{ fontSize: 24, margin: 0 }}>
                  ${c.contributedYTD.toLocaleString()}
                  <span className="eyebrow" style={{ marginLeft: 12 }}>YTD</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--b2-blush)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px" }}>
          <p
            className="display-italic"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.4, margin: 0, maxWidth: 880 }}
          >
            "We didn't want to build another giveaway site. We wanted to build a haus that
            stood for something. The giving isn't a tagline — it's the reason."
          </p>
          <p className="eyebrow" style={{ marginTop: 24 }}>— Haus Of Her, founder's letter</p>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "0 0 24px" }}>
          Be in <em className="display-italic">the next number.</em>
        </h2>
        <Link to="/v2/b/memberships#join" className="btn btn-primary">
          Become a Member
        </Link>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2b .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
