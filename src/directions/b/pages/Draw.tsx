import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentDraw, pastWinners, charity, getCountdown } from "../../../data/mock";

export default function DrawB() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <section style={{ background: "linear-gradient(140deg, var(--b-berry) 0%, var(--b-berry-deep) 100%)", color: "var(--b-cream)" }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "72px 32px 64px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <span className="chip" style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)" }}>
              May 2026 · Drawn live Wed
            </span>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 116px)", margin: "24px 0" }}>
              Win the Apple bundle. <br />
              Or take <span style={{ color: "var(--b-gold)" }}>$2,000 cash.</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,247,242,0.85)", maxWidth: 560, lineHeight: 1.6 }}>
              AirPods Max + Apple Watch Series 10, ready to ship. Or we drop $2,000 straight into your
              account. Drawn live on Instagram. Winner&rsquo;s phone rings before broadcast ends.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/b/memberships" className="btn btn-gold">
                Become a member · From $2.49/wk
              </Link>
              <a href="#terms" className="btn btn-cream">
                Read the terms ↓
              </a>
            </div>
          </div>
          <div style={{ background: "rgba(255,247,242,0.06)", border: "1px solid rgba(255,247,242,0.18)", borderRadius: 16, padding: 32 }}>
            <p style={{ color: "var(--b-gold)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>
              Closes
            </p>
            <p className="display-tight" style={{ fontSize: 22, margin: "8px 0 24px" }}>{currentDraw.closesAt}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hrs" },
                { v: c.mins, l: "Min" },
                { v: c.secs, l: "Sec" },
              ].map((seg) => (
                <div key={seg.l} style={{ background: "var(--b-berry-deep)", borderRadius: 10, padding: 14, textAlign: "center" }}>
                  <p className="display" style={{ fontSize: 36, margin: 0, lineHeight: 1, color: "var(--b-gold)" }}>
                    {String(seg.v).padStart(2, "0")}
                  </p>
                  <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,247,242,0.6)", margin: "6px 0 0" }}>
                    {seg.l}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)", padding: 16, borderRadius: 10 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>Total entries</p>
                <p className="display" style={{ fontSize: 32, margin: "6px 0 0" }}>{currentDraw.totalEntries.toLocaleString()}</p>
              </div>
              <div style={{ border: "1.5px solid var(--b-gold)", padding: 16, borderRadius: 10 }}>
                <p style={{ color: "var(--b-gold)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>Luxe gives</p>
                <p className="display" style={{ fontSize: 32, margin: "6px 0 0" }}>+5 entries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE TILES */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">In the prize pack</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "12px 0 40px", maxWidth: 1000 }}>
          Three pieces. Or <span style={{ color: "var(--b-berry)" }}>two thousand reasons</span> to take the cash.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { name: "AirPods Max", value: "$899", bg: "linear-gradient(135deg, var(--b-cream) 0%, var(--b-gold-soft) 100%)", text: "var(--b-berry-deep)" },
            { name: "Apple Watch Series 10", value: "$849", bg: "linear-gradient(135deg, var(--b-berry) 0%, var(--b-berry-deep) 100%)", text: "var(--b-cream)" },
            { name: "Or: $2,000 cash", value: "Pick one", bg: "var(--b-gold)", text: "var(--b-berry-deep)" },
          ].map((p) => (
            <div key={p.name} style={{ background: p.bg, color: p.text, borderRadius: 16, padding: 32, minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                Prize component
              </p>
              <div>
                <h3 className="display" style={{ fontSize: 36, margin: "0 0 8px" }}>{p.name}</h3>
                <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>RRP {p.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINNER STORIES */}
      <section style={{ background: "var(--b-cream)", padding: "96px 32px", borderTop: "1.5px solid rgba(26,10,18,0.08)", borderBottom: "1.5px solid rgba(26,10,18,0.08)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p className="eyebrow">Recent winners — extended</p>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "12px 0 48px" }}>
            What it actually feels like to <span style={{ color: "var(--b-berry)" }}>get the call.</span>
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {pastWinners.slice(0, 4).map((w, i) => (
              <article
                key={w.date}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr auto",
                  gap: 32,
                  alignItems: "center",
                  background: i === 0 ? "var(--b-berry)" : "white",
                  color: i === 0 ? "var(--b-cream)" : "var(--b-ink)",
                  borderRadius: 12,
                  padding: 28,
                  border: i === 0 ? "none" : "1px solid rgba(26,10,18,0.08)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    background: i === 0
                      ? "linear-gradient(135deg, var(--b-gold) 0%, var(--b-cream) 100%)"
                      : "linear-gradient(135deg, var(--b-cream), var(--b-gold-soft))",
                    borderRadius: 8,
                  }}
                />
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, margin: 0, color: i === 0 ? "var(--b-gold)" : "var(--b-berry)" }}>
                    {w.date} · {w.state}
                  </p>
                  <h3 className="display-tight" style={{ fontSize: 28, margin: "8px 0" }}>
                    {w.name} won the {w.prize}.
                  </h3>
                  <p style={{ fontSize: 16, fontStyle: "italic", margin: 0, opacity: 0.85, lineHeight: 1.5 }}>
                    &ldquo;{w.quote}&rdquo;
                  </p>
                </div>
                <div style={{ textAlign: "right", fontFamily: "Bricolage Grotesque", fontWeight: 700 }}>
                  <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", margin: 0, opacity: 0.7 }}>Prize value</p>
                  <p className="display" style={{ fontSize: 36, margin: "4px 0 0", color: i === 0 ? "var(--b-gold)" : "var(--b-berry)" }}>
                    ${w.value.toLocaleString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY WIDGET */}
      <section style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>Where the membership fee goes</p>
            <p className="display" style={{ fontSize: 64, margin: "16px 0 12px" }}>
              ${charity.totalDonatedThisYear.toLocaleString()} <span style={{ fontSize: 24 }}>donated this year.</span>
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0 }}>{charity.story}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "var(--b-berry-deep)", color: "var(--b-cream)", borderRadius: 12, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>PER MEMBER</p>
              <p className="display" style={{ fontSize: 44, margin: "6px 0 0" }}>$5/mo</p>
            </div>
            <div style={{ background: "var(--b-berry-deep)", color: "var(--b-cream)", borderRadius: 12, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>PARTNER</p>
              <p className="display-tight" style={{ fontSize: 22, margin: "6px 0 0" }}>{charity.partner}</p>
            </div>
            <div style={{ gridColumn: "1 / 3", background: "var(--b-berry-deep)", color: "var(--b-cream)", borderRadius: 12, padding: 24 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>AUDITED</p>
              <p style={{ fontSize: 14, margin: "6px 0 0", lineHeight: 1.55 }}>
                Annual audit by Pitcher Partners. Quarterly statement emailed to all members. No threshold,
                no minimum, no excuses — $5 leaves WHV the day a member joins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="terms" style={{ maxWidth: 980, margin: "0 auto", padding: "72px 32px 96px" }}>
        <p className="eyebrow">Draw terms · summarised</p>
        <h2 className="display-tight" style={{ fontSize: "clamp(28px, 3vw, 44px)", margin: "12px 0 24px" }}>
          The fine print, in plain English.
        </h2>
        <ul style={{ paddingLeft: 18, fontSize: 16, lineHeight: 1.85, color: "var(--b-ink)" }}>
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
