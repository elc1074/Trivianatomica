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
        cta: 'Empezar a estudiar',
      flashcardsCta: 'Flashcards',
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
    flashcards: {
      title: 'Flashcards',
      loading: 'Cargando barajas...',
      loadError: 'No se pudieron cargar las barajas. Intenta de nuevo.',
      retry: 'Intentar de nuevo',
      selection: {
        subtitle: (count) => `Selecciona lo que quieras estudiar: ${count} seleccionadas`,
        cardsCount: (count) => `${count} tarjetas`,
        start: 'Comenzar a estudiar',
        emptySelection: 'Selecciona al menos un mazo para comenzar a estudiar.',
      },
      study: {
        completedTitle: '¡Felicidades!',
        completedMessage: 'Has completado todas las tarjetas.',
        backToSelection: 'Volver a la selección',
        wrongFeedback: (answer) => `Incorrecto. La respuesta correcta es: ${answer}`,
        changeContents: 'Cambiar contenidos',
        remainingCards: (count) => `${count} tarjetas restantes`,
        prompt: '¿Qué es esto?',
        reveal: 'Ver tarjeta',
        answer: 'Responder',
        revealedAnswer: (answer) => `Respuesta: ${answer}`,
        continueLabel: 'Continuar',
      },
    },
    trilha: {
      panel: {
        title: 'Panel de sistemas',
        subtitle: 'Elige una unidad para empezar la ruta.',
        questionsCount: (count) => `${count} preguntas`,
        lessonsCount: (count) => `${count} lecciones`,
        loading: 'Cargando unidades...',
        loadError: 'No se pudieron cargar las unidades. Intenta de nuevo.',
        locked: 'Completa la unidad anterior para desbloquear',
      },
      unitPath: {
        subtitle: 'Elige una lección para continuar.',
        loading: 'Cargando lecciones...',
        loadError: 'No se pudieron cargar las lecciones. Intenta de nuevo.',
        locked: 'Completa la lección anterior para desbloquear',
        backToPanel: 'Volver al panel',
      },
      lesson: {
        loading: 'Cargando lección...',
        loadError: 'No se pudo cargar esta unidad.',
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
        continueLabel: 'Continuar',
        seta: {
          diagramLabel:
            'Diagrama de referencia con un marcador indicando la estructura preguntada',
          diagramCredit: 'Ellenberger, Baum y Dittrich (1911), dominio público',
          inputLabel: 'Escribe el nombre de la estructura',
          skip: 'Pasar',
          answer: 'Responder',
          chooseCorrect: 'Elige la alternativa correcta',
          markerMissing: 'No se pudo cargar el marcador de esta pregunta.',
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
        cta: 'Começar a estudar',
        flashcardsCta: 'Flashcards',
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
    flashcards: {
      title: 'Flashcards',
      loading: 'Carregando baralhos...',
      loadError: 'Não foi possível carregar os baralhos. Tente novamente.',
      retry: 'Tentar novamente',
      selection: {
        subtitle: (count) => `Selecione o que deseja estudar: ${count} selecionados`,
        cardsCount: (count) => `${count} cartões`,
        start: 'Começar a estudar',
        emptySelection: 'Selecione pelo menos um baralho para começar a estudar.',
      },
      study: {
        completedTitle: 'Parabéns!',
        completedMessage: 'Você concluiu todos os cartões.',
        backToSelection: 'Voltar à seleção',
        wrongFeedback: (answer) => `Incorreto. A resposta correta é: ${answer}`,
        changeContents: 'Alterar conteúdos',
        remainingCards: (count) => `${count} cartões restantes`,
        prompt: 'O que é isto?',
        reveal: 'Ver cartão',
        answer: 'Responder',
        revealedAnswer: (answer) => `Resposta: ${answer}`,
        continueLabel: 'Continuar',
      },
    },
    trilha: {
      panel: {
        title: 'Unidades de estudo',
        subtitle: 'Escolha uma unidade para começar.',
        questionsCount: (count) => `${count} perguntas`,
        lessonsCount: (count) => `${count} lições`,
        loading: 'Carregando unidades...',
        loadError: 'Não foi possível carregar as unidades. Tente novamente.',
        locked: 'Complete a unidade anterior para desbloquear',
      },
      unitPath: {
        subtitle: 'Escolha uma lição para continuar.',
        loading: 'Carregando lições...',
        loadError: 'Não foi possível carregar as lições. Tente novamente.',
        locked: 'Complete a lição anterior para desbloquear',
        backToPanel: 'Voltar ao painel',
      },
      lesson: {
        loading: 'Carregando lição...',
        loadError: 'Não foi possível carregar esta unidade.',
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
        continueLabel: 'Continuar',
        seta: {
          diagramLabel:
            'Diagrama de referência com um marcador indicando a estrutura da pergunta',
          diagramCredit: 'Ellenberger, Baum e Dittrich (1911), domínio público',
          inputLabel: 'Digite o nome da estrutura',
          skip: 'Pular',
          answer: 'Responder',
          chooseCorrect: 'Escolha a alternativa certa',
          markerMissing: 'Não foi possível carregar o marcador desta questão.',
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
