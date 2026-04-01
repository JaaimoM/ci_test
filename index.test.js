import request from 'supertest';
import app from './index.js';

test('GET / responde ok', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.ok).toBe(true);
});