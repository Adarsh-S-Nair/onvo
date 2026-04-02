"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card } from "@slate-ui/react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage("Check your email for a password reset link.");
    setLoading(false);
  }

  return (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      {/* Logo */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--color-accent)",
            letterSpacing: "-0.02em",
          }}
        >
          Onvo
        </span>
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: "var(--color-muted)",
          }}
        >
          Reset your password
        </p>
      </div>

      <Card padding="lg">
        {message ? (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <p style={{ fontSize: "14px", color: "var(--color-fg)", lineHeight: 1.6 }}>
              {message}
            </p>
            <p style={{ marginTop: "8px", fontSize: "13px", color: "var(--color-muted)" }}>
              Didn&apos;t receive it?{" "}
              <button
                onClick={() => setMessage(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-accent)",
                  cursor: "pointer",
                  fontSize: "13px",
                  padding: 0,
                }}
              >
                Try again
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.5 }}>
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="email"
                style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-fg)" }}
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {error && (
              <p style={{ fontSize: "13px", color: "var(--color-danger)" }}>{error}</p>
            )}

            <Button type="submit" variant="accent" fullWidth loading={loading}>
              Send reset link
            </Button>
          </form>
        )}
      </Card>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          color: "var(--color-muted)",
        }}
      >
        <Link
          href="/login"
          style={{ color: "var(--color-accent)", fontWeight: 500 }}
        >
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
