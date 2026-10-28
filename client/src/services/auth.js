const SESSION_KEY = 'trivia-anatomica-session'

export function getAccessToken() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY))?.accessToken ?? null
  } catch {
    return null
  }
}

export function getAuthHeaders() {
  const token = getAccessToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}
