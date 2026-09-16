import { useMemo, useState } from 'react'
import Icon from '../../../components/Icon.jsx'
import { useLanguage } from '../../../i18n/useLanguage.js'
import AnatomyDiagram from '../AnatomyDiagram.jsx'
import FeedbackBanner from '../FeedbackBanner.jsx'
import { structureMarkers } from '../markerPositions.js'
import { normalizeAnswer } from '../normalizeAnswer.js'
import { shuffle } from '../shuffle.js'
import styles from './SetaExercise.module.css'

function SetaExercise({ exercise, onComplete }) {
  const { t } = useLanguage()
  const exerciseCopy = t.trilha.exercises
  const copy = exerciseCopy.seta

  const [stage, setStage] = useState('free-text')
  const [inputValue, setInputValue] = useState('')
  const [feedback, setFeedback] = useState(null)

  const marker = structureMarkers[exercise.diagram]?.[exercise.id]
  const choices = useMemo(
    () => shuffle([exercise.name, ...exercise.distractors]),
    [exercise],
  )

  function handleMissingMarker() {
    onComplete({
      exerciseId: exercise.id,
      label: exercise.name,
      points: 0,
      correct: false,
    })
  }

  function handleSubmitFreeText(event) {
    event.preventDefault()

    if (normalizeAnswer(inputValue) === normalizeAnswer(exercise.name)) {
      setFeedback({ correct: true, points: 20 })
      setStage('feedback')
      return
    }

    setStage('multiple-choice')
  }

  function handleSkip() {
    setStage('multiple-choice')
  }

  function handleChoiceClick(choice) {
    const isCorrect = choice === exercise.name
    setFeedback({ correct: isCorrect, points: isCorrect ? 10 : 0 })
    setStage('feedback')
  }

  function handleContinue() {
    onComplete({
      exerciseId: exercise.id,
      label: exercise.name,
      points: feedback.points,
      correct: feedback.correct,
    })
  }

  if (!marker) {
    return (
      <FeedbackBanner
        correct={false}
        message={copy.markerMissing}
        continueLabel={exerciseCopy.continueLabel}
        onContinue={handleMissingMarker}
      />
    )
  }

  return (
    <div>
      <AnatomyDiagram diagram={exercise.diagram} markerX={marker.xPercent} markerY={marker.yPercent} />

      {stage === 'free-text' && (
        <form className={styles.answerForm} onSubmit={handleSubmitFreeText}>
          <label htmlFor="seta-answer" className={styles.label}>
            {copy.inputLabel}
          </label>
          <input
            id="seta-answer"
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            autoComplete="off"
            autoFocus
          />
          <div className={styles.formActions}>
            <button type="button" className="button button-light" onClick={handleSkip}>
              {copy.skip}
            </button>
            <button type="submit" className="button button-primary">
              {copy.answer}
              <Icon name="arrow_forward" size={20} color="currentColor" />
            </button>
          </div>
        </form>
      )}

      {stage === 'multiple-choice' && (
        <div className={styles.choices}>
          <p className={styles.label}>{copy.chooseCorrect}</p>
          <div className={styles.choiceGrid}>
            {choices.map((choice) => (
              <button
                key={choice}
                type="button"
                className={styles.choiceButton}
                onClick={() => handleChoiceClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === 'feedback' && feedback && (
        <FeedbackBanner
          correct={feedback.correct}
          message={
            feedback.correct
              ? copy.correctFeedback(feedback.points)
              : copy.wrongFeedback(exercise.name)
          }
          continueLabel={exerciseCopy.continueLabel}
          onContinue={handleContinue}
        />
      )}
    </div>
  )
}

export default SetaExercise
