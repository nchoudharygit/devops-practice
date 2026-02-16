# 02 - Docker Compose with Postgres

## Scenario
Your API needs persistence. You will add Postgres, wire the app to it, and run everything via Docker Compose.

## What you will build
- API container + Postgres container.
- A `users` table.
- Endpoints:
  - `POST /users` to create `{name}`
  - `GET /users` to list

## Tasks
1. Run Postgres via compose.
2. Implement the `users` endpoints.
3. Use environment variables for DB connection.
4. Add a DB migration strategy:
   - simplest option here is a SQL init script (already provided),
   - bonus: use a migration tool (Flyway, Prisma, etc.)

## Acceptance criteria
- `docker compose up` brings everything up.
- Data persists after restart.
- `GET /health` works and `GET /users` returns data.

## Quick start
```bash
docker compose up --build
curl -s http://localhost:3000/health
curl -s -X POST http://localhost:3000/users -H 'content-type: application/json' -d '{"name":"Ada"}'
curl -s http://localhost:3000/users
```
