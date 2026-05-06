import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  finalCountdown,
  finalNextDraw,
  finalWinners,
  finalEvents,
  finalCharity,
  portraitStyle,
} from "../../../data/finalMock";

const STEPS = [
  {
    n: "01",
    title: "Become a member",
    blurb:
      "Three weekly tiers from $9.99. Cancel anytime. $5 of every membership funds Share The Dignity.",
  },
  {
    n: "02",
    title: "Live in the circle",
    blurb:
      "Member-only events, eight curated brand partners, weekly draws — and a community that lives like you do.",
  },
  {
    n: "03",
    title: "Win more than prizes",
    blurb:
      "Yes, we run real giveaways with real winners. But the real perk is the way membership feels.",
  },
] as const;

const BENEFITS = [
  { title: "Discounts", blurb: "Eight curated Australian brands. Codes refresh quarterly. Pays for the membership.", icon: "%" },
  { title: "Events", blurb: "Wellness, social, creative — across Sydney, Melbourne, Byron, and growing.", icon: "↗" },
  { title: "Community", blurb: "A small, considered group of women who actually show up for each other.", icon: "○" },
  { title: "Giveaways", blurb: "Weekly draws on real prizes. Tier-bonused entries. Live results.", icon: "★" },
] as const;

export default function HomeFinal() {
  const [c, setC] = useState(finalCountdown());
  useEffect(() => {
    const id = setInterval(() => setC(finalCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="final-hero">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <span className="final-eyebrow">— A lifestyle membership for women</span>
            <span className="final-eyebrow" style={{ color: "var(--hot)" }}>Founding members · 2026</span>
          </div>
          <h1 className="final-display final-display-xl">
            Join the circle.<br />
            <span style={{ color: "var(--hot)" }}>Win more than</span><br />
            just prizes.
          </h1>
          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 48,
              alignItems: "end",
            }}
          >
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 480, margin: 0 }}>
              Exclusive giveaways, member-only perks, and curated experiences designed for
              women who want more.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <Link to="/final/memberships" className="final-cta">Become a member</Link>
              <Link to="/final/login" className="final-cta-text">Sign in</Link>
            </div>
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
              <span>WEEKLY DRAWS</span>
              <span className="dot">●</span>
              <span>EIGHT BRAND PARTNERS</span>
              <span className="dot">●</span>
              <span>EVENTS IN FOUR CITIES</span>
              <span className="dot">●</span>
              <span>$5 PER MEMBER TO SHARE THE DIGNITY</span>
              <span className="dot">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED GIVEAWAY + COUNTDOWN */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="final-feature-grid">
            <div
              className="final-portrait"
              style={{
                ...portraitStyle(18),
                aspectRatio: "4 / 5",
                position: "relative",
              }}
            >
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
              <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Live draw Wed 13 May, 8pm AEST</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 16 }}>
                {finalNextDraw.prize}
              </h2>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, fontSize: 15, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                {finalNextDraw.prizeDetails.map((d) => (
                  <li key={d} style={{ paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--hot)" }}>●</span>{d}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                  margin: "32px 0",
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
              <Link to="/final/memberships" className="final-cta">Enter the draw</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <span className="final-eyebrow">— How it works</span>
          <h2 className="final-display final-display-lg" style={{ marginTop: 12, marginBottom: 64, maxWidth: 880 }}>
            A members club. Three steps in.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="final-steps-grid">
            {STEPS.map((s) => (
              <article key={s.n}>
                <div className="final-numeral">{s.n}</div>
                <hr className="final-rule-strong" style={{ margin: "16px 0 24px" }} />
                <h3 className="final-display final-display-md" style={{ marginBottom: 14 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS BEYOND WINNING */}
      <section className="final-section">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <span className="final-eyebrow">— Beyond winning</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, maxWidth: 720 }}>
                The membership is the perk.
              </h2>
            </div>
            <Link to="/final/memberships" className="final-cta-ghost">View memberships</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="final-benefits-grid">
            {BENEFITS.map((b) => (
              <article key={b.title} className="final-card" style={{ padding: 32 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--hot)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    fontFamily: "Anton, sans-serif",
                    marginBottom: 24,
                  }}
                >
                  {b.icon}
                </div>
                <h3 className="final-display final-display-md" style={{ marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{b.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WINNERS */}
      <section className="final-section" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Recent winners</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, color: "var(--cream)", maxWidth: 720 }}>
                Real members. Real prizes.
              </h2>
            </div>
            <Link to="/final/winners" className="final-cta-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>See all winners</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="final-winners-grid">
            {finalWinners.slice(0, 6).map((w) => (
              <article key={`${w.firstName}-${w.date}`}>
                <div className="final-portrait" style={portraitStyle(w.hue)} />
                <div style={{ marginTop: 16 }}>
                  <div className="final-display final-display-md" style={{ color: "var(--cream)", fontSize: 22, lineHeight: 1.05 }}>
                    {w.firstName} {w.initial}.
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.6, marginTop: 6 }}>
                    {w.suburb}, {w.state}
                  </div>
                  <div style={{ fontSize: 13, marginTop: 12, opacity: 0.85, lineHeight: 1.5 }}>{w.prize}</div>
                  <div className="final-eyebrow" style={{ color: "var(--hot)", marginTop: 8 }}>${w.value.toLocaleString()}</div>
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
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, maxWidth: 720 }}>
                Show up. We host every month.
              </h2>
            </div>
            <Link to="/final/events" className="final-cta-ghost">All events</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-events-grid">
            {finalEvents.slice(0, 3).map((e) => (
              <article key={e.id} className="final-card">
                <div className="final-portrait" style={{ ...portraitStyle(e.hue), aspectRatio: "5 / 4" }} />
                <div style={{ padding: 28 }}>
                  <div className="final-eyebrow" style={{ color: "var(--hot)" }}>{e.category}</div>
                  <h3 className="final-display final-display-md" style={{ marginTop: 10 }}>{e.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--muted)", margin: "10px 0 16px" }}>
                    {e.date} · {e.city}, {e.state}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{e.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY STRIP */}
      <section className="final-section" style={{ background: "var(--hot)", color: "#fff" }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }} className="final-charity-grid">
            <div>
              <span className="final-eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>— Charity partner</span>
              <h2 className="final-display final-display-lg" style={{ marginTop: 12, color: "#fff" }}>
                We back<br />Share The Dignity.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, marginTop: 24, maxWidth: 520 }}>
                Five dollars from every membership goes directly to {finalCharity.partner} — funding period products,
                Christmas hampers, and policy research that drives change.
              </p>
              <Link
                to="/final/charity"
                className="final-cta"
                style={{ background: "#fff", color: "var(--hot)", marginTop: 32 }}
              >
                Read the impact
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,0.12)", padding: 28 }}>
                <div className="final-stat-value" style={{ color: "#fff" }}>${finalCharity.contributedYTD.toLocaleString()}</div>
                <div className="final-stat-label" style={{ color: "rgba(255,255,255,0.78)" }}>Contributed YTD</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", padding: 28 }}>
                <div className="final-stat-value" style={{ color: "#fff" }}>${finalCharity.contributedAllTime.toLocaleString()}</div>
                <div className="final-stat-label" style={{ color: "rgba(255,255,255,0.78)" }}>All time</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", padding: 28 }}>
                <div className="final-stat-value" style={{ color: "#fff" }}>{finalCharity.womenSupported.toLocaleString()}</div>
                <div className="final-stat-label" style={{ color: "rgba(255,255,255,0.78)" }}>Women supported</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", padding: 28 }}>
                <div className="final-stat-value" style={{ color: "#fff" }}>${finalCharity.perMember}/mo</div>
                <div className="final-stat-label" style={{ color: "rgba(255,255,255,0.78)" }}>Per member</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="final-section">
        <div className="final-container" style={{ textAlign: "center", padding: "120px 0" }}>
          <span className="final-eyebrow">— Become a member</span>
          <h2 className="final-display final-display-xl" style={{ margin: "20px 0 32px", maxWidth: 1200, marginInline: "auto" }}>
            More than a giveaway.<br /><span style={{ color: "var(--hot)" }}>A way of living.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 32px" }}>
            From $9.99 a week. Cancel anytime. The first week is on us.
          </p>
          <Link to="/final/memberships" className="final-cta">Join the circle</Link>
        </div>
      </section>

      <ResponsiveStyles />
    </>
  );
}

function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 900px) {
        .final-feature-grid,
        .final-charity-grid {
          grid-template-columns: 1fr !important;
          gap: 32px !important;
        }
        .final-steps-grid,
        .final-benefits-grid,
        .final-events-grid {
          grid-template-columns: 1fr !important;
        }
        .final-winners-grid {
          grid-template-columns: repeat(2, 1fr) !important;
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
