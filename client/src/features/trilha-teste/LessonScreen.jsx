import LessonProgress from './LessonProgress.jsx'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import mascotEncourage from '../../assets/illustrations/mascot-encourage.png'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { fetchLesson } from './api.js'
import { getMaxPoints } from './data.js'
import FillBlankExercise from './exercises/FillBlankExercise.jsx'
import MatchingExercise from './exercises/MatchingExercise.jsx'
import SetaExercise from './exercises/SetaExercise.jsx'
import TrueFalseExercise from './exercises/TrueFalseExercise.jsx'
import LessonSummary from './LessonSummary.jsx'
import { markLessonCompleted } from './progress.js'
import styles from './LessonScreen.module.css'

const EXERCISE_COMPONENTS = {
  seta: SetaExercise,
  'verdadeiro-falso': TrueFalseExercise,
  completar: FillBlankExercise,
  associacao: MatchingExercise,
}

function LessonScreen() {
  const { unitId, lessonId } = useParams()
  const { language } = useLanguage()

  return (
    <LessonContent
      key={`${lessonId}:${language}`}
      unitId={unitId}
      lessonId={lessonId}
      language={language}
    />
  )
}

function LessonContent({ unitId, lessonId, language }) {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const [result, setResult] = useState({ lesson: null, error: false })
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [results, setResults] = useState([])

  useEffect(() => {
    let cancelled = false

    fetchLesson(lessonId, language)
      .then((data) => {
        if (!cancelled) setResult({ lesson: data, error: false })
      })
      .catch(() => {
        if (!cancelled) setResult({ lesson: null, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [lessonId, language])

  const { lesson, error: loadError } = result
  const lessonFinished = Boolean(lesson) && exerciseIndex >= lesson.exercises.length

  useEffect(() => {
    if (lessonFinished) markLessonCompleted(lesson.id)
  }, [lessonFinished, lesson])

  if (loadError) {
    return <Navigate to={`/trilha/${unitId}`} replace />
  }

  if (!lesson) {
    return (
      <PageLayout>
        <section className={styles.lesson}>
          <div className="container">
            <p>{t.trilha.lesson.loading}</p>
          </div>
        </section>
      </PageLayout>
    )
  }

  function resetLesson() {
    setExerciseIndex(0)
    setResults([])
  }

  function handleComplete(partialResult) {
    const exercise = lesson.exercises[exerciseIndex]
    setResults((prev) => [
      ...prev,
      { ...partialResult, format: exercise.format, maxPoints: getMaxPoints(exercise) },
    ])
    setExerciseIndex((prev) => prev + 1)
  }

  if (lessonFinished) {
    return (
      <PageLayout>
        <LessonSummary
          lesson={lesson}
          results={results}
          onRetry={resetLesson}
          onBackToPanel={() => navigate(`/trilha/${unitId}`)}
        />
      </PageLayout>
    )
  }

  const exercise = lesson.exercises[exerciseIndex]
  const sessionScore = results.reduce((sum, result) => sum + result.points, 0)
  const ExerciseComponent = EXERCISE_COMPONENTS[exercise.format]

  return (
    <PageLayout>
      <section className={styles.lesson}>
        <div className="container">
          <div className={styles.statusBar}>
            <p className={styles.progress}>
              {t.trilha.lesson.progress(exerciseIndex + 1, lesson.exercises.length)}
            </p>
            <p className={styles.scoreBadge}>{t.trilha.lesson.points(sessionScore)}</p>
          </div>

          <LessonProgress completed={results.length} total={lesson.exercises.length} />

          {lesson.exercises.length >= 4 &&
            exerciseIndex === Math.ceil(lesson.exercises.length / 2) && (
              <aside className={styles.encouragement}>
                <img src={mascotEncourage} alt="" width="72" height="88" />
                <p>{t.trilha.lesson.encouragement}</p>
              </aside>
            )}

          <p className={styles.formatLabel}>{t.trilha.lesson.formats[exercise.format]}</p>

          <ExerciseComponent key={exercise.id} exercise={exercise} onComplete={handleComplete} />
        </div>
      </section>
    </PageLayout>
  )
}

export default LessonScreen
