import { useNavigate, useParams } from 'react-router-dom'
import mascotWelcome from '../../assets/illustrations/mascot-welcome.png'
import Icon from '../../components/Icon.jsx'
import PageLayout from '../../components/PageLayout.jsx'
import { useLanguage } from '../../i18n/useLanguage.js'
import { getSpecies, getUnits } from './data.js'
import styles from './SystemsPanel.module.css'

function SystemsPanel() {
  const navigate = useNavigate()
  const { speciesId } = useParams()
  const { language, t } = useLanguage()
  const species = getSpecies(language)
  const selectedSpecies = species.find((animal) => animal.id === speciesId)
  const units = getUnits(language, speciesId)
  const panelOptions = selectedSpecies ? units : species

  return (
    <PageLayout>
      <section className={styles.panel}>
        <div className="container">
          <div className={styles.intro}>
            <img className={styles.mascot} src={mascotWelcome} alt="" width="160" height="184" />
            <div>
              <h1 className={styles.title}>
                {selectedSpecies ? selectedSpecies.title : t.trilha.panel.title}
              </h1>
              <p className={styles.subtitle}>
                {selectedSpecies ? t.trilha.panel.unitSubtitle : t.trilha.panel.subtitle}
              </p>
            </div>
          </div>

          <ul className={styles.unitList}>
            {panelOptions.map((panelOption) => (
              <li key={panelOption.id}>
                <button
                  type="button"
                  className={styles.unitCard}
                  onClick={() =>
                    navigate(
                      selectedSpecies
                        ? `/trilha/${speciesId}/${panelOption.id}`
                        : `/trilha/${panelOption.id}`,
                    )
                  }
                >
                  <span className={styles.unitIcon}>
                    <Icon name="category" size={28} color="currentColor" />
                  </span>
                  <span className={styles.unitText}>
                    <span className={styles.unitName}>{panelOption.title}</span>
                    {selectedSpecies && (
                      <span className={styles.unitCount}>
                        {t.trilha.panel.questionsCount(panelOption.exercises.length)}
                      </span>
                    )}
                  </span>
                  <Icon name="arrow_forward" size={22} color="currentColor" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}

export default SystemsPanel
