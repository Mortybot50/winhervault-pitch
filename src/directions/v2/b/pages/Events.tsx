import { Link } from "react-router-dom";
import { v2Events } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function EventsV2B() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <p className="eyebrow">Gatherings</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Slowly. <em className="display-italic">Together.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--b2-ink-soft)", maxWidth: 600, margin: 0, lineHeight: 1.7 }}>
            Six gatherings a year — wellness, food, founders, creative. Capped, never crowded.
            Members RSVP first.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to={toggleHref} className="btn btn-ghost" style={{ fontSize: 11 }}>
              {isMember ? "View as guest" : "Preview as member"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="two-grid">
          {v2Events.map((e) => {
            const locked = !isMember;
            return (
              <article
                key={e.id}
                className={`card ${locked ? "locked" : ""}`}
                style={{ background: "var(--b2-paper)", padding: 0, overflow: "hidden", position: "relative" }}
              >
                <div className={locked ? "locked-content" : undefined}>
                  <div style={{ aspectRatio: "16 / 9", background: `linear-gradient(160deg, hsl(${e.imageHue} 35% 88%), hsl(${e.imageHue} 25% 65%))` }} />
                  <div style={{ padding: 28 }}>
                    <p className="eyebrow">{e.category} · {e.date}</p>
                    <h2 className="display" style={{ fontSize: 30, margin: "12px 0 12px" }}>
                      {e.title}
                    </h2>
                    <p style={{ color: "var(--b2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: "0 0 18px" }}>
                      {e.blurb}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 13, marginBottom: 20 }}>
                      <div><p className="eyebrow">Venue</p><p style={{ margin: "4px 0 0" }}>{e.venue}, {e.city}</p></div>
                      <div><p className="eyebrow">Time</p><p style={{ margin: "4px 0 0" }}>{e.time}</p></div>
                    </div>
                    {isMember && (
                      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <button type="button" className="btn btn-primary">
                          RSVP — {e.spotsLeft} left
                        </button>
                        <span style={{ fontSize: 12, color: "var(--b2-mute)" }}>
                          {e.tier === "atelier-only" ? "Studio members only" : e.tier === "edit-plus" ? "Soft + Studio" : "All tiers"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {locked && (
                  <div className="locked-overlay">
                    <p className="eyebrow" style={{ color: "var(--b2-sage-deep)" }}>
                      Members only
                    </p>
                    <p className="display" style={{ fontSize: 26, margin: "12px 0 16px", maxWidth: 320 }}>
                      Become a member to RSVP.
                    </p>
                    <Link to="/v2/b/memberships#join" className="btn btn-primary">
                      Become a Member
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2b .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
