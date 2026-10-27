import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import SkeletonList from '../../components/SkeletonList.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchProgressSummary, fetchUnitLessons } from './api.js'
import TrailBanner from './TrailBanner.jsx'
import TrailMap, { TrailMapSkeleton } from './TrailMap.jsx'
import TrailViewToggle from './TrailViewToggle.jsx'
import styles from './PathList.module.css'
import { getRecommendedLessonId, isLessonCompleted } from './progress.js'

function UnitPath() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [unitRequest, setUnitRequest] = useState({
    requestKey: null,
    unit: null,
    completedLessonIds: [],
    error: false,
  })
  const [reloadIndex, setReloadIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    const key = `${unitId}:${language}`

    Promise.all([fetchUnitLessons(unitId, language), fetchProgressSummary()])
      .then(([unit, summary]) => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit, completedLessonIds: summary.completedLessonIds ?? [], error: false })
      })
      .catch(() => {
        if (!cancelled) setUnitRequest({ requestKey: key, unit: null, completedLessonIds: [], error: true })
      })

    return () => {
      cancelled = true
    }
  }, [unitId, language, reloadIndex])

  function handleRetry() {
    setUnitRequest({ requestKey: null, unit: null, completedLessonIds: [], error: false })
    setReloadIndex((currentIndex) => currentIndex + 1)
  }

  const loading = unitRequest.requestKey !== `${unitId}:${language}`
  const unit = loading ? null : unitRequest.unit
  const loadError = !loading && unitRequest.error
  const recommendedLessonId = unit ? getRecommendedLessonId(unit.lessons, unitRequest.completedLessonIds) : null

  return (
    <PageLayout>
      <section className={styles.panel}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: t.chrome.nav.lessons, to: '/trilha' },
              { label: loading ? null : unit ? unit.title : t.chrome.nav.unit },
            ]}
          />

          <TrailBanner
            loading={loading}
            label={unit ? t.trilha.unitPath.unitLabel(unit.orderIndex + 1) : null}
            title={unit ? unit.title : t.chrome.nav.unit}
            subtitle={t.trilha.unitPath.subtitle}
          />

          {loadError && (
            <div className={styles.status}>
              <p>{t.trilha.unitPath.loadError}</p>
              <button type="button" className="button button-primary" onClick={handleRetry}>
                {t.trilha.unitPath.retry}
              </button>
            </div>
          )}
          {!loadError && (
            <TrailViewToggle>
              {(trailView) =>
                loading ? (
                  trailView === 'map' ? (
                    <TrailMapSkeleton count={4} label={t.trilha.unitPath.loading} />
                  ) : (
                    <div className={styles.listSkeleton}>
                      <SkeletonList count={4} label={t.trilha.unitPath.loading} />
                    </div>
                  )
                ) : trailView === 'map' ? (
                  <TrailMap
                    stops={unit.lessons}
                    isStopCompleted={(lesson) => isLessonCompleted(lesson.id, unitRequest.completedLessonIds)}
                    currentStopId={recommendedLessonId}
                    statusLabels={{
                      completed: t.trilha.unitPath.completed,
                      current: t.trilha.unitPath.suggested,
                      upcoming: t.trilha.unitPath.upcoming,
                    }}
                    getStopLabel={t.trilha.unitPath.lessonNode}
                    startLabel={t.trilha.unitPath.startBubble}
                    onStopSelect={(lessonId) => navigate(`/trilha/${unitId}/${lessonId}`)}
                  />
                ) : (
                  <ul className={styles.unitList}>
                    {unit.lessons.map((lesson) => {
                      const completed = isLessonCompleted(lesson.id, unitRequest.completedLessonIds)
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
                )
              }
            </TrailViewToggle>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default UnitPath
