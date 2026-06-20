# PFLO Portfolio

A handcrafted portfolio site for a game developer — rebuilt from scratch with a proper full-stack architecture.

## Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | Next.js 14 (App Router)       |
| Styling    | Tailwind CSS v3               |
| Backend    | Express.js + TypeScript       |
| Database   | PostgreSQL + Prisma ORM       |
| Validation | Zod                           |
| Email      | Nodemailer (SMTP)             |

## Project Structure

```
pflo-portfolio/
├── frontend/     # Next.js App — pages, components, API client
└── backend/      # Express API — routes, controllers, Prisma, seed
```

## API Endpoints

| Method | Path                      | Description              |
|--------|---------------------------|--------------------------|
| GET    | /api/health               | Health check             |
| GET    | /api/projects             | All projects             |
| GET    | /api/projects/featured    | Featured projects (max 3)|
| GET    | /api/projects/:slug       | Single project           |
| GET    | /api/blog                 | All published posts      |
| GET    | /api/blog/:slug           | Single blog post         |
| GET    | /api/resume/jobs          | Work experience          |
| GET    | /api/resume/education     | Education history        |
| POST   | /api/contact              | Submit contact form      |

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL running locally (or a connection string)

### 1. Clone and install

```bash
git clone <your-repo-url> pflo-portfolio
cd pflo-portfolio

# Install backend deps
cd backend && npm install

# Install frontend deps
cd ../frontend && npm install
```

### 2. Configure environment

```bash
# Backend
cd backend
cp .env.example .env
# Edit .env — set DATABASE_URL with your PostgreSQL credentials

# Frontend
cd ../frontend
cp .env.example .env.local
# NEXT_PUBLIC_API_URL defaults to http://localhost:4000
```

### 3. Set up database

```bash
cd backend

# Point Prisma at your schema
npx prisma migrate dev --schema=src/prisma/schema.prisma --name init

# Generate Prisma client
npx prisma generate --schema=src/prisma/schema.prisma

# Seed with sample data
npm run db:seed
```

### 4. Run both servers

```bash
# Terminal 1 — Backend (port 4000)
cd backend && npm run dev

# Terminal 2 — Frontend (port 3000)
cd frontend && npm run dev
```

Open http://localhost:3000

## Deployment

- **Frontend** → Vercel (connect repo, set `NEXT_PUBLIC_API_URL` to your backend URL)
- **Backend** → Railway or Render (set all `.env` variables in dashboard)
- **Database** → Railway PostgreSQL or Supabase
