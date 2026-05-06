import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./tokens.css";

const NAV = [
  { to: "/final", label: "Home", end: true },
  { to: "/final/memberships", label: "Memberships" },
  { to: "/final/winners", label: "Winners" },
  { to: "/final/events", label: "Events" },
  { to: "/final/discounts", label: "Discounts" },
  { to: "/final/charity", label: "Charity" },
];

export default function LayoutFinal() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  // Lock scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="final-root">
      {/* Top promo strip */}
      <div
        style={{
          background: "var(--ink)",
          color: "var(--cream)",
          textAlign: "center",
          padding: "10px 16px",
          fontFamily: "Raleway, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        Membership opens Wednesday · Founding members get bonus entries · <Link to="/final/memberships" style={{ color: "var(--hot)", textDecoration: "underline" }}>Join the circle</Link>
      </div>

      {/* Header */}
      <header className="final-container">
        <nav className="final-nav">
          <Link to="/final" className="final-nav-brand">HerCircle</Link>
          <ul className="final-nav-links">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `final-nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/final/login" className="final-nav-link">Login</Link>
            </li>
            <li>
              <Link to="/final/memberships" className="final-cta" style={{ padding: "12px 22px", fontSize: 11 }}>
                Become a member
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="final-nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="final-mobile-drawer" role="dialog" aria-modal="true">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/final" className="final-nav-brand" onClick={() => setOpen(false)}>HerCircle</Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: "transparent",
                border: "1.5px solid var(--ink)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                fontSize: 18,
                cursor: "pointer",
                color: "var(--ink)",
              }}
            >
              ×
            </button>
          </div>
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li><Link to="/final/login">Login</Link></li>
            <li><Link to="/final/dashboard">Dashboard</Link></li>
          </ul>
          <Link to="/final/memberships" className="final-cta" style={{ marginTop: 32 }}>
            Become a member
          </Link>
        </div>
      )}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="final-footer">
        <div className="final-container">
          <div className="final-display final-display-lg" style={{ paddingBottom: 48 }}>
            Join the circle.<br />
            Win more than just prizes.
          </div>
          <Link to="/final/memberships" className="final-cta" style={{ marginBottom: 80 }}>
            Become a member
          </Link>

          <div className="final-footer-grid">
            <div>
              <div className="final-nav-brand" style={{ color: "var(--cream)" }}>HerCircle</div>
              <p style={{ marginTop: 16, opacity: 0.78, maxWidth: 320, fontSize: 14, lineHeight: 1.7 }}>
                A lifestyle membership for women who want more — exclusive giveaways, member-only perks,
                and curated experiences.
              </p>
            </div>
            <div>
              <div className="final-eyebrow" style={{ opacity: 0.5, marginBottom: 16 }}>Explore</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="final-nav-link" style={{ color: "var(--cream)", opacity: 0.78 }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="final-eyebrow" style={{ opacity: 0.5, marginBottom: 16 }}>Members</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li><Link to="/final/login" className="final-nav-link" style={{ color: "var(--cream)", opacity: 0.78 }}>Login</Link></li>
                <li><Link to="/final/dashboard" className="final-nav-link" style={{ color: "var(--cream)", opacity: 0.78 }}>Dashboard</Link></li>
                <li><Link to="/final/discounts?member=1" className="final-nav-link" style={{ color: "var(--cream)", opacity: 0.78 }}>Discount vault</Link></li>
                <li><Link to="/final/events?member=1" className="final-nav-link" style={{ color: "var(--cream)", opacity: 0.78 }}>RSVP events</Link></li>
              </ul>
            </div>
            <div>
              <div className="final-eyebrow" style={{ opacity: 0.5, marginBottom: 16 }}>Stay close</div>
              <p style={{ opacity: 0.78, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Quiet, considered notes from the circle — never more than twice a month.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ marginTop: 16, display: "flex", gap: 8 }}
              >
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="final-input"
                  style={{
                    background: "transparent",
                    color: "var(--cream)",
                    borderColor: "rgba(255,241,227,0.3)",
                    fontSize: 13,
                    padding: "12px 14px",
                  }}
                />
                <button type="submit" className="final-cta" style={{ padding: "12px 20px", fontSize: 11 }}>
                  Join
                </button>
              </form>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              paddingTop: 32,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.5,
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
            }}
          >
            <span>© 2026 HerCircle · Pitch artefact · Mock data</span>
            <span>Charity partner: Share The Dignity</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
