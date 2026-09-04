import { useLanguage } from '../i18n/useLanguage.js'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerContent}`}>
        <span>{t.chrome.footerLine1}</span>
        <span>{t.chrome.footerLine2}</span>
      </div>
    </footer>
  )
}

export default Footer
