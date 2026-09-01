import styles from './Icon.module.css'

function Icon({ name, size = 24, color }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${styles.icon}`} style={{ fontSize: size, color }}>
      {name}
    </span>
  )
}

export default Icon
