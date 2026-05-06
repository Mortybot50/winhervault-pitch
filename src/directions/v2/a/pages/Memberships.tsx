import { Link } from "react-router-dom";
import { getV2Tiers } from "../../../../data/mock";

export default function MembershipsV2A() {
  const tiers = getV2Tiers("a");
  return (
    <div>
      {/* HERO */}
      <section style={{ background: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">Membership</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            Three seats <em className="display-italic">at the table.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--a2-ink-soft)", maxWidth: 640, margin: "0 auto" }}>
            One door, three ways to walk through it. No lock-in, no gotcha terms — just
            considered access to giveaways, events, and the discount vault.
          </p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section id="join" style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
          className="three-grid"
        >
          {tiers.map((t) => (
            <article
              key={t.id}
              style={{
                background: t.featured ? "var(--a2-ink)" : "var(--a2-paper)",
                color: t.featured ? "var(--a2-cream)" : "var(--a2-ink)",
                border: t.featured ? "1px solid var(--a2-ink)" : "1px solid var(--a2-rule)",
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {t.featured && (
                <p
                  className="eyebrow"
                  style={{
                    color: "var(--a2-cream-deep)",
                    position: "absolute",
                    top: 24,
                    right: 32,
                  }}
                >
                  Most chosen
                </p>
              )}
              <p className="eyebrow" style={{ color: t.featured ? "var(--a2-cream-deep)" : undefined }}>
                {t.tagline}
              </p>
              <h2 className="display" style={{ fontSize: 44, margin: "12px 0 16px" }}>
                {t.name}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: t.featured ? "rgba(255,241,227,0.8)" : "var(--a2-ink-soft)",
                  margin: "0 0 24px",
                }}
              >
                {t.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  margin: "0 0 8px",
                }}
              >
                <span className="display" style={{ fontSize: 56, lineHeight: 1 }}>
                  ${t.weekly.toFixed(2)}
                </span>
                <span style={{ fontSize: 14, opacity: 0.7 }}>/wk</span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  margin: "0 0 28px",
                  color: t.featured ? "rgba(255,241,227,0.65)" : "var(--a2-mute)",
                  letterSpacing: "0.04em",
                }}
              >
                Billed monthly · ${t.monthly.toFixed(2)}/month
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  borderTop: t.featured
                    ? "1px solid rgba(255,241,227,0.18)"
                    : "1px solid var(--a2-rule)",
                  flex: 1,
                }}
              >
                {t.perks.map((p) => (
                  <li
                    key={p}
                    style={{
                      padding: "14px 0",
                      borderBottom: t.featured
                        ? "1px solid rgba(255,241,227,0.10)"
                        : "1px solid var(--a2-rule)",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/v2/a/dashboard"
                className="btn"
                style={{
                  background: t.featured ? "var(--a2-cream)" : "var(--a2-ink)",
                  color: t.featured ? "var(--a2-ink)" : "var(--a2-cream)",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                Choose {t.name}
              </Link>
            </article>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 36, fontSize: 13, color: "var(--a2-mute)" }}>
          All tiers · cancel anytime · pause for up to 90 days · no card-on-file fees
        </p>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "var(--a2-paper)", borderTop: "1px solid var(--a2-rule)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">Compare</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 48px" }}>
            What's <em className="display-italic">included</em>, side by side.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
                minWidth: 640,
              }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "16px 12px", borderBottom: "1px solid var(--a2-rule)" }}></th>
                  {tiers.map((t) => (
                    <th
                      key={t.id}
                      className="display"
                      style={{
                        textAlign: "left",
                        padding: "16px 12px",
                        borderBottom: "1px solid var(--a2-rule)",
                        fontSize: 22,
                      }}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Entries per draw", key: "entries" },
                  { label: "Discount vault", key: "vault" },
                  { label: "Members' newsletter", key: "letter" },
                  { label: "Event RSVP priority", key: "rsvp" },
                  { label: "Quarterly drop", key: "drop" },
                  { label: "Personal concierge", key: "conc" },
                ].map((row) => (
                  <tr key={row.key}>
                    <td style={{ padding: "18px 12px", borderBottom: "1px solid var(--a2-rule)", color: "var(--a2-ink-soft)" }}>
                      {row.label}
                    </td>
                    {tiers.map((t, i) => (
                      <td
                        key={t.id}
                        className="display"
                        style={{
                          padding: "18px 12px",
                          borderBottom: "1px solid var(--a2-rule)",
                          fontSize: 18,
                        }}
                      >
                        {row.key === "entries"
                          ? t.entries
                          : row.key === "vault"
                          ? i === 0 ? "Preview" : "Full"
                          : row.key === "letter"
                          ? "✓"
                          : row.key === "rsvp"
                          ? i === 0 ? "Standing invite" : i === 1 ? "Priority" : "First access"
                          : row.key === "drop"
                          ? i === 0 ? "—" : "✓"
                          : i === 2 ? "✓" : "—"}
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
        <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 48px" }}>
          The honest <em className="display-italic">small print.</em>
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { q: "Can I cancel any time?", a: "Yes. Cancel from the dashboard, no questions asked. You stay a member until the end of your current month." },
            { q: "What if I don't win anything?", a: "That's the point of how we built this. The discount vault, events, and partner perks are designed to pay back your membership several times over — winning a draw is the bonus, not the bargain." },
            { q: "How are the draws conducted?", a: "Live on Instagram, monthly, by an independent draw caller. Licence VIC TP/03720. Records published within 48 hours." },
            { q: "Where does the charity money go?", a: "$5 from every membership goes to an Australian women's charity (final partner announcing soon). Reported on every dashboard, audited annually." },
            { q: "Can I gift a membership?", a: "Yes — for now via email. Full gifting flow ships in late May 2026." },
          ].map((f) => (
            <div
              key={f.q}
              style={{ borderTop: "1px solid var(--a2-rule)", padding: "28px 0" }}
            >
              <p className="display" style={{ fontSize: 24, margin: "0 0 10px" }}>
                {f.q}
              </p>
              <p style={{ color: "var(--a2-ink-soft)", margin: 0, lineHeight: 1.7, fontSize: 15 }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dir-v2a .three-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
