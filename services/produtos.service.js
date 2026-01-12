const ProdutosModel = require('../models/produto');

class ProdutosService {

  async findAll() {
    return await ProdutosModel.find();
  }

  async findById(id) {
    const produto = await ProdutosModel.findById(id);

    if (!produto) {
      return null;
    }

    return produto;
  }

  async create(produto) {
    return await ProdutosModel.create(produto);
  }

  async edit(id, produto) {
    const updated = await ProdutosModel.findByIdAndUpdate(
      id,
      produto,
      { new: true }
    );

    return updated;
  }

  async delete(id) {
    const deleted = await ProdutosModel.findByIdAndDelete(id);
    return deleted;
  }
}

module.exports = ProdutosService;
