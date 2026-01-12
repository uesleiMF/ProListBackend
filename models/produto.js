const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'Título é obrigatório'],
      trim: true,
    },

    descricao: {
      type: String,
      required: [true, 'Descrição é obrigatória'],
      trim: true,
    },

    prioridade: {
      type: String,
      enum: ['baixa', 'media', 'alta'],
      default: 'media',
    },

    status: {
      type: String,
      enum: ['pendente', 'em_andamento', 'concluido'],
      default: 'pendente',
    },

    capa: {
      type: String,
      default: '',
    },

    prazo: {
      type: Date,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
  }
);

const ProdutoModel = mongoose.model('Produto', produtoSchema);

module.exports = ProdutoModel;



