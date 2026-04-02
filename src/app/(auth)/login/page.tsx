"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Input, Card } from "@slate-ui/react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

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
          Sign in to your account
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label
                htmlFor="password"
                style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-fg)" }}
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                style={{
                  fontSize: "12px",
                  color: "var(--color-accent)",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p style={{ fontSize: "13px", color: "var(--color-danger)" }}>{error}</p>
          )}

          <Button type="submit" variant="accent" fullWidth loading={loading}>
            Sign in
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
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          style={{ color: "var(--color-accent)", fontWeight: 500 }}
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
