import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentDraw, pastWinners, charity, getCountdown } from "../../../data/mock";

export default function DrawA() {
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
            padding: "72px 32px 48px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow">May 2026 · Live draw</p>
            <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 28px" }}>
              Win the Apple bundle <em className="italic-display">or take</em> the cash.
            </h1>
            <p style={{ fontSize: 18, color: "var(--a-ink-soft)", maxWidth: 520, lineHeight: 1.6 }}>
              AirPods Max, Apple Watch Series 10, packaged ready to ship. Or $2,000 cash dropped
              straight into your account. Drawn live on Instagram by our team — winner&rsquo;s phone
              rings before the broadcast ends.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/a/memberships" className="btn btn-dark">
                Become a member · enter draws
              </Link>
              <a className="btn btn-ghost" href="#terms">
                Read the terms ↓
              </a>
            </div>
          </div>

          <div
            style={{
              background: "var(--a-cream)",
              border: "1px solid rgba(17,17,17,0.10)",
              padding: 32,
            }}
          >
            <p className="eyebrow">Closes</p>
            <p className="serif" style={{ fontSize: 22, margin: "8px 0 24px" }}>
              {currentDraw.closesAt}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, padding: "16px 0", borderTop: "1px solid var(--a-rule)", borderBottom: "1px solid var(--a-rule)" }}>
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hrs" },
                { v: c.mins, l: "Min" },
                { v: c.secs, l: "Sec" },
              ].map((seg) => (
                <div key={seg.l} style={{ textAlign: "center" }}>
                  <p className="serif" style={{ fontSize: 38, margin: 0, lineHeight: 1 }}>
                    {String(seg.v).padStart(2, "0")}
                  </p>
                  <p className="eyebrow" style={{ fontSize: 10, marginTop: 6 }}>
                    {seg.l}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
              <div>
                <p className="eyebrow">Total entries</p>
                <p className="serif" style={{ fontSize: 26, margin: "6px 0 0" }}>
                  {currentDraw.totalEntries.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="eyebrow">If Luxe member</p>
                <p className="serif" style={{ fontSize: 26, margin: "6px 0 0" }}>
                  +{currentDraw.yourEntriesIfLuxe} entries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE BREAKDOWN */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
        <p className="eyebrow">In the prize pack</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 40px" }}>
          Three pieces. <em className="italic-display">Or two thousand reasons</em> to take the cash.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { name: "AirPods Max", value: "$899" },
            { name: "Apple Watch Series 10", value: "$849" },
            { name: "Or take the cash", value: "$2,000" },
          ].map((p) => (
            <div key={p.name} style={{ border: "1px solid rgba(17,17,17,0.10)", padding: 28 }}>
              <div
                style={{
                  aspectRatio: "1 / 1",
                  background: "linear-gradient(135deg, var(--a-cream) 0%, var(--a-gold) 100%)",
                  marginBottom: 18,
                }}
              />
              <p className="serif" style={{ fontSize: 24, margin: 0 }}>
                {p.name}
              </p>
              <p style={{ color: "var(--a-mute)", fontSize: 14, margin: "4px 0 0" }}>{p.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WINNER STORIES */}
      <section style={{ background: "var(--a-cream)", borderTop: "1px solid rgba(17,17,17,0.10)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">Recent winners — the long version</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 48px" }}>
            What it actually feels like to <em className="italic-display">get the call.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {pastWinners.slice(0, 3).map((w, i) => (
              <article
                key={w.date}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 ? "1fr 1.4fr" : "1.4fr 1fr",
                  gap: 36,
                  alignItems: "center",
                  borderTop: "1px solid var(--a-rule)",
                  paddingTop: 32,
                }}
              >
                <div style={{ order: i % 2 ? 2 : 1 }}>
                  <p className="eyebrow">{w.date} · {w.state}</p>
                  <h3 className="display" style={{ fontSize: 36, margin: "12px 0" }}>
                    {w.name} won the {w.prize}.
                  </h3>
                  <p className="pull" style={{ fontSize: 22 }}>
                    &ldquo;{w.quote}&rdquo;
                  </p>
                  <p style={{ color: "var(--a-mute)", fontSize: 13, marginTop: 16 }}>
                    Prize valued ${w.value.toLocaleString()} · drawn live · randomdraw.com.au verified
                  </p>
                </div>
                <div
                  style={{
                    order: i % 2 ? 1 : 2,
                    aspectRatio: "4 / 5",
                    background:
                      "linear-gradient(135deg, var(--a-paper) 0%, var(--a-gold) 60%, var(--a-spot) 100%)",
                    position: "relative",
                  }}
                >
                  <span
                    className="italic-display"
                    style={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      fontSize: 96,
                      color: "rgba(17,17,17,0.16)",
                    }}
                  >
                    {w.name.split(" ")[0]}.
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY WIDGET */}
      <section style={{ background: "var(--a-ink)", color: "var(--a-paper)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--a-gold)" }}>
              Where the membership fee goes
            </p>
            <p className="display" style={{ fontSize: 44, margin: "16px 0 12px" }}>
              <em className="italic-display">${charity.totalDonatedThisYear.toLocaleString()}</em> donated this year.
            </p>
            <p style={{ color: "rgba(245,239,230,0.8)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              {charity.story}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ border: "1px solid rgba(245,239,230,0.2)", padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Per member</p>
              <p className="serif" style={{ fontSize: 40, margin: "8px 0 0" }}>${charity.perMember}/mo</p>
            </div>
            <div style={{ border: "1px solid rgba(245,239,230,0.2)", padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Partner</p>
              <p className="serif" style={{ fontSize: 22, margin: "8px 0 0" }}>{charity.partner}</p>
            </div>
            <div style={{ gridColumn: "1 / 3", border: "1px solid rgba(245,239,230,0.2)", padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Audited</p>
              <p style={{ fontSize: 14, margin: "8px 0 0", color: "rgba(245,239,230,0.85)" }}>
                Annual audit by Pitcher Partners. Quarterly statement emailed to all members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="terms" style={{ maxWidth: 980, margin: "0 auto", padding: "72px 32px 96px" }}>
        <p className="eyebrow">Draw terms · summarised</p>
        <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", margin: "12px 0 24px" }}>
          The fine print, in plain English.
        </h2>
        <ul style={{ paddingLeft: 18, color: "var(--a-ink-soft)", fontSize: 15.5, lineHeight: 1.8, margin: 0 }}>
          <li>Draw conducted live on Instagram (@winhervault) on Wednesday 6 May 2026 at 8:00pm AEST.</li>
          <li>Open to AU residents 18+. Member entries proportional to tier (1, 5, or 12).</li>
          <li>Winner notified by phone during the broadcast. If no answer in 24 hours, the draw is re-rolled.</li>
          <li>Winner can choose either prize bundle or the $2,000 cash equivalent.</li>
          <li>Conducted under VIC permit TP/03720. Full T&Cs at /pages/terms.</li>
        </ul>
      </section>
    </div>
  );
}
