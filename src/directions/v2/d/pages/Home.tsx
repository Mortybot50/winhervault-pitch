import { Link } from "react-router-dom";
import { v2Winners, v2Events, v2Partners, v2NextDraw, getV2Tiers } from "../../../../data/mock";

export default function HomeV2D() {
  const tiers = getV2Tiers("d");
  const featuredWinners = v2Winners.slice(0, 3);
  const featuredEvents = v2Events.slice(0, 3);
  const featuredPartners = v2Partners.slice(0, 6);
  return (
    <div>
      {/* HERO */}
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow" style={{ marginBottom: 48 }}>Members club · Australia · Est. 2026</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 144px)", margin: "0 0 48px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            A circle for women. <em className="display-italic">A draw, a vault, a giving.</em>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }} className="hero-bottom">
            <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", lineHeight: 1.75, maxWidth: 540, margin: 0 }}>
              From $2.31 a week. A weekly draw, twelve standing brand discounts, six gatherings a year, and five dollars from every membership to a women's charity. Cancel anytime.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link to="/v2/d/memberships#join" className="btn btn-primary">
                Become a Member
              </Link>
              <Link to="/v2/d/winners" className="btn btn-ghost">
                Past winners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DRAW */}
      <section style={{ background: "var(--d2-stone)", padding: "96px 0" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="two-grid">
          <div>
            <p className="eyebrow">The next draw</p>
            <p className="display" style={{ fontSize: "clamp(48px, 6vw, 72px)", margin: "20px 0 24px", letterSpacing: "-0.02em" }}>
              {v2NextDraw.prize}
            </p>
            <p style={{ fontSize: 14, color: "var(--d2-ink-soft)", margin: 0, lineHeight: 1.7 }}>
              {v2NextDraw.drawDate}. 1,847 entries placed by members so far. Drawn live, paid within 7 days.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            {[
              { v: "2,847", l: "members" },
              { v: "$47k", l: "given YTD" },
              { v: "132", l: "winners" },
            ].map((s, i) => (
              <div key={s.l} style={{ padding: "32px 16px", textAlign: "center", borderRight: i < 2 ? "1px solid var(--d2-rule)" : "none" }}>
                <p className="display" style={{ fontSize: 36, margin: 0 }}>{s.v}</p>
                <p className="eyebrow" style={{ marginTop: 8 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
        <p className="eyebrow">How it works</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 64px", maxWidth: 880, letterSpacing: "-0.015em" }}>
          One subscription. <em className="display-italic">Four ways it gives back.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--d2-rule)" }} className="four-grid">
          {[
            { n: "I", t: "The draw", b: "One weekly cash prize. Random selection from active members. Drawn live." },
            { n: "II", t: "The vault", b: "Twelve standing partner discounts. 10–25% off curated Australian brands." },
            { n: "III", t: "The gatherings", b: "Six events a year. Wellness, food, founders, creative. Capped at thirty." },
            { n: "IV", t: "The giving", b: "Five dollars from every membership to a women's charity. Audited annually." },
          ].map((s) => (
            <div key={s.n} style={{ padding: "48px 28px 56px", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
              <p className="display" style={{ fontSize: 18, margin: "0 0 32px", letterSpacing: "0.08em" }}>{s.n}</p>
              <p className="display" style={{ fontSize: 22, margin: "0 0 16px" }}>{s.t}</p>
              <p style={{ fontSize: 13, color: "var(--d2-ink-soft)", lineHeight: 1.75, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIERS */}
      <section style={{ background: "var(--d2-paper)", borderTop: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
          <p className="eyebrow">Tiers</p>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 64px", maxWidth: 880, letterSpacing: "-0.015em" }}>
            Three rooms. <em className="display-italic">One circle.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--d2-rule)" }} className="three-grid">
            {tiers.map((t, i) => (
              <div
                key={t.id}
                style={{
                  padding: "48px 32px",
                  borderRight: i < tiers.length - 1 ? "1px solid var(--d2-rule)" : "none",
                  borderBottom: "1px solid var(--d2-rule)",
                  background: t.featured ? "var(--d2-bone)" : "transparent",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
                  <p className="display" style={{ fontSize: 56, margin: 0 }}>{t.name}</p>
                  {t.featured && <span className="eyebrow">Featured</span>}
                </div>
                <p style={{ fontSize: 14, color: "var(--d2-ink-soft)", margin: "0 0 32px", lineHeight: 1.7, minHeight: 44 }}>{t.tagline}</p>
                <p className="display" style={{ fontSize: 32, margin: "0 0 4px" }}>
                  ${t.weekly.toFixed(2)}<span style={{ fontSize: 12, color: "var(--d2-mute)" }}>/wk</span>
                </p>
                <p className="eyebrow" style={{ margin: "0 0 32px" }}>${t.monthly.toFixed(2)}/month</p>
                <Link to="/v2/d/memberships#join" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Choose {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WINNERS */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p className="eyebrow">Recent winners</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 0", maxWidth: 720 }}>
              Real names. <em className="display-italic">Real prizes.</em>
            </h2>
          </div>
          <Link to="/v2/d/winners" style={{ fontSize: 12, color: "var(--d2-ink)", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: "1px solid var(--d2-ink)", paddingBottom: 4 }}>
            All winners
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="three-grid">
          {featuredWinners.map((w, i) => (
            <article key={i}>
              <div style={{ aspectRatio: "4 / 5", background: `linear-gradient(180deg, hsl(${w.imageHue} 18% 86%), hsl(${w.imageHue} 14% 65%))`, marginBottom: 24 }} />
              <p className="eyebrow">{w.date}</p>
              <p className="display" style={{ fontSize: 22, margin: "10px 0 6px" }}>{w.firstName} {w.initial}., {w.suburb}</p>
              <p style={{ fontSize: 14, color: "var(--d2-mute)", margin: "0 0 14px" }}>{w.prize}</p>
              <p style={{ fontStyle: "italic", color: "var(--d2-ink-soft)", lineHeight: 1.7, fontSize: 14, margin: 0 }}>"{w.quote}"</p>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ background: "var(--d2-stone)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p className="eyebrow">Events · 2026</p>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 0" }}>
                Six gatherings. <em className="display-italic">Capped, considered.</em>
              </h2>
            </div>
            <Link to="/v2/d/events" style={{ fontSize: 12, color: "var(--d2-ink)", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: "1px solid var(--d2-ink)", paddingBottom: 4 }}>
              All events
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--d2-rule)", borderLeft: "1px solid var(--d2-rule)" }} className="three-grid">
            {featuredEvents.map((e) => (
              <article key={e.id} style={{ background: "var(--d2-bone)", padding: 0, borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
                <div style={{ aspectRatio: "4 / 3", background: `linear-gradient(180deg, hsl(${e.imageHue} 16% 86%), hsl(${e.imageHue} 12% 64%))` }} />
                <div style={{ padding: 24 }}>
                  <p className="eyebrow">{e.category} · {e.date}</p>
                  <p className="display" style={{ fontSize: 22, margin: "10px 0 12px" }}>{e.title}</p>
                  <p style={{ fontSize: 13, color: "var(--d2-mute)", margin: 0 }}>{e.city} · {e.spotsLeft} spots remaining</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p className="eyebrow">Discount partners</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 0" }}>
              Twelve houses. <em className="display-italic">Standing offers.</em>
            </h2>
          </div>
          <Link to="/v2/d/discounts" style={{ fontSize: 12, color: "var(--d2-ink)", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: "1px solid var(--d2-ink)", paddingBottom: 4 }}>
            Full vault
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--d2-rule)", borderLeft: "1px solid var(--d2-rule)" }} className="three-grid">
          {featuredPartners.map((p) => (
            <div key={p.name} style={{ padding: 28, borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: 16 }}>
              <div>
                <p className="eyebrow">{p.category}</p>
                <p className="display" style={{ fontSize: 20, margin: "8px 0 0" }}>{p.name}</p>
              </div>
              <p style={{ fontSize: 14, color: "var(--d2-ink-soft)", margin: 0 }}>{p.discount}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--d2-ink)", color: "var(--d2-bone)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--d2-warm)" }}>Giving</p>
          <h2 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 32px" }}>
            $5/month. <em className="display-italic" style={{ color: "var(--d2-warm)" }}>Every member.</em>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(248,246,242,0.65)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.8 }}>
            Five dollars from every membership goes to one of four Australian women's charities. Reported on every dashboard. Audited annually.
          </p>
          <Link to="/v2/d/charity" className="btn btn-light">Where every dollar goes</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "0 0 40px", letterSpacing: "-0.015em" }}>
          Take a <em className="display-italic">seat.</em>
        </h2>
        <Link to="/v2/d/memberships#join" className="btn btn-primary">
          Become a Member
        </Link>
      </section>

      <style>{`
        @media (max-width: 980px) { .dir-v2d .four-grid { grid-template-columns: repeat(2, 1fr) !important; } .dir-v2d .hero-bottom { grid-template-columns: 1fr !important; } }
        @media (max-width: 880px) { .dir-v2d .three-grid, .dir-v2d .two-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .dir-v2d .four-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
