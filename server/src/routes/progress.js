import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import { supabase } from '../lib/supabase.js'

const router = Router()
router.use(requireAuth)

const PERFECT_LESSONS_TARGET = 10
const STREAK_TARGET = 7
const ATTEMPTS_PAGE_SIZE = 1000
const DAY_IN_MS = 86400000

function getDateKey(date) {
  return date.toISOString().slice(0, 10)
}

function getMaxPoints(format, exerciseData) {
  if (format === 'seta') return 20
  if (format === 'verdadeiro-falso') return 10
  if (format === 'completar') return 15
  if (format === 'associacao') return (exerciseData?.pairs?.length ?? 0) * 10
  return 0
}

function getExerciseKey(lessonId, exerciseId) {
  return `${lessonId}:${exerciseId}`
}

async function fetchPendingReviewAttempts(userId) {
  const latestAttempts = new Map()

  for (let from = 0; ; from += ATTEMPTS_PAGE_SIZE) {
    const { data: attempts, error } = await supabase
      .from('exercise_attempts')
      .select('id, lesson_id, exercise_id, is_correct')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .order('id', { ascending: false })
      .range(from, from + ATTEMPTS_PAGE_SIZE - 1)
    if (error) throw error

    for (const attempt of attempts) {
      const key = getExerciseKey(attempt.lesson_id, attempt.exercise_id)
      if (!latestAttempts.has(key)) latestAttempts.set(key, attempt)
    }
    if (attempts.length < ATTEMPTS_PAGE_SIZE) break
  }

  return [...latestAttempts.values()].filter((attempt) => !attempt.is_correct)
}

async function fetchExercisesByKey(lessonIds, columns) {
  const { data: exercises, error } = await supabase
    .from('exercises')
    .select(`lesson_id, id, ${columns}`)
    .in('lesson_id', lessonIds)
  if (error) throw error
  return new Map(exercises.map((exercise) => [getExerciseKey(exercise.lesson_id, exercise.id), exercise]))
}

function isPerfectLesson(progress) {
  return progress.total_exercises > 0 && progress.correct_count >= progress.total_exercises
}

function buildAchievements({ completedProgress, lessons, longestStreak }) {
  const completedIds = new Set(completedProgress.map((progress) => progress.lesson_id))
  const lessonIdsByUnit = new Map()
  lessons.forEach((lesson) => {
    lessonIdsByUnit.set(lesson.unit_id, [...(lessonIdsByUnit.get(lesson.unit_id) ?? []), lesson.id])
  })
  const completedUnits = [...lessonIdsByUnit.values()].filter((unitLessonIds) =>
    unitLessonIds.every((lessonId) => completedIds.has(lessonId)),
  ).length
  const perfectLessons = completedProgress.filter(isPerfectLesson).length

  return [
    { id: 'firstLesson', icon: 'flag', current: completedIds.size, target: 1 },
    { id: 'firstUnit', icon: 'workspace_premium', current: completedUnits, target: 1 },
    { id: 'perfectLessons', icon: 'verified', current: perfectLessons, target: PERFECT_LESSONS_TARGET },
    { id: 'weekStreak', icon: 'local_fire_department', current: longestStreak, target: STREAK_TARGET },
    { id: 'fullTrail', icon: 'emoji_events', current: completedIds.size, target: lessons.length },
  ].map((achievement) => ({
    ...achievement,
    current: Math.min(achievement.current, achievement.target),
    unlocked: achievement.target > 0 && achievement.current >= achievement.target,
  }))
}

