import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import React from "react";
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
  title: "Simple Water Ratio Calculator",
  description: "A simple water ratio calculator progressive web app",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/icons/icon-base.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: "/icons/icon-192x192.png", sizes: "192x192" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Water Ratio Calc"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${barlow.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
        <GoogleAnalytics gaId="G-0TE5K3WSRG" />
      </body>
    </html>
  );
}
