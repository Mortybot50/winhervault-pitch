import { Link } from "react-router-dom";
import { dashboard, partners, charity, currentDraw } from "../../../data/mock";

export default function DashboardD() {
  return (
    <div>
      <section style={{ background: "var(--d-pink)", color: "var(--d-cream)", paddingBottom: 48 }}>
        <div
          style={{
            maxWidth: 1400,
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
            <span className="pill" style={{ background: "var(--d-gold)", color: "var(--d-ink)" }}>
              ★ {dashboard.tier.toUpperCase()} TIER
            </span>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "16px 0 8px" }}>
              HI <span style={{ color: "var(--d-gold)" }}>{dashboard.memberName.toUpperCase()}.</span>
            </h1>
            <p style={{ color: "rgba(255,246,229,0.8)", fontSize: 14, margin: 0 }}>
              {dashboard.joinedDate}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/d/memberships" className="btn btn-cream">Manage tier</Link>
            <Link to="/d/draw" className="btn btn-gold">View current draw →</Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1400, margin: "-32px auto 0", padding: "0 32px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <div style={{ background: "var(--d-emerald-deep)", color: "var(--d-cream)", borderRadius: 28, padding: 40, border: "3px solid var(--d-ink)", boxShadow: "0 8px 0 var(--d-pink)" }}>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>Your next draw</p>
            <h2 className="display" style={{ fontSize: 64, margin: "12px 0 8px", color: "var(--d-gold)" }}>
              {currentDraw.prize.toUpperCase()}
            </h2>
            <p style={{ color: "rgba(255,246,229,0.75)", fontSize: 15, margin: "0 0 28px" }}>
              {currentDraw.drawDate} · {currentDraw.liveOn}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { l: "Your entries", v: dashboard.entriesThisDraw, accent: "var(--d-gold)" },
                { l: "This year", v: dashboard.totalEntriesYear, accent: "var(--d-pink)" },
                { l: "Pool size", v: `${(currentDraw.totalEntries / 1000).toFixed(1)}k`, accent: "var(--d-cream)" },
              ].map((s) => (
                <div key={s.l} style={{ background: "rgba(255,246,229,0.06)", border: "1px solid rgba(255,246,229,0.18)", borderRadius: 16, padding: 18 }}>
                  <p className="eyebrow" style={{ color: s.accent, margin: 0 }}>{s.l}</p>
                  <p className="display" style={{ fontSize: 44, margin: "6px 0 0", color: s.accent }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--d-gold)", color: "var(--d-ink)", borderRadius: 28, padding: 40, border: "3px solid var(--d-ink)", boxShadow: "0 8px 0 var(--d-violet)" }}>
            <p className="eyebrow">Your charity contribution</p>
            <p className="display" style={{ fontSize: 88, margin: "12px 0 4px", color: "var(--d-pink)", lineHeight: 0.9 }}>
              ${dashboard.charityContributedYearToDate}
            </p>
            <p style={{ fontSize: 14, margin: 0, fontWeight: 700 }}>
              DONATED TO {charity.partner.toUpperCase()} THIS YEAR
            </p>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55 }}>
              ${dashboard.charityContributedThisMonth} from your sub this month — combined with everyone
              else, that&rsquo;s ${charity.totalDonatedThisYear.toLocaleString()} delivered in 2026.
            </p>
            <a href="#" style={{ marginTop: 14, display: "inline-block", fontSize: 13, fontWeight: 700, color: "var(--d-ink)", textDecoration: "underline" }}>
              View statement →
            </a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 32px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--d-pink)" }}>Partner discounts unlocked</p>
            <h2 className="display" style={{ fontSize: 40, margin: "8px 0 0" }}>
              <span style={{ color: "var(--d-pink)" }}>{dashboard.partnerDiscountsUnlocked}</span> OF {dashboard.partnerDiscountsAvailable} ACTIVE
            </h2>
          </div>
          <a href="#" className="btn btn-emerald">All partners →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {partners.map((p, i) => {
            const unlocked = i < dashboard.partnerDiscountsUnlocked;
            const palettes = [
              { bg: "var(--d-pink)", fg: "var(--d-cream)" },
              { bg: "var(--d-violet)", fg: "var(--d-cream)" },
              { bg: "var(--d-emerald)", fg: "var(--d-gold)" },
              { bg: "var(--d-gold)", fg: "var(--d-ink)" },
            ];
            const pal = palettes[i % palettes.length];
            return (
              <div
                key={p.name}
                style={{
                  background: unlocked ? pal.bg : "var(--d-cream)",
                  color: unlocked ? pal.fg : "var(--d-ink)",
                  border: unlocked ? "3px solid var(--d-ink)" : "2px dashed rgba(8,8,12,0.20)",
                  borderRadius: 20,
                  padding: 22,
                  opacity: unlocked ? 1 : 0.55,
                }}
              >
                <p className="eyebrow" style={{ margin: 0 }}>{p.category}</p>
                <p className="display" style={{ fontSize: 24, margin: "8px 0 12px" }}>{p.name.toUpperCase()}</p>
                <p style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>
                  {unlocked ? `${p.discount} OFF · CODE IN APP` : "UNLOCKS AT LUXE"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REFERRALS + ACTIVITY */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 16 }}>
          <div style={{ background: "var(--d-violet)", color: "var(--d-cream)", borderRadius: 24, padding: 32, border: "3px solid var(--d-ink)", boxShadow: "0 8px 0 var(--d-pink)" }}>
            <p className="eyebrow" style={{ color: "var(--d-gold)" }}>REFERRALS</p>
            <p className="display" style={{ fontSize: 88, margin: "12px 0 4px", lineHeight: 0.9 }}>
              {dashboard.referrals}<span style={{ fontSize: 32, opacity: 0.5 }}>/3</span>
            </p>
            <p style={{ fontSize: 14, color: "var(--d-gold)", margin: 0, fontWeight: 700 }}>{dashboard.referralReward}</p>
            <div style={{ height: 8, background: "rgba(255,246,229,0.15)", marginTop: 24, borderRadius: 999, border: "1px solid rgba(255,246,229,0.3)" }}>
              <div style={{ width: `${(dashboard.referrals / 3) * 100}%`, height: 8, background: "var(--d-pink)", borderRadius: 999 }} />
            </div>
            <Link to="#" className="btn btn-pink" style={{ marginTop: 28, width: "100%", justifyContent: "center" }}>
              Copy your link
            </Link>
          </div>
          <div style={{ background: "var(--d-cream)", border: "3px solid var(--d-ink)", borderRadius: 24, padding: 32 }}>
            <p className="eyebrow" style={{ color: "var(--d-pink)" }}>RECENT ACTIVITY</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 24px" }}>
              {dashboard.recentActivity.map((a) => (
                <li key={a.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "2px solid rgba(8,8,12,0.08)" }}>
                  <div>
                    <p className="display" style={{ fontSize: 18, margin: 0, textTransform: "uppercase" }}>{a.label}</p>
                    <p style={{ fontSize: 13, color: "rgba(8,8,12,0.65)", margin: "2px 0 0" }}>{a.detail}</p>
                  </div>
                  <span className="pill" style={{ background: "var(--d-pink)", color: "var(--d-cream)" }}>{a.date}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow" style={{ color: "var(--d-pink)" }}>UPCOMING EVENTS</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
              {dashboard.upcomingEvents.map((e) => (
                <li key={e.title} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px dashed rgba(8,8,12,0.20)" }}>
                  <span style={{ fontWeight: 700 }}>{e.title}</span>
                  <span style={{ color: "var(--d-pink)", fontWeight: 700 }}>{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
