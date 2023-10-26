import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector';

// import enTranslation from './locales/en.json';
// import arTranslation from './locales/ar.json';
const resources = {
  en: {
    translation: {
      
        "greeting":"Home",
        "Text":"Services",
        "Text1":"Portfolio",
        "text2":"About",
        "text3":"Pricing",
        "text4":"Contact"
          
    }
  },
  ar: {
    translation: {
      "greeting":"الرئيسية",
      "Text":"الخدمات",
      "Text1":"ملف",
        "text2":"معلومات عنا",
        "text3":"الاسعار",
        "text4":"اتصل ينا"
        }
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    },
    react :{
        useSuspense:false
    }
  });

  export default i18n;