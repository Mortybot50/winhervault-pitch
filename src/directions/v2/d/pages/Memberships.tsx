import { Link } from "react-router-dom";
import { getV2Tiers } from "../../../../data/mock";

export default function MembershipsV2D() {
  const tiers = getV2Tiers("d");
  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow">Membership</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 128px)", margin: "20px 0 32px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            Three rooms. <em className="display-italic">Same circle.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", maxWidth: 600, margin: 0, lineHeight: 1.75 }}>
            Same five-dollar contribution from every tier. Different perks, entries, and access. Cancel anytime, no fee.
          </p>
        </div>
      </section>

      <section id="join" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="three-grid">
          {tiers.map((t) => (
            <article
              key={t.id}
              style={{
                background: t.featured ? "var(--d2-paper)" : "transparent",
                padding: "56px 40px",
                borderRight: "1px solid var(--d2-rule)",
                borderBottom: "1px solid var(--d2-rule)",
                borderTop: "1px solid var(--d2-rule)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
                <p className="display" style={{ fontSize: 88, margin: 0, lineHeight: 1 }}>{t.name}</p>
                {t.featured && <span className="eyebrow">Featured</span>}
              </div>
              <p style={{ fontSize: 16, color: "var(--d2-ink-soft)", margin: "0 0 32px", lineHeight: 1.7 }}>{t.tagline}</p>
              <p className="display" style={{ fontSize: 36, margin: "0 0 4px" }}>
                ${t.weekly.toFixed(2)}<span style={{ fontSize: 13, color: "var(--d2-mute)" }}>/wk</span>
              </p>
              <p className="eyebrow" style={{ margin: "0 0 32px" }}>${t.monthly.toFixed(2)}/month · cancel anytime</p>
              <Link
                to="/v2/d/login"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginBottom: 40 }}
              >
                Choose {t.name}
              </Link>
              <hr className="rule" style={{ marginBottom: 28 }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2 }}>
                {t.perks.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "start", gap: 12, padding: "6px 0" }}>
                    <span style={{ color: "var(--d2-mute)", fontSize: 12, paddingTop: 6 }}>—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--d2-stone)", padding: "120px 0", borderTop: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px" }}>
          <p className="eyebrow">Comparison</p>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 56px" }}>
            Side <em className="display-italic">by side.</em>
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--d2-ink)" }}>
                <th style={{ textAlign: "left", padding: "20px 12px", fontWeight: 400, fontFamily: "Tenor Sans", fontSize: 16 }}>Perk</th>
                {tiers.map((t) => (
                  <th key={t.id} style={{ textAlign: "center", padding: "20px 12px", fontFamily: "Tenor Sans", fontSize: 28, fontWeight: 400 }}>
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
                { perk: "Event RSVP", v: ["Standing", "Priority", "First access"] },
                { perk: "Quarterly object", v: ["—", "✓", "✓"] },
                { perk: "Annual object", v: ["—", "—", "✓"] },
                { perk: "Concierge", v: ["—", "—", "Named"] },
              ].map((row) => (
                <tr key={row.perk} style={{ borderBottom: "1px solid var(--d2-rule)" }}>
                  <td style={{ padding: "18px 12px", color: "var(--d2-ink-soft)" }}>{row.perk}</td>
                  {row.v.map((cell, i) => (
                    <td key={i} style={{ padding: "18px 12px", textAlign: "center" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "120px 40px" }}>
        <p className="eyebrow">Questions</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 64px" }}>
          You ask, <em className="display-italic">we answer.</em>
        </h2>
        {[
          { q: "Can I cancel anytime?", a: "Yes. One click in your dashboard. No fee, no fine print." },
          { q: "Where does the $5 actually go?", a: "Four Australian women's charities. Reported on every dashboard. Audited annually." },
          { q: "Are the discount codes real?", a: "Yes. Twelve curated Australian brands, refreshed quarterly. Most members recoup the membership in the first month." },
          { q: "How are the prizes drawn?", a: "Random selection from active member entries, witnessed and recorded weekly. Wins paid within 7 days." },
          { q: "Is this a lottery?", a: "It's a members club with a giveaway component. Membership is the product. Entries are a member benefit." },
        ].map((f, i) => (
          <details key={i} style={{ borderTop: "1px solid var(--d2-rule)", padding: "32px 0", cursor: "pointer" }}>
            <summary className="display" style={{ fontSize: 24, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {f.q}
              <span style={{ color: "var(--d2-mute)", fontSize: 24 }}>+</span>
            </summary>
            <p style={{ marginTop: 20, color: "var(--d2-ink-soft)", lineHeight: 1.8, fontSize: 15 }}>{f.a}</p>
          </details>
        ))}
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2d .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
