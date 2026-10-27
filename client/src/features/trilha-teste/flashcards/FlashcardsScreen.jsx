import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout.jsx';
import { useLanguage } from '../../../i18n/useLanguage.js';
import FlashcardsContentSelector, { FlashcardsSelectorSkeleton } from './FlashcardsContentSelector.jsx';
import FlashcardsStudy from './FlashcardsStudy.jsx';
import { getFlashcardDecks } from './deckData.js';
import flashcardsMascot from '../../../assets/illustrations/mascots-flashcards-header.png'
import styles from './FlashcardsScreen.module.css'

function FlashcardsScreen() {
    const { language, t } = useLanguage()

    const [deckRequest, setDeckRequest] = useState({ language: null, decks: [], error: false })
    const [reloadIndex, setReloadIndex] = useState(0)

    useEffect(() => {
        let cancelled = false

        getFlashcardDecks(language)
            .then((data) => {
                if (!cancelled) setDeckRequest({ language, decks: data, error: false })
            })
            .catch(() => {
                if (!cancelled) setDeckRequest({ language, decks: [], error: true })
            })

        return () => {
            cancelled = true
        }
    }, [language, reloadIndex])

    const loading = deckRequest.language !== language
    const loadError = !loading && deckRequest.error
    const decks = loading ? [] : deckRequest.decks

    // ?deck=<unitId> chega do resumo da lição e já deixa o baralho daquela unidade marcado.
    const [searchParams] = useSearchParams()
    const [selectedDeckIds, setSelectedDeckIds] = useState(() => {
        const deckId = searchParams.get('deck')
        return deckId ? [deckId] : []
    })
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
                <div className={`container ${styles.flashcardsContent}`}>
                    {!started && (
                        <div className={styles.selectorHeader}>
                            <img
                                className={styles.selectorMascot}
                                src={flashcardsMascot}
                                alt=""
                                width="160"
                                height="160"
                            />

                            <div>
                                <h1 className={styles.title}>{t.flashcards.title}</h1>
                                <p className={styles.subtitle}>
                                    {t.flashcards.selection.subtitle(selectedCards.length)}
                                </p>
                            </div>
                        </div>
                    )}

                    {loading ? (
                        <FlashcardsSelectorSkeleton count={4} label={t.flashcards.loading} />
                    ) : loadError ? (
                        <div className={styles.flashcardsStatus}>
                            <p>{t.flashcards.loadError}</p>
                            <button
                                type="button"
                                className="button button-primary"
                                onClick={() => setReloadIndex((currentIndex) => currentIndex + 1)}
                            >
                                {t.flashcards.retry}
                            </button>
                        </div>
                    ) : !started && decks.length === 0 ? (
                        <div className={styles.flashcardsStatus}>
                            <p>{t.flashcards.emptyDecks}</p>
                        </div>
                    ) : !started ? (
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
