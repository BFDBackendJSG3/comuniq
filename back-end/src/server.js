const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando na porta 3000");
});

app.get("/ping", (req, res) => {
  res.send("Hello World!");
});