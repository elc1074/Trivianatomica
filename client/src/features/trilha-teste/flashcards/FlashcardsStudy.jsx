import { useState } from 'react'
import PelvicLimbDiagram from '../PelvicLimbDiagram.jsx'
import { normalizeAnswer } from '../normalizeAnswer.js'
import { shuffle } from '../shuffle.js'
import { useLanguage } from '../../../i18n/useLanguage.js'
import styles from './FlashcardsScreen.module.css'

function putCardBackInDeck(deck, card) {
    if (deck.length === 0) {
        return [card]
    }

    const insertIndex = Math.floor(Math.random() * deck.length) + 1

    return [
        ...deck.slice(0, insertIndex),
        card,
        ...deck.slice(insertIndex),
    ]
}

function FlashcardsStudy({ cards, onBack }) {
    const { t } = useLanguage()
    const copy = t.flashcards.study
    const [deck, setDeck] = useState(() => shuffle(cards))
    const [answer, setAnswer] = useState('')
    const [revealed, setRevealed] = useState(false)
    const [feedback, setFeedback] = useState('')

    const currentCard = deck[0]

    if (!currentCard) {
        return (
            <section className={styles.completed}>
                <h1 className={styles.title}>{copy.completedTitle}</h1>
                <p className={styles.subtitle}>{copy.completedMessage}</p>
                <button type="button" className="button button-primary" onClick={onBack}>
                    {copy.backToSelection}
                </button>
            </section>
        )
    }

    function sendCurrentCardBack() {
        const [, ...remainingDeck] = deck

        setDeck(putCardBackInDeck(remainingDeck, currentCard))
        setAnswer('')
        setRevealed(false)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const isCorrect = normalizeAnswer(answer) === normalizeAnswer(currentCard.answer)

        if (!isCorrect) {
            setFeedback(copy.wrongFeedback(currentCard.answer))
            setRevealed(false)
            return
        }

        setDeck(deck.slice(1))
        setAnswer('')
        setRevealed(false)
        setFeedback('')
    }

    function handleRoll(){
        setRevealed(true)
        setFeedback('')
    }

    function handleContinue() {
        setFeedback('')
        sendCurrentCardBack()
    }

    return (
        <section className={styles.study}>
            <div className={styles.studyHeader}>
                <button type="button" className="button button-light" onClick={onBack}>
                    {copy.changeContents}
                </button>

                <p className={styles.counter}>{copy.remainingCards(deck.length)}</p>
            </div>

        <PelvicLimbDiagram
            markerX={currentCard.marker.xPercent}
            markerY={currentCard.marker.yPercent}
        />

        {!feedback && (
            <form className={styles.answerForm} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="flashcard-answer">
                    {copy.prompt}
                </label>

                <input
                    id="flashcard-answer"
                    className={styles.input}
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    autoComplete="off"
                    autoFocus
                />

                <div className={styles.formActions}>
                    <button type="button" className="button button-light" onClick={handleRoll}>
                        {copy.reveal}
                    </button>

                    <button type="submit" className="button button-primary">
                        {copy.answer}
                    </button>
                </div>
            </form>
        )}

        {feedback && (
            <div className={styles.feedback}>
                <p>{feedback}</p>
                <button type="button" className="button button-primary" onClick={handleContinue}>
                    {copy.continueLabel}
                </button>
            </div>
        )}

        {revealed && (
            <div className={styles.revealBox}>
                <p>{copy.revealedAnswer(currentCard.answer)}</p>
                <button type="button" className="button button-primary" onClick={handleContinue}>
                    {copy.continueLabel}
                </button>
            </div>
        )}
        </section>
    )
}

export default FlashcardsStudy
