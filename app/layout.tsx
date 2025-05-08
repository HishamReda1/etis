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
  title: "EITS | BMS Systems, Lighting Control & Electrical Solutions in Egypt",
  description:
    "EITS - رواد أنظمة إدارة المباني (BMS) والتحكم الذكي في الإضاءة، وأنظمة الكهرباء، وحلول الحماية والمراقبة في مصر. شريك معتمد لهوني ويل (Honeywell) وABB وSiemens. خدماتنا تشمل: تركيب الأنظمة، مراكز صيانة، لوحات كهربائية، كاميرات مراقبة، وأنظمة HVAC للمستشفيات والفنادق. EITS is a certified Honeywell Platinum Partner in Egypt, providing BMS, smart lighting control, electrical panels, CCTV, HVAC installation, and repair services. Your building, smarter and safer with EITS.",
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
    <html lang="ar" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="1kRDd_DudAg8ZCwRGJb_DXs1yD6drrAyX9K4MRZPDW0" />
        <link rel="icon" href="/favicon-16x16.png" type="image/svg+xml" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="BMS, EITS, Building Management Systems, Egypt, Honeywell, Lighting Control, أنظمة إدارة المباني, التحكم في الإضاءة, كهرباء, سيمنز, ABB, كاميرات مراقبة, حلول تكنولوجية"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EITS",
              url: "https://eits-egypt.com",
              logo: "https://eits-egypt.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/eits-automation-control/",
                "https://www.facebook.com/eitscontrol/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20 109 002 0981",
                contactType: "Customer Service",
                areaServed: "EG",
                availableLanguage: ["Arabic", "English"],
              },
            }),
          }}
        />
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
