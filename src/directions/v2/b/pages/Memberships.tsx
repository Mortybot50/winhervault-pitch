import { Link } from "react-router-dom";
import { getV2Tiers } from "../../../../data/mock";

export default function MembershipsV2B() {
  const tiers = getV2Tiers("b");
  return (
    <div>
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">Membership</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Three rooms in <em className="display-italic">the Haus.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--b2-ink-soft)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Same door, three places to sit. No lock-in, weekly pricing, cancel anytime.
          </p>
        </div>
      </section>

      <section id="join" style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {tiers.map((t) => (
            <article
              key={t.id}
              className="card"
              style={{
                background: t.featured ? "var(--b2-ink)" : "var(--b2-paper)",
                color: t.featured ? "var(--b2-paper)" : "var(--b2-ink)",
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {t.featured && (
                <p className="eyebrow" style={{ color: "var(--b2-blush)", position: "absolute", top: 24, right: 32 }}>
                  Most chosen
                </p>
              )}
              <p className="eyebrow" style={{ color: t.featured ? "var(--b2-blush)" : undefined }}>{t.tagline}</p>
              <h2 className="display" style={{ fontSize: 44, margin: "12px 0 16px" }}>{t.name}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: t.featured ? "rgba(250,246,238,0.8)" : "var(--b2-ink-soft)", margin: "0 0 24px" }}>
                {t.description}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "0 0 8px" }}>
                <span className="display" style={{ fontSize: 56, lineHeight: 1 }}>${t.weekly.toFixed(2)}</span>
                <span style={{ fontSize: 14, opacity: 0.7 }}>/wk</span>
              </div>
              <p style={{ fontSize: 13, margin: "0 0 28px", color: t.featured ? "rgba(250,246,238,0.65)" : "var(--b2-mute)" }}>
                ${t.monthly.toFixed(2)}/month · billed monthly
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
                {t.perks.map((p, i) => (
                  <li
                    key={p}
                    style={{
                      padding: "12px 0",
                      borderTop: i === 0 ? (t.featured ? "1px solid rgba(250,246,238,0.18)" : "1px solid var(--b2-rule)") : "1px solid transparent",
                      borderBottom: t.featured ? "1px solid rgba(250,246,238,0.10)" : "1px solid var(--b2-rule)",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/v2/b/dashboard"
                className="btn"
                style={{
                  background: t.featured ? "var(--b2-paper)" : "var(--b2-ink)",
                  color: t.featured ? "var(--b2-ink)" : "var(--b2-paper)",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: 999,
                }}
              >
                Choose {t.name}
              </Link>
            </article>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 36, fontSize: 13, color: "var(--b2-mute)" }}>
          Cancel any time · pause for up to 90 days · no surprise fees
        </p>
      </section>

      {/* COMPARISON */}
      <section style={{ background: "var(--b2-paper)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">Compare</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 48px" }}>
            Side <em className="display-italic">by side.</em>
          </h2>
          <div className="card" style={{ background: "var(--b2-sand)", padding: 0, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "20px 24px", borderBottom: "1px solid var(--b2-rule)" }}></th>
                  {tiers.map((t) => (
                    <th key={t.id} className="display" style={{ textAlign: "left", padding: "20px 24px", borderBottom: "1px solid var(--b2-rule)", fontSize: 22 }}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { l: "Entries per draw", v: ["1", "5", "12"] },
                  { l: "Discount vault", v: ["Preview", "Full", "Full + early access"] },
                  { l: "Quarterly Haus drop", v: ["—", "✓", "✓"] },
                  { l: "Event RSVP", v: ["Standing invite", "Priority", "First access"] },
                  { l: "Personal concierge", v: ["—", "—", "✓"] },
                ].map((row) => (
                  <tr key={row.l}>
                    <td style={{ padding: "16px 24px", borderTop: "1px solid var(--b2-rule)", color: "var(--b2-ink-soft)" }}>
                      {row.l}
                    </td>
                    {row.v.map((v, i) => (
                      <td key={i} className="display" style={{ padding: "16px 24px", borderTop: "1px solid var(--b2-rule)", fontSize: 18 }}>
                        {v}
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
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px" }}>
        <p className="eyebrow">Common questions</p>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 48px" }}>
          The <em className="display-italic">honest</em> small print.
        </h2>
        {[
          { q: "Can I cancel any time?", a: "Yes. From the dashboard, no questions. You stay a member until the end of the month you've paid for." },
          { q: "What if I don't win?", a: "Most members never do. The membership is built around the discount vault, the gatherings, and the giving — winning is the bonus." },
          { q: "How are draws done?", a: "Live on Instagram, monthly, by an independent draw caller. Licensed VIC TP/03720. Records audited annually." },
          { q: "Who's the charity?", a: "Five dollars from every membership funds Share The Dignity." },
          { q: "Can I pause my membership?", a: "Up to 90 days a year. Useful if you're travelling or just want a quieter month." },
        ].map((f) => (
          <div key={f.q} style={{ borderTop: "1px solid var(--b2-rule)", padding: "24px 0" }}>
            <p className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>
              {f.q}
            </p>
            <p style={{ color: "var(--b2-ink-soft)", margin: 0, lineHeight: 1.7, fontSize: 15 }}>
              {f.a}
            </p>
          </div>
        ))}
      </section>

      <style>{`@media (max-width: 900px) { .dir-v2b .three-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
