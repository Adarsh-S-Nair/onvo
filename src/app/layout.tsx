import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Onvo",
  description: "AI-powered accountant copilot for bookkeepers and small accounting firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <Sidebar />
          <main
            style={{
              flex: 1,
              backgroundColor: "var(--color-content-bg)",
              overflowY: "auto",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
