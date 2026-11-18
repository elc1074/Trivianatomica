import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './AboutCoil.module.css'

function AboutCoil() {
  const { t } = useLanguage()

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
            controls
            preload="metadata"
            playsInline
            aria-label={t.home.about.videoLabel}
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default AboutCoil
