import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./tokens.css";
import BackPill from "../../../components/BackPill";

const nav = [
  { to: "/v2/b", label: "Home", end: true },
  { to: "/v2/b/memberships", label: "The Haus" },
  { to: "/v2/b/winners", label: "Winners" },
  { to: "/v2/b/events", label: "Gatherings" },
  { to: "/v2/b/discounts", label: "Vault" },
  { to: "/v2/b/charity", label: "Giving" },
];

export default function LayoutV2B() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dir-v2b" style={{ minHeight: "100vh" }}>
      <header
        style={{
          background: "rgba(244,236,223,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--b2-rule)",
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
          <Link to="/v2/b" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="display" style={{ fontSize: 24, letterSpacing: "-0.005em" }}>
              Haus Of Her
            </span>
          </Link>
          <nav className="desktop-nav" style={{ display: "flex", gap: 28 }}>
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--b2-ink)" : "var(--b2-ink-soft)",
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: "0.02em",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link to="/v2/b/login" className="hide-on-mobile" style={{ fontSize: 13, textDecoration: "none", color: "var(--b2-ink-soft)" }}>
              Sign in
            </Link>
            <Link to="/v2/b/memberships#join" className="btn btn-primary">
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
                border: "1px solid var(--b2-ink)",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: 11,
                cursor: "pointer",
                color: "var(--b2-ink)",
              }}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--b2-rule)",
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
                  color: "var(--b2-ink)",
                  fontSize: 15,
                  padding: "6px 0",
                }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/v2/b/login" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 15, padding: "6px 0", color: "var(--b2-ink)" }}>
              Sign in
            </Link>
          </div>
        )}
      </header>

      <Outlet />

      <footer
        style={{
          marginTop: 96,
          background: "var(--b2-blush)",
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
              Haus Of Her
            </p>
            <p style={{ color: "var(--b2-ink-soft)", maxWidth: 320, fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
              A women's haus of slow luxury, considered giveaways, and softer-paced gatherings.
            </p>
          </div>
          <div>
            <p className="eyebrow">The Haus</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li><Link to="/v2/b/memberships" style={{ textDecoration: "none" }}>Membership</Link></li>
              <li><Link to="/v2/b/winners" style={{ textDecoration: "none" }}>Winners</Link></li>
              <li><Link to="/v2/b/events" style={{ textDecoration: "none" }}>Gatherings</Link></li>
              <li><Link to="/v2/b/discounts" style={{ textDecoration: "none" }}>Vault</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Trust</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li><Link to="/v2/b/charity" style={{ textDecoration: "none" }}>Giving</Link></li>
              <li>Draw terms</li>
              <li>Licence VIC TP/03720</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Find us</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", lineHeight: 2.2, fontSize: 13 }}>
              <li>Instagram @hausofher</li>
              <li>hello@hausofher.com</li>
              <li>Melbourne, AU</li>
            </ul>
          </div>
        </div>
        <p style={{ maxWidth: 1280, margin: "56px auto 0", color: "var(--b2-mute)", fontSize: 12 }}>
          © 2026 Haus Of Her · WinHerVault Pty Ltd. ABN 00 000 000 000.
        </p>
      </footer>

      <BackPill />

      <style>{`
        @media (max-width: 880px) {
          .dir-v2b .desktop-nav, .dir-v2b .hide-on-mobile { display: none !important; }
          .dir-v2b .mobile-menu-btn { display: inline-flex !important; }
          .dir-v2b .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) { .dir-v2b .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
