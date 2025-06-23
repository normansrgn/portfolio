// src/app/layout.tsx
import Header from "@/components/Header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />

        <main style={{ minHeight: "70vh", padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}
