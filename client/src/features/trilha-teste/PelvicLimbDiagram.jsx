import diagramImage from '../../assets/diagrams/dog-pelvic-limb-skeleton.jpg'
import { useLanguage } from '../../i18n/useLanguage.js'
import styles from './PelvicLimbDiagram.module.css'

function PelvicLimbDiagram({ markerX, markerY }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.seta

  return (
    <figure className={styles.frame}>
      <div className={styles.imageWrapper}>
        <img src={diagramImage} alt={copy.diagramLabel} className={styles.image} />
        <span
          className={styles.marker}
          style={{ left: `${markerX}%`, top: `${markerY}%` }}
        >
          <span className={styles.markerPulse} />
          <span className={styles.markerDot} />
        </span>
      </div>
      <figcaption className={styles.credit}>{copy.diagramCredit}</figcaption>
    </figure>
  )
}

export default PelvicLimbDiagram
