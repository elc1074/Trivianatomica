const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export async function fetchUnits(language) {
  const response = await fetch(`${API_URL}/api/units?lang=${language}`)

  if (!response.ok) {
    throw new Error('Failed to load units')
  }

  return response.json()
}

export async function fetchUnitLessons(unitId, language) {
  const response = await fetch(`${API_URL}/api/units/${unitId}/lessons?lang=${language}`)

  if (!response.ok) {
    throw new Error('Failed to load unit lessons')
  }

  return response.json()
}

export async function fetchLesson(lessonId, language) {
  const response = await fetch(`${API_URL}/api/lessons/${lessonId}?lang=${language}`)

  if (!response.ok) {
    throw new Error('Failed to load lesson')
  }

  return response.json()
}

export async function fetchFlashcardDecks(language) {
  const response = await fetch(`${API_URL}/api/flashcard-decks?lang=${language}`)

  if (!response.ok) {
    throw new Error('Failed to load flashcard decks')
  }

  return response.json()
}
