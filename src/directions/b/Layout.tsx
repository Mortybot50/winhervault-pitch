import { NavLink, Outlet, Link } from "react-router-dom";
import "./tokens.css";
import BackPill from "../../components/BackPill";

const navItems = [
  { to: "/b", label: "Home", end: true },
  { to: "/b/memberships", label: "Tiers" },
  { to: "/b/draw", label: "This Month's Draw" },
  { to: "/b/dashboard", label: "Members" },
];

export default function LayoutB() {
  return (
    <div className="dir-b" style={{ minHeight: "100vh" }}>
      <div style={{ background: "var(--b-berry)", color: "var(--b-cream)", padding: "10px 32px", fontSize: 12, letterSpacing: "0.12em", textAlign: "center", textTransform: "uppercase" }}>
        May draw closes Wed 8pm AEST · 14,800+ women already in
      </div>
      <header
        style={{
          background: "var(--b-cream)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid rgba(26,10,18,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/b" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--b-berry)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--b-gold)", fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: 18 }}>
              W
            </span>
            <span className="display-tight" style={{ fontSize: 22 }}>WinHerVault</span>
          </Link>
          <nav style={{ display: "flex", gap: 28 }}>
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "var(--b-ink)",
                  fontSize: 14,
                  fontWeight: 500,
                  position: "relative",
                  paddingBottom: 4,
                  borderBottom: isActive ? "2px solid var(--b-berry)" : "2px solid transparent",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/b/memberships" className="btn btn-berry">
            Join the Vault →
          </Link>
        </div>
      </header>

      <Outlet />

      <footer
        style={{
          background: "var(--b-berry-deep)",
          color: "var(--b-cream)",
          padding: "64px 32px 32px",
          marginTop: 96,
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 36,
          }}
        >
          <div>
            <p className="display-tight" style={{ fontSize: 28, margin: 0, color: "var(--b-gold)" }}>WinHerVault</p>
            <p style={{ color: "rgba(255,247,242,0.7)", fontSize: 14, marginTop: 12, maxWidth: 320 }}>
              Women-first lifestyle club. Built loud. Drawn live. Donated transparently.
            </p>
          </div>
          {[
            { h: "The Club", l: ["Tiers", "Current Draw", "Past Winners", "Partner Brands"] },
            { h: "Trust", l: ["Charity Partner", "VIC TP/03720", "Draw Terms", "Refund Policy"] },
            { h: "Find Us", l: ["@winhervault", "hello@winhervault.com", "Melbourne, AU"] },
          ].map((c) => (
            <div key={c.h}>
              <p style={{ color: "var(--b-gold)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>{c.h}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", lineHeight: 2.1, fontSize: 14, color: "rgba(255,247,242,0.85)" }}>
                {c.l.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: 1320, margin: "48px auto 0", color: "rgba(255,247,242,0.5)", fontSize: 12 }}>
          © 2026 WinHerVault Pty Ltd · ABN 00 000 000 000
        </p>
      </footer>

      <BackPill />
    </div>
  );
}
