import styles from './FlashcardsScreen.module.css'

function FlashcardsContentSelector({ 
    decks,
    selectedDeckIds,
    onDeckChange,
    onStart
}) {
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
                <h1 className={styles.title}>Flashcards</h1>
                <p className={styles.subtitle}>
                    Seleciona lo que quieras estudiar: {selectedCardsCount} seleccionadas
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
                            <small>{deck.cards.length} tarjetas</small>
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
                Comenzar a estudiar
            </button>
        </section>
    )
}
        
export default FlashcardsContentSelector
