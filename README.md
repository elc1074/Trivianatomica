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

O arquivo `server/src/db/schema.sql` cria as tabelas sem apagar dados existentes. Para carregar ou atualizar o catálogo no Supabase, configure o `.env` do server e rode:

```
cd server
npm run seed
```

O seed atualiza unidades, lições e exercícios existentes, e remove registros antigos que não estão mais nos arquivos de conteúdo.

Ver [IA.md](IA.md) para as regras de código e commit do projeto, e a estrutura do backend.
