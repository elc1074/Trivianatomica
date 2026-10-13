const UNIVERSAL_TEST_ANSWER = 'teste-certa'
const MAX_TYPO_DISTANCE = 2

export function normalizeAnswer(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
    .toLowerCase()
}

function levenshteinDistance(a, b) {
  const rows = a.length + 1
  const cols = b.length + 1
  const distances = Array.from({ length: rows }, (_, i) => [i, ...Array(cols - 1).fill(0)])
  for (let col = 1; col < cols; col += 1) distances[0][col] = col

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      const cost = a[row - 1] === b[col - 1] ? 0 : 1
      distances[row][col] = Math.min(
        distances[row - 1][col] + 1,
        distances[row][col - 1] + 1,
        distances[row - 1][col - 1] + cost,
      )
    }
  }

  return distances[rows - 1][cols - 1]
}

export function isAnswerCorrect(inputValue, expectedValue) {
  const normalizedInput = normalizeAnswer(inputValue)
  const normalizedExpected = normalizeAnswer(expectedValue)

  if (normalizedInput === UNIVERSAL_TEST_ANSWER || normalizedInput === normalizedExpected) {
    return true
  }

  return levenshteinDistance(normalizedInput, normalizedExpected) <= MAX_TYPO_DISTANCE
}
