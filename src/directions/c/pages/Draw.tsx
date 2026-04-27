import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentDraw, pastWinners, charity, getCountdown } from "../../../data/mock";

export default function DrawC() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <section style={{ background: "var(--c-ivory)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 32px 56px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow">May 2026 · Live draw</p>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 108px)", margin: "20px 0 28px", fontWeight: 300 }}>
              Win the Apple bundle <em style={{ fontStyle: "italic" }}>or take</em> the cash.
            </h1>
            <p style={{ fontSize: 18, color: "var(--c-ink-soft)", maxWidth: 560, lineHeight: 1.65 }}>
              AirPods Max, Apple Watch Series 10, packaged ready to ship. Or $2,000 cash dropped
              straight into your account. Drawn live on Instagram by our team.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/c/memberships" className="btn btn-ink">
                Become a member · enter draws
              </Link>
              <a href="#terms" className="btn btn-ghost">
                Read the terms ↓
              </a>
            </div>
          </div>

          <div style={{ background: "var(--c-powder)", borderRadius: 24, padding: 36 }}>
            <p className="eyebrow">Closes</p>
            <p className="display" style={{ fontSize: 22, margin: "8px 0 28px", fontStyle: "italic", fontWeight: 400 }}>
              {currentDraw.closesAt}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, padding: "20px 0", borderTop: "1px solid rgba(58,58,54,0.20)", borderBottom: "1px solid rgba(58,58,54,0.20)" }}>
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hrs" },
                { v: c.mins, l: "Min" },
                { v: c.secs, l: "Sec" },
              ].map((seg) => (
                <div key={seg.l} style={{ textAlign: "center" }}>
                  <p className="display" style={{ fontSize: 40, margin: 0, lineHeight: 1, fontStyle: "italic", fontWeight: 300 }}>
                    {String(seg.v).padStart(2, "0")}
                  </p>
                  <p className="eyebrow" style={{ fontSize: 10, marginTop: 6 }}>
                    {seg.l}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "var(--c-ivory)", borderRadius: 16, padding: 18 }}>
                <p className="eyebrow">Total entries</p>
                <p className="display" style={{ fontSize: 30, margin: "6px 0 0", fontWeight: 300 }}>
                  {currentDraw.totalEntries.toLocaleString()}
                </p>
              </div>
              <div style={{ background: "var(--c-ivory)", borderRadius: 16, padding: 18 }}>
                <p className="eyebrow">If you join Luxe</p>
                <p className="display" style={{ fontSize: 30, margin: "6px 0 0", fontWeight: 300 }}>
                  +5 entries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE TILES */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">In the prize pack</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "12px 0 40px", fontWeight: 300, maxWidth: 1000 }}>
          Three pieces. Or <em style={{ fontStyle: "italic" }}>two thousand reasons</em> to take the cash.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { name: "AirPods Max", value: "$899", bg: "var(--c-blush)" },
            { name: "Apple Watch Series 10", value: "$849", bg: "var(--c-sand)" },
            { name: "Or take the cash", value: "$2,000", bg: "var(--c-sage)" },
          ].map((p) => (
            <div key={p.name} style={{ background: p.bg, borderRadius: 24, padding: 32, minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p className="eyebrow">Prize component</p>
              <div>
                <h3 className="display" style={{ fontSize: 32, margin: "0 0 8px", fontWeight: 300 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "var(--c-ink-soft)", margin: 0 }}>RRP {p.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINNER STORIES */}
      <section style={{ background: "var(--c-sand)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 32px" }}>
          <p className="eyebrow">Recent winners — extended</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 56px", fontWeight: 300 }}>
            What it actually feels like to <em style={{ fontStyle: "italic" }}>get the call.</em>
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
                  borderTop: "1px solid rgba(58,58,54,0.18)",
                  paddingTop: 36,
                }}
              >
                <div style={{ order: i % 2 ? 2 : 1 }}>
                  <p className="eyebrow">{w.date} · {w.state}</p>
                  <h3 className="display" style={{ fontSize: 36, margin: "12px 0", fontWeight: 300 }}>
                    {w.name} won the <em>{w.prize}</em>.
                  </h3>
                  <p className="display" style={{ fontSize: 24, lineHeight: 1.4, fontStyle: "italic", color: "var(--c-sage-deep)", margin: 0, fontWeight: 300 }}>
                    &ldquo;{w.quote}&rdquo;
                  </p>
                  <p style={{ color: "var(--c-mute)", fontSize: 13, marginTop: 16 }}>
                    Prize valued ${w.value.toLocaleString()} · drawn live · randomdraw.com.au verified
                  </p>
                </div>
                <div
                  style={{
                    order: i % 2 ? 1 : 2,
                    aspectRatio: "4 / 5",
                    borderRadius: 24,
                    background: i === 0
                      ? "linear-gradient(135deg, var(--c-blush) 0%, var(--c-sand) 100%)"
                      : i === 1
                      ? "linear-gradient(135deg, var(--c-sage) 0%, var(--c-ivory) 100%)"
                      : "linear-gradient(135deg, var(--c-powder) 0%, var(--c-blush) 100%)",
                    position: "relative",
                  }}
                >
                  <span className="display" style={{ position: "absolute", bottom: 32, left: 32, fontSize: 88, color: "rgba(58,58,54,0.16)", fontStyle: "italic", fontWeight: 300 }}>
                    {w.name.split(" ")[0]}.
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--c-sage)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <p className="eyebrow">Where the membership fee goes</p>
            <p className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 16px", fontWeight: 300 }}>
              <em style={{ fontStyle: "italic" }}>${charity.totalDonatedThisYear.toLocaleString()}</em> donated this year.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--c-ink-soft)", margin: 0 }}>
              {charity.story}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "var(--c-ivory)", borderRadius: 20, padding: 28 }}>
              <p className="eyebrow">Per member</p>
              <p className="display" style={{ fontSize: 40, margin: "8px 0 0", fontStyle: "italic", fontWeight: 300 }}>$5/mo</p>
            </div>
            <div style={{ background: "var(--c-ivory)", borderRadius: 20, padding: 28 }}>
              <p className="eyebrow">Partner</p>
              <p className="display" style={{ fontSize: 22, margin: "8px 0 0", fontWeight: 400 }}>{charity.partner}</p>
            </div>
            <div style={{ gridColumn: "1 / 3", background: "var(--c-ivory)", borderRadius: 20, padding: 28 }}>
              <p className="eyebrow">Audited</p>
              <p style={{ fontSize: 14, margin: "8px 0 0", color: "var(--c-ink-soft)" }}>
                Annual audit by Pitcher Partners. Quarterly statement emailed to all members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="terms" style={{ maxWidth: 980, margin: "0 auto", padding: "96px 32px 96px" }}>
        <p className="eyebrow">Draw terms · summarised</p>
        <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", margin: "12px 0 24px", fontWeight: 300 }}>
          The fine print, in plain English.
        </h2>
        <ul style={{ paddingLeft: 18, color: "var(--c-ink-soft)", fontSize: 15.5, lineHeight: 1.85, margin: 0 }}>
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
