import { useMemo, useState } from 'react'
import Icon from '../../../components/Icon.jsx'
import { useLanguage } from '../../../i18n/useLanguage.js'
import { shuffle } from '../shuffle.js'
import CustomSelect from './CustomSelect.jsx'
import styles from './MatchingExercise.module.css'

function MatchingExercise({ exercise, onComplete }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.associacao

  const [selections, setSelections] = useState({})
  const [checked, setChecked] = useState(false)

  const shuffledDescriptions = useMemo(
    () => shuffle(exercise.pairs.map((pair) => pair.description)),
    [exercise],
  )

  const allSelected = exercise.pairs.every((pair) => selections[pair.term])

  function handleSelect(term, description) {
    setSelections((prev) => ({ ...prev, [term]: description }))
  }

  function handleCheck() {
    setChecked(true)
  }

  function handleContinue() {
    const correctCount = exercise.pairs.filter(
      (pair) => selections[pair.term] === pair.description,
    ).length

    onComplete({
      exerciseId: exercise.id,
      label: copy.resultLabel(correctCount, exercise.pairs.length),
      points: correctCount * 10,
      correct: correctCount === exercise.pairs.length,
    })
  }

  return (
    <div className={styles.card}>
      <ul className={styles.pairList}>
        {exercise.pairs.map((pair) => {
          const selected = selections[pair.term]
          const isRowCorrect = checked && selected === pair.description

          return (
            <li key={pair.term} className={styles.pairRow}>
              <span className={styles.term}>{pair.term}</span>
              <CustomSelect
                value={selected ?? null}
                options={shuffledDescriptions}
                placeholder={copy.placeholder}
                onChange={(description) => handleSelect(pair.term, description)}
                disabled={checked}
                status={checked ? (isRowCorrect ? 'correct' : 'wrong') : null}
              />
            </li>
          )
        })}
      </ul>

      {!checked ? (
        <button
          type="button"
          className="button button-primary"
          onClick={handleCheck}
          disabled={!allSelected}
        >
          {copy.check}
          <Icon name="arrow_forward" size={20} color="currentColor" />
        </button>
      ) : (
        <button type="button" className="button button-primary" onClick={handleContinue}>
          {copy.continueLabel}
          <Icon name="arrow_forward" size={20} color="currentColor" />
        </button>
      )}
    </div>
  )
}

export default MatchingExercise
