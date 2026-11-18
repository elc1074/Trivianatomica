import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth.js'
import heroIllustration from '../assets/illustrations/mascot-welcome.png'
import AboutCoil from '../components/AboutCoil.jsx'
import FinalCta from '../components/FinalCta.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Icon from '../components/Icon.jsx'
import PageLayout from '../components/PageLayout.jsx'
import Reveal from '../components/Reveal.jsx'
import ValueProps from '../components/ValueProps.jsx'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './Home.module.css'

function Home() {
  const { t } = useLanguage()
  const { isAuthenticated } = useAuth()

  return (
    <PageLayout>
      <section
        className={styles.heroSection}
        id="inicio"
        aria-labelledby="hero-title"
      >
        <div className={`container ${styles.heroContent}`}>
          <img src={heroIllustration} alt="" className={styles.heroImage} />

          <div className={styles.heroCopy}>
            <h1 id="hero-title" className={styles.heroTitle}>
              {t.home.hero.title}
            </h1>
            <p className={styles.heroDescription}>{t.home.hero.description}</p>

            <div className={styles.heroActions}>
              <Link className="button button-primary" to="/entrar?mode=signup&redirect=%2Fpainel">
                {t.home.hero.cta}
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>

              {!isAuthenticated && (
                <Link className="button button-light" to="/trilha">
                  {t.chrome.continueWithoutAccount}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <ValueProps />

      <Reveal>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <AboutCoil />
      </Reveal>

      <FinalCta />
    </PageLayout>
  )
}

export default Home
