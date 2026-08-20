import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Marketing Partner Starter", template: "%s | Marketing Partner" },
  description: "Production-ready website starter maintained by Marketing Partner.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
