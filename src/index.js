require('dotenv/config');
const express = require('express');
const requireDir = require('require-dir');
const database = require('../src/database/index');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();

database.connect();
requireDir('../src/models');

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/v1', require('../src/routes'));

app.use(errors());

app.listen(3333, () => {
  console.log(`Hello! Server started on port ${process.env.PORT}`);
});
