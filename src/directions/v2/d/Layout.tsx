import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./tokens.css";
import BackPill from "../../../components/BackPill";

const nav = [
  { to: "/v2/d", label: "Index", end: true },
  { to: "/v2/d/memberships", label: "Membership" },
  { to: "/v2/d/winners", label: "Winners" },
  { to: "/v2/d/events", label: "Events" },
  { to: "/v2/d/discounts", label: "Partners" },
  { to: "/v2/d/charity", label: "Giving" },
];

export default function LayoutV2D() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dir-v2d" style={{ minHeight: "100vh" }}>
      <header
        style={{
          background: "rgba(248,246,242,0.94)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--d2-rule)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "24px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link to="/v2/d" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="display" style={{ fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              HerCircle
            </span>
          </Link>
          <nav className="desktop-nav" style={{ display: "flex", gap: 32 }}>
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--d2-ink)" : "var(--d2-mute)",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link to="/v2/d/login" className="hide-on-mobile" style={{ fontSize: 12, textDecoration: "none", color: "var(--d2-mute)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Sign in
            </Link>
            <Link to="/v2/d/memberships#join" className="btn btn-primary">
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
                border: "1px solid var(--d2-ink)",
                padding: "10px 16px",
                fontSize: 11,
                cursor: "pointer",
                color: "var(--d2-ink)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--d2-rule)",
              padding: "20px 40px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
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
                  color: "var(--d2-ink)",
                  fontSize: 14,
                  padding: "6px 0",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/v2/d/login" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 14, padding: "6px 0", color: "var(--d2-ink)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Sign in
            </Link>
          </div>
        )}
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 120,
          background: "var(--d2-stone)",
          padding: "96px 40px 56px",
          borderTop: "1px solid var(--d2-rule)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          <div>
            <p className="display" style={{ fontSize: 28, margin: 0, letterSpacing: "0.04em" }}>
              HerCircle
            </p>
            <p style={{ color: "var(--d2-ink-soft)", maxWidth: 320, fontSize: 13, lineHeight: 1.8, marginTop: 16 }}>
              A members club for women, built around a weekly draw, a discount vault, six annual gatherings, and a non-negotiable monthly contribution.
            </p>
          </div>
          <div>
            <p className="eyebrow">Membership</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", lineHeight: 2.4, fontSize: 12 }}>
              <li><Link to="/v2/d/memberships" style={{ textDecoration: "none" }}>Tiers</Link></li>
              <li><Link to="/v2/d/winners" style={{ textDecoration: "none" }}>Winners</Link></li>
              <li><Link to="/v2/d/events" style={{ textDecoration: "none" }}>Events</Link></li>
              <li><Link to="/v2/d/discounts" style={{ textDecoration: "none" }}>Partners</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Trust</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", lineHeight: 2.4, fontSize: 12 }}>
              <li><Link to="/v2/d/charity" style={{ textDecoration: "none" }}>Giving</Link></li>
              <li>Draw terms</li>
              <li>Licence VIC TP/03720</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Find us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", lineHeight: 2.4, fontSize: 12 }}>
              <li>Instagram @hercircle.au</li>
              <li>hello@hercircle.com.au</li>
              <li>Melbourne, Australia</li>
            </ul>
          </div>
        </div>
        <p style={{ maxWidth: 1320, margin: "72px auto 0", color: "var(--d2-mute)", fontSize: 11, letterSpacing: "0.04em" }}>
          © 2026 HerCircle · WinHerVault Pty Ltd. ABN 00 000 000 000.
        </p>
      </footer>

      <BackPill />

      <style>{`
        @media (max-width: 880px) {
          .dir-v2d .desktop-nav, .dir-v2d .hide-on-mobile { display: none !important; }
          .dir-v2d .mobile-menu-btn { display: inline-flex !important; }
          .dir-v2d .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) { .dir-v2d .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
