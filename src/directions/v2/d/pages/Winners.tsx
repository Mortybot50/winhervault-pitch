import { Link } from "react-router-dom";
import { v2Winners } from "../../../../data/mock";

export default function WinnersV2D() {
  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 96px" }}>
          <p className="eyebrow">132 winners · since 2026</p>
          <h1 className="display" style={{ fontSize: "clamp(72px, 9vw, 128px)", margin: "20px 0 32px", maxWidth: 1100, letterSpacing: "-0.02em" }}>
            The wall <em className="display-italic">of names.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--d2-ink-soft)", maxWidth: 600, margin: 0, lineHeight: 1.75 }}>
            Every name here is a real HerCircle member. Every prize was paid in seven days. Every story is in their words.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "80px 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="four-grid">
          {v2Winners.map((w, i) => (
            <article key={i}>
              <div style={{ aspectRatio: "4 / 5", background: `linear-gradient(180deg, hsl(${w.imageHue} 18% 86%), hsl(${w.imageHue} 14% 60%))`, marginBottom: 20 }} />
              <p className="eyebrow">{w.date}</p>
              <p className="display" style={{ fontSize: 18, margin: "8px 0 4px" }}>{w.firstName} {w.initial}., {w.suburb}</p>
              <p style={{ fontSize: 13, color: "var(--d2-mute)", margin: "0 0 12px" }}>{w.prize}</p>
              <p style={{ fontStyle: "italic", color: "var(--d2-ink-soft)", lineHeight: 1.7, fontSize: 13, margin: 0 }}>"{w.quote}"</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--d2-ink)", color: "var(--d2-bone)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "0 0 40px", letterSpacing: "-0.015em" }}>
            Be next on <em className="display-italic" style={{ color: "var(--d2-warm)" }}>the wall.</em>
          </h2>
          <Link to="/v2/d/memberships#join" className="btn btn-light">
            Become a Member
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .dir-v2d .four-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 820px) { .dir-v2d .four-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .dir-v2d .four-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
