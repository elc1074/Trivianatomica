import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import Icon from '../../components/Icon.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { diagramImages } from './diagramAssets.js'
import styles from './AnatomyDiagram.module.css'

function AnatomyDiagram({ diagram, markerX, markerY }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.seta
  const image = diagramImages[diagram]
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!isExpanded) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsExpanded(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isExpanded])

  function renderMarker() {
    return (
      <span
        className={styles.marker}
        style={{ left: `${markerX}%`, top: `${markerY}%` }}
      >
        <span className={styles.markerPulse} />
        <span className={styles.markerDot} />
      </span>
    )
  }

  return (
    <>
      <figure className={styles.frame}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => setIsExpanded(true)}
          aria-label={copy.openImage}
        >
          <div className={styles.imageWrapper}>
            <img src={image} alt={copy.diagramLabel} className={styles.image} />
            {renderMarker()}
          </div>
        </button>
        <figcaption className={styles.credit}>{copy.diagramCredit}</figcaption>
      </figure>

      {isExpanded && createPortal(
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={copy.openImage}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsExpanded(false)
          }}
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit
            centerZoomedOut
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className={styles.zoomControls}>
                  <button type="button" onClick={() => zoomOut()} aria-label={copy.zoomOut} title={copy.zoomOut}>
                    <Icon name="zoom_out" size={24} color="currentColor" />
                  </button>
                  <button type="button" onClick={() => resetTransform()} aria-label={copy.resetZoom} title={copy.resetZoom}>
                    <Icon name="restart_alt" size={24} color="currentColor" />
                  </button>
                  <button type="button" onClick={() => zoomIn()} aria-label={copy.zoomIn} title={copy.zoomIn}>
                    <Icon name="zoom_in" size={24} color="currentColor" />
                  </button>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setIsExpanded(false)}
                    aria-label={copy.closeImage}
                    title={copy.closeImage}
                  >
                    <Icon name="close" size={24} color="currentColor" />
                  </button>
                </div>

                <TransformComponent wrapperClass={styles.zoomArea} contentClass={styles.zoomContent}>
                  <div className={styles.expandedDiagram}>
                    <img src={image} alt={copy.diagramLabel} />
                    {renderMarker()}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>,
        document.body,
      )}
    </>
  )
}

export default AnatomyDiagram
