import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchUnitLessons } from './api.js'
import styles from './PathList.module.css'
import { getRecommendedLessonId, isLessonCompleted } from './progress.js'

function UnitPath() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [unitRequest, setUnitRequest] = useState({
    requestKey: null,
    unit: null,
    error: false,
  })

  useEffect(() => {
    let cancelled = false
    const key = `${unitId}:${language}`

    fetchUnitLessons(unitId, language)
      .then((unit) => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit, error: false })
      })
      .catch(() => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit: null, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [unitId, language])

  const loading = unitRequest.requestKey !== `${unitId}:${language}`
  const unit = loading ? null : unitRequest.unit
  const loadError = !loading && unitRequest.error
  const recommendedLessonId = unit ? getRecommendedLessonId(unit.lessons) : null

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
                const completed = isLessonCompleted(lesson.id)
                const recommended = lesson.id === recommendedLessonId && !completed
                const lessonStatus = completed
                  ? t.trilha.unitPath.completed
                  : recommended
                    ? t.trilha.unitPath.suggested
                    : t.trilha.panel.questionsCount(lesson.exerciseCount)

                return (
                  <li key={lesson.id}>
                    <button
                      type="button"
                      className={styles.unitCard}
                      onClick={() => navigate(`/trilha/${unitId}/${lesson.id}`)}
                    >
                      <span className={styles.unitIcon}>
                        <Icon name={completed ? 'task_alt' : 'category'} size={28} color="currentColor" />
                      </span>
                      <span className={styles.unitText}>
                        <span className={styles.unitName}>{lesson.title}</span>
                        <span className={styles.unitCount}>{lessonStatus}</span>
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

export default UnitPath
