import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/illustrations/logo.png'
import mascot from '../assets/illustrations/mascot-welcome.png'
import Icon from '../components/Icon.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { useAuth } from '../auth/useAuth.js'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './AuthPage.module.css'

function AuthPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, signIn, signUp } = useAuth()
  const { t } = useLanguage()
  const copy = t.auth
  const params = new URLSearchParams(location.search)
  const isSignUp = location.pathname === '/cadastro' || params.get('mode') === 'signup'
  const redirect = params.get('redirect') || '/painel'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate(redirect, { replace: true })
  }, [isAuthenticated, navigate, redirect])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (isSignUp && !name.trim()) {
      setError(copy.validationName)
      return
    }

    if (!email.trim() || !password.trim()) {
      setError(copy.validationFields)
      return
    }

    setSubmitting(true)
    try {
      if (isSignUp) await signUp({ name: name.trim(), email: email.trim(), password })
      else await signIn({ email: email.trim(), password })
    } catch (submitError) {
      setError(copy.errors[submitError.message] ?? copy.errors.generic)
    } finally {
      setSubmitting(false)
    }
  }

  function switchMode() {
    const mode = isSignUp ? 'entrar' : 'cadastro'
    navigate(`/${mode}?redirect=${encodeURIComponent(redirect)}`)
  }

  return (
    <main className={styles.page}>
      <div className={styles.backgroundShape} aria-hidden="true" />
      <div className={styles.languageCorner}>
        <LanguageSwitcher />
      </div>
      <section className={styles.shell} aria-labelledby="auth-title">
        <Link className={styles.brand} to="/" aria-label={t.chrome.brand}>
          <img className={styles.brandMark} src={logo} alt="" />
          <span>{t.chrome.brand}</span>
        </Link>

        <div className={styles.card}>
          <img className={styles.mascot} src={mascot} alt="" />
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{isSignUp ? copy.signUpEyebrow : copy.signInEyebrow}</p>
            <h1 id="auth-title">{isSignUp ? copy.signUpTitle : copy.signInTitle}</h1>
            <p>{isSignUp ? copy.signUpDescription : copy.signInDescription}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {isSignUp && (
              <label>
                {copy.name}
                <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
              </label>
            )}
            <label>
              {copy.email}
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
            </label>
            <label>
                {copy.password}
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={isSignUp ? 'new-password' : 'current-password'} />
            </label>

            {error && <p className={styles.error} role="alert">{error}</p>}

            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? copy.loading : isSignUp ? copy.createAccount : copy.signIn}
              <Icon name="arrow_forward" size={20} color="currentColor" />
            </button>
          </form>

          <p className={styles.switchPrompt}>
            <>{isSignUp ? copy.alreadyHaveAccount : copy.noAccount}{' '}<button type="button" onClick={switchMode}>{isSignUp ? copy.enter : copy.create}</button></>
          </p>
          <p className={styles.legal}>{copy.legal}</p>
        </div>
      </section>
    </main>
  )
}

export default AuthPage
