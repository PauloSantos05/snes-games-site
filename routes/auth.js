const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Página de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Criar novo usuário
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ username, password: hash });
  res.send('Usuário registrado com sucesso!');
});

// Página de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Processar login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.send('Usuário não encontrado');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.send('Senha incorreta');
  }

  // Salva dados do usuário na sessão
  req.session.userId = user._id;
  req.session.username = user.username;

  res.redirect('/dashboard');
});

// Página de dashboard (protegida)
router.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  res.render('dashboard', { username: req.session.username });
});

// Logout (encerrar sessão)
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
