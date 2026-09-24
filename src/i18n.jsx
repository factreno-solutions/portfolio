import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import arTranslation from "./locales/ar/translation.json";
import enTranslation from "./locales/en/translation.json";

const resources = {
  ar: { translation: arTranslation },
  en: { translation: enTranslation }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar", // اللغة الافتراضية
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;