/* eslint-disable */
import { Locales } from 'intlayer';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {

  }

  type DeclaredLocales = Locales.ENGLISH | Locales.ARABIC | Locales.FRENCH | Locales.SPANISH | Locales.GERMAN | Locales.CHINESE;
  type RequiredLocales = Locales.ENGLISH | Locales.ARABIC | Locales.FRENCH | Locales.SPANISH | Locales.GERMAN | Locales.CHINESE;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}