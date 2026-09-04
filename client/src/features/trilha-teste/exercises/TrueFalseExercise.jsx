import { useState } from 'react'
import { useLanguage } from '../../../i18n/useLanguage.js'
import FeedbackBanner from '../FeedbackBanner.jsx'
import styles from './TrueFalseExercise.module.css'

function TrueFalseExercise({ exercise, onComplete }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.verdadeiroFalso

  const [feedback, setFeedback] = useState(null)

  function handleAnswer(value) {
    const isCorrect = value === exercise.answer
    setFeedback({ correct: isCorrect, points: isCorrect ? 10 : 0 })
  }

  function handleContinue() {
    onComplete({
      exerciseId: exercise.id,
      label: exercise.statement,
      points: feedback.points,
      correct: feedback.correct,
    })
  }

  if (feedback) {
    return (
      <FeedbackBanner
        correct={feedback.correct}
        message={
          feedback.correct
            ? copy.correctFeedback(feedback.points)
            : copy.wrongFeedback(exercise.answer)
        }
        onContinue={handleContinue}
      />
    )
  }

  return (
    <div className={styles.card}>
      <p className={styles.statement}>{exercise.statement}</p>
      <div className={styles.actions}>
        <button
          type="button"
          className="button button-light"
          onClick={() => handleAnswer(false)}
        >
          {copy.false}
        </button>
        <button
          type="button"
          className="button button-primary"
          onClick={() => handleAnswer(true)}
        >
          {copy.true}
        </button>
      </div>
    </div>
  )
}

export default TrueFalseExercise
