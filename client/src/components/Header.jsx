import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerContent}`}>
        <a className={styles.brand} href="#inicio" aria-label="Trivia Anatômica — início">
          <span className={styles.brandMark} aria-hidden="true">
            TA
          </span>
          <span>Trivia Anatômica</span>
        </a>

        <span className={styles.projectLabel}>Projeto acadêmico COIL</span>
      </div>
    </header>
  )
}

export default Header
