"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#080808",
          color: "#f1f5f9",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "32rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>
            Critical Error
          </h1>
          <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
            A critical error occurred. Please refresh the page.
          </p>
          <button
            onClick={reset}
            style={{
              background: "linear-gradient(to right, #4f46e5, #9333ea)",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}