import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentDraw, pastWinners, charity, getCountdown } from "../../../data/mock";

export default function DrawD() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <section style={{ background: "var(--d-violet)", color: "var(--d-cream)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -100, fontSize: 360, color: "rgba(245,197,24,0.08)", fontFamily: "Archivo Black", lineHeight: 0.8, pointerEvents: "none" }}>
          MAY
        </div>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "72px 32px 64px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <span className="pill" style={{ background: "var(--d-pink)", color: "var(--d-cream)" }}>
              ★ MAY 2026 · LIVE WED 8PM
            </span>
            <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 168px)", margin: "20px 0" }}>
              WIN THE APPLE BUNDLE. <br />
              OR TAKE <span style={{ color: "var(--d-gold)" }}>$2,000</span> CASH.
            </h1>
            <p style={{ fontSize: 19, color: "rgba(255,246,229,0.85)", maxWidth: 600, lineHeight: 1.55 }}>
              AirPods Max + Apple Watch Series 10. Or we drop $2,000 straight into your account. Drawn
              live on Instagram. Winner&rsquo;s phone rings before broadcast ends.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/d/memberships" className="btn btn-pink">
                Join from $2.49/wk
              </Link>
              <a href="#terms" className="btn btn-gold">
                Terms ↓
              </a>
            </div>
          </div>
          <div style={{ background: "var(--d-emerald-deep)", borderRadius: 28, padding: 36, border: "3px solid var(--d-ink)" }}>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>Closes</p>
            <p className="display" style={{ fontSize: 26, margin: "8px 0 24px" }}>{currentDraw.closesAt}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hrs" },
                { v: c.mins, l: "Min" },
                { v: c.secs, l: "Sec" },
              ].map((seg) => (
                <div key={seg.l} style={{ background: "var(--d-cream)", color: "var(--d-ink)", borderRadius: 14, padding: 14, textAlign: "center", border: "2px solid var(--d-ink)" }}>
                  <p className="display" style={{ fontSize: 36, margin: 0, lineHeight: 1, color: "var(--d-pink)" }}>
                    {String(seg.v).padStart(2, "0")}
                  </p>
                  <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--d-ink)", margin: "6px 0 0", fontWeight: 700 }}>
                    {seg.l}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "var(--d-pink)", color: "var(--d-cream)", borderRadius: 14, padding: 18, border: "2px solid var(--d-ink)" }}>
                <p className="eyebrow" style={{ color: "var(--d-gold)" }}>Total entries</p>
                <p className="display" style={{ fontSize: 32, margin: "6px 0 0" }}>{currentDraw.totalEntries.toLocaleString()}</p>
              </div>
              <div style={{ background: "var(--d-gold)", color: "var(--d-ink)", borderRadius: 14, padding: 18, border: "2px solid var(--d-ink)" }}>
                <p className="eyebrow">Luxe gives</p>
                <p className="display" style={{ fontSize: 32, margin: "6px 0 0", color: "var(--d-pink)" }}>+5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE TILES */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow" style={{ color: "var(--d-pink)" }}>In the prize pack</p>
        <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 100px)", margin: "12px 0 40px", maxWidth: 1200 }}>
          THREE PIECES. OR <span style={{ color: "var(--d-pink)" }}>$2,000.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { name: "AirPods Max", value: "$899", bg: "var(--d-pink)", text: "var(--d-cream)" },
            { name: "Apple Watch Series 10", value: "$849", bg: "var(--d-emerald)", text: "var(--d-gold)" },
            { name: "Or: $2,000 cash", value: "Pick one", bg: "var(--d-gold)", text: "var(--d-ink)" },
          ].map((p) => (
            <div key={p.name} style={{ background: p.bg, color: p.text, borderRadius: 28, padding: 36, minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "3px solid var(--d-ink)" }}>
              <p className="eyebrow">Prize component</p>
              <div>
                <h3 className="display" style={{ fontSize: 44, margin: "0 0 8px" }}>{p.name.toUpperCase()}</h3>
                <p style={{ fontSize: 14, opacity: 0.8, margin: 0 }}>RRP {p.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINNER STORIES */}
      <section style={{ background: "var(--d-cream)", padding: "96px 32px", borderTop: "3px solid var(--d-ink)", borderBottom: "3px solid var(--d-ink)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Recent winners — extended</p>
          <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "12px 0 56px" }}>
            WHAT IT FEELS LIKE TO <br /><span style={{ color: "var(--d-pink)" }}>GET THE CALL.</span>
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {pastWinners.slice(0, 4).map((w, i) => {
              const palettes = [
                { bg: "var(--d-pink)", fg: "var(--d-cream)", accent: "var(--d-gold)" },
                { bg: "var(--d-emerald)", fg: "var(--d-cream)", accent: "var(--d-gold)" },
                { bg: "var(--d-gold)", fg: "var(--d-ink)", accent: "var(--d-pink)" },
                { bg: "var(--d-violet)", fg: "var(--d-cream)", accent: "var(--d-pink)" },
              ];
              const pal = palettes[i];
              return (
                <article key={w.date} style={{ background: pal.bg, color: pal.fg, borderRadius: 28, padding: 36, border: "3px solid var(--d-ink)", display: "grid", gridTemplateColumns: "1.4fr 1fr auto", gap: 32, alignItems: "center" }}>
                  <div>
                    <p className="eyebrow" style={{ color: pal.accent, margin: 0 }}>{w.date} · {w.state}</p>
                    <h3 className="display" style={{ fontSize: 36, margin: "12px 0" }}>
                      {w.name.toUpperCase()} WON THE {w.prize.toUpperCase()}.
                    </h3>
                    <p style={{ fontSize: 16, fontStyle: "italic", margin: 0, opacity: 0.92, lineHeight: 1.5 }}>
                      &ldquo;{w.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p className="eyebrow" style={{ color: pal.accent, margin: 0 }}>Prize value</p>
                    <p className="display" style={{ fontSize: 56, margin: "8px 0 0", color: pal.accent }}>${w.value.toLocaleString()}</p>
                  </div>
                  <div className="display" style={{ fontSize: 100, lineHeight: 0.85, color: pal.accent, opacity: 0.7 }}>
                    {w.name.split(" ")[0][0]}
                    {w.name.split(" ")[1][0]}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--d-emerald-deep)", color: "var(--d-cream)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>Where the membership fee goes</p>
            <p className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "20px 0", lineHeight: 0.9 }}>
              ${charity.totalDonatedThisYear.toLocaleString()}<br /><span style={{ color: "var(--d-pink)" }}>DONATED.</span>
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,246,229,0.85)", margin: 0, maxWidth: 540 }}>{charity.story}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "var(--d-pink)", color: "var(--d-cream)", borderRadius: 24, padding: 28, border: "3px solid var(--d-ink)" }}>
              <p className="eyebrow" style={{ color: "var(--d-gold)" }}>PER MEMBER</p>
              <p className="display" style={{ fontSize: 48, margin: "8px 0 0" }}>$5/MO</p>
            </div>
            <div style={{ background: "var(--d-gold)", color: "var(--d-ink)", borderRadius: 24, padding: 28, border: "3px solid var(--d-ink)" }}>
              <p className="eyebrow" style={{ color: "var(--d-pink)" }}>PARTNER</p>
              <p className="display" style={{ fontSize: 22, margin: "8px 0 0" }}>{charity.partner.toUpperCase()}</p>
            </div>
            <div style={{ gridColumn: "1 / 3", background: "var(--d-cream)", color: "var(--d-ink)", borderRadius: 24, padding: 28, border: "3px solid var(--d-ink)" }}>
              <p className="eyebrow" style={{ color: "var(--d-pink)" }}>AUDITED</p>
              <p style={{ fontSize: 14, margin: "8px 0 0", lineHeight: 1.55 }}>
                Annual audit by Pitcher Partners. Quarterly statement emailed to all members. $5 leaves
                WHV the day a member joins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="terms" style={{ maxWidth: 980, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Draw terms · summarised</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "12px 0 24px" }}>
          THE FINE PRINT. <span style={{ color: "var(--d-pink)" }}>PLAIN ENGLISH.</span>
        </h2>
        <ul style={{ paddingLeft: 18, fontSize: 16, lineHeight: 1.85, color: "var(--d-ink)" }}>
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
