import { Link } from "react-router-dom";
import { finalTiers } from "../../../data/finalMock";

const COMPARISON = [
  { feature: "Entries per weekly draw", insider: "1", edit: "5", circle: "12" },
  { feature: "Members-only newsletter", insider: "✓", edit: "✓", circle: "✓" },
  { feature: "Discount vault — 8 brand partners", insider: "Preview", edit: "Full", circle: "Full" },
  { feature: "Event RSVP", insider: "Open invitation", edit: "Priority", circle: "First-access" },
  { feature: "Quarterly Edit drop", insider: "—", edit: "✓", circle: "✓" },
  { feature: "Personal concierge", insider: "—", edit: "—", circle: "✓" },
  { feature: "Annual signature gift", insider: "—", edit: "—", circle: "✓" },
  { feature: "$5 to Share The Dignity each month", insider: "✓", edit: "✓", circle: "✓" },
] as const;

const FAQ = [
  {
    q: "How does the weekly draw work?",
    a: "Each week we run one giveaway. Insider members get one entry; The Edit gets five; Circle gets twelve. Drawn live on Instagram every Wednesday at 8pm AEST.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard with one click. No retention call, no question. You stay a member until your billing period ends.",
  },
  {
    q: "Where does the charity money go?",
    a: "$5 of every membership goes directly to Share The Dignity. We publish the running total on every member dashboard and on our charity page.",
  },
  {
    q: "Do discount codes work alongside sales?",
    a: "Most yes — terms vary by partner. Codes refresh quarterly with new partners rotated in.",
  },
  {
    q: "Is this a lottery?",
    a: "No. Members get entries to giveaways as a perk. The product is the membership — discounts, events, community. Giveaways are one of four reasons people stay.",
  },
] as const;

export default function MembershipsFinal() {
  return (
    <>
      {/* HERO */}
      <section className="final-hero">
        <div className="final-container">
          <span className="final-eyebrow">— Memberships</span>
          <h1 className="final-display final-display-xl" style={{ marginTop: 16, maxWidth: 1280 }}>
            Three weekly tiers.<br /><span style={{ color: "var(--hot)" }}>One circle.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, marginTop: 32 }}>
            Cancel anytime. Founding members keep their tier price for life. The first week is on us.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="final-section" style={{ paddingTop: 0 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-tiers-grid">
            {finalTiers.map((t) => (
              <article key={t.id} className={`final-pricing-card ${t.featured ? "featured" : ""}`}>
                {t.featured && <div className="final-pricing-best">Best value</div>}
                <div>
                  <div className="final-eyebrow" style={{ color: t.featured ? "var(--hot)" : "var(--muted)" }}>
                    {t.id}
                  </div>
                  <h3 className="final-display final-display-lg" style={{ marginTop: 12, color: t.featured ? "var(--cream)" : "var(--ink)" }}>
                    {t.name}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, opacity: t.featured ? 0.8 : 0.78, margin: "12px 0 0" }}>
                    {t.tagline}
                  </p>
                </div>
                <div style={{ borderTop: t.featured ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--rule)", paddingTop: 24 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span className="final-display" style={{ fontSize: 64, color: t.featured ? "var(--cream)" : "var(--ink)" }}>
                      ${t.weekly.toFixed(2)}
                    </span>
                    <span className="final-eyebrow" style={{ color: t.featured ? "rgba(255,241,227,0.7)" : "var(--muted)" }}>
                      / week
                    </span>
                  </div>
                  <div style={{ fontSize: 12, opacity: t.featured ? 0.6 : 0.55, marginTop: 6 }}>
                    Approx ${(t.weekly * 4.33).toFixed(2)} / month · billed monthly
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.perks.map((p) => (
                    <li key={p} style={{ fontSize: 14, lineHeight: 1.55, paddingLeft: 22, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--hot)" }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
                <Link to="/final/login" className={t.featured ? "final-cta" : "final-cta-ghost"} style={t.featured ? {} : { borderColor: t.featured ? "var(--cream)" : "var(--ink)" }}>
                  Choose {t.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="final-section" style={{ background: "#fff" }}>
        <div className="final-container">
          <span className="final-eyebrow">— Compare tiers</span>
          <h2 className="final-display final-display-lg" style={{ marginTop: 12, marginBottom: 48 }}>
            Side by side.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Raleway, sans-serif", minWidth: 640 }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid var(--ink)" }}>
                  <th style={{ textAlign: "left", padding: "16px 12px", fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>Feature</th>
                  {finalTiers.map((t) => (
                    <th key={t.id} style={{ textAlign: "left", padding: "16px 12px" }}>
                      <div className="final-display" style={{ fontSize: 22 }}>{t.name}</div>
                      <div className="final-eyebrow" style={{ color: "var(--muted)", marginTop: 4 }}>${t.weekly.toFixed(2)}/wk</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid var(--rule)" }}>
                    <td style={{ padding: "18px 12px", fontSize: 14, color: "var(--ink-soft)" }}>{row.feature}</td>
                    <td style={{ padding: "18px 12px", fontSize: 14 }}>{row.insider}</td>
                    <td style={{ padding: "18px 12px", fontSize: 14, fontWeight: 600 }}>{row.edit}</td>
                    <td style={{ padding: "18px 12px", fontSize: 14 }}>{row.circle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="final-section">
        <div className="final-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
          <div>
            <span className="final-eyebrow">— FAQ</span>
            <h2 className="final-display final-display-lg" style={{ marginTop: 12 }}>
              Questions, answered.
            </h2>
            <Link to="/final/charity" className="final-cta-text" style={{ marginTop: 24 }}>Read about the charity →</Link>
          </div>
          <div>
            {FAQ.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid var(--rule)", padding: "24px 0" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {f.q}
                  <span style={{ color: "var(--hot)", fontFamily: "Anton, sans-serif", fontSize: 24 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) {
          .final-tiers-grid { grid-template-columns: 1fr !important; }
          .final-section [style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  );
}
