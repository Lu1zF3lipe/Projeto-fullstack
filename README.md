# Sistemas Distribuídos - Projeto Full Stack

Este repositório contém um projeto full stack com **front-end** (Next.js/React) e **back-end** (NestJS), simulando um sistema de autenticação simples.

## Estrutura do Projeto

```
sistemas distribuidos/
├── front-end/   # Aplicação Next.js (React)
└── back-end/    # API NestJS
```

---

## Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado v18+)
- npm ou yarn

---

### 1. Rodando o Back-end (NestJS)

```bash
cd back-end
npm install
npm run start:dev
```

O back-end estará disponível em: [http://localhost:3001](http://localhost:3001)

---

### 2. Rodando o Front-end (Next.js)

Abra outro terminal e execute:

```bash
cd front-end
npm install
npm run dev
```

O front-end estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Funcionalidades

- Tela de login com campos de usuário e senha.
- Validação simples: login e senha "admin" autenticam com sucesso.
- Comunicação entre front-end e back-end via API REST.

---

## Observações

- O back-end já está configurado para aceitar requisições CORS do front-end.
- Para desenvolvimento, use dois terminais: um para cada projeto.
- Altere as URLs das APIs conforme necessário para produção.

---

## Licença

Este projeto é apenas para fins educacionais.
