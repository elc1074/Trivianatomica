import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './AboutCoil.module.css'

function AboutCoil() {
  const { language, t } = useLanguage()

  return (
    <section
      className={styles.about}
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className={`container ${styles.content}`}>
        <div className={styles.badge} aria-hidden="true">
          <Icon name="public" size={26} color="currentColor" />
        </div>

        <div className={styles.copy}>
          <h2 id="about-title">{t.home.about.title}</h2>
          <p className={styles.description}>{t.home.about.description}</p>
        </div>

        <div className={styles.partners} aria-label={t.home.about.partnersLabel}>
          <span>{t.home.about.ufsm}</span>
          <Icon name="sync_alt" size={24} color="currentColor" />
          <span>{t.home.about.ust}</span>
        </div>

        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={language === 'es' ? '/trivia-anatomica-making-of-es-cl.mp4' : '/video2.mp4'}
            controls
            preload="metadata"
            playsInline
            key={language}
            poster="/video2-poster.jpg"
            aria-label={t.home.about.videoLabel}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutCoil
