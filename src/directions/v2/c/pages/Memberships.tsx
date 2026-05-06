import { Link } from "react-router-dom";
import { getV2Tiers } from "../../../../data/mock";

export default function MembershipsV2C() {
  const tiers = getV2Tiers("c");
  return (
    <div>
      <section style={{ background: "var(--c2-cream-warm)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <span className="pill">Pricing</span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px" }}>
            Pick your <em className="display-italic" style={{ color: "var(--c2-berry)" }}>room.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Three tiers. Same charity contribution. Different perks, entries, and access. Cancel anytime — no questions.
          </p>
        </div>
      </section>

      <section id="join" style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {tiers.map((t) => (
            <article
              key={t.id}
              className="card"
              style={{
                background: t.featured ? "var(--c2-berry)" : "var(--c2-paper)",
                color: t.featured ? "var(--c2-cream)" : "var(--c2-ink)",
                padding: 36,
                position: "relative",
                border: t.featured ? "none" : "1px solid var(--c2-rule)",
                boxShadow: t.featured ? "0 24px 60px rgba(90,21,48,0.25)" : undefined,
              }}
            >
              {t.featured && (
                <span className="pill" style={{ background: "var(--c2-gold)", color: "var(--c2-berry-deep)", marginBottom: 20 }}>
                  Bestseller
                </span>
              )}
              <h2 className="display" style={{ fontSize: 38, margin: t.featured ? "0 0 6px" : "0 0 6px" }}>{t.name}</h2>
              <p style={{ fontSize: 14, opacity: 0.85, margin: "0 0 28px", lineHeight: 1.5 }}>{t.tagline}</p>
              <p className="display" style={{ fontSize: 56, margin: "0 0 4px", lineHeight: 1 }}>
                ${t.weekly.toFixed(2)}<span style={{ fontSize: 14, opacity: 0.7 }}>/wk</span>
              </p>
              <p style={{ fontSize: 12, opacity: 0.7, margin: "0 0 28px" }}>${t.monthly.toFixed(2)}/month · cancel anytime</p>
              <Link
                to="/v2/c/login"
                className="btn"
                style={{
                  background: t.featured ? "var(--c2-gold)" : "var(--c2-berry)",
                  color: t.featured ? "var(--c2-berry-deep)" : "var(--c2-cream)",
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                Join {t.name} →
              </Link>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2 }}>
                {t.perks.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "start", gap: 10, padding: "4px 0" }}>
                    <span style={{ color: t.featured ? "var(--c2-gold)" : "var(--c2-berry)", fontSize: 14, fontWeight: 700 }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--c2-cream)", padding: "80px 0", borderTop: "1px solid var(--c2-rule)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "0 0 48px" }}>
            Compare <em className="display-italic" style={{ color: "var(--c2-berry)" }}>side by side.</em>
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--c2-berry)" }}>
                  <th style={{ textAlign: "left", padding: "16px 12px", fontWeight: 600 }}>Perks</th>
                  {tiers.map((t) => (
                    <th key={t.id} style={{ textAlign: "center", padding: "16px 12px", fontFamily: "Bricolage Grotesque", fontSize: 18, color: t.featured ? "var(--c2-berry)" : "var(--c2-ink)" }}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { perk: "Entries per draw", v: tiers.map((t) => `${t.entries}`) },
                  { perk: "Charity contribution", v: tiers.map(() => "$5/mo") },
                  { perk: "Brand discounts", v: ["Preview", "Full vault", "Full vault"] },
                  { perk: "Event RSVP", v: ["Open invite", "Priority", "First access"] },
                  { perk: "Quarterly drop", v: ["—", "✓", "✓"] },
                  { perk: "Annual gift", v: ["—", "—", "✓"] },
                  { perk: "Concierge", v: ["—", "—", "✓"] },
                ].map((row) => (
                  <tr key={row.perk} style={{ borderBottom: "1px solid var(--c2-rule)" }}>
                    <td style={{ padding: "14px 12px", color: "var(--c2-ink-soft)" }}>{row.perk}</td>
                    {row.v.map((cell, i) => (
                      <td key={i} style={{ padding: "14px 12px", textAlign: "center" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Questions</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: "12px 0 48px" }}>
          You ask, <em className="display-italic" style={{ color: "var(--c2-berry)" }}>we answer.</em>
        </h2>
        {[
          { q: "Can I cancel anytime?", a: "Yes. One click in your dashboard. No fee, no fine print, no follow-up email begging you to stay." },
          { q: "Where does the $5 actually go?", a: "Four Australian women's charities. Reported on every dashboard. Audited annually. We will publish the books." },
          { q: "Are the discount codes real?", a: "Yes — twelve curated Australian brands. Standing 10–25% off, refreshed quarterly. Most members recoup their fee in the first month." },
          { q: "How are the prizes drawn?", a: "Random selection from active member entries, witnessed and recorded weekly. Wins are announced live, paid within 7 days." },
          { q: "Is this a lottery?", a: "It's a members club with a giveaway component. Membership is the product — you're paying for perks, not entries. Entries are a member benefit." },
        ].map((f, i) => (
          <details key={i} style={{ borderTop: "1px solid var(--c2-rule)", padding: "24px 0", cursor: "pointer" }}>
            <summary className="display" style={{ fontSize: 22, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {f.q}
              <span style={{ color: "var(--c2-berry)", fontSize: 26 }}>+</span>
            </summary>
            <p style={{ marginTop: 16, color: "var(--c2-ink-soft)", lineHeight: 1.7 }}>{f.a}</p>
          </details>
        ))}
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2c .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
