const express = require("express");

const app = express();

app.use(express.json());

// aqui entram rotas, middlewares, etc

module.exports = app;
