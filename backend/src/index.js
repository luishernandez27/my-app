// src/index.js
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import './config/passport.js';
import authRoutes from './routes/auth.routes.js';
import verifyToken from './middleware/verifyToken.js';

const app = express();

// Middlewares
app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/auth', authRoutes);
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ msg: `¡Hola ${req.user.id}! Acceso permitido.` });
});


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      const port = process.env.PORT || 4000;
      app.listen(port, () =>
        console.log(`Servidor escuchando en puerto ${port}`)
      );
    }
  })
  .catch(console.error);


export default app;
