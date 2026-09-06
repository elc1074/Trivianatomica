import { useNavigate } from 'react-router-dom'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { getUnits } from './data.js'
import styles from './SystemsPanel.module.css'

function SystemsPanel() {
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const units = getUnits(language)

  return (
    <PageLayout>
      <section className={styles.panel}>
        <div className="container">
          <div className={styles.intro}>
            <img className={styles.mascot} src={mascotWelcome} alt="" width="160" height="184" />
            <div>
              <h1 className={styles.title}>{t.trilha.panel.title}</h1>
              <p className={styles.subtitle}>{t.trilha.panel.subtitle}</p>
            </div>
          </div>

          <ul className={styles.unitList}>
            {units.map((unit) => (
              <li key={unit.id}>
                <button
                  type="button"
                  className={styles.unitCard}
                  onClick={() => navigate(`/trilha/${unit.id}`)}
                >
                  <span className={styles.unitIcon}>
                    <Icon name="category" size={28} color="currentColor" />
                  </span>
                  <span className={styles.unitText}>
                    <span className={styles.unitName}>{unit.title}</span>
                    <span className={styles.unitCount}>
                      {t.trilha.panel.questionsCount(unit.exercises.length)}
                    </span>
                  </span>
                  <Icon name="arrow_forward" size={22} color="currentColor" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}

export default SystemsPanel
