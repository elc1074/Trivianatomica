export const LANGUAGES = [
  { code: 'es', label: 'Español (Chile)' },
  { code: 'pt', label: 'Português' },
]

export const DEFAULT_LANGUAGE = 'es'

export const translations = {
  es: {
    meta: {
      htmlLang: 'es-CL',
      title: 'Trivia Anatómica',
      description:
        'Practica la identificación de estructuras de Anatomía Veterinaria de forma interactiva.',
    },
    chrome: {
      brand: 'Trivia Anatómica',
      tagline: 'Proyecto académico COIL',
      languageLabel: 'Idioma del sitio',
      footerLine1: 'Proyecto COIL UFSM – UST • 2026',
      footerLine2: 'Anatomía Veterinaria',
    },
    home: {
      hero: {
        title: 'Estudia Anatomía Veterinaria de forma interactiva',
        description: 'Practica la identificación de estructuras anatómicas y repasa para tu prueba práctica.',
        cta: 'Empezar a estudiar'
      },
      valuePropsLabel: 'Por qué estudiar con Trivia Anatómica',
      valueProps: [
        {
          title: 'La nomenclatura de tu asignatura',
          description: 'Estudia con la Nomina Anatomica Veterinaria y el material de Anatomía de Animales de Compañía de la UST.'
        },
        {
          title: 'Responde antes de ver las alternativas',
          description: 'En las preguntas de identificación, escribe el nombre de la estructura. Acertar sin alternativas vale el doble.'
        },
        {
          title: 'Descubre qué necesitas repasar',
          description: 'Al terminar la unidad, consulta tus aciertos y las estructuras que necesitas volver a estudiar.'
        }
      ],
      howItWorks: {
        heading: 'Cómo funciona',
        steps: [
          {
            icon: 'menu_book',
            title: 'Elige una unidad',
            description: 'Selecciona el contenido que quieres practicar.'
          },
          {
            icon: 'edit',
            title: 'Pon a prueba tu memoria',
            description: 'Resuelve preguntas de identificación, verdadero o falso, completar y asociación.'
          },
          {
            icon: 'task_alt',
            title: 'Mira el resultado al instante',
            description: 'Recibe la respuesta después de cada pregunta y consulta tu puntuación al terminar.'
          }
        ]
      },
      finalCta: {
        headline: '¿Listo para practicar?',
        description: 'Elige una unidad y repasa a tu ritmo, una pregunta a la vez.',
        cta: 'Comienza ahora'
      }
    },
    trilha: {
      panel: {
        title: 'Panel de sistemas',
        subtitle: 'Elige un animal para empezar la ruta.',
        unitSubtitle: 'Elige una unidad para empezar.',
        questionsCount: (count) => `${count} preguntas`,
      },
      lesson: {
        encouragement: '¡Ya completaste la mitad! Sigue a tu ritmo.',
        progress: (index, total) => `Pregunta ${index} de ${total}`,
        points: (points) => `${points} puntos`,
        formats: {
          seta: 'Identificación por flecha',
          'verdadeiro-falso': 'Verdadero o falso',
          completar: 'Completar espacio',
          associacao: 'Asociación término-función',
        },
      },
      exercises: {
        seta: {
          diagramLabel:
            'Diagrama de referencia del miembro pélvico, con un marcador indicando la estructura preguntada',
          diagramCredit: 'Ellenberger, Baum y Dittrich (1911), dominio público',
          inputLabel: 'Escribe el nombre de la estructura',
          skip: 'Pasar',
          answer: 'Responder',
          chooseCorrect: 'Elige la alternativa correcta',
          correctFeedback: (points) => `¡Correcto! +${points} puntos`,
          wrongFeedback: (name) => `La respuesta correcta era ${name}.`,
        },
        verdadeiroFalso: {
          false: 'Falso',
          true: 'Verdadero',
          correctFeedback: (points) => `¡Correcto! +${points} puntos`,
          wrongFeedback: (answer) => `Incorrecto. La afirmación es ${answer ? 'verdadera' : 'falsa'}.`,
        },
        completar: {
          answer: 'Responder',
          correctFeedback: (points) => `¡Correcto! +${points} puntos`,
          wrongFeedback: (answer) => `La respuesta correcta era "${answer}".`,
        },
        associacao: {
          placeholder: 'Selecciona la descripción',
          check: 'Comprobar asociaciones',
          continueLabel: 'Continuar',
          resultLabel: (correct, total) => `Asociación (${correct}/${total} pares)`,
        },
      },
      summary: {
        title: '¡Lección completada!',
        scoreSuffix: 'puntos',
        formatStats: (correct, total, earned, max) =>
          `${correct}/${total} correctas · ${earned}/${max} pts`,
        reviewTitle: 'Para repasar:',
        perfect: '¡Sin errores. Bien hecho!',
        retry: 'Rehacer la lección',
        backToPanel: 'Volver al panel',
      },
    },
    quiz: {
      species: [
        { id: 'cachorro', title: 'Anatomía del perro', unitIds: ['osteologia-membro-pelvico'] },
        { id: 'gato', title: 'Anatomía del gato', unitIds: ['anatomia-felina'] },
      ],
      units: [
        {
          id: 'osteologia-membro-pelvico',
          title: 'Osteología del miembro pélvico',
          exercises: [
            { format: 'seta', id: 'coxal', name: 'Coxal', distractors: ['Fémur', 'Escápula', 'Húmero'] },
            { format: 'seta', id: 'femur', name: 'Fémur', distractors: ['Tibia', 'Húmero', 'Radio'] },
            { format: 'seta', id: 'tibia', name: 'Tibia', distractors: ['Fémur', 'Fíbula', 'Coxal'] },
            {
              format: 'verdadeiro-falso',
              id: 'vf-trocanter',
              statement: 'El trocánter mayor del fémur es una eminencia de tipo articular.',
              answer: false,
            },
            {
              format: 'verdadeiro-falso',
              id: 'vf-tuberosidade',
              statement: 'La tuberosidad tibial se prolonga hacia la diáfisis de la tibia.',
              answer: true,
            },
            {
              format: 'completar',
              id: 'lacuna-femur',
              sentence:
                'La cabeza del fémur siempre va hacia ___, lo que determina si es derecho o izquierdo.',
              answer: 'medial',
            },
            {
              format: 'completar',
              id: 'lacuna-isquio',
              sentence: 'El isquion presenta una espina y una incisura isquiática ___.',
              answer: 'menor',
            },
            {
              format: 'completar',
              id: 'lacuna-fibula',
              sentence: 'La fíbula articula con el cóndilo lateral de la ___.',
              answer: 'tibia',
            },
            {
              format: 'associacao',
              id: 'assoc-trocanteres',
              pairs: [
                {
                  term: 'Trocánter mayor',
                  description: 'Eminencia no articular, sirve de inserción muscular',
                },
                {
                  term: 'Cresta intertrocantérica',
                  description: 'Está entre los trocánteres mayor y menor',
                },
                {
                  term: 'Fosa trocantérica',
                  description: 'Bolsillo, parte del trocánter mayor',
                },
              ],
            },
            {
              format: 'associacao',
              id: 'assoc-maleolos',
              pairs: [
                { term: 'Maléolo tibial', description: 'Descrito por medial en la tibia' },
                { term: 'Maléolo fibular', description: 'Descrito por lateral en la fíbula' },
                { term: 'Incisura fibular', description: 'Donde la tibia articula con la fíbula' },
              ],
            },
          ],
        },
        {
          id: 'anatomia-felina',
          title: 'Anatomía general del gato',
          exercises: [
            {
              format: 'verdadeiro-falso',
              id: 'vf-clavicula-gato',
              statement: 'El gato posee una clavícula bien desarrollada.',
              answer: false,
            },
            {
              format: 'verdadeiro-falso',
              id: 'vf-corazon-gato',
              statement: 'El corazón del gato se encuentra en la cavidad torácica.',
              answer: true,
            },
            {
              format: 'completar',
              id: 'lacuna-dedos-gato',
              sentence: 'El gato normalmente presenta cinco dedos en cada miembro ___.',
              answer: 'torácico',
            },
            {
              format: 'associacao',
              id: 'assoc-esqueleto-felino',
              pairs: [
                {
                  term: 'Escápula',
                  description: 'Hueso plano de la cintura torácica',
                },
                {
                  term: 'Fémur',
                  description: 'Hueso largo del miembro pélvico',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  pt: {
    meta: {
      htmlLang: 'pt-BR',
      title: 'Trivia Anatômica',
      description:
        'Revise anatomia veterinária com perguntas sobre estruturas anatômicas.',
    },
    chrome: {
      brand: 'Trivia Anatômica',
      tagline: 'Projeto acadêmico COIL',
      languageLabel: 'Idioma do site',
      footerLine1: 'Projeto COIL UFSM – UST • 2026',
      footerLine2: 'Anatomia Veterinária',
    },
    home: {
      hero: {
        title: 'Pratique anatomia veterinária',
        description: 'Treine o reconhecimento das estruturas anatômicas para a prova prática.',
        cta: 'Começar a estudar'
      },
      valuePropsLabel: 'Por que estudar com o Trivia Anatômica',
      valueProps: [
        {
          title: 'Os termos que você estuda em aula',
          description: 'As atividades usam a Nomina Anatomica Veterinaria e o material de Anatomia de Animais de Companhia da UST.'
        },
        {
          title: 'Responda antes de ver as alternativas',
          description: 'Tente lembrar o nome da estrutura sem consultar as opções. Se acertar, você ganha o dobro dos pontos.'
        },
        {
          title: 'Saiba o que revisar',
          description: 'No fim da unidade, veja o que acertou e quais estruturas precisa revisar.'
        }
      ],
      howItWorks: {
        heading: 'Como funciona',
        steps: [
          {
            icon: 'menu_book',
            title: 'Escolha uma unidade',
            description: 'Escolha o conteúdo que quer revisar.'
          },
          {
            icon: 'edit',
            title: 'Responda às questões',
            description: 'Identifique estruturas, complete frases e relacione os termos às descrições. Há também questões de verdadeiro ou falso.'
          },
          {
            icon: 'task_alt',
            title: 'Veja o resultado na hora',
            description: 'Confira a resposta de cada questão e veja sua pontuação no fim da unidade.'
          }
        ]
      },
      finalCta: {
        headline: 'Vamos praticar?',
        description: 'Escolha o conteúdo e comece a revisão.',
        cta: 'Comece agora'
      }
    },
    trilha: {
      panel: {
        title: 'Unidades de estudo',
        subtitle: 'Escolha um animal para começar.',
        unitSubtitle: 'Escolha uma unidade para começar.',
        questionsCount: (count) => `${count} perguntas`,
      },
      lesson: {
        encouragement: 'Você chegou à metade da unidade!',
        progress: (index, total) => `Pergunta ${index} de ${total}`,
        points: (points) => `${points} pontos`,
        formats: {
          seta: 'Identificação por seta',
          'verdadeiro-falso': 'Verdadeiro ou falso',
          completar: 'Completar lacuna',
          associacao: 'Associar termos e descrições',
        },
      },
      exercises: {
        seta: {
          diagramLabel:
            'Diagrama do membro pélvico com a estrutura da questão marcada em vermelho',
          diagramCredit: 'Ellenberger, Baum e Dittrich (1911), domínio público',
          inputLabel: 'Digite o nome da estrutura',
          skip: 'Pular',
          answer: 'Responder',
          chooseCorrect: 'Escolha a alternativa certa',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (name) => `A resposta é ${name}.`,
        },
        verdadeiroFalso: {
          false: 'Falso',
          true: 'Verdadeiro',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) => `A afirmação é ${answer ? 'verdadeira' : 'falsa'}.`,
        },
        completar: {
          answer: 'Responder',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) => `A resposta é "${answer}".`,
        },
        associacao: {
          placeholder: 'Escolha a descrição',
          check: 'Conferir associações',
          continueLabel: 'Continuar',
          resultLabel: (correct, total) => `Associação (${correct}/${total} pares)`,
        },
      },
      summary: {
        title: 'Unidade concluída!',
        scoreSuffix: 'pontos',
        formatStats: (correct, total, earned, max) =>
          `${correct}/${total} certas · ${earned}/${max} pts`,
        reviewTitle: 'O que revisar:',
        perfect: 'Você acertou todas!',
        retry: 'Refazer a unidade',
        backToPanel: 'Voltar às unidades',
      },
    },
    quiz: {
      species: [
        { id: 'cachorro', title: 'Anatomia do cachorro', unitIds: ['osteologia-membro-pelvico'] },
        { id: 'gato', title: 'Anatomia do gato', unitIds: ['anatomia-felina'] },
      ],
      units: [
        {
          id: 'osteologia-membro-pelvico',
          title: 'Osteologia do membro pélvico',
          exercises: [
            { format: 'seta', id: 'coxal', name: 'Coxal', distractors: ['Fêmur', 'Escápula', 'Úmero'] },
            { format: 'seta', id: 'femur', name: 'Fêmur', distractors: ['Tíbia', 'Úmero', 'Rádio'] },
            { format: 'seta', id: 'tibia', name: 'Tíbia', distractors: ['Fêmur', 'Fíbula', 'Coxal'] },
            {
              format: 'verdadeiro-falso',
              id: 'vf-trocanter',
              statement: 'O trocânter maior do fêmur é uma eminência de tipo articular.',
              answer: false,
            },
            {
              format: 'verdadeiro-falso',
              id: 'vf-tuberosidade',
              statement: 'A tuberosidade tibial se prolonga para a diáfise da tíbia.',
              answer: true,
            },
            {
              format: 'completar',
              id: 'lacuna-femur',
              sentence:
                'A cabeça do fêmur sempre vai para ___, o que determina se é direito ou esquerdo.',
              answer: 'medial',
            },
            {
              format: 'completar',
              id: 'lacuna-isquio',
              sentence: 'O ísquio apresenta uma espina e uma incisura isquiática ___.',
              answer: 'menor',
            },
            {
              format: 'completar',
              id: 'lacuna-fibula',
              sentence: 'A fíbula articula com o côndilo lateral da ___.',
              answer: 'tíbia',
            },
            {
              format: 'associacao',
              id: 'assoc-trocanteres',
              pairs: [
                {
                  term: 'Trocânter maior',
                  description: 'Eminência não articular, serve de inserção muscular',
                },
                {
                  term: 'Cresta intertrocantérica',
                  description: 'Fica entre os trocânteres maior e menor',
                },
                {
                  term: 'Fossa trocantérica',
                  description: 'Bolsillo, parte do trocânter maior',
                },
              ],
            },
            {
              format: 'associacao',
              id: 'assoc-maleolos',
              pairs: [
                { term: 'Maléolo tibial', description: 'Descrito por medial na tíbia' },
                { term: 'Maléolo fibular', description: 'Descrito por lateral na fíbula' },
                { term: 'Incisura fibular', description: 'Onde a tíbia articula com a fíbula' },
              ],
            },
          ],
        },
        {
          id: 'anatomia-felina',
          title: 'Anatomia geral do gato',
          exercises: [
            {
              format: 'verdadeiro-falso',
              id: 'vf-clavicula-gato',
              statement: 'O gato possui uma clavícula bem desenvolvida.',
              answer: false,
            },
            {
              format: 'verdadeiro-falso',
              id: 'vf-coracao-gato',
              statement: 'O coração do gato está localizado na cavidade torácica.',
              answer: true,
            },
            {
              format: 'completar',
              id: 'lacuna-dedos-gato',
              sentence: 'O gato normalmente apresenta cinco dedos em cada membro ___.',
              answer: 'torácico',
            },
            {
              format: 'associacao',
              id: 'assoc-esqueleto-felino',
              pairs: [
                {
                  term: 'Escápula',
                  description: 'Osso plano da cintura torácica',
                },
                {
                  term: 'Fêmur',
                  description: 'Osso longo do membro pélvico',
                },
              ],
            },
          ],
        },
      ],
    },
  },
}

function collectPaths(value, prefix, paths) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectPaths(item, `${prefix}[${index}]`, paths))
    return
  }

  if (value !== null && typeof value === 'object') {
    Object.keys(value).forEach((key) =>
      collectPaths(value[key], prefix ? `${prefix}.${key}` : key, paths),
    )
    return
  }

  paths.add(prefix)
}

function warnAboutMissingTranslations() {
  const languageCodes = Object.keys(translations)
  const pathsByLanguage = Object.fromEntries(
    languageCodes.map((code) => {
      const paths = new Set()
      collectPaths(translations[code], '', paths)
      return [code, paths]
    }),
  )

  const [baseCode, ...otherCodes] = languageCodes
  const basePaths = pathsByLanguage[baseCode]

  otherCodes.forEach((code) => {
    const comparePaths = pathsByLanguage[code]

    basePaths.forEach((path) => {
      if (!comparePaths.has(path)) {
        console.warn(`[i18n] falta a chave "${path}" em "${code}" (existe em "${baseCode}")`)
      }
    })

    comparePaths.forEach((path) => {
      if (!basePaths.has(path)) {
        console.warn(`[i18n] falta a chave "${path}" em "${baseCode}" (existe em "${code}")`)
      }
    })
  })
}

if (import.meta.env.DEV) {
  warnAboutMissingTranslations()
}
