import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
