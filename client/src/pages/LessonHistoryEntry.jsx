import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SkeletonBlock from '../components/SkeletonBlock.jsx'
import { fetchLessonDetail } from '../features/trilha-teste/api.js'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './LessonHistory.module.css'

const EMPTY_DETAIL = { language: null, exercises: [], error: false }

function isPerfect(entry) {
  return entry.totalExercises > 0 && entry.correctCount >= entry.totalExercises
}

function getResult(isCorrect) {
  if (isCorrect === true) return { key: 'resultCorrect', icon: 'check', className: styles.resultCorrect }
  if (isCorrect === false) return { key: 'resultWrong', icon: 'close', className: styles.resultWrong }
  return { key: 'resultNone', icon: 'remove', className: styles.resultNone }
}

function LessonHistoryEntry({ entry }) {
  const { language, t } = useLanguage()
  const copy = t.lessonHistory
  const detailsId = useId()
  const [expanded, setExpanded] = useState(false)
  const [detail, setDetail] = useState(EMPTY_DETAIL)
  const [reloadIndex, setReloadIndex] = useState(0)

  useEffect(() => {
    if (!expanded) return
    let cancelled = false

    fetchLessonDetail(entry.lessonId, language)
      .then((exercises) => {
        if (!cancelled) setDetail({ language, exercises, error: false })
      })
      .catch(() => {
        if (!cancelled) setDetail({ language, exercises: [], error: true })
      })

    return () => {
      cancelled = true
    }
  }, [expanded, entry.lessonId, language, reloadIndex])

  function handleRetry() {
    setDetail(EMPTY_DETAIL)
    setReloadIndex((currentIndex) => currentIndex + 1)
  }

  const detailLoading = detail.language !== language
  const wrongCount = detail.exercises.filter((exercise) => exercise.isCorrect === false).length

  return (
    <li className={`${styles.entry} ${expanded ? styles.entryExpanded : ''}`}>
      <div className={styles.entryRow}>
        <button
          type="button"
          className={styles.entryToggle}
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((current) => !current)}
        >
          <span className={`${styles.entryIcon} ${isPerfect(entry) ? styles.entryIconPerfect : ''}`}>
            <Icon name={isPerfect(entry) ? 'verified' : 'check'} size={24} color="currentColor" />
          </span>
          <span className={styles.entryBody}>
            <strong>{entry.lessonTitle}</strong>
            <span>{entry.unitTitle}</span>
            <span className={styles.entryResult}>
              {copy.correct(entry.correctCount, entry.totalExercises)}
              <b>{copy.points(entry.score)}</b>
            </span>
          </span>
          <span className={styles.chevron}>
            <Icon name="expand_more" size={24} color="currentColor" />
          </span>
        </button>
        {entry.unitId && (
          <Link
            className={styles.redoButton}
            to={`/trilha/${entry.unitId}/${entry.lessonId}`}
            aria-label={copy.redoLabel(entry.lessonTitle)}
          >
            <Icon name="replay" size={20} color="currentColor" />
            <span className={styles.redoText}>{copy.redo}</span>
          </Link>
        )}
      </div>

      {expanded && (
        <div id={detailsId} className={styles.details}>
          <p className={styles.detailsTitle}>{copy.detailsTitle}</p>

          {detailLoading ? (
            <ul className={styles.detailList} aria-label={copy.detailsLoading} aria-busy="true">
              {Array.from({ length: 3 }, (_, index) => (
                <li key={index} className={styles.detailItem}>
                  <SkeletonBlock width={28} height={28} radius="50%" />
                  <span className={styles.detailText}>
                    <SkeletonBlock width={110} height={12} />
                    <SkeletonBlock width="min(320px, 90%)" height={14} />
                  </span>
                </li>
              ))}
            </ul>
          ) : detail.error ? (
            <div className={styles.detailsError}>
              <p>{copy.detailsError}</p>
              <button type="button" className="button button-light" onClick={handleRetry}>
                {copy.retry}
              </button>
            </div>
          ) : (
            <>
              <ul className={styles.detailList} tabIndex={0} aria-label={copy.detailsTitle}>
                {detail.exercises.map((exercise) => {
                  const result = getResult(exercise.isCorrect)
                  return (
                    <li key={exercise.id} className={styles.detailItem}>
                      <span className={`${styles.resultIcon} ${result.className}`} role="img" aria-label={copy[result.key]}>
                        <Icon name={result.icon} size={18} color="currentColor" />
                      </span>
                      <span className={styles.detailText}>
                        <small>{t.trilha.lesson.formats[exercise.format] ?? exercise.format}</small>
                        <span>{exercise.label}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
              {wrongCount > 0 && (
                <Link className={`button button-primary ${styles.reviewLink}`} to="/revisar-erros">
                  {copy.reviewErrors}
                  <Icon name="arrow_forward" size={20} color="currentColor" />
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </li>
  )
}

export default LessonHistoryEntry
