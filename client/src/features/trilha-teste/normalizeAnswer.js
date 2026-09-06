export function normalizeAnswer(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
    .toLowerCase()
}
