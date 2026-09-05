import LessonProgress from './LessonProgress.jsx'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import mascotEncourage from '../../assets/illustrations/mascot-encourage.png'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { getMaxPoints, getUnitById } from './data.js'
import FillBlankExercise from './exercises/FillBlankExercise.jsx'
import MatchingExercise from './exercises/MatchingExercise.jsx'
import SetaExercise from './exercises/SetaExercise.jsx'
import TrueFalseExercise from './exercises/TrueFalseExercise.jsx'
import LessonSummary from './LessonSummary.jsx'
import styles from './LessonScreen.module.css'

const EXERCISE_COMPONENTS = {
  seta: SetaExercise,
  'verdadeiro-falso': TrueFalseExercise,
  completar: FillBlankExercise,
  associacao: MatchingExercise,
}

function LessonScreen() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const unit = getUnitById(unitId, language)

  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [results, setResults] = useState([])

  if (!unit) {
    return <Navigate to="/trilha" replace />
  }

  function resetLesson() {
    setExerciseIndex(0)
    setResults([])
  }

  function handleComplete(partialResult) {
    const exercise = unit.exercises[exerciseIndex]
    setResults((prev) => [
      ...prev,
      { ...partialResult, format: exercise.format, maxPoints: getMaxPoints(exercise) },
    ])
    setExerciseIndex((prev) => prev + 1)
  }

  if (exerciseIndex >= unit.exercises.length) {
    return (
      <PageLayout>
        <LessonSummary
          unit={unit}
          results={results}
          onRetry={resetLesson}
          onBackToPanel={() => navigate('/trilha')}
        />
      </PageLayout>
    )
  }

  const exercise = unit.exercises[exerciseIndex]
  const sessionScore = results.reduce((sum, result) => sum + result.points, 0)
  const ExerciseComponent = EXERCISE_COMPONENTS[exercise.format]

  return (
    <PageLayout>
      <section className={styles.lesson}>
        <div className="container">
          <div className={styles.statusBar}>
            <p className={styles.progress}>
              {t.trilha.lesson.progress(exerciseIndex + 1, unit.exercises.length)}
            </p>
            <p className={styles.scoreBadge}>{t.trilha.lesson.points(sessionScore)}</p>
          </div>

          <LessonProgress completed={results.length} total={unit.exercises.length} />

          {unit.exercises.length >= 4 && exerciseIndex === Math.ceil(unit.exercises.length / 2) && (
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
