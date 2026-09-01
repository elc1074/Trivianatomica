# Instruções anti-"cara de IA" e de processo

Cole este documento no início de qualquer sessão com IA (Claude Code, Cursor, etc.) trabalhando neste projeto. Objetivo: produzir código e UI que pareçam decisões humanas deliberadas, não a saída estatística média de um modelo.

## Regras de código (obrigatórias, sem exceção)

**Sem comentários no código.** Nenhum `// explica o que a linha faz`, nenhum docstring genérico, nenhum `// TODO` deixado no meio do código, isso vale pra SQL/schema também quando existir. Se o código precisa de comentário pra ser entendido, o problema é o nome da variável/função, não a ausência do comentário — resolva renomeando, não documentando.

**Nomenclatura sempre semântica e específica.** Nunca `data`, `item`, `temp`, `result`, `value`, `handleClick` genérico. Sempre o nome do domínio: `questionId`, `attemptStatus`, `onAnswerSelect`. Todo nome deve ter uso real, sem sobra, sem variável não utilizada.

**Sem abstração prematura.** Não criar factory, interface genérica, ou camada de abstração pra um caso de uso único. Se só existe uma implementação de algo, implementa direto. Overengineering pra um problema simples é tão "cara de IA" quanto código simples demais.

**Sem defensividade exagerada.** Nada de `try/catch` envolvendo cada chamada só por precaução. Trate erro onde ele pode genuinamente acontecer (chamada de rede, parsing de payload externo), não em toda função.

**Seguir a convenção que já existe no projeto, não inventar uma nova.** camelCase pra variáveis/funções, PascalCase pra componentes React, kebab-case pra arquivos de estilo/config. Não alternar estilo entre arquivos.

**Sem código morto ou de exemplo.** Nada de função de exemplo, dado mockado deixado "pra depois", ou `console.log` esquecido.

## Regras de interface (evitar os "tells" documentados de UI gerada por IA)

- **Modo escuro como padrão automático** é o tell mais comum de todos. Este projeto é light mode por decisão de design system, não por padrão de ferramenta.
- **Gradiente roxo/índigo em qualquer elemento** — o roxo vem do padrão `bg-indigo-500` do Tailwind, saturado nos dados de treino dos modelos. A paleta daqui é o verde-petróleo (`--color-primary`) e o dourado (`--color-accent`), sem gradiente roxo em lugar nenhum.
- **Faixa colorida de 3-4px na borda esquerda do card** é apontada como o tell mais confiável desse tipo de levantamento. Não usar.
- **Glassmorphism, blobs 3D flutuantes, ilustrações "plásticas" excessivamente suaves.** Nenhum deles tem lugar aqui.
- **Badge acima do título ("novo!", "beta") só por hábito.** Só usar se tiver função real.
- **Ícone enorme centralizado acima do heading** como elemento decorativo solto — evitar.
- **O mesmo fade-in em todo elemento da tela, hover que não muda nada visualmente.** Toda transição/hover deve ter função (destacar algo selecionável, indicar estado).
- **"Tasteful default" de fundo creme + fonte serifada + acento verde-sálvia** virou o clichê genérico seguinte, não uma alternativa real. Usar as decisões já tomadas no design system do projeto, não o clichê do momento.
- **Hero centralizado com um CTA + três cards genéricos com ícone** é a convergência estatística padrão quando a instrução é vaga. Qualquer tela nova deve ter uma composição pensada pro que ela faz, não esse layout por reflexo.

O antídoto não é uma instrução vaga tipo "seja criativo": é travar decisões reais (paleta, fonte, raio de borda, espaçamento) num documento de referência e aplicar essas decisões de forma consistente, em vez de deixar o modelo decidir por reflexo. As decisões já tomadas aqui estão em `client/src/index.css` (tokens de cor, tipografia) e nos `*.module.css` de cada componente.

## Fluxo de desenvolvimento

Desenvolver em passos pequenos, nunca em blocos gigantes. Implementar uma parte funcional por vez, testar que funciona de verdade (não presumir que está certo só porque compilou), e só então seguir pra próxima parte. Nunca gerar o projeto inteiro de uma vez.

