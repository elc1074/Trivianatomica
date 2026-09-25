export const osteologiaMembroPelvico = {
  id: 'osteologia-membro-pelvico',
  orderIndex: 0,
  es: {
    title: 'Osteología del miembro pélvico',
    lessons: [
      {
        id: 'membro-pelvico-huesos',
        title: 'Huesos del miembro pélvico',
        exercises: [
          { format: 'seta', id: 'coxal', name: 'Coxal', distractors: ['Fémur', 'Escápula', 'Húmero'], diagram: 'pelvic-limb' },
          { format: 'seta', id: 'femur', name: 'Fémur', distractors: ['Tibia', 'Húmero', 'Radio'], diagram: 'pelvic-limb' },
          { format: 'seta', id: 'tibia', name: 'Tibia', distractors: ['Fémur', 'Fíbula', 'Coxal'], diagram: 'pelvic-limb' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-trocanter',
            statement: 'El trocánter mayor del fémur es una eminencia de tipo articular.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-femur',
            sentence:
              'La cabeza del fémur siempre va hacia ___, lo que determina si es derecho o izquierdo.',
            answer: 'medial',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-coxal-fusion',
            statement: 'El coxal se forma por la fusión de tres huesos: ilion, isquion y pubis.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cavidad-acetabular',
            statement: 'El hueso coxal participa en la formación de la cavidad acetabular.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-coxal-fusion',
            sentence: 'El ilion, el isquion y el pubis se fusionan en el ___.',
            answer: 'acetábulo',
          },
          {
            format: 'associacao',
            id: 'assoc-coxal-partes',
            pairs: [
              { term: 'Ilion', description: 'Porción craneal del coxal, termina en la cresta ilíaca' },
              { term: 'Isquion', description: 'Porción caudal del coxal, presenta el tuber isquiático' },
              {
                term: 'Pubis',
                description: 'Porción ventral del coxal, junto al isquion forma el agujero obturador',
              },
            ],
          },
        ],
      },
      {
        id: 'membro-pelvico-relieves',
        title: 'Relieves óseos',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-tuberosidade',
            statement: 'La tuberosidad tibial se prolonga hacia la diáfisis de la tibia.',
            answer: true,
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
            format: 'verdadeiro-falso',
            id: 'vf-patela-sesamoideo',
            statement: 'La patela es un hueso sesamoideo que se articula con la tróclea del fémur.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-troclea',
            sentence: 'La tróclea femoral es la superficie donde se desliza la ___.',
            answer: 'patela',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cresta-tibial',
            statement: 'La cresta tibial es el sitio de inserción del ligamento patelar.',
            answer: true,
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
        id: 'membro-pelvico-tarso',
        title: 'Tarso, metatarso y falanges',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-calcaneo-corvejon',
            statement:
              'El calcáneo presenta un tuber calcáneo, que corresponde a la punta del corvejón.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-astragalo',
            sentence: 'El hueso tarsal que articula con la tibia se llama ___.',
            answer: 'astrágalo',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-metatarsianos',
            statement:
              'En el perro, el miembro pélvico presenta generalmente 4 huesos metatarsianos principales.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-falange-ungueal',
            sentence: 'La falange distal sostiene al proceso ___, donde se inserta la garra.',
            answer: 'ungueal',
          },
          {
            format: 'associacao',
            id: 'assoc-tarso-digitos',
            pairs: [
              { term: 'Astrágalo', description: 'Articula con la tibia, tarsal más proximal' },
              { term: 'Calcáneo', description: 'Presenta el tuber calcáneo, punta del corvejón' },
              { term: 'Metatarsianos', description: 'Huesos largos entre el tarso y las falanges' },
              { term: 'Falange distal', description: 'Sostiene el proceso ungueal' },
            ],
          },
        ],
      },
    ],
  },
  pt: {
    title: 'Osteologia do membro pélvico',
    lessons: [
      {
        id: 'membro-pelvico-huesos',
        title: 'Ossos do membro pélvico',
        exercises: [
          { format: 'seta', id: 'coxal', name: 'Coxal', distractors: ['Fêmur', 'Escápula', 'Úmero'], diagram: 'pelvic-limb' },
          { format: 'seta', id: 'femur', name: 'Fêmur', distractors: ['Tíbia', 'Úmero', 'Rádio'], diagram: 'pelvic-limb' },
          { format: 'seta', id: 'tibia', name: 'Tíbia', distractors: ['Fêmur', 'Fíbula', 'Coxal'], diagram: 'pelvic-limb' },
          {
            format: 'verdadeiro-falso',
            id: 'vf-trocanter',
            statement: 'O trocânter maior do fêmur é uma eminência de tipo articular.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-femur',
            sentence:
              'A cabeça do fêmur sempre vai para ___, o que determina se é direito ou esquerdo.',
            answer: 'medial',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-coxal-fusion',
            statement: 'O coxal se forma pela fusão de três ossos: ílio, ísquio e púbis.',
            answer: true,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cavidad-acetabular',
            statement: 'O osso coxal participa da formação da cavidade acetabular.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-coxal-fusion',
            sentence: 'O ílio, o ísquio e o púbis se fundem no ___.',
            answer: 'acetábulo',
          },
          {
            format: 'associacao',
            id: 'assoc-coxal-partes',
            pairs: [
              { term: 'Ílio', description: 'Porção cranial do coxal, termina na crista ilíaca' },
              { term: 'Ísquio', description: 'Porção caudal do coxal, apresenta a tuberosidade isquiática' },
              {
                term: 'Púbis',
                description: 'Porção ventral do coxal, junto ao ísquio forma o forame obturado',
              },
            ],
          },
        ],
      },
      {
        id: 'membro-pelvico-relieves',
        title: 'Relevos ósseos',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-tuberosidade',
            statement: 'A tuberosidade tibial se prolonga para a diáfise da tíbia.',
            answer: true,
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
            format: 'verdadeiro-falso',
            id: 'vf-patela-sesamoideo',
            statement: 'A patela é um osso sesamoide que se articula com a tróclea do fêmur.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-troclea',
            sentence: 'A tróclea femoral é a superfície onde desliza a ___.',
            answer: 'patela',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-cresta-tibial',
            statement: 'A crista da tíbia é o local de inserção do ligamento patelar.',
            answer: true,
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
                description: 'Bolso, parte do trocânter maior',
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
        id: 'membro-pelvico-tarso',
        title: 'Tarso, metatarso e falanges',
        exercises: [
          {
            format: 'verdadeiro-falso',
            id: 'vf-calcaneo-corvejon',
            statement:
              'O calcâneo apresenta uma tuberosidade do calcâneo, que corresponde à ponta do jarrete.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-astragalo',
            sentence: 'O osso tarsal que articula com a tíbia se chama ___.',
            answer: 'tálus',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-metatarsianos',
            statement:
              'No cão, o membro pélvico apresenta geralmente 4 ossos metatarsianos principais.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-falange-ungueal',
            sentence: 'A falange distal sustenta o processo ___, onde se insere a garra.',
            answer: 'ungueal',
          },
          {
            format: 'associacao',
            id: 'assoc-tarso-digitos',
            pairs: [
              { term: 'Tálus', description: 'Articula com a tíbia, tarsal mais proximal' },
              { term: 'Calcâneo', description: 'Apresenta a tuberosidade do calcâneo, ponta do jarrete' },
              { term: 'Metatarsianos', description: 'Ossos longos entre o tarso e as falanges' },
              { term: 'Falange distal', description: 'Sustenta o processo ungueal' },
            ],
          },
        ],
      },
    ],
  },
}
