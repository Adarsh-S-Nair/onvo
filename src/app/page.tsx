export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: 700,
          color: "var(--color-fg)",
          letterSpacing: "-0.03em",
        }}
      >
        <span style={{ color: "var(--color-accent)" }}>Onvo</span>
      </h1>
      <p
        style={{
          fontSize: "16px",
          color: "var(--color-muted)",
        }}
      >
        AI-powered accountant copilot
      </p>
    </div>
  );
}
