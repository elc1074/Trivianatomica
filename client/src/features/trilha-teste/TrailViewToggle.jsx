import { useState } from 'react'
import Icon from '../../components/Icon.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import styles from './PathList.module.css'

const TRAIL_VIEW_KEY = 'trivia-anatomica:trail-view'
const TRAIL_VIEWS = [
  { id: 'map', labelKey: 'mapView', icon: 'route' },
  { id: 'list', labelKey: 'listView', icon: 'view_list' },
]

function readTrailView() {
  return localStorage.getItem(TRAIL_VIEW_KEY) === 'list' ? 'list' : 'map'
}

function TrailViewToggle({ children }) {
  const { t } = useLanguage()
  const [trailView, setTrailView] = useState(readTrailView)

  function handleTrailViewChange(nextView) {
    setTrailView(nextView)
    localStorage.setItem(TRAIL_VIEW_KEY, nextView)
  }

  return (
    <>
      <div className={styles.viewToggleRow}>
        <div className={styles.viewToggle} role="group" aria-label={t.trilha.unitPath.viewLabel}>
          {TRAIL_VIEWS.map((view) => (
            <button
              key={view.id}
              type="button"
              className={`${styles.viewOption} ${trailView === view.id ? styles.viewOptionActive : ''}`}
              aria-pressed={trailView === view.id}
              onClick={() => handleTrailViewChange(view.id)}
            >
              <Icon name={view.icon} size={20} color="currentColor" />
              {t.trilha.unitPath[view.labelKey]}
            </button>
          ))}
        </div>
      </div>
      {children(trailView)}
    </>
  )
}

export default TrailViewToggle
