import { Link } from "react-router-dom";
import { dashboard, partners, charity, currentDraw } from "../../../data/mock";

export default function DashboardA() {
  return (
    <div>
      <section style={{ borderBottom: "1px solid rgba(17,17,17,0.10)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "56px 32px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p className="eyebrow">Members area</p>
            <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 72px)", margin: "12px 0 8px" }}>
              Good morning, <em className="italic-display">{dashboard.memberName}.</em>
            </h1>
            <p style={{ color: "var(--a-mute)", fontSize: 14, margin: 0 }}>
              {dashboard.tier} tier · {dashboard.joinedDate}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/a/memberships" className="btn btn-ghost">Manage tier</Link>
            <Link to="/a/draw" className="btn btn-dark">View current draw</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
          {/* NEXT DRAW CARD */}
          <div style={{ background: "var(--a-ink)", color: "var(--a-paper)", padding: 40 }}>
            <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Your next draw</p>
            <p className="display" style={{ fontSize: 48, margin: "16px 0 8px" }}>
              {currentDraw.prize}
            </p>
            <p style={{ color: "rgba(245,239,230,0.8)", fontSize: 15, margin: "0 0 24px" }}>
              {currentDraw.drawDate} · {currentDraw.liveOn}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, paddingTop: 24, borderTop: "1px solid rgba(245,239,230,0.2)" }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Your entries</p>
                <p className="serif" style={{ fontSize: 36, margin: "6px 0 0" }}>{dashboard.entriesThisDraw}</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--a-gold)" }}>This year</p>
                <p className="serif" style={{ fontSize: 36, margin: "6px 0 0" }}>{dashboard.totalEntriesYear}</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--a-gold)" }}>Pool size</p>
                <p className="serif" style={{ fontSize: 36, margin: "6px 0 0" }}>{(currentDraw.totalEntries / 1000).toFixed(1)}k</p>
              </div>
            </div>
          </div>

          {/* CHARITY CARD */}
          <div style={{ background: "var(--a-cream)", padding: 40, border: "1px solid rgba(17,17,17,0.10)" }}>
            <p className="eyebrow">Your charity contribution</p>
            <p className="display" style={{ fontSize: 48, margin: "12px 0 4px", color: "var(--a-spot)" }}>
              ${dashboard.charityContributedYearToDate}
            </p>
            <p style={{ fontSize: 14, color: "var(--a-mute)", margin: 0 }}>
              donated to {charity.partner} this year
            </p>
            <p style={{ marginTop: 20, fontSize: 14, color: "var(--a-ink-soft)", lineHeight: 1.55 }}>
              ${dashboard.charityContributedThisMonth} from your subscription this month. Combined with
              other members, that&rsquo;s ${charity.totalDonatedThisYear.toLocaleString()} delivered to
              women in need across Australia in 2026.
            </p>
            <a href="#" style={{ marginTop: 16, display: "inline-block", fontSize: 13, color: "var(--a-spot)", textDecoration: "underline" }}>
              View statement →
            </a>
          </div>
        </div>
      </section>

      {/* PARTNER UNLOCKS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24 }}>
          <div>
            <p className="eyebrow">Partner discounts unlocked</p>
            <h2 className="serif" style={{ fontSize: 32, margin: "8px 0 0" }}>
              {dashboard.partnerDiscountsUnlocked} of {dashboard.partnerDiscountsAvailable} active
            </h2>
          </div>
          <a className="btn btn-ghost" href="#">All partners →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {partners.slice(0, 8).map((p, i) => (
            <div key={p.name} style={{ border: "1px solid rgba(17,17,17,0.10)", padding: 20, opacity: i < dashboard.partnerDiscountsUnlocked ? 1 : 0.45 }}>
              <p className="eyebrow">{p.category}</p>
              <p className="serif" style={{ fontSize: 22, margin: "8px 0 0" }}>{p.name}</p>
              <p style={{ fontSize: 13, color: "var(--a-mute)", margin: "8px 0 0" }}>
                {i < dashboard.partnerDiscountsUnlocked ? `${p.discount} off · code in app` : "Unlocks at Luxe tier"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REFERRALS + ACTIVITY */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}>
          <div style={{ border: "1px solid rgba(17,17,17,0.10)", padding: 32 }}>
            <p className="eyebrow">Referrals</p>
            <p className="display" style={{ fontSize: 44, margin: "12px 0 4px" }}>
              {dashboard.referrals}<span style={{ fontSize: 22, opacity: 0.5 }}>/3</span>
            </p>
            <p style={{ fontSize: 13, color: "var(--a-mute)", margin: 0 }}>{dashboard.referralReward}</p>
            <div style={{ height: 4, background: "rgba(17,17,17,0.10)", marginTop: 20, borderRadius: 2 }}>
              <div style={{ width: `${(dashboard.referrals / 3) * 100}%`, height: 4, background: "var(--a-spot)", borderRadius: 2 }} />
            </div>
            <a className="btn btn-ghost" href="#" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
              Copy your link
            </a>
          </div>
          <div style={{ border: "1px solid rgba(17,17,17,0.10)", padding: 32 }}>
            <p className="eyebrow">Recent activity</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
              {dashboard.recentActivity.map((a) => (
                <li key={a.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(17,17,17,0.08)" }}>
                  <div>
                    <p className="serif" style={{ fontSize: 18, margin: 0 }}>{a.label}</p>
                    <p style={{ fontSize: 13, color: "var(--a-mute)", margin: "2px 0 0" }}>{a.detail}</p>
                  </div>
                  <span className="eyebrow">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
