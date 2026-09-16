import { useLanguage } from '../../i18n/useLanguage.js'
import { diagramImages } from './diagramAssets.js'
import styles from './AnatomyDiagram.module.css'

function AnatomyDiagram({ diagram, markerX, markerY }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.seta
  const image = diagramImages[diagram]

  return (
    <figure className={styles.frame}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={copy.diagramLabel} className={styles.image} />
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

export default AnatomyDiagram
