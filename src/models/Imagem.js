const mongoose = require('mongoose');

const imagemSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  src: { type: String, required: true },
});

const Imagem = mongoose.model('Imagem', imagemSchema);

module.exports = Imagem;
