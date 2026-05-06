import { Link } from "react-router-dom";
import {
  getV2Tiers,
  v2Winners,
  v2Events,
  v2Partners,
  v2Charities,
} from "../../../../data/mock";

export default function HomeV2A() {
  const tiers = getV2Tiers("a");
  const featured = tiers.find((t) => t.featured) ?? tiers[1];
  return (
    <div>
      {/* HERO — editorial, asymmetric, large breath */}
      <section style={{ background: "var(--a2-cream)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 32px 72px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <p className="eyebrow">Volume Four · A women's circle, Melbourne</p>
            <h1
              className="display"
              style={{ fontSize: "clamp(54px, 8vw, 108px)", margin: "24px 0 28px" }}
            >
              Join the circle. <br />
              Win <em className="display-italic">more</em> than just prizes.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--a2-ink-soft)",
                maxWidth: 540,
                margin: 0,
              }}
            >
              Exclusive giveaways, member-only perks, and curated experiences designed for
              women who want more from their week, their wardrobe, and their wins.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <Link to="/v2/a/memberships#join" className="btn btn-dark">
                Become a Member
              </Link>
              <Link to="/v2/a/winners" className="btn btn-ghost">
                See recent winners
              </Link>
            </div>
            <p style={{ marginTop: 32, fontSize: 13, color: "var(--a2-mute)" }}>
              From <strong style={{ color: "var(--a2-ink)" }}>${featured.weekly.toFixed(2)}/wk</strong>
              {" "}· cancel anytime · 14,800+ members
            </p>
          </div>
          <div
            style={{
              aspectRatio: "4 / 5",
              background:
                "linear-gradient(160deg, hsl(28 60% 88%) 0%, hsl(20 45% 78%) 60%, hsl(15 35% 65%) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 60% 35%, transparent 0%, rgba(42,37,32,0.08) 70%, rgba(42,37,32,0.18) 100%)",
              }}
            />
            <div
              className="display-italic"
              style={{
                position: "absolute",
                bottom: 32,
                left: 32,
                right: 32,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "var(--a2-ink)",
                lineHeight: 1.2,
              }}
            >
              "Even if you don't win, you still get the rest. That's the whole idea."
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — three considered steps */}
      <section style={{ background: "var(--a2-paper)", borderTop: "1px solid var(--a2-rule)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">How the circle works</p>
          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 56px", maxWidth: 880 }}
          >
            Three small choices. <em className="display-italic">A different kind</em> of week.
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }}
            className="three-grid"
          >
            {[
              {
                n: "I.",
                h: "Choose your seat.",
                p: "Three tiers, weekly pricing, no lock-in. Start at The Muse, move to The Edit when you're ready, or sit at the head of the table with The Atelier.",
              },
              {
                n: "II.",
                h: "Live the membership.",
                p: "Curated giveaways every month. Twelve discount partners on standing rotation. Events in your city, capped to feel like a dinner party.",
              },
              {
                n: "III.",
                h: "Belong, with purpose.",
                p: "Five dollars from every membership funds Share The Dignity. We tell you exactly where it goes, every single month.",
              },
            ].map((b) => (
              <div key={b.n}>
                <p
                  className="display-italic"
                  style={{ fontSize: 36, color: "var(--a2-spot)", margin: "0 0 16px" }}
                >
                  {b.n}
                </p>
                <h3 className="display" style={{ fontSize: 28, margin: "0 0 12px" }}>
                  {b.h}
                </h3>
                <p style={{ color: "var(--a2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  {b.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND WINNING — slowed copy section */}
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
            padding: "112px 32px",
            textAlign: "center",
          }}
        >
          <p className="eyebrow">More than winning</p>
          <p
            className="display-italic"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              lineHeight: 1.4,
              color: "var(--a2-ink)",
              margin: "24px 0 32px",
              maxWidth: 880,
              marginInline: "auto",
            }}
          >
            Even if you don't win, you still receive access to exclusive discounts, events,
            and a community designed to elevate your lifestyle.
          </p>
          <p style={{ fontSize: 14, color: "var(--a2-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            That is the membership we wanted to build
          </p>
        </div>
      </section>

      {/* FEATURED GIVEAWAYS — current draws */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p className="eyebrow">Featured this month</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 0" }}>
              Three giveaways, one circle.
            </h2>
          </div>
          <Link to="/v2/a/memberships#join" className="btn btn-ghost">
            Enter this month →
          </Link>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
          className="three-grid"
        >
          {[
            {
              h: "Apple Bundle, May",
              s: "MacBook Air · AirPods Max · Apple Watch — or take $2,000 cash",
              hue: 28,
            },
            {
              h: "Cartier Love, June",
              s: "The classic bracelet, sized to you. Drawn live, 8pm AEST.",
              hue: 8,
            },
            {
              h: "Mecca Vault, July",
              s: "Five thousand dollars to spend at every counter that matters.",
              hue: 320,
            },
          ].map((d) => (
            <article
              key={d.h}
              style={{
                background: "var(--a2-paper)",
                border: "1px solid var(--a2-rule)",
                padding: 0,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: `linear-gradient(160deg, hsl(${d.hue} 50% 88%), hsl(${d.hue} 35% 68%))`,
                }}
              />
              <div style={{ padding: 24 }}>
                <p className="eyebrow">Live monthly draw</p>
                <h3 className="display" style={{ fontSize: 26, margin: "10px 0 8px" }}>
                  {d.h}
                </h3>
                <p style={{ color: "var(--a2-ink-soft)", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                  {d.s}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RECENT WINNERS — social proof */}
      <section
        style={{
          background: "var(--a2-paper)",
          borderTop: "1px solid var(--a2-rule)",
          borderBottom: "1px solid var(--a2-rule)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">Recent winners</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 56px" }}>
            Real members. <em className="display-italic">Real moments.</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
            className="three-grid"
          >
            {v2Winners.slice(0, 3).map((w) => (
              <article key={w.firstName + w.date}>
                <div
                  style={{
                    aspectRatio: "4 / 5",
                    background: `linear-gradient(160deg, hsl(${w.imageHue} 45% 86%), hsl(${w.imageHue} 35% 64%))`,
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: 18,
                  }}
                >
                  <span
                    className="display-italic"
                    style={{
                      position: "absolute",
                      bottom: 18,
                      left: 20,
                      fontSize: 64,
                      color: "rgba(42,37,32,0.16)",
                      lineHeight: 1,
                    }}
                  >
                    {w.firstName}
                  </span>
                </div>
                <p className="eyebrow">{w.date}</p>
                <p className="display" style={{ fontSize: 24, margin: "10px 0 6px" }}>
                  {w.firstName} {w.initial}. · {w.suburb}
                </p>
                <p style={{ fontSize: 14, color: "var(--a2-ink-soft)", margin: "0 0 12px" }}>
                  {w.prize} · ${w.value.toLocaleString()}
                </p>
                <p
                  className="display-italic"
                  style={{ fontSize: 16, color: "var(--a2-spot)", margin: 0, lineHeight: 1.5 }}
                >
                  "{w.quote}"
                </p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <Link to="/v2/a/winners" className="btn btn-ghost">
              See every winner →
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p className="eyebrow">Where the circle meets</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 0" }}>
              <em className="display-italic">Curated</em> gatherings.
            </h2>
          </div>
          <Link to="/v2/a/events" className="btn btn-ghost">
            All events →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="three-grid">
          {v2Events.slice(0, 3).map((e) => (
            <article
              key={e.id}
              style={{ background: "var(--a2-paper)", border: "1px solid var(--a2-rule)", padding: 28 }}
            >
              <p className="eyebrow">{e.date}</p>
              <h3 className="display" style={{ fontSize: 26, margin: "12px 0 10px" }}>
                {e.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--a2-ink-soft)", margin: "0 0 14px", lineHeight: 1.7 }}>
                {e.blurb}
              </p>
              <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--a2-mute)" }}>
                {e.venue} · {e.city}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DISCOUNTS PREVIEW — partner brands */}
      <section
        style={{
          background: "var(--a2-cream-deep)",
          borderTop: "1px solid var(--a2-rule)",
          borderBottom: "1px solid var(--a2-rule)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">The discount vault</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 52px)", margin: "12px 0 48px", maxWidth: 880 }}>
            Twelve brands, on standing rotation. <em className="display-italic">Designed to pay your membership back.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              fontSize: 14,
            }}
            className="four-grid"
          >
            {v2Partners.slice(0, 8).map((p) => (
              <div
                key={p.name}
                style={{
                  background: "var(--a2-paper)",
                  border: "1px solid var(--a2-rule)",
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p className="display" style={{ fontSize: 20, margin: 0 }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 11, color: "var(--a2-mute)", letterSpacing: "0.16em", textTransform: "uppercase", margin: "6px 0 0" }}>
                  {p.category}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link to="/v2/a/discounts" className="btn btn-ghost">
              See the full vault →
            </Link>
          </div>
        </div>
      </section>

      {/* CHARITY PARTNERS PREVIEW */}
      <section style={{ background: "var(--a2-ink)", color: "var(--a2-cream)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "96px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
          className="two-grid"
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--a2-cream)" }}>
              The reason it exists
            </p>
            <h2
              className="display"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 24px" }}
            >
              Five dollars, <em className="display-italic">every member</em>, every month.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,241,227,0.78)", maxWidth: 520, margin: 0 }}>
              {v2Charities[0].blurb}
            </p>
            <Link
              to="/v2/a/charity"
              className="btn"
              style={{ background: "var(--a2-cream)", color: "var(--a2-ink)", marginTop: 32 }}
            >
              See where it goes →
            </Link>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,241,227,0.22)",
              padding: 48,
              textAlign: "center",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--a2-cream)" }}>
              Year to date
            </p>
            <p
              className="display"
              style={{
                fontSize: "clamp(72px, 12vw, 144px)",
                margin: "12px 0",
                lineHeight: 1,
              }}
            >
              ${v2Charities[0].contributedYTD.toLocaleString()}
            </p>
            <p style={{ color: "rgba(255,241,227,0.7)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
              contributed by members in 2026
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{ background: "var(--a2-cream)" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "120px 32px",
            textAlign: "center",
          }}
        >
          <p className="eyebrow">Ready when you are</p>
          <h2
            className="display"
            style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "20px 0 28px", lineHeight: 1.05 }}
          >
            A circle <em className="display-italic">designed</em> for women who want more.
          </h2>
          <p style={{ fontSize: 17, color: "var(--a2-ink-soft)", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From {featured.weekly.toFixed(2)} a week. No lock-in. The Edit is our most-loved
            seat — five entries, full vault, every event.
          </p>
          <Link to="/v2/a/memberships#join" className="btn btn-dark">
            Become a Member
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dir-v2a .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 56px 24px !important; }
          .dir-v2a .three-grid { grid-template-columns: 1fr !important; }
          .dir-v2a .four-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dir-v2a .two-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
