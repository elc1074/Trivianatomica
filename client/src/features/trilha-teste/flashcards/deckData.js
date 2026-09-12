import { fetchLesson, fetchUnitLessons, fetchUnits } from '../api.js'
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
    const units = await fetchUnits(language)

    const decks = await Promise.all(
        units.map(async (unit) => {
            const unitWithLessons = await fetchUnitLessons(unit.id, language)
            const fullLessons = await Promise.all(
                unitWithLessons.lessons.map((lesson) => fetchLesson(lesson.id, language)),
            )

            const cards = fullLessons
                .flatMap((lesson) => lesson.exercises)
                .filter((exercise) => exercise.format === 'seta')
                .map((exercise) => createCardFromSeta(exercise))
                .filter(Boolean)

            return {
                id: unit.id,
                title: unitWithLessons.title,
                cards,
            }
        }),
    )

    return decks.filter((deck) => deck.cards.length > 0)
}
