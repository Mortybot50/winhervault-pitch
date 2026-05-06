import { Link } from "react-router-dom";
import { v2Winners } from "../../../../data/mock";

export default function WinnersV2A() {
  return (
    <div>
      <section style={{ background: "var(--a2-cream)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">The Circle · winners</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            Real members. <em className="display-italic">Real moments.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--a2-ink-soft)", maxWidth: 580, margin: "0 auto" }}>
            Every member shown here joined the circle, stayed in, and was drawn. First names
            and suburbs only — that's the agreement.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="four-grid"
        >
          {v2Winners.map((w) => (
            <article key={w.firstName + w.date}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  background: `linear-gradient(160deg, hsl(${w.imageHue} 50% 86%), hsl(${w.imageHue} 35% 60%))`,
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at 60% 40%, transparent 0%, rgba(42,37,32,0.06) 70%, rgba(42,37,32,0.18) 100%)",
                  }}
                />
                <span
                  className="display-italic"
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 18,
                    fontSize: 56,
                    color: "rgba(42,37,32,0.18)",
                    lineHeight: 1,
                  }}
                >
                  {w.firstName}
                </span>
              </div>
              <p className="eyebrow">{w.date}</p>
              <p className="display" style={{ fontSize: 22, margin: "8px 0 4px" }}>
                {w.firstName} {w.initial}.
              </p>
              <p style={{ fontSize: 12, color: "var(--a2-mute)", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 12px" }}>
                {w.suburb} · {w.state}
              </p>
              <p style={{ fontSize: 14, color: "var(--a2-ink-soft)", margin: "0 0 12px", lineHeight: 1.6 }}>
                {w.prize} · ${w.value.toLocaleString()}
              </p>
              <p
                className="display-italic"
                style={{ fontSize: 15, color: "var(--a2-spot)", margin: 0, lineHeight: 1.5 }}
              >
                "{w.quote}"
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Aggregate strip */}
      <section
        style={{
          background: "var(--a2-cream-deep)",
          borderTop: "1px solid var(--a2-rule)",
          borderBottom: "1px solid var(--a2-rule)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "72px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            textAlign: "center",
          }}
          className="three-grid"
        >
          {[
            { v: "247", l: "Members drawn since 2024" },
            { v: "$1.2M+", l: "Prize value awarded" },
            { v: "Live", l: "Every draw, on Instagram" },
          ].map((s) => (
            <div key={s.l}>
              <p className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: 0 }}>
                {s.v}
              </p>
              <p className="eyebrow" style={{ marginTop: 10 }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <p className="eyebrow">Want in</p>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 24px" }}>
          Your <em className="display-italic">turn</em>.
        </h2>
        <p style={{ fontSize: 17, color: "var(--a2-ink-soft)", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Membership starts at $2.31 a week. Cancel anytime. The next draw is in days, not
          months.
        </p>
        <Link to="/v2/a/memberships#join" className="btn btn-dark">
          Become a Member
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) { .dir-v2a .four-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .dir-v2a .four-grid { grid-template-columns: 1fr !important; } .dir-v2a .three-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
