import Icon from '../../components/Icon.jsx'
import styles from './FeedbackBanner.module.css'

function FeedbackBanner({ correct, message, continueLabel, onContinue }) {
  return (
    <div
      className={`${styles.feedback} ${correct ? styles.feedbackCorrect : styles.feedbackWrong}`}
    >
      <Icon name={correct ? 'check_circle' : 'cancel'} size={28} color="currentColor" />
      <p>{message}</p>
      <button type="button" className="button button-primary" onClick={onContinue}>
        {continueLabel}
        <Icon name="arrow_forward" size={20} color="currentColor" />
      </button>
    </div>
  )
}

export default FeedbackBanner
