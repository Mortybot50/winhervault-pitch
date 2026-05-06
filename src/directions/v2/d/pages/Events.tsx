import { Link } from "react-router-dom";
import { v2Events } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function EventsV2D() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow">Events · 2026</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 128px)", margin: "20px 0 32px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            Six gatherings. <em className="display-italic">Capped, considered.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", maxWidth: 640, margin: "0 0 32px", lineHeight: 1.75 }}>
            Wellness, food, founders, creative. Members RSVP first; non-members go on a waitlist.
          </p>
          <Link to={toggleHref} className="btn btn-ghost">
            {isMember ? "View as guest" : "Preview as member"}
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="two-grid">
          {v2Events.map((e) => {
            const locked = !isMember;
            return (
              <article
                key={e.id}
                className={locked ? "locked" : ""}
                style={{
                  borderRight: "1px solid var(--d2-rule)",
                  borderBottom: "1px solid var(--d2-rule)",
                  borderTop: "1px solid var(--d2-rule)",
                  background: "var(--d2-paper)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className={locked ? "locked-content" : undefined}>
                  <div style={{ aspectRatio: "16 / 9", background: `linear-gradient(180deg, hsl(${e.imageHue} 16% 86%), hsl(${e.imageHue} 12% 62%))` }} />
                  <div style={{ padding: 36 }}>
                    <p className="eyebrow">{e.category} · {e.date}</p>
                    <h2 className="display" style={{ fontSize: 32, margin: "16px 0 16px" }}>
                      {e.title}
                    </h2>
                    <p style={{ color: "var(--d2-ink-soft)", fontSize: 15, lineHeight: 1.75, margin: "0 0 24px" }}>
                      {e.blurb}
                    </p>
                    <hr className="rule" style={{ marginBottom: 20 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, fontSize: 13, marginBottom: 24 }}>
                      <div><p className="eyebrow">Venue</p><p style={{ margin: "8px 0 0" }}>{e.venue}, {e.city}</p></div>
                      <div><p className="eyebrow">Time</p><p style={{ margin: "8px 0 0" }}>{e.time}</p></div>
                    </div>
                    {isMember && (
                      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                        <button type="button" className="btn btn-primary">
                          RSVP — {e.spotsLeft} left
                        </button>
                        <span className="eyebrow">
                          {e.tier === "atelier-only" ? "III only" : e.tier === "edit-plus" ? "II + III" : "All members"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {locked && (
                  <div className="locked-overlay">
                    <p className="eyebrow">Members only</p>
                    <p className="display" style={{ fontSize: 26, margin: "16px 0 24px", maxWidth: 320 }}>
                      Become a member to RSVP.
                    </p>
                    <Link to="/v2/d/memberships#join" className="btn btn-primary">
                      Become a Member
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2d .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
