import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { v2Member, v2Events, v2Partners, v2NextDraw, v2Countdown, getV2Tiers } from "../../../../data/mock";

export default function DashboardV2D() {
  const [c, setC] = useState(v2Countdown());
  useEffect(() => {
    const i = setInterval(() => setC(v2Countdown()), 1000);
    return () => clearInterval(i);
  }, []);
  const tier = getV2Tiers("d")[1]; // II
  const rsvpedEvents = v2Events.filter((e) => v2Member.eventRsvps.includes(e.id as never));
  const unlockedPartners = v2Partners.filter((p) => v2Member.unlockedPartnerNames.includes(p.name as never));

  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--d2-rule)", background: "var(--d2-paper)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "72px 40px 48px", display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <p className="eyebrow">Wednesday 6 May · Tier {tier.name}</p>
            <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 0", letterSpacing: "-0.015em" }}>
              Hello, <em className="display-italic">{v2Member.name}</em>.
            </h1>
            <p style={{ color: "var(--d2-ink-soft)", fontSize: 14, margin: "12px 0 0" }}>
              {v2Member.joinedDate} · {v2Member.monthsActive} months in the circle
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              className="display"
              style={{
                width: 64,
                height: 64,
                background: "linear-gradient(180deg, var(--d2-warm), var(--d2-mute))",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "var(--d2-paper)",
              }}
            >
              O{v2Member.initial}
            </span>
            <Link to="/v2/d/login" className="btn btn-ghost" style={{ fontSize: 11 }}>Manage</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="dash-row-3">
          <div style={{ padding: 36, background: "var(--d2-ink)", color: "var(--d2-bone)", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid var(--d2-rule)" }}>
            <p className="eyebrow" style={{ color: "var(--d2-warm)" }}>Next live draw · {v2NextDraw.drawDate}</p>
            <p className="display" style={{ fontSize: 28, margin: "16px 0 24px" }}>{v2NextDraw.prize}</p>
            <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
              {[{ v: c.days, l: "D" }, { v: c.hours, l: "H" }, { v: c.mins, l: "M" }, { v: c.secs, l: "S" }].map((seg) => (
                <div key={seg.l}>
                  <p className="display" style={{ fontSize: 44, margin: 0, lineHeight: 1 }}>{String(seg.v).padStart(2, "0")}</p>
                  <p className="eyebrow" style={{ marginTop: 10, color: "var(--d2-warm)" }}>{seg.l}</p>
                </div>
              ))}
            </div>
            <Link to="/v2/d/winners" className="btn btn-light" style={{ fontSize: 11 }}>Past winners</Link>
          </div>
          <div style={{ padding: 36, background: "var(--d2-paper)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <p className="eyebrow">Your entries this draw</p>
            <p className="display" style={{ fontSize: 96, margin: "8px 0 0", lineHeight: 0.95 }}>{v2Member.entriesThisDraw}</p>
            <p style={{ fontSize: 13, color: "var(--d2-mute)", margin: "12px 0 0" }}>{v2Member.totalEntriesYear} entries year-to-date</p>
          </div>
          <div style={{ padding: 36, background: "var(--d2-stone)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <p className="eyebrow">Your contribution</p>
            <p className="display" style={{ fontSize: 56, margin: "8px 0 0", lineHeight: 1 }}>${v2Member.charityContributedYTD}</p>
            <p style={{ fontSize: 13, color: "var(--d2-mute)", margin: "12px 0 0" }}>YTD · ${v2Member.charityContributedAllTime} all time</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="dash-row-2">
          <div style={{ padding: 36, background: "var(--d2-paper)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
              <p className="eyebrow">RSVP'd · {rsvpedEvents.length}</p>
              <Link to="/v2/d/events?member=1" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--d2-ink)", textDecoration: "none", borderBottom: "1px solid var(--d2-ink)", paddingBottom: 2 }}>
                See all
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {rsvpedEvents.map((e) => (
                <li key={e.id} style={{ padding: "18px 0", borderTop: "1px solid var(--d2-rule)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "center" }}>
                  <div style={{ width: 48, height: 48, background: `linear-gradient(180deg, hsl(${e.imageHue} 16% 86%), hsl(${e.imageHue} 12% 64%))` }} />
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>{e.title}</p>
                    <p style={{ fontSize: 12, color: "var(--d2-mute)", margin: "4px 0 0" }}>{e.date} · {e.city}</p>
                  </div>
                  <span className="eyebrow">RSVP'd</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: 36, background: "var(--d2-paper)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
              <p className="eyebrow">Codes · {v2Member.unlockedCodes}/{v2Member.totalCodes}</p>
              <Link to="/v2/d/discounts?member=1" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--d2-ink)", textDecoration: "none", borderBottom: "1px solid var(--d2-ink)", paddingBottom: 2 }}>
                Browse all
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {unlockedPartners.map((p) => (
                <li key={p.name} style={{ padding: "18px 0", borderTop: "1px solid var(--d2-rule)", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: "var(--d2-mute)", margin: "4px 0 0" }}>{p.discount} · {p.category}</p>
                  </div>
                  <code style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, background: "var(--d2-ink)", color: "var(--d2-bone)", padding: "8px 14px", letterSpacing: "0.1em" }}>
                    {p.code}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 0, borderLeft: "1px solid var(--d2-rule)" }} className="dash-row-2">
          <div style={{ padding: 36, background: "var(--d2-bone)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <p className="eyebrow">Your tier</p>
            <h2 className="display" style={{ fontSize: 88, margin: "16px 0 12px", lineHeight: 1 }}>{tier.name}</h2>
            <p style={{ fontSize: 14, color: "var(--d2-ink-soft)", margin: "0 0 24px", lineHeight: 1.7 }}>{tier.tagline}</p>
            <p className="display" style={{ fontSize: 32, margin: "0 0 4px" }}>
              ${tier.weekly.toFixed(2)}<span style={{ fontSize: 13, color: "var(--d2-mute)" }}>/wk</span>
            </p>
            <p className="eyebrow" style={{ margin: "0 0 28px" }}>${tier.monthly.toFixed(2)}/month · next billed Wed 1 Jun</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>Change tier</button>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>Pause</button>
            </div>
          </div>
          <div style={{ padding: 36, background: "var(--d2-paper)", borderRight: "1px solid var(--d2-rule)", borderBottom: "1px solid var(--d2-rule)" }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Recent activity</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {v2Member.recentActivity.map((a, i) => (
                <li key={i} style={{ padding: "18px 0", borderTop: "1px solid var(--d2-rule)", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "baseline" }}>
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>{a.label}</p>
                    <p style={{ fontSize: 12, color: "var(--d2-mute)", margin: "4px 0 0" }}>{a.detail}</p>
                  </div>
                  <span className="eyebrow">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) { .dir-v2d .dash-row-3 { grid-template-columns: 1fr !important; } .dir-v2d .dash-row-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
