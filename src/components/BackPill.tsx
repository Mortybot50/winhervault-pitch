import { Link } from "react-router-dom";

type Variant = "light" | "dark";

export default function BackPill({ variant = "light" }: { variant?: Variant }) {
  const isDark = variant === "dark";
  return (
    <Link
      to="/"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 80,
        padding: "10px 16px",
        borderRadius: 999,
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        backdropFilter: "blur(12px)",
        background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.78)",
        color: isDark ? "#fff" : "#111",
        border: isDark ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 6px 24px rgba(0,0,0,0.10)",
      }}
    >
      ← All directions
    </Link>
  );
}
