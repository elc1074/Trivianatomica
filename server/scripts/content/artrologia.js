export const artrologia = {
  id: 'artrologia',
  orderIndex: 1,
  es: {
    title: 'Artrología',
    lessons: [
      {
        id: 'artrologia-toracico',
        title: 'Articulaciones del miembro torácico',
        exercises: [
          {
            format: 'seta',
            id: 'hombro',
            name: 'Articulación humeral',
            distractors: ['Articulación cubital', 'Articulación coxofemoral', 'Articulación genual'],
            diagram: 'forelimb',
          },
          {
            format: 'seta',
            id: 'codo',
            name: 'Articulación cubital',
            distractors: ['Articulación humeral', 'Articulación coxofemoral', 'Articulación genual'],
            diagram: 'forelimb',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-humeral-tipo',
            statement: 'La articulación humeral es una articulación sinovial simple esfenoidal.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-biceps-surco',
            statement:
              'El tendón del músculo bíceps braquial recorre el surco intertubercular del húmero.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-humero-radial-tipo',
            statement: 'La articulación húmero-radial es de tipo trocoidea.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-radio-ulnar-rotacion',
            statement:
              'La articulación radio-ulnar cumple función de rotación, en pronación y supinación.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-humeral-labro',
            sentence: 'La articulación humeral posee un labro ___.',
            answer: 'glenoideo',
          },
          {
            format: 'completar',
            id: 'lacuna-cubital-tipo',
            sentence: 'La articulación cubital es una articulación sinovial ___.',
            answer: 'compuesta',
          },
          {
            format: 'completar',
            id: 'lacuna-humero-ulnar',
            sentence: 'La articulación húmero-ulnar es un gínglimo, con función de extensión y ___.',
            answer: 'flexión',
          },
          {
            format: 'associacao',
            id: 'assoc-cubital',
            pairs: [
              {
                term: 'Articulación húmero-ulnar',
                description: 'Gínglimo; función de extensión y flexión',
              },
              {
                term: 'Articulación húmero-radial',
                description: 'Elipsoide; función de extensión, flexión y rotación',
              },
              {
                term: 'Articulación radio-ulnar',
                description: 'Trocoidea; función de rotación (pronación-supinación)',
              },
            ],
          },
        ],
      },
      {
        id: 'artrologia-pelvico',
        title: 'Articulaciones del miembro pélvico',
        exercises: [
          {
            format: 'seta',
            id: 'cadera',
            name: 'Articulación coxofemoral',
            distractors: ['Articulación genual', 'Articulación humeral', 'Articulación cubital'],
            diagram: 'pelvic-limb',
          },
          {
            format: 'seta',
            id: 'rodilla',
            name: 'Articulación genual',
            distractors: ['Articulación coxofemoral', 'Articulación humeral', 'Articulación cubital'],
            diagram: 'pelvic-limb',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-coxofemoral-labro',
            statement: 'La articulación coxofemoral posee un labro acetabular.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-ligamento-redondo',
            statement:
              'El ligamento redondo de la cabeza femoral se describe en la articulación genual.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-coxofemoral-femur',
            sentence: 'La articulación coxofemoral está formada por el acetábulo y la cabeza del ___.',
            answer: 'fémur',
          },
          {
            format: 'completar',
            id: 'lacuna-genual-meniscos',
            sentence: 'La articulación genual posee los ___.',
            answer: 'meniscos',
          },
        ],
      },
      {
        id: 'artrologia-cabeza-columna',
        title: 'Articulaciones de la cabeza y columna',
        exercises: [
          {
            format: 'seta',
            id: 'atm',
            name: 'Articulación temporomandibular',
            distractors: ['Articulación atlanto-occipital', 'Articulación atlanto-axial', 'Articulación coxofemoral'],
            diagram: 'skull',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atlanto-occipital',
            statement:
              'La articulación atlanto-occipital es sinovial simple bicondilar y permite la flexión y extensión.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-diduccion',
            statement:
              'La diducción es un movimiento característico de los carnívoros y está limitada en los herbívoros.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-atm-disco',
            sentence:
              'En la articulación temporomandibular, el disco separa la cavidad articular en supradiscal e ___.',
            answer: 'infradiscal',
          },
          {
            format: 'completar',
            id: 'lacuna-nucal',
            sentence: 'El ligamento ___ está asociado a las vértebras.',
            answer: 'nucal',
          },
          {
            format: 'completar',
            id: 'lacuna-costovertebral',
            sentence: 'La articulación costovertebral es una articulación sinovial compuesta ___.',
            answer: 'plana',
          },
          {
            format: 'associacao',
            id: 'assoc-tipos-articulares',
            pairs: [
              { term: 'Articulación humeral', description: 'Sinovial simple esfenoidal' },
              { term: 'Articulación coxofemoral', description: 'Sinovial simple esfenoidal' },
              { term: 'Articulación atlanto-occipital', description: 'Sinovial simple bicondilar' },
              { term: 'Articulación atlanto-axial', description: 'Sinovial simple trocoideal' },
            ],
          },
          {
            format: 'associacao',
            id: 'assoc-columna',
            pairs: [
              {
                term: 'Entre cuerpos vertebrales',
                description: 'Cartilaginosa sínfisis, con discos intervertebrales',
              },
              {
                term: 'Entre procesos articulares vertebrales',
                description: 'Sinovial simple plana',
              },
              {
                term: 'Costotransversaria',
                description: 'Sinovial simple plana, con ligamento costotransverso',
              },
              {
                term: 'Interesternebrales, costocondrales e intercondrales',
                description: 'Cartilaginosas de tipo sincondrosis',
              },
            ],
          },
        ],
      },
    ],
  },
  pt: {
    title: 'Artrologia',
    lessons: [
      {
        id: 'artrologia-toracico',
        title: 'Articulações do membro torácico',
        exercises: [
          {
            format: 'seta',
            id: 'hombro',
            name: 'Articulação umeral',
            distractors: ['Articulação cubital', 'Articulação coxofemoral', 'Articulação genual'],
            diagram: 'forelimb',
          },
          {
            format: 'seta',
            id: 'codo',
            name: 'Articulação cubital',
            distractors: ['Articulação umeral', 'Articulação coxofemoral', 'Articulação genual'],
            diagram: 'forelimb',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-humeral-tipo',
            statement: 'A articulação umeral é uma articulação sinovial simples esfenoidal.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-biceps-surco',
            statement:
              'O tendão do músculo bíceps braquial percorre o sulco intertubercular do úmero.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-humero-radial-tipo',
            statement: 'A articulação úmero-radial é do tipo trocóidea.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-radio-ulnar-rotacion',
            statement:
              'A articulação rádio-ulnar cumpre função de rotação, em pronação e supinação.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-humeral-labro',
            sentence: 'A articulação umeral possui um lábio ___.',
            answer: 'glenoidal',
          },
          {
            format: 'completar',
            id: 'lacuna-cubital-tipo',
            sentence: 'A articulação cubital é uma articulação sinovial ___.',
            answer: 'composta',
          },
          {
            format: 'completar',
            id: 'lacuna-humero-ulnar',
            sentence: 'A articulação úmero-ulnar é um gínglimo, com função de extensão e ___.',
            answer: 'flexão',
          },
          {
            format: 'associacao',
            id: 'assoc-cubital',
            pairs: [
              {
                term: 'Articulação úmero-ulnar',
                description: 'Gínglimo; função de extensão e flexão',
              },
              {
                term: 'Articulação úmero-radial',
                description: 'Elipsoide; função de extensão, flexão e rotação',
              },
              {
                term: 'Articulação rádio-ulnar',
                description: 'Trocóidea; função de rotação (pronação-supinação)',
              },
            ],
          },
        ],
      },
      {
        id: 'artrologia-pelvico',
        title: 'Articulações do membro pélvico',
        exercises: [
          {
            format: 'seta',
            id: 'cadera',
            name: 'Articulação coxofemoral',
            distractors: ['Articulação genual', 'Articulação umeral', 'Articulação cubital'],
            diagram: 'pelvic-limb',
          },
          {
            format: 'seta',
            id: 'rodilla',
            name: 'Articulação genual',
            distractors: ['Articulação coxofemoral', 'Articulação umeral', 'Articulação cubital'],
            diagram: 'pelvic-limb',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-coxofemoral-labro',
            statement: 'A articulação coxofemoral possui um lábio acetabular.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-ligamento-redondo',
            statement:
              'O ligamento redondo da cabeça do fêmur é descrito na articulação genual.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-coxofemoral-femur',
            sentence: 'A articulação coxofemoral é formada pelo acetábulo e pela cabeça do ___.',
            answer: 'fêmur',
          },
          {
            format: 'completar',
            id: 'lacuna-genual-meniscos',
            sentence: 'A articulação genual possui os ___.',
            answer: 'meniscos',
          },
        ],
      },
      {
        id: 'artrologia-cabeza-columna',
        title: 'Articulações da cabeça e coluna',
        exercises: [
          {
            format: 'seta',
            id: 'atm',
            name: 'Articulação temporomandibular',
            distractors: ['Articulação atlanto-occipital', 'Articulação atlanto-axial', 'Articulação coxofemoral'],
            diagram: 'skull',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atlanto-occipital',
            statement:
              'A articulação atlanto-occipital é sinovial simples bicondilar e permite a flexão e extensão.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-diduccion',
            statement:
              'A didução é um movimento característico dos carnívoros e é limitada nos herbívoros.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-atm-disco',
            sentence:
              'Na articulação temporomandibular, o disco separa a cavidade articular em supradiscal e ___.',
            answer: 'infradiscal',
          },
          {
            format: 'completar',
            id: 'lacuna-nucal',
            sentence: 'O ligamento ___ está associado às vértebras.',
            answer: 'nucal',
          },
          {
            format: 'completar',
            id: 'lacuna-costovertebral',
            sentence: 'A articulação costovertebral é uma articulação sinovial composta ___.',
            answer: 'plana',
          },
          {
            format: 'associacao',
            id: 'assoc-tipos-articulares',
            pairs: [
              { term: 'Articulação umeral', description: 'Sinovial simples esfenoidal' },
              { term: 'Articulação coxofemoral', description: 'Sinovial simples esfenoidal' },
              { term: 'Articulação atlanto-occipital', description: 'Sinovial simples bicondilar' },
              { term: 'Articulação atlanto-axial', description: 'Sinovial simples trocoidal' },
            ],
          },
          {
            format: 'associacao',
            id: 'assoc-columna',
            pairs: [
              {
                term: 'Entre corpos vertebrais',
                description: 'Cartilaginosa sínfise, com discos intervertebrais',
              },
              {
                term: 'Entre processos articulares vertebrais',
                description: 'Sinovial simples plana',
              },
              {
                term: 'Costotransversária',
                description: 'Sinovial simples plana, com ligamento costotransverso',
              },
              {
                term: 'Interesternebrais, costocondrais e intercondrais',
                description: 'Cartilaginosas do tipo sincondrose',
              },
            ],
          },
        ],
      },
    ],
  },
}