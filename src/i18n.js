import { setupI18n } from "@lingui/core";


export const locales = {
  en: "English",
  es: "Spanish",
  fr: "French",
};
export const defaultLocale = "en";

function loadCatalog(language) {
  return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  `./locales/${language}/messages.js`);
}

export const i18n = setupI18n();
i18n.willActivate(loadCatalog);