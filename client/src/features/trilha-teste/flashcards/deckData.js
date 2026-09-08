import { getUnits } from '../data.js'
import { structureMarkers } from '../markerPositions.js'

function createCardFromSeta(exercise, unit) {
    const marker = structureMarkers[exercise.id]

    if (!marker) {
        console.warn(`No marker found for exercise id: ${exercise.id}`)
        return null
    }
    
    return {
        id: exercise.id,
        answer: exercise.name,
        marker,
        unitId: unit.id,
        unitTitle: unit.title,
    }
}

export function getFlashcardDecks(language) {
    return getUnits(language)
        .map((unit) => {
            const cards = unit.exercises
            .filter((exercise) => exercise.format === 'seta')
            .map((exercise) => createCardFromSeta(exercise, unit))
            .filter(Boolean)

            return {
                id: unit.id,
                title: unit.title,
                cards,
            }
        })
    .filter((deck) => deck.cards.length > 0)
}
