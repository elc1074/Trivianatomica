export const anatomiaFelina = {
  id: 'anatomia-felina',
  orderIndex: 5,
  es: {
    title: 'Anatomía general del gato',
    lessons: [
      {
        id: 'anatomia-felina-geral',
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
            id: 'vf-coracao-gato',
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
  pt: {
    title: 'Anatomia geral do gato',
    lessons: [
      {
        id: 'anatomia-felina-geral',
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
}
