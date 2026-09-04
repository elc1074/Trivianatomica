import book from '../assets/illustrations/book.svg'
import checklist from '../assets/illustrations/checklist.svg'
import confusedWoman from '../assets/illustrations/confused-woman.svg'
import { useLanguage } from '../i18n/useLanguage.js'
import Reveal from './Reveal.jsx'
import styles from './ValueProps.module.css'

const images = [book, checklist, confusedWoman]

function ValueProps() {
  const { t } = useLanguage()

  return (
    <section className={styles.valueProps} aria-label={t.home.valuePropsLabel}>
      <div className="container">
        {t.home.valueProps.map((row, index) => (
          <Reveal key={row.title}>
            <div
              className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ''}`}
            >
              <div className={styles.imageColumn}>
                <img src={images[index]} alt="" className={styles.image} />
              </div>

              <div className={styles.textColumn}>
                <h2>{row.title}</h2>
                <p>{row.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ValueProps
