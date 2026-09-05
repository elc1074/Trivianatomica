import LessonProgress from './LessonProgress.jsx'
import mascotCelebrate from '../../assets/illustrations/mascot-celebrate.png'
import Icon from '../../components/Icon.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { getMaxPoints } from './data.js'
import styles from './LessonSummary.module.css'

function LessonSummary({ unit, results, onRetry, onBackToPanel }) {
  const { t } = useLanguage()
  const formatLabels = t.trilha.lesson.formats

  const totalScore = results.reduce((sum, result) => sum + result.points, 0)
  const maxScore = unit.exercises.reduce((sum, exercise) => sum + getMaxPoints(exercise), 0)

  const formatBreakdown = Object.keys(formatLabels)
    .map((format) => {
      const formatResults = results.filter((result) => result.format === format)
      if (formatResults.length === 0) return null

      return {
        format,
        label: formatLabels[format],
        earned: formatResults.reduce((sum, result) => sum + result.points, 0),
        max: formatResults.reduce((sum, result) => sum + result.maxPoints, 0),
        correctCount: formatResults.filter((result) => result.correct).length,
        total: formatResults.length,
      }
    })
    .filter(Boolean)

  const reviewResults = results.filter((result) => !result.correct)

  return (
    <section className={styles.summary}>
      <div className="container">
        <div className={styles.card}>
          <img className={styles.mascot} src={mascotCelebrate} alt="" width="140" height="210" />
          <h1 className={styles.title}>{t.trilha.summary.title}</h1>
          <p className={styles.unitName}>{unit.title}</p>

          <LessonProgress completed={results.length} total={unit.exercises.length} />

          <div className={styles.score}>
            {totalScore}{' '}
            <span className={styles.scoreMax}>
              / {maxScore} {t.trilha.summary.scoreSuffix}
            </span>
          </div>

          <ul className={styles.formatList}>
            {formatBreakdown.map((item) => (
              <li key={item.format} className={styles.formatRow}>
                <span className={styles.formatLabel}>{item.label}</span>
                <span className={styles.formatStats}>
                  {t.trilha.summary.formatStats(
                    item.correctCount,
                    item.total,
                    item.earned,
                    item.max,
                  )}
                </span>
              </li>
            ))}
          </ul>

          {reviewResults.length > 0 ? (
            <div className={styles.reviewList}>
              <p className={styles.reviewTitle}>{t.trilha.summary.reviewTitle}</p>
              <ul>
                {reviewResults.map((result) => (
                  <li key={result.exerciseId}>{result.label}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className={styles.perfect}>{t.trilha.summary.perfect}</p>
          )}

          <div className={styles.actions}>
            <button className="button button-light" type="button" onClick={onRetry}>
              {t.trilha.summary.retry}
            </button>
            <button className="button button-primary" type="button" onClick={onBackToPanel}>
              {t.trilha.summary.backToPanel}
              <Icon name="arrow_forward" size={20} color="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LessonSummary
