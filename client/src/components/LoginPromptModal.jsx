import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import googleLogo from '../assets/brands/google.svg'
import mascot from '../assets/illustrations/mascot-welcome.png'
import { useAuth } from '../auth/useAuth.js'
import { useLanguage } from '../i18n/useLanguage.js'
import styles from './LoginPromptModal.module.css'

function LoginPromptModal({ open, message, redirect, onClose }) {
  const dialogRef = useRef(null)
  const { getOAuthUrl } = useAuth()
  const { t } = useLanguage()
  const copy = t.loginPrompt

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="login-prompt-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <img className={styles.mascot} src={mascot} alt="" />
        <h2 id="login-prompt-title" className={styles.title}>{copy.title}</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <a className={`button button-light ${styles.googleButton}`} href={getOAuthUrl('google', redirect)}>
            <img src={googleLogo} alt="" />
            {t.auth.continueWithGoogle}
          </a>
          <Link className="button button-primary" to={`/entrar?redirect=${encodeURIComponent(redirect)}`}>
            {copy.signInWithEmail}
          </Link>
        </div>

        <button type="button" className={styles.dismiss} onClick={onClose}>
          {copy.dismiss}
        </button>
      </div>
    </dialog>
  )
}

export default LoginPromptModal
