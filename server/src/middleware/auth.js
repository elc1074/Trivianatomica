import { supabase } from '../lib/supabase.js'

export async function requireAuth(req, res, next) {
  const authorization = req.headers.authorization ?? ''
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : null

  if (!token || !supabase) {
    return res.status(401).json({ error: 'authentication required', code: 'missing_token' })
  }

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return res.status(401).json({ error: 'invalid session', code: 'invalid_session' })
  }

  req.user = data.user
  next()
}
