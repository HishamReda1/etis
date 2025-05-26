"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  HomeIcon,
  InfoIcon,
  UsersIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  AwardIcon,
  PartnersIcon,
  ProjectsIcon,
  LanguageIcon,
  ProductsIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import PageContainer from "./page-container";
import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import { Logo, LogoIcon } from "@/components/ui/logo";
import { navigationService } from "@/services/navigation-service";
import type { NavigationLink, PageType } from "@/types";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useLocale } from "next-intlayer";
import navigationContent from "@/src/content/navigation.content";

const themeLabels = {
  en: {
    light: "Light Mode",
    dark: "Dark Mode"
  },
  ar: {
    light: "الوضع الفاتح",
    dark: "الوضع الداكن"
  },
  fr: {
    light: "Mode Clair",
    dark: "Mode Sombre"
  },
  es: {
    light: "Modo Claro",
    dark: "Modo Oscuro"
  },
  de: {
    light: "Heller Modus",
    dark: "Dunkler Modus"
  },
  zh: {
    light: "浅色模式",
    dark: "深色模式"
  }
};

const SidebarContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [activeLink, setActiveLink] = useState<string>("home");
  const { locale } = useLocale();
  const navLabels = navigationContent.content[locale] || navigationContent.content.en;
  const currentThemeLabels = themeLabels[locale as keyof typeof themeLabels] || themeLabels.en;

  // Handle page navigation
  const handleNavigation = (page: string) => {
    const newPage = navigationService.navigateToPage(page);  // هنا يتم التنقل إلى الصفحة مباشرة
    setCurrentPage(newPage);  // تعيين صفحة جديدة
    if (window.innerWidth < 768) {
      setOpen(false);  // غلق الشريط الجانبي إذا كانت الشاشة صغيرة
    }
  };

  const getIconForNavItem = (name: string) => {
    const isActive = activeLink === name.toLowerCase();
    const activeClass = isActive
      ? "text-[#8DC63F] dark:text-[#00AEEF]"
      : "text-gray-800 dark:text-white";

    switch (name.toLowerCase()) {
      case "home":
        return <HomeIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "about":
        return <InfoIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "partners":
        return <PartnersIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "achievements":
        return <AwardIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "clients":
        return <UsersIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "contact":
        return <MailIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "projects":
        return <ProjectsIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "products":
        return <ProductsIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      case "team":
        return <UsersIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
      default:
        return <HomeIcon className={`h-5 w-5 shrink-0 ${activeClass}`} />;
    }
  };

  const links: NavigationLink[] = navItems.map((item) => ({
    label: navLabels[item.name.toLowerCase()] || item.name,
    href: item.link,
    ariaLabel: navLabels[item.name.toLowerCase()] || item.ariaLabel,
    icon: getIconForNavItem(item.name),
    onClick: () => {
      setActiveLink(item.name.toLowerCase());
      handleNavigation(item.link.replace("#", ""));
    },
    isActive: activeLink === item.name.toLowerCase(),
  }));

  return (
    <div
      className="flex w-full flex-1 flex-col overflow-hidden md:flex-row h-screen"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #1e1e1e, #3a3a3a, #005b94)"
            : "linear-gradient(135deg, #f5f5f5, #a8e063, #56ab2f)",
      }}
    >
      <Sidebar open={open} setOpen={setOpen} theme={theme}>
        <SidebarBody className={cn(
          "justify-between gap-10",
          !open && "overflow-hidden"
        )}>
          <div className={cn(
            "flex flex-1 flex-col overflow-x-hidden overflow-y-auto",
            !open && "overflow-hidden"
          )}>
            {open ? <Logo theme={theme} /> : <LogoIcon theme={theme} />}
            <div className="mt-4 flex flex-col gap-2">
              {links.map((link, idx ) => (
                <SidebarLink
                  key={idx}
                  link={{
                    ...link,
                    icon: link.icon,
                    label: link.label,
                    ariaLabel: link.ariaLabel,
                  }}
                  theme={theme}
                  className={cn(
                    "flex items-center gap-2 py-2 hover:translate-x-1 transition duration-150",
                    link.isActive
                      ? "text-[#8DC63F] dark:text-[#00AEEF]"
                      : "text-gray-800 dark:text-white"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className={cn(
                "flex items-center gap-2 py-2 hover:translate-x-1 transition duration-150",
                theme === "light" ? "text-gray-800" : "text-white"
              )}
            >
              <LanguageIcon className="h-5 w-5 shrink-0" />
              {open && <LocaleSwitcher />}
            </div>
            <button
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              className={cn(
                "flex items-center gap-2 py-2 hover:translate-x-1 transition duration-150",
                theme === "light" ? "text-gray-800" : "text-white"
              )}
            >
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5 shrink-0" />
              ) : (
                <SunIcon className="h-5 w-5 shrink-0" />
              )}
              {open && (
                <span className="text-sm font-medium">
                  {theme === "light" ? currentThemeLabels.light : currentThemeLabels.dark}
                </span>
              )}
            </button>
          </div>
        </SidebarBody>
      </Sidebar>
      <PageContainer theme={theme} currentPage={currentPage} />
    </div>
  );
};

export default function SidebarDemo() {
  return (
    <ThemeProvider>
      <SidebarContent />
    </ThemeProvider>
  );
}