import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  v2Member,
  v2Events,
  v2Partners,
  v2NextDraw,
  v2Countdown,
  getV2Tiers,
} from "../../../../data/mock";

export default function DashboardV2A() {
  const [c, setC] = useState(v2Countdown());
  useEffect(() => {
    const i = setInterval(() => setC(v2Countdown()), 1000);
    return () => clearInterval(i);
  }, []);

  const tier = getV2Tiers("a")[1]; // The Edit
  const rsvpedEvents = v2Events.filter((e) => v2Member.eventRsvps.includes(e.id as never));
  const unlockedPartners = v2Partners.filter((p) =>
    v2Member.unlockedPartnerNames.includes(p.name as never),
  );

  return (
    <div style={{ background: "var(--a2-cream)" }}>
      {/* Greeting */}
      <section style={{ borderBottom: "1px solid var(--a2-rule)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "48px 32px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p className="eyebrow">Wednesday, 6 May · {tier.name}</p>
            <h1
              className="display"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "12px 0 0", lineHeight: 1.05 }}
            >
              Hello, <em className="display-italic">{v2Member.name}</em>.
            </h1>
            <p style={{ color: "var(--a2-ink-soft)", fontSize: 15, margin: "8px 0 0" }}>
              {v2Member.joinedDate} · {v2Member.monthsActive} months in
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              className="display"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background:
                  "linear-gradient(160deg, hsl(28 60% 86%), hsl(20 45% 70%))",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "var(--a2-ink)",
              }}
            >
              O{v2Member.initial}
            </span>
            <Link to="/v2/a/login" className="btn btn-ghost" style={{ fontSize: 11 }}>
              Manage account
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        {/* Top row — countdown + entries */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
          className="dash-row-3"
        >
          <Card>
            <p className="eyebrow">Next live draw · {v2NextDraw.drawDate}</p>
            <p className="display" style={{ fontSize: 26, margin: "10px 0 16px" }}>
              {v2NextDraw.prize}
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
              {[
                { v: c.days, l: "D" },
                { v: c.hours, l: "H" },
                { v: c.mins, l: "M" },
                { v: c.secs, l: "S" },
              ].map((seg) => (
                <div key={seg.l}>
                  <p className="display" style={{ fontSize: 40, margin: 0, lineHeight: 1 }}>
                    {String(seg.v).padStart(2, "0")}
                  </p>
                  <p className="eyebrow" style={{ marginTop: 6 }}>{seg.l}</p>
                </div>
              ))}
            </div>
            <Link to="/v2/a/winners" className="btn btn-dark" style={{ fontSize: 11 }}>
              View past winners →
            </Link>
          </Card>

          <Card>
            <p className="eyebrow">Your entries this draw</p>
            <p
              className="display"
              style={{ fontSize: 88, margin: "8px 0 0", lineHeight: 0.95 }}
            >
              {v2Member.entriesThisDraw}
            </p>
            <p style={{ fontSize: 13, color: "var(--a2-ink-soft)", margin: "10px 0 0" }}>
              {v2Member.totalEntriesYear} entries year-to-date
            </p>
          </Card>

          <Card>
            <p className="eyebrow">Your contribution</p>
            <p
              className="display"
              style={{ fontSize: 56, margin: "8px 0 0", lineHeight: 1 }}
            >
              ${v2Member.charityContributedYTD}
            </p>
            <p style={{ fontSize: 13, color: "var(--a2-ink-soft)", margin: "10px 0 0" }}>
              YTD to women's charity · ${v2Member.charityContributedAllTime} all time
            </p>
          </Card>
        </div>

        {/* Second row — events + discounts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
          className="dash-row-2"
        >
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <p className="eyebrow">RSVP'd events · {rsvpedEvents.length}</p>
              <Link to="/v2/a/events?member=1" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--a2-spot)", textDecoration: "none" }}>
                See all →
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {rsvpedEvents.map((e) => (
                <li
                  key={e.id}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--a2-rule)",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: `linear-gradient(160deg, hsl(${e.imageHue} 50% 86%), hsl(${e.imageHue} 35% 60%))`,
                    }}
                  />
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>
                      {e.title}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--a2-mute)", margin: "4px 0 0", letterSpacing: "0.04em" }}>
                      {e.date} · {e.city}
                    </p>
                  </div>
                  <span className="eyebrow" style={{ color: "var(--a2-spot)" }}>RSVP'd</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <p className="eyebrow">Unlocked codes · {v2Member.unlockedCodes}/{v2Member.totalCodes}</p>
              <Link to="/v2/a/discounts?member=1" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--a2-spot)", textDecoration: "none" }}>
                Browse all →
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {unlockedPartners.map((p) => (
                <li
                  key={p.name}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--a2-rule)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--a2-mute)", margin: "4px 0 0", letterSpacing: "0.04em" }}>
                      {p.discount} · {p.category}
                    </p>
                  </div>
                  <code
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      background: "var(--a2-ink)",
                      color: "var(--a2-cream)",
                      padding: "6px 10px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {p.code}
                  </code>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tier card + Recent activity */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 20,
          }}
          className="dash-row-2"
        >
          <Card>
            <p className="eyebrow">Your seat</p>
            <h2 className="display" style={{ fontSize: 36, margin: "12px 0 6px" }}>
              {tier.name}
            </h2>
            <p style={{ fontSize: 14, color: "var(--a2-ink-soft)", margin: "0 0 18px" }}>
              {tier.tagline}
            </p>
            <p className="display" style={{ fontSize: 32, margin: "0 0 4px" }}>
              ${tier.weekly.toFixed(2)}
              <span style={{ fontSize: 13, opacity: 0.7 }}>/wk</span>
            </p>
            <p style={{ fontSize: 12, color: "var(--a2-mute)", margin: "0 0 24px" }}>
              ${tier.monthly.toFixed(2)}/month · next billed Wed 1 Jun
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>
                Change tier
              </button>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>
                Pause
              </button>
            </div>
          </Card>

          <Card>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              Recent activity
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {v2Member.recentActivity.map((a, i) => (
                <li
                  key={i}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--a2-rule)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <p className="display" style={{ fontSize: 16, margin: 0 }}>
                      {a.label}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--a2-mute)", margin: "4px 0 0", letterSpacing: "0.02em" }}>
                      {a.detail}
                    </p>
                  </div>
                  <span className="eyebrow">{a.date}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) { .dir-v2a .dash-row-3 { grid-template-columns: 1fr 1fr !important; } .dir-v2a .dash-row-2 { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .dir-v2a .dash-row-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--a2-paper)",
        border: "1px solid var(--a2-rule)",
        padding: 28,
        borderRadius: 0,
      }}
    >
      {children}
    </div>
  );
}
