import request from 'supertest';
import { createApp } from '../src/app.js';

describe('GET /version', () => {
  it('returns version from config', async () => {
    const app = createApp({ version: '9.9.9' });
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version: '9.9.9' });
  });
});
