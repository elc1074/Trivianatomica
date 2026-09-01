import styles from './LoadingState.module.css'

function LoadingState() {
  return (
    <div className={styles.loading}>
      <span className={styles.spinner} />
    </div>
  )
}

export default LoadingState
