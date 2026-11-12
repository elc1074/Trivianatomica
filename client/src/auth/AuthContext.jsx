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

function buildSession(accessToken, expiresAt, user) {
  const metadata = user.user_metadata ?? {}
  return {
    accessToken,
    expiresAt,
    email: user.email,
    name: metadata.display_name || metadata.full_name || metadata.name || user.email.split('@')[0],
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

  const storeSession = useCallback((nextSession) => {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession))
    setSession(nextSession)
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

    storeSession(buildSession(data.session.access_token, data.session.expires_at, data.user))
  }, [storeSession])

  const completeOAuthSignIn = useCallback(async ({ accessToken, expiresAt }) => {
    let response

    try {
      response = await fetch(`${API_URL}/api/auth/me`, { headers: { Authorization: `Bearer ${accessToken}` } })
    } catch (networkError) {
      console.error(`[auth] GET /api/auth/me failed without a response, is the server running at ${API_URL}? (${networkError.message})`)
      throw new Error('network_error', { cause: networkError })
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok || !data.user) {
      const code = data.code ?? `http_${response.status}`
      console.error(`[auth] GET /api/auth/me -> ${response.status} ${code}: ${data.error ?? 'no user returned'}`)
      throw new Error(code)
    }

    storeSession(buildSession(accessToken, expiresAt, data.user))
  }, [storeSession])

  const getOAuthUrl = useCallback((providerName, redirect) => {
    const callbackUrl = `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirect)}`
    return `${API_URL}/api/auth/oauth/${providerName}?redirect_to=${encodeURIComponent(callbackUrl)}`
  }, [])

  const signIn = useCallback(({ email, password }) => authenticate('signin', { email, password }), [authenticate])
  const signUp = useCallback(({ name, email, password }) => authenticate('signup', { name, email, password }), [authenticate])
  const signOut = useCallback(() => {
    window.localStorage.removeItem(SESSION_KEY)
    setSession(null)
  }, [])

  const value = useMemo(
    () => ({ session, isAuthenticated: Boolean(session), signIn, signUp, signOut, getOAuthUrl, completeOAuthSignIn }),
    [session, signIn, signUp, signOut, getOAuthUrl, completeOAuthSignIn],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
