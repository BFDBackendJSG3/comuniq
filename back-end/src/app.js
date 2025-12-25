const express = require('express');
const app = express();

app.use(express.json());

const importacaoRoutes = require('./routes/importacao.routes');

app.use(importacaoRoutes);

module.exports = app;