import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'
import styles from './Breadcrumb.module.css'

// items: [{ label, to }]; o último item é a página atual e não vira link.
function Breadcrumb({ items, onNavigate }) {
  const { t } = useLanguage()
  const parentItem = items.length > 1 ? items[items.length - 2] : null

  return (
    <nav className={styles.breadcrumb} aria-label={t.chrome.nav.breadcrumb}>
      {parentItem && (
        <Link
          className={styles.backButton}
          to={parentItem.to}
          onClick={onNavigate}
          aria-label={t.chrome.nav.backTo(parentItem.label)}
        >
          <Icon name="arrow_back" size={20} color="currentColor" />
          <span>{t.chrome.nav.back}</span>
        </Link>
      )}
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <Fragment key={item.to ?? index}>
              {index > 0 && (
                <li className={styles.separator} aria-hidden="true">
                  <Icon name="chevron_right" size={18} color="currentColor" />
                </li>
              )}
              <li className={styles.item}>
                {isCurrent ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link className={styles.link} to={item.to} onClick={onNavigate}>
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
