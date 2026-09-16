import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchUnitLessons, fetchUnits } from './api.js'
import styles from './PathList.module.css'
import { isLessonUnlocked, isUnitUnlocked } from './progress.js'

function UnitPath() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [unitRequest, setUnitRequest] = useState({
    requestKey: null,
    unit: null,
    units: null,
    error: false,
  })

  useEffect(() => {
    let cancelled = false
    const key = `${unitId}:${language}`

    Promise.all([fetchUnits(language), fetchUnitLessons(unitId, language)])
      .then(([units, unit]) => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit, units, error: false })
      })
      .catch(() => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit: null, units: null, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [unitId, language])

  const loading = unitRequest.requestKey !== `${unitId}:${language}`
  const unit = loading ? null : unitRequest.unit
  const units = loading ? null : unitRequest.units
  const loadError = !loading && unitRequest.error
  const unitSummary = units?.find((candidateUnit) => candidateUnit.id === unitId)
  const lockedUnit = Boolean(unitSummary && units && !isUnitUnlocked(unitSummary, units))

  if (lockedUnit) {
    return <Navigate to="/trilha" replace />
  }

  return (
    <PageLayout>
      <section className={styles.panel}>
        <div className="container">
          <Link to="/trilha" className={styles.backLink}>
            <Icon name="arrow_back" size={20} color="currentColor" />
            {t.trilha.unitPath.backToPanel}
          </Link>

          <div className={styles.intro}>
            <img className={styles.mascot} src={mascotWelcome} alt="" width="160" height="184" />
            <div>
              <h1 className={styles.title}>{unit ? unit.title : t.trilha.panel.title}</h1>
              <p className={styles.subtitle}>{t.trilha.unitPath.subtitle}</p>
            </div>
          </div>

          {loadError && <p className={styles.status}>{t.trilha.unitPath.loadError}</p>}
          {loading && <p className={styles.status}>{t.trilha.unitPath.loading}</p>}

          {unit && (
            <ul className={styles.unitList}>
              {unit.lessons.map((lesson) => {
                const unlocked = isLessonUnlocked(lesson, unit.lessons)

                return (
                  <li key={lesson.id}>
                    <button
                      type="button"
                      className={`${styles.unitCard} ${unlocked ? '' : styles.unitCardLocked}`}
                      onClick={() => unlocked && navigate(`/trilha/${unitId}/${lesson.id}`)}
                      disabled={!unlocked}
                      aria-disabled={!unlocked}
                      title={unlocked ? undefined : t.trilha.unitPath.locked}
                    >
                      <span className={styles.unitIcon}>
                        <Icon name={unlocked ? 'category' : 'lock'} size={28} color="currentColor" />
                      </span>
                      <span className={styles.unitText}>
                        <span className={styles.unitName}>{lesson.title}</span>
                        <span className={styles.unitCount}>
                          {unlocked
                            ? t.trilha.panel.questionsCount(lesson.exerciseCount)
                            : t.trilha.unitPath.locked}
                        </span>
                      </span>
                      {unlocked && <Icon name="arrow_forward" size={22} color="currentColor" />}
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

export default UnitPath
