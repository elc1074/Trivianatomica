import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth.js'

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    const redirect = `${location.pathname}${location.search}`
    return <Navigate to={`/entrar?redirect=${encodeURIComponent(redirect)}`} replace />
  }

  return children
}

export default ProtectedRoute
