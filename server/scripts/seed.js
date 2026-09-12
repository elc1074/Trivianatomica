import 'dotenv/config'
import { supabase } from '../src/lib/supabase.js'
import { osteologiaMembroPelvico } from './content/osteologia-membro-pelvico.js'
import { artrologia } from './content/artrologia.js'
import { osteologiaCraneo } from './content/osteologia-craneo.js'
import { colunaVertebral } from './content/coluna-vertebral.js'

const units = [osteologiaMembroPelvico, artrologia, osteologiaCraneo, colunaVertebral]

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

async function seed() {
  if (!supabase) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in server/.env before seeding.',
    )
  }

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
    const { error: lessonsError } = await supabase
      .from('lessons')
      .upsert(lessons.map((lesson) => lesson.row))

    if (lessonsError) {
      throw new Error(`Failed to upsert lessons for ${unit.id}: ${lessonsError.message}`)
    }

    let exerciseCount = 0
    for (const lesson of lessons) {
      const rows = buildExerciseRows(lesson.row.id, lesson.esExercises, lesson.ptExercises)
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
