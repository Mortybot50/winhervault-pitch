import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { portraitStyle } from "../../../data/finalMock";

export default function LoginFinal() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <section style={{ minHeight: "calc(100vh - 220px)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          minHeight: "calc(100vh - 220px)",
        }}
        className="final-login-grid"
      >
        {/* Left — display */}
        <div
          style={{
            ...portraitStyle(18),
            position: "relative",
            padding: "80px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#fff",
            minHeight: 480,
          }}
        >
          <div>
            <span className="final-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>— Welcome back</span>
            <h1 className="final-display final-display-xl" style={{ color: "#fff", marginTop: 16 }}>
              Step back<br />in the circle.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 24, maxWidth: 420, opacity: 0.92 }}>
              Your dashboard, entries, codes and RSVPs — all where you left them.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span className="final-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>HerCircle</span>
            <span className="final-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Founding members 2026</span>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            background: "var(--bg)",
            padding: "80px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 560,
          }}
        >
          <span className="final-eyebrow">— Sign in</span>
          <h2 className="final-display final-display-lg" style={{ marginTop: 12 }}>
            Sign in.
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8 }}>
            Pitch artefact — submit goes to /dashboard. No real auth.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nav("/final/dashboard");
            }}
            style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div>
              <label htmlFor="email" className="final-label">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="final-input"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="pwd" className="final-label">Password</label>
              <input
                id="pwd"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="final-input"
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <Link to="#" style={{ fontSize: 12, color: "var(--muted)", marginTop: 8, display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="final-cta" style={{ marginTop: 8, width: "100%" }}>
              Sign in
            </button>
            <hr className="final-rule" style={{ margin: "8px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>New here?</span>
              <Link to="/final/memberships" className="final-cta-text">Become a member →</Link>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .final-login-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
