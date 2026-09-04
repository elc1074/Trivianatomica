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
        description:
          'Una ruta de repaso para identificar estructuras anatómicas, pensada para la recta final antes de la prueba práctica.',
        cta: 'Empezar a estudiar',
      },
      valuePropsLabel: 'Por qué estudiar con Trivia Anatómica',
      valueProps: [
        {
          title: 'Basado en la nomenclatura oficial de la asignatura',
          description:
            'Los diagramas siguen la Nomina Anatomica Veterinaria y el material de la asignatura de Anatomía de Animales de Compañía, validado con el equipo de Medicina Veterinaria de la Universidad Santo Tomás (Chile).',
        },
        {
          title: 'Responde antes de ver las alternativas',
          description:
            'Escribe el nombre de la estructura antes de que aparezca cualquier opción en la pantalla. Acertar aquí vale el doble de puntos. Esa recuperación activa fija más que reconocer la respuesta correcta en una lista de opciones ya listas.',
        },
        {
          title: 'Repasa exactamente lo que te equivocas',
          description:
            'Toda estructura equivocada entra en tu Central de Repaso, una cola que prioriza lo que más necesitas estudiar.',
        },
      ],
      howItWorks: {
        heading: 'Cómo funciona',
        steps: [
          {
            icon: 'category',
            title: 'Elige un sistema',
            description:
              'Cada unidad de la ruta cubre un sistema anatómico: Osteología, Artrología, y más a medida que avanzas.',
          },
          {
            icon: 'edit',
            title: 'Responde de memoria',
            description:
              'Escribe el nombre de la estructura indicada antes de ver cualquier alternativa. Acertar a la primera vale el doble de puntos.',
          },
          {
            icon: 'task_alt',
            title: 'Mira el resultado al instante',
            description:
              '¿Te equivocaste o pasaste? Te mostramos 4 alternativas. Toda estructura equivocada entra en tu cola de repaso.',
          },
        ],
      },
      finalCta: {
        headline: 'Aprende anatomía veterinaria con Trivia Anatómica',
        description:
          'Sigue cuánto de la ruta ya cubriste y cuánto falta hasta la fecha de tu prueba. Sin racha diaria obligatoria, solo progreso real.',
        cta: 'Comienza ahora',
      },
    },
    trilha: {
      panel: {
        title: 'Panel de sistemas',
        subtitle: 'Elige una unidad para empezar la ruta.',
        questionsCount: (count) => `${count} preguntas`,
      },
      lesson: {
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
      units: [
        {
          id: 'osteologia-membro-pelvico',
          title: 'Osteología — Miembro Pélvico',
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
      ],
    },
  },
  pt: {
    meta: {
      htmlLang: 'pt-BR',
      title: 'Trivia Anatômica',
      description:
        'Pratique a identificação de estruturas de Anatomia Veterinária de forma interativa.',
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
        title: 'Estude Anatomia Veterinária de forma interativa',
        description:
          'Uma trilha de revisão pra identificação de estruturas anatômicas, pensada pra reta final antes da prova prática.',
        cta: 'Começar a estudar',
      },
      valuePropsLabel: 'Por que estudar com o Trivia Anatômica',
      valueProps: [
        {
          title: 'Baseado na nomenclatura oficial da disciplina',
          description:
            'Os diagramas seguem a Nomina Anatomica Veterinaria e o material da disciplina de Anatomia de Animales de Compañía, validado com a equipe de Medicina Veterinária da Universidad Santo Tomás (Chile).',
        },
        {
          title: 'Responda antes de ver as alternativas',
          description:
            'Digite o nome da estrutura antes de qualquer opção aparecer na tela. Acertar aqui vale pontuação em dobro. Essa lembrança ativa fixa mais do que reconhecer a resposta certa numa lista de opções prontas.',
        },
        {
          title: 'Revise exatamente o que você erra',
          description:
            'Toda estrutura errada entra na sua Central de Revisão, uma fila que prioriza o que você mais precisa estudar.',
        },
      ],
      howItWorks: {
        heading: 'Como funciona',
        steps: [
          {
            icon: 'category',
            title: 'Escolha um sistema',
            description:
              'Cada unidade da trilha cobre um sistema anatômico: Osteologia, Artrologia, e mais conforme você avança.',
          },
          {
            icon: 'edit',
            title: 'Responda de cabeça',
            description:
              'Digite o nome da estrutura indicada antes de ver qualquer alternativa. Acertar de primeira vale o dobro dos pontos.',
          },
          {
            icon: 'task_alt',
            title: 'Veja o resultado na hora',
            description:
              'Errou ou pulou? A gente revela 4 alternativas. Toda estrutura errada entra na sua fila de revisão.',
          },
        ],
      },
      finalCta: {
        headline: 'Aprenda anatomia veterinária com o Trivia Anatômica',
        description:
          'Acompanhe quanto da trilha você já cobriu e quanto falta até a data da sua prova. Sem sequência diária obrigatória, só progresso real.',
        cta: 'Comece agora',
      },
    },
    trilha: {
      panel: {
        title: 'Painel de sistemas',
        subtitle: 'Escolha uma unidade pra começar a trilha.',
        questionsCount: (count) => `${count} perguntas`,
      },
      lesson: {
        progress: (index, total) => `Pergunta ${index} de ${total}`,
        points: (points) => `${points} pontos`,
        formats: {
          seta: 'Identificação por seta',
          'verdadeiro-falso': 'Verdadeiro ou falso',
          completar: 'Completar lacuna',
          associacao: 'Associação termo-função',
        },
      },
      exercises: {
        seta: {
          diagramLabel:
            'Diagrama de referência do membro pélvico, com um marcador indicando a estrutura perguntada',
          diagramCredit: 'Ellenberger, Baum e Dittrich (1911), domínio público',
          inputLabel: 'Digite o nome da estrutura',
          skip: 'Pular',
          answer: 'Responder',
          chooseCorrect: 'Escolha a alternativa certa',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (name) => `A resposta certa era ${name}.`,
        },
        verdadeiroFalso: {
          false: 'Falso',
          true: 'Verdadeiro',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) => `Errado. A afirmação é ${answer ? 'verdadeira' : 'falsa'}.`,
        },
        completar: {
          answer: 'Responder',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) => `A resposta certa era "${answer}".`,
        },
        associacao: {
          placeholder: 'Selecione a descrição',
          check: 'Conferir associações',
          continueLabel: 'Continuar',
          resultLabel: (correct, total) => `Associação (${correct}/${total} pares)`,
        },
      },
      summary: {
        title: 'Lição concluída!',
        scoreSuffix: 'pontos',
        formatStats: (correct, total, earned, max) =>
          `${correct}/${total} certas · ${earned}/${max} pts`,
        reviewTitle: 'Pra revisar:',
        perfect: 'Nenhum erro. Mandou bem!',
        retry: 'Refazer a lição',
        backToPanel: 'Voltar ao painel',
      },
    },
    quiz: {
      units: [
        {
          id: 'osteologia-membro-pelvico',
          title: 'Osteologia — Membro Pélvico',
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
