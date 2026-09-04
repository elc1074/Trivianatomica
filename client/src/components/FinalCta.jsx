import { Link } from 'react-router-dom'
import mascot from '../assets/illustrations/home_image.png'
import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './FinalCta.module.css'

const badges = [
  { icon: 'pets', className: styles.badgePets },
  { icon: 'visibility', className: styles.badgeVisibility },
  { icon: 'edit', className: styles.badgeEdit },
  { icon: 'school', className: styles.badgeSchool },
  { icon: 'check_circle', className: styles.badgeCheck },
]

function FinalCta() {
  const { t } = useLanguage()

  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <div className={styles.stage}>
        <div className={`container ${styles.content}`}>
          <h2 id="final-cta-title" className={styles.headline}>
            {t.home.finalCta.headline}
          </h2>

          <p className={styles.description}>{t.home.finalCta.description}</p>

          <Link className="button button-primary" to="/trilha">
            {t.home.finalCta.cta}
            <Icon name="arrow_forward" size={20} color="currentColor" />
          </Link>
        </div>

        <div className={styles.collage} aria-hidden="true">
          {badges.map((badge) => (
            <span key={badge.icon} className={`${styles.badge} ${badge.className}`}>
              <Icon name={badge.icon} size={26} color="currentColor" />
            </span>
          ))}

          <img src={mascot} alt="" className={styles.mascot} />
        </div>

        <svg
          className={styles.wave}
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,120 C240,60 480,180 720,110 C960,40 1200,150 1440,90 L1440,220 L0,220 Z"
            fill="var(--color-primary)"
          />
        </svg>
      </div>
    </section>
  )
}

export default FinalCta
