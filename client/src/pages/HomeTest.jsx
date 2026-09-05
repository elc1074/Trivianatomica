import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'
import { useLanguage } from '../i18n/useLanguage.js'
import mascot from '../assets/illustrations/mascot-welcome.png'
import PelvicLimbDiagram from '../features/trilha-teste/PelvicLimbDiagram.jsx'
import { structureMarkers } from '../features/trilha-teste/markerPositions.js'
import styles from './HomeTest.module.css'

export default function HomeTest() {
  const { t } = useLanguage()
  const c = t.homeTest
  const [answer, setAnswer] = useState(null)
  const marker = structureMarkers.femur
  return (
    <PageLayout>
      <div className={styles.page}>
        <div className={styles.preview}><span>{c.preview}</span><Link to="/">{c.original} ↗</Link></div>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{c.tag}</p>
            <h1>{c.title}<br /><span>{c.accent}</span></h1>
            <p className={styles.description}>{c.description}</p>
            <div className={styles.actions}>
              <Link className="button button-primary" to="/trilha">{c.start} <span aria-hidden="true">→</span></Link>
              <a className={styles.textLink} href="#experimente">{c.try} <span aria-hidden="true">↓</span></a>
            </div>
            <p className={styles.note}>{c.note}</p>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.orbit} aria-hidden="true" />
            <span className={styles.bubble}>{c.bubble}</span>
            <img src={mascot} alt="" width="360" height="415" fetchPriority="high" />
            <span className={styles.smallStar} aria-hidden="true">✦</span>
          </div>
        </section>
        <section className={styles.demo} id="experimente" aria-labelledby="demo-title">
          <div className={styles.demoIntro}>
            <p className={styles.eyebrow}>{c.demoTag}</p>
            <h2 id="demo-title">{c.demoTitle}</h2>
            <p>{c.demoDescription}</p>
            <span className={styles.demoLabel}>01 / 01</span>
          </div>
          <div className={styles.exercise}>
            <div className={styles.diagram}><PelvicLimbDiagram markerX={marker.xPercent} markerY={marker.yPercent} /></div>
            <div className={styles.question}>
              <h3>{c.question}</h3>
              <div className={styles.options} role="group" aria-label={c.question}>
                {c.options.map((option, index) => (
                  <button key={index} type="button" disabled={answer !== null}
                    className={`${styles.option} ${answer !== null && index === 0 ? styles.correct : ''} ${answer === index && index !== 0 ? styles.wrong : ''}`}
                    onClick={() => setAnswer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{answer !== null && index === 0 && <b aria-hidden="true">✓</b>}</button>
                ))}
              </div>
              <div className={styles.feedback} aria-live="polite" aria-atomic="true">{answer !== null && <p>{answer === 0 ? c.correct : c.wrong}</p>}</div>
              {answer !== null && <button type="button" className={styles.reset} onClick={() => setAnswer(null)}>{c.again} ↻</button>}
              <p className={styles.example}>{c.example}</p>
            </div>
          </div>
        </section>
        <section className={styles.steps} aria-labelledby="steps-title">
          <h2 id="steps-title">{c.stepsTitle}</h2>
          <ol>{c.steps.map(([title, description], index) => <li key={index}><span className={styles.stepNumber}>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        </section>
        <section className={styles.end}><div><h2>{c.end}</h2><p>{c.endNote}</p></div><Link to="/trilha" className="button button-primary">{c.start} <span aria-hidden="true">→</span></Link></section>
      </div>
    </PageLayout>
  )
}
