import SkeletonBlock from '../../../components/SkeletonBlock.jsx'
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

export function FlashcardsSelectorSkeleton({ count, label }) {
    return (
        <section className={styles.selector} aria-label={label} aria-busy="true">
            <div className={styles.deckList}>
                {Array.from({ length: count }, (_, index) => (
                    <div key={index} className={styles.deckOption}>
                        <SkeletonBlock width={20} height={20} radius={4} />
                        <span>
                            <SkeletonBlock width={220} height={18} />
                            <SkeletonBlock width={90} height={14} />
                        </span>
                    </div>
                ))}
            </div>
            <SkeletonBlock className={styles.startSkeleton} width={200} height={48} radius={999} />
        </section>
    )
}

export default FlashcardsContentSelector
