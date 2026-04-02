import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
