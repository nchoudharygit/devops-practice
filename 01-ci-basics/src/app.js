import express from 'express';
import pinoHttp from 'pino-http';

export function createApp({ version = '0.0.0' } = {}) {
  const app = express();
  app.use(express.json());
  app.use(pinoHttp());

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/version', (_req, res) => {
    res.json({ version });
  });

  // Placeholder route for later labs (DB etc.)
  app.get('/', (_req, res) => {
    res.json({ message: 'DevOps Lab API' });
  });

  return app;
}
