import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginV2D() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "96px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="login-grid"
      >
        <div>
          <p className="eyebrow">{mode === "signin" ? "Welcome back" : "Take a seat"}</p>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 96px)", margin: "20px 0 32px", letterSpacing: "-0.015em" }}>
            {mode === "signin" ? <>The circle, <em className="display-italic">opened.</em></> : <>Begin <em className="display-italic">your seat.</em></>}
          </h1>
          <p style={{ fontSize: 17, color: "var(--d2-ink-soft)", lineHeight: 1.8, maxWidth: 480, margin: 0 }}>
            {mode === "signin"
              ? "Pick up where you left off. Your tier, your entries, your unlocked codes."
              : "Two minutes, one card, no lock-in. Most members start in II and stay."}
          </p>
        </div>

        <div style={{ background: "var(--d2-paper)", padding: 48, border: "1px solid var(--d2-rule)" }}>
          <div style={{ display: "flex", gap: 32, marginBottom: 36, borderBottom: "1px solid var(--d2-rule)" }}>
            <button
              type="button"
              onClick={() => setMode("signin")}
              style={{
                background: "transparent",
                border: "none",
                padding: "12px 0 18px",
                fontSize: 14,
                cursor: "pointer",
                color: mode === "signin" ? "var(--d2-ink)" : "var(--d2-mute)",
                borderBottom: mode === "signin" ? "1px solid var(--d2-ink)" : "1px solid transparent",
                marginBottom: -1,
                fontFamily: "inherit",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              style={{
                background: "transparent",
                border: "none",
                padding: "12px 0 18px",
                fontSize: 14,
                cursor: "pointer",
                color: mode === "signup" ? "var(--d2-ink)" : "var(--d2-mute)",
                borderBottom: mode === "signup" ? "1px solid var(--d2-ink)" : "1px solid transparent",
                marginBottom: -1,
                fontFamily: "inherit",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Become a member
            </button>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = "/v2/d/dashboard"; }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            {mode === "signup" && <Field label="First name" placeholder="Olivia" />}
            <Field label="Email" type="email" placeholder="olivia@example.com" />
            <Field label="Password" type="password" placeholder={mode === "signup" ? "At least 8 characters" : "Your password"} />
            {mode === "signup" && (
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Choose a tier</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderLeft: "1px solid var(--d2-rule)" }}>
                  {[{ n: "I", p: "$2.31/wk" }, { n: "II", p: "$6.92/wk" }, { n: "III", p: "$11.54/wk" }].map((t, i) => (
                    <label
                      key={t.n}
                      style={{
                        borderRight: "1px solid var(--d2-rule)",
                        borderTop: "1px solid var(--d2-rule)",
                        borderBottom: i === 1 ? "2px solid var(--d2-ink)" : "1px solid var(--d2-rule)",
                        padding: "20px 12px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: i === 1 ? "var(--d2-bone)" : "transparent",
                      }}
                    >
                      <input type="radio" name="tier" defaultChecked={i === 1} style={{ display: "none" }} />
                      <span className="display" style={{ display: "block", fontSize: 24 }}>{t.n}</span>
                      <span className="eyebrow" style={{ display: "block", marginTop: 6 }}>{t.p}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
              {mode === "signin" ? "Sign in" : "Become a Member"}
            </button>
          </form>
          <p style={{ fontSize: 11, color: "var(--d2-mute)", marginTop: 28, lineHeight: 1.7, letterSpacing: "0.04em" }}>
            Pitch artefact only. <Link to="/v2/d/dashboard" style={{ color: "var(--d2-ink)", borderBottom: "1px solid var(--d2-ink)", textDecoration: "none", paddingBottom: 2 }}>Skip to demo dashboard</Link>
          </p>
        </div>
      </section>

      <style>{`@media (max-width: 900px) { .dir-v2d .login-grid { grid-template-columns: 1fr !important; padding: 56px 24px !important; gap: 48px !important; } }`}</style>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px solid var(--d2-rule)",
          padding: "10px 0",
          fontSize: 16,
          fontFamily: "inherit",
          color: "var(--d2-ink)",
          outline: "none",
        }}
      />
    </label>
  );
}
