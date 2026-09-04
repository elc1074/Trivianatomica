import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext.js'
import { DEFAULT_LANGUAGE, translations } from './translations.js'

const STORAGE_KEY = 'trivia-anatomica:language'

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && translations[stored] ? stored : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage)

  function setLanguage(nextLanguage) {
    if (!translations[nextLanguage]) return
    setLanguageState(nextLanguage)
    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage)
    } catch {
      return
    }
  }

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  )

  useEffect(() => {
    const meta = value.t.meta
    document.documentElement.lang = meta.htmlLang
    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    }
  }, [value.t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
