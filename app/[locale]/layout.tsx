import type { NextLayoutIntlayer } from "next-intlayer";
import { Inter, Cairo } from "next/font/google";
import { getHTMLTextDir } from "intlayer";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "EITS | BMS Systems, Lighting Control & Electrical Solutions in Egypt",
  description:
    "EITS - رواد أنظمة إدارة المباني (BMS) والتحكم الذكي في الإضاءة، وأنظمة الكهرباء، وحلول الحماية والمراقبة في مصر. شريك معتمد لهوني ويل (Honeywell) وABB وSiemens. خدماتنا تشمل: تركيب الأنظمة، مراكز صيانة، لوحات كهربائية، كاميرات مراقبة، وأنظمة HVAC للمستشفيات والفنادق. EITS is a certified Honeywell Platinum Partner in Egypt, providing BMS, smart lighting control, electrical panels, CCTV, HVAC installation, and repair services. Your building, smarter and safer with EITS. EITS - Leader des systèmes de gestion de bâtiments (BMS) et du contrôle intelligent de l'éclairage, des systèmes électriques et des solutions de sécurité et de surveillance en Égypte. Partenaire certifié de Honeywell, ABB et Siemens. EITS - Líder en sistemas de gestión de edificios (BMS) y control inteligente de iluminación, sistemas eléctricos y soluciones de seguridad y vigilancia en Egipto. EITS - Führender Anbieter von Gebäudemanagementsystemen (BMS), intelligenter Lichtsteuerung, elektrischen Systemen sowie Sicherheits- und Überwachungslösungen in Ägypten. EITS - 埃及领先的楼宇管理系统(BMS)、智能照明控制、电气系统和安防监控解决方案提供商。",
  metadataBase: new URL("https://eits-egypt.com"),
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#56ab2f" },
    { media: "(prefers-color-scheme: dark)", color: "#005b94" },
  ],
  width: "device-width",
  initialScale: 1,
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
        <meta name="robots" content="index, follow" />
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
                availableLanguage: ["Arabic", "English", "French", "Spanish","German,Chinese"],
              },
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
