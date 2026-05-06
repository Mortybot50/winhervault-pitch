import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginV2C() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <div style={{ background: "var(--c2-cream)", minHeight: "calc(100vh - 80px)" }}>
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
          <span className="pill">{mode === "signin" ? "Welcome back" : "Step inside"}</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "20px 0 24px" }}>
            {mode === "signin" ? <>Members <em className="display-italic" style={{ color: "var(--c2-berry)" }}>only.</em></> : <>Become a <em className="display-italic" style={{ color: "var(--c2-berry)" }}>member.</em></>}
          </h1>
          <p style={{ fontSize: 17, color: "var(--c2-ink-soft)", lineHeight: 1.7, maxWidth: 480, margin: "0 0 32px" }}>
            {mode === "signin"
              ? "Pick up where you left off — your tier, your entries, your unlocked codes."
              : "Two minutes, one card, no lock-in. Most members start in Luxe and stay."}
          </p>
        </div>

        <div className="card" style={{ padding: 36, border: "1px solid var(--c2-rule)" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 28, padding: 4, background: "var(--c2-cream-warm)", borderRadius: 10 }}>
            <button
              type="button"
              onClick={() => setMode("signin")}
              style={{
                flex: 1,
                background: mode === "signin" ? "var(--c2-paper)" : "transparent",
                border: "none",
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                color: mode === "signin" ? "var(--c2-berry)" : "var(--c2-ink-soft)",
                borderRadius: 8,
                fontFamily: "inherit",
                boxShadow: mode === "signin" ? "0 1px 4px rgba(31,15,24,0.08)" : "none",
              }}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              style={{
                flex: 1,
                background: mode === "signup" ? "var(--c2-paper)" : "transparent",
                border: "none",
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                color: mode === "signup" ? "var(--c2-berry)" : "var(--c2-ink-soft)",
                borderRadius: 8,
                fontFamily: "inherit",
                boxShadow: mode === "signup" ? "0 1px 4px rgba(31,15,24,0.08)" : "none",
              }}
            >
              Become a member
            </button>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = "/v2/c/dashboard"; }}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            {mode === "signup" && <Field label="First name" placeholder="Olivia" />}
            <Field label="Email" type="email" placeholder="olivia@example.com" />
            <Field label="Password" type="password" placeholder={mode === "signup" ? "At least 8 characters" : "Your password"} />
            {mode === "signup" && (
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Choose your tier</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[{ n: "Insider", p: "$2.31/wk" }, { n: "Luxe", p: "$6.92/wk" }, { n: "Icon", p: "$11.54/wk" }].map((t, i) => (
                    <label
                      key={t.n}
                      style={{
                        border: i === 1 ? "2px solid var(--c2-berry)" : "1px solid var(--c2-rule)",
                        borderRadius: 10,
                        padding: "14px 10px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: i === 1 ? "var(--c2-cream-warm)" : "transparent",
                      }}
                    >
                      <input type="radio" name="tier" defaultChecked={i === 1} style={{ display: "none" }} />
                      <span className="display" style={{ display: "block", fontSize: 17 }}>{t.n}</span>
                      <span style={{ fontSize: 11, color: "var(--c2-mute)" }}>{t.p}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>
              {mode === "signin" ? "Sign in →" : "Become a Member →"}
            </button>
          </form>
          <p style={{ fontSize: 11, color: "var(--c2-mute)", marginTop: 20, lineHeight: 1.6 }}>
            Pitch artefact only. <Link to="/v2/c/dashboard" style={{ color: "var(--c2-berry)", fontWeight: 600 }}>Skip to demo dashboard →</Link>
          </p>
        </div>
      </section>

      <style>{`@media (max-width: 900px) { .dir-v2c .login-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; } }`}</style>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span className="eyebrow" style={{ color: "var(--c2-ink-soft)" }}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "var(--c2-cream)",
          border: "1px solid var(--c2-rule)",
          borderRadius: 10,
          padding: "12px 16px",
          fontSize: 15,
          fontFamily: "inherit",
          color: "var(--c2-ink)",
          outline: "none",
        }}
      />
    </label>
  );
}
