import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import './config/passport.js';
import authRoutes from './routes/auth.routes.js';
import verifyToken  from './middleware/verifyToken.js';

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


export default app;

// Conexión a MongoDB
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Servidor en puerto ${process.env.PORT}`);
      });
    })
    .catch(err => console.error('Error al conectar con MongoDB:', err));
}

