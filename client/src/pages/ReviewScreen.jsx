import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import PageLayout from '../components/PageLayout.jsx'
import ExerciseSkeleton from '../components/ExerciseSkeleton.jsx'
import { useLanguage } from '../i18n/useLanguage.js'
import { fetchReviewExercises, saveReviewAttempt } from '../features/trilha-teste/api.js'
import LessonProgress from '../features/trilha-teste/LessonProgress.jsx'
import FillBlankExercise from '../features/trilha-teste/exercises/FillBlankExercise.jsx'
import MatchingExercise from '../features/trilha-teste/exercises/MatchingExercise.jsx'
import SetaExercise from '../features/trilha-teste/exercises/SetaExercise.jsx'
import TrueFalseExercise from '../features/trilha-teste/exercises/TrueFalseExercise.jsx'
import styles from './ReviewScreen.module.css'

const EXERCISE_COMPONENTS = {
  seta: SetaExercise,
  'verdadeiro-falso': TrueFalseExercise,
  completar: FillBlankExercise,
  associacao: MatchingExercise,
}

function ReviewScreen() {
  const { language, t } = useLanguage()
  const copy = t.dashboard
  const [request, setRequest] = useState({ language: null, exercises: [], error: false })
  const [index, setIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [reloadIndex, setReloadIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    fetchReviewExercises(language)
      .then((exercises) => {
        if (!cancelled) {
          setIndex(0)
          setCompleted(false)
          setRequest({ language, exercises, error: false })
        }
      })
      .catch(() => {
        if (!cancelled) setRequest({ language, exercises: [], error: true })
      })
    return () => { cancelled = true }
  }, [language, reloadIndex])

  function handleRetry() {
    setRequest({ language: null, exercises: [], error: false })
    setReloadIndex((currentIndex) => currentIndex + 1)
  }

  const loading = request.language !== language
  const exercises = loading ? [] : request.exercises
  const current = exercises[index]

  async function handleComplete(result) {
    if (saving) return
    setSaving(true)
    await saveReviewAttempt({
      lessonId: current.lessonId,
      exerciseId: result.exerciseId,
      isCorrect: result.correct,
      points: result.points,
    }).catch(() => {})
    setSaving(false)

    if (index >= exercises.length - 1) setCompleted(true)
    else setIndex((value) => value + 1)
  }

  return (
    <PageLayout>
      <div className={styles.page}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: t.chrome.nav.dashboard, to: '/painel' },
              { label: copy.reviewTitle },
            ]}
          />

          {loading && <ExerciseSkeleton label={copy.reviewLoading} withHeading />}
          {!loading && request.error && (
            <div className={styles.loadError}>
              <p className={styles.status}>{copy.reviewError}</p>
              <button type="button" className="button button-primary" onClick={handleRetry}>
                {copy.retry}
              </button>
            </div>
          )}

          {!loading && !request.error && exercises.length === 0 && (
            <section className={styles.emptyCard}>
              <Icon name="task_alt" size={42} color="currentColor" />
              <h1>{copy.reviewEmptyTitle}</h1>
              <p>{copy.reviewEmpty}</p>
              <Link className="button button-primary" to="/trilha">
                {copy.start}
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
            </section>
          )}

          {!loading && !request.error && exercises.length > 0 && !completed && current && (
            <section className={styles.review}>
              <header className={styles.header}>
                <p className={styles.eyebrow}>{copy.reviewTitle}</p>
                <h1>{copy.reviewSessionTitle}</h1>
                <p>{copy.reviewSessionDescription}</p>
                <p className={styles.context}>{current.unitTitle} · {current.lessonTitle}</p>
              </header>
              <LessonProgress completed={index} total={exercises.length} />
              <p className={styles.counter}>{t.trilha.lesson.progress(index + 1, exercises.length)}</p>
              <div className={saving ? styles.exerciseSaving : ''}>
                {(() => {
                  const ExerciseComponent = EXERCISE_COMPONENTS[current.exercise.format]
                  return ExerciseComponent ? (
                    <ExerciseComponent key={`${current.attemptId}:${current.exercise.id}`} exercise={current.exercise} onComplete={handleComplete} />
                  ) : <p className={styles.status}>{copy.reviewError}</p>
                })()}
              </div>
            </section>
          )}

          {!loading && !request.error && completed && (
            <section className={styles.emptyCard}>
              <Icon name="celebration" size={42} color="currentColor" />
              <h1>{copy.reviewCompleteTitle}</h1>
              <p>{copy.reviewCompleteDescription}</p>
              <Link className="button button-primary" to="/painel">
                {t.chrome.backToDashboard}
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
            </section>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default ReviewScreen
