import type { NextLayoutIntlayer } from "next-intlayer";
import { Inter, Cairo } from "next/font/google";
import { getHTMLTextDir } from "intlayer";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "EITS | Leading BMS Systems & Smart Solutions in Egypt | Honeywell Partner",
  description: "EITS - مصر's leading BMS, smart lighting control, and electrical solutions provider. Certified Honeywell Platinum Partner offering comprehensive building management systems, HVAC solutions, and security systems. Trusted by major hotels and hospitals across Egypt.",
  metadataBase: new URL("https://eits-egypt.com"),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
      'fr': '/fr',
      'es': '/es',
      'de': '/de',
      'zh': '/zh',
    },
  },
  openGraph: {
    title: 'EITS | Smart Building Solutions in Egypt',
    description: 'Leading provider of BMS, smart lighting, and electrical solutions in Egypt. Certified Honeywell Partner.',
    url: 'https://eits-egypt.com',
    siteName: 'EITS Egypt',
    images: [
      {
        url: 'https://eits-egypt.com/Logoicon.svg',
        width: 1200,
        height: 630,
        alt: 'EITS Smart Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EITS | Smart Building Solutions in Egypt',
    description: 'Leading provider of BMS, smart lighting, and electrical solutions in Egypt.',
    images: ['https://eits-egypt.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#56ab2f" },
    { media: "(prefers-color-scheme: dark)", color: "#005b94" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  const font = locale === "ar" ? cairo : inter;
  
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="1kRDd_DudAg8ZCwRGJb_DXs1yD6drrAyX9K4MRZPDW0"
        />
        <link rel="icon" href="/favicon-16x16.png" type="image/svg+xml" />
        <link rel="canonical" href={`https://eits-egypt.com/${locale}`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="EITS Egypt" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Cairo, Egypt" />
        <meta
          name="keywords"
          content="BMS, EITS, Building Management Systems, Egypt, Honeywell, Lighting Control, Electricity, Siemens, ABB, Surveillance Cameras, Technological Solutions, أنظمة إدارة المباني, التحكم في الإضاءة, كهرباء, سيمنز, كاميرات مراقبة, حلول تكنولوجية, Systèmes de Gestion de Bâtiments, Contrôle d'Éclairage, Électricité, Caméras de Surveillance, Solutions Technologiques, Sistemas de Gestión de Edificios, Control de Iluminación, Electricidad, Cámaras de Vigilancia, Soluciones Tecnológicas, Gebäudemanagementsysteme, Lichtsteuerung, Elektrizität, Überwachungskameras, Technologische Lösungen, 楼宇管理系统, 照明控制, 电力, 监控摄像头, 技术解决方案"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://eits-egypt.com/#organization",
              name: "EITS",
              url: "https://eits-egypt.com",
              logo: {
                "@type": "ImageObject",
                url: "https://eits-egypt.com/logo.png",
                width: "112",
                height: "112"
              },
              sameAs: [
                "https://www.linkedin.com/company/eits-automation-control/",
                "https://www.facebook.com/eitscontrol/"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20 109 002 0981",
                contactType: "Customer Service",
                areaServed: "EG",
                availableLanguage: ["Arabic", "English", "French", "Spanish", "German", "Chinese"],
                email: "info@eits-egypt.com"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressLocality: "Cairo",
                addressRegion: "Cairo"
              },
              description: "Leading provider of BMS, smart lighting control, and electrical solutions in Egypt. Certified Honeywell Partner.",
              foundingDate: "2008",
              knowsAbout: [
                "Building Management Systems",
                "Smart Lighting Control",
                "Electrical Solutions",
                "HVAC Systems",
                "Security Systems"
              ]
            }),
          }}
        />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
