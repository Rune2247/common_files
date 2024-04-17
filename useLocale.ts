import { useState } from 'react'

export type SupportedLanguages = 'da' | 'en'

export const localeFromStorage =
  (sessionStorage.getItem('language') as SupportedLanguages) ?? 'da'

export const useLocale = () => {
  const [locale, setLocaleState] = useState<string>(localeFromStorage)

  const setLocale = (locale: string) => {
    setLocaleState(locale)
    sessionStorage.setItem('language', locale)
  }

  return { locale, setLocale }
}
