import type React from "react";
import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";

import { ToastProvider } from "@/components/ui/toast";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "eits",
  description: "Discover EITS Egypt: Your partner in innovative technical solutions. Transform your business with one touch.",
  metadataBase: new URL("https://eits-egypt.com"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#56ab2f" },
    { media: "(prefers-color-scheme: dark)", color: "#005b94" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
    
        <link rel="icon" href="/favicon-16x16.png" type="image/svg+xml" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
