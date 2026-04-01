"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Transactions", href: "/transactions" },
  { label: "Reports", href: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        padding: "24px 0",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "0 24px 32px",
          fontWeight: 700,
          fontSize: "20px",
          color: "var(--color-fg)",
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ color: "var(--color-accent)" }}>Onvo</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--color-fg)" : "var(--color-muted)",
                backgroundColor: isActive
                  ? "rgba(99, 102, 241, 0.1)"
                  : "transparent",
                borderLeft: isActive
                  ? "2px solid var(--color-accent)"
                  : "2px solid transparent",
                transition: "all 0.15s ease",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
