"use client";

import type { FC } from "react";
import {
  getHTMLTextDir,
  getLocaleName,
} from "intlayer";
import { useLocale } from "next-intlayer";
import Link from "next/link";
import { useState } from "react";

export const LocaleSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium"
      >
        {getLocaleName(locale)}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {availableLocales.map((localeItem) => (
            <Link
              href={`/${localeItem}${pathWithoutLocale}`}
              hrefLang={localeItem}
              key={localeItem}
              className={`flex flex-col p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                locale === localeItem ? 'bg-gray-50 dark:bg-gray-700' : ''
              }`}
              aria-current={locale === localeItem ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="font-medium" 
                  dir={getHTMLTextDir(localeItem)} 
                  lang={localeItem}
                >
                  {getLocaleName(localeItem, localeItem)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {localeItem.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};