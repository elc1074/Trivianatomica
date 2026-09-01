import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Observe',
    description:
      'Visualize a peça anatômica e identifique a estrutura indicada.',
  },
  {
    number: '02',
    title: 'Responda',
    description:
      'Digite o nome da estrutura antes de visualizar as alternativas.',
  },
  {
    number: '03',
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
          <span className="eyebrow">Método de estudo</span>
          <h2 id="how-title">Como funciona</h2>
          <p>Uma sequência simples para transformar observação em aprendizado.</p>
        </div>

        <ol className={styles.stepsList}>
          {steps.map((step) => (
            <li className={styles.stepCard} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
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
