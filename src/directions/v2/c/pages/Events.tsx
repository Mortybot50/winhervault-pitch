import { Link } from "react-router-dom";
import { v2Events } from "../../../../data/mock";
import { useMemberMode } from "../../useMemberMode";

export default function EventsV2C() {
  const { isMember, toggleHref } = useMemberMode();
  return (
    <div>
      <section style={{ background: "var(--c2-cream-warm)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px" }}>
          <span className="pill">Events · 2026</span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px" }}>
            Six gatherings. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Capped, never crowded.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", maxWidth: 640, lineHeight: 1.7, margin: "0 0 24px" }}>
            Wellness, food, founders, creative. Members RSVP first, non-members go on the waitlist.
          </p>
          <Link to={toggleHref} className="btn btn-ghost" style={{ fontSize: 12 }}>
            {isMember ? "View as guest" : "Preview as member →"}
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="two-grid">
          {v2Events.map((e) => {
            const locked = !isMember;
            return (
              <article
                key={e.id}
                className={`card ${locked ? "locked" : ""}`}
                style={{ padding: 0, overflow: "hidden", position: "relative" }}
              >
                <div className={locked ? "locked-content" : undefined}>
                  <div style={{ aspectRatio: "16 / 9", background: `linear-gradient(160deg, hsl(${e.imageHue} 38% 88%), hsl(${e.imageHue} 28% 55%))` }} />
                  <div style={{ padding: 28 }}>
                    <p className="eyebrow">{e.category} · {e.date}</p>
                    <h2 className="display" style={{ fontSize: 30, margin: "12px 0 12px" }}>
                      {e.title}
                    </h2>
                    <p style={{ color: "var(--c2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: "0 0 18px" }}>
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
                        <span style={{ fontSize: 12, color: "var(--c2-mute)" }}>
                          {e.tier === "atelier-only" ? "Icon members only" : e.tier === "edit-plus" ? "Luxe + Icon" : "All tiers"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {locked && (
                  <div className="locked-overlay">
                    <span className="pill" style={{ background: "var(--c2-berry)", color: "var(--c2-gold)" }}>Members only</span>
                    <p className="display" style={{ fontSize: 26, margin: "16px 0", maxWidth: 320 }}>
                      Become a member to RSVP.
                    </p>
                    <Link to="/v2/c/memberships#join" className="btn btn-primary">
                      Become a Member →
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <style>{`@media (max-width: 880px) { .dir-v2c .two-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
