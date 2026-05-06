import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  finalCountdown,
  finalNextDraw,
  finalWinners,
  finalEvents,
  finalPartners,
  finalCharities,
  finalSteps,
  finalLifestyleImages,
} from "../../../data/finalMock";

export default function HomeFinal() {
  const [c, setC] = useState(finalCountdown());
  useEffect(() => {
    const id = setInterval(() => setC(finalCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  // Pick 8 partners for homepage strip; logos where present, wordmark fallback otherwise.
  const homepagePartners = finalPartners.slice(0, 8);
  // Three featured events.
  const featuredEvents = finalEvents.slice(0, 3);
  // Six recent winners.
  const recentWinners = finalWinners.slice(0, 6);

  return (
    <>
      {/* HERO — full-bleed lifestyle photo with cream gradient overlay */}
      <section
        className="final-hero-photo"
        style={{
          position: "relative",
          minHeight: "min(86vh, 760px)",
          overflow: "hidden",
          background: "var(--ink)",
        }}
      >
        <img
          src={finalLifestyleImages.hero}
          alt="HerCircle members"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Cream-to-transparent gradient on left for headline legibility */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(95deg, rgba(255,241,227,0.96) 0%, rgba(255,241,227,0.86) 38%, rgba(255,241,227,0.4) 60%, rgba(255,241,227,0) 80%)",
          }}
        />
        <div
          className="final-container"
          style={{
            position: "relative",
            paddingTop: 96,
            paddingBottom: 96,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "min(86vh, 760px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <span className="final-eyebrow">— A lifestyle membership for women</span>
            <span className="final-eyebrow" style={{ color: "var(--hot)" }}>Founding members · 2026</span>
          </div>

          {/* Headline — three explicit rows, each its own block, line-height 1.0, tight tracking */}
          <h1
            className="final-display"
            style={{
              margin: 0,
              fontSize: "clamp(48px, 7.4vw, 96px)",
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em", color: "var(--ink)" }}>
              JOIN THE CIRCLE.
            </span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em", color: "var(--hot)" }}>
              WIN MORE THAN
            </span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em", color: "var(--ink)" }}>
              JUST PRIZES.
            </span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 540, margin: "32px 0 0", color: "var(--ink-soft)" }}>
            Exclusive giveaways, member-only perks, and curated experiences designed for women who want more.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginTop: 32 }}>
            <Link to="/final/memberships" className="final-cta">Become a member</Link>
            <Link to="/final/login" className="final-cta-text">Sign in</Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="final-marquee">
        <div className="final-marquee-track">
          {[0, 1].map((i) => (
            <span key={i}>
              <span>JOIN THE CIRCLE</span>
              <span className="dot">●</span>
              <span>APPLE BUNDLE OR THE CASH</span>
              <span className="dot">●</span>
              <span>WEEKLY LIVE DRAWS</span>
              <span className="dot">●</span>
              <span>SIXTEEN BRAND PARTNERS</span>
              <span className="dot">●</span>
              <span>MEMBER EVENTS EVERY MONTH</span>
              <span className="dot">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS — 5 numbered steps from manifest */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
            <div>
              <span className="final-eyebrow">— How it works</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, maxWidth: 760, letterSpacing: "-0.01em" }}>
                How HerCircle works.
              </h2>
            </div>
            <Link to="/final/memberships" className="final-cta-ghost">View memberships</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }} className="final-steps-grid">
            {finalSteps.map((s) => (
              <article key={s.n}>
                <div className="final-numeral" style={{ fontSize: 64 }}>{s.n}</div>
                <hr className="final-rule-strong" style={{ margin: "12px 0 16px" }} />
                <h3 className="final-display" style={{ fontSize: 22, lineHeight: 1, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GIVEAWAY */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }} className="final-feature-grid">
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                background: "var(--ink)",
              }}
            >
              <img
                src={finalNextDraw.heroImage}
                alt="Apple bundle giveaway"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  background: "var(--hot)",
                  color: "#fff",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.24em",
                  padding: "8px 14px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                }}
              >
                This week's draw
              </span>
            </div>
            <div>
              <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Live on Instagram, Wed 8pm AEDT</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 16, letterSpacing: "-0.01em" }}>
                {finalNextDraw.title}
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-soft)", marginTop: 16, maxWidth: 480 }}>
                One lucky winner will choose between an Apple bundle — AirPods Max + Apple Watch — or take home $2,000 cash.
                The choice is yours.
              </p>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                {finalNextDraw.prizeDetails.map((d) => (
                  <li key={d} style={{ paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--hot)" }}>●</span>{d}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                  margin: "32px 0 24px",
                  borderTop: "1.5px solid var(--ink)",
                  borderBottom: "1.5px solid var(--ink)",
                  padding: "20px 0",
                }}
              >
                {[
                  { label: "Days", value: c.days },
                  { label: "Hrs", value: c.hours },
                  { label: "Min", value: c.mins },
                  { label: "Sec", value: c.secs },
                ].map((b) => (
                  <div key={b.label} style={{ textAlign: "center" }}>
                    <div className="final-stat-value">{String(b.value).padStart(2, "0")}</div>
                    <div className="final-stat-label">{b.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 24px" }}>
                {finalNextDraw.totalEntries.toLocaleString()} entries so far · drawn live on {finalNextDraw.liveOn}
              </p>
              <Link to="/final/memberships" className="final-cta">Enter now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WINNERS — real names + lifestyle photos */}
      <section className="final-section" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Recent winners</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, color: "var(--cream)", maxWidth: 760, letterSpacing: "-0.01em" }}>
                Real members. Real prizes. Every week.
              </h2>
            </div>
            <Link to="/final/winners" className="final-cta-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>See all winners</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="final-winners-grid">
            {recentWinners.map((w) => (
              <article key={`${w.firstName}-${w.date}`}>
                <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "#222" }}>
                  <img src={w.image} alt={`${w.firstName} ${w.initial}.`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ marginTop: 14 }}>
                  <div className="final-display" style={{ color: "var(--cream)", fontSize: 22, lineHeight: 1.05 }}>
                    {w.firstName} {w.initial}.
                  </div>
                  <div style={{ fontSize: 12, marginTop: 8, opacity: 0.8, lineHeight: 1.5 }}>{w.prize}</div>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 48, opacity: 0.78, fontSize: 14, lineHeight: 1.65, maxWidth: 720 }}>
            {finalNextDraw.livePromise}
          </p>
        </div>
      </section>

      {/* DISCOUNT PARTNERS STRIP */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <span className="final-eyebrow">— Member-only discounts</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, maxWidth: 760, letterSpacing: "-0.01em" }}>
                Brands you already shop. Codes you don't.
              </h2>
            </div>
            <Link to="/final/discounts" className="final-cta-ghost">All partners ({finalPartners.length})</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="final-partners-grid">
            {homepagePartners.map((p) => (
              <article
                key={p.name}
                className="final-card"
                style={{ padding: 24, minHeight: 180, justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 64 }}>
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} style={{ maxHeight: 56, maxWidth: "100%", objectFit: "contain" }} loading="lazy" />
                  ) : (
                    <span
                      className="final-display"
                      style={{ fontSize: 22, letterSpacing: "0.02em", textAlign: "center", color: "var(--ink)" }}
                    >
                      {p.name.toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <div className="final-eyebrow" style={{ color: "var(--hot)", marginTop: 16 }}>{p.amount}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <span className="final-eyebrow">— Upcoming events</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, maxWidth: 720, letterSpacing: "-0.01em" }}>
                Show up. We host every month.
              </h2>
            </div>
            <Link to="/final/events" className="final-cta-ghost">All events</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-events-grid">
            {featuredEvents.map((e) => (
              <article key={e.id} className="final-card">
                <div style={{ aspectRatio: "5/4", overflow: "hidden" }}>
                  <img src={e.image} alt={e.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: 28 }}>
                  <div className="final-eyebrow" style={{ color: "var(--hot)" }}>{e.category}</div>
                  <h3 className="final-display final-display-md" style={{ marginTop: 10 }}>{e.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--muted)", margin: "10px 0 16px" }}>
                    {e.date} · {e.venue}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{e.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY STRIP — three real charities */}
      <section className="final-section" style={{ background: "var(--hot)", color: "#fff" }}>
        <div className="final-container">
          <div style={{ marginBottom: 48, maxWidth: 920 }}>
            <span className="final-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>— Charity partners</span>
            <h2 className="final-display final-display-lg" style={{ marginTop: 12, color: "#fff", letterSpacing: "-0.01em" }}>
              Every month, a portion of HerCircle goes to causes we genuinely care about.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-charity-grid">
            {finalCharities.map((ch) => (
              <article
                key={ch.name}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {ch.image && (
                  <div style={{ aspectRatio: "16/9", overflow: "hidden", marginBottom: 4 }}>
                    <img src={ch.image} alt={ch.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                  </div>
                )}
                <div className="final-display" style={{ fontSize: 26, color: "#fff", lineHeight: 1.05 }}>{ch.name}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.92)", margin: 0 }}>{ch.tagline}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/final/charity" className="final-cta" style={{ background: "#fff", color: "var(--hot)" }}>
              Read the impact
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="final-section">
        <div className="final-container" style={{ textAlign: "center", padding: "120px 0" }}>
          <span className="final-eyebrow">— Become a member</span>
          <h2
            className="final-display"
            style={{
              margin: "20px auto 32px",
              maxWidth: 1100,
              fontSize: "clamp(48px, 7vw, 96px)",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em" }}>REAL MEMBERS.</span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em", color: "var(--hot)" }}>REAL PRIZES.</span>
            <span style={{ display: "block", lineHeight: 1, marginBlock: "0.05em" }}>EVERY WEEK.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 32px" }}>
            From $2.50/wk. Cancel anytime. New giveaways every month.
          </p>
          <Link to="/final/memberships" className="final-cta">Become a member</Link>
        </div>
      </section>

      <ResponsiveStyles />
    </>
  );
}

function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 1100px) {
        .final-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .final-partners-grid { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (max-width: 900px) {
        .final-feature-grid,
        .final-charity-grid {
          grid-template-columns: 1fr !important;
          gap: 32px !important;
        }
        .final-steps-grid,
        .final-events-grid,
        .final-partners-grid {
          grid-template-columns: 1fr !important;
        }
        .final-winners-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .final-hero-photo {
          min-height: auto !important;
        }
      }
      @media (max-width: 600px) {
        .final-winners-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  );
}
