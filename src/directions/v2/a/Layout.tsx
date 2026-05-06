import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./tokens.css";
import BackPill from "../../../components/BackPill";

const nav = [
  { to: "/v2/a", label: "Home", end: true },
  { to: "/v2/a/memberships", label: "Membership" },
  { to: "/v2/a/winners", label: "Winners" },
  { to: "/v2/a/events", label: "Events" },
  { to: "/v2/a/discounts", label: "Discounts" },
  { to: "/v2/a/charity", label: "Charity" },
];

export default function LayoutV2A() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dir-v2a" style={{ minHeight: "100vh" }}>
      <header
        style={{
          background: "var(--a2-cream)",
          borderBottom: "1px solid var(--a2-rule)",
          position: "sticky",
          top: 0,
          zIndex: 40,
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
          <Link to="/v2/a" style={{ textDecoration: "none", color: "inherit" }}>
            <span
              className="display"
              style={{ fontSize: 26, letterSpacing: "0.02em" }}
            >
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
                  color: "var(--a2-ink)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  borderBottom: isActive ? "1px solid var(--a2-ink)" : "1px solid transparent",
                  paddingBottom: 4,
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link
              to="/v2/a/login"
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--a2-ink)",
                textDecoration: "none",
                fontWeight: 500,
              }}
              className="hide-on-mobile"
            >
              Sign in
            </Link>
            <Link to="/v2/a/memberships#join" className="btn btn-dark">
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
                border: "1px solid var(--a2-ink)",
                padding: "8px 12px",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                cursor: "pointer",
                color: "var(--a2-ink)",
              }}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--a2-rule)",
              padding: "16px 32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "var(--a2-cream)",
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
                  color: "var(--a2-ink)",
                  fontSize: 14,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "6px 0",
                }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/v2/a/login"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--a2-ink)",
                fontSize: 14,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "6px 0",
              }}
            >
              Sign in
            </Link>
          </div>
        )}
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 96,
          background: "var(--a2-cream-deep)",
          borderTop: "1px solid var(--a2-rule)",
          padding: "64px 32px 48px",
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
              HerCircle
            </p>
            <p style={{ color: "var(--a2-ink-soft)", maxWidth: 320, fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
              A members' circle for women who want more from their week. Curated giveaways,
              quiet discounts, considered events.
            </p>
          </div>
          <div>
            <p className="eyebrow">Membership</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li><Link to="/v2/a/memberships" style={{ textDecoration: "none" }}>The tiers</Link></li>
              <li><Link to="/v2/a/winners" style={{ textDecoration: "none" }}>Winners</Link></li>
              <li><Link to="/v2/a/events" style={{ textDecoration: "none" }}>Events</Link></li>
              <li><Link to="/v2/a/discounts" style={{ textDecoration: "none" }}>Discounts</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Trust</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li><Link to="/v2/a/charity" style={{ textDecoration: "none" }}>Charity partner</Link></li>
              <li>Draw terms</li>
              <li>Licence VIC TP/03720</li>
              <li>Refund policy</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Find us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li>Instagram @hercircle</li>
              <li>hello@hercircle.com.au</li>
              <li>Melbourne, AU</li>
            </ul>
          </div>
        </div>
        <p style={{ maxWidth: 1280, margin: "56px auto 0", color: "var(--a2-mute)", fontSize: 12 }}>
          © 2026 HerCircle · WinHerVault Pty Ltd. All draws conducted live on Instagram. ABN 00 000 000 000.
        </p>
      </footer>

      <BackPill />

      <style>{`
        @media (max-width: 880px) {
          .dir-v2a .desktop-nav, .dir-v2a .hide-on-mobile { display: none !important; }
          .dir-v2a .mobile-menu-btn { display: inline-flex !important; }
          .dir-v2a .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 520px) {
          .dir-v2a .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
