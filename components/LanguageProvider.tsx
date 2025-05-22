"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { IntlProvider } from "next-intl";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const getInitialLocale = (): string => {
  if (typeof window !== "undefined") {
    // Check localStorage
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale) return storedLocale;

    // Check browser language
    const browserLocale = navigator.language.split("-")[0];
    if (["en", "ar"].includes(browserLocale)) return browserLocale;
  }
  return "en"; // default
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<string>(getInitialLocale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  // Dynamically import messages for the current locale
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
  import(`../locales/${locale}/about.json`)

      .then((module) => setMessages(module.default))
      .catch(() => setMessages({}));
  }, [locale]);

  if (!messages) {
    return null; // or a loading spinner
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
