import { fetchFlashcardDecks } from '../api.js'
import { structureMarkers } from '../markerPositions.js'

function createCardFromSeta(exercise, index) {
    const structureId = exercise.structureId ?? exercise.exerciseId ?? exercise.id
    const answer = exercise.answer ?? exercise.name
    const marker = structureMarkers[exercise.diagram]?.[structureId]

    if (!marker) {
        console.warn(`No marker found for flashcard structure id: ${structureId}`)
        return null
    }

    if (!answer) {
        console.warn(`No answer found for flashcard structure id: ${structureId}`)
        return null
    }

    return {
        id: exercise.id ?? `${exercise.lessonId ?? exercise.diagram}:${structureId}:${index}`,
        exerciseId: exercise.exerciseId ?? structureId,
        structureId,
        answer,
        marker,
        diagram: exercise.diagram,
    }
}

export async function getFlashcardDecks(language) {
    const decks = await fetchFlashcardDecks(language)

    return decks
        .map((deck) => ({
            ...deck,
            cards: deck.cards.map((exercise, index) => createCardFromSeta(exercise, index)).filter(Boolean),
        }))
        .filter((deck) => deck.cards.length > 0)
}
