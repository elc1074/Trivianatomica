function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio" aria-label="Trivia Anatômica — início">
          <span className="brand-mark" aria-hidden="true">
            TA
          </span>
          <span>Trivia Anatômica</span>
        </a>

        <span className="project-label">Projeto acadêmico COIL</span>
      </div>
    </header>
  )
}

export default Header
