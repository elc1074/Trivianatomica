import styles from './FlashcardsScreen.module.css'
import { useLanguage } from '../../../i18n/useLanguage.js'

function FlashcardsContentSelector({
    decks,
    selectedDeckIds,
    onDeckChange,
    onStart
}) {
    const { t } = useLanguage()
    const copy = t.flashcards

    function toggleDeck(deckId) {
        if (selectedDeckIds.includes(deckId)) {
            onDeckChange(selectedDeckIds.filter((id) => id !== deckId))
            return
        }

        onDeckChange([...selectedDeckIds, deckId])
    }

    const selectedCardsCount = decks
        .filter((deck) => selectedDeckIds.includes(deck.id))
        .reduce((count, deck) => count + deck.cards.length, 0)

    return (
        <section className={styles.selector}>
            <div className={styles.selectorHeader}>
                <h1 className={styles.title}>{copy.title}</h1>
                <p className={styles.subtitle}>
                    {copy.selection.subtitle(selectedCardsCount)}
                </p>
            </div>

            <div className={styles.deckList}>
                {decks.map((deck) => (
                    <label key={deck.id} className={styles.deckOption}>
                        <input
                            type="checkbox"
                            checked={selectedDeckIds.includes(deck.id)}
                            onChange={() => toggleDeck(deck.id)}
                        />

                        <span>
                            <strong>{deck.title}</strong>
                            <small>{copy.selection.cardsCount(deck.cards.length)}</small>
                        </span>
                    </label>
                ))}
            </div>

            <button
                type="button"
                className="button button-primary"
                disabled={selectedCardsCount === 0}
                onClick={onStart}
            >
                {copy.selection.start}
            </button>
        </section>
    )
}

export default FlashcardsContentSelector
