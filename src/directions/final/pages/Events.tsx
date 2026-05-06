import { Link } from "react-router-dom";
import { useMemberMode } from "../hooks/useMemberMode";
import { finalEvents, portraitStyle } from "../../../data/finalMock";

export default function EventsFinal() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <>
      <section className="final-hero">
        <div className="final-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="final-eyebrow">— Events</span>
              <h1 className="final-display final-display-xl" style={{ marginTop: 16 }}>
                Show up.<br /><span style={{ color: "var(--hot)" }}>Show out.</span>
              </h1>
            </div>
            <Link
              to={toggleHref || "?"}
              className="final-pill hot"
              style={{ textDecoration: "none" }}
            >
              {isMember ? "● Member view" : "Lock · preview"}  <span style={{ opacity: 0.7 }}>· toggle</span>
            </Link>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, marginTop: 32 }}>
            {isMember
              ? "Welcome back. Pick your seat — RSVP closes seven days before each event."
              : "Wellness, social, creative — across Sydney, Melbourne, and Byron. Members RSVP first."}
          </p>
        </div>
      </section>

      <section className="final-section" style={{ paddingTop: 0 }}>
        <div className="final-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }} className="final-events-page-grid">
            {finalEvents.map((e) => (
              <article key={e.id} className="final-card" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr" }}>
                <div className="final-portrait" style={{ ...portraitStyle(e.hue), aspectRatio: "auto", height: "100%", minHeight: 240 }} />
                <div style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span className="final-eyebrow" style={{ color: "var(--hot)" }}>{e.category}</span>
                      <span className="final-eyebrow" style={{ color: e.spotsLeft <= 3 ? "var(--hot)" : "var(--muted)" }}>
                        {e.spotsLeft} spots left
                      </span>
                    </div>
                    <h3 className="final-display final-display-md" style={{ marginTop: 12 }}>{e.title}</h3>
                    <div style={{ fontSize: 13, color: "var(--muted)", margin: "10px 0 14px", letterSpacing: "0.04em" }}>
                      {e.date} · {e.time}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>
                      {e.venue}, {e.city} {e.state}
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{e.blurb}</p>
                  </div>
                  <div style={{ marginTop: 24, position: "relative" }}>
                    {isMember ? (
                      <button type="button" className="final-cta" style={{ width: "100%" }}>
                        RSVP — Reserve seat
                      </button>
                    ) : (
                      <div className="final-locked" style={{ minHeight: 72 }}>
                        <div className="final-locked-overlay" style={{ position: "relative", inset: "auto", padding: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                            <span className="final-locked-icon" style={{ marginBottom: 0 }}>🔒</span>
                            <span className="final-eyebrow">Members only</span>
                            <Link to="/final/memberships" className="final-cta" style={{ padding: "12px 20px", fontSize: 11 }}>
                              Become a member
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .final-events-page-grid { grid-template-columns: 1fr !important; }
          .final-events-page-grid article { grid-template-columns: 1fr !important; }
          .final-events-page-grid .final-portrait { aspect-ratio: 5/3 !important; min-height: 200px !important; }
        }
      `}</style>
    </>
  );
}
