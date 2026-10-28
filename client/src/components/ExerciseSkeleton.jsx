import SkeletonBlock from './SkeletonBlock.jsx'
import styles from './ExerciseSkeleton.module.css'

function ExerciseSkeleton({ label, withBreadcrumb = false, withHeading = false }) {
  return (
    <div className={styles.exercise} aria-label={label} aria-busy="true">
      {withBreadcrumb && (
        <div className={styles.breadcrumb}>
          <SkeletonBlock width={96} height={42} radius={999} />
          <SkeletonBlock width={180} height={14} />
        </div>
      )}

      {withHeading && (
        <div className={styles.heading}>
          <SkeletonBlock width={110} height={14} />
          <SkeletonBlock width="min(70%, 360px)" height={32} />
          <SkeletonBlock width="min(90%, 480px)" height={16} />
        </div>
      )}

      <div className={styles.statusBar}>
        <SkeletonBlock width={130} height={16} />
        <SkeletonBlock width={88} height={30} radius={999} />
      </div>
      <SkeletonBlock width="100%" height={12} radius={999} />
      <SkeletonBlock className={styles.formatLabel} width={200} height={18} />

      <div className={styles.card}>
        <SkeletonBlock width="85%" height={18} />
        <SkeletonBlock width="55%" height={18} />
        <SkeletonBlock className={styles.figure} width="100%" height={220} radius={16} />
        <div className={styles.options}>
          {Array.from({ length: 4 }, (_, index) => (
            <SkeletonBlock key={index} width="100%" height={56} radius={14} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExerciseSkeleton
