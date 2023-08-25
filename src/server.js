const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

const port = 3000;

// usando template engine
server.set("view engine", "ejs");

// Mudar a localização da pasta views
server.set("views", path.join(__dirname, "views"));

// habilitar arquivos estaticos
server.use(express.static("public"));

// usar o req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

// server
server.listen(port, () => console.log(`Rodando em http://127.0.0.1:${port}`));
