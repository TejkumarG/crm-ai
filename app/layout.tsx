import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI CRM Features | Comprehensive AI Solutions",
  description: "Explore cutting-edge AI features for modern CRM systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
