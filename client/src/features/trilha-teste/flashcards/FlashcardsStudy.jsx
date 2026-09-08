import { useState } from 'react'
import PelvicLimbDiagram from '../PelvicLimbDiagram.jsx'
import { normalizeAnswer } from '../normalizeAnswer.js'
import { shuffle } from '../shuffle.js'
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
    const [deck, setDeck] = useState(() => shuffle(cards))
    const [answer, setAnswer] = useState('')
    const [revealed, setRevealed] = useState(false)
    const [feedback, setFeedback] = useState('')

    const currentCard = deck[0]

    if (!currentCard) {
        return (
            <section className={styles.completed}>
                <h1 className={styles.title}>¡Felicidades!</h1>
                <p className={styles.subtitle}>Has completado todas las tarjetas.</p>
                <button type="button" className="button button-primary" onClick={onBack}>
                    Volver a la selección
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
            setFeedback(`Incorrecto. La respuesta correcta es: ${currentCard.answer}`)
            sendCurrentCardBack()
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
                    Cambiar contenidos
                </button>
        
                <p className={styles.counter}>{deck.length} tarjetas restantes</p>
            </div>

        <PelvicLimbDiagram 
            markerX={currentCard.marker.xPercent}
            markerY={currentCard.marker.yPercent}
        />

        <form className={styles.answerForm} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="flashcard-answer">
                ¿Qué es esto?
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
                    Ver tarjeta
                </button>

                <button type="submit" className="button button-primary">
                    Responder
                </button>
            </div>
        </form>

        {feedback && <p className={styles.feedback}>{feedback}</p>}

        {revealed && (
            <div className={styles.revealBox}>
                <p>Respuesta: {currentCard.answer}</p>
                <button type="button" className="button button-primary" onClick={handleContinue}>
                    Continuar
                </button>
            </div>
        )}
        </section>
    )
}

export default FlashcardsStudy
