import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  const { t } = useLanguage()
  const steps = t.home.howItWorks.steps

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
      </div>
    </section>
  )
}

export default HowItWorks