router.get('/summary', async (req, res) => {
  const [{ data: progress, error: progressError }, { data: lessons, error: lessonsError }, { data: streak, error: streakError }, pendingReview] = await Promise.all([
    supabase.from('lesson_progress').select('lesson_id, score, correct_count, total_exercises, completed_at').eq('user_id', req.user.id),
    supabase.from('lessons').select('id, unit_id'),
    supabase.from('user_streaks').select('current_streak, longest_streak, last_activity_date').eq('user_id', req.user.id).maybeSingle(),
    fetchPendingReviewAttempts(req.user.id).catch((pendingError) => ({ error: pendingError })),
  ])

  const error = progressError || lessonsError || streakError || pendingReview.error
  if (error) return res.status(500).json({ error: error.message })

  let reviewableExercises
  try {
    reviewableExercises = await fetchExercisesByKey([...new Set(pendingReview.map((attempt) => attempt.lesson_id))], 'format')
  } catch (exercisesError) {
    return res.status(500).json({ error: exercisesError.message })
  }
  const pendingReviewCount = pendingReview.filter((attempt) =>
    reviewableExercises.has(getExerciseKey(attempt.lesson_id, attempt.exercise_id)),
  ).length
  const now = new Date()
  const streakIsActive = [getDateKey(now), getDateKey(new Date(now.getTime() - DAY_IN_MS))].includes(streak?.last_activity_date)

  const completed = progress ?? []
  const totalLessons = lessons?.length ?? 0
  const longestStreak = streak?.longest_streak ?? 0
  res.json({
    completedLessonIds: completed.map((item) => item.lesson_id),
    completedLessons: completed.length,
    totalLessons,
    percent: totalLessons ? Math.round((completed.length / totalLessons) * 100) : 0,
    streak: streakIsActive ? streak.current_streak : 0,
    longestStreak,
    points: completed.reduce((sum, item) => sum + item.score, 0),
    onboardingCompleted: completed.length > 0,
    pendingReviewCount,
    achievements: buildAchievements({ completedProgress: completed, lessons: lessons ?? [], longestStreak }),
  })
})

router.get('/history', async (req, res) => {
  const { data: attempts, error: attemptsError } = await supabase
    .from('exercise_attempts')
    .select('id, lesson_id, exercise_id, is_correct, points, created_at')
    .eq('user_id', req.user.id)
    .order('created_at', { ascending: false })
    .limit(12)

  if (attemptsError) return res.status(500).json({ error: attemptsError.message })
  if (!attempts?.length) return res.json([])

  const lessonIds = [...new Set(attempts.map((attempt) => attempt.lesson_id))]
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('id, title_es, title_pt, unit_id')
    .in('id', lessonIds)
  if (lessonsError) return res.status(500).json({ error: lessonsError.message })

  const { data: units, error: unitsError } = await supabase
    .from('units')
    .select('id, title_es, title_pt')
    .in('id', [...new Set((lessons ?? []).map((lesson) => lesson.unit_id))])
  if (unitsError) return res.status(500).json({ error: unitsError.message })

  let exercisesByKey
  try {
    exercisesByKey = await fetchExercisesByKey(lessonIds, 'data_es, data_pt')
  } catch (exercisesError) {
    return res.status(500).json({ error: exercisesError.message })
  }

  const lessonsById = new Map((lessons ?? []).map((lesson) => [lesson.id, lesson]))
  const unitsById = new Map((units ?? []).map((unit) => [unit.id, unit]))

  res.json(attempts.map((attempt) => {
    const lesson = lessonsById.get(attempt.lesson_id)
    const unit = lesson ? unitsById.get(lesson.unit_id) : null
    const exercise = exercisesByKey.get(getExerciseKey(attempt.lesson_id, attempt.exercise_id))
    return {
      id: attempt.id,
      lessonId: attempt.lesson_id,
      exerciseId: attempt.exercise_id,
      unitTitleEs: unit?.title_es ?? '',
      unitTitlePt: unit?.title_pt ?? '',
      lessonTitleEs: lesson?.title_es ?? '',
      lessonTitlePt: lesson?.title_pt ?? '',
      exerciseNameEs: exercise?.data_es?.name ?? '',
      exerciseNamePt: exercise?.data_pt?.name ?? '',
      isCorrect: attempt.is_correct,
      points: attempt.points,
      createdAt: attempt.created_at,
    }
  }))
})

router.get('/lessons', async (req, res) => {
  const titleColumn = req.query.lang === 'pt' ? 'title_pt' : 'title_es'
  const { data: progress, error } = await supabase
    .from('lesson_progress')
    .select(`lesson_id, score, correct_count, total_exercises, completed_at, lessons(unit_id, ${titleColumn}, units(${titleColumn}))`)
    .eq('user_id', req.user.id)
    .order('completed_at', { ascending: false })

  if (error) return res.status(500).json({ error: error.message })

  res.json((progress ?? []).map((item) => ({
    lessonId: item.lesson_id,
    unitId: item.lessons?.unit_id ?? null,
    lessonTitle: item.lessons?.[titleColumn] ?? '',
    unitTitle: item.lessons?.units?.[titleColumn] ?? '',
    score: item.score,
    correctCount: item.correct_count,
    totalExercises: item.total_exercises,
    completedAt: item.completed_at,
  })))
})

