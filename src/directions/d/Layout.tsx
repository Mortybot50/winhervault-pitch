import { NavLink, Outlet, Link } from "react-router-dom";
import "./tokens.css";
import BackPill from "../../components/BackPill";

const navItems = [
  { to: "/d", label: "Home", end: true },
  { to: "/d/memberships", label: "Tiers" },
  { to: "/d/draw", label: "May Draw" },
  { to: "/d/dashboard", label: "Members" },
];

const tickerItems = [
  "★ MAY DRAW LIVE WED 8PM AEST",
  "★ $24,820 DONATED YTD",
  "★ 14,800+ WOMEN IN THE VAULT",
  "★ FROM $2.49/WK",
  "★ DRAWN LIVE ON IG",
  "★ JOIN THE CLUB",
];

export default function LayoutD() {
  return (
    <div className="dir-d" style={{ minHeight: "100vh" }}>
      <div className="ticker">
        <div className="marquee">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="eyebrow" style={{ color: "var(--d-cream)", fontSize: 12 }}>{t}</span>
          ))}
        </div>
      </div>
      <header
        style={{
          background: "var(--d-cream)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: `3px solid var(--d-ink)`,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/d" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--d-pink)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--d-cream)", fontFamily: "Archivo Black", fontSize: 22 }}>
              W
            </span>
            <span className="display" style={{ fontSize: 22 }}>WinHerVault</span>
          </Link>
          <nav style={{ display: "flex", gap: 8 }}>
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--d-cream)" : "var(--d-ink)",
                  background: isActive ? "var(--d-ink)" : "transparent",
                  padding: "10px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/d/memberships" className="btn btn-pink">
            Join from $2.49/wk
          </Link>
        </div>
      </header>

      <Outlet />

      <footer style={{ background: "var(--d-emerald-deep)", color: "var(--d-cream)", padding: "72px 32px 36px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 36 }}>
            <div>
              <p className="display" style={{ fontSize: 36, margin: 0, color: "var(--d-gold)" }}>WINHER<br />VAULT</p>
              <p style={{ color: "rgba(255,246,229,0.65)", fontSize: 14, marginTop: 16, maxWidth: 320 }}>
                The lifestyle club for women who want more. Loud about it, on purpose.
              </p>
            </div>
            {[
              { h: "The Club", l: ["Tiers", "May Draw", "Past Winners", "Partners"] },
              { h: "Trust", l: ["Charity Partner", "VIC TP/03720", "Draw Terms", "Refunds"] },
              { h: "Find Us", l: ["@winhervault", "hello@winhervault.com", "Melbourne, AU"] },
            ].map((c) => (
              <div key={c.h}>
                <p style={{ color: "var(--d-pink)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700 }}>{c.h}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", lineHeight: 2.1, fontSize: 14, color: "rgba(255,246,229,0.85)" }}>
                  {c.l.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 56, fontSize: 12, color: "rgba(255,246,229,0.5)" }}>
            © 2026 WinHerVault Pty Ltd · ABN 00 000 000 000 · VIC TP/03720
          </p>
        </div>
      </footer>

      <BackPill variant="dark" />
    </div>
  );
}
