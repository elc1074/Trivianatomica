import { useContext } from 'react'
import { LanguageContext } from './languageContext.js'

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de LanguageProvider')
  }
  return context
}
