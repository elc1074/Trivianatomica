import { useMemo, useState } from 'react';
import PageLayout from '../../../components/PageLayout.jsx';
import { useLanguage } from '../../../i18n/useLanguage.js';
import FlashcardsContentSelector from './FlashcardsContentSelector.jsx';
import FlashcardsStudy from './FlashcardsStudy.jsx';
import { getFlashcardDecks } from './deckData.js';
import kiba from '../../../assets/illustrations/kiba-png.png'
import castiel from '../../../assets/illustrations/castiel.png'
import styles from './FlashcardsScreen.module.css'

function FlashcardsScreen() {
    const { language, t } = useLanguage()

    const decks = useMemo(() => getFlashcardDecks(language), [language])

    const [selectedDeckIds, setSelectedDeckIds] = useState([])
    const [started, setStarted] = useState(false)

    const selectedCards = decks
        .filter((deck) => selectedDeckIds.includes(deck.id))
        .flatMap((deck) => deck.cards)

    function handleStart() {
        if (selectedCards.length === 0) {
            alert(t.flashcards.selection.emptySelection)
            return
        }

    setStarted(true)
    }

    function handleBackToSelection() {
        setStarted(false)
    }

    return (
        <PageLayout>
            <section className={styles.flashcardsScreen}>
                <img
                    src={kiba}
                    alt=""
                    className={`${styles.character} ${styles.kiba}`}
                />

                <img
                    src={castiel}
                    alt=""
                    className={`${styles.character} ${styles.castiel}`}
                />


                <div className={`container ${styles.flashcardsContent}`}>
                    {!started ? (
                        <FlashcardsContentSelector
                            decks={decks}
                            selectedDeckIds={selectedDeckIds}
                            onDeckChange={setSelectedDeckIds}
                            onStart={handleStart}
                        />
                    ) : (
                        <FlashcardsStudy
                            key={language}
                            cards={selectedCards}
                            onBack={handleBackToSelection}
                        />
                    )}
                </div>
            </section>
        </PageLayout>
    )
}

export default FlashcardsScreen
