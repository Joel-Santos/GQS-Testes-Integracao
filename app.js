const express = require('express');
const app = express();
const produtoRoutes = require("./src/modules/routes/produtoRoutes");

app.use(express.json());
app.use('/produtos', produtoRoutes);


module.exports = app;
