# Finance Tracker - Frontend

Interface em **React + TypeScript + Vite** para acompanhar transações financeiras e consumir a API do backend.

O app atual oferece:

- landing page visual na rota inicial `/`
- dashboard com saldo, renda, despesas e gráfico
- listagem, criação, edição e remoção de transações
- páginas de perfil e configurações
- layout responsivo com sidebar e topbar
- tema com `next-themes`

---

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Recharts
- Tailwind CSS
- shadcn/ui e Radix UI
- Framer Motion
- Embla Carousel
- React Scroll Parallax
- Lucide React

---

## Estrutura

```text
frontend/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── services/
│   └── types/
├── public/
├── index.html
├── package.json
└── README.md
```

---

## Páginas

- `/` - landing page com hero, carrossel, parallax e cards animados
- `/dashboard` - dashboard com visão geral e transações recentes
- `/transactions` - gestão manual de transações
- `/profile` - perfil do usuário
- `/settings` - preferências e ajustes da aplicação

## Landing Page

A landing foi pensada para seguir a mesma linguagem visual da dashboard, mas com uma composição mais editorial.

- fundo com gradientes escuros e grid discreto
- slider com autoplay usando imagens de banco
- banner com efeito parallax em camadas
- blocos de apoio com animações declarativas e hover suave
- textos placeholders em lorem ipsum para facilitar futuras substituições

---

## Integração com a API

O frontend usa a URL definida em `VITE_API_URL`.

Se a variável não for informada, o padrão é:

```text
http://localhost:8000
```

Os dados de transações são buscados e persistidos via endpoints do backend, então a API precisa estar em execução antes de abrir a interface.

---

## Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar a API, se necessário

```env
VITE_API_URL=http://localhost:8000
```

### 3. Iniciar o frontend

```bash
npm run dev
```

O app costuma ficar disponível em:

```text
http://localhost:5173
```

---

## Scripts

- `npm run dev` - executa o servidor de desenvolvimento
- `npm run build` - gera a build de produção
- `npm run lint` - executa o ESLint
- `npm run preview` - serve a build localmente

---

## Observações

- O layout usa um provedor de contexto para transações e outro para tema
- A aplicação está pronta para evoluir para upload de CSV no frontend no futuro
- O dashboard calcula saldo a partir das transações carregadas da API
- A página inicial usa componentes de animação externos e imagens remotas de banco para a composição visual
