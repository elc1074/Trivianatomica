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
      backToDashboard: 'Volver al panel',
      footerLine1: 'Proyecto COIL UFSM – UST • 2026',
      footerLine2: 'Anatomía Veterinaria',
      nav: {
        label: 'Navegación principal',
        open: 'Abrir menú',
        close: 'Cerrar menú',
        home: 'Inicio',
        dashboard: 'Panel',
        lessons: 'Lecciones',
        flashcards: 'Flashcards',
        signIn: 'Entrar',
        signOut: 'Salir',
        breadcrumb: 'Ruta de navegación',
        unit: 'Unidad',
      },
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
    dashboard: {
      eyebrow: 'Panel de estudio',
      title: (name) => `Hola, ${name || 'estudiante'}`,
      statsLabel: 'Tu progreso',
      nextLabel: 'Siguiente actividad',
      nextTitle: 'Continúa tu ruta de estudio',
      nextDescription: 'Avanza por las unidades de Anatomía Veterinaria y practica una pregunta a la vez.',
      start: 'Comenzar a estudiar',
      progressLabel: 'Tu progreso',
      progressTitle: 'Construye tu recorrido',
      progressDescription: (completed, total) => {
        if (completed === 0) return 'Completa tu primera lección para empezar a registrar tu progreso.'
        if (completed >= total) return 'Completaste todas las lecciones de la ruta.'
        return `Completaste ${completed} de ${total} lecciones.`
      },
      optionsTitle: '¿Qué quieres estudiar ahora?',
      pathTitle: 'Continuar en la ruta',
      pathDescription: 'Avanza por las unidades y practica una pregunta a la vez.',
      cardsTitle: 'Estudiar con flashcards',
      cardsDescription: 'Repasa estructuras y conceptos en sesiones rápidas.',
      achievements: {
        label: 'Conquistas',
        title: 'Tus logros',
        unlockedCount: (unlocked, total) => `${unlocked}/${total}`,
        progress: (current, target) => `${current}/${target}`,
        unlocked: 'Conseguido',
        items: {
          firstLesson: { title: 'Primera lección', description: 'Completa tu primera lección.' },
          firstUnit: { title: 'Unidad completa', description: 'Termina todas las lecciones de una unidad.' },
          perfectLessons: { title: 'Sin errores', description: 'Termina 10 lecciones sin errar ninguna pregunta.' },
          weekStreak: { title: 'Una semana seguida', description: 'Estudia 7 días seguidos.' },
          fullTrail: { title: 'Ruta completa', description: 'Completa todas las lecciones disponibles.' },
        },
      },
      firstAccessEyebrow: 'Tu primer paso',
      firstAccessTitle: 'Empieza tu recorrido de estudio',
      firstAccessDescription: 'Elige una unidad, responde una lección y empieza a construir tu progreso en Anatomía Veterinaria.',
      firstAccessAction: 'Elegir una unidad',
      loadingProgress: 'Cargando tu progreso...',
      progressError: 'No se pudo cargar tu progreso.',
      retry: 'Intentar de nuevo',
      historyTitle: 'Historial reciente',
      points: (points) => `${points} pts`,
      historyEmpty: 'Tus respuestas aparecerán aquí después de completar una lección.',
      reviewTitle: 'Revisar errores',
      reviewDescription: (count) => (count === 1 ? 'Tienes 1 respuesta para revisar.' : `Tienes ${count} respuestas para revisar.`),
      correct: 'Correcta',
      incorrect: 'Para revisar',
      reviewAction: 'Revisar ahora',
      reviewLoading: 'Cargando tu repaso...',
      reviewError: 'No se pudo cargar el repaso. Inténtalo de nuevo.',
      reviewEmptyTitle: 'No hay errores para repasar',
      reviewSessionTitle: 'Repasemos tus errores',
      reviewSessionDescription: 'Responde nuevamente las preguntas que necesitan más atención.',
      reviewCompleteTitle: '¡Repaso completado!',
      reviewCompleteDescription: 'Revisaste todas las preguntas disponibles. Sigue estudiando para reforzar tus conocimientos.',
    },
    auth: {
      signUpEyebrow: 'Tu progreso empieza aquí',
      signInEyebrow: 'Qué bueno verte de nuevo',
      recoveryEyebrow: 'Acceso a tu cuenta',
      signUpTitle: 'Crea tu perfil',
      signInTitle: 'Inicia sesión para continuar',
      recoveryTitle: 'Recupera tu contraseña',
      signUpDescription: 'Guarda tus respuestas y sigue tu evolución en la ruta.',
      signInDescription: 'Retoma tus estudios exactamente donde los dejaste.',
      recoveryDescription: 'Escribe tu correo y te enviaremos las instrucciones para volver a estudiar.',
      name: 'Nombre',
      email: 'Correo electrónico',
      password: 'Contraseña',
      createAccount: 'Crear cuenta',
      signIn: 'Iniciar sesión',
      sendRecovery: 'Enviar instrucciones',
      loading: 'Cargando...',
      forgotPassword: 'Olvidé mi contraseña',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      noAccount: '¿Aún no tienes una cuenta?',
      enter: 'Iniciar sesión',
      create: 'Crear cuenta',
      legal: 'Al continuar, aceptas los Términos de uso y la Política de privacidad.',
      backToLogin: 'Volver al inicio de sesión',
      validationName: 'Escribe tu nombre para crear el perfil.',
      validationEmail: 'Escribe tu correo electrónico para continuar.',
      validationFields: 'Completa el correo y la contraseña para continuar.',
      errors: {
        invalid_credentials: 'Correo o contraseña incorrectos.',
        email_exists: 'Ya existe una cuenta con este correo.',
        user_already_exists: 'Ya existe una cuenta con este correo.',
        weak_password: 'La contraseña debe tener al menos 6 caracteres.',
        email_address_invalid: 'Escribe un correo electrónico válido.',
        over_request_rate_limit: 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.',
        network_error: 'No se pudo conectar con el servidor. Inténtalo de nuevo en unos momentos.',
        generic: 'No se pudo completar la solicitud. Inténtalo de nuevo.',
      },
      recoverySent: 'Si existe una cuenta con este correo, recibirás las instrucciones para restablecer la contraseña.',
    },
    flashcards: {
      title: 'Flashcards',
      loading: 'Cargando barajas...',
      loadError: 'No se pudieron cargar las barajas. Intenta de nuevo.',
      retry: 'Intentar de nuevo',
      emptyDecks: 'No hay barajas disponibles en este momento.',
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
        practiceTrail: 'Practicar en la ruta',
        retry: 'Estudiar de nuevo',
        scoreSuffix: 'tarjetas',
        perfect: '¡Todas las tarjetas completadas!',
        correctFeedback: '¡Correcto!',
        correctAnswer: (answer) => `R: ${answer}`,
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
        retry: 'Intentar de nuevo',
        suggested: 'Sugerida para seguir',
        completed: 'Completada',
      },
      unitPath: {
        subtitle: 'Elige una lección para continuar.',
        loading: 'Cargando lecciones...',
        loadError: 'No se pudieron cargar las lecciones. Intenta de nuevo.',
        retry: 'Intentar de nuevo',
        suggested: 'Sugerida para seguir',
        completed: 'Completada',
      },
      lesson: {
        loading: 'Cargando lección...',
        leaveConfirm: '¿Salir de la lección? Se perderá tu progreso en esta lección.',
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
          openImage: 'Abrir imagen en pantalla completa',
          closeImage: 'Cerrar imagen',
          zoomIn: 'Acercar imagen',
          zoomOut: 'Alejar imagen',
          resetZoom: 'Restablecer zoom',
          inputLabel: 'Escribe el nombre de la estructura',
          skip: 'Ver alternativas',
          answer: 'Responder',
          chooseCorrect: 'Elige la alternativa correcta',
          wrongTryChoices: 'No es esa. Elige entre las alternativas:',
          markerMissing: 'No se pudo cargar el marcador de esta pregunta.',
          correctFeedback: (points) => `¡Correcto! +${points} puntos`,
          wrongFeedback: (name) => `Incorrecto. La respuesta correcta era ${name}.`,
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
          wrongFeedback: (answer) => `Incorrecto. La respuesta correcta era "${answer}".`,
        },
        associacao: {
          placeholder: 'Selecciona la descripción',
          check: 'Comprobar asociaciones',
          continueLabel: 'Continuar',
          allCorrect: '¡Todas las asociaciones son correctas!',
          someWrong: (correct, total) =>
            `Acertaste ${correct} de ${total}. Revisa las respuestas correctas abajo.`,
          correctAnswer: (description) => `Correcta: ${description}`,
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
        reviewFlashcards: 'Repasar con flashcards',
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
      backToDashboard: 'Voltar ao painel',
      footerLine1: 'Projeto COIL UFSM – UST • 2026',
      footerLine2: 'Anatomia Veterinária',
      nav: {
        label: 'Navegação principal',
        open: 'Abrir menu',
        close: 'Fechar menu',
        home: 'Início',
        dashboard: 'Painel',
        lessons: 'Lições',
        flashcards: 'Flashcards',
        signIn: 'Entrar',
        signOut: 'Sair',
        breadcrumb: 'Trilha de navegação',
        unit: 'Unidade',
      },
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
    dashboard: {
      eyebrow: 'Painel de estudos',
      title: (name) => `Olá, ${name || 'estudante'}`,
      statsLabel: 'Seu progresso',
      nextLabel: 'Próxima atividade',
      nextTitle: 'Continue sua trilha de estudos',
      nextDescription: 'Avance pelas unidades de Anatomia Veterinária e responda uma questão de cada vez.',
      start: 'Começar a estudar',
      progressLabel: 'Seu progresso',
      progressTitle: 'Construa seu percurso',
      progressDescription: (completed, total) => {
        if (completed === 0) return 'Conclua sua primeira lição para começar a registrar seu progresso.'
        if (completed >= total) return 'Você concluiu todas as lições da trilha.'
        return `Você concluiu ${completed} de ${total} lições.`
      },
      optionsTitle: 'O que você quer estudar agora?',
      pathTitle: 'Continuar na trilha',
      pathDescription: 'Avance pelas unidades e responda uma questão de cada vez.',
      cardsTitle: 'Estudar com flashcards',
      cardsDescription: 'Revise estruturas e conceitos em sessões rápidas.',
      achievements: {
        label: 'Conquistas',
        title: 'Suas conquistas',
        unlockedCount: (unlocked, total) => `${unlocked}/${total}`,
        progress: (current, target) => `${current}/${target}`,
        unlocked: 'Conquistada',
        items: {
          firstLesson: { title: 'Primeira lição', description: 'Conclua sua primeira lição.' },
          firstUnit: { title: 'Unidade completa', description: 'Termine todas as lições de uma unidade.' },
          perfectLessons: { title: 'Sem errar', description: 'Termine 10 lições sem errar nenhuma questão.' },
          weekStreak: { title: 'Uma semana seguida', description: 'Estude 7 dias seguidos.' },
          fullTrail: { title: 'Trilha completa', description: 'Conclua todas as lições disponíveis.' },
        },
      },
      firstAccessEyebrow: 'Seu primeiro passo',
      firstAccessTitle: 'Comece seu percurso de estudos',
      firstAccessDescription: 'Escolha uma unidade, responda uma lição e comece a construir seu progresso em Anatomia Veterinária.',
      firstAccessAction: 'Escolher uma unidade',
      loadingProgress: 'Carregando seu progresso...',
      progressError: 'Não foi possível carregar seu progresso.',
      retry: 'Tentar novamente',
      historyTitle: 'Histórico recente',
      points: (points) => `${points} pts`,
      historyEmpty: 'Suas respostas aparecerão aqui depois que você concluir uma lição.',
      reviewTitle: 'Revisar erros',
      reviewDescription: (count) => (count === 1 ? 'Você tem 1 resposta para revisar.' : `Você tem ${count} respostas para revisar.`),
      correct: 'Certa',
      incorrect: 'Para revisar',
      reviewAction: 'Revisar agora',
      reviewLoading: 'Carregando sua revisão...',
      reviewError: 'Não foi possível carregar a revisão. Tente novamente.',
      reviewEmptyTitle: 'Nenhum erro para revisar',
      reviewSessionTitle: 'Vamos revisar seus erros',
      reviewSessionDescription: 'Responda novamente às questões que precisam de mais atenção.',
      reviewCompleteTitle: 'Revisão concluída!',
      reviewCompleteDescription: 'Você revisou todas as questões disponíveis. Continue estudando para reforçar seu conhecimento.',
    },
    auth: {
      signUpEyebrow: 'Seu progresso começa aqui',
      signInEyebrow: 'Que bom ver você de novo',
      recoveryEyebrow: 'Acesso à sua conta',
      signUpTitle: 'Crie seu perfil',
      signInTitle: 'Entre para continuar',
      recoveryTitle: 'Recupere sua senha',
      signUpDescription: 'Salve suas respostas e acompanhe sua evolução na trilha.',
      signInDescription: 'Retome seus estudos exatamente de onde parou.',
      recoveryDescription: 'Informe seu e-mail e enviaremos as instruções para voltar a estudar.',
      name: 'Nome',
      email: 'E-mail',
      password: 'Senha',
      createAccount: 'Criar conta',
      signIn: 'Entrar',
      sendRecovery: 'Enviar instruções',
      loading: 'Carregando...',
      forgotPassword: 'Esqueci minha senha',
      alreadyHaveAccount: 'Já tem uma conta?',
      noAccount: 'Ainda não tem uma conta?',
      enter: 'Entrar',
      create: 'Criar conta',
      legal: 'Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade.',
      backToLogin: 'Voltar para o login',
      validationName: 'Digite seu nome para criar o perfil.',
      validationEmail: 'Digite seu e-mail para continuar.',
      validationFields: 'Preencha e-mail e senha para continuar.',
      errors: {
        invalid_credentials: 'E-mail ou senha incorretos.',
        email_exists: 'Já existe uma conta com este e-mail.',
        user_already_exists: 'Já existe uma conta com este e-mail.',
        weak_password: 'A senha precisa ter pelo menos 6 caracteres.',
        email_address_invalid: 'Digite um e-mail válido.',
        over_request_rate_limit: 'Muitas tentativas. Espere alguns minutos e tente de novo.',
        network_error: 'Não foi possível conectar ao servidor. Tente de novo em instantes.',
        generic: 'Não foi possível concluir. Tente de novo.',
      },
      recoverySent: 'Se existir uma conta com este e-mail, você receberá as instruções para redefinir a senha.',
    },
    flashcards: {
      title: 'Flashcards',
      loading: 'Carregando baralhos...',
      loadError: 'Não foi possível carregar os baralhos. Tente novamente.',
      retry: 'Tentar novamente',
      emptyDecks: 'Não há baralhos disponíveis no momento.',
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
        practiceTrail: 'Praticar na trilha',
        retry: 'Estudar de novo',
        scoreSuffix: 'cartões',
        perfect: 'Todos os cartões concluídos!',
        correctFeedback: 'Certo!',
        correctAnswer: (answer) => `R: ${answer}`,
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
        retry: 'Tentar novamente',
        suggested: 'Sugerida para continuar',
        completed: 'Concluída',
      },
      unitPath: {
        subtitle: 'Escolha uma lição para continuar.',
        loading: 'Carregando lições...',
        loadError: 'Não foi possível carregar as lições. Tente novamente.',
        retry: 'Tentar novamente',
        suggested: 'Sugerida para continuar',
        completed: 'Concluída',
      },
      lesson: {
        loading: 'Carregando lição...',
        leaveConfirm: 'Sair da lição? Seu progresso nesta lição será perdido.',
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
          openImage: 'Abrir imagem em tela cheia',
          closeImage: 'Fechar imagem',
          zoomIn: 'Aumentar zoom',
          zoomOut: 'Diminuir zoom',
          resetZoom: 'Restabelecer zoom',
          inputLabel: 'Digite o nome da estrutura',
          skip: 'Ver alternativas',
          answer: 'Responder',
          chooseCorrect: 'Escolha a alternativa certa',
          wrongTryChoices: 'Não é essa. Escolha entre as alternativas:',
          markerMissing: 'Não foi possível carregar o marcador desta questão.',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (name) => `Incorreto. A resposta certa é ${name}.`,
        },
        verdadeiroFalso: {
          false: 'Falso',
          true: 'Verdadeiro',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) =>
            `Incorreto. A afirmação é ${answer ? 'verdadeira' : 'falsa'}.`,
        },
        completar: {
          answer: 'Responder',
          correctFeedback: (points) => `Certo! +${points} pontos`,
          wrongFeedback: (answer) => `Incorreto. A resposta certa é "${answer}".`,
        },
        associacao: {
          placeholder: 'Escolha a descrição',
          check: 'Conferir associações',
          continueLabel: 'Continuar',
          allCorrect: 'Todas as associações estão certas!',
          someWrong: (correct, total) =>
            `Você acertou ${correct} de ${total}. Veja as respostas certas abaixo.`,
          correctAnswer: (description) => `Certa: ${description}`,
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
        reviewFlashcards: 'Revisar com flashcards',
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
