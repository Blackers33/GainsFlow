import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import fr from './locales/fr.json'

const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const

const supportedLanguages = Object.keys(resources)
const deviceLanguage = Localization.getLocales()[0]?.languageCode
const initialLanguage =
  deviceLanguage && supportedLanguages.includes(deviceLanguage) ? deviceLanguage : 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
