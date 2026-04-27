import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tiers, pastWinners, currentDraw, charity, getCountdown } from "../../../data/mock";

export default function HomeA() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ borderBottom: "1px solid rgba(17,17,17,0.12)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 32px 56px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow">Issue No. 04 · May 2026</p>
            <h1
              className="display"
              style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 28px" }}
            >
              For the woman <br />
              <em className="italic-display">who wants</em> more.
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--a-ink-soft)",
                maxWidth: 520,
                margin: 0,
              }}
            >
              A members&rsquo; club built around monthly luxury draws, partner-brand discounts, and a
              women&rsquo;s charity that we fund per head. Three tiers. One door. Your call.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <Link to="/a/memberships" className="btn btn-dark">
                See the membership tiers
              </Link>
              <Link to="/a/draw" className="btn btn-ghost">
                This month&rsquo;s draw
              </Link>
            </div>

            <div
              style={{
                marginTop: 48,
                display: "flex",
                gap: 32,
                color: "var(--a-mute)",
                fontSize: 13,
                letterSpacing: "0.04em",
              }}
            >
              <span>
                <strong style={{ color: "var(--a-ink)" }}>14,800+</strong> members
              </span>
              <span>
                <strong style={{ color: "var(--a-ink)" }}>${(charity.totalDonatedThisYear / 1000).toFixed(1)}k</strong> donated YTD
              </span>
              <span>
                <strong style={{ color: "var(--a-ink)" }}>4.9★</strong> from 1,200 reviews
              </span>
            </div>
          </div>

          {/* Hero card — pricing-forward */}
          <div
            style={{
              background: "var(--a-cream)",
              padding: 32,
              border: "1px solid rgba(17,17,17,0.10)",
              boxShadow: "0 24px 56px -32px rgba(17,17,17,0.20)",
            }}
          >
            <p className="eyebrow">Choose your seat</p>
            <p className="serif" style={{ fontSize: 26, margin: "10px 0 24px" }}>
              Three tiers. Cancel anytime.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {tiers.map((t) => (
                <Link
                  key={t.id}
                  to="/a/memberships"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    background: t.featured ? "var(--a-ink)" : "var(--a-paper)",
                    color: t.featured ? "var(--a-paper)" : "var(--a-ink)",
                    border: t.featured ? "1px solid var(--a-ink)" : "1px solid rgba(17,17,17,0.08)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p className="serif" style={{ fontSize: 20, margin: 0 }}>
                      {t.name}
                      {t.featured && (
                        <span
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            color: "var(--a-gold)",
                          }}
                        >
                          MOST CHOSEN
                        </span>
                      )}
                    </p>
                    <p style={{ fontSize: 12, margin: "2px 0 0", opacity: 0.8 }}>
                      {t.entries} {t.entries > 1 ? "entries" : "entry"} per draw
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="serif" style={{ fontSize: 22, margin: 0 }}>
                      ${t.weekly.toFixed(2)}
                      <span style={{ fontSize: 12, opacity: 0.7 }}>/wk</span>
                    </p>
                    <p style={{ fontSize: 11, margin: 0, opacity: 0.7 }}>
                      ${t.monthly.toFixed(2)}/month
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--a-mute)", marginTop: 20 }}>
              Pause, swap or cancel from your dashboard. No lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTDOWN STRIP */}
      <section style={{ background: "var(--a-ink)", color: "var(--a-paper)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", margin: 0, opacity: 0.7 }}>
              Next live draw
            </p>
            <p className="serif" style={{ fontSize: 22, margin: "4px 0 0" }}>
              {currentDraw.prize}
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { v: c.days, l: "Days" },
              { v: c.hours, l: "Hours" },
              { v: c.mins, l: "Min" },
              { v: c.secs, l: "Sec" },
            ].map((seg) => (
              <div key={seg.l} style={{ textAlign: "center", minWidth: 56 }}>
                <p className="serif" style={{ fontSize: 36, margin: 0, lineHeight: 1 }}>
                  {String(seg.v).padStart(2, "0")}
                </p>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6, margin: "6px 0 0" }}>
                  {seg.l}
                </p>
              </div>
            ))}
          </div>
          <Link to="/a/draw" className="btn" style={{ background: "var(--a-paper)", color: "var(--a-ink)" }}>
            Enter this draw →
          </Link>
        </div>
      </section>

      {/* EDITORIAL — VALUE TRIO */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Why members stay</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", maxWidth: 900, margin: "16px 0 56px" }}>
          A club <em className="italic-display">designed</em> around the women who joined it.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }}>
          {[
            {
              n: "I.",
              h: "Live monthly draws.",
              p: "Apple, Cartier, Dyson, LV, cash — drawn live on Instagram and announced before midnight. No spreadsheet, no spin wheel hidden behind a paywall.",
            },
            {
              n: "II.",
              h: "Partner discounts.",
              p: "Curated Australian brands — Aesop, Camilla & Marc, Bared, Rationale — with member-only pricing that pays your subscription back twice over.",
            },
            {
              n: "III.",
              h: "$5 per member, every month.",
              p: `Funded directly to ${charity.partner}. ${charity.totalDonatedThisYear.toLocaleString()} this year and counting — visible on every dashboard.`,
            },
          ].map((b) => (
            <div key={b.n}>
              <p className="serif italic-display" style={{ fontSize: 28, color: "var(--a-spot)", margin: "0 0 12px" }}>
                {b.n}
              </p>
              <h3 className="serif" style={{ fontSize: 24, margin: "0 0 12px" }}>
                {b.h}
              </h3>
              <p style={{ color: "var(--a-ink-soft)", fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>
                {b.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "var(--a-cream)", borderTop: "1px solid rgba(17,17,17,0.10)", borderBottom: "1px solid rgba(17,17,17,0.10)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <p className="pull" style={{ fontSize: 38, lineHeight: 1.3 }}>
            &ldquo;I&rsquo;d been a member four months. I&rsquo;d honestly stopped expecting it. Then my phone rang.&rdquo;
          </p>
          <p className="eyebrow" style={{ marginTop: 20 }}>
            Janaya W. · NSW · Won the LV bundle, February 2026
          </p>
        </div>
      </section>

      {/* PAST WINNERS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p className="eyebrow">Recent winners</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 0" }}>
              Real members. <em className="italic-display">Real prizes.</em>
            </h2>
          </div>
          <Link to="/a/draw" className="btn btn-ghost">
            See all winners →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {pastWinners.slice(0, 6).map((w) => (
            <article
              key={w.date}
              style={{
                border: "1px solid rgba(17,17,17,0.10)",
                padding: 24,
                background: "var(--a-paper)",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background:
                    "linear-gradient(135deg, var(--a-cream), var(--a-gold))",
                  marginBottom: 18,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  className="serif italic-display"
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    fontSize: 56,
                    color: "rgba(17,17,17,0.18)",
                  }}
                >
                  {w.name.split(" ")[0]}
                </span>
              </div>
              <p className="eyebrow">{w.date}</p>
              <p className="serif" style={{ fontSize: 22, margin: "8px 0" }}>
                {w.name} · {w.state}
              </p>
              <p style={{ fontSize: 14, color: "var(--a-ink-soft)", margin: 0 }}>
                Won the {w.prize} · valued ${w.value.toLocaleString()}.
              </p>
              <p style={{ marginTop: 14, fontSize: 14, fontStyle: "italic", color: "var(--a-spot)" }}>
                &ldquo;{w.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CHARITY */}
      <section
        style={{
          background: "var(--a-ink)",
          color: "var(--a-paper)",
          padding: "96px 32px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--a-gold)" }}>
              The charity model
            </p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 60px)", margin: "16px 0 24px" }}>
              <em className="italic-display">$5</em> from every member, <br />every month, to {charity.partner}.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,239,230,0.8)", margin: 0, maxWidth: 520 }}>
              {charity.story}
            </p>
            <Link to="/a/draw" className="btn" style={{ background: "var(--a-paper)", color: "var(--a-ink)", marginTop: 28 }}>
              See the running total →
            </Link>
          </div>
          <div
            style={{
              border: "1px solid rgba(245,239,230,0.2)",
              padding: 48,
              textAlign: "center",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--a-gold)" }}>
              Year to date
            </p>
            <p
              className="serif"
              style={{ fontSize: "clamp(72px, 11vw, 132px)", margin: "12px 0", fontWeight: 500, lineHeight: 1 }}
            >
              ${charity.totalDonatedThisYear.toLocaleString()}
            </p>
            <p style={{ color: "var(--a-gold)", fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", margin: 0 }}>
              donated to {charity.partner}
            </p>
            <p style={{ marginTop: 24, color: "rgba(245,239,230,0.6)", fontSize: 13 }}>
              Updated daily. Audited annually.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
