import { Link } from "react-router-dom";
import { v2Events } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function EventsV2A() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <p className="eyebrow">Events</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            Where the <em className="display-italic">circle</em> meets.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--a2-ink-soft)", maxWidth: 600, margin: 0 }}>
            Curated gatherings — wellness, food, founders, creative workshops. Capped to feel
            like a dinner party. Members RSVP first.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link
              to={toggleHref}
              className="btn btn-ghost"
              style={{ fontSize: 11 }}
            >
              {isMember ? "View as guest" : "Preview as member"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="two-grid">
          {v2Events.map((e) => {
            const locked = !isMember;
            return (
              <article
                key={e.id}
                style={{
                  background: "var(--a2-paper)",
                  border: "1px solid var(--a2-rule)",
                  overflow: "hidden",
                  position: "relative",
                }}
                className={locked ? "locked" : undefined}
              >
                <div className={locked ? "locked-content" : undefined}>
                  <div
                    style={{
                      aspectRatio: "16 / 9",
                      background: `linear-gradient(160deg, hsl(${e.imageHue} 50% 86%), hsl(${e.imageHue} 35% 60%))`,
                    }}
                  />
                  <div style={{ padding: 32 }}>
                    <p className="eyebrow">{e.category} · {e.date}</p>
                    <h2 className="display" style={{ fontSize: 32, margin: "12px 0 12px" }}>
                      {e.title}
                    </h2>
                    <p style={{ color: "var(--a2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px" }}>
                      {e.blurb}
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                        fontSize: 13,
                        marginBottom: 24,
                      }}
                    >
                      <div>
                        <p className="eyebrow" style={{ margin: 0 }}>Venue</p>
                        <p style={{ margin: "6px 0 0" }}>{e.venue}, {e.city}</p>
                      </div>
                      <div>
                        <p className="eyebrow" style={{ margin: 0 }}>Time</p>
                        <p style={{ margin: "6px 0 0" }}>{e.time}</p>
                      </div>
                    </div>
                    {isMember && (
                      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <button type="button" className="btn btn-dark">
                          RSVP — {e.spotsLeft} {e.spotsLeft === 1 ? "spot" : "spots"} left
                        </button>
                        <span style={{ fontSize: 12, color: "var(--a2-mute)", letterSpacing: "0.04em" }}>
                          {e.tier === "atelier-only" ? "Atelier members only" : e.tier === "edit-plus" ? "Edit + Atelier" : "All tiers"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {locked && (
                  <div className="locked-overlay">
                    <p className="eyebrow" style={{ color: "var(--a2-spot)" }}>
                      Members only
                    </p>
                    <p
                      className="display"
                      style={{ fontSize: 28, margin: "12px 0 16px", maxWidth: 340 }}
                    >
                      Become a member to RSVP and see venue details.
                    </p>
                    <Link to="/v2/a/memberships#join" className="btn btn-dark">
                      Become a Member
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) { .dir-v2a .two-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
