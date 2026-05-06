import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  finalDashboard,
  finalEvents,
  finalNextDraw,
  finalPartners,
  finalCountdown,
} from "../../../data/finalMock";

export default function DashboardFinal() {
  const [c, setC] = useState(finalCountdown());
  useEffect(() => {
    const id = setInterval(() => setC(finalCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const rsvped = finalEvents.filter((e) => (finalDashboard.rsvpedEventIds as readonly string[]).includes(e.id));
  const unlocked = finalPartners
    .filter((p) => (finalDashboard.unlockedPartnerNames as readonly string[]).includes(p.name))
    .slice(0, 4);

  return (
    <>
      {/* GREETING */}
      <section style={{ padding: "48px 0 32px", borderBottom: "1px solid var(--rule)" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— Member dashboard</span>
              <h1 className="final-display final-display-lg" style={{ marginTop: 12, letterSpacing: "-0.01em" }}>
                Welcome back, {finalDashboard.memberName} {finalDashboard.initial}.
              </h1>
              <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8 }}>{finalDashboard.joinedDate} · {finalDashboard.tier}</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/final" className="final-cta-text">View site →</Link>
              <Link to="/final/login" className="final-cta-ghost">Sign out</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section style={{ padding: "32px 0" }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="final-stats-grid">
            <StatCard value={String(finalDashboard.entriesThisDraw)} label="Entries this draw" accent />
            <StatCard value={`$${finalDashboard.charityContributedYTD}`} label="Charity contributed YTD" />
            <StatCard value={String(finalDashboard.upcomingEventsCount)} label="RSVP'd events" />
            <StatCard value={String(finalDashboard.unlockedCodes)} label="Unlocked codes" />
          </div>
        </div>
      </section>

      {/* ACTIVE DRAW */}
      <section className="final-section" style={{ paddingTop: 16, paddingBottom: 48 }}>
        <div className="final-container">
          <div className="final-card final-active-draw" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr" }}>
            <div style={{ position: "relative", overflow: "hidden", minHeight: 340, background: "var(--ink)" }}>
              <img
                src={finalNextDraw.heroImage}
                alt="Active draw — Apple bundle"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  background: "var(--ink)",
                  color: "#fff",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.24em",
                  padding: "8px 14px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                }}
              >
                Active draw
              </span>
            </div>
            <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="final-eyebrow" style={{ color: "var(--hot)" }}>— This week</span>
                <h2 className="final-display final-display-lg" style={{ marginTop: 12, letterSpacing: "-0.01em" }}>
                  {finalNextDraw.title}
                </h2>
                <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 12 }}>
                  Drawn live · {finalNextDraw.drawDate}
                </p>
              </div>
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 8,
                    margin: "32px 0 24px",
                    borderTop: "1.5px solid var(--ink)",
                    borderBottom: "1.5px solid var(--ink)",
                    padding: "16px 0",
                  }}
                >
                  {[
                    { label: "Days", value: c.days },
                    { label: "Hrs", value: c.hours },
                    { label: "Min", value: c.mins },
                    { label: "Sec", value: c.secs },
                  ].map((b) => (
                    <div key={b.label} style={{ textAlign: "center" }}>
                      <div className="final-stat-value" style={{ fontSize: 36 }}>{String(b.value).padStart(2, "0")}</div>
                      <div className="final-stat-label">{b.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span className="final-pill hot">My entries: {finalDashboard.entriesThisDraw}</span>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>{finalNextDraw.totalEntries.toLocaleString()} total entries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            <h2 className="final-display final-display-md">Your RSVPs</h2>
            <Link to="/final/events?member=1" className="final-cta-text">All events →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="final-rsvp-grid">
            {rsvped.map((e) => (
              <article key={e.id} className="final-card">
                <div style={{ aspectRatio: "5/3", overflow: "hidden" }}>
                  <img src={e.image} alt={e.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="final-eyebrow" style={{ color: "var(--hot)" }}>{e.category}</span>
                    <span className="final-pill" style={{ background: "var(--hot)", color: "#fff", borderColor: "var(--hot)", padding: "6px 10px", fontSize: 10 }}>
                      ✓ RSVP'd
                    </span>
                  </div>
                  <h3 className="final-display final-display-md" style={{ marginTop: 10, fontSize: 24 }}>{e.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>
                    {e.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE DISCOUNTS */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            <h2 className="final-display final-display-md">Your unlocked codes</h2>
            <Link to="/final/discounts?member=1" className="final-cta-text">All codes →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="final-codes-grid">
            {unlocked.map((p) => (
              <article key={p.name} className="final-card" style={{ padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 56, marginBottom: 12 }}>
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} style={{ maxHeight: 48, maxWidth: "100%", objectFit: "contain" }} loading="lazy" />
                  ) : (
                    <div className="final-display" style={{ fontSize: 20, letterSpacing: "0.02em", textAlign: "center", lineHeight: 1 }}>
                      {p.name.toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="final-display" style={{ fontSize: 18, color: "var(--hot)", marginTop: 4, letterSpacing: "0.01em" }}>{p.amount}</div>
                <code
                  style={{
                    display: "block",
                    marginTop: 12,
                    background: "var(--cream)",
                    border: "1.5px dashed var(--ink)",
                    padding: "10px 12px",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textAlign: "center",
                  }}
                >
                  {p.code}
                </code>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE / SUBSCRIPTION */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="final-profile-grid">
            <div className="final-card" style={{ padding: 32 }}>
              <span className="final-eyebrow">— Profile</span>
              <h3 className="final-display final-display-md" style={{ marginTop: 10 }}>{finalDashboard.memberName} {finalDashboard.initial}.</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>olivia@example.com</p>
              <hr className="final-rule" style={{ margin: "20px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--muted)" }}>Tier</span>
                <strong>{finalDashboard.tier}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginTop: 12 }}>
                <span style={{ color: "var(--muted)" }}>Member since</span>
                <strong>August 2025</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginTop: 12 }}>
                <span style={{ color: "var(--muted)" }}>Total contributed to charity</span>
                <strong>${finalDashboard.charityContributedYTD}</strong>
              </div>
            </div>
            <div className="final-card" style={{ padding: 32 }}>
              <span className="final-eyebrow">— Subscription</span>
              <h3 className="final-display final-display-md" style={{ marginTop: 10 }}>{finalDashboard.tierWeekly} / week</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>Next billing: 13 May 2026 · Billed monthly</p>
              <hr className="final-rule" style={{ margin: "20px 0" }} />
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>
                Manage payment method, change tier, or pause your membership. Cancel anytime — no retention call.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                <Link to="#" className="final-cta-ghost" style={{ padding: "12px 20px", fontSize: 11 }}>Manage subscription</Link>
                <Link to="/final/memberships" className="final-cta-text">Change tier →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .final-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .final-codes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .final-active-draw { grid-template-columns: 1fr !important; }
          .final-active-draw > div:first-child { aspect-ratio: 5/3 !important; min-height: 220px !important; }
          .final-rsvp-grid { grid-template-columns: 1fr !important; }
          .final-profile-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .final-stats-grid { grid-template-columns: 1fr !important; }
          .final-codes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function StatCard({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div
      className="final-card"
      style={{
        padding: 24,
        background: accent ? "var(--ink)" : "#fff",
        color: accent ? "var(--cream)" : "var(--ink)",
        borderColor: accent ? "var(--ink)" : "var(--rule)",
      }}
    >
      <div className="final-stat-value" style={{ color: accent ? "var(--hot)" : "var(--ink)" }}>{value}</div>
      <div className="final-stat-label" style={{ color: accent ? "rgba(255,241,227,0.7)" : "var(--muted)" }}>{label}</div>
    </div>
  );
}
