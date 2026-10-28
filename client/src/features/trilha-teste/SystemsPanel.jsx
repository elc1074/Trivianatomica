import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import SkeletonList from '../../components/SkeletonList.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchProgressSummary, fetchUnits } from './api.js'
import styles from './PathList.module.css'
import TrailBanner from './TrailBanner.jsx'
import TrailMap, { TrailMapSkeleton } from './TrailMap.jsx'
import TrailViewToggle from './TrailViewToggle.jsx'
import { getRecommendedUnitId, isUnitCompleted } from './progress.js'

const EMPTY_RESULT = { language: null, units: null, completedLessonIds: [], error: false }

function SystemsPanel() {
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [result, setResult] = useState(EMPTY_RESULT)
  const [reloadIndex, setReloadIndex] = useState(0)

  useEffect(() => {
    let cancelled = false

    Promise.all([fetchUnits(language), fetchProgressSummary()])
      .then(([units, summary]) => {
        if (!cancelled) setResult({ language, units, completedLessonIds: summary.completedLessonIds ?? [], error: false })
      })
      .catch(() => {
        if (!cancelled) setResult({ language, units: null, completedLessonIds: [], error: true })
      })

    return () => {
      cancelled = true
    }
  }, [language, reloadIndex])

  function handleRetry() {
    setResult(EMPTY_RESULT)
    setReloadIndex((currentIndex) => currentIndex + 1)
  }

  const loading = result.language !== language
  const units = loading ? null : result.units
  const loadError = !loading && result.error
  const recommendedUnitId = units ? getRecommendedUnitId(units, result.completedLessonIds) : null
  const completedUnitCount = units ? units.filter((unit) => isUnitCompleted(unit, result.completedLessonIds)).length : 0

  return (
    <PageLayout>
      <section className={styles.panel}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: t.chrome.nav.dashboard, to: '/painel' },
              { label: t.chrome.nav.lessons },
            ]}
          />

          <TrailBanner
            loading={loading}
            label={units ? t.trilha.panel.bannerLabel(completedUnitCount, units.length) : null}
            title={t.trilha.panel.title}
            subtitle={t.trilha.panel.subtitle}
          />

          {loadError && (
            <div className={styles.status}>
              <p>{t.trilha.panel.loadError}</p>
              <button type="button" className="button button-primary" onClick={handleRetry}>
                {t.trilha.panel.retry}
              </button>
            </div>
          )}
          {!loadError && (
            <TrailViewToggle>
              {(trailView) =>
                loading ? (
                  trailView === 'map' ? (
                    <TrailMapSkeleton count={6} label={t.trilha.panel.loading} />
                  ) : (
                    <div className={styles.listSkeleton}>
                      <SkeletonList count={6} label={t.trilha.panel.loading} />
                    </div>
                  )
                ) : trailView === 'map' ? (
                  <TrailMap
                    stops={units}
                    isStopCompleted={(unit) => isUnitCompleted(unit, result.completedLessonIds)}
                    currentStopId={recommendedUnitId}
                    statusLabels={{
                      completed: t.trilha.panel.completed,
                      current: t.trilha.panel.suggested,
                      upcoming: t.trilha.panel.upcoming,
                    }}
                    getStopLabel={t.trilha.panel.unitNode}
                    startLabel={t.trilha.unitPath.startBubble}
                    getStopProgress={(unit) =>
                      unit.lessons.length
                        ? unit.lessons.filter((lesson) => result.completedLessonIds.includes(lesson.id)).length / unit.lessons.length
                        : 0
                    }
                    onStopSelect={(unitId) => navigate(`/trilha/${unitId}`)}
                  />
                ) : (
                  <ul className={styles.unitList}>
                    {units.map((unit) => {
                      const completed = isUnitCompleted(unit, result.completedLessonIds)
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
                )
              }
            </TrailViewToggle>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default SystemsPanel
