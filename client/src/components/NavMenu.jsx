import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './NavMenu.module.css'

const NAV_ITEMS = [
  { to: '/', labelKey: 'home', icon: 'home', end: true },
  { to: '/trilha', labelKey: 'lessons', icon: 'school' },
  { to: '/flashcards', labelKey: 'flashcards', icon: 'style' },
]

function NavMenu({ onNavigate }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function handleLinkClick(event) {
    onNavigate?.(event)
    if (!event.defaultPrevented) setOpen(false)
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t.chrome.nav.close : t.chrome.nav.open}
      >
        <Icon name={open ? 'close' : 'menu'} size={26} color="currentColor" />
      </button>

      {open && (
        <nav id={panelId} className={styles.panel} aria-label={t.chrome.nav.label}>
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
                  onClick={handleLinkClick}
                >
                  <Icon name={item.icon} size={22} color="currentColor" />
                  {t.chrome.nav[item.labelKey]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default NavMenu
