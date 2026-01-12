const ProdutosService = require('../services/produtos.service');
const produtosService = new ProdutosService();

/* 🔹 Listar todos */
exports.getAll = async (req, res) => {
  try {
    const produtos = await produtosService.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 🔹 Buscar por ID */
exports.getById = async (req, res) => {
  try {
    const produto = await produtosService.findById(req.params.id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(400).json({ error: 'ID inválido' });
  }
};
