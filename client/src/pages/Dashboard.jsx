import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mascot from '../assets/illustrations/mascot-encourage.png'
import Icon from '../components/Icon.jsx'
import PageLayout from '../components/PageLayout.jsx'
import SkeletonBlock from '../components/SkeletonBlock.jsx'
import { useAuth } from '../auth/useAuth.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { fetchProgressHistory, fetchProgressSummary } from '../features/trilha-teste/api.js'
import styles from './Dashboard.module.css'

function SkeletonCardHeading() {
  return (
    <div className={styles.skeletonHeading}>
      <SkeletonBlock width={90} height={12} />
      <SkeletonBlock width="min(240px, 80%)" height={24} />
    </div>
  )
}

function SkeletonRows({ count }) {
  return (
    <div className={styles.skeletonRows}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={styles.skeletonRow}>
          <SkeletonBlock width={42} height={42} radius="50%" />
          <span className={styles.skeletonRowText}>
            <SkeletonBlock width="70%" height={14} />
            <SkeletonBlock width="45%" height={12} />
          </span>
        </div>
      ))}
    </div>
  )
}

function HistorySkeleton() {
  return (
    <section className={styles.historyCard} aria-hidden="true">
      <SkeletonCardHeading />
      <SkeletonRows count={3} />
    </section>
  )
}

