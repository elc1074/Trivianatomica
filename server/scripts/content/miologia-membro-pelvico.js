const lateralMuscleExercises = [
  {
    format: 'seta',
    id: 'gluteusMedius',
    name: 'M. gluteus medius',
    distractors: ['M. gluteus superficialis', 'M. gluteofemoralis', 'M. biceps femoris'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'gluteusSuperficialis',
    name: 'M. gluteus superficialis',
    distractors: ['M. gluteus medius', 'M. sartorius', 'M. coccygeus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'gluteofemoralis',
    name: 'M. gluteofemoralis',
    distractors: ['M. gluteus medius', 'M. semitendinosus', 'M. tensor fasciae latae'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'coccygeus',
    name: 'M. coccygeus',
    distractors: ['M. levator ani', 'M. gluteus profundus', 'M. quadratus femoris'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'sacrocaudalisDorsalisLateralis',
    name: 'M. sacrocaudalis dorsalis lateralis',
    distractors: ['M. sacrocaudalis ventralis lateralis', 'M. coccygeus', 'M. levator ani'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'sacrocaudalisVentralisLateralis',
    name: 'M. sacrocaudalis ventralis lateralis',
    distractors: ['M. sacrocaudalis dorsalis lateralis', 'M. coccygeus', 'M. sartorius'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'sartorius',
    name: 'M. sartorius',
    distractors: ['M. gracilis', 'M. adductor', 'M. rectus femoris'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'tensorFasciaeLatae',
    name: 'M. tensor fasciae latae',
    distractors: ['Fascia lata', 'M. sartorius', 'M. vastus lateralis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'fasciaLata',
    name: 'Fascia lata',
    distractors: ['M. tensor fasciae latae', 'M. biceps femoris', 'M. semimembranosus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'bicepsFemoris',
    name: 'M. biceps femoris',
    distractors: ['M. semitendinosus', 'M. semimembranosus', 'M. vastus lateralis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'semitendinosus',
    name: 'M. semitendinosus',
    distractors: ['M. semimembranosus', 'M. biceps femoris', 'M. gastrocnemius'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'tibialisCranialis',
    name: 'M. tibialis cranialis',
    distractors: ['M. extensor digitorum longus', 'M. peroneus/fibularis longus', 'M. soleus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'extensorDigitorumLongus',
    name: 'M. extensor digitorum longus',
    distractors: ['M. tibialis cranialis', 'M. extensor digitorum lateralis', 'M. peroneus/fibularis brevis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'extensorDigitorumLongusTendon',
    name: 'Tendão do M. extensor digitorum longus',
    distractors: ['M. extensor digitorum longus', 'Tendão do M. extensor digitorum lateralis', 'Tendão do M. flexor digitorum profundus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'peroneusLongus',
    name: 'M. peroneus/fibularis longus',
    distractors: ['M. peroneus/fibularis brevis', 'M. extensor digitorum longus', 'M. tibialis cranialis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'extensorDigitorumLateralis',
    name: 'M. extensor digitorum lateralis',
    distractors: ['M. extensor digitorum longus', 'M. peroneus/fibularis longus', 'M. tibialis cranialis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'peroneusBrevis',
    name: 'M. peroneus/fibularis brevis',
    distractors: ['M. peroneus/fibularis longus', 'M. soleus', 'M. extensor digitorum lateralis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'gastrocnemiusLateralHead',
    name: 'M. gastrocnemius, lateral head',
    distractors: ['M. soleus', 'M. flexor digitorum profundus', 'M. peroneus/fibularis brevis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'soleus',
    name: 'M. soleus',
    distractors: ['M. gastrocnemius', 'M. tibialis cranialis', 'M. peroneus/fibularis longus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'flexorDigitorumProfundusLateralHead',
    name: 'M. flexor digitorum profundus, lateral head',
    distractors: ['M. flexor digitorum superficialis', 'M. flexor digitorum brevis', 'M. soleus'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'flexorDigitorumProfundusTendon',
    name: 'Tendão do M. flexor digitorum profundus',
    distractors: ['M. flexor digitorum profundus, lateral head', 'Tendão do M. flexor digitorum superficialis', 'Tendão calcâneo comum'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'flexorDigitorumSuperficialisTendon',
    name: 'Tendão do M. flexor digitorum superficialis',
    distractors: ['Tendão do M. flexor digitorum profundus', 'Tendão calcâneo comum', 'Tendão do M. gastrocnemius'],
    diagram: 'pelvic-limb-muscles-a',
  },
]

const medialMuscleExercises = [
  {
    format: 'seta',
    id: 'vastusMedialis',
    name: 'M. vastus medialis',
    distractors: ['M. rectus femoris', 'M. vastus lateralis', 'M. adductor'],
    diagram: 'pelvic-limb-muscles-b',
  },
  {
    format: 'seta',
    id: 'rectusFemoris',
    name: 'M. rectus femoris',
    distractors: ['M. vastus medialis', 'M. vastus lateralis', 'M. sartorius'],
    diagram: 'pelvic-limb-muscles-b',
  },
  {
    format: 'seta',
    id: 'vastusLateralis',
    name: 'M. vastus lateralis',
    distractors: ['M. vastus medialis', 'M. rectus femoris', 'M. biceps femoris'],
    diagram: 'pelvic-limb-muscles-b',
  },
  {
    format: 'seta',
    id: 'adductor',
    name: 'M. adductor',
    distractors: ['M. sartorius', 'M. semimembranosus', 'M. rectus femoris'],
    diagram: 'pelvic-limb-muscles-b',
  },
  {
    format: 'seta',
    id: 'semimembranosus',
    name: 'M. semimembranosus',
    distractors: ['M. semitendinosus', 'M. adductor', 'M. biceps femoris'],
    diagram: 'pelvic-limb-muscles-b',
  },
  {
    format: 'seta',
    id: 'abductorCrurisCaudalis',
    name: 'M. abductor cruris caudalis',
    distractors: ['M. semimembranosus', 'M. semitendinosus', 'M. biceps femoris'],
    diagram: 'pelvic-limb-muscles-b',
  },
]

const distalFootMuscleExercises = [
  {
    format: 'seta',
    id: 'flexorDigitorumBrevis',
    name: 'M. flexor digitorum brevis',
    distractors: ['M. flexor digitorum profundus', 'M. flexor digitorum superficialis', 'Mm. interossei'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'abductorDigitiV',
    name: 'M. abductor digiti V',
    distractors: ['M. adductor digiti V', 'M. adductor digiti II', 'Mm. interossei'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'adductorDigitiV',
    name: 'M. adductor digiti V',
    distractors: ['M. abductor digiti V', 'M. adductor digiti II', 'M. flexor digitorum brevis'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'adductorDigitiII',
    name: 'M. adductor digiti II',
    distractors: ['M. abductor digiti II', 'M. adductor digiti V', 'M. abductor digiti V'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'abductorDigitiII',
    name: 'M. abductor digiti II',
    distractors: ['M. adductor digiti II', 'M. adductor digiti V', 'Mm. interossei'],
    diagram: 'pelvic-limb-muscles-a',
  },
  {
    format: 'seta',
    id: 'interossei',
    name: 'Mm. interossei',
    distractors: ['M. flexor digitorum brevis', 'M. adductor digiti II', 'M. abductor digiti V'],
    diagram: 'pelvic-limb-muscles-a',
  },
]

const knowledgeExercisesEs = [
  {
    format: 'verdadeiro-falso',
    id: 'vf-biceps-femoris-lateral',
    statement: 'El M. biceps femoris se observa ampliamente en la cara lateral del muslo.',
    answer: true,
  },
  {
    format: 'verdadeiro-falso',
    id: 'vf-tibialis-cranialis-caudal',
    statement: 'El M. tibialis cranialis pertenece al grupo caudal de la pierna.',
    answer: false,
  },
  {
    format: 'completar',
    id: 'lacuna-quadriceps-rectus',
    sentence: 'El M. rectus femoris forma parte del grupo muscular ___.',
    answer: 'quadriceps',
  },
  {
    format: 'verdadeiro-falso',
    id: 'vf-quadriceps-extensor',
    statement: 'El M. quadriceps femoris actúa principalmente como extensor de la rodilla.',
    answer: true,
  },
  {
    format: 'completar',
    id: 'lacuna-peroneus-synonym',
    sentence: 'En la nomenclatura anatómica, peroneus también puede denominarse ___.',
    answer: 'fibularis',
  },
  {
    format: 'associacao',
    id: 'assoc-musculos-regioes',
    pairs: [
      { term: 'M. biceps femoris', description: 'Cara lateral del muslo' },
      { term: 'M. tibialis cranialis', description: 'Cara craneal de la pierna' },
      { term: 'M. gastrocnemius', description: 'Región caudal de la pierna' },
    ],
  },
  {
    format: 'associacao',
    id: 'assoc-musculos-grupos',
    pairs: [
      { term: 'M. vastus medialis', description: 'Componente del M. quadriceps femoris' },
      { term: 'M. semitendinosus', description: 'Músculo caudal del muslo' },
      { term: 'Fascia lata', description: 'Lámina fascial lateral del muslo' },
    ],
  },
]

const knowledgeExercisesPt = [
  {
    format: 'verdadeiro-falso',
    id: 'vf-biceps-femoris-lateral',
    statement: 'O M. biceps femoris é observado amplamente na face lateral da coxa.',
    answer: true,
  },
  {
    format: 'verdadeiro-falso',
    id: 'vf-tibialis-cranialis-caudal',
    statement: 'O M. tibialis cranialis pertence ao grupo caudal da perna.',
    answer: false,
  },
  {
    format: 'completar',
    id: 'lacuna-quadriceps-rectus',
    sentence: 'O M. rectus femoris faz parte do grupo muscular ___.',
    answer: 'quadriceps',
  },
  {
    format: 'verdadeiro-falso',
    id: 'vf-quadriceps-extensor',
    statement: 'O M. quadriceps femoris atua principalmente como extensor do joelho.',
    answer: true,
  },
  {
    format: 'completar',
    id: 'lacuna-peroneus-synonym',
    sentence: 'Na nomenclatura anatômica, peroneus também pode ser chamado de ___.',
    answer: 'fibularis',
  },
  {
    format: 'associacao',
    id: 'assoc-musculos-regioes',
    pairs: [
      { term: 'M. biceps femoris', description: 'Face lateral da coxa' },
      { term: 'M. tibialis cranialis', description: 'Face cranial da perna' },
      { term: 'M. gastrocnemius', description: 'Região caudal da perna' },
    ],
  },
  {
    format: 'associacao',
    id: 'assoc-musculos-grupos',
    pairs: [
      { term: 'M. vastus medialis', description: 'Componente do M. quadriceps femoris' },
      { term: 'M. semitendinosus', description: 'Músculo caudal da coxa' },
      { term: 'Fascia lata', description: 'Lâmina fascial lateral da coxa' },
    ],
  },
]

export const miologiaMembroPelvico = {
  id: 'miologia-membro-pelvico',
  orderIndex: 6,
  es: {
    title: 'Miología del miembro pélvico',
    lessons: [
      {
        id: 'miologia-membro-pelvico-musculos',
        title: 'Músculos del miembro pélvico',
        exercises: [
          ...lateralMuscleExercises,
          ...medialMuscleExercises,
          ...distalFootMuscleExercises,
          ...knowledgeExercisesEs,
        ],
      },
    ],
  },
  pt: {
    title: 'Miologia do membro pélvico',
    lessons: [
      {
        id: 'miologia-membro-pelvico-musculos',
        title: 'Músculos do membro pélvico',
        exercises: [
          ...lateralMuscleExercises,
          ...medialMuscleExercises,
          ...distalFootMuscleExercises,
          ...knowledgeExercisesPt,
        ],
      },
    ],
  },
}
