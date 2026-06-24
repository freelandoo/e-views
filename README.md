# E-Views

Monorepo da plataforma **E-Views**.

```
e-views/
├── backend/     API Express 5 + PostgreSQL puro (pg). Deploy: Railway.
├── frontend/    Next.js 16 (App Router). Deploy: Vercel.
└── live-infra/  docker-compose para LiveKit em dev local.
```

## Desenvolvimento local

### Backend
```bash
cd backend
cp .env.example .env   # preencher DATABASE_URL, JWT_SECRET, etc.
npm install
npm run dev            # roda migrations no boot (prestart) e sobe na :3001
```

### Frontend
```bash
cd frontend
cp .env.example .env.local   # apontar BACKEND_API_URL para o backend
npm install
npm run dev                  # :3000
```

## Deploy

- **Backend → Railway**: serviço com root directory `backend/` (Dockerfile). Plugin
  Postgres provê `DATABASE_URL`. Migrations rodam automaticamente no boot.
- **Frontend → Vercel**: projeto com root directory `frontend/` (Next.js). Variável
  `BACKEND_API_URL` aponta para o host público do backend no Railway.

As migrations ficam em `backend/src/databases/migrations/`, são idempotentes e
rodam via `prestart` (`run-migrations.js`) sempre que o servidor sobe.
