import { useEffect, useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage.js'
import { diagramDimensions, diagramImages } from './diagramAssets.js'
import styles from './AnatomyDiagram.module.css'

function AnatomyDiagram({ diagram, markerX, markerY }) {
  const { t } = useLanguage()
  const copy = t.trilha.exercises.seta
  const image = diagramImages[diagram]
  const dimensions = diagramDimensions[diagram]
  const { width, height } = dimensions ?? { width: 100, height: 100 }
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [expandedWidth, setExpandedWidth] = useState(400)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState(null)

  const markerCx = (width * markerX) / 100
  const markerCy = (height * markerY) / 100
  // Raio expresso em unidades do viewBox, como fração da largura da imagem,
  // para que o marcador pareça do mesmo tamanho visual em qualquer diagrama,
  // independente da resolução original do arquivo.
  const markerRadius = width * 0.018

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function openImage() {
    const availableWidth = window.innerWidth - 64
    const availableHeight = window.innerHeight - 180
    const widthFromHeight = (availableHeight * width) / height

    setExpandedWidth(Math.max(160, Math.min(width * 0.55, availableWidth, widthFromHeight)))
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setIsOpen(true)
  }

  function closeImage() {
    setIsOpen(false)
  }

  function changeZoom(amount) {
    setZoom((currentZoom) => {
      const nextZoom = Math.min(3, Math.max(1, currentZoom + amount))

      if (nextZoom === 1) {
        setPosition({ x: 0, y: 0 })
      }

      return nextZoom
    })
  }

  function resetZoom() {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  function handlePointerDown(event) {
    if (zoom === 1) {
      return
    }

    event.currentTarget.setPointerCapture(event.pointerId)
    setDragStart({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      positionX: position.x,
      positionY: position.y,
    })
  }

  function handlePointerMove(event) {
    if (!dragStart || dragStart.pointerId !== event.pointerId) {
      return
    }

    setPosition({
      x: dragStart.positionX + event.clientX - dragStart.startX,
      y: dragStart.positionY + event.clientY - dragStart.startY,
    })
  }

  function handlePointerUp(event) {
    if (dragStart?.pointerId === event.pointerId) {
      setDragStart(null)
    }
  }

  function renderDiagram(className) {
    return (
      <svg
        className={className}
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
    )
  }

  return (
    <figure className={styles.frame}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={openImage}
        aria-label={copy.openImage}
      >
        <span className={styles.imageWrapper} style={{ aspectRatio: `${width} / ${height}` }}>
          {renderDiagram(styles.diagramSvg)}
        </span>
      </button>
      <figcaption className={styles.credit}>{copy.diagramCredit}</figcaption>

      {isOpen && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={copy.openImage}
          onClick={closeImage}
        >
          <div className={styles.zoomArea}>
            <div className={styles.zoomContent} onClick={(event) => event.stopPropagation()}>
              <div
                className={styles.expandedDiagram}
                style={{
                  width: `${expandedWidth}px`,
                  aspectRatio: `${width} / ${height}`,
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {renderDiagram(styles.expandedDiagramSvg)}
              </div>
            </div>
          </div>
          <div className={styles.zoomControls} onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => changeZoom(-0.5)} aria-label={copy.zoomOut}>
              -
            </button>
            <button type="button" onClick={resetZoom} aria-label={copy.resetZoom}>
              1x
            </button>
            <button type="button" onClick={() => changeZoom(0.5)} aria-label={copy.zoomIn}>
              +
            </button>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeImage}
              aria-label={copy.closeImage}
            >
              X
            </button>
          </div>
        </div>
      )}
    </figure>
  )
}

export default AnatomyDiagram
