import heroImage from '../assets/hero_image.png'
import CallToAction from '../components/CallToAction.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Icon from '../components/Icon.jsx'
import PageLayout from '../components/PageLayout.jsx'
import Reveal from '../components/Reveal.jsx'
import styles from './Home.module.css'

function Home() {
  return (
    <PageLayout>
      <section
        className={styles.heroSection}
        id="inicio"
        aria-labelledby="hero-title"
      >
        <div className="container">
          <div className={styles.heroStage}>
            <h1 id="hero-title" className={styles.heroTitle}>
              Estude Anatomia Veterinária de forma interativa
            </h1>
            <img src={heroImage} alt="" className={styles.heroDogImage} />
            <div className={styles.heroDivider} />
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.heroDescription}>
              Pratique a identificação de estruturas anatômicas e prepare-se
              para suas avaliações práticas.
            </p>
            <button className="button button-primary" type="button">
              Começar a estudar
              <Icon name="arrow_forward" size={20} color="currentColor" />
            </button>
          </div>
        </div>
      </section>

      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <CallToAction />
      </Reveal>
    </PageLayout>
  )
}

export default Home
