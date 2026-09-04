import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/illustrations/logo.png'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './Header.module.css'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const SCROLL_THRESHOLD = 120

function Header() {
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

  return (
    <header className={`${styles.siteHeader} ${showCta ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <Link className={styles.brand} to="/" aria-label={t.chrome.brand}>
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
        </div>
      </div>
    </header>
  )
}

export default Header
