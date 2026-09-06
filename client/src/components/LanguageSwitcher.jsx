import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '../i18n/translations.js'
import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './LanguageSwitcher.module.css'

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLabel = LANGUAGES.find((item) => item.code === language)?.label ?? language

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {t.chrome.languageLabel}: {currentLabel.toUpperCase()}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <Icon name="expand_more" size={18} color="currentColor" />
        </span>
      </button>

      {open && (
        <ul className={styles.options} role="listbox">
          {LANGUAGES.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                className={`${styles.option} ${item.code === language ? styles.optionSelected : ''}`}
                role="option"
                aria-selected={item.code === language}
                onClick={() => {
                  setLanguage(item.code)
                  setOpen(false)
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
