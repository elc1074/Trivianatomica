import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './authContext.js'

const SESSION_KEY = 'trivia-anatomica-session'
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '')

function readSession() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(SESSION_KEY))
    if (stored?.expiresAt && stored.expiresAt * 1000 <= Date.now()) {
      window.localStorage.removeItem(SESSION_KEY)
      return null
    }
    return stored?.accessToken ? stored : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession)

  useEffect(() => {
    function handleAuthExpired() {
      window.localStorage.removeItem(SESSION_KEY)
      setSession(null)
    }

    window.addEventListener('trivia-auth-expired', handleAuthExpired)
    return () => window.removeEventListener('trivia-auth-expired', handleAuthExpired)
  }, [])

  const authenticate = useCallback(async (path, credentials) => {
    let response

    try {
      response = await fetch(`${API_URL}/api/auth/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
    } catch (networkError) {
      console.error(`[auth] POST /api/auth/${path} failed without a response, is the server running at ${API_URL}? (${networkError.message})`)
      throw new Error('network_error', { cause: networkError })
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok || !data.session) {
      const code = data.code ?? `http_${response.status}`
      console.error(`[auth] POST /api/auth/${path} -> ${response.status} ${code}: ${data.error ?? 'no session returned'}`)
      throw new Error(code)
    }

    const nextSession = {
      accessToken: data.session.access_token,
      expiresAt: data.session.expires_at,
      email: data.user.email,
      name: data.user.user_metadata?.display_name || data.user.email.split('@')[0],
    }
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession))
    setSession(nextSession)
  }, [])

  const signIn = useCallback(({ email, password }) => authenticate('signin', { email, password }), [authenticate])
  const signUp = useCallback(({ name, email, password }) => authenticate('signup', { name, email, password }), [authenticate])
  const signOut = useCallback(() => {
    window.localStorage.removeItem(SESSION_KEY)
    setSession(null)
  }, [])

  const value = useMemo(
    () => ({ session, isAuthenticated: Boolean(session), signIn, signUp, signOut }),
    [session, signIn, signUp, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
