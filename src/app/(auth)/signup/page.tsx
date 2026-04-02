"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Input, Card } from "@slate-ui/react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage("Check your email to confirm your account.");
    setLoading(false);
    router.push("/");
    router.refresh();
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
          Create your account
        </p>
      </div>

      <Card padding="lg">
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="password"
              style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-fg)" }}
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="confirm-password"
              style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-fg)" }}
            >
              Confirm password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          {error && (
            <p style={{ fontSize: "13px", color: "var(--color-danger)" }}>{error}</p>
          )}

          {message && (
            <p style={{ fontSize: "13px", color: "#22c55e" }}>{message}</p>
          )}

          <Button type="submit" variant="accent" fullWidth loading={loading}>
            Create account
          </Button>
        </form>
      </Card>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          color: "var(--color-muted)",
        }}
      >
        Already have an account?{" "}
        <Link
          href="/login"
          style={{ color: "var(--color-accent)", fontWeight: 500 }}
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
