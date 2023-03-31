const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  async delete(req, res) {
    const id = req.params.id;

    try {
      const personDelete = await Person.deleteOne({ _id: id });
      if (personDelete == 0) {
        res
          .status(422)
          .json({ message: 'Pessoa já deletada do nosso Sistema!' });
        return;
      }
      res.status(200).json({ message: 'Pessoa Deletada com Sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Falha ao deletar está pessoa!' });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const { nome, descricao, idade, corPele, sexo } = req.body;

    const personBody = {
      nome,
      descricao,
      idade,
      corPele,
      sexo,
    };

    try {
      const personUpdate = await Person.updateOne({ _id: id }, personBody);
      if (!personUpdate) {
        res.status(422).json({ message: 'Pessoa não encontrada no sistema!' });
      }
      res.status(200).json(personBody);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

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
