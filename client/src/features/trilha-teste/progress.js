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

export function isUnitCompleted(unit) {
  if (unit.lessons.length === 0) return false

  const completed = readCompletedLessonIds()
  return unit.lessons.every((lesson) => completed.includes(lesson.id))
}

export function isUnitUnlocked(unit, units) {
  if (unit.orderIndex === 0) return true

  const previousUnit = units.find((candidate) => candidate.orderIndex === unit.orderIndex - 1)

  if (!previousUnit) return true

  return isUnitCompleted(previousUnit)
}
