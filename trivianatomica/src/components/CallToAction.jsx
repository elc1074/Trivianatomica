function CallToAction() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-content">
          <div>
            <span className="cta-kicker">Aprenda praticando</span>
            <h2 id="cta-title">Pronto para praticar?</h2>
            <p>Revise estruturas anatômicas no seu ritmo.</p>
          </div>

          <a className="button button-light" href="#como-funciona">
            Ver atividades
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
