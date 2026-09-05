import { useLanguage } from '../../i18n/useLanguage.js'
import styles from './LessonProgress.module.css'

export default function LessonProgress({ completed, total }) {
  const { language } = useLanguage()
  const percent = total > 0 ? Math.round(Math.min(Math.max(completed / total, 0), 1) * 100) : 0
  const label = language === 'pt' ? 'Progresso da unidade' : 'Progreso de la unidad'
  return (
    <div className={styles.row}>
      <div className={styles.track} role="progressbar" aria-label={label}
        aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
        <div className={styles.fill} style={{ width: percent + '%' }} />
      </div>
      <span className={styles.percent} aria-hidden="true">{percent}%</span>
    </div>
  )
}
