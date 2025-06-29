import request from 'supertest';
import app from '../src/index.js';       
import jwt from 'jsonwebtoken';

describe('Rutas de autenticación', () => {
  let token;

  beforeAll(() => {
    
    token = jwt.sign({ id: 'fakeUserId', role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  });

  test('GET /api/protected sin token → 401', async () => {
    const res = await request(app).get('/api/protected');
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('msg', 'No token provided');
  });

  test('GET /api/protected con token inválido → 403', async () => {
    const res = await request(app)
      .get('/api/protected')
      .set('Authorization', 'Bearer tokendelamuerte');
    expect(res.statusCode).toBe(403);
    expect(res.body).toHaveProperty('msg', 'Token inválido');
  });

  test('GET /api/protected con token válido → 200', async () => {
    const res = await request(app)
      .get('/api/protected')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('msg');
    expect(res.body.msg).toMatch(/¡Hola/);
  });
});
