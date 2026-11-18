import { useRef } from 'react'
import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  const { t } = useLanguage()
  const videoRef = useRef(null)
  const steps = t.home.howItWorks.steps

  function watchVideo() {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    videoRef.current?.play().catch(() => {})
  }

  return (
    <section
      className={styles.howItWorks}
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2 id="how-title">{t.home.howItWorks.heading}</h2>
        </div>

        <ol className={styles.stepsList}>
          {steps.map((step, index) => (
            <li className={styles.stepCard} key={step.title}>
              {index > 0 && <div className={styles.lineLeft} />}
              {index < steps.length - 1 && <div className={styles.lineRight} />}

              <div className={styles.stepIcon}>
                <Icon name={step.icon} size={30} color="currentColor" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.videoCtaWrapper}>
          <button type="button" className={styles.videoCta} onClick={watchVideo}>
            <Icon name="play_circle" size={20} color="currentColor" />
            {t.home.howItWorks.videoCta}
          </button>
        </div>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            controls
            preload="metadata"
            playsInline
            aria-label={t.home.howItWorks.videoLabel}
          >
            <source src="/triviavideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
