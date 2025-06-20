import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.ARABIC,
      Locales.FRENCH,
      Locales.SPANISH,
      Locales.GERMAN,
      Locales.CHINESE,
      // Your other locales
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;