import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginV2A() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <div style={{ background: "var(--a2-cream)", minHeight: "calc(100vh - 80px)" }}>
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 32px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 64,
          alignItems: "center",
        }}
        className="login-grid"
      >
        {/* Left — pitch */}
        <div>
          <p className="eyebrow">{mode === "signin" ? "Welcome back" : "Join the circle"}</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "20px 0 24px", lineHeight: 1.05 }}
          >
            {mode === "signin" ? (
              <>The <em className="display-italic">Circle</em>, signed in.</>
            ) : (
              <>Begin <em className="display-italic">your seat.</em></>
            )}
          </h1>
          <p style={{ fontSize: 17, color: "var(--a2-ink-soft)", lineHeight: 1.7, maxWidth: 480, margin: "0 0 32px" }}>
            {mode === "signin"
              ? "Pick up where you left off. Your dashboard, your entries, your unlocked codes."
              : "Two minutes, one card, no lock-in. The Edit is our most-loved seat — try it for a month and stay only if you want to."}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              borderTop: "1px solid var(--a2-rule)",
              fontSize: 14,
              color: "var(--a2-ink-soft)",
            }}
          >
            {[
              "Cancel any time, no questions",
              "$5 of every membership funds Share The Dignity",
              "Live monthly draws on Instagram",
            ].map((p) => (
              <li
                key={p}
                style={{ padding: "16px 0", borderBottom: "1px solid var(--a2-rule)" }}
              >
                — {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div
          style={{
            background: "var(--a2-paper)",
            border: "1px solid var(--a2-rule)",
            padding: "40px 36px",
          }}
        >
          <div style={{ display: "flex", gap: 0, marginBottom: 28, borderBottom: "1px solid var(--a2-rule)" }}>
            <button
              type="button"
              onClick={() => setMode("signin")}
              className="display"
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 0 16px",
                marginRight: 28,
                fontSize: 22,
                cursor: "pointer",
                color: mode === "signin" ? "var(--a2-ink)" : "var(--a2-mute)",
                borderBottom: mode === "signin" ? "2px solid var(--a2-ink)" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className="display"
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 0 16px",
                fontSize: 22,
                cursor: "pointer",
                color: mode === "signup" ? "var(--a2-ink)" : "var(--a2-mute)",
                borderBottom: mode === "signup" ? "2px solid var(--a2-ink)" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              Become a member
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/v2/a/dashboard";
            }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {mode === "signup" && (
              <Field label="Your first name" placeholder="Olivia" />
            )}
            <Field label="Email" type="email" placeholder="olivia@example.com" />
            <Field label="Password" type="password" placeholder={mode === "signup" ? "At least 8 characters" : "Your password"} />
            {mode === "signup" && (
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Choose your seat</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[
                    { n: "Muse", p: "$2.31/wk" },
                    { n: "Edit", p: "$6.92/wk" },
                    { n: "Atelier", p: "$11.54/wk" },
                  ].map((t, i) => (
                    <label
                      key={t.n}
                      style={{
                        border: i === 1 ? "1px solid var(--a2-ink)" : "1px solid var(--a2-rule)",
                        padding: "12px 10px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: i === 1 ? "var(--a2-cream)" : "transparent",
                      }}
                    >
                      <input
                        type="radio"
                        name="tier"
                        defaultChecked={i === 1}
                        style={{ display: "none" }}
                      />
                      <span className="display" style={{ display: "block", fontSize: 16 }}>
                        {t.n}
                      </span>
                      <span style={{ fontSize: 11, color: "var(--a2-mute)" }}>{t.p}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-dark" style={{ marginTop: 8 }}>
              {mode === "signin" ? "Sign in" : "Become a Member"}
            </button>
            <p style={{ fontSize: 12, color: "var(--a2-mute)", margin: 0, textAlign: "center" }}>
              {mode === "signin" ? (
                <>New here? <button type="button" onClick={() => setMode("signup")} style={{ background: "none", border: "none", color: "var(--a2-spot)", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: 12 }}>Become a member →</button></>
              ) : (
                <>Already a member? <button type="button" onClick={() => setMode("signin")} style={{ background: "none", border: "none", color: "var(--a2-spot)", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: 12 }}>Sign in →</button></>
              )}
            </p>
          </form>
          <p style={{ fontSize: 11, color: "var(--a2-mute)", marginTop: 24, lineHeight: 1.6 }}>
            Pitch artefact only. No real account, no card, no email collected.{" "}
            <Link to="/v2/a/dashboard" style={{ color: "var(--a2-spot)" }}>
              Skip to demo dashboard →
            </Link>
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .dir-v2a .login-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; } }
      `}</style>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "var(--a2-cream)",
          border: "1px solid var(--a2-rule)",
          padding: "12px 14px",
          fontSize: 15,
          fontFamily: "inherit",
          color: "var(--a2-ink)",
          outline: "none",
        }}
      />
    </label>
  );
}
