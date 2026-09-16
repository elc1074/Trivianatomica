import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchUnits } from './api.js'
import styles from './PathList.module.css'
import { getRecommendedUnitId, isUnitCompleted } from './progress.js'

function SystemsPanel() {
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [result, setResult] = useState({ language: null, units: null, error: false })

  useEffect(() => {
    let cancelled = false

    fetchUnits(language)
      .then((data) => {
        if (!cancelled) setResult({ language, units: data, error: false })
      })
      .catch(() => {
        if (!cancelled) setResult({ language, units: null, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [language])

  const loading = result.language !== language
  const units = loading ? null : result.units
  const loadError = !loading && result.error
  const recommendedUnitId = units ? getRecommendedUnitId(units) : null

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

          {loadError && <p className={styles.status}>{t.trilha.panel.loadError}</p>}
          {loading && <p className={styles.status}>{t.trilha.panel.loading}</p>}

          {units && (
            <ul className={styles.unitList}>
              {units.map((unit) => {
                const completed = isUnitCompleted(unit)
                const recommended = unit.id === recommendedUnitId && !completed
                const unitStatus = completed
                  ? t.trilha.panel.completed
                  : recommended
                    ? t.trilha.panel.suggested
                    : t.trilha.panel.lessonsCount(unit.lessons.length)

                return (
                  <li key={unit.id}>
                    <button
                      type="button"
                      className={styles.unitCard}
                      onClick={() => navigate(`/trilha/${unit.id}`)}
                    >
                      <span className={styles.unitIcon}>
                        <Icon name={completed ? 'task_alt' : 'category'} size={28} color="currentColor" />
                      </span>
                      <span className={styles.unitText}>
                        <span className={styles.unitName}>{unit.title}</span>
                        <span className={styles.unitCount}>{unitStatus}</span>
                      </span>
                      <Icon name="arrow_forward" size={22} color="currentColor" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default SystemsPanel
