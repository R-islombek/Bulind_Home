import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'
import uzTranslation from '../public/Locals/uz.json';
import enTranslation from '../public/Locals/en.json';
import ruTranslation from '../public/Locals/ru.json';
const language = localStorage.getItem('i18nextLng') || 'en'


i18n
  .use(languageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    lng: i18n.language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation }, 
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;