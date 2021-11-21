const ProdutosModel = require('../models/produto');

class produtosService {
   findAll = async () => await ProdutosModel.find();

    findById = async (id) => {
    return await ProdutosModel.findById(id)
  };

   create = async (produto) => {
    return await ProdutosModel.create(produto)  
  }

   edit = async (id, produto) => {
    return await ProdutosModel.updateOne({ _id: id}, produto)
  }

   delete = async (id) => {
    return await ProdutosModel.deleteOne({ _id: id})
  }

}

// exportar a minha classe para que o controller possa acessar os seus metodos.
module.exports = produtosService;