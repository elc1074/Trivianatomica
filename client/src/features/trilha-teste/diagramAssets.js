import pelvicLimbImage from '../../assets/diagrams/dog-pelvic-limb-skeleton.jpg'
import pelvicLimbMusclesImage from '../../assets/diagrams/dog-pelvic-limb-muscles.png'
import pelvicLimbMusclesAImage from '../../assets/diagrams/dog-pelvic-limb-muscles-a.png'
import pelvicLimbMusclesBImage from '../../assets/diagrams/dog-pelvic-limb-muscles-b.png'
import skullImage from '../../assets/diagrams/dog-skull-lateral.jpg'
import forelimbImage from '../../assets/diagrams/dog-forelimb-skeleton.jpg'
import spineImage from '../../assets/diagrams/dog-spine-skeleton.jpg'

export const diagramImages = {
  'pelvic-limb': pelvicLimbImage,
  'pelvic-limb-muscles': pelvicLimbMusclesImage,
  'pelvic-limb-muscles-a': pelvicLimbMusclesAImage,
  'pelvic-limb-muscles-b': pelvicLimbMusclesBImage,
  skull: skullImage,
  forelimb: forelimbImage,
  spine: spineImage,
}

// Dimensões reais (em pixels) de cada imagem, usadas para montar o viewBox do
// SVG em AnatomyDiagram. Isso garante que a imagem e o marcador escalem juntos,
// sem bordas brancas e respeitando o zoom do navegador.
export const diagramDimensions = {
  'pelvic-limb': { width: 631, height: 2005 },
  'pelvic-limb-muscles': { width: 748, height: 781 },
  'pelvic-limb-muscles-a': { width: 253, height: 462 },
  'pelvic-limb-muscles-b': { width: 410, height: 620 },
  skull: { width: 595, height: 325 },
  forelimb: { width: 800, height: 1250 },
  spine: { width: 2200, height: 620 },
}
