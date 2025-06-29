import express from 'express';
import passport from 'passport';
import { handleGoogleCallback } from '../controllers/auth.controller.js';

const router = express.Router();
router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] })
);
router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  handleGoogleCallback
);
export default router;
