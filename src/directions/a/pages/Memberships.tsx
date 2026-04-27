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

export default function MembershipsA() {
  return (
    <div>
      <section style={{ borderBottom: "1px solid rgba(17,17,17,0.12)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 48px" }}>
          <p className="eyebrow">Membership</p>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 24px", maxWidth: 1000 }}>
            Three tiers. <em className="italic-display">One door.</em> Pause or cancel anytime.
          </h1>
          <p style={{ fontSize: 18, color: "var(--a-ink-soft)", maxWidth: 700, margin: 0, lineHeight: 1.6 }}>
            Pricing on the table from the first scroll. Weekly framing because that&rsquo;s how it
            actually feels. Side-by-side comparison so you don&rsquo;t need to second-guess.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {tiers.map((t) => (
            <div
              key={t.id}
              style={{
                background: t.featured ? "var(--a-ink)" : "var(--a-paper)",
                color: t.featured ? "var(--a-paper)" : "var(--a-ink)",
                border: "1px solid " + (t.featured ? "var(--a-ink)" : "rgba(17,17,17,0.10)"),
                padding: 36,
                position: "relative",
              }}
            >
              {t.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: -14,
                    left: 24,
                    background: "var(--a-gold)",
                    color: "var(--a-ink)",
                    padding: "6px 14px",
                    fontSize: 11,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Most chosen
                </span>
              )}
              <p className="eyebrow" style={{ color: t.featured ? "var(--a-gold)" : "var(--a-mute)" }}>
                Tier · {t.name}
              </p>
              <h2 className="serif" style={{ fontSize: 46, margin: "12px 0" }}>
                {t.name}
              </h2>
              <p style={{ fontSize: 14, opacity: 0.8, margin: 0 }}>{t.blurb}</p>
              <div style={{ marginTop: 28, marginBottom: 28, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20 }}>
                <p className="serif" style={{ fontSize: 56, margin: 0, lineHeight: 1 }}>
                  ${t.weekly.toFixed(2)}
                  <span style={{ fontSize: 18, opacity: 0.7 }}> /week</span>
                </p>
                <p style={{ fontSize: 13, opacity: 0.7, margin: "6px 0 0" }}>
                  Billed ${t.monthly.toFixed(2)} per month
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {t.perks.map((p) => (
                  <li key={p} style={{ fontSize: 14, lineHeight: 1.5, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 6, width: 8, height: 1, background: "currentColor", opacity: 0.6 }} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/a/dashboard"
                className="btn"
                style={{
                  marginTop: 32,
                  width: "100%",
                  justifyContent: "center",
                  background: t.featured ? "var(--a-paper)" : "var(--a-ink)",
                  color: t.featured ? "var(--a-ink)" : "var(--a-paper)",
                }}
              >
                Choose {t.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section style={{ background: "var(--a-cream)", borderTop: "1px solid rgba(17,17,17,0.10)", borderBottom: "1px solid rgba(17,17,17,0.10)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px" }}>
          <p className="eyebrow">Compare side-by-side</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 40px" }}>
            What you get, by tier.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "16px 12px", borderBottom: "1px solid var(--a-rule)", fontWeight: 400 }}></th>
                  {tiers.map((t) => (
                    <th
                      key={t.id}
                      style={{
                        textAlign: "left",
                        padding: "16px 12px",
                        borderBottom: "1px solid var(--a-rule)",
                        fontFamily: "Playfair Display, serif",
                        fontSize: 22,
                        fontWeight: 500,
                      }}
                    >
                      {t.name}
                      <span style={{ display: "block", fontSize: 12, color: "var(--a-mute)", fontFamily: "Inter, sans-serif" }}>
                        ${t.weekly.toFixed(2)}/wk
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 ? "transparent" : "rgba(17,17,17,0.02)" }}>
                    <td style={{ padding: "16px 12px", color: "var(--a-ink-soft)" }}>{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} style={{ padding: "16px 12px" }}>
                        {v === true ? (
                          <span style={{ color: "var(--a-spot)" }}>Included</span>
                        ) : v === false ? (
                          <span style={{ color: "var(--a-mute)" }}>—</span>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64 }}>
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 0" }}>
              Before you join, <em className="italic-display">answers.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                q: "How are draws conducted?",
                a: "Live on Instagram, every Wednesday at 8pm AEST, using a third-party random draw service (randomdraw.com.au). Recordings stay up afterwards.",
              },
              {
                q: "Can I cancel?",
                a: "Yes — anytime, from your dashboard. No phone calls, no scripts. You keep entries you've already accumulated for the month you're paid up to.",
              },
              {
                q: "Is the charity money real?",
                a: `Yes. $5 of every monthly subscription goes directly to ${"Share The Dignity"}. The running total updates daily and is audited annually.`,
              },
              {
                q: "Why women specifically?",
                a: "Because no one else in the AU lottery-club category has built one for us. Prize curation, partner brands, charity choice and tone all designed for the audience that joined.",
              },
            ].map((f) => (
              <details
                key={f.q}
                style={{ borderBottom: "1px solid rgba(17,17,17,0.10)", padding: "24px 0" }}
              >
                <summary
                  className="serif"
                  style={{ fontSize: 22, listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                >
                  <span>{f.q}</span>
                  <span style={{ color: "var(--a-spot)" }}>+</span>
                </summary>
                <p style={{ marginTop: 14, color: "var(--a-ink-soft)", fontSize: 15.5, lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
