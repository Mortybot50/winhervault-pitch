import { Link } from "react-router-dom";
import {
  getV2Tiers,
  v2Winners,
  v2Events,
  v2Partners,
  v2Charities,
} from "../../../../data/mock";

export default function HomeV2B() {
  const tiers = getV2Tiers("b");
  const featured = tiers.find((t) => t.featured) ?? tiers[1];
  return (
    <div>
      {/* HERO */}
      <section style={{ background: "var(--b2-sand)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "112px 32px 88px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <p className="eyebrow">An Australian women's haus · Established 2024</p>
            <h1
              className="display"
              style={{ fontSize: "clamp(56px, 9vw, 116px)", margin: "24px 0 28px" }}
            >
              Join the Haus.
              <br />
              <em className="display-italic">Win more</em> than just prizes.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--b2-ink-soft)",
                maxWidth: 520,
                margin: 0,
              }}
            >
              A slower kind of membership. Considered giveaways, member-only discounts, and
              gatherings paced for women who want their week to feel a little more like Sunday
              morning.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/v2/b/memberships#join" className="btn btn-primary">
                Become a Member
              </Link>
              <Link to="/v2/b/winners" className="btn btn-ghost">
                Recent winners
              </Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: "var(--b2-mute)" }}>
              From <strong style={{ color: "var(--b2-ink)" }}>${featured.weekly.toFixed(2)}/wk</strong>
              {" "}· cancel anytime · ${featured.monthly.toFixed(2)}/mo
            </p>
          </div>
          <div
            style={{
              borderRadius: "50% / 60%",
              aspectRatio: "4 / 5",
              background:
                "linear-gradient(160deg, var(--b2-blush) 0%, var(--b2-sage) 100%)",
              position: "relative",
              overflow: "hidden",
              maxWidth: 460,
              marginLeft: "auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 32,
                left: 32,
                right: 32,
                bottom: 32,
                border: "1px solid rgba(47,50,44,0.18)",
                borderRadius: "50% / 60%",
              }}
            />
            <span
              className="display-italic"
              style={{
                position: "absolute",
                bottom: 80,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 32,
                color: "rgba(47,50,44,0.65)",
                whiteSpace: "nowrap",
              }}
            >
              for women who want more
            </span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--b2-paper)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
          <p className="eyebrow">How the haus works</p>
          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "16px 0 56px", maxWidth: 880 }}
          >
            Three soft <em className="display-italic">choices</em>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="three-grid">
            {[
              {
                n: "01",
                h: "Choose a seat",
                p: "Three tiers, weekly pricing, no lock-in. Most women begin in Soft.",
              },
              {
                n: "02",
                h: "Live the membership",
                p: "Twelve curated brands, six gatherings a year, and one giveaway every month.",
              },
              {
                n: "03",
                h: "Belong, with purpose",
                p: "Five dollars from every membership funds Share The Dignity, monthly.",
              },
            ].map((b) => (
              <div key={b.n} className="card" style={{ background: "var(--b2-sand)" }}>
                <p className="eyebrow">{b.n}</p>
                <h3 className="display" style={{ fontSize: 28, margin: "16px 0 12px" }}>
                  {b.h}
                </h3>
                <p style={{ color: "var(--b2-ink-soft)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  {b.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: "var(--b2-blush)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "112px 32px", textAlign: "center" }}>
          <p
            className="display-italic"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              lineHeight: 1.4,
              color: "var(--b2-ink)",
              margin: "0 0 24px",
            }}
          >
            "Even if you don't win, you still receive access to exclusive discounts, events,
            and a community designed to elevate your lifestyle."
          </p>
          <p className="eyebrow">— The Haus, founder's letter</p>
        </div>
      </section>

      {/* WINNERS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p className="eyebrow">Recent winners</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 0" }}>
              Real members, <em className="display-italic">real moments.</em>
            </h2>
          </div>
          <Link to="/v2/b/winners" className="btn btn-ghost">
            See all →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
          {v2Winners.slice(0, 3).map((w) => (
            <article key={w.firstName + w.date} className="card" style={{ padding: 0, overflow: "hidden", background: "var(--b2-paper)" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  background: `linear-gradient(160deg, hsl(${w.imageHue} 35% 88%), hsl(${w.imageHue} 25% 70%))`,
                }}
              />
              <div style={{ padding: 24 }}>
                <p className="eyebrow">{w.date}</p>
                <p className="display" style={{ fontSize: 22, margin: "10px 0 4px" }}>
                  {w.firstName} {w.initial}.
                </p>
                <p style={{ fontSize: 13, color: "var(--b2-mute)", margin: "0 0 12px" }}>
                  {w.suburb} · {w.state}
                </p>
                <p style={{ fontSize: 14, color: "var(--b2-ink-soft)", margin: 0, lineHeight: 1.6 }}>
                  Won the {w.prize}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section style={{ background: "var(--b2-paper)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="eyebrow">Gatherings</p>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 0" }}>
                <em className="display-italic">Slowly.</em> Together.
              </h2>
            </div>
            <Link to="/v2/b/events" className="btn btn-ghost">All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-grid">
            {v2Events.slice(0, 3).map((e) => (
              <article key={e.id} className="card" style={{ background: "var(--b2-sand)" }}>
                <p className="eyebrow">{e.date}</p>
                <h3 className="display" style={{ fontSize: 24, margin: "12px 0 10px" }}>
                  {e.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--b2-ink-soft)", lineHeight: 1.7, margin: "0 0 14px" }}>
                  {e.blurb}
                </p>
                <p className="eyebrow">{e.city}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: "var(--b2-blush)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 32px" }}>
          <p className="eyebrow">The vault</p>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 48px", maxWidth: 880 }}>
            Twelve brands. <em className="display-italic">Pays itself back.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="four-grid">
            {v2Partners.slice(0, 8).map((p) => (
              <div
                key={p.name}
                style={{
                  background: "var(--b2-paper)",
                  borderRadius: 24,
                  padding: "28px 16px",
                  textAlign: "center",
                  border: "1px solid var(--b2-rule)",
                }}
              >
                <p className="display" style={{ fontSize: 18, margin: 0 }}>{p.name}</p>
                <p style={{ fontSize: 11, color: "var(--b2-mute)", margin: "6px 0 0", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {p.discount}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/v2/b/discounts" className="btn btn-ghost">Open the vault →</Link>
          </div>
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ background: "var(--b2-ink)", color: "var(--b2-paper)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "112px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
          className="two-grid"
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--b2-paper)" }}>Why we exist</p>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "20px 0 24px" }}>
              <em className="display-italic">Five dollars,</em> every member, every month.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(250,246,238,0.78)", maxWidth: 520, margin: 0 }}>
              {v2Charities[0].blurb}
            </p>
            <Link to="/v2/b/charity" className="btn btn-soft" style={{ marginTop: 28 }}>
              See where it goes →
            </Link>
          </div>
          <div
            style={{
              border: "1px solid rgba(250,246,238,0.22)",
              borderRadius: 24,
              padding: 48,
              textAlign: "center",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--b2-paper)" }}>YTD 2026</p>
            <p className="display" style={{ fontSize: "clamp(72px, 12vw, 144px)", margin: "12px 0", lineHeight: 1 }}>
              ${v2Charities[0].contributedYTD.toLocaleString()}
            </p>
            <p style={{ color: "rgba(250,246,238,0.7)", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", margin: 0 }}>
              contributed by Haus members
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--b2-sand)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: "0 0 24px", lineHeight: 1.05 }}>
            A haus <em className="display-italic">designed</em> for slower weeks.
          </h2>
          <p style={{ fontSize: 17, color: "var(--b2-ink-soft)", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From ${featured.weekly.toFixed(2)} a week. ${featured.monthly.toFixed(2)} a month. No lock-in.
          </p>
          <Link to="/v2/b/memberships#join" className="btn btn-primary">
            Become a Member
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dir-v2b .hero-grid { grid-template-columns: 1fr !important; padding: 64px 24px !important; }
          .dir-v2b .three-grid { grid-template-columns: 1fr !important; }
          .dir-v2b .four-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dir-v2b .two-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
