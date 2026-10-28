import { getAuthHeaders } from '../../services/auth.js'

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '')

async function request(path, { method = 'GET', body } = {}) {
  const headers = { ...getAuthHeaders(), ...(body ? { 'Content-Type': 'application/json' } : {}) }
  let response

  try {
    response = await fetch(`${API_URL}${path}`, { method, headers, body: body ? JSON.stringify(body) : undefined })
  } catch (networkError) {
    console.error(`[api] ${method} ${path} failed without a response, is the server running at ${API_URL}? (${networkError.message})`)
    throw new Error('network_error', { cause: networkError })
  }

  const payload = await response.json().catch(() => ({}))

  if (response.status === 401) {
    window.dispatchEvent(new Event('trivia-auth-expired'))
  }

  if (!response.ok) {
    const code = payload.code ?? `http_${response.status}`
    console.error(`[api] ${method} ${path} -> ${response.status} ${code}: ${payload.error ?? 'no error message'}`)
    throw new Error(code)
  }

  return payload
}

export function fetchUnits(language) {
  return request(`/api/units?lang=${language}`)
}

export function fetchUnitLessons(unitId, language) {
  return request(`/api/units/${unitId}/lessons?lang=${language}`)
}

export function fetchLesson(lessonId, language) {
  return request(`/api/lessons/${lessonId}?lang=${language}`)
}

export function fetchFlashcardDecks(language) {
  return request(`/api/flashcard-decks?lang=${language}`)
}

export function completeLesson(lessonId, lessonResult) {
  return request(`/api/progress/lessons/${lessonId}/complete`, { method: 'POST', body: lessonResult })
}

export function fetchProgressSummary() {
  return request('/api/progress/summary')
}

export function fetchProgressHistory() {
  return request('/api/progress/history')
}

export function fetchLessonHistory(language) {
  return request(`/api/progress/lessons?lang=${language}`)
}

export function fetchLessonDetail(lessonId, language) {
  return request(`/api/progress/lessons/${lessonId}?lang=${language}`)
}

export function fetchReviewExercises(language) {
  return request(`/api/progress/review?lang=${language}`)
}

export function saveReviewAttempt(reviewAttempt) {
  return request('/api/progress/review/attempt', { method: 'POST', body: reviewAttempt })
}
