import { useLanguage } from '../../i18n/useLanguage.js'
import { diagramDimensions, diagramImages } from './diagramAssets.js'
import styles from './AnatomyDiagram.module.css'

function AnatomyDiagram({ diagram, markerX, markerY }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.seta
  const image = diagramImages[diagram]
  const dimensions = diagramDimensions[diagram]
  const { width, height } = dimensions ?? { width: 100, height: 100 }

  const markerCx = (width * markerX) / 100
  const markerCy = (height * markerY) / 100
  // Raio expresso em unidades do viewBox, como fração da largura da imagem,
  // para que o marcador pareça do mesmo tamanho visual em qualquer diagrama,
  // independente da resolução original do arquivo.
  const markerRadius = width * 0.018

  return (
    <figure className={styles.frame}>
      <div className={styles.imageWrapper} style={{ aspectRatio: `${width} / ${height}` }}>
        <svg
          className={styles.diagramSvg}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={copy.diagramLabel}
        >
          <image href={image} x="0" y="0" width={width} height={height} />
          <g className={styles.marker}>
            <circle className={styles.markerPulse} cx={markerCx} cy={markerCy} r={markerRadius} />
            <circle
              className={styles.markerDot}
              cx={markerCx}
              cy={markerCy}
              r={markerRadius}
              strokeWidth={markerRadius * 0.3}
            />
          </g>
        </svg>
      </div>
      <figcaption className={styles.credit}>{copy.diagramCredit}</figcaption>
    </figure>
  )
}

export default AnatomyDiagram
