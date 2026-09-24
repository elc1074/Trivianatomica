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
            format: 'verdadeiro-falso',
            id: 'vf-codo-flexion-extension',
            statement:
              'La articulación del codo permite principalmente movimientos de flexión y extensión.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-escapula-plano',
            statement:
              'La escápula se clasifica como un hueso plano y participa en la formación del cinturón torácico.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-escapula-espina',
            sentence: 'En la cara lateral de la escápula se destaca la ___ de la escápula.',
            answer: 'espina',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-radio-carga',
            statement:
              'En el antebrazo, el radio se articula con los huesos del carpo y soporta gran parte de la carga.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-carpo-accesorio',
            statement:
              'El hueso accesorio del carpo se localiza en la región palmar/lateral y actúa como punto de palanca.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-clavicula-rudimentaria',
            statement:
              'En perros y gatos, la clavícula es rudimentaria y no articula directamente con el esqueleto axial.',
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
          {
            format: 'verdadeiro-falso',
            id: 'vf-meniscos-congruencia',
            statement:
              'Los meniscos de la articulación genual aumentan la congruencia articular y distribuyen cargas.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-cruzados',
            sentence:
              'Los ligamentos cruzados limitan el desplazamiento ___ de la tibia respecto al fémur.',
            answer: 'craneocaudal',
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
            format: 'verdadeiro-falso',
            id: 'vf-atlantoaxial-rotacion',
            statement: 'La articulación atlantoaxial se relaciona principalmente con la rotación de la cabeza.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atm-bisagra',
            statement:
              'La articulación temporomandibular de perros y gatos permite apertura y cierre de la boca, con escasa lateralidad.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-sacroiliaca',
            sentence: 'La articulación sacroilíaca conecta el sacro con el hueso ___.',
            answer: 'coxal',
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
            format: 'verdadeiro-falso',
            id: 'vf-codo-flexion-extension',
            statement:
              'A articulação do cotovelo permite principalmente movimentos de flexão e extensão.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-escapula-plano',
            statement:
              'A escápula é classificada como um osso plano e participa da formação da cintura torácica.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-escapula-espina',
            sentence: 'Na face lateral da escápula se destaca a ___ da escápula.',
            answer: 'espinha',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-radio-carga',
            statement:
              'No antebraço, o rádio se articula com os ossos do carpo e suporta grande parte da carga.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-carpo-accesorio',
            statement:
              'O osso acessório do carpo se localiza na região palmar/lateral e atua como ponto de alavanca.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-clavicula-rudimentaria',
            statement:
              'Em cães e gatos, a clavícula é rudimentar e não articula diretamente com o esqueleto axial.',
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
          {
            format: 'verdadeiro-falso',
            id: 'vf-meniscos-congruencia',
            statement:
              'Os meniscos da articulação genual aumentam a congruência articular e distribuem cargas.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-cruzados',
            sentence:
              'Os ligamentos cruzados limitam o deslocamento ___ da tíbia em relação ao fêmur.',
            answer: 'craniocaudal',
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
            format: 'verdadeiro-falso',
            id: 'vf-atlantoaxial-rotacion',
            statement: 'A articulação atlantoaxial se relaciona principalmente com a rotação da cabeça.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atm-bisagra',
            statement:
              'A articulação temporomandibular de cães e gatos permite abertura e fechamento da boca, com pouca lateralidade.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-sacroiliaca',
            sentence: 'A articulação sacroilíaca conecta o sacro com o osso ___.',
            answer: 'coxal',
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
