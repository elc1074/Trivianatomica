import Icon from './Icon.jsx'
import styles from './CallToAction.module.css'

function CallToAction() {
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.ctaContent}>
          <div>
            <h2 id="cta-title">Pronto para praticar?</h2>
            <p>Revise estruturas anatômicas no seu ritmo.</p>
          </div>

          <a className="button button-light" href="#como-funciona">
            Ver atividades
            <Icon name="arrow_forward" size={20} color="currentColor" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