function getExerciseLabel(format, data) {
  if (format === 'seta') return data?.name ?? ''
  if (format === 'associacao') return (data?.pairs ?? []).map((pair) => pair.term).join(', ')
  if (format === 'completar') return data?.sentence ?? ''
  if (format === 'verdadeiro-falso') return data?.statement ?? ''
  return ''
}

router.get('/lessons/:lessonId', async (req, res) => {
  const dataColumn = req.query.lang === 'pt' ? 'data_pt' : 'data_es'
  const [{ data: exercises, error: exercisesError }, { data: attempts, error: attemptsError }] = await Promise.all([
    supabase
      .from('exercises')
      .select(`id, format, order_index, ${dataColumn}`)
      .eq('lesson_id', req.params.lessonId)
      .order('order_index', { ascending: true }),
    supabase
      .from('exercise_attempts')
      .select('exercise_id, is_correct, created_at')
      .eq('user_id', req.user.id)
      .eq('lesson_id', req.params.lessonId)
      .order('created_at', { ascending: false }),
  ])

  const error = exercisesError || attemptsError
  if (error) return res.status(500).json({ error: error.message })

  const latestResultByExercise = new Map()
  for (const attempt of attempts ?? []) {
    if (!latestResultByExercise.has(attempt.exercise_id)) latestResultByExercise.set(attempt.exercise_id, attempt.is_correct)
  }

  res.json((exercises ?? []).map((exercise) => ({
    id: exercise.id,
    format: exercise.format,
    label: getExerciseLabel(exercise.format, exercise[dataColumn]),
    isCorrect: latestResultByExercise.get(exercise.id) ?? null,
  })))
})

router.get('/review', async (req, res) => {
  const language = req.query.lang === 'pt' ? 'pt' : 'es'
  const dataColumn = language === 'pt' ? 'data_pt' : 'data_es'
  const titleColumn = language === 'pt' ? 'title_pt' : 'title_es'

  let attempts
  try {
    attempts = await fetchPendingReviewAttempts(req.user.id)
  } catch (attemptsError) {
    return res.status(500).json({ error: attemptsError.message })
  }
  if (!attempts.length) return res.json([])

  const lessonIds = [...new Set(attempts.map((attempt) => attempt.lesson_id))]
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select(`id, unit_id, ${titleColumn}`)
    .in('id', lessonIds)
  if (lessonsError) return res.status(500).json({ error: lessonsError.message })

  const { data: units, error: unitsError } = await supabase
    .from('units')
    .select(`id, ${titleColumn}`)
    .in('id', [...new Set((lessons ?? []).map((lesson) => lesson.unit_id))])
  if (unitsError) return res.status(500).json({ error: unitsError.message })

  let exercisesByKey
  try {
    exercisesByKey = await fetchExercisesByKey(lessonIds, `format, ${dataColumn}`)
  } catch (exercisesError) {
    return res.status(500).json({ error: exercisesError.message })
  }

  const lessonsById = new Map((lessons ?? []).map((lesson) => [lesson.id, lesson]))
  const unitsById = new Map((units ?? []).map((unit) => [unit.id, unit]))

  res.json(attempts.flatMap((attempt) => {
    const lesson = lessonsById.get(attempt.lesson_id)
    const unit = lesson ? unitsById.get(lesson.unit_id) : null
    const exercise = exercisesByKey.get(getExerciseKey(attempt.lesson_id, attempt.exercise_id))
    if (!lesson || !unit || !exercise) return []
    return [{
      attemptId: attempt.id,
      lessonId: lesson.id,
      unitTitle: unit[titleColumn],
      lessonTitle: lesson[titleColumn],
      exercise: { id: exercise.id, format: exercise.format, ...exercise[dataColumn] },
    }]
  }))
})

