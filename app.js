// Importar bibliotecas
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

// Criar o app
const app = express();

// Configurar o app
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Conectar ao banco MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado com sucesso'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

// Importar as rotas de autenticação
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao site de jogos Super Nintendo!');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
