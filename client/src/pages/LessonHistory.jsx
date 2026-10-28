import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Icon from '../components/Icon.jsx'
import PageLayout from '../components/PageLayout.jsx'
import SkeletonBlock from '../components/SkeletonBlock.jsx'
import { fetchLessonHistory } from '../features/trilha-teste/api.js'
import { useLanguage } from '../i18n/useLanguage.js'
import LessonHistoryEntry from './LessonHistoryEntry.jsx'
import styles from './LessonHistory.module.css'

const EMPTY_REQUEST = { language: null, entries: [], error: false, loadedAt: 0 }
const DAY_IN_MS = 24 * 60 * 60 * 1000

function getDayKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

function groupEntriesByDay(entries) {
  const groups = []
  entries.forEach((entry) => {
    const completedAt = new Date(entry.completedAt)
    const dayKey = getDayKey(completedAt)
    const lastGroup = groups[groups.length - 1]
    if (lastGroup?.dayKey === dayKey) lastGroup.entries.push(entry)
    else groups.push({ dayKey, date: completedAt, entries: [entry] })
  })
  return groups
}

function LessonHistorySkeleton({ label }) {
  return (
    <div className={styles.groups} aria-label={label} aria-busy="true">
      {[3, 2].map((rowCount, groupIndex) => (
        <section key={groupIndex} className={styles.group}>
          <SkeletonBlock width={120} height={16} />
          <ul className={styles.entryList}>
            {Array.from({ length: rowCount }, (_, index) => (
              <li key={index} className={styles.entry}>
                <SkeletonBlock width={48} height={48} radius="50%" />
                <span className={styles.entryBody}>
                  <SkeletonBlock width="min(260px, 80%)" height={16} />
                  <SkeletonBlock width="min(200px, 60%)" height={12} />
                </span>
                <SkeletonBlock width={96} height={40} radius={999} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function LessonHistory() {
  const { language, t } = useLanguage()
  const copy = t.lessonHistory
  const [request, setRequest] = useState(EMPTY_REQUEST)
  const [reloadIndex, setReloadIndex] = useState(0)

  useEffect(() => {
    let cancelled = false

    fetchLessonHistory(language)
      .then((entries) => {
        if (!cancelled) setRequest({ language, entries, error: false, loadedAt: Date.now() })
      })
      .catch(() => {
        if (!cancelled) setRequest({ language, entries: [], error: true, loadedAt: Date.now() })
      })

    return () => {
      cancelled = true
    }
  }, [language, reloadIndex])

  function handleRetry() {
    setRequest(EMPTY_REQUEST)
    setReloadIndex((currentIndex) => currentIndex + 1)
  }

  const loading = request.language !== language
  const loadError = !loading && request.error
  const dateLocale = language === 'pt' ? 'pt-BR' : 'es-CL'
  const todayKey = getDayKey(new Date(request.loadedAt))
  const yesterdayKey = getDayKey(new Date(request.loadedAt - DAY_IN_MS))

  function formatDay(group) {
    if (group.dayKey === todayKey) return copy.today
    if (group.dayKey === yesterdayKey) return copy.yesterday
    return new Intl.DateTimeFormat(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' }).format(group.date)
  }

  return (
    <PageLayout>
      <div className={styles.page}>
        <div className={`container ${styles.content}`}>
          <Breadcrumb
            items={[
              { label: t.chrome.nav.dashboard, to: '/painel' },
              { label: t.chrome.nav.history },
            ]}
          />

          <header className={styles.header}>
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </header>

          {loading ? (
            <LessonHistorySkeleton label={copy.loading} />
          ) : loadError ? (
            <div className={styles.status}>
              <p>{copy.loadError}</p>
              <button type="button" className="button button-primary" onClick={handleRetry}>
                {copy.retry}
              </button>
            </div>
          ) : request.entries.length === 0 ? (
            <section className={styles.emptyCard}>
              <Icon name="history" size={42} color="currentColor" />
              <h2>{copy.emptyTitle}</h2>
              <p>{copy.empty}</p>
              <Link className="button button-primary" to="/trilha">
                {copy.emptyAction}
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
            </section>
          ) : (
            <>
              <div className={styles.groups}>
                {groupEntriesByDay(request.entries).map((group) => (
                  <section key={group.dayKey} className={styles.group} aria-labelledby={`day-${group.dayKey}`}>
                    <h2 id={`day-${group.dayKey}`} className={styles.dayLabel}>{formatDay(group)}</h2>
                    <ul className={styles.entryList}>
                      {group.entries.map((entry) => (
                        <LessonHistoryEntry key={entry.lessonId} entry={entry} />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <p className={styles.note}>{copy.bestScoreNote}</p>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default LessonHistory
