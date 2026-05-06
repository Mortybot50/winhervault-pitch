import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { v2Member, v2Events, v2Partners, v2NextDraw, v2Countdown, getV2Tiers } from "../../../../data/mock";

export default function DashboardV2C() {
  const [c, setC] = useState(v2Countdown());
  useEffect(() => {
    const i = setInterval(() => setC(v2Countdown()), 1000);
    return () => clearInterval(i);
  }, []);
  const tier = getV2Tiers("c")[1]; // Luxe
  const rsvpedEvents = v2Events.filter((e) => v2Member.eventRsvps.includes(e.id as never));
  const unlockedPartners = v2Partners.filter((p) => v2Member.unlockedPartnerNames.includes(p.name as never));

  return (
    <div style={{ background: "var(--c2-cream)" }}>
      <section style={{ background: "var(--c2-paper)", borderBottom: "1px solid var(--c2-rule)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px 28px", display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="pill">Wednesday 6 May · {tier.name} member</span>
            <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "16px 0 0", lineHeight: 1.05 }}>
              Hello, <em className="display-italic" style={{ color: "var(--c2-berry)" }}>{v2Member.name}.</em>
            </h1>
            <p style={{ color: "var(--c2-ink-soft)", fontSize: 14, margin: "8px 0 0" }}>
              {v2Member.joinedDate} · {v2Member.monthsActive} months in the Vault
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              className="display"
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                background: "linear-gradient(160deg, var(--c2-gold) 0%, var(--c2-berry) 100%)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "var(--c2-cream)",
              }}
            >
              O{v2Member.initial}
            </span>
            <Link to="/v2/c/login" className="btn btn-ghost" style={{ fontSize: 11 }}>Manage</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 20, marginBottom: 20 }} className="dash-row-3">
          <div className="card" style={{ background: "var(--c2-berry)", color: "var(--c2-cream)" }}>
            <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Next live draw · {v2NextDraw.drawDate}</p>
            <p className="display" style={{ fontSize: 28, margin: "10px 0 16px" }}>{v2NextDraw.prize}</p>
            <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
              {[{ v: c.days, l: "D" }, { v: c.hours, l: "H" }, { v: c.mins, l: "M" }, { v: c.secs, l: "S" }].map((seg) => (
                <div key={seg.l}>
                  <p className="display" style={{ fontSize: 42, margin: 0, lineHeight: 1, color: "var(--c2-gold)" }}>{String(seg.v).padStart(2, "0")}</p>
                  <p className="eyebrow" style={{ marginTop: 6, color: "rgba(255,247,242,0.65)" }}>{seg.l}</p>
                </div>
              ))}
            </div>
            <Link to="/v2/c/winners" className="btn btn-gold" style={{ fontSize: 11 }}>View past winners →</Link>
          </div>
          <div className="card" style={{ background: "var(--c2-gold-soft)" }}>
            <p className="eyebrow">Your entries this draw</p>
            <p className="display" style={{ fontSize: 88, margin: "8px 0 0", lineHeight: 0.95, color: "var(--c2-berry)" }}>{v2Member.entriesThisDraw}</p>
            <p style={{ fontSize: 13, color: "var(--c2-ink-soft)", margin: "10px 0 0" }}>{v2Member.totalEntriesYear} entries year-to-date</p>
          </div>
          <div className="card" style={{ background: "var(--c2-cream-warm)" }}>
            <p className="eyebrow">Your contribution</p>
            <p className="display" style={{ fontSize: 56, margin: "8px 0 0", lineHeight: 1, color: "var(--c2-berry)" }}>${v2Member.charityContributedYTD}</p>
            <p style={{ fontSize: 13, color: "var(--c2-ink-soft)", margin: "10px 0 0" }}>YTD · ${v2Member.charityContributedAllTime} all time</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="dash-row-2">
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <p className="eyebrow">RSVP'd · {rsvpedEvents.length}</p>
              <Link to="/v2/c/events?member=1" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c2-berry)", textDecoration: "none" }}>
                See all →
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {rsvpedEvents.map((e) => (
                <li key={e.id} style={{ padding: "14px 0", borderTop: "1px solid var(--c2-rule)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(160deg, hsl(${e.imageHue} 35% 86%), hsl(${e.imageHue} 28% 60%))` }} />
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>{e.title}</p>
                    <p style={{ fontSize: 12, color: "var(--c2-mute)", margin: "4px 0 0" }}>{e.date} · {e.city}</p>
                  </div>
                  <span className="pill">RSVP'd</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <p className="eyebrow">Codes · {v2Member.unlockedCodes}/{v2Member.totalCodes}</p>
              <Link to="/v2/c/discounts?member=1" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c2-berry)", textDecoration: "none" }}>
                Browse all →
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {unlockedPartners.map((p) => (
                <li key={p.name} style={{ padding: "14px 0", borderTop: "1px solid var(--c2-rule)", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0 }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: "var(--c2-mute)", margin: "4px 0 0" }}>{p.discount} · {p.category}</p>
                  </div>
                  <code style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, background: "var(--c2-berry)", color: "var(--c2-gold)", padding: "6px 12px", borderRadius: 8, letterSpacing: "0.08em", fontWeight: 600 }}>
                    {p.code}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 20 }} className="dash-row-2">
          <div className="card" style={{ background: "var(--c2-gold-soft)" }}>
            <p className="eyebrow">Your tier</p>
            <h2 className="display" style={{ fontSize: 38, margin: "12px 0 6px" }}>{tier.name}</h2>
            <p style={{ fontSize: 14, color: "var(--c2-ink-soft)", margin: "0 0 18px" }}>{tier.tagline}</p>
            <p className="display" style={{ fontSize: 32, margin: "0 0 4px" }}>
              ${tier.weekly.toFixed(2)}<span style={{ fontSize: 13, opacity: 0.7 }}>/wk</span>
            </p>
            <p style={{ fontSize: 12, color: "var(--c2-mute)", margin: "0 0 24px" }}>${tier.monthly.toFixed(2)}/month · next billed Wed 1 Jun</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>Change tier</button>
              <button type="button" className="btn btn-ghost" style={{ fontSize: 11 }}>Pause</button>
            </div>
          </div>
          <div className="card">
            <p className="eyebrow" style={{ marginBottom: 14 }}>Recent activity</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {v2Member.recentActivity.map((a, i) => (
                <li key={i} style={{ padding: "14px 0", borderTop: "1px solid var(--c2-rule)", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "baseline" }}>
                  <div>
                    <p className="display" style={{ fontSize: 16, margin: 0 }}>{a.label}</p>
                    <p style={{ fontSize: 12, color: "var(--c2-mute)", margin: "4px 0 0" }}>{a.detail}</p>
                  </div>
                  <span className="eyebrow" style={{ color: "var(--c2-mute)" }}>{a.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) { .dir-v2c .dash-row-3 { grid-template-columns: 1fr 1fr !important; } .dir-v2c .dash-row-2 { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .dir-v2c .dash-row-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
