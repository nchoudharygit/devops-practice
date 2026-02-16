import express from 'express';
import pinoHttp from 'pino-http';
import pg from 'pg';

const { Pool } = pg;

function getPool() {
  const {
    PGHOST = 'localhost',
    PGPORT = '5432',
    PGDATABASE = 'lab',
    PGUSER = 'lab',
    PGPASSWORD = 'lab',
  } = process.env;

  return new Pool({
    host: PGHOST,
    port: Number(PGPORT),
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    max: 5,
  });
}

export function createApp({ version = '0.0.0' } = {}) {
  const app = express();
  app.use(express.json());
  app.use(pinoHttp());

  const pool = getPool();

  app.get('/health', async (_req, res) => {
    // Lightweight DB check (optional but useful)
    try {
      await pool.query('SELECT 1');
      res.json({ ok: true, db: 'ok' });
    } catch (_e) {
      res.status(500).json({ ok: false, db: 'down' });
    }
  });

  app.get('/version', (_req, res) => {
    res.json({ version });
  });

  app.post('/users', async (req, res) => {
    const { name } = req.body || {};
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'name must be a non-empty string (min 2 chars)' });
    }

    const result = await pool.query(
      'INSERT INTO users(name) VALUES ($1) RETURNING id, name, created_at',
      [name.trim()]
    );

    return res.status(201).json(result.rows[0]);
  });

  app.get('/users', async (_req, res) => {
    const result = await pool.query('SELECT id, name, created_at FROM users ORDER BY id ASC');
    res.json({ items: result.rows });
  });

  return app;
}
