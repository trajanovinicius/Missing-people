const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  async list(req, res) {
    try {
      const data = await Person.find();

      return res.json({
        PersonList: data,
      });
    } catch (error) {
      res.status(500).json({ message: 'Falha ao listar as pessoas' });
    }
  },

  async create(req, res) {
    try {
      const { nome, descricao, idade, corPele, sexo } = req.body;
      const personCreate = await Person.create({
        nome,
        descricao,
        idade,
        corPele,
        sexo,
      });

      res.status(200).json({
        message: 'Pessoa cadastrada com sucesso!',
        personCreate,
      });
    } catch (error) {
      res.status(500).json({ message: 'Falha ao cadastrar essa pessoa!' });
    }
  },
};
