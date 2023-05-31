const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  idade: Number,
  corPele: String,
  sexo: String,
  rg: String
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
