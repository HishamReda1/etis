"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
      aria-label="Toggle Language"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageToggle;