function DashboardSkeleton({ label }) {
  return (
    <section className={`container ${styles.content}`} aria-label={label} aria-busy="true">
      <div className={styles.mainColumn}>
        <div className={`${styles.progressCard} ${styles.skeletonWelcome}`}>
          <SkeletonCardHeading />
          <SkeletonBlock width="min(380px, 90%)" height={14} />
          <SkeletonBlock width="min(300px, 70%)" height={14} />
          <SkeletonBlock width={170} height={48} radius={999} />
        </div>
        <div className={styles.progressCard}>
          <SkeletonCardHeading />
          <SkeletonBlock width="100%" height={14} radius={999} />
        </div>
        <HistorySkeleton />
      </div>
      <div className={styles.sideColumn}>
        <SkeletonBlock width={180} height={26} />
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.toolCard}>
            <SkeletonBlock width={52} height={52} radius="50%" />
            <span className={styles.skeletonRowText}>
              <SkeletonBlock width="60%" height={16} />
              <SkeletonBlock width="85%" height={12} />
            </span>
          </div>
        ))}
        <div className={styles.achievementsCard}>
          <SkeletonCardHeading />
          <SkeletonRows count={5} />
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const { session } = useAuth()
  const { language, t } = useLanguage()
  const copy = t.dashboard
  const [summary, setSummary] = useState({ streak: 0, points: 0, percent: 0, completedLessons: 0, onboardingCompleted: false })
  const [summaryLoading, setSummaryLoading] = useState(true)
  const [summaryError, setSummaryError] = useState(false)
  const [history, setHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(true)

  useEffect(() => {
    fetchProgressSummary()
      .then(setSummary)
      .catch(() => setSummaryError(true))
      .finally(() => setSummaryLoading(false))
    fetchProgressHistory()
      .then(setHistory)
      .catch(() => {})
      .finally(() => setHistoryLoading(false))
  }, [])

  const reviewCount = summary.pendingReviewCount ?? 0
  const trailComplete = summary.totalLessons > 0 && summary.completedLessons >= summary.totalLessons
  const dateLocale = language === 'pt' ? 'pt-BR' : 'es-CL'
  const firstAccess = !summaryLoading && !summaryError && summary.completedLessons === 0

  return (
    <PageLayout>
      <div className={styles.page}>
        <section className={`container ${styles.topbar}`}>
          <div className={styles.greeting}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>{copy.title(session?.name)}</h1>
          </div>
          {!firstAccess && !summaryError && <div className={styles.stats} aria-label={copy.statsLabel}>
            {summaryLoading ? (
              <><span className={styles.skeletonStat} /><span className={styles.skeletonStat} /></>
            ) : (
              <><span><Icon name="local_fire_department" size={20} color="currentColor" /> {summary.streak}</span>
              <span><Icon name="star" size={20} color="currentColor" /> {summary.points}</span></>
            )}
          </div>}
        </section>

        {summaryLoading ? (
          <DashboardSkeleton label={copy.loadingProgress} />
        ) : summaryError ? (
          <section className={`container ${styles.dashboardError}`}>
            <p>{copy.progressError}</p>
            <button type="button" className="button button-primary" onClick={() => window.location.reload()}>
              {copy.retry}
            </button>
          </section>
        ) : firstAccess ? (
          <section className={`container ${styles.onboarding}`} aria-labelledby="onboarding-title">
            <div className={styles.onboardingCard}>
              <div className={styles.onboardingCopy}>
                <p className={styles.eyebrow}>{copy.firstAccessEyebrow}</p>
                <h2 id="onboarding-title">{copy.firstAccessTitle}</h2>
                <p>{copy.firstAccessDescription}</p>
                <Link className="button button-primary" to="/trilha">
                  {copy.firstAccessAction}
                  <Icon name="arrow_forward" size={20} color="currentColor" />
                </Link>
              </div>
              <img src={mascot} alt="" className={styles.onboardingMascot} />
            </div>
          </section>
        ) : <section className={`container ${styles.content}`}>
          <div className={styles.mainColumn}>
            <section className={styles.welcome} aria-labelledby="dashboard-welcome">
              <div className={styles.welcomeCopy}>
                <p className={styles.sectionLabel}>{copy.nextLabel}</p>
                <h2 id="dashboard-welcome">{trailComplete ? copy.trailCompleteTitle : copy.nextTitle}</h2>
                <p>{trailComplete ? copy.trailCompleteDescription : copy.nextDescription}</p>
                <Link className="button button-primary" to={trailComplete ? '/historico' : '/trilha'}>
                  {trailComplete ? copy.trailCompleteAction : copy.start}
                  <Icon name="arrow_forward" size={20} color="currentColor" />
                </Link>
              </div>
              <img src={mascot} alt="" className={styles.mascot} />
            </section>

            <section className={styles.progressCard} aria-labelledby="progress-title">
              <div className={styles.cardHeading}>
                <div>
                  <p className={styles.sectionLabel}>{copy.progressLabel}</p>
                  <h2 id="progress-title">{copy.progressTitle}</h2>
                </div>
                {summaryLoading ? <span className={styles.skeletonPercent} /> : <strong>{summary.percent}%</strong>}
              </div>
              <div className={styles.progressTrack}><span style={{ width: `${summary.percent}%` }} /></div>
              <p>{copy.progressDescription(summary.completedLessons, summary.totalLessons)}</p>
            </section>

            {historyLoading && <HistorySkeleton />}

            {!historyLoading && history.length > 0 && <section className={styles.historyCard} aria-labelledby="history-title">
              <div className={styles.cardHeading}>
                <div>
                  <p className={styles.sectionLabel}>{copy.historyTitle}</p>
                  <h2 id="history-title">{copy.reviewTitle}</h2>
                </div>
                {reviewCount > 0 && <strong className={styles.reviewCount}>{reviewCount}</strong>}
              </div>
              <div className={styles.historyList}>
                  {history.map((item) => {
                    const unitTitle = language === 'pt' ? item.unitTitlePt : item.unitTitleEs
                    const lessonTitle = language === 'pt' ? item.lessonTitlePt : item.lessonTitleEs
                    const exerciseName = language === 'pt' ? item.exerciseNamePt : item.exerciseNameEs
                    return (
                      <div className={styles.historyItem} key={item.id}>
                        <span className={`${styles.resultIcon} ${item.isCorrect ? styles.resultCorrect : styles.resultIncorrect}`}>
                          <Icon name={item.isCorrect ? 'check' : 'refresh'} size={18} color="currentColor" />
                        </span>
                        <span className={styles.historyBody}>
                          <strong>{exerciseName || lessonTitle}</strong>
                          <span>{unitTitle} · {lessonTitle}</span>
                        </span>
                        <span className={styles.historyMeta}>
                          <b>{copy.points(item.points)}</b>
                          <small>{new Intl.DateTimeFormat(dateLocale, { day: '2-digit', month: 'short' }).format(new Date(item.createdAt))}</small>
                        </span>
                      </div>
                    )
                  })}
              </div>
              {reviewCount > 0 && (
                <div className={styles.reviewAction}>
                  <p className={styles.reviewHint}>{copy.reviewDescription(reviewCount)}</p>
                  <Link className="button button-primary" to="/revisar-erros">
                    {copy.reviewAction}
                    <Icon name="arrow_forward" size={20} color="currentColor" />
                  </Link>
                </div>
              )}
            </section>}
          </div>

          <div className={styles.sideColumn}>
            <aside className={styles.optionsGroup} aria-labelledby="dashboard-options">
              <h2 id="dashboard-options">{copy.optionsTitle}</h2>
              <Link className={styles.toolCard} to="/flashcards">
                <span className={styles.icon}><Icon name="style" size={26} color="currentColor" /></span>
                <span className={styles.cardBody}>
                  <strong>{copy.cardsTitle}</strong>
                  <span>{copy.cardsDescription}</span>
                </span>
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
              <Link className={styles.toolCard} to="/trilha">
                <span className={styles.icon}><Icon name="menu_book" size={26} color="currentColor" /></span>
                <span className={styles.cardBody}>
                  <strong>{copy.pathTitle}</strong>
                  <span>{copy.pathDescription}</span>
                </span>
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
              <Link className={styles.toolCard} to="/historico">
                <span className={styles.icon}><Icon name="history" size={26} color="currentColor" /></span>
                <span className={styles.cardBody}>
                  <strong>{copy.lessonHistoryTitle}</strong>
                  <span>{copy.lessonHistoryDescription}</span>
                </span>
                <Icon name="arrow_forward" size={20} color="currentColor" />
              </Link>
            </aside>

            {summary.achievements && (
              <section className={styles.achievementsCard} aria-labelledby="achievements-title">
                <div className={styles.cardHeading}>
                  <div>
                    <p className={styles.sectionLabel}>{copy.achievements.label}</p>
                    <h2 id="achievements-title">{copy.achievements.title}</h2>
                  </div>
                  <strong>
                    {copy.achievements.unlockedCount(
                      summary.achievements.filter((achievement) => achievement.unlocked).length,
                      summary.achievements.length,
                    )}
                  </strong>
                </div>
                <ul className={styles.achievementList}>
                  {summary.achievements.map((achievement) => {
                    const achievementCopy = copy.achievements.items[achievement.id]
                    return (
                      <li
                        key={achievement.id}
                        className={`${styles.achievement} ${achievement.unlocked ? styles.achievementUnlocked : ''}`}
                      >
                        <span className={styles.achievementIcon}>
                          <Icon name={achievement.icon} size={26} color="currentColor" />
                        </span>
                        <span className={styles.achievementBody}>
                          <strong>{achievementCopy.title}</strong>
                          <span>{achievementCopy.description}</span>
                        </span>
                        <span className={styles.achievementStatus}>
                          {achievement.unlocked
                            ? copy.achievements.unlocked
                            : copy.achievements.progress(achievement.current, achievement.target)}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}
          </div>
        </section>}

      </div>
    </PageLayout>
  )
}

export default Dashboard
