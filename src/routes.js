const express = require('express');
const routes = express.Router();

const PersonController = require('../src/controller/PersonController');

routes.post('/persons', PersonController.create);

routes.get('/persons-list', PersonController.list);

//routes.patch('/persons-update/:id', PersonController.update);

//routes.delete('/persons-delete/:id', PersonController.delete);

module.exports = routes;
