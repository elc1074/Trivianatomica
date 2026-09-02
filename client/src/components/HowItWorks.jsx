import Icon from './Icon.jsx'
import styles from './HowItWorks.module.css'

const steps = [
  {
    icon: 'visibility',
    title: 'Observe',
    description:
      'Visualize a peça anatômica e identifique a estrutura indicada.',
  },
  {
    icon: 'edit',
    title: 'Responda',
    description:
      'Digite o nome da estrutura antes de visualizar as alternativas.',
  },
  {
    icon: 'school',
    title: 'Aprenda',
    description:
      'Receba feedback imediato e acompanhe seu desempenho na atividade.',
  },
]

function HowItWorks() {
  return (
    <section
      className={styles.howItWorks}
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2 id="how-title">Como funciona</h2>
          <p>Uma sequência simples para transformar observação em aprendizado.</p>
        </div>

        <ol className={styles.stepsList}>
          {steps.map((step, index) => (
            <li className={styles.stepCard} key={step.title}>
              {index > 0 && <div className={styles.lineLeft} />}
              {index < steps.length - 1 && <div className={styles.lineRight} />}

              <div className={styles.stepIcon}>
                <Icon name={step.icon} size={26} color="currentColor" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
