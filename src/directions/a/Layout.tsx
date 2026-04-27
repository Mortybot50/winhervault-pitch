import { NavLink, Outlet, Link } from "react-router-dom";
import "./tokens.css";
import BackPill from "../../components/BackPill";

const navItems = [
  { to: "/a", label: "Home", end: true },
  { to: "/a/memberships", label: "Membership" },
  { to: "/a/draw", label: "Current Draw" },
  { to: "/a/dashboard", label: "Members" },
];

export default function LayoutA() {
  return (
    <div className="dir-a" style={{ minHeight: "100vh" }}>
      <header
        style={{
          borderBottom: "1px solid rgba(17,17,17,0.12)",
          background: "var(--a-paper)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/a" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="serif" style={{ fontSize: 22, letterSpacing: "-0.01em" }}>
              WinHerVault
            </span>
            <span className="eyebrow" style={{ marginLeft: 14, fontSize: 10 }}>
              Est. 2024 · Melbourne
            </span>
          </Link>
          <nav style={{ display: "flex", gap: 28 }}>
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "var(--a-ink)",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  borderBottom: isActive ? "1px solid var(--a-ink)" : "1px solid transparent",
                  paddingBottom: 4,
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/a/memberships" className="btn btn-dark">
            Join the Vault
          </Link>
        </div>
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 96,
          borderTop: "1px solid rgba(17,17,17,0.12)",
          padding: "48px 32px",
          background: "var(--a-cream)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 36,
          }}
        >
          <div>
            <p className="serif" style={{ fontSize: 24, margin: 0 }}>
              WinHerVault
            </p>
            <p style={{ color: "var(--a-mute)", maxWidth: 320, fontSize: 14 }}>
              The lifestyle club for women who want more. Drawn live, donated transparently, designed
              with care.
            </p>
          </div>
          <div>
            <p className="eyebrow">Club</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", lineHeight: 2, fontSize: 14 }}>
              <li>Membership</li>
              <li>Current Draw</li>
              <li>Members Area</li>
              <li>Past Winners</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Trust</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", lineHeight: 2, fontSize: 14 }}>
              <li>Charity partner</li>
              <li>Draw terms</li>
              <li>Licence VIC TP/03720</li>
              <li>Refund policy</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Find us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", lineHeight: 2, fontSize: 14 }}>
              <li>Instagram @winhervault</li>
              <li>hello@winhervault.com</li>
              <li>Melbourne, AU</li>
            </ul>
          </div>
        </div>
        <p style={{ maxWidth: 1280, margin: "48px auto 0", color: "var(--a-mute)", fontSize: 12 }}>
          © 2026 WinHerVault. All draws conducted live on Instagram. ABN 00 000 000 000.
        </p>
      </footer>

      <BackPill />
    </div>
  );
}
