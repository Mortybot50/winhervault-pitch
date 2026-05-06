import { Link } from "react-router-dom";
import { v2Winners } from "../../../../data/mock";

export default function WinnersV2B() {
  return (
    <div>
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <p className="eyebrow">Winners · the Haus</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Real <em className="display-italic">members.</em> Real moments.
          </h1>
          <p style={{ fontSize: 18, color: "var(--b2-ink-soft)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            First names and suburbs only. That's the agreement.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="four-grid">
          {v2Winners.map((w) => (
            <article key={w.firstName + w.date} className="card" style={{ padding: 0, overflow: "hidden", background: "var(--b2-paper)" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  background: `linear-gradient(160deg, hsl(${w.imageHue} 30% 88%), hsl(${w.imageHue} 22% 65%))`,
                }}
              />
              <div style={{ padding: 20 }}>
                <p className="eyebrow">{w.date}</p>
                <p className="display" style={{ fontSize: 20, margin: "8px 0 4px" }}>
                  {w.firstName} {w.initial}.
                </p>
                <p style={{ fontSize: 12, color: "var(--b2-mute)", margin: "0 0 10px", letterSpacing: "0.04em" }}>
                  {w.suburb} · {w.state}
                </p>
                <p style={{ fontSize: 13, color: "var(--b2-ink-soft)", margin: "0 0 10px", lineHeight: 1.5 }}>
                  {w.prize}
                </p>
                <p className="display-italic" style={{ fontSize: 14, color: "var(--b2-sage-deep)", margin: 0, lineHeight: 1.5 }}>
                  "{w.quote}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--b2-blush)" }}>
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
              <p className="eyebrow" style={{ marginTop: 10 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "0 0 24px" }}>
          Be in <em className="display-italic">the next one.</em>
        </h2>
        <Link to="/v2/b/memberships#join" className="btn btn-primary">
          Become a Member
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) { .dir-v2b .four-grid { grid-template-columns: repeat(2, 1fr) !important; } .dir-v2b .three-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .dir-v2b .four-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
