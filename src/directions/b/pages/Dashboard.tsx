import { Link } from "react-router-dom";
import { dashboard, partners, charity, currentDraw } from "../../../data/mock";

export default function DashboardB() {
  return (
    <div>
      <section style={{ background: "var(--b-berry)", color: "var(--b-cream)", paddingBottom: 48 }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "56px 32px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="chip" style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)" }}>
              Members area · Tier {dashboard.tier}
            </span>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: "16px 0 8px" }}>
              Hi <span style={{ color: "var(--b-gold)" }}>{dashboard.memberName}.</span>
            </h1>
            <p style={{ color: "rgba(255,247,242,0.7)", fontSize: 14, margin: 0 }}>
              {dashboard.joinedDate}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/b/memberships" className="btn btn-cream">Manage tier</Link>
            <Link to="/b/draw" className="btn btn-gold">View current draw →</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: "-32px auto 0", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <div style={{ background: "var(--b-berry-deep)", color: "var(--b-cream)", borderRadius: 16, padding: 36, boxShadow: "0 24px 48px rgba(0,0,0,0.20)" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>Your next draw</p>
            <h2 className="display" style={{ fontSize: 56, margin: "12px 0 8px", color: "var(--b-gold)" }}>
              {currentDraw.prize}
            </h2>
            <p style={{ color: "rgba(255,247,242,0.75)", fontSize: 15, margin: "0 0 24px" }}>
              {currentDraw.drawDate} · {currentDraw.liveOn}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, paddingTop: 24, borderTop: "1px solid rgba(255,247,242,0.18)" }}>
              {[
                { l: "Your entries", v: dashboard.entriesThisDraw },
                { l: "This year", v: dashboard.totalEntriesYear },
                { l: "Pool size", v: `${(currentDraw.totalEntries / 1000).toFixed(1)}k` },
              ].map((s) => (
                <div key={s.l}>
                  <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>{s.l.toUpperCase()}</p>
                  <p className="display" style={{ fontSize: 40, margin: "6px 0 0" }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--b-gold)", color: "var(--b-berry-deep)", borderRadius: 16, padding: 36 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", margin: 0, fontWeight: 700 }}>Your charity contribution</p>
            <p className="display" style={{ fontSize: 64, margin: "12px 0 4px" }}>
              ${dashboard.charityContributedYearToDate}
            </p>
            <p style={{ fontSize: 14, margin: 0, fontWeight: 600 }}>
              donated to {charity.partner} this year
            </p>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55, opacity: 0.85 }}>
              ${dashboard.charityContributedThisMonth} from your sub this month — combined with everyone
              else, that&rsquo;s ${charity.totalDonatedThisYear.toLocaleString()} delivered in 2026.
            </p>
            <a href="#" style={{ marginTop: 14, display: "inline-block", fontSize: 13, fontWeight: 700, color: "var(--b-berry-deep)", textDecoration: "underline" }}>
              View statement →
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 32px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="eyebrow">Partner discounts unlocked</p>
            <h2 className="display-tight" style={{ fontSize: 32, margin: "8px 0 0" }}>
              {dashboard.partnerDiscountsUnlocked} of {dashboard.partnerDiscountsAvailable} active
            </h2>
          </div>
          <a href="#" className="btn btn-ghost">All partners →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {partners.map((p, i) => {
            const unlocked = i < dashboard.partnerDiscountsUnlocked;
            return (
              <div
                key={p.name}
                style={{
                  background: unlocked ? "var(--b-cream)" : "rgba(26,10,18,0.04)",
                  border: unlocked ? "1.5px solid var(--b-berry)" : "1.5px dashed rgba(26,10,18,0.20)",
                  borderRadius: 12,
                  padding: 22,
                  opacity: unlocked ? 1 : 0.55,
                }}
              >
                <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--b-mute)", textTransform: "uppercase", fontWeight: 600, margin: 0 }}>
                  {p.category}
                </p>
                <p className="display-tight" style={{ fontSize: 22, margin: "6px 0 8px", color: "var(--b-berry)" }}>{p.name}</p>
                <p style={{ fontSize: 13, margin: 0, color: "var(--b-ink)" }}>
                  {unlocked ? `${p.discount} off · code in app` : "Unlocks at Luxe tier"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REFERRALS + ACTIVITY */}
      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 16 }}>
          <div style={{ background: "var(--b-berry)", color: "var(--b-cream)", borderRadius: 16, padding: 32 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--b-gold)", margin: 0, fontWeight: 700 }}>REFERRALS</p>
            <p className="display" style={{ fontSize: 56, margin: "12px 0 4px" }}>
              {dashboard.referrals}<span style={{ fontSize: 24, opacity: 0.5 }}>/3</span>
            </p>
            <p style={{ fontSize: 14, color: "var(--b-gold)", margin: 0 }}>{dashboard.referralReward}</p>
            <div style={{ height: 6, background: "rgba(255,247,242,0.15)", marginTop: 24, borderRadius: 999 }}>
              <div style={{ width: `${(dashboard.referrals / 3) * 100}%`, height: 6, background: "var(--b-gold)", borderRadius: 999 }} />
            </div>
            <Link to="#" className="btn btn-gold" style={{ marginTop: 28, width: "100%", justifyContent: "center" }}>
              Copy your link
            </Link>
          </div>
          <div style={{ background: "var(--b-cream)", border: "1.5px solid rgba(26,10,18,0.08)", borderRadius: 16, padding: 32 }}>
            <p className="eyebrow">Recent activity</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
              {dashboard.recentActivity.map((a) => (
                <li key={a.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(26,10,18,0.08)" }}>
                  <div>
                    <p className="display-tight" style={{ fontSize: 18, margin: 0 }}>{a.label}</p>
                    <p style={{ fontSize: 13, color: "var(--b-mute)", margin: "2px 0 0" }}>{a.detail}</p>
                  </div>
                  <span style={{ fontSize: 11, color: "var(--b-mute)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>{a.date}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow" style={{ marginTop: 24 }}>Upcoming events</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
              {dashboard.upcomingEvents.map((e) => (
                <li key={e.title} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px dashed rgba(26,10,18,0.10)" }}>
                  <span style={{ fontWeight: 500 }}>{e.title}</span>
                  <span style={{ color: "var(--b-berry)", fontWeight: 600 }}>{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
