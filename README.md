# Trivia Anatômica

Ferramenta de estudo interativo de Anatomia Veterinária. Projeto acadêmico COIL, UFSM.

## Stack

- **Client:** Vite, React, React Router
- **Server:** Express
- **Banco:** Supabase (Postgres)

## Rodando localmente

```
cd client
npm install
cp .env.example .env
npm run dev
```

Em outro terminal, rode a API:

```
cd server
npm install
cp .env.example .env
npm run dev
```

O servidor sobe em `http://localhost:3001`, e a rota `GET /health` confirma que está no ar.

## Variáveis de ambiente

No client:

- `VITE_API_URL`, opcional. URL da API usada pelo Vite. Se ficar vazia, o client usa `http://localhost:3001`.

No server:

- `PORT`, opcional. Porta da API. O padrão é `3001`.
- `SUPABASE_URL`, obrigatória para rotas da trilha e seed. URL do projeto Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`, obrigatória para rotas da trilha e seed. Chave service role do Supabase.

## Banco e conteúdo

O arquivo `server/src/db/schema.sql` cria as tabelas de conteúdo, autenticação e progresso sem apagar dados existentes. Aplique esse SQL pelo SQL Editor antes do seed. Ele também cria o perfil e a sequência de estudos automaticamente quando uma conta é criada no Supabase Auth.

Depois configure o `.env` do server e rode:

```
cd server
npm run seed
```

O front-end usa a API do servidor para criar contas, entrar e salvar o progresso. Configure `VITE_API_URL` no client e mantenha `SUPABASE_SERVICE_ROLE_KEY` somente no `.env` do server.

O seed atualiza unidades, lições e exercícios existentes, e remove registros antigos que não estão mais nos arquivos de conteúdo.

## Login com Google

O botão do Google aceita conta pessoal e também o e-mail da UFSM, porque o `@acad.ufsm.br` roda no Google Workspace. A UFSM não oferece login institucional próprio para sistemas externos, por isso o acesso passa pelo Google.

O client manda o usuário para `GET /api/auth/oauth/google`. O server redireciona para o Supabase Auth, e o Supabase devolve o token em `/auth/callback`. Nenhuma variável de ambiente nova é necessária. A configuração fica toda no painel do Supabase:

1. Em Authentication, URL Configuration, adicione `http://localhost:5173/**` e a URL de produção do client, também com `/**`, em Redirect URLs.
2. Google: no Google Cloud Console, crie um OAuth Client do tipo Web application, com `https://<projeto>.supabase.co/auth/v1/callback` em Authorized redirect URIs. Cole o Client ID e o Client Secret em Authentication, Providers, Google.

Se a pessoa já tinha conta com o mesmo e-mail, o Supabase vincula as duas automaticamente. O trigger do `schema.sql` usa o nome que vem do Google, então rode o SQL de novo depois de atualizar o projeto.

## Modo visitante

Sem login dá para ver a trilha, fazer a primeira lição de cada unidade e estudar os flashcards. As rotas de conteúdo usam `optionalAuth`. Sem token, `GET /api/lessons/:lessonId` responde 403 com `login_required` para qualquer lição que não seja a primeira da unidade. Quando o visitante clica numa lição bloqueada ou termina uma lição, o `LoginPromptModal` pede login. O progresso do visitante fica só no localStorage e não vai para o banco. Painel, histórico e revisão de erros continuam exigindo conta.

Ver [IA.md](IA.md) para as regras de código e commit do projeto, e a estrutura do backend.