Commitar conforme cada parte é concluída e testada, não tudo no final. Um commit por decisão/funcionalidade fechada.

## Padrão de commits: Conventional Commits, em inglês, sem emoji

Formato: `<type>: <description>` (scope entre parênteses é opcional, usar só quando ajudar a localizar a área).

- Sempre em inglês, minúsculo, modo imperativo no resumo ("add", não "added"), sem ponto final, resumo por volta de 50 caracteres.
- Nunca usar emoji.
- Tipos principais: `feat` (funcionalidade nova), `fix` (correção de bug), `docs` (só documentação), `refactor` (reestruturação sem mudar comportamento), `test`, `chore` (dependências, config, sem tocar lógica de produto).

```
feat: add question card with instant feedback
fix: prevent duplicate score on repeated submit
docs: document backend folder structure
chore: add react-router-dom
```

## Regras de texto e documentação (README, commits, textos de UI)

Nunca usar travessão em nenhum texto. Preferir vírgula, ponto, ou reformular em duas orações.

Nunca usar construções catalogadas como assinatura de texto gerado por IA: "não é apenas X, mas também Y"; aberturas que generalizam o momento atual antes de ir ao ponto ("no cenário atual", "na era da informação"); conclusão que só resume o que já foi dito, principalmente iniciada com "em resumo" ou "concluindo"; conectivos em excesso sem necessidade real ("além disso", "no entanto", "em conclusão").

Evitar palavras com alta probabilidade estatística de soarem geradas por IA: "crucial", "fundamental", "insight", "mergulhar", e adjetivos genéricos como "dinâmico", "inovador", "eficiente", "transformador". Preferir a palavra concreta ao adjetivo vago.

Variar comprimento de frase deliberadamente, misturar frase curta com frase mais longa. Não estruturar todo parágrafo como lista — usar lista só quando a informação é genuinamente enumerável (passos de instalação, por exemplo).

README e qualquer documentação de setup devem cobrir TODAS as variáveis de ambiente usadas pelo projeto, com descrição e indicação de obrigatória ou não — documentação parcial é pior do que parecer incompleta.

## Estrutura do backend

```
server/
  src/
    server.js       app Express, middlewares globais, registro de rotas
    lib/
      supabase.js    cliente Supabase (service role), único ponto de conexão com o banco
    routes/          um arquivo por recurso (ex: questions.js, attempts.js), montado em server.js
```

Convenções ao adicionar uma rota nova:

- Um router do Express por recurso dentro de `routes/`, nunca lógica de rota direto em `server.js`.
- Toda leitura/escrita no banco passa pelo cliente de `lib/supabase.js`, nunca cria outra instância.
- Variáveis de ambiente novas entram em `server/.env.example` no mesmo commit que passam a ser usadas, com descrição no README.
- Sem autenticação implementada ainda — se/quando for adicionada, decidir o padrão (sessão do Supabase Auth vs. JWT próprio) antes de espalhar checagem de usuário pelas rotas.

## Checklist rápido antes de considerar uma tela/componente pronto

- [ ] Nenhum comentário no código
- [ ] Todo nome de variável/função é específico ao domínio, não genérico
- [ ] Nenhuma cor usada fora dos tokens de `index.css`
- [ ] Nenhum gradiente roxo/índigo, nenhuma borda colorida à esquerda do card
- [ ] Light mode, não dark mode por padrão
- [ ] Nenhum ícone genérico centralizado sem função
- [ ] Toda animação/hover tem propósito funcional
- [ ] Estrutura de pastas e nomenclatura seguem o padrão já definido no projeto
- [ ] Nenhum travessão em qualquer texto ou documentação
- [ ] Nenhuma das construções/palavras da lista de vícios de texto apareceu no README, commits ou textos de UI
- [ ] Funcionalidade foi implementada em partes pequenas, testadas antes de seguir adiante
- [ ] Commits seguem `<type>: <description>` em inglês, minúsculo, sem emoji, sem ponto final
