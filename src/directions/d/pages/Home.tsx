import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tiers, pastWinners, currentDraw, charity, partners, getCountdown } from "../../../data/mock";

export default function HomeD() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      {/* HERO — colour-block riot */}
      <section style={{ background: "var(--d-emerald)", color: "var(--d-cream)", position: "relative", overflow: "hidden" }}>
        {/* Big background type */}
        <div style={{ position: "absolute", top: 0, right: -80, fontSize: 360, color: "rgba(245,197,24,0.06)", fontFamily: "Archivo Black", lineHeight: 0.85, pointerEvents: "none", letterSpacing: "-0.04em" }}>
          MORE
        </div>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "72px 32px 64px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <span className="pill" style={{ background: "var(--d-pink)", color: "var(--d-cream)" }}>
              ★ MAY DRAW · WED 8PM AEST
            </span>
            <h1 className="display" style={{ fontSize: "clamp(72px, 12vw, 200px)", margin: "20px 0 28px", color: "var(--d-cream)" }}>
              FOR <span style={{ color: "var(--d-gold)" }}>WOMEN</span> WHO WANT <span style={{ color: "var(--d-pink-bright)" }}>MORE.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "rgba(255,246,229,0.85)", maxWidth: 560, margin: 0 }}>
              The lifestyle club drawing live every month. Apple. Cartier. LV. Cash. Plus partner
              discounts, charity transparency, and members-only events. <strong>From $2.49/week.</strong>
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <Link to="/d/memberships" className="btn btn-pink">
                Pick your tier →
              </Link>
              <Link to="/d/draw" className="btn btn-gold">
                Enter the may draw
              </Link>
            </div>
            <div style={{ marginTop: 56, display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              {[
                { v: "14,823", l: "Members" },
                { v: "$2.4M", l: "Given away" },
                { v: "4.9★", l: "1.2k reviews" },
                { v: "VIC TP/03720", l: "Licensed" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="display" style={{ fontSize: 28, margin: 0, color: "var(--d-gold)" }}>{s.v}</p>
                  <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "rgba(255,246,229,0.6)", margin: "2px 0 0", textTransform: "uppercase", fontWeight: 600 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PRICING STACK — chunky */}
          <div style={{ display: "grid", gap: 12 }}>
            {tiers.map((t, i) => (
              <Link
                key={t.id}
                to="/d/memberships"
                style={{
                  background: t.featured ? "var(--d-gold)" : i === 0 ? "var(--d-pink)" : "var(--d-violet)",
                  color: t.featured ? "var(--d-ink)" : "var(--d-cream)",
                  padding: 28,
                  borderRadius: 24,
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: t.featured ? "3px solid var(--d-ink)" : "3px solid transparent",
                  boxShadow: t.featured ? "0 8px 0 var(--d-emerald-deep)" : "none",
                  transform: t.featured ? "rotate(-1deg)" : "none",
                }}
              >
                <div>
                  <p className="eyebrow" style={{ margin: 0 }}>
                    Tier · {t.name} {t.featured && "★ MOST CHOSEN"}
                  </p>
                  <p className="display" style={{ fontSize: 36, margin: "8px 0 0" }}>{t.name}</p>
                  <p style={{ fontSize: 13, margin: "4px 0 0", opacity: 0.85 }}>
                    {t.entries} {t.entries > 1 ? "entries" : "entry"} · {t.bonusEntries} on signup
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="display" style={{ fontSize: 56, margin: 0, lineHeight: 1 }}>
                    ${t.weekly.toFixed(2)}
                    <span style={{ fontSize: 14, opacity: 0.7 }}>/wk</span>
                  </p>
                  <p style={{ fontSize: 12, opacity: 0.7, margin: "4px 0 0" }}>${t.monthly.toFixed(2)}/mo</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* COUNTDOWN STRIP */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 32px 32px",
            display: "flex",
            alignItems: "center",
            gap: 24,
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>
              Closing in
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,246,229,0.7)", margin: "4px 0 0" }}>
              {currentDraw.prize}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { v: c.days, l: "Days" },
              { v: c.hours, l: "Hrs" },
              { v: c.mins, l: "Min" },
              { v: c.secs, l: "Sec" },
            ].map((seg) => (
              <div
                key={seg.l}
                style={{
                  background: "var(--d-cream)",
                  color: "var(--d-emerald-deep)",
                  borderRadius: 16,
                  padding: "12px 22px",
                  minWidth: 88,
                  textAlign: "center",
                  border: "2px solid var(--d-ink)",
                  boxShadow: "0 4px 0 var(--d-pink)",
                }}
              >
                <p className="display" style={{ fontSize: 36, margin: 0, lineHeight: 1 }}>
                  {String(seg.v).padStart(2, "0")}
                </p>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", margin: "6px 0 0", textTransform: "uppercase", fontWeight: 700 }}>
                  {seg.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE TILES — bold colour-blocked */}
      <section style={{ background: "var(--d-cream)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Why women stay</p>
          <h2 className="display" style={{ fontSize: "clamp(48px, 8vw, 112px)", margin: "16px 0 56px", maxWidth: 1200 }}>
            Built for the women <br />
            <span style={{ color: "var(--d-pink)" }}>who joined.</span> Not the dudes <br />
            <span style={{ color: "var(--d-violet)" }}>who run lottery clubs.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { tag: "01", h: "Live monthly draws", body: "Apple. Cartier. Dyson. LV. Cash. Drawn live on IG. Winner&rsquo;s phone rings before broadcast ends.", bg: "var(--d-emerald)", text: "var(--d-cream)", accent: "var(--d-gold)" },
              { tag: "02", h: "Real partner discounts", body: "Aesop. Camilla & Marc. Bared. Rationale. Member pricing that pays your sub back twice over.", bg: "var(--d-pink)", text: "var(--d-cream)", accent: "var(--d-gold)" },
              { tag: "03", h: "$5/member to charity", body: `Direct to ${charity.partner}. $${charity.totalDonatedThisYear.toLocaleString()} this year. Visible on every dashboard.`, bg: "var(--d-violet)", text: "var(--d-cream)", accent: "var(--d-pink)" },
            ].map((t) => (
              <article key={t.tag} style={{ background: t.bg, color: t.text, padding: 36, borderRadius: 28, minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "3px solid var(--d-ink)" }}>
                <p className="display" style={{ fontSize: 120, margin: 0, color: t.accent, opacity: 0.95, lineHeight: 0.9 }}>{t.tag}</p>
                <div>
                  <h3 className="display" style={{ fontSize: 32, margin: "0 0 16px" }}>{t.h}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, opacity: 0.9 }} dangerouslySetInnerHTML={{ __html: t.body }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WINNERS WALL */}
      <section style={{ background: "var(--d-ink)", color: "var(--d-cream)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <div>
              <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Recent winners</p>
              <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "12px 0 0" }}>
                REAL WOMEN. <br />
                <span style={{ color: "var(--d-gold)" }}>REAL PRIZES.</span>
              </h2>
            </div>
            <Link to="/d/draw" className="btn btn-gold">
              All winners →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {pastWinners.slice(0, 6).map((w, i) => {
              const palettes = [
                { bg: "var(--d-pink)", accent: "var(--d-gold)" },
                { bg: "var(--d-violet)", accent: "var(--d-pink)" },
                { bg: "var(--d-emerald)", accent: "var(--d-gold)" },
                { bg: "var(--d-gold)", accent: "var(--d-pink)" },
                { bg: "var(--d-pink-bright)", accent: "var(--d-emerald)" },
                { bg: "var(--d-cream)", accent: "var(--d-pink)" },
              ];
              const pal = palettes[i % palettes.length];
              const isLight = i === 3 || i === 5;
              return (
                <article
                  key={w.date}
                  style={{
                    background: pal.bg,
                    color: isLight ? "var(--d-ink)" : "var(--d-cream)",
                    borderRadius: 24,
                    padding: 28,
                    border: "3px solid var(--d-ink)",
                    minHeight: 420,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p className="eyebrow" style={{ color: pal.accent, margin: 0 }}>{w.date}</p>
                    <p className="display" style={{ fontSize: 80, margin: "16px 0 8px", lineHeight: 0.85 }}>{w.name.split(" ")[0].toUpperCase()}<br /><span style={{ fontSize: 36, color: pal.accent }}>· {w.state}</span></p>
                    <p style={{ fontSize: 15, lineHeight: 1.5, margin: "16px 0 0", opacity: 0.9 }}>
                      Won the <strong>{w.prize}</strong> · valued ${w.value.toLocaleString()}
                    </p>
                  </div>
                  <p style={{ marginTop: 24, fontSize: 16, fontStyle: "italic", lineHeight: 1.5, color: pal.accent }}>
                    &ldquo;{w.quote}&rdquo;
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER WALL */}
      <section style={{ background: "var(--d-pink)", color: "var(--d-cream)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--d-gold)" }}>Partner brands</p>
          <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 100px)", margin: "16px 0 16px", maxWidth: 1100 }}>
            DISCOUNTS THAT PAY <br />
            <span style={{ color: "var(--d-gold)" }}>YOUR SUB BACK.</span> TWICE.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,246,229,0.85)", maxWidth: 720, marginBottom: 36 }}>
            Curated AU brands chosen for the women who joined. Use one discount, your month is paid for.
            Use three, you&rsquo;re ahead.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {partners.map((p) => (
              <div key={p.name} style={{ background: "var(--d-cream)", color: "var(--d-ink)", borderRadius: 18, padding: 22, border: "3px solid var(--d-ink)" }}>
                <p className="eyebrow" style={{ color: "var(--d-pink)" }}>{p.category}</p>
                <p className="display" style={{ fontSize: 24, margin: "8px 0 12px" }}>{p.name}</p>
                <p className="display" style={{ fontSize: 36, margin: 0, color: "var(--d-violet)" }}>
                  {p.discount}<span style={{ fontSize: 12 }}> off</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY HUGE */}
      <section style={{ background: "var(--d-gold)", color: "var(--d-ink)", padding: "120px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <p className="eyebrow">The charity moat</p>
            <h2 className="display" style={{ fontSize: "clamp(64px, 9vw, 152px)", margin: "20px 0", lineHeight: 0.9 }}>
              ${charity.totalDonatedThisYear.toLocaleString()}<br />
              <span style={{ color: "var(--d-pink)" }}>DONATED.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 540, margin: 0 }}>{charity.story}</p>
            <Link to="/d/draw" className="btn btn-emerald" style={{ marginTop: 28 }}>
              See the running total →
            </Link>
          </div>
          <div style={{ background: "var(--d-emerald-deep)", color: "var(--d-cream)", padding: 40, borderRadius: 28, border: "3px solid var(--d-ink)" }}>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>{charity.partner}</p>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 16 }}>
              National charity supporting women experiencing homelessness, domestic violence, and period
              poverty. WHV funds <strong>$5 per member, every month</strong> — no thresholds.
            </p>
            <div style={{ marginTop: 24, padding: "20px 0", borderTop: "1px solid rgba(255,246,229,0.2)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Per member</p>
                <p className="display" style={{ fontSize: 36, margin: "6px 0 0", color: "var(--d-gold)" }}>$5/MO</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Audited</p>
                <p style={{ fontSize: 14, margin: "6px 0 0" }}>Annually by Pitcher Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
