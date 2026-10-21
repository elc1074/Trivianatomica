import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/illustrations/logo.png'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './Header.module.css'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import NavMenu from './NavMenu.jsx'

const SCROLL_THRESHOLD = 120

// confirmLeave: mensagem pedindo confirmação antes de sair da página atual (ex.: lição em andamento).
function Header({ confirmLeave }) {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) return

    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const showCta = isHome && scrolled

  function guardNavigation(event) {
    if (confirmLeave && !window.confirm(confirmLeave)) event.preventDefault()
  }

  return (
    <header className={`${styles.siteHeader} ${showCta ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <Link
          className={styles.brand}
          to="/"
          aria-label={t.chrome.brand}
          onClick={guardNavigation}
        >
          <img src={logo} alt="" className={styles.brandMark} />
          <span className={styles.brandName}>{t.chrome.brand}</span>
        </Link>

        <div className={styles.headerActions}>
          {showCta ? (
            <Link className="button button-primary" to="/trilha">
              {t.home.hero.cta}
            </Link>
          ) : (
            <LanguageSwitcher />
          )}
          <NavMenu onNavigate={guardNavigation} />
        </div>
      </div>
    </header>
  )
}

export default Header
