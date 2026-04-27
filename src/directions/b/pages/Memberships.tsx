import { Link } from "react-router-dom";
import { tiers } from "../../../data/mock";

const compareRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Entries per monthly draw", values: ["1", "5", "12"] },
  { label: "Bonus entries on signup", values: ["100", "500", "1,000"] },
  { label: "Partner discount tier", values: ["10%", "15%", "30%"] },
  { label: "Quarterly self-care drop", values: [false, true, true] },
  { label: "Live event access", values: [false, "Priority", "Invitation"] },
  { label: "Personal concierge", values: [false, false, true] },
  { label: "Annual luxury gift", values: [false, false, true] },
  { label: "Cancel anytime", values: [true, true, true] },
];

export default function MembershipsB() {
  return (
    <div>
      <section style={{ background: "var(--b-berry)", color: "var(--b-cream)", paddingBottom: 96 }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "72px 32px 32px" }}>
          <span className="chip" style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)" }}>
            Pricing — out front, where it belongs
          </span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 132px)", margin: "24px 0 24px", maxWidth: 1100 }}>
            Three tiers. <br />
            One door. <br />
            <span style={{ color: "var(--b-gold)" }}>Cancel anytime.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,247,242,0.85)", maxWidth: 700, lineHeight: 1.6 }}>
            Weekly framing because that&rsquo;s how it actually feels. Side-by-side so you don&rsquo;t
            need to second-guess. Same access for everyone — just more entries, deeper discounts, more
            club benefits as you climb.
          </p>
        </div>

        {/* Tier cards floating into a white section */}
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {tiers.map((t) => (
              <div
                key={t.id}
                style={{
                  background: t.featured ? "var(--b-gold)" : "var(--b-cream)",
                  color: t.featured ? "var(--b-berry-deep)" : "var(--b-ink)",
                  borderRadius: 16,
                  padding: 36,
                  position: "relative",
                  marginTop: t.featured ? -32 : 0,
                  boxShadow: t.featured ? "0 24px 48px rgba(0,0,0,0.25)" : "0 12px 24px rgba(0,0,0,0.10)",
                }}
              >
                {t.featured && (
                  <span style={{ position: "absolute", top: -14, left: 24, background: "var(--b-berry-deep)", color: "var(--b-gold)", padding: "6px 14px", fontSize: 11, letterSpacing: "0.24em", borderRadius: 999, fontWeight: 700 }}>
                    BESTSELLER
                  </span>
                )}
                <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                  Tier {t.name}
                </p>
                <h2 className="display" style={{ fontSize: 56, margin: "12px 0 8px" }}>
                  {t.name}
                </h2>
                <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>{t.blurb}</p>
                <div style={{ marginTop: 28, marginBottom: 28, padding: "20px 0", borderTop: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor", borderColor: t.featured ? "var(--b-berry-deep)" : "var(--b-berry)" }}>
                  <p className="display" style={{ fontSize: 64, margin: 0, lineHeight: 1 }}>
                    ${t.weekly.toFixed(2)}
                    <span style={{ fontSize: 16, opacity: 0.7, fontWeight: 500 }}>/week</span>
                  </p>
                  <p style={{ fontSize: 13, opacity: 0.7, margin: "8px 0 0" }}>
                    Billed ${t.monthly.toFixed(2)} per month · {t.bonusEntries} bonus entries on signup
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.perks.map((p) => (
                    <li key={p} style={{ fontSize: 14.5, lineHeight: 1.5, paddingLeft: 24, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 4, width: 16, height: 16, borderRadius: "50%", background: t.featured ? "var(--b-berry-deep)" : "var(--b-berry)", color: t.featured ? "var(--b-gold)" : "var(--b-cream)", fontSize: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/b/dashboard" className="btn" style={{ marginTop: 32, width: "100%", justifyContent: "center", background: t.featured ? "var(--b-berry-deep)" : "var(--b-berry)", color: t.featured ? "var(--b-gold)" : "var(--b-cream)" }}>
                  Choose {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "96px 32px 64px" }}>
        <p className="eyebrow">Side-by-side</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "12px 0 40px" }}>
          What you get, by tier.
        </h2>
        <div style={{ overflowX: "auto", background: "var(--b-cream)", border: "1.5px solid var(--b-berry)", borderRadius: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ background: "var(--b-berry)", color: "var(--b-cream)" }}>
                <th style={{ textAlign: "left", padding: "20px 20px" }}></th>
                {tiers.map((t) => (
                  <th key={t.id} style={{ textAlign: "left", padding: "20px 20px", fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 24 }}>
                    {t.name}
                    <span style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--b-gold)", letterSpacing: "0.12em", marginTop: 4 }}>
                      ${t.weekly.toFixed(2)} /WK
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.label} style={{ background: i % 2 ? "rgba(90,21,48,0.04)" : "transparent" }}>
                  <td style={{ padding: "18px 20px", fontWeight: 500 }}>{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ padding: "18px 20px" }}>
                      {v === true ? (
                        <span style={{ background: "var(--b-berry)", color: "var(--b-gold)", padding: "4px 10px", borderRadius: 999, fontSize: 11, letterSpacing: "0.16em", fontWeight: 700 }}>YES</span>
                      ) : v === false ? (
                        <span style={{ color: "var(--b-mute)" }}>—</span>
                      ) : (
                        <strong>{v}</strong>
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
      <section style={{ background: "var(--b-cream)", maxWidth: 1320, margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 0" }}>
              Before you join, <span style={{ color: "var(--b-berry)" }}>answers.</span>
            </h2>
          </div>
          <div>
            {[
              { q: "How are draws conducted?", a: "Live on Instagram every Wednesday at 8pm AEST, with a third-party random draw service (randomdraw.com.au). Recordings stay up afterwards." },
              { q: "Can I cancel?", a: "Yes — anytime, from your dashboard. No phone calls, no scripts. Keep entries you've already accumulated." },
              { q: "Is the charity money real?", a: "Yes. $5 of every monthly subscription goes directly to Share The Dignity. Updated daily, audited annually." },
              { q: "Why women specifically?", a: "Because no one in the AU lottery-club category has built one for us. Prize curation, partners, charity choice and tone are all designed for the audience that joined." },
            ].map((f) => (
              <details key={f.q} style={{ borderBottom: "1.5px solid rgba(90,21,48,0.15)", padding: "24px 0" }}>
                <summary className="display-tight" style={{ fontSize: 22, listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                  <span>{f.q}</span>
                  <span style={{ color: "var(--b-berry)", fontWeight: 700 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "var(--b-mute)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
