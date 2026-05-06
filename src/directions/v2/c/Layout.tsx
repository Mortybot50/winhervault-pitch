import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./tokens.css";
import BackPill from "../../../components/BackPill";

const nav = [
  { to: "/v2/c", label: "Home", end: true },
  { to: "/v2/c/memberships", label: "Membership" },
  { to: "/v2/c/winners", label: "Winners" },
  { to: "/v2/c/events", label: "Events" },
  { to: "/v2/c/discounts", label: "Vault" },
  { to: "/v2/c/charity", label: "Giving" },
];

export default function LayoutV2C() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dir-v2c" style={{ minHeight: "100vh" }}>
      <header
        style={{
          background: "rgba(255,247,242,0.94)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--c2-rule)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "18px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/v2/c" style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "baseline", gap: 8 }}>
            <span className="display" style={{ fontSize: 22, letterSpacing: "-0.03em" }}>Her</span>
            <span className="display-italic" style={{ fontSize: 22, color: "var(--c2-berry)" }}>Circle</span>
          </Link>
          <nav className="desktop-nav" style={{ display: "flex", gap: 28 }}>
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--c2-berry)" : "var(--c2-ink-soft)",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: "0.01em",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link to="/v2/c/login" className="hide-on-mobile" style={{ fontSize: 13, textDecoration: "none", color: "var(--c2-ink-soft)", fontWeight: 500 }}>
              Sign in
            </Link>
            <Link to="/v2/c/memberships#join" className="btn btn-primary">
              Become a Member
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mobile-menu-btn"
              aria-label="Open menu"
              style={{
                display: "none",
                background: "transparent",
                border: "1px solid var(--c2-berry)",
                borderRadius: 10,
                padding: "8px 14px",
                fontSize: 11,
                cursor: "pointer",
                color: "var(--c2-berry)",
                fontWeight: 600,
              }}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--c2-rule)",
              padding: "16px 32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "var(--c2-ink)",
                  fontSize: 15,
                  padding: "6px 0",
                  fontWeight: 500,
                }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/v2/c/login" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 15, padding: "6px 0", color: "var(--c2-ink)", fontWeight: 500 }}>
              Sign in
            </Link>
          </div>
        )}
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 96,
          background: "var(--c2-berry-deep)",
          color: "var(--c2-cream)",
          padding: "72px 32px 56px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          <div>
            <p className="display" style={{ fontSize: 32, margin: 0 }}>
              Her <em className="display-italic" style={{ color: "var(--c2-gold)" }}>Circle</em>
            </p>
            <p style={{ color: "rgba(255,247,242,0.7)", maxWidth: 320, fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
              The members club where every dollar gives, every week wins.
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Member</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li><Link to="/v2/c/memberships" style={{ textDecoration: "none", color: "rgba(255,247,242,0.85)" }}>Membership</Link></li>
              <li><Link to="/v2/c/winners" style={{ textDecoration: "none", color: "rgba(255,247,242,0.85)" }}>Winners</Link></li>
              <li><Link to="/v2/c/events" style={{ textDecoration: "none", color: "rgba(255,247,242,0.85)" }}>Events</Link></li>
              <li><Link to="/v2/c/discounts" style={{ textDecoration: "none", color: "rgba(255,247,242,0.85)" }}>Vault</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Trust</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13, color: "rgba(255,247,242,0.85)" }}>
              <li><Link to="/v2/c/charity" style={{ textDecoration: "none", color: "inherit" }}>Giving</Link></li>
              <li>Draw terms</li>
              <li>Licence VIC TP/03720</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "var(--c2-gold)" }}>Find us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13, color: "rgba(255,247,242,0.85)" }}>
              <li>Instagram @hercircle</li>
              <li>hello@hercircle.com.au</li>
              <li>Melbourne, AU</li>
            </ul>
          </div>
        </div>
        <p style={{ maxWidth: 1280, margin: "56px auto 0", color: "rgba(255,247,242,0.5)", fontSize: 12 }}>
          © 2026 HerCircle Pty Ltd. ABN 00 000 000 000. 18+ only. Gamble responsibly.
        </p>
      </footer>

      <BackPill />

      <style>{`
        @media (max-width: 880px) {
          .dir-v2c .desktop-nav, .dir-v2c .hide-on-mobile { display: none !important; }
          .dir-v2c .mobile-menu-btn { display: inline-flex !important; }
          .dir-v2c .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) { .dir-v2c .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
