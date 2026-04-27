import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tiers, pastWinners, currentDraw, charity, partners, getCountdown } from "../../../data/mock";

export default function HomeB() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(140deg, var(--b-berry) 0%, var(--b-berry-deep) 100%)",
          color: "var(--b-cream)",
          paddingBottom: 64,
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "72px 32px 32px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <span className="chip" style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--b-berry-deep)" }} />
              May Draw · Live Wed 8pm
            </span>
            <h1
              className="display"
              style={{ fontSize: "clamp(56px, 9vw, 132px)", margin: "24px 0", color: "var(--b-cream)" }}
            >
              The club <br /> for women <br /> who want <span style={{ color: "var(--b-gold)" }}>more.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(255,247,242,0.85)", maxWidth: 540, margin: 0 }}>
              Monthly luxury draws. Partner-brand discounts that actually save you money. A women&rsquo;s
              charity funded $5 per member, every month. From <strong>$2.49/week</strong>.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/b/memberships" className="btn btn-gold">
                Pick your tier · From $2.49/wk
              </Link>
              <Link to="/b/draw" className="btn btn-cream">
                Enter this month&rsquo;s draw →
              </Link>
            </div>
          </div>

          {/* PRICING CARD STACK */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {tiers.map((t) => (
              <Link
                key={t.id}
                to="/b/memberships"
                style={{
                  background: t.featured ? "var(--b-gold)" : "var(--b-cream)",
                  color: t.featured ? "var(--b-berry-deep)" : "var(--b-ink)",
                  padding: 24,
                  borderRadius: 8,
                  textDecoration: "none",
                  border: t.featured ? "2px solid var(--b-gold)" : "1px solid rgba(255,247,242,0.2)",
                  transform: t.featured ? "translateY(-12px)" : "none",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 240,
                }}
              >
                {t.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      left: 16,
                      background: "var(--b-berry)",
                      color: "var(--b-gold)",
                      padding: "4px 10px",
                      borderRadius: 999,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                    }}
                  >
                    BESTSELLER
                  </span>
                )}
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                    {t.name}
                  </p>
                  <p className="display" style={{ fontSize: 38, margin: "12px 0 0", lineHeight: 1 }}>
                    ${t.weekly.toFixed(2)}
                    <span style={{ fontSize: 14, fontWeight: 500, opacity: 0.6 }}>/wk</span>
                  </p>
                  <p style={{ fontSize: 12, opacity: 0.65, margin: "4px 0 0" }}>
                    ${t.monthly.toFixed(2)}/mo
                  </p>
                </div>
                <p style={{ fontSize: 13, margin: 0, lineHeight: 1.4 }}>
                  {t.entries} {t.entries > 1 ? "entries" : "entry"} per draw
                  {t.featured && <strong> · most chosen</strong>}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* COUNTDOWN STRIP */}
        <div
          style={{
            maxWidth: 1320,
            margin: "16px auto 0",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>
              Closing in
            </p>
            <p style={{ fontSize: 14, margin: "4px 0 0", color: "rgba(255,247,242,0.7)" }}>
              {currentDraw.prize}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { v: c.days, l: "D" },
              { v: c.hours, l: "H" },
              { v: c.mins, l: "M" },
              { v: c.secs, l: "S" },
            ].map((seg) => (
              <div
                key={seg.l}
                style={{
                  background: "rgba(255,247,242,0.08)",
                  border: "1px solid rgba(255,247,242,0.18)",
                  borderRadius: 8,
                  padding: "12px 18px",
                  minWidth: 70,
                  textAlign: "center",
                }}
              >
                <p className="display" style={{ fontSize: 32, margin: 0, lineHeight: 1 }}>
                  {String(seg.v).padStart(2, "0")}
                </p>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", margin: "6px 0 0", opacity: 0.6 }}>
                  {seg.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "var(--b-cream)", padding: "32px 32px", borderBottom: "1px solid rgba(26,10,18,0.08)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
          {[
            { v: "14,823", l: "Members" },
            { v: "$2.4M", l: "Given away (3 yrs)" },
            { v: "4.9 / 5", l: "1,200+ reviews" },
            { v: charity.partner, l: "Charity partner" },
            { v: "VIC TP/03720", l: "Licensed" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p className="display" style={{ fontSize: 24, margin: 0, color: "var(--b-berry)" }}>
                {s.v}
              </p>
              <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--b-mute)", margin: "6px 0 0" }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THE PITCH — 3 BIG TILES */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Three reasons women stay</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "16px 0 56px", maxWidth: 1100 }}>
          Built for the women who joined. <span style={{ color: "var(--b-berry)" }}>Not the dudes who run lottery clubs.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { tag: "01", h: "Live monthly draws", colour: "var(--b-berry)", text: "var(--b-cream)", body: "Apple, Cartier, Dyson, LV, cash. Drawn live on Instagram. Winner&rsquo;s phone rings before the broadcast ends." },
            { tag: "02", h: "Real partner discounts", colour: "var(--b-gold)", text: "var(--b-berry-deep)", body: "Aesop. Camilla & Marc. Bared. Rationale. Member-only pricing that pays your subscription back twice over." },
            { tag: "03", h: "$5/member to charity", colour: "var(--b-cream)", text: "var(--b-berry-deep)", body: `Funded directly to ${charity.partner}. $${charity.totalDonatedThisYear.toLocaleString()} this year and counting.`, border: true },
          ].map((t) => (
            <div
              key={t.tag}
              style={{
                background: t.colour,
                color: t.text,
                padding: 36,
                borderRadius: 12,
                minHeight: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: t.border ? "1.5px solid var(--b-berry)" : "none",
              }}
            >
              <p className="display" style={{ fontSize: 88, margin: 0, opacity: 0.18, lineHeight: 1 }}>{t.tag}</p>
              <div>
                <h3 className="display-tight" style={{ fontSize: 30, margin: "0 0 16px" }}>{t.h}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, opacity: 0.9 }} dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WINNERS GRID */}
      <section style={{ background: "var(--b-berry-deep)", color: "var(--b-cream)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <div>
              <p style={{ color: "var(--b-gold)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                Recent winners
              </p>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "12px 0 0" }}>
                Real members. <span style={{ color: "var(--b-gold)" }}>Real prizes.</span>
              </h2>
            </div>
            <Link to="/b/draw" className="btn btn-gold">
              See all winners →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {pastWinners.slice(0, 6).map((w) => (
              <article key={w.date} style={{ background: "rgba(255,247,242,0.05)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,247,242,0.1)" }}>
                <div
                  style={{
                    aspectRatio: "5 / 4",
                    background: "linear-gradient(135deg, var(--b-berry) 0%, var(--b-gold) 100%)",
                    borderRadius: 8,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 16,
                  }}
                >
                  <span className="display" style={{ fontSize: 48, color: "rgba(255,247,242,0.4)" }}>
                    {w.name.split(" ")[0]}
                  </span>
                </div>
                <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-gold)", textTransform: "uppercase", margin: 0 }}>
                  {w.date}
                </p>
                <p className="display-tight" style={{ fontSize: 22, margin: "8px 0 4px" }}>
                  {w.name} · {w.state}
                </p>
                <p style={{ fontSize: 14, color: "rgba(255,247,242,0.75)", margin: "0 0 12px" }}>
                  {w.prize} · ${w.value.toLocaleString()}
                </p>
                <p style={{ fontSize: 14, fontStyle: "italic", color: "var(--b-gold-soft)", margin: 0, lineHeight: 1.5 }}>
                  &ldquo;{w.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Partner brands</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "12px 0 16px", maxWidth: 900 }}>
          Discounts that pay your subscription back. <span style={{ color: "var(--b-berry)" }}>Twice over.</span>
        </h2>
        <p style={{ color: "var(--b-mute)", maxWidth: 720, fontSize: 16, lineHeight: 1.6 }}>
          A curated network of Australian brands chosen for the women who joined. Use one discount and
          your month is paid for. Use three and you&rsquo;re ahead.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 36 }}>
          {partners.map((p) => (
            <div
              key={p.name}
              style={{
                background: "var(--b-cream)",
                border: "1.5px solid var(--b-berry)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-mute)", textTransform: "uppercase", margin: 0, fontWeight: 600 }}>
                {p.category}
              </p>
              <p className="display-tight" style={{ fontSize: 24, margin: "8px 0 8px", color: "var(--b-berry)" }}>{p.name}</p>
              <p className="display" style={{ fontSize: 28, margin: 0, color: "var(--b-gold)" }}>{p.discount}<span style={{ fontSize: 12, fontWeight: 500, opacity: 0.6 }}> off</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* CHARITY BLOCK */}
      <section style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
              The charity moat
            </p>
            <h2 className="display" style={{ fontSize: "clamp(44px, 6vw, 88px)", margin: "16px 0" }}>
              ${charity.totalDonatedThisYear.toLocaleString()} <br /> donated <br /> this year.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 520, margin: 0 }}>
              {charity.story}
            </p>
            <Link to="/b/draw" className="btn btn-berry" style={{ marginTop: 28 }}>
              See the running total →
            </Link>
          </div>
          <div style={{ background: "var(--b-berry-deep)", color: "var(--b-cream)", padding: 40, borderRadius: 16 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>
              {charity.partner}
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 16 }}>
              National charity supporting women experiencing homelessness, domestic violence, and period
              poverty. WinHerVault funds a fixed $5 per member, every month — no thresholds, no minimums,
              no excuses.
            </p>
            <div style={{ marginTop: 24, padding: "20px 0", borderTop: "1px solid rgba(255,247,242,0.2)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>PER MEMBER</p>
                <p className="display" style={{ fontSize: 32, margin: "6px 0 0" }}>$5/mo</p>
              </div>
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>AUDITED</p>
                <p style={{ fontSize: 14, margin: "6px 0 0" }}>Annually by Pitcher Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
