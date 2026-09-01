import CallToAction from '../components/CallToAction.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import HeroPreview from '../components/HeroPreview.jsx'
import HowItWorks from '../components/HowItWorks.jsx'

function Home() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <section
          className="hero-section"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Anatomia Veterinária
              </span>
              <h1 id="hero-title">
                Estude Anatomia Veterinária de forma interativa
              </h1>
              <p className="hero-description">
                Pratique a identificação de estruturas anatômicas e prepare-se
                para suas avaliações práticas.
              </p>
              <a className="button button-primary" href="#como-funciona">
                Começar a estudar
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <HeroPreview />
          </div>
        </section>

        <HowItWorks />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}

export default Home
