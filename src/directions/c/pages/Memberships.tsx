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

export default function MembershipsC() {
  return (
    <div>
      <section style={{ background: "var(--c-ivory)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px 32px" }}>
          <p className="eyebrow">Membership</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 104px)", margin: "20px 0 28px", maxWidth: 1100, fontWeight: 300 }}>
            Three tiers. <em style={{ fontStyle: "italic" }}>One door.</em> Pause anytime.
          </h1>
          <p style={{ fontSize: 18, color: "var(--c-ink-soft)", maxWidth: 720, lineHeight: 1.65, margin: 0 }}>
            Pricing on the table. Weekly framing because that&rsquo;s how it actually feels. Side-by-side
            comparison, told quietly so you can decide without pressure.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {tiers.map((t) => (
            <div
              key={t.id}
              style={{
                background: t.featured ? "var(--c-ink)" : t.id === "insider" ? "var(--c-blush)" : "var(--c-sand)",
                color: t.featured ? "var(--c-ivory)" : "var(--c-ink)",
                borderRadius: 24,
                padding: 36,
                position: "relative",
                minHeight: 600,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {t.featured && (
                <span style={{ position: "absolute", top: -14, left: 28, background: "var(--c-sage)", color: "var(--c-ink)", padding: "6px 14px", borderRadius: 999, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase" }}>
                  Most chosen
                </span>
              )}
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", margin: 0, opacity: 0.75 }}>{t.name}</p>
                <h2 className="display" style={{ fontSize: 64, margin: "12px 0 8px", fontStyle: t.featured ? "italic" : "normal", fontWeight: 300 }}>
                  {t.name}
                </h2>
                <p style={{ fontSize: 14.5, opacity: 0.85, margin: 0, lineHeight: 1.55 }}>{t.blurb}</p>
                <div style={{ marginTop: 28, marginBottom: 24, padding: "20px 0", borderTop: "1px solid currentColor", borderBottom: "1px solid currentColor", opacity: 0.95 }}>
                  <p className="display" style={{ fontSize: 56, margin: 0, lineHeight: 1, fontStyle: "italic", fontWeight: 300 }}>
                    ${t.weekly.toFixed(2)}
                    <span style={{ fontSize: 16, opacity: 0.7, fontStyle: "normal" }}> /week</span>
                  </p>
                  <p style={{ fontSize: 13, margin: "8px 0 0", opacity: 0.7 }}>
                    Billed ${t.monthly.toFixed(2)} per month
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.perks.map((p) => (
                    <li key={p} style={{ fontSize: 14.5, lineHeight: 1.55, paddingLeft: 22, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 9, width: 12, height: 1, background: "currentColor", opacity: 0.5 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/c/dashboard" className="btn" style={{ marginTop: 28, width: "100%", justifyContent: "center", background: t.featured ? "var(--c-ivory)" : "var(--c-ink)", color: t.featured ? "var(--c-ink)" : "var(--c-ivory)" }}>
                Choose {t.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px 64px" }}>
        <p className="eyebrow">Side-by-side</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 40px", fontWeight: 300 }}>
          What you get, <em style={{ fontStyle: "italic" }}>by tier.</em>
        </h2>
        <div style={{ overflowX: "auto", background: "var(--c-ivory)", border: "1px solid rgba(58,58,54,0.10)", borderRadius: 20 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "20px 24px", borderBottom: "1px solid rgba(58,58,54,0.10)", fontWeight: 400 }}></th>
                {tiers.map((t) => (
                  <th key={t.id} style={{ textAlign: "left", padding: "20px 24px", borderBottom: "1px solid rgba(58,58,54,0.10)", fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 400 }}>
                    <em style={{ fontStyle: "italic" }}>{t.name}</em>
                    <span style={{ display: "block", fontSize: 12, fontFamily: "DM Sans, sans-serif", color: "var(--c-mute)", marginTop: 4, fontStyle: "normal" }}>
                      ${t.weekly.toFixed(2)}/wk
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.label} style={{ background: i % 2 ? "rgba(58,58,54,0.02)" : "transparent" }}>
                  <td style={{ padding: "18px 24px", color: "var(--c-ink-soft)" }}>{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ padding: "18px 24px" }}>
                      {v === true ? (
                        <span style={{ color: "var(--c-sage-deep)" }}>Included</span>
                      ) : v === false ? (
                        <span style={{ color: "var(--c-mute)" }}>—</span>
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
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 0", fontWeight: 300 }}>
              Before you join, <em style={{ fontStyle: "italic" }}>answers.</em>
            </h2>
          </div>
          <div>
            {[
              { q: "How are draws conducted?", a: "Live on Instagram every Wednesday at 8pm AEST, with a third-party random draw service. Recordings stay up." },
              { q: "Can I cancel?", a: "Yes — anytime, from your dashboard. No phone calls, no scripts. Keep entries you've already accumulated." },
              { q: "Is the charity money real?", a: "Yes. $5 of every monthly subscription goes directly to Share The Dignity. Updated daily, audited annually." },
              { q: "Why women specifically?", a: "Because no one in the AU lottery-club category has built one for us. Prize curation, partners, charity choice and tone all designed for the women who joined." },
            ].map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid rgba(58,58,54,0.10)", padding: "28px 0" }}>
                <summary className="display" style={{ fontSize: 22, listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", fontWeight: 400 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "var(--c-sage-deep)" }}>+</span>
                </summary>
                <p style={{ marginTop: 14, color: "var(--c-ink-soft)", fontSize: 15, lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
