import { useState } from 'react'
import AnatomyDiagram from '../AnatomyDiagram.jsx'
import LessonProgress from '../LessonProgress.jsx'
import Icon from '../../../components/Icon.jsx'
import mascotCelebrate from '../../../assets/illustrations/kiba-castiel-celebrate.png'
import { normalizeAnswer } from '../normalizeAnswer.js'
import { shuffle } from '../shuffle.js'
import { useLanguage } from '../../../i18n/useLanguage.js'
import summaryStyles from '../LessonSummary.module.css'
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
    const [totalCards] = useState(cards.length)
    const [answer, setAnswer] = useState('')
    const [revealed, setRevealed] = useState(false)
    const [feedback, setFeedback] = useState('')

    const currentCard = deck[0]
    const completedCards = totalCards - deck.length

    function handleRetry() {
        setDeck(shuffle(cards))
        setAnswer('')
        setRevealed(false)
        setFeedback('')
    }

    if (!currentCard) {
        return (
            <section className={summaryStyles.summary}>
                <div className={summaryStyles.card}>
                    <img
                        className={`${summaryStyles.mascot} ${styles.celebrateMascot}`}
                        src={mascotCelebrate}
                        alt=""
                        width="240"
                        height="150"
                    />
                    <h1 className={summaryStyles.title}>{copy.completedTitle}</h1>
                    <p className={summaryStyles.unitName}>{copy.completedMessage}</p>

                    <LessonProgress completed={totalCards} total={totalCards} />

                    <div className={styles.completedScore}>
                        {totalCards}{' '}
                        <span className={summaryStyles.scoreMax}>
                            / {totalCards} {copy.scoreSuffix}
                        </span>
                    </div>

                    <p className={summaryStyles.perfect}>{copy.perfect}</p>

                    <div className={summaryStyles.actions}>
                        <button type="button" className="button button-light" onClick={handleRetry}>
                            {copy.retry}
                        </button>
                        <button type="button" className="button button-primary" onClick={onBack}>
                            {copy.backToSelection}
                            <Icon name="arrow_forward" size={20} color="currentColor" />
                        </button>
                    </div>
                </div>
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

            <div className={styles.progressBar}>
                <LessonProgress completed={completedCards} total={totalCards} />
            </div>

        <AnatomyDiagram
            diagram={currentCard.diagram}
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
