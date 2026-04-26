import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enCommon from "@/locales/en/common";
import zhCommon from "@/locales/zh/common";
import jaCommon from "@/locales/ja/common";

const supportedLngs = ["en", "zh", "ja"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enCommon },
      zh: { translation: zhCommon },
      ja: { translation: jaCommon },
    },
    fallbackLng: "en",
    supportedLngs: [...supportedLngs],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "ewan-lng",
    },
  });

export default i18n;
