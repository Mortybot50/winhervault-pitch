import { Link } from "react-router-dom";
import { v2Winners } from "../../../../data/mock";

export default function WinnersV2C() {
  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, var(--c2-cream) 0%, var(--c2-cream-warm) 100%)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center" }}>
          <span className="pill">The wall of wins</span>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 24px" }}>
            132 women. <em className="display-italic" style={{ color: "var(--c2-berry)" }}>Real prizes.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Every name here is a real Vault member. Every prize was paid in 7 days. Every story is in their words.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="four-grid">
          {v2Winners.map((w, i) => (
            <article key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ aspectRatio: "4 / 5", background: `linear-gradient(160deg, hsl(${w.imageHue} 38% 88%), hsl(${w.imageHue} 32% 50%))` }} />
              <div style={{ padding: 20 }}>
                <p className="eyebrow">{w.date}</p>
                <h3 className="display" style={{ fontSize: 18, margin: "8px 0 4px" }}>{w.firstName} {w.initial}., {w.suburb}</h3>
                <p className="display" style={{ fontSize: 18, color: "var(--c2-berry)", margin: "0 0 12px" }}>{w.prize}</p>
                <p style={{ fontStyle: "italic", color: "var(--c2-ink-soft)", lineHeight: 1.6, fontSize: 12, margin: 0 }}>"{w.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--c2-berry)", color: "var(--c2-cream)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "0 0 28px" }}>
            Be next on the <em className="display-italic" style={{ color: "var(--c2-gold)" }}>wall.</em>
          </h2>
          <Link to="/v2/c/memberships#join" className="btn btn-gold" style={{ fontSize: 14, padding: "18px 32px" }}>
            Become a Member →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .dir-v2c .four-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 820px) { .dir-v2c .four-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .dir-v2c .four-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
