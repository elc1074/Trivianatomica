import { fetchFlashcardDecks } from '../api.js'
import { structureMarkers } from '../markerPositions.js'

function createCardFromSeta(exercise) {
    const marker = structureMarkers[exercise.diagram]?.[exercise.id]

    if (!marker) {
        console.warn(`No marker found for exercise id: ${exercise.id}`)
        return null
    }
    return {
        id: exercise.id,
        answer: exercise.name,
        marker,
        diagram: exercise.diagram,
    }
}

export async function getFlashcardDecks(language) {
    const decks = await fetchFlashcardDecks(language)

    return decks
        .map((deck) => ({
            ...deck,
            cards: deck.cards.map((exercise) => createCardFromSeta(exercise)).filter(Boolean),
        }))
        .filter((deck) => deck.cards.length > 0)
}
