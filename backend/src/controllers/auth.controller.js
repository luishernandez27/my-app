import jwt from 'jsonwebtoken';

export const handleGoogleCallback = (req, res) => {
  const payload = { id: req.user._id, role: req.user.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.redirect(`${process.env.FRONT_URL}/auth/success?token=${token}`);
};
