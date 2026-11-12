import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth.js'
import LoadingState from '../components/LoadingState.jsx'

function readOAuthResponse() {
  const fragmentParams = new URLSearchParams(window.location.hash.slice(1))
  const queryParams = new URLSearchParams(window.location.search)

  return {
    accessToken: fragmentParams.get('access_token'),
    expiresAt: Number(fragmentParams.get('expires_at')) || null,
    providerError: fragmentParams.get('error_description') ?? queryParams.get('error_description'),
    redirect: queryParams.get('redirect') || '/painel',
  }
}

function AuthCallback() {
  const navigate = useNavigate()
  const { completeOAuthSignIn } = useAuth()
  const [oauthResponse] = useState(readOAuthResponse)

  useEffect(() => {
    const { accessToken, expiresAt, providerError, redirect } = oauthResponse
    const failurePath = `/entrar?oauth_error=1&redirect=${encodeURIComponent(redirect)}`

    if (!accessToken) {
      console.error(`[auth] oauth callback without access token: ${providerError ?? 'no error description'}`)
      navigate(failurePath, { replace: true })
      return
    }

    completeOAuthSignIn({ accessToken, expiresAt })
      .then(() => navigate(redirect, { replace: true }))
      .catch(() => navigate(failurePath, { replace: true }))
  }, [oauthResponse, completeOAuthSignIn, navigate])

  return <LoadingState />
}

export default AuthCallback