router.post('/review/attempt', async (req, res) => {
  const { lessonId, exerciseId, isCorrect, points = 0 } = req.body
  if (!lessonId || !exerciseId || typeof isCorrect !== 'boolean') {
    return res.status(400).json({ error: 'lessonId, exerciseId and isCorrect are required' })
  }

  const { data: exercise, error: exerciseError } = await supabase
    .from('exercises')
    .select('id')
    .eq('lesson_id', lessonId)
    .eq('id', exerciseId)
    .maybeSingle()
  if (exerciseError) return res.status(500).json({ error: exerciseError.message })
  if (!exercise) return res.status(404).json({ error: 'exercise not found', code: 'exercise_not_found' })

  const { error } = await supabase.from('exercise_attempts').insert({
    user_id: req.user.id,
    lesson_id: lessonId,
    exercise_id: exerciseId,
    is_correct: isCorrect,
    points: Number(points) || 0,
  })
  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json({ ok: true })
})

router.post('/lessons/:lessonId/complete', async (req, res) => {
  const lessonId = req.params.lessonId
  const submittedAttempts = Array.isArray(req.body?.attempts) ? req.body.attempts : []

  const { data: exercises, error: exercisesError } = await supabase
    .from('exercises')
    .select('id, format, data_pt')
    .eq('lesson_id', lessonId)
  if (exercisesError) return res.status(500).json({ error: exercisesError.message })
  if (!exercises.length) return res.status(404).json({ error: 'lesson not found', code: 'lesson_not_found' })

  const exercisesById = new Map(exercises.map((exercise) => [exercise.id, exercise]))
  const attemptsByExercise = new Map()
  for (const attempt of submittedAttempts) {
    const exercise = exercisesById.get(attempt?.exerciseId)
    if (!exercise) continue
    const maxPoints = getMaxPoints(exercise.format, exercise.data_pt)
    attemptsByExercise.set(exercise.id, {
      user_id: req.user.id,
      lesson_id: lessonId,
      exercise_id: exercise.id,
      is_correct: attempt.correct === true,
      points: Math.min(Math.max(Math.round(Number(attempt.points) || 0), 0), maxPoints),
    })
  }
  const attemptRows = [...attemptsByExercise.values()]
  const score = attemptRows.reduce((sum, attempt) => sum + attempt.points, 0)
  const correctCount = attemptRows.filter((attempt) => attempt.is_correct).length

  const { data: previousProgress, error: previousError } = await supabase
    .from('lesson_progress')
    .select('score, correct_count')
    .eq('user_id', req.user.id)
    .eq('lesson_id', lessonId)
    .maybeSingle()
  if (previousError) return res.status(500).json({ error: previousError.message })

  if (attemptRows.length) {
    const { error: attemptsError } = await supabase.from('exercise_attempts').insert(attemptRows)
    if (attemptsError) return res.status(500).json({ error: attemptsError.message })
  }

  const { error: progressError } = await supabase.from('lesson_progress').upsert({
    user_id: req.user.id,
    lesson_id: lessonId,
    score: Math.max(score, previousProgress?.score ?? 0),
    correct_count: Math.max(correctCount, previousProgress?.correct_count ?? 0),
    total_exercises: exercises.length,
    completed_at: new Date().toISOString(),
  })
  if (progressError) return res.status(500).json({ error: progressError.message })

  const today = getDateKey(new Date())
  const { data: currentStreak } = await supabase
    .from('user_streaks')
    .select('current_streak, longest_streak, last_activity_date')
    .eq('user_id', req.user.id)
    .maybeSingle()
  const yesterday = getDateKey(new Date(Date.now() - DAY_IN_MS))
  const nextCurrent = currentStreak?.last_activity_date === today
    ? currentStreak.current_streak
    : currentStreak?.last_activity_date === yesterday
      ? currentStreak.current_streak + 1
      : 1
  const nextLongest = Math.max(currentStreak?.longest_streak ?? 0, nextCurrent)

  const { error: streakError } = await supabase.from('user_streaks').upsert({
    user_id: req.user.id,
    current_streak: nextCurrent,
    longest_streak: nextLongest,
    last_activity_date: today,
    updated_at: new Date().toISOString(),
  })
  if (streakError) return res.status(500).json({ error: streakError.message })

  res.status(201).json({ ok: true })
})

export default router
