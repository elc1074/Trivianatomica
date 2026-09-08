import { translations } from '../../i18n/translations.js'

export function getSpecies(language) {
  return translations[language]?.quiz.species ?? translations.es.quiz.species
}

export function getUnits(language, speciesId) {
  const allUnits = translations[language]?.quiz.units ?? translations.es.quiz.units
  const species = getSpecies(language).find((animal) => animal.id === speciesId)

  if (!species) return []

  return species.unitIds
    .map((unitId) => allUnits.find((unit) => unit.id === unitId))
    .filter(Boolean)
}

export function getUnitById(unitId, language, speciesId) {
  return getUnits(language, speciesId).find((unit) => unit.id === unitId)
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
