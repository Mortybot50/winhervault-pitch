import { Link } from "react-router-dom";
import { tiers } from "../../../data/mock";

const compareRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Entries per monthly draw", values: ["1", "5", "12"] },
  { label: "Bonus entries on signup", values: ["100", "500", "1,000"] },
  { label: "Partner discount tier", values: ["10%", "15%", "30%"] },
  { label: "Live event access", values: [false, "Priority", "Invitation"] },
  { label: "Quarterly drop", values: [false, true, true] },
  { label: "Annual luxury gift", values: [false, false, true] },
  { label: "Personal concierge", values: [false, false, true] },
  { label: "Cancel anytime", values: [true, true, true] },
];

const tierBg: Record<string, { bg: string; fg: string; accent: string }> = {
  insider: { bg: "var(--d-pink)", fg: "var(--d-cream)", accent: "var(--d-gold)" },
  luxe: { bg: "var(--d-gold)", fg: "var(--d-ink)", accent: "var(--d-pink)" },
  icon: { bg: "var(--d-violet)", fg: "var(--d-cream)", accent: "var(--d-gold)" },
};

export default function MembershipsD() {
  return (
    <div>
      <section style={{ background: "var(--d-emerald)", color: "var(--d-cream)", paddingBottom: 96 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 32px 32px" }}>
          <span className="pill" style={{ background: "var(--d-pink)", color: "var(--d-cream)" }}>
            ★ PRICING — OUT FRONT, WHERE IT BELONGS
          </span>
          <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 168px)", margin: "20px 0 24px", maxWidth: 1300 }}>
            THREE TIERS. <br />
            ONE DOOR. <br />
            <span style={{ color: "var(--d-gold)" }}>CANCEL ANYTIME.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,246,229,0.85)", maxWidth: 720, lineHeight: 1.6 }}>
            Weekly framing because that&rsquo;s how it actually feels. Side-by-side because you
            shouldn&rsquo;t have to second-guess. Same access for everyone — just more entries, deeper
            discounts, more club benefits as you climb.
          </p>
        </div>

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {tiers.map((t) => {
              const pal = tierBg[t.id];
              return (
                <div
                  key={t.id}
                  style={{
                    background: pal.bg,
                    color: pal.fg,
                    borderRadius: 28,
                    padding: 36,
                    position: "relative",
                    marginTop: t.featured ? -32 : 0,
                    border: "3px solid var(--d-ink)",
                    boxShadow: t.featured ? "0 12px 0 var(--d-pink)" : "0 8px 0 rgba(0,0,0,0.3)",
                    transform: t.featured ? "rotate(-1deg)" : "none",
                    minHeight: 600,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {t.featured && (
                    <span style={{ position: "absolute", top: -18, left: 24, background: "var(--d-ink)", color: "var(--d-gold)", padding: "8px 18px", borderRadius: 999, fontSize: 11, letterSpacing: "0.24em", fontWeight: 700 }}>
                      ★ BESTSELLER
                    </span>
                  )}
                  <div>
                    <p className="eyebrow" style={{ margin: 0 }}>Tier · {t.name}</p>
                    <h2 className="display" style={{ fontSize: 88, margin: "12px 0 8px", color: pal.accent }}>
                      {t.name}
                    </h2>
                    <p style={{ fontSize: 14.5, opacity: 0.85, margin: 0, lineHeight: 1.55 }}>{t.blurb}</p>
                    <div style={{ marginTop: 28, marginBottom: 28, padding: "20px 0", borderTop: "2px solid currentColor", borderBottom: "2px solid currentColor" }}>
                      <p className="display" style={{ fontSize: 76, margin: 0, lineHeight: 1, color: pal.accent }}>
                        ${t.weekly.toFixed(2)}
                        <span style={{ fontSize: 18, fontWeight: 500, opacity: 0.7 }}>/WK</span>
                      </p>
                      <p style={{ fontSize: 13, opacity: 0.7, margin: "8px 0 0" }}>
                        ${t.monthly.toFixed(2)}/month · {t.bonusEntries} bonus entries on signup
                      </p>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                      {t.perks.map((p) => (
                        <li key={p} style={{ fontSize: 14.5, lineHeight: 1.5, paddingLeft: 28, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, top: 2, width: 18, height: 18, borderRadius: "50%", background: pal.accent, color: pal.bg, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>★</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/d/dashboard" className="btn" style={{ marginTop: 28, width: "100%", justifyContent: "center", background: "var(--d-ink)", color: "var(--d-cream)" }}>
                    Choose {t.name} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "96px 32px 64px" }}>
        <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Side-by-side</p>
        <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 100px)", margin: "12px 0 40px" }}>
          WHAT YOU GET, <br />
          <span style={{ color: "var(--d-pink)" }}>BY TIER.</span>
        </h2>
        <div style={{ overflowX: "auto", background: "var(--d-cream)", border: "3px solid var(--d-ink)", borderRadius: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ background: "var(--d-ink)", color: "var(--d-cream)" }}>
                <th style={{ textAlign: "left", padding: "20px 24px" }}></th>
                {tiers.map((t) => (
                  <th key={t.id} style={{ textAlign: "left", padding: "20px 24px", fontFamily: "Archivo Black", fontSize: 26 }}>
                    {t.name.toUpperCase()}
                    <span style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--d-gold)", letterSpacing: "0.16em", marginTop: 4, fontFamily: "Plus Jakarta Sans" }}>
                      ${t.weekly.toFixed(2)} / WK
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.label} style={{ background: i % 2 ? "rgba(229,38,122,0.04)" : "transparent" }}>
                  <td style={{ padding: "20px 24px", fontWeight: 600 }}>{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ padding: "20px 24px" }}>
                      {v === true ? (
                        <span style={{ background: "var(--d-pink)", color: "var(--d-cream)", padding: "6px 14px", borderRadius: 999, fontSize: 11, letterSpacing: "0.16em", fontWeight: 700 }}>★ YES</span>
                      ) : v === false ? (
                        <span style={{ color: "rgba(8,8,12,0.4)" }}>—</span>
                      ) : (
                        <strong style={{ fontSize: 16 }}>{v}</strong>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Common questions</p>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "12px 0 0" }}>
              BEFORE YOU JOIN, <br /><span style={{ color: "var(--d-pink)" }}>ANSWERS.</span>
            </h2>
          </div>
          <div>
            {[
              { q: "How are draws conducted?", a: "Live on Instagram every Wednesday at 8pm AEST, with a third-party random draw service (randomdraw.com.au). Recordings stay up afterwards." },
              { q: "Can I cancel?", a: "Yes — anytime, from your dashboard. No phone calls, no scripts. Keep entries you've already accumulated for the month you're paid up to." },
              { q: "Is the charity money real?", a: "Yes. $5 of every monthly subscription goes directly to Share The Dignity. Updated daily, audited annually by Pitcher Partners." },
              { q: "Why women specifically?", a: "Because no one in the AU lottery-club category has built one for us. Prize curation, partners, charity choice and tone are all designed for the audience that joined." },
            ].map((f) => (
              <details key={f.q} style={{ borderBottom: "2px solid var(--d-ink)", padding: "24px 0" }}>
                <summary className="display" style={{ fontSize: 24, listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                  <span>{f.q.toUpperCase()}</span>
                  <span style={{ color: "var(--d-pink)" }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7, color: "var(--d-ink)", opacity: 0.85 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
