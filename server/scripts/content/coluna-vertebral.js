export const colunaVertebral = {
  id: 'coluna-vertebral',
  orderIndex: 3,
  es: {
    title: 'Columna vertebral',
    lessons: [
      {
        id: 'columna-vertebra-tipo-cervical',
        title: 'Vértebra tipo, atlas y axis',
        exercises: [
          {
            format: 'seta',
            id: 'atlas',
            name: 'Atlas',
            distractors: ['Axis', 'Vértebra torácica', 'Vértebra lumbar'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'axis',
            name: 'Axis',
            distractors: ['Atlas', 'Vértebra torácica', 'Vértebra lumbar'],
            diagram: 'spine',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-caras-articulares',
            statement:
              'La cara articular craneal del cuerpo vertebral es cóncava, mientras que la caudal es convexa.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-pediculo',
            sentence:
              'El ___ es la porción ventral del arco vertebral, lugar de unión con el cuerpo de la vértebra.',
            answer: 'pedículo',
          },
          {
            format: 'associacao',
            id: 'assoc-vertebra-tipo',
            pairs: [
              {
                term: 'Cuerpo',
                description: 'Presenta cara articular craneal convexa y cara articular caudal cóncava',
              },
              {
                term: 'Pedículo',
                description: 'Porción ventral, lugar de unión del arco con el cuerpo de la vértebra',
              },
              {
                term: 'Lámina',
                description:
                  'Porción dorsal, lugar de unión del proceso transverso con el proceso espinoso',
              },
              {
                term: 'Disco intervertebral',
                description: 'Estructura fibrocartilaginosa entre los cuerpos vertebrales',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-formula-cervical',
            statement:
              'La fórmula vertebral del segmento cervical corresponde a C8 en los mamíferos domésticos.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-tuberculo-ventral',
            sentence: 'De C3 a C6 se describe, en el cuerpo vertebral, un tubérculo ___.',
            answer: 'ventral',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-c7-forame',
            statement: 'La séptima vértebra cervical (C7) presenta agujero transverso.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atlas-nervos',
            statement:
              'Por el agujero vertebral lateral del atlas emerge el primer par de nervios espinales cervicales.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-atlas-fosseta',
            sentence: 'El atlas presenta una fosita dental que recibe al proceso ___ del axis.',
            answer: 'odontoide',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-axis-transversos',
            statement: 'En el axis, los procesos transversos están orientados hacia craneal.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-axis-espinhoso',
            sentence:
              'El axis presenta un proceso espinoso bien desarrollado, orientado hacia ___.',
            answer: 'craneal',
          },
          {
            format: 'associacao',
            id: 'assoc-atlas-axis',
            pairs: [
              { term: 'Atlas', description: 'Primera vértebra del segmento cervical' },
              { term: 'Alas', description: 'Procesos transversos del atlas' },
              { term: 'Fosita dental', description: 'Recibe al proceso odontoide del axis' },
              {
                term: 'Proceso odontoide',
                description: 'Prolongación del cuerpo del axis hacia craneal',
              },
            ],
          },
        ],
      },
      {
        id: 'columna-toracico-lumbar-sacro',
        title: 'Segmentos torácico, lumbar, sacro y coccígeo',
        exercises: [
          {
            format: 'seta',
            id: 'toracica',
            name: 'Vértebra torácica',
            distractors: ['Vértebra lumbar', 'Atlas', 'Sacro'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'lumbar',
            name: 'Vértebra lumbar',
            distractors: ['Vértebra torácica', 'Sacro', 'Axis'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'sacro',
            name: 'Sacro',
            distractors: ['Vértebra lumbar', 'Vértebra torácica', 'Atlas'],
            diagram: 'spine',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-t11-anticlinal',
            statement: 'La vértebra T11 corresponde a la vértebra anticlinal del segmento torácico.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-toracico-mamilares',
            sentence: 'Desde T2/T3 hasta las vértebras lumbares se describen los procesos ___.',
            answer: 'mamilares',
          },
          {
            format: 'completar',
            id: 'lacuna-formula-lombar',
            sentence: 'El segmento lumbar de la columna vertebral está compuesto por ___ vértebras.',
            answer: 'siete',
          },
          {
            format: 'completar',
            id: 'lacuna-lombar-tamanho',
            sentence:
              'En el segmento lumbar, los procesos transversos alcanzan su mayor ___ de toda la columna vertebral.',
            answer: 'tamaño',
          },
          {
            format: 'completar',
            id: 'lacuna-sacro-linhas',
            sentence: 'En el sacro se describen unas líneas ___.',
            answer: 'transversas',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-costelas-esternais',
            statement:
              'De los 13 pares de costillas, 9 pares corresponden a costillas esternales o verdaderas.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-torax',
            pairs: [
              {
                term: 'Esternón',
                description: 'Compuesto por 8 esternebras, un manubrio esternal y el cartílago xifoideo',
              },
              { term: 'Costilla', description: 'Presenta cabeza, cuello y tubérculo costal' },
              { term: 'Costillas asternales', description: '3 pares, corresponden a las costillas falsas' },
              {
                term: 'Costilla flotante',
                description: '1 par, dentro del total de 13 pares de costillas',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-caudais-tamanho',
            statement:
              'Las vértebras coccígeas van disminuyendo de a poco de tamaño hasta quedar reducidas a un cilindro óseo.',
            answer: true,
          },
        ],
      },
    ],
  },
  pt: {
    title: 'Coluna vertebral',
    lessons: [
      {
        id: 'columna-vertebra-tipo-cervical',
        title: 'Vértebra tipo, atlas e áxis',
        exercises: [
          {
            format: 'seta',
            id: 'atlas',
            name: 'Atlas',
            distractors: ['Áxis', 'Vértebra torácica', 'Vértebra lombar'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'axis',
            name: 'Áxis',
            distractors: ['Atlas', 'Vértebra torácica', 'Vértebra lombar'],
            diagram: 'spine',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-caras-articulares',
            statement:
              'A face articular cranial do corpo vertebral é côncava, enquanto a caudal é convexa.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-pediculo',
            sentence:
              'O ___ é a porção ventral do arco vertebral, local de união com o corpo da vértebra.',
            answer: 'pedículo',
          },
          {
            format: 'associacao',
            id: 'assoc-vertebra-tipo',
            pairs: [
              {
                term: 'Corpo',
                description: 'Apresenta face articular cranial convexa e face articular caudal côncava',
              },
              {
                term: 'Pedículo',
                description: 'Porção ventral, local de união do arco com o corpo da vértebra',
              },
              {
                term: 'Lâmina',
                description:
                  'Porção dorsal, local de união do processo transverso com o processo espinhoso',
              },
              {
                term: 'Disco intervertebral',
                description: 'Estrutura fibrocartilaginosa entre os corpos vertebrais',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-formula-cervical',
            statement:
              'A fórmula vertebral do segmento cervical corresponde a C8 nos mamíferos domésticos.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-tuberculo-ventral',
            sentence: 'De C3 a C6 se descreve, no corpo vertebral, um tubérculo ___.',
            answer: 'ventral',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-c7-forame',
            statement: 'A sétima vértebra cervical (C7) apresenta forame transverso.',
            answer: false,
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-atlas-nervos',
            statement:
              'Pelo forame vertebral lateral do atlas emerge o primeiro par de nervos espinhais cervicais.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-atlas-fosseta',
            sentence: 'O atlas apresenta uma fosseta do dente que recebe o processo ___ do áxis.',
            answer: 'odontoide',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-axis-transversos',
            statement: 'No áxis, os processos transversos estão orientados para cranial.',
            answer: false,
          },
          {
            format: 'completar',
            id: 'lacuna-axis-espinhoso',
            sentence: 'O áxis apresenta um processo espinhoso bem desenvolvido, orientado para ___.',
            answer: 'cranial',
          },
          {
            format: 'associacao',
            id: 'assoc-atlas-axis',
            pairs: [
              { term: 'Atlas', description: 'Primeira vértebra do segmento cervical' },
              { term: 'Asas', description: 'Processos transversos do atlas' },
              { term: 'Fosseta do dente', description: 'Recebe o processo odontoide do áxis' },
              {
                term: 'Processo odontoide',
                description: 'Prolongamento do corpo do áxis para cranial',
              },
            ],
          },
        ],
      },
      {
        id: 'columna-toracico-lumbar-sacro',
        title: 'Segmentos torácico, lombar, sacro e coccígeo',
        exercises: [
          {
            format: 'seta',
            id: 'toracica',
            name: 'Vértebra torácica',
            distractors: ['Vértebra lombar', 'Atlas', 'Sacro'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'lumbar',
            name: 'Vértebra lombar',
            distractors: ['Vértebra torácica', 'Sacro', 'Áxis'],
            diagram: 'spine',
          },
          {
            format: 'seta',
            id: 'sacro',
            name: 'Sacro',
            distractors: ['Vértebra lombar', 'Vértebra torácica', 'Atlas'],
            diagram: 'spine',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-t11-anticlinal',
            statement: 'A vértebra T11 corresponde à vértebra anticlinal do segmento torácico.',
            answer: true,
          },
          {
            format: 'completar',
            id: 'lacuna-toracico-mamilares',
            sentence: 'De T2/T3 até as vértebras lombares se descrevem os processos ___.',
            answer: 'mamilares',
          },
          {
            format: 'completar',
            id: 'lacuna-formula-lombar',
            sentence: 'O segmento lombar da coluna vertebral é composto por ___ vértebras.',
            answer: 'sete',
          },
          {
            format: 'completar',
            id: 'lacuna-lombar-tamanho',
            sentence:
              'No segmento lombar, os processos transversos atingem seu maior ___ de toda a coluna vertebral.',
            answer: 'tamanho',
          },
          {
            format: 'completar',
            id: 'lacuna-sacro-linhas',
            sentence: 'No sacro se descrevem umas linhas ___.',
            answer: 'transversas',
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-costelas-esternais',
            statement:
              'Dos 13 pares de costelas, 9 pares correspondem a costelas esternais ou verdadeiras.',
            answer: true,
          },
          {
            format: 'associacao',
            id: 'assoc-torax',
            pairs: [
              {
                term: 'Esterno',
                description: 'Composto por 8 esternebras, um manúbrio esternal e a cartilagem xifoide',
              },
              { term: 'Costela', description: 'Apresenta cabeça, colo e tubérculo costal' },
              { term: 'Costelas asternais', description: '3 pares, correspondem às costelas falsas' },
              {
                term: 'Costela flutuante',
                description: '1 par, dentro do total de 13 pares de costelas',
              },
            ],
          },
          {
            format: 'verdadeiro-falso',
            id: 'vf-caudais-tamanho',
            statement:
              'As vértebras coccígeas vão diminuindo pouco a pouco de tamanho até ficarem reduzidas a um cilindro ósseo.',
            answer: true,
          },
        ],
      },
    ],
  },
}
