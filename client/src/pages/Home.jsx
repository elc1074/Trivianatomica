import CallToAction from '../components/CallToAction.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import PageLayout from '../components/PageLayout.jsx'
import styles from './Home.module.css'

function Home() {
  return (
    <PageLayout>
      <section
        className={styles.heroSection}
        id="inicio"
        aria-labelledby="hero-title"
      >
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Anatomia Veterinária
            </span>
            <h1 id="hero-title">
              Estude Anatomia Veterinária de forma interativa
            </h1>
            <p className={styles.heroDescription}>
              Pratique a identificação de estruturas anatômicas e prepare-se
              para suas avaliações práticas.
            </p>
            <button className="button button-primary" type="button">
              Começar a estudar
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <HowItWorks />
      <CallToAction />
    </PageLayout>
  )
}

export default Home
