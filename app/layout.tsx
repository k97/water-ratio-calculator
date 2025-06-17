import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./theme-registry";

const barlow = Barlow({
  weight: ["400", "600", "700", "800"], // or specify the weights you need, e.g., ["400", "700"]
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#1976d2',
}

export const metadata: Metadata = {
  title: "Simple Cooking Calculator",
  description: "A simple cooking ratio calculator progressive web app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cooking Calc"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} antialiased`}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
