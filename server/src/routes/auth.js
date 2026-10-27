import { Router } from 'express'
import { supabase, supabaseAuth } from '../lib/supabase.js'

const router = Router()

router.use((_req, res, next) => {
  if (!supabase || !supabaseAuth) return res.status(503).json({ error: 'Supabase is not configured on the server', code: 'service_unavailable' })
  next()
})

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body ?? {}

  if (![name, email, password].every((field) => typeof field === 'string' && field.trim())) {
    return res.status(400).json({ error: 'name, email and password are required', code: 'missing_fields' })
  }

  const { data: created, error: createError } = await supabase.auth.admin.createUser({
    email: email.trim(),
    password,
    email_confirm: true,
    user_metadata: { display_name: name.trim() },
  })

  if (createError) return res.status(400).json({ error: createError.message, code: createError.code })

  const { data: sessionData, error: signInError } = await supabaseAuth.auth.signInWithPassword({
    email: email.trim(),
    password,
  })

  if (signInError) return res.status(500).json({ error: signInError.message, code: signInError.code })
  res.status(201).json({ session: sessionData.session, user: created.user })
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body ?? {}

  if (![email, password].every((field) => typeof field === 'string' && field.trim())) {
    return res.status(400).json({ error: 'email and password are required', code: 'missing_fields' })
  }

  const { data, error } = await supabaseAuth.auth.signInWithPassword({
    email: email.trim(),
    password,
  })

  if (error) return res.status(401).json({ error: error.message, code: error.code })
  res.json({ session: data.session, user: data.user })
})

export default router
