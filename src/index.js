require('dotenv/config');
const express = require('express');
const requireDir = require('require-dir');

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log(`Hello! Server started on port ${process.env.PORT}`);
});
