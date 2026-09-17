import { Router } from 'express'
import { supabase } from '../lib/supabase.js'

const router = Router()

function assembleExercise(row, language) {
  const data = language === 'pt' ? row.data_pt : row.data_es
  return { id: row.id, format: row.format, ...data }
}

function assembleFlashcard(row, language) {
  const exercise = assembleExercise(row, language)

  return {
    id: `${row.lesson_id}:${row.id}`,
    lessonId: row.lesson_id,
    exerciseId: row.id,
    structureId: row.id,
    format: row.format,
    answer: exercise.name,
    name: exercise.name,
    diagram: exercise.diagram,
  }
}

router.use((req, res, next) => {
  if (!supabase) {
    return res.status(503).json({ error: 'Supabase is not configured on the server' })
  }
  next()
})

router.get('/units', async (req, res) => {
  const language = req.query.lang === 'pt' ? 'pt' : 'es'
  const titleColumn = language === 'pt' ? 'title_pt' : 'title_es'

  const { data: units, error } = await supabase
    .from('units')
    .select(`id, order_index, ${titleColumn}, lessons(id, order_index)`)
    .order('order_index', { ascending: true })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  const payload = units.map((unit) => ({
    id: unit.id,
    orderIndex: unit.order_index,
    title: unit[titleColumn],
    lessons: unit.lessons
      .sort((a, b) => a.order_index - b.order_index)
      .map((lesson) => ({ id: lesson.id, orderIndex: lesson.order_index })),
  }))

  res.json(payload)
})

router.get('/units/:unitId/lessons', async (req, res) => {
  const language = req.query.lang === 'pt' ? 'pt' : 'es'
  const titleColumn = language === 'pt' ? 'title_pt' : 'title_es'

  const { data: unit, error: unitError } = await supabase
    .from('units')
    .select(`id, order_index, ${titleColumn}`)
    .eq('id', req.params.unitId)
    .maybeSingle()

  if (unitError) {
    return res.status(500).json({ error: unitError.message })
  }

  if (!unit) {
    return res.status(404).json({ error: 'unit not found' })
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select(`id, order_index, ${titleColumn}, exercises(id)`)
    .eq('unit_id', unit.id)
    .order('order_index', { ascending: true })

  if (lessonsError) {
    return res.status(500).json({ error: lessonsError.message })
  }

  res.json({
    id: unit.id,
    orderIndex: unit.order_index,
    title: unit[titleColumn],
    lessons: lessons.map((lesson) => ({
      id: lesson.id,
      orderIndex: lesson.order_index,
      title: lesson[titleColumn],
      exerciseCount: lesson.exercises.length,
    })),
  })
})

router.get('/flashcard-decks', async (req, res) => {
  const language = req.query.lang === 'pt' ? 'pt' : 'es'
  const titleColumn = language === 'pt' ? 'title_pt' : 'title_es'

  const { data: units, error: unitsError } = await supabase
    .from('units')
    .select(`id, order_index, ${titleColumn}`)
    .order('order_index', { ascending: true })

  if (unitsError) {
    return res.status(500).json({ error: unitsError.message })
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('id, unit_id, order_index')
    .order('order_index', { ascending: true })

  if (lessonsError) {
    return res.status(500).json({ error: lessonsError.message })
  }

  const lessonIds = lessons.map((lesson) => lesson.id)

  if (lessonIds.length === 0) {
    return res.json([])
  }

  const { data: exercises, error: exercisesError } = await supabase
    .from('exercises')
    .select('id, lesson_id, format, order_index, data_es, data_pt')
    .eq('format', 'seta')
    .in('lesson_id', lessonIds)
    .order('order_index', { ascending: true })

  if (exercisesError) {
    return res.status(500).json({ error: exercisesError.message })
  }

  const lessonsByUnit = new Map()
  lessons.forEach((lesson) => {
    const unitLessons = lessonsByUnit.get(lesson.unit_id) ?? []
    unitLessons.push(lesson)
    lessonsByUnit.set(lesson.unit_id, unitLessons)
  })

  const exercisesByLesson = new Map()
  exercises.forEach((exercise) => {
    const lessonExercises = exercisesByLesson.get(exercise.lesson_id) ?? []
    lessonExercises.push(assembleFlashcard(exercise, language))
    exercisesByLesson.set(exercise.lesson_id, lessonExercises)
  })

  const decks = units.map((unit) => ({
    id: unit.id,
    title: unit[titleColumn],
    cards: (lessonsByUnit.get(unit.id) ?? []).flatMap(
      (lesson) => exercisesByLesson.get(lesson.id) ?? [],
    ),
  }))

  res.json(decks.filter((deck) => deck.cards.length > 0))
})

router.get('/lessons/:lessonId', async (req, res) => {
  const language = req.query.lang === 'pt' ? 'pt' : 'es'
  const titleColumn = language === 'pt' ? 'title_pt' : 'title_es'

  const { data: lesson, error: lessonError } = await supabase
    .from('lessons')
    .select(`id, order_index, ${titleColumn}, unit_id`)
    .eq('id', req.params.lessonId)
    .maybeSingle()

  if (lessonError) {
    return res.status(500).json({ error: lessonError.message })
  }

  if (!lesson) {
    return res.status(404).json({ error: 'lesson not found' })
  }

  const { data: exercises, error: exercisesError } = await supabase
    .from('exercises')
    .select('id, format, order_index, data_es, data_pt')
    .eq('lesson_id', lesson.id)
    .order('order_index', { ascending: true })

  if (exercisesError) {
    return res.status(500).json({ error: exercisesError.message })
  }

  res.json({
    id: lesson.id,
    unitId: lesson.unit_id,
    orderIndex: lesson.order_index,
    title: lesson[titleColumn],
    exercises: exercises.map((row) => assembleExercise(row, language)),
  })
})

export default router
