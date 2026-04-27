import { NavLink, Outlet, Link } from "react-router-dom";
import "./tokens.css";
import BackPill from "../../components/BackPill";

const navItems = [
  { to: "/c", label: "Home", end: true },
  { to: "/c/memberships", label: "Membership" },
  { to: "/c/draw", label: "Draw" },
  { to: "/c/dashboard", label: "Members" },
];

export default function LayoutC() {
  return (
    <div className="dir-c" style={{ minHeight: "100vh" }}>
      <header
        style={{
          background: "var(--c-ivory)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid rgba(58,58,54,0.06)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/c" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="display" style={{ fontSize: 24, fontStyle: "italic" }}>
              winhervault
            </span>
          </Link>
          <nav style={{ display: "flex", gap: 36 }}>
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "var(--c-ink)",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  borderBottom: isActive ? "1px solid var(--c-ink)" : "1px solid transparent",
                  paddingBottom: 4,
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/c/memberships" className="btn btn-ink">
            Join the club
          </Link>
        </div>
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 120,
          padding: "72px 32px 36px",
          background: "var(--c-sand)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
            <div>
              <p className="display" style={{ fontSize: 32, margin: 0, fontStyle: "italic" }}>
                winhervault
              </p>
              <p style={{ color: "var(--c-mute)", fontSize: 14, marginTop: 14, maxWidth: 320 }}>
                A quiet luxury club for women who want more, told softly.
              </p>
            </div>
            {[
              { h: "Club", l: ["Membership", "Current Draw", "Members Area", "Past Winners"] },
              { h: "Trust", l: ["Charity Partner", "Draw Terms", "VIC TP/03720", "Refund Policy"] },
              { h: "Find Us", l: ["@winhervault", "hello@winhervault.com", "Melbourne, AU"] },
            ].map((c) => (
              <div key={c.h}>
                <p className="eyebrow">{c.h}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.1, fontSize: 14, color: "var(--c-ink-soft)" }}>
                  {c.l.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 64, fontSize: 12, color: "var(--c-mute)" }}>
            © 2026 WinHerVault. ABN 00 000 000 000.
          </p>
        </div>
      </footer>

      <BackPill />
    </div>
  );
}
