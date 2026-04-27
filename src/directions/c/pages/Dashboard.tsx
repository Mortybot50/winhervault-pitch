import { Link } from "react-router-dom";
import { dashboard, partners, charity, currentDraw } from "../../../data/mock";

export default function DashboardC() {
  return (
    <div>
      <section style={{ background: "var(--c-ivory)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 32px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p className="eyebrow">Members area · {dashboard.tier} tier</p>
            <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 84px)", margin: "16px 0 8px", fontWeight: 300 }}>
              Good morning, <em style={{ fontStyle: "italic" }}>{dashboard.memberName}.</em>
            </h1>
            <p style={{ color: "var(--c-mute)", fontSize: 14, margin: 0 }}>
              {dashboard.joinedDate}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/c/memberships" className="btn btn-ghost">Manage tier</Link>
            <Link to="/c/draw" className="btn btn-ink">View current draw</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <div style={{ background: "var(--c-blush)", borderRadius: 24, padding: 40 }}>
            <p className="eyebrow">Your next draw</p>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: "12px 0 8px", fontWeight: 300 }}>
              <em style={{ fontStyle: "italic" }}>{currentDraw.prize}</em>
            </h2>
            <p style={{ color: "var(--c-ink-soft)", fontSize: 15, margin: "0 0 28px" }}>
              {currentDraw.drawDate} · {currentDraw.liveOn}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { l: "Your entries", v: dashboard.entriesThisDraw },
                { l: "This year", v: dashboard.totalEntriesYear },
                { l: "Pool", v: `${(currentDraw.totalEntries / 1000).toFixed(1)}k` },
              ].map((s) => (
                <div key={s.l} style={{ background: "var(--c-ivory)", borderRadius: 16, padding: 20 }}>
                  <p className="eyebrow">{s.l}</p>
                  <p className="display" style={{ fontSize: 36, margin: "6px 0 0", fontStyle: "italic", fontWeight: 300 }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--c-sage)", borderRadius: 24, padding: 40 }}>
            <p className="eyebrow">Your charity contribution</p>
            <p className="display" style={{ fontSize: "clamp(48px, 6vw, 76px)", margin: "12px 0 4px", fontStyle: "italic", fontWeight: 300 }}>
              ${dashboard.charityContributedYearToDate}
            </p>
            <p style={{ fontSize: 14, color: "var(--c-ink)", margin: 0, fontWeight: 500 }}>
              donated to {charity.partner} this year
            </p>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--c-ink-soft)", lineHeight: 1.6 }}>
              ${dashboard.charityContributedThisMonth} this month from your subscription. Combined with
              everyone else, that&rsquo;s ${charity.totalDonatedThisYear.toLocaleString()} delivered in 2026.
            </p>
            <a href="#" style={{ marginTop: 14, display: "inline-block", fontSize: 13, fontWeight: 500, color: "var(--c-ink)", textDecoration: "underline" }}>
              View statement →
            </a>
          </div>
        </div>
      </section>

      {/* PARTNER UNLOCKS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="eyebrow">Partner discounts unlocked</p>
            <h2 className="display" style={{ fontSize: 30, margin: "8px 0 0", fontWeight: 300 }}>
              <em style={{ fontStyle: "italic" }}>{dashboard.partnerDiscountsUnlocked}</em> of {dashboard.partnerDiscountsAvailable} active
            </h2>
          </div>
          <a href="#" className="btn btn-ghost">All partners →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {partners.map((p, i) => {
            const unlocked = i < dashboard.partnerDiscountsUnlocked;
            return (
              <div key={p.name} style={{
                background: unlocked ? "var(--c-sand)" : "var(--c-ivory)",
                border: unlocked ? "1px solid transparent" : "1px dashed rgba(58,58,54,0.18)",
                borderRadius: 16,
                padding: 22,
                opacity: unlocked ? 1 : 0.55,
              }}>
                <p className="eyebrow">{p.category}</p>
                <p className="display" style={{ fontSize: 22, margin: "8px 0 8px", fontWeight: 400, fontStyle: unlocked ? "italic" : "normal" }}>{p.name}</p>
                <p style={{ fontSize: 13, color: "var(--c-ink-soft)", margin: 0 }}>
                  {unlocked ? `${p.discount} off · code in app` : "Unlocks at Luxe tier"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REFERRALS + ACTIVITY */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 16 }}>
          <div style={{ background: "var(--c-ivory)", border: "1px solid rgba(58,58,54,0.10)", borderRadius: 24, padding: 32 }}>
            <p className="eyebrow">Referrals</p>
            <p className="display" style={{ fontSize: 56, margin: "12px 0 4px", fontStyle: "italic", fontWeight: 300 }}>
              {dashboard.referrals}<span style={{ fontSize: 20, opacity: 0.5, fontStyle: "normal" }}>/3</span>
            </p>
            <p style={{ fontSize: 14, color: "var(--c-mute)", margin: 0 }}>{dashboard.referralReward}</p>
            <div style={{ height: 4, background: "rgba(58,58,54,0.10)", marginTop: 24, borderRadius: 999 }}>
              <div style={{ width: `${(dashboard.referrals / 3) * 100}%`, height: 4, background: "var(--c-sage)", borderRadius: 999 }} />
            </div>
            <a href="#" className="btn btn-ghost" style={{ marginTop: 28, width: "100%", justifyContent: "center" }}>
              Copy your link
            </a>
          </div>
          <div style={{ background: "var(--c-ivory)", border: "1px solid rgba(58,58,54,0.10)", borderRadius: 24, padding: 32 }}>
            <p className="eyebrow">Recent activity</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 24px" }}>
              {dashboard.recentActivity.map((a) => (
                <li key={a.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(58,58,54,0.08)" }}>
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0, fontWeight: 400 }}>{a.label}</p>
                    <p style={{ fontSize: 13, color: "var(--c-mute)", margin: "2px 0 0" }}>{a.detail}</p>
                  </div>
                  <span className="eyebrow">{a.date}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow">Upcoming</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
              {dashboard.upcomingEvents.map((e) => (
                <li key={e.title} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px dashed rgba(58,58,54,0.10)" }}>
                  <span>{e.title}</span>
                  <span style={{ color: "var(--c-sage-deep)", fontWeight: 500 }}>{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
