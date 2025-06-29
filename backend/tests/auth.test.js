import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/index.js';     

describe('Rutas de autenticación', () => {
  beforeAll(async () => {
    
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    
  });

  it('GET /api/protected sin token → 401', async () => {
    await request(app)
      .get('/api/protected')
      .expect(401);
  });

  
});
