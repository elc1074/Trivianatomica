import { useState } from 'react'
import Icon from '../../../components/Icon.jsx'
import { useLanguage } from '../../../i18n/useLanguage.js'
import FeedbackBanner from '../FeedbackBanner.jsx'
import { normalizeAnswer } from '../normalizeAnswer.js'
import styles from './FillBlankExercise.module.css'

function FillBlankExercise({ exercise, onComplete }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.completar

  const [inputValue, setInputValue] = useState('')
  const [feedback, setFeedback] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const isCorrect = normalizeAnswer(inputValue) === normalizeAnswer(exercise.answer)
    setFeedback({ correct: isCorrect, points: isCorrect ? 15 : 0 })
  }

  function handleContinue() {
    onComplete({
      exerciseId: exercise.id,
      label: exercise.sentence,
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.sentence}>{exercise.sentence}</p>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        autoComplete="off"
        autoFocus
      />
      <button type="submit" className="button button-primary">
        {copy.answer}
        <Icon name="arrow_forward" size={20} color="currentColor" />
      </button>
    </form>
  )
}

export default FillBlankExercise
