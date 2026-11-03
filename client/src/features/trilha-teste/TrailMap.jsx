import castiel from '../../assets/illustrations/castiel.png'
import kiba from '../../assets/illustrations/kiba-png.png'
import kibaCastielCelebrate from '../../assets/illustrations/kiba-castiel-celebrate.png'
import mascotEncourage from '../../assets/illustrations/mascot-encourage.png'
import Icon from '../../components/Icon.jsx'
import styles from './TrailMap.module.css'

const ROW_HEIGHT = 146
const BUBBLE_SPACE = 58
const TROPHY_SPACE = 28
const PATH_X_PERCENTS = [50, 66, 76, 66, 50, 34, 24, 34]
const RING_RADIUS = 50
const CELEBRATE_GAP = 48
const RING_LENGTH = 2 * Math.PI * RING_RADIUS
const MASCOT_IMAGES = [mascotEncourage, kiba, castiel]
const MASCOT_SLOTS = [
  { stopOffset: 2, side: 'left' },
  { stopOffset: 5, side: 'right' },
]

function getStopX(index) {
  return PATH_X_PERCENTS[index % PATH_X_PERCENTS.length]
}

function getMascotPlacements(stopCount) {
  const placements = []

  for (let cycleStart = 0; cycleStart < stopCount; cycleStart += PATH_X_PERCENTS.length) {
    MASCOT_SLOTS.forEach((slot) => {
      const stopIndex = cycleStart + slot.stopOffset
      if (stopIndex < stopCount) {
        placements.push({ stopIndex, side: slot.side, image: MASCOT_IMAGES[placements.length % MASCOT_IMAGES.length] })
      }
    })
  }

  return placements
}

function TrailMap({
  stops,
  isStopCompleted,
  currentStopId,
  getStopProgress,
  statusLabels,
  startLabel,
  getStopLabel,
  onStopSelect,
}) {
  const allCompleted = stops.every(isStopCompleted)
  const currentIndex = stops.findIndex((stop) => stop.id === currentStopId && !isStopCompleted(stop))
  const getStopTop = (index) => index * ROW_HEIGHT + (currentIndex > 0 && index >= currentIndex ? BUBBLE_SPACE : 0)
  const trophyTop = getStopTop(stops.length) + TROPHY_SPACE
  const mapHeight = trophyTop + ROW_HEIGHT
  const trophyX = getStopX(stops.length)
  const celebratePosition = trophyX > 50
    ? { right: `calc(${100 - trophyX}% + ${CELEBRATE_GAP}px)` }
    : { left: `calc(${trophyX}% + ${CELEBRATE_GAP}px)` }

  return (
    <div className={styles.map} style={{ height: mapHeight }}>
      {getMascotPlacements(stops.length).map((mascot) => (
        <img
          key={mascot.stopIndex}
          className={`${styles.mascot} ${styles[mascot.side]}`}
          style={{ top: getStopTop(mascot.stopIndex) - 20 }}
          src={mascot.image}
          alt=""
        />
      ))}

      <img
        className={`${styles.celebrateMascot} ${allCompleted ? styles.celebrateMascotEarned : ''}`}
        style={{ top: trophyTop, ...celebratePosition }}
        src={kibaCastielCelebrate}
        alt=""
      />

      <ol className={styles.stopList}>
        {stops.map((stop, index) => {
          const stopState = isStopCompleted(stop) ? 'completed' : stop.id === currentStopId ? 'current' : 'upcoming'
          const stopProgress = stopState === 'current' ? getStopProgress?.(stop) : null

          return (
            <li
              key={stop.id}
              className={styles.stop}
              style={{ left: `${getStopX(index)}%`, top: getStopTop(index) }}
            >
              <div className={styles.stopTarget}>
                {stopState === 'current' && (
                  <span className={styles.startBubble} aria-hidden="true">
                    {startLabel}
                  </span>
                )}

                {stopProgress != null && (
                  <svg className={styles.ring} viewBox="0 0 120 120" aria-hidden="true">
                    <circle className={styles.ringTrack} cx="60" cy="60" r={RING_RADIUS} />
                    <circle
                      className={styles.ringProgress}
                      cx="60"
                      cy="60"
                      r={RING_RADIUS}
                      strokeDasharray={RING_LENGTH}
                      strokeDashoffset={RING_LENGTH * (1 - stopProgress)}
                    />
                  </svg>
                )}

                <button
                  type="button"
                  className={`${styles.stopButton} ${styles[stopState]}`}
                  onClick={() => onStopSelect(stop.id)}
                  aria-label={getStopLabel(stop.title, statusLabels[stopState])}
                >
                  <Icon name={stopState === 'completed' ? 'check' : 'star'} size={36} color="currentColor" />
                </button>
              </div>

              <span className={styles.stopTitle} aria-hidden="true">
                {stop.title}
              </span>
            </li>
          )
        })}

        <li
          className={styles.stop}
          style={{ left: `${getStopX(stops.length)}%`, top: trophyTop }}
          aria-hidden="true"
        >
          <span className={`${styles.trophy} ${allCompleted ? styles.trophyEarned : ''}`}>
            <Icon name="emoji_events" size={44} color="currentColor" />
          </span>
        </li>
      </ol>
    </div>
  )
}

export function TrailMapSkeleton({ count, label }) {
  return (
    <div className={styles.map} style={{ height: count * ROW_HEIGHT }} aria-label={label} aria-busy="true">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={styles.stop}
          style={{ left: `${getStopX(index)}%`, top: index * ROW_HEIGHT }}
        >
          <div className={styles.stopTarget}>
            <span className={`${styles.skeletonCoin} ${styles.shimmer}`} />
          </div>
          <span className={`${styles.skeletonTitle} ${styles.shimmer}`} />
        </div>
      ))}
    </div>
  )
}

export default TrailMap
