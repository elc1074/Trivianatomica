import styles from './SkeletonList.module.css'

function SkeletonList({ count = 4, label }) {
  return (
    <div className={styles.list} aria-label={label} aria-busy="true">
      {Array.from({ length: count }, (_, index) => (
        <div className={styles.card} key={index}>
          <span className={styles.icon} />
          <span className={styles.copy}>
            <span className={styles.line} />
            <span className={`${styles.line} ${styles.short}`} />
          </span>
          <span className={styles.arrow} />
        </div>
      ))}
    </div>
  )
}

export default SkeletonList
