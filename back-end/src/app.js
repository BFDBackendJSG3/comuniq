const express = require('express');
const app = express();

app.use(express.json());

const importacaoRoutes = require('./routes/importacao.routes');
const noticiasRoutes = require('./routes/noticias.routes');
const userRoutes = require('./routes/user.routes');

app.use(importacaoRoutes);
app.use(noticiasRoutes);
app.use('/users', userRoutes);

module.exports = app;
