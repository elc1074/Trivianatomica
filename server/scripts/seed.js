import 'dotenv/config'
import { supabase } from '../src/lib/supabase.js'
import { osteologiaMembroPelvico } from './content/osteologia-membro-pelvico.js'
import { artrologia } from './content/artrologia.js'
import { osteologiaCraneo } from './content/osteologia-craneo.js'
import { colunaVertebral } from './content/coluna-vertebral.js'
import { anatomiaFelina } from './content/anatomia-felina.js'
import { miologiaMembroPelvico } from './content/miologia-membro-pelvico.js'

const units = [
  osteologiaMembroPelvico,
  artrologia,
  osteologiaCraneo,
  colunaVertebral,
  anatomiaFelina,
  miologiaMembroPelvico
]

function buildLessonRows(unit) {
  const { es, pt } = unit

  if (es.lessons.length !== pt.lessons.length) {
    throw new Error(`${unit.id}: es and pt have a different number of lessons`)
  }

  return es.lessons.map((esLesson, index) => {
    const ptLesson = pt.lessons[index]

    if (esLesson.id !== ptLesson.id) {
      throw new Error(
        `${unit.id}: lesson mismatch at index ${index} (es: ${esLesson.id}, pt: ${ptLesson.id})`,
      )
    }

    return {
      row: {
        id: esLesson.id,
        unit_id: unit.id,
        order_index: index,
        title_es: esLesson.title,
        title_pt: ptLesson.title,
      },
      esExercises: esLesson.exercises,
      ptExercises: ptLesson.exercises,
    }
  })
}

function buildExerciseRows(lessonId, esExercises, ptExercises) {
  if (esExercises.length !== ptExercises.length) {
    throw new Error(`${lessonId}: es and pt have a different number of exercises`)
  }

  return esExercises.map((esExercise, index) => {
    const ptExercise = ptExercises[index]

    if (esExercise.id !== ptExercise.id || esExercise.format !== ptExercise.format) {
      throw new Error(
        `${lessonId}: exercise mismatch at index ${index} (es: ${esExercise.id}/${esExercise.format}, pt: ${ptExercise.id}/${ptExercise.format})`,
      )
    }

    const { id, format, ...dataEs } = esExercise
    const { id: _ptId, format: _ptFormat, ...dataPt } = ptExercise

    return {
      lesson_id: lessonId,
      id,
      format,
      order_index: index,
      data_es: dataEs,
      data_pt: dataPt,
    }
  })
}

async function deleteStaleLessons(unitId, expectedLessonIds) {
  const { data: storedLessons, error: storedLessonsError } = await supabase
    .from('lessons')
    .select('id')
    .eq('unit_id', unitId)

  if (storedLessonsError) {
    throw new Error(`Failed to load stored lessons for ${unitId}: ${storedLessonsError.message}`)
  }

  const staleLessonIds = storedLessons
    .map((lesson) => lesson.id)
    .filter((lessonId) => !expectedLessonIds.includes(lessonId))

  if (staleLessonIds.length === 0) return

  const { error: deleteLessonsError } = await supabase
    .from('lessons')
    .delete()
    .in('id', staleLessonIds)

  if (deleteLessonsError) {
    throw new Error(`Failed to delete stale lessons for ${unitId}: ${deleteLessonsError.message}`)
  }
}

async function deleteStaleExercises(lessonId, expectedExerciseIds) {
  const { data: storedExercises, error: storedExercisesError } = await supabase
    .from('exercises')
    .select('id')
    .eq('lesson_id', lessonId)

  if (storedExercisesError) {
    throw new Error(
      `Failed to load stored exercises for ${lessonId}: ${storedExercisesError.message}`,
    )
  }

  const staleExerciseIds = storedExercises
    .map((exercise) => exercise.id)
    .filter((exerciseId) => !expectedExerciseIds.includes(exerciseId))

  if (staleExerciseIds.length === 0) return

  const { error: deleteExercisesError } = await supabase
    .from('exercises')
    .delete()
    .eq('lesson_id', lessonId)
    .in('id', staleExerciseIds)

  if (deleteExercisesError) {
    throw new Error(
      `Failed to delete stale exercises for ${lessonId}: ${deleteExercisesError.message}`,
    )
  }
}

async function deleteStaleUnits(expectedUnitIds) {
  const { data: storedUnits, error: storedUnitsError } = await supabase.from('units').select('id')

  if (storedUnitsError) {
    throw new Error(`Failed to load stored units: ${storedUnitsError.message}`)
  }

  const staleUnitIds = storedUnits
    .map((unit) => unit.id)
    .filter((unitId) => !expectedUnitIds.includes(unitId))

  if (staleUnitIds.length === 0) return

  const { error: deleteUnitsError } = await supabase.from('units').delete().in('id', staleUnitIds)

  if (deleteUnitsError) {
    throw new Error(`Failed to delete stale units: ${deleteUnitsError.message}`)
  }
}

async function seed() {
  if (!supabase) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in server/.env before seeding.',
    )
  }

  await deleteStaleUnits(units.map((unit) => unit.id))

  for (const unit of units) {
    const { error: unitError } = await supabase.from('units').upsert({
      id: unit.id,
      order_index: unit.orderIndex,
      title_es: unit.es.title,
      title_pt: unit.pt.title,
    })

    if (unitError) {
      throw new Error(`Failed to upsert unit ${unit.id}: ${unitError.message}`)
    }

    const lessons = buildLessonRows(unit)
    await deleteStaleLessons(
      unit.id,
      lessons.map((lesson) => lesson.row.id),
    )

    const { error: lessonsError } = await supabase
      .from('lessons')
      .upsert(lessons.map((lesson) => lesson.row))

    if (lessonsError) {
      throw new Error(`Failed to upsert lessons for ${unit.id}: ${lessonsError.message}`)
    }

    let exerciseCount = 0
    for (const lesson of lessons) {
      const rows = buildExerciseRows(lesson.row.id, lesson.esExercises, lesson.ptExercises)
      await deleteStaleExercises(
        lesson.row.id,
        rows.map((row) => row.id),
      )

      const { error: exercisesError } = await supabase.from('exercises').upsert(rows)

      if (exercisesError) {
        throw new Error(`Failed to upsert exercises for ${lesson.row.id}: ${exercisesError.message}`)
      }

      exerciseCount += rows.length
    }

    console.log(`Seeded ${unit.id} (${lessons.length} lessons, ${exerciseCount} exercises)`)
  }

  console.log('Seed complete.')
}

seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
