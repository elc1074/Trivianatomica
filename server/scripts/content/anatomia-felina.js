export const anatomiaFelina = {
  id: 'anatomia-felina',
  orderIndex: 4,
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
            format: 'verdadeiro-falso',
            id: 'vf-anatomia-topografica',
            statement:
              'La anatomía topográfica relaciona estructuras con regiones corporales palpables y referencias clínicas.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-craneal',
            sentence: 'En cuadrúpedos, el término craneal indica una dirección orientada hacia la ___.',
            answer: 'cabeza',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-planos-regiones',
            statement:
              'Los planos y las regiones corporales no sirven como referencias para localizar estructuras anatómicas.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-comparada-variaciones',
            statement:
              'El perro y el gato presentan una anatomía idéntica, sin variaciones entre las dos especies.',
            answer: false,
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
            format: 'verdadeiro-falso',
            id: 'vf-anatomia-topografica',
            statement:
              'A anatomia topográfica relaciona estruturas com regiões corporais palpáveis e referências clínicas.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-craneal',
            sentence: 'Em quadrúpedes, o termo cranial indica uma direção orientada para a ___.',
            answer: 'cabeça',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-planos-regiones',
            statement:
              'Os planos e as regiões corporais não servem como referências para localizar estruturas anatômicas.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-comparada-variaciones',
            statement:
              'O cão e o gato apresentam anatomia idêntica, sem variações entre as duas espécies.',
            answer: false,
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
