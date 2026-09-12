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
