import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginV2B() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <div style={{ background: "var(--b2-sand)", minHeight: "calc(100vh - 80px)" }}>
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="login-grid"
      >
        <div>
          <p className="eyebrow">{mode === "signin" ? "Welcome back" : "Join the Haus"}</p>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "20px 0 24px", lineHeight: 1.05 }}>
            {mode === "signin" ? <>The <em className="display-italic">Haus,</em> open.</> : <>Begin <em className="display-italic">your room.</em></>}
          </h1>
          <p style={{ fontSize: 17, color: "var(--b2-ink-soft)", lineHeight: 1.7, maxWidth: 480, margin: "0 0 32px" }}>
            {mode === "signin"
              ? "Pick up where you left off — your room, your entries, your unlocked codes."
              : "Two minutes, one card, no lock-in. Most members start in Soft and stay."}
          </p>
        </div>

        <div className="card" style={{ background: "var(--b2-paper)", padding: 36 }}>
          <div style={{ display: "flex", gap: 24, marginBottom: 28, borderBottom: "1px solid var(--b2-rule)" }}>
            <button
              type="button"
              onClick={() => setMode("signin")}
              className="display"
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 0 16px",
                fontSize: 22,
                cursor: "pointer",
                color: mode === "signin" ? "var(--b2-ink)" : "var(--b2-mute)",
                borderBottom: mode === "signin" ? "2px solid var(--b2-ink)" : "2px solid transparent",
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
                color: mode === "signup" ? "var(--b2-ink)" : "var(--b2-mute)",
                borderBottom: mode === "signup" ? "2px solid var(--b2-ink)" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              Become a member
            </button>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = "/v2/b/dashboard"; }}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            {mode === "signup" && <Field label="First name" placeholder="Olivia" />}
            <Field label="Email" type="email" placeholder="olivia@example.com" />
            <Field label="Password" type="password" placeholder={mode === "signup" ? "At least 8 characters" : "Your password"} />
            {mode === "signup" && (
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Choose your room</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[{ n: "Still", p: "$2.31/wk" }, { n: "Soft", p: "$6.92/wk" }, { n: "Studio", p: "$11.54/wk" }].map((t, i) => (
                    <label
                      key={t.n}
                      style={{
                        border: i === 1 ? "1px solid var(--b2-ink)" : "1px solid var(--b2-rule)",
                        borderRadius: 18,
                        padding: "14px 10px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: i === 1 ? "var(--b2-blush)" : "transparent",
                      }}
                    >
                      <input type="radio" name="tier" defaultChecked={i === 1} style={{ display: "none" }} />
                      <span className="display" style={{ display: "block", fontSize: 18 }}>{t.n}</span>
                      <span style={{ fontSize: 11, color: "var(--b2-mute)" }}>{t.p}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>
              {mode === "signin" ? "Sign in" : "Become a Member"}
            </button>
          </form>
          <p style={{ fontSize: 11, color: "var(--b2-mute)", marginTop: 20, lineHeight: 1.6 }}>
            Pitch artefact only. <Link to="/v2/b/dashboard" style={{ color: "var(--b2-sage-deep)" }}>Skip to demo dashboard →</Link>
          </p>
        </div>
      </section>

      <style>{`@media (max-width: 900px) { .dir-v2b .login-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; } }`}</style>
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
          background: "var(--b2-sand)",
          border: "1px solid var(--b2-rule)",
          borderRadius: 999,
          padding: "12px 18px",
          fontSize: 15,
          fontFamily: "inherit",
          color: "var(--b2-ink)",
          outline: "none",
        }}
      />
    </label>
  );
}
