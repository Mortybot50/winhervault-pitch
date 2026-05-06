import { Link } from "react-router-dom";
import { v2Winners, v2Events, v2Partners, v2Charities, v2NextDraw, getV2Tiers } from "../../../../data/mock";

export default function HomeV2C() {
  const tiers = getV2Tiers("c");
  const featuredWinners = v2Winners.slice(0, 3);
  const featuredEvents = v2Events.slice(0, 3);
  const featuredPartners = v2Partners.slice(0, 6);
  return (
    <div>
      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg, var(--c2-cream) 0%, var(--c2-cream-warm) 100%)", borderBottom: "1px solid var(--c2-rule)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px 80px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">
          <div>
            <span className="pill">Members club · Est. 2026</span>
            <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 104px)", margin: "20px 0 24px" }}>
              Win like <em className="display-italic" style={{ color: "var(--c2-berry)" }}>her.</em>
            </h1>
            <p style={{ fontSize: 19, color: "var(--c2-ink-soft)", lineHeight: 1.65, maxWidth: 560, margin: "0 0 32px" }}>
              Australia's first women-first members club. From <strong>$2.31/wk</strong> — entry to weekly cash prizes, twelve brand discounts, six events a year, and $5 to a women's charity every month.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              <Link to="/v2/c/memberships#join" className="btn btn-primary">
                Become a Member →
              </Link>
              <Link to="/v2/c/winners" className="btn btn-ghost">
                See past winners
              </Link>
            </div>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", fontSize: 13, color: "var(--c2-ink-soft)" }}>
              <div><strong style={{ color: "var(--c2-berry)" }}>2,847</strong> members</div>
              <div><strong style={{ color: "var(--c2-berry)" }}>$47,235</strong> donated YTD</div>
              <div><strong style={{ color: "var(--c2-berry)" }}>132</strong> winners</div>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 18, overflow: "hidden", background: "linear-gradient(160deg, #F2D5C8 0%, #5A1530 110%)", boxShadow: "0 24px 60px rgba(90,21,48,0.25)" }} className="hero-art">
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, color: "var(--c2-cream)" }}>
              <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Next draw · {v2NextDraw.drawDate}</p>
              <p className="display" style={{ fontSize: 38, margin: "8px 0 4px" }}>{v2NextDraw.prize}</p>
              <p style={{ fontSize: 13, opacity: 0.85, margin: 0 }}>1,847 entries placed so far</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">How it works</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 56px", maxWidth: 720 }}>
          Pick a tier. Get the perks. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Win the prize.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {[
            { n: "01", t: "Choose your tier", b: "Insider, Luxe, or Icon. Cancel anytime — no lock-in, no fees.", c: "var(--c2-cream-warm)" },
            { n: "02", t: "Use the perks", b: "Twelve brand discount codes. Six events a year. Most members recoup their fee in a month.", c: "var(--c2-blush)" },
            { n: "03", t: "Win, or give", b: "Every weekly draw, a member wins. Every monthly fee, $5 goes to a women's charity.", c: "var(--c2-gold-soft)" },
          ].map((s) => (
            <div key={s.n} className="card" style={{ background: s.c, padding: 36 }}>
              <p className="display" style={{ fontSize: 56, margin: "0 0 20px", color: "var(--c2-berry)", lineHeight: 1 }}>{s.n}</p>
              <h3 className="display" style={{ fontSize: 24, margin: "0 0 14px" }}>{s.t}</h3>
              <p style={{ color: "var(--c2-ink-soft)", lineHeight: 1.7, fontSize: 15, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIER STRIP */}
      <section style={{ background: "var(--c2-berry)", color: "var(--c2-cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
            <div>
              <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Pick your tier</p>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 0" }}>
                Three rooms. <em className="display-italic" style={{ color: "var(--c2-gold)" }}>One vault.</em>
              </h2>
            </div>
            <Link to="/v2/c/memberships" style={{ fontSize: 13, fontWeight: 600, color: "var(--c2-gold)", textDecoration: "none", letterSpacing: "0.02em" }}>
              Compare all perks →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="three-grid">
            {tiers.map((t) => (
              <div key={t.id} style={{ background: t.featured ? "var(--c2-gold)" : "rgba(255,247,242,0.06)", color: t.featured ? "var(--c2-berry-deep)" : "var(--c2-cream)", borderRadius: 14, padding: 32, border: t.featured ? "none" : "1px solid rgba(255,247,242,0.15)", position: "relative" }}>
                {t.featured && <span className="pill" style={{ background: "var(--c2-berry-deep)", color: "var(--c2-gold)", marginBottom: 16 }}>Bestseller</span>}
                <h3 className="display" style={{ fontSize: 32, margin: t.featured ? "0 0 6px" : "0 0 6px" }}>{t.name}</h3>
                <p style={{ fontSize: 13, opacity: 0.8, margin: "0 0 24px", lineHeight: 1.5 }}>{t.tagline}</p>
                <p className="display" style={{ fontSize: 44, margin: "0 0 4px" }}>
                  ${t.weekly.toFixed(2)}<span style={{ fontSize: 14, opacity: 0.7 }}>/wk</span>
                </p>
                <p style={{ fontSize: 12, opacity: 0.7, margin: "0 0 20px" }}>${t.monthly.toFixed(2)}/month · cancel anytime</p>
                <Link to="/v2/c/memberships#join" className="btn" style={{ background: t.featured ? "var(--c2-berry)" : "var(--c2-gold)", color: t.featured ? "var(--c2-cream)" : "var(--c2-berry-deep)", width: "100%", justifyContent: "center" }}>
                  Join {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WINNERS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div>
            <p className="eyebrow">Winners</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 0", maxWidth: 720 }}>
              Real women. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Real prizes.</em>
            </h2>
          </div>
          <Link to="/v2/c/winners" style={{ fontSize: 13, fontWeight: 600, color: "var(--c2-berry)", textDecoration: "none" }}>
            All winners →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {featuredWinners.map((w, i) => (
            <article key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ aspectRatio: "4 / 5", background: `linear-gradient(160deg, hsl(${w.imageHue} 38% 88%), hsl(${w.imageHue} 32% 50%))` }} />
              <div style={{ padding: 24 }}>
                <p className="eyebrow">{w.date}</p>
                <h3 className="display" style={{ fontSize: 22, margin: "10px 0 6px" }}>{w.firstName} {w.initial}., {w.suburb}</h3>
                <p className="display" style={{ fontSize: 22, color: "var(--c2-berry)", margin: "0 0 14px" }}>{w.prize}</p>
                <p style={{ fontStyle: "italic", color: "var(--c2-ink-soft)", lineHeight: 1.6, fontSize: 14, margin: 0 }}>"{w.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ background: "var(--c2-cream-warm)", padding: "96px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
            <div>
              <p className="eyebrow">Events</p>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 0" }}>
                Six gatherings. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>One year.</em>
              </h2>
            </div>
            <Link to="/v2/c/events" style={{ fontSize: 13, fontWeight: 600, color: "var(--c2-berry)", textDecoration: "none" }}>
              See all events →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
            {featuredEvents.map((e) => (
              <article key={e.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ aspectRatio: "16 / 10", background: `linear-gradient(160deg, hsl(${e.imageHue} 35% 88%), hsl(${e.imageHue} 28% 60%))` }} />
                <div style={{ padding: 24 }}>
                  <p className="eyebrow">{e.category} · {e.date}</p>
                  <h3 className="display" style={{ fontSize: 22, margin: "10px 0 8px" }}>{e.title}</h3>
                  <p style={{ color: "var(--c2-ink-soft)", lineHeight: 1.6, fontSize: 14, margin: 0 }}>{e.city} · {e.spotsLeft} spots left</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOUNTS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div>
            <p className="eyebrow">The Vault</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 0" }}>
              Twelve brands. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Standing perks.</em>
            </h2>
          </div>
          <Link to="/v2/c/discounts" style={{ fontSize: 13, fontWeight: 600, color: "var(--c2-berry)", textDecoration: "none" }}>
            Browse the vault →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="three-grid">
          {featuredPartners.map((p) => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: 18, border: "1px solid var(--c2-rule)", borderRadius: 12, background: "var(--c2-paper)" }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: `linear-gradient(160deg, hsl(${p.hue} 35% 88%), hsl(${p.hue} 28% 60%))`, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="display" style={{ fontSize: 16, margin: 0 }}>{p.name}</p>
                <p style={{ fontSize: 12, color: "var(--c2-mute)", margin: "2px 0 0" }}>{p.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--c2-berry-deep)", color: "var(--c2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Giving</p>
          <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "20px 0 24px" }}>
            $5/month. <em className="display-italic" style={{ color: "var(--c2-gold)" }}>Every member. No exceptions.</em>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,247,242,0.8)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Five dollars from every membership goes to one of four women's charities. Reported on every dashboard. Audited annually. That's the deal.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 720, margin: "0 auto 40px" }} className="two-grid">
            {v2Charities.map((c) => (
              <div key={c.id} style={{ background: "rgba(255,247,242,0.06)", padding: 24, borderRadius: 12, textAlign: "left", border: "1px solid rgba(255,247,242,0.1)" }}>
                <p className="display" style={{ fontSize: 18, margin: "0 0 4px" }}>{c.name}</p>
                <p style={{ fontSize: 12, color: "var(--c2-gold)", margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.cause}</p>
              </div>
            ))}
          </div>
          <Link to="/v2/c/charity" className="btn btn-gold">Where every dollar goes →</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "0 0 28px" }}>
          Ready to <em className="display-italic" style={{ color: "var(--c2-berry)" }}>step inside?</em>
        </h2>
        <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", margin: "0 0 32px", lineHeight: 1.7 }}>
          From $2.31 a week. Cancel anytime. The next draw is in days.
        </p>
        <Link to="/v2/c/memberships#join" className="btn btn-primary" style={{ fontSize: 14, padding: "18px 32px" }}>
          Become a Member →
        </Link>
      </section>

      <style>{`
        @media (max-width: 980px) { .dir-v2c .hero-grid { grid-template-columns: 1fr !important; } .dir-v2c .hero-art { max-height: 400px; } }
        @media (max-width: 880px) { .dir-v2c .three-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .dir-v2c .three-grid, .dir-v2c .two-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
