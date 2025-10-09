import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import itTranslations from './locales/it.json';
import ruTranslations from './locales/ru.json';
import plTranslations from './locales/pl.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    it: { translation: itTranslations },
    ru: { translation: ruTranslations },
    pl: { translation: plTranslations },
    es: { translation: esTranslations },
    fr: { translation: frTranslations },
    de: { translation: deTranslations },
  },
  lng: 'it', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;