import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerContent}`}>
        <span>Projeto COIL UFSM – UST • 2026</span>
        <span>Anatomia Veterinária</span>
      </div>
    </footer>
  )
}

export default Footer
