const STORAGE_KEY = 'trivia-anatomica:completed-lessons'

function readCompletedLessonIds() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function getCompletedLessonIds() {
  return readCompletedLessonIds()
}

export function isLessonCompleted(lessonId, completedLessonIds = readCompletedLessonIds()) {
  return completedLessonIds.includes(lessonId)
}

export function markLessonCompleted(lessonId) {
  const completed = readCompletedLessonIds()

  if (completed.includes(lessonId)) return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed, lessonId]))
  } catch {
    return
  }
}

export function isLessonUnlocked(lesson, lessonsInUnit) {
  if (lesson.orderIndex === 0) return true

  const previousLesson = lessonsInUnit.find(
    (candidate) => candidate.orderIndex === lesson.orderIndex - 1,
  )

  if (!previousLesson) return true

  return readCompletedLessonIds().includes(previousLesson.id)
}

export function isUnitCompleted(unit, completedLessonIds = readCompletedLessonIds()) {
  if (unit.lessons.length === 0) return false

  return unit.lessons.every((lesson) => completedLessonIds.includes(lesson.id))
}

export function getRecommendedLessonId(lessons, completedLessonIds = readCompletedLessonIds()) {
  const recommendedLesson = lessons.find((lesson) => !completedLessonIds.includes(lesson.id))

  return recommendedLesson?.id ?? lessons[0]?.id ?? null
}

export function getRecommendedUnitId(units, completedLessonIds = readCompletedLessonIds()) {
  const recommendedUnit = units.find((unit) => !isUnitCompleted(unit, completedLessonIds))

  return recommendedUnit?.id ?? units[0]?.id ?? null
}

export function isUnitUnlocked(unit, units, completedLessonIds = readCompletedLessonIds()) {
  if (unit.orderIndex === 0) return true

  const previousUnit = units.find((candidate) => candidate.orderIndex === unit.orderIndex - 1)

  if (!previousUnit) return true

  return isUnitCompleted(previousUnit, completedLessonIds)
}
