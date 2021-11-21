const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  descricao: {type: String, required: true},
  prioridade: {type: String, required: true},
  status: {type: String, required: true},
  capa: {type: String },
  prazo: {type: String },
  dataCriacao: { type: Date, default: Date.now }
})

const ProdutoModel = mongoose.model('produtos', produtoSchema);

module.exports = ProdutoModel;



