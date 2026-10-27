import styles from './SkeletonBlock.module.css'

function SkeletonBlock({ className = '', width, height, radius, tone = 'default' }) {
  return (
    <span
      className={`${styles.block} ${styles[tone]} ${className}`}
      style={{ width, height, borderRadius: radius }}
      aria-hidden="true"
    />
  )
}

export default SkeletonBlock
