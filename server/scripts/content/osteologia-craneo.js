export const osteologiaCraneo = {
  id: 'osteologia-craneo',
  orderIndex: 2,
  es: {
    title: 'Osteología del cráneo',
    lessons: [
      {
        id: 'craneo-occipital-temporal-parietal',
        title: 'Occipital, temporal y parietal',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-suturas',
            statement:
              'El cráneo está formado por huesos planos que se articulan entre sí mediante articulaciones fibrosas de tipo sutura.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-suturas-movilidad',
            statement: 'Las suturas unen huesos craneales con poca movilidad.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-division',
            sentence: 'El cráneo se divide en Neurocráneo y ___.',
            answer: 'Esplacnocráneo',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-neurocraneo',
            statement:
              'El neurocráneo está formado, entre otros, por los huesos frontal, temporal, parietal, interparietal y occipital.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-occipital',
            pairs: [
              {
                term: 'Porción escamosa',
                description: 'Contiene la protuberancia occipital externa, en la parte más dorsal del hueso',
              },
              {
                term: 'Porciones laterales',
                description: 'Describen los cóndilos occipitales y los procesos yugulares',
              },
              {
                term: 'Porción basilar',
                description: 'Presenta 2 tubérculos musculares y un tubérculo faríngeo',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cresta-sagital',
            statement:
              'En los cachorros, el hueso parietal se fusiona con el hueso occipital y forman la cresta sagital externa.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-proceso-yugular',
            statement:
              'El proceso yugular del hueso occipital también se conoce como proceso paracondilar.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-temporal',
            pairs: [
              {
                term: 'Porción petrosa',
                description: 'Contiene las crestas petrosas y el meato acústico interno',
              },
              {
                term: 'Porción timpánica',
                description: 'Aloja el oído medio en las bullas timpánicas',
              },
              {
                term: 'Porción escamosa',
                description: 'Presenta el proceso retroarticular y la fosa mandibular',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-temporal-porciones',
            sentence: 'El hueso temporal presenta 3 porciones: petrosa, timpánica y ___.',
            answer: 'escamosa',
          },
          { format: 'seta', id: 'parietal', name: 'Hueso parietal', distractors: ['Hueso frontal', 'Hueso occipital', 'Hueso temporal'], diagram: 'skull' },
          {
            format: 'completar',
            id: 'lacuna-interparietal',
            sentence: 'El hueso interparietal se encuentra en la región ___ del neurocráneo.',
            answer: 'dorso-caudal',
          },
        ],
      },
      {
        id: 'craneo-frontal-esfenoides-etmoides',
        title: 'Frontal, esfenoides, pterigoides y etmoides',
        exercises: [
          { format: 'seta', id: 'frontal', name: 'Hueso frontal', distractors: ['Hueso parietal', 'Hueso temporal', 'Hueso nasal'], diagram: 'skull' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-frontal-neumatico',
            statement:
              'El hueso frontal es un hueso neumático porque posee un seno con aire en su interior.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-esfenoides-posicion',
            statement: 'El Presfenoides se ubica en una posición más caudal que el Basisfenoides.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-esfenoides-basisfenoides',
            sentence:
              'El ___ articula con la porción basilar del occipital y con parte de la porción petrosa del hueso temporal.',
            answer: 'Basisfenoides',
          },
          {
            format: 'associacao',
            id: 'assoc-esfenoides',
            pairs: [
              { term: 'Agujero óptico', description: 'Por aquí pasan los nervios ópticos' },
              { term: 'Silla turca', description: 'Aloja la hipófisis' },
              { term: 'Surco carotídeo', description: 'Se ubica a cada lado de la silla turca' },
              {
                term: 'Fisura orbitaria',
                description: 'Marca la unión entre el Presfenoides y el Basisfenoides',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-pterigoides-hamulo',
            sentence:
              'El hueso pterigoides posee un hámulo pterigoideo que actúa como una corredera ___.',
            answer: 'tendinosa',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-etmoides-concha',
            statement: 'La endoturbinalia I del hueso etmoides genera la concha nasal dorsal.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-etmoides-sutura',
            sentence:
              'La lámina perpendicular del hueso etmoides se une con el vómer formando una sutura llamada ___.',
            answer: 'esquindilesis',
          },
        ],
      },
      {
        id: 'craneo-esplacnocraneo-hioideo',
        title: 'Esplacnocráneo y aparato hioideo',
        exercises: [
          { format: 'seta', id: 'mandibula', name: 'Mandíbula', distractors: ['Maxilar', 'Hueso temporal', 'Hueso cigomático'], diagram: 'skull' },
          { format: 'seta', id: 'maxilar', name: 'Maxilar', distractors: ['Mandíbula', 'Hueso nasal', 'Hueso palatino'], diagram: 'skull' },
          { format: 'seta', id: 'nasal', name: 'Hueso nasal', distractors: ['Hueso frontal', 'Maxilar', 'Hueso incisivo'], diagram: 'skull' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-esplacnocraneo',
            statement:
              'El esplacnocráneo está formado por los huesos que constituyen las cavidades nasal y oral.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-palatino-paladar',
            sentence: 'La parte más caudal del paladar duro está formada por el hueso ___.',
            answer: 'palatino',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-maxilar-robusto',
            statement: 'El hueso maxilar es el hueso más robusto del esplacnocráneo.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-cigomatico-arco',
            sentence:
              'El hueso cigomático se articula hacia caudal con el proceso cigomático del hueso ___, formando el arco cigomático.',
            answer: 'temporal',
          },
          {
            format: 'associacao',
            id: 'assoc-mandibula',
            pairs: [
              {
                term: 'Fosa maseterica',
                description: 'Se encuentra por lateral, para el músculo masetero',
              },
              { term: 'Fosa pterigoidea', description: 'Se encuentra por medial en la rama' },
              {
                term: 'Agujero mandibular',
                description: 'Se observa por la cara medial de la rama',
              },
              {
                term: 'Línea milohioidea',
                description: 'Se observa solamente por medial, en el cuerpo de la mandíbula',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-hioideo-funcion',
            sentence: 'La función del aparato hioideo es estabilizar la lengua y la ___.',
            answer: 'laringe',
          },
        ],
      },
    ],
  },
  pt: {
    title: 'Osteologia do crânio',
    lessons: [
      {
        id: 'craneo-occipital-temporal-parietal',
        title: 'Occipital, temporal e parietal',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-suturas',
            statement:
              'O crânio é formado por ossos planos que se articulam entre si por meio de articulações fibrosas do tipo sutura.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-suturas-movilidad',
            statement: 'As suturas unem ossos cranianos com pouca mobilidade.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-division',
            sentence: 'O crânio se divide em Neurocrânio e ___.',
            answer: 'Esplancnocrânio',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-neurocraneo',
            statement:
              'O neurocrânio é formado, entre outros, pelos ossos frontal, temporal, parietal, interparietal e occipital.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-occipital',
            pairs: [
              {
                term: 'Porção escamosa',
                description: 'Contém a protuberância occipital externa, na parte mais dorsal do osso',
              },
              {
                term: 'Porções laterais',
                description: 'Descrevem os côndilos occipitais e os processos jugulares',
              },
              {
                term: 'Porção basilar',
                description: 'Apresenta 2 tubérculos musculares e um tubérculo faríngeo',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cresta-sagital',
            statement:
              'Nos filhotes, o osso parietal se funde com o osso occipital e formam a crista sagital externa.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-proceso-yugular',
            statement:
              'O processo jugular do osso occipital também é conhecido como processo paracondilar.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-temporal',
            pairs: [
              {
                term: 'Porção petrosa',
                description: 'Contém as cristas petrosas e o meato acústico interno',
              },
              {
                term: 'Porção timpânica',
                description: 'Aloja a orelha média nas bulas timpânicas',
              },
              {
                term: 'Porção escamosa',
                description: 'Apresenta o processo retroarticular e a fossa mandibular',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-temporal-porciones',
            sentence: 'O osso temporal apresenta 3 porções: petrosa, timpânica e ___.',
            answer: 'escamosa',
          },
          { format: 'seta', id: 'parietal', name: 'Osso parietal', distractors: ['Osso frontal', 'Osso occipital', 'Osso temporal'], diagram: 'skull' },
          {
            format: 'completar',
            id: 'lacuna-interparietal',
            sentence: 'O osso interparietal se encontra na região ___ do neurocrânio.',
            answer: 'dorso-caudal',
          },
        ],
      },
      {
        id: 'craneo-frontal-esfenoides-etmoides',
        title: 'Frontal, esfenoide, pterigoide e etmoide',
        exercises: [
          { format: 'seta', id: 'frontal', name: 'Osso frontal', distractors: ['Osso parietal', 'Osso temporal', 'Osso nasal'], diagram: 'skull' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-frontal-neumatico',
            statement:
              'O osso frontal é um osso pneumático porque possui um seio com ar em seu interior.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-esfenoides-posicion',
            statement: 'O Pré-esfenoide se localiza em uma posição mais caudal que o Basisfenoide.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-esfenoides-basisfenoides',
            sentence:
              'O ___ articula-se com a porção basilar do occipital e com parte da porção petrosa do osso temporal.',
            answer: 'Basisfenoide',
          },
          {
            format: 'associacao',
            id: 'assoc-esfenoides',
            pairs: [
              { term: 'Forame óptico', description: 'Por aqui passam os nervos ópticos' },
              { term: 'Sela túrcica', description: 'Aloja a hipófise' },
              { term: 'Sulco carotídeo', description: 'Localiza-se de cada lado da sela túrcica' },
              {
                term: 'Fissura orbital',
                description: 'Marca a união entre o Pré-esfenoide e o Basisfenoide',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-pterigoides-hamulo',
            sentence:
              'O osso pterigoide possui um hâmulo pterigóideo que atua como um sulco ___.',
            answer: 'tendíneo',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-etmoides-concha',
            statement: 'A endoturbina I do osso etmoide origina a concha nasal dorsal.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-etmoides-sutura',
            sentence:
              'A lâmina perpendicular do osso etmoide se une ao vômer formando uma sutura chamada ___.',
            answer: 'esquindilese',
          },
        ],
      },
      {
        id: 'craneo-esplacnocraneo-hioideo',
        title: 'Esplancnocrânio e aparelho hioide',
        exercises: [
          { format: 'seta', id: 'mandibula', name: 'Mandíbula', distractors: ['Maxilar', 'Osso temporal', 'Osso zigomático'], diagram: 'skull' },
          { format: 'seta', id: 'maxilar', name: 'Maxilar', distractors: ['Mandíbula', 'Osso nasal', 'Osso palatino'], diagram: 'skull' },
          { format: 'seta', id: 'nasal', name: 'Osso nasal', distractors: ['Osso frontal', 'Maxilar', 'Osso incisivo'], diagram: 'skull' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-esplacnocraneo',
            statement:
              'O esplancnocrânio é formado pelos ossos que constituem as cavidades nasal e oral.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-palatino-paladar',
            sentence: 'A parte mais caudal do palato duro é formada pelo osso ___.',
            answer: 'palatino',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-maxilar-robusto',
            statement: 'O osso maxilar é o osso mais robusto do esplancnocrânio.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-cigomatico-arco',
            sentence:
              'O osso zigomático se articula caudalmente com o processo zigomático do osso ___, formando o arco zigomático.',
            answer: 'temporal',
          },
          {
            format: 'associacao',
            id: 'assoc-mandibula',
            pairs: [
              {
                term: 'Fossa massetérica',
                description: 'Encontra-se por lateral, para o músculo masseter',
              },
              { term: 'Fossa pterigóidea', description: 'Encontra-se por medial no ramo' },
              {
                term: 'Forame mandibular',
                description: 'É observado pela face medial do ramo',
              },
              {
                term: 'Linha milo-hióidea',
                description: 'É observada somente por medial, no corpo da mandíbula',
              },
            ],
          },
          {
            format: 'completar',
            id: 'lacuna-hioideo-funcion',
            sentence: 'A função do aparelho hioide é estabilizar a língua e a ___.',
            answer: 'laringe',
          },
        ],
      },
    ],
  },
}
