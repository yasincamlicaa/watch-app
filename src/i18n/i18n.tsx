import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  EN: {
    translation: {
      'İÇERİKLER': 'CONTENTS',
      'MARKALAR': 'BRANDS',
      'TV / PODCAST': 'TV / PODCAST',
      'INSIDE': 'INSIDE',
      'FUAR': 'FAIR',
    },
  },
  TR: {
    translation: {
      'İÇERİKLER': 'İÇERİKLER',
      'MARKALAR': 'MARKALAR',
      'TV / PODCAST': 'TV / PODCAST',
      'INSIDE': 'INSIDE',
      'FUAR': 'FUAR',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'TR',
  fallbackLng: 'EN',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
