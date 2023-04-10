const express = require('express');
const routes = express.Router();
const upload = require('./config/multer');
const { celebrate, Joi } = require('celebrate');

const PersonController = require('../src/controller/PersonController');

routes.post(
  '/persons',
  celebrate({
    body: Joi.object().keys({
      nome: Joi.string().required(),
      descricao: Joi.string().required(),
      idade: Joi.number().precision(2).required(),
      corPele: Joi.string().required(),
      sexo: Joi.string().required(),
    }),
  }),
  PersonController.create,
);

routes.post('/imagem', upload.single('file'), PersonController.upload);

routes.get('/persons-list', PersonController.list);

routes.patch('/persons-update/:id', PersonController.update);

routes.delete('/persons-delete/:id', PersonController.delete);

module.exports = routes;
