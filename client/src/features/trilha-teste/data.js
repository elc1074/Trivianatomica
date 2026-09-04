import { translations } from '../../i18n/translations.js'

export function getUnits(language) {
  return translations[language]?.quiz.units ?? translations.es.quiz.units
}

export function getUnitById(unitId, language) {
  return getUnits(language).find((unit) => unit.id === unitId)
}

export function getMaxPoints(exercise) {
  switch (exercise.format) {
    case 'seta':
      return 20
    case 'verdadeiro-falso':
      return 10
    case 'completar':
      return 15
    case 'associacao':
      return exercise.pairs.length * 10
    default:
      return 0
  }
}
