"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  const getNextLocale = (currentLocale: string) => {
    const locales = ["en", "ar", "fr", "es", "de", "zh"];
    const currentIndex = locales.indexOf(currentLocale);
    return locales[(currentIndex + 1) % locales.length];
  };

  const getLocaleLabel = (locale: string) => {
    const labels: Record<string, string> = {
      en: "English",
      ar: "العربية",
      fr: "Français",
      es: "Español",
      de: "Deutsch",
      zh: "中文"
    };
    return labels[locale] || locale;
  };

  const toggleLanguage = () => {
    const newLocale = getNextLocale(locale);
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
      aria-label="Toggle Language"
    >
      {getLocaleLabel(locale)}
    </button>
  );
};

export default LanguageToggle;
