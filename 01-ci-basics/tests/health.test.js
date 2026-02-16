import request from 'supertest';
import { createApp } from '../src/app.js';

describe('GET /health', () => {
  it('returns ok=true', async () => {
    const app = createApp({ version: 'test' });
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
