import SkeletonBlock from '../../components/SkeletonBlock.jsx'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import styles from './PathList.module.css'

function TrailBanner({ label, title, subtitle, loading = false }) {
  if (loading) {
    return (
      <header className={`${styles.unitBanner} ${styles.unitBannerLoading}`} aria-hidden="true">
        <div className={styles.unitBannerText}>
          <SkeletonBlock width={150} height={14} />
          <SkeletonBlock width="min(280px, 100%)" height={30} />
          <SkeletonBlock width="min(240px, 90%)" height={16} />
        </div>
        <SkeletonBlock className={styles.unitBannerMascotSkeleton} radius="50%" />
      </header>
    )
  }

  return (
    <header className={styles.unitBanner}>
      <div className={styles.unitBannerText}>
        <p className={styles.unitBannerLabel}>{label}</p>
        <h1 className={styles.unitBannerTitle}>{title}</h1>
        <p className={styles.unitBannerSubtitle}>{subtitle}</p>
      </div>
      <img className={styles.unitBannerMascot} src={mascotWelcome} alt="" width="140" height="158" />
    </header>
  )
}

export default TrailBanner
