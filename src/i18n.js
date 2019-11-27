import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import tw from "./locales/tw.json";
import jp from "./locales/jp.json";
import kr from "./locales/kr.json";

const resources = {
  en: {
    translation: en
  },
  tw: {
    translation: tw
  },
  kr: {
    translation: kr
  },
  jp: {
    translation: jp
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tw", //預設語言
  fallbackLng: "tw", //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false
  }
});
export default i18n;
