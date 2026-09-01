function ImagePlaceholderIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="7" width="38" height="34" rx="6" />
      <circle cx="17" cy="19" r="4" />
      <path d="m10 35 9-9 7 7 5-5 7 7" />
    </svg>
  )
}

function HeroPreview() {
  return (
    <div
      className="practice-preview"
      aria-label="Prévia de uma atividade de identificação"
    >
      <div className="preview-header">
        <div>
          <span className="preview-label">Prática guiada</span>
          <strong>Identificação de estruturas</strong>
        </div>
        <span className="preview-progress">01 / 03</span>
      </div>

      <div className="preview-media">
        <span className="media-tag">Peça anatômica</span>
        <div className="image-placeholder">
          <ImagePlaceholderIcon />
          <span>Imagem da atividade</span>
        </div>
        <div className="structure-indicator" aria-hidden="true">
          <span />
          <i />
        </div>
      </div>

      <div className="preview-question">
        <span>Qual é a estrutura indicada?</span>
        <div className="answer-placeholder">Digite sua resposta</div>
      </div>
    </div>
  )
}

export default HeroPreview
