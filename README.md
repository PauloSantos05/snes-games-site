# 🎮 SNES Games Site

Este é um projeto web inspirado na era de ouro do Super Nintendo (SNES), com um sistema de login e registro de usuários. A interface tem visual retrô e responsivo, trazendo elementos gráficos que lembram jogos clássicos como Donkey Kong.

## 🚀 Funcionalidades

- Registro de usuário
- Login com autenticação de sessão
- Interface estilizada em pixel-art
- Responsivo para desktop e mobile
- Backend em Node.js com MongoDB
- Template engine: EJS

## 📁 Estrutura de Pastas

```
snes-games-site/
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs (opcional)
├── public/
│   └── style.css
├── app.js
├── .env
├── .gitignore
├── package.json
```

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **EJS**
- **dotenv**
- **express-session**
- **bcrypt**

## 📦 Instalação Local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/snes-games-site.git
cd snes-games-site
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com o seguinte conteúdo:

```env
MONGO_URI=mongodb://localhost:27017/snes-db
SESSION_SECRET=snes_secret_key
```

4. Inicie o MongoDB (se ainda não estiver rodando):

```bash
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
```

5. Inicie o servidor:

```bash
node app.js
```

6. Acesse no navegador:

```
http://localhost:3000
```

## ✅ To Do

- Painel de jogos disponíveis
- Sistema de favoritos
- Áudio de fundo SNES 😄
- Autenticação com redes sociais

---

Feito com 💜 e nostalgia.
