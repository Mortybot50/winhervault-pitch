import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tiers, pastWinners, currentDraw, charity, getCountdown } from "../../../data/mock";

export default function HomeC() {
  const [c, setC] = useState(getCountdown());
  useEffect(() => {
    const i = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ background: "var(--c-ivory)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 32px 72px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow">A members&rsquo; club, est. 2024</p>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 116px)", margin: "24px 0", fontWeight: 300 }}>
              For the woman <br />
              <em style={{ fontStyle: "italic", color: "var(--c-sage-deep)" }}>who wants</em> more — <br />
              told softly.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--c-ink-soft)", maxWidth: 540, margin: 0 }}>
              Monthly luxury draws. Quietly curated partner discounts. A women&rsquo;s charity funded
              transparently, every month. Three tiers, from $2.49 a week.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <Link to="/c/memberships" className="btn btn-ink">
                See the tiers · From $2.49/wk
              </Link>
              <Link to="/c/draw" className="btn btn-ghost">
                This month&rsquo;s draw
              </Link>
            </div>
          </div>

          <div className="quiet-card" style={{ background: "var(--c-powder)", padding: 36, border: "none" }}>
            <p className="eyebrow">Three tiers, one door.</p>
            <p className="display" style={{ fontSize: 30, margin: "12px 0 24px", fontStyle: "italic", fontWeight: 300 }}>
              Pick yours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {tiers.map((t) => (
                <Link
                  key={t.id}
                  to="/c/memberships"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: t.featured ? "var(--c-ivory)" : "rgba(248,244,237,0.5)",
                    borderRadius: 999,
                    textDecoration: "none",
                    color: "var(--c-ink)",
                    border: t.featured ? "1px solid var(--c-ink)" : "1px solid transparent",
                  }}
                >
                  <div>
                    <p className="display" style={{ fontSize: 22, margin: 0, fontStyle: t.featured ? "italic" : "normal" }}>
                      {t.name}
                      {t.featured && <span className="eyebrow" style={{ marginLeft: 10, fontSize: 10 }}>most chosen</span>}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--c-mute)", margin: "2px 0 0" }}>
                      {t.entries} {t.entries > 1 ? "entries" : "entry"} per draw
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="display" style={{ fontSize: 24, margin: 0, fontStyle: "italic" }}>
                      ${t.weekly.toFixed(2)}
                      <span style={{ fontSize: 12, fontStyle: "normal", color: "var(--c-mute)" }}>/wk</span>
                    </p>
                    <p style={{ fontSize: 11, margin: 0, color: "var(--c-mute)" }}>${t.monthly.toFixed(2)}/mo</p>
                  </div>
                </Link>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--c-mute)", marginTop: 18, textAlign: "center" }}>
              Pause, swap, cancel from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTDOWN STRIP — soft */}
      <section style={{ background: "var(--c-sage)", color: "var(--c-ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow">Next live draw</p>
            <p className="display" style={{ fontSize: 26, margin: "6px 0 0", fontStyle: "italic", fontWeight: 400 }}>
              {currentDraw.prize}
            </p>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { v: c.days, l: "Days" },
              { v: c.hours, l: "Hrs" },
              { v: c.mins, l: "Min" },
              { v: c.secs, l: "Sec" },
            ].map((seg) => (
              <div key={seg.l} style={{ textAlign: "center" }}>
                <p className="display" style={{ fontSize: 38, margin: 0, lineHeight: 1, fontWeight: 300 }}>
                  {String(seg.v).padStart(2, "0")}
                </p>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", margin: "6px 0 0", color: "var(--c-ink-soft)" }}>
                  {seg.l}
                </p>
              </div>
            ))}
          </div>
          <Link to="/c/draw" className="btn" style={{ background: "var(--c-ivory)", color: "var(--c-ink)" }}>
            Enter this draw →
          </Link>
        </div>
      </section>

      {/* THE THREE — soft cards */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 32px" }}>
        <p className="eyebrow">What you join</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 56px", maxWidth: 920, fontWeight: 300 }}>
          A club designed with <em style={{ fontStyle: "italic" }}>care,</em> not noise.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { h: "Live monthly draws.", body: "Apple, Cartier, Dyson, LV, cash. Drawn live on Instagram. The winner&rsquo;s phone rings before broadcast ends.", bg: "var(--c-blush)" },
            { h: "Curated partners.", body: "Aesop. Camilla & Marc. Bared. Rationale. Member pricing chosen for the women who joined — not as a wallpaper of logos.", bg: "var(--c-sand)" },
            { h: "$5 to charity, every month.", body: `Funded directly to ${charity.partner}. $${charity.totalDonatedThisYear.toLocaleString()} delivered this year. Visible on every dashboard.`, bg: "var(--c-sage)" },
          ].map((b, i) => (
            <article key={i} style={{ background: b.bg, padding: 36, borderRadius: 24, minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p className="display" style={{ fontSize: 96, margin: 0, opacity: 0.4, fontStyle: "italic", fontWeight: 300 }}>0{i + 1}</p>
              <div>
                <h3 className="display" style={{ fontSize: 28, margin: "0 0 12px", fontWeight: 400 }}>{b.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, color: "var(--c-ink-soft)" }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL — quiet large quote */}
      <section style={{ background: "var(--c-powder)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
          <p className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.35, margin: 0, fontStyle: "italic", fontWeight: 300, color: "var(--c-ink)" }}>
            &ldquo;I&rsquo;d been a member four months. I&rsquo;d honestly stopped expecting it. Then my phone rang.&rdquo;
          </p>
          <p className="eyebrow" style={{ marginTop: 32 }}>
            Janaya W. · NSW · Won the LV bundle, February 2026
          </p>
        </div>
      </section>

      {/* WINNERS GRID — soft images */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p className="eyebrow">Recent winners</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 0", fontWeight: 300 }}>
              Real members. <em style={{ fontStyle: "italic" }}>Real prizes.</em>
            </h2>
          </div>
          <Link to="/c/draw" className="btn btn-ghost">
            See all winners →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {pastWinners.slice(0, 6).map((w, i) => (
            <article key={w.date} style={{ background: "var(--c-ivory)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(58,58,54,0.06)" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  background: i % 3 === 0
                    ? "linear-gradient(135deg, var(--c-blush) 0%, var(--c-sand) 100%)"
                    : i % 3 === 1
                    ? "linear-gradient(135deg, var(--c-sage) 0%, var(--c-sand) 100%)"
                    : "linear-gradient(135deg, var(--c-sand) 0%, var(--c-powder) 100%)",
                  position: "relative",
                }}
              >
                <span className="display" style={{ position: "absolute", bottom: 24, left: 24, fontSize: 80, color: "rgba(58,58,54,0.18)", fontStyle: "italic", fontWeight: 300 }}>
                  {w.name.split(" ")[0]}
                </span>
              </div>
              <div style={{ padding: 24 }}>
                <p className="eyebrow">{w.date} · {w.state}</p>
                <p className="display" style={{ fontSize: 22, margin: "10px 0", fontWeight: 400 }}>
                  {w.name} · <em>{w.prize}</em>
                </p>
                <p style={{ fontSize: 13, color: "var(--c-mute)", margin: 0 }}>Valued ${w.value.toLocaleString()}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--c-sage)", color: "var(--c-ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow">The charity model</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 24px", fontWeight: 300 }}>
              <em style={{ fontStyle: "italic" }}>$5</em> from every member, <br /> every month, to {charity.partner}.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--c-ink-soft)", margin: 0, maxWidth: 540 }}>
              {charity.story}
            </p>
            <Link to="/c/draw" className="btn btn-ink" style={{ marginTop: 28 }}>
              See the running total →
            </Link>
          </div>
          <div className="quiet-card" style={{ background: "var(--c-ivory)", padding: 56, textAlign: "center", border: "none" }}>
            <p className="eyebrow">Year to date</p>
            <p className="display" style={{ fontSize: "clamp(72px, 11vw, 132px)", margin: "16px 0", lineHeight: 1, fontStyle: "italic", fontWeight: 300 }}>
              ${charity.totalDonatedThisYear.toLocaleString()}
            </p>
            <p className="eyebrow">donated to {charity.partner}</p>
            <p style={{ marginTop: 24, color: "var(--c-mute)", fontSize: 13 }}>
              Updated daily · Audited annually
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
