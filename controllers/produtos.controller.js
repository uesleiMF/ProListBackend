const ProdutosService = require('./../services/produtos.service');
const produtosService = new ProdutosService();

class ProdutosController {

  getProdutos = async (req, res) => {
    try {
      const produtos = await produtosService.findAll();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  };

  getProdutoById = async (req, res) => {
    try {
      const produto = await produtosService.findById(req.params.id);

      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      res.json(produto);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar produto" });
    }
  };

  createProdut = async (req, res) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Dados obrigatórios" });
      }

      const produto = await produtosService.create(req.body);

      res.status(201).json({
        message: "Produto cadastrado com sucesso",
        produto
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  editProdut = async (req, res) => {
    try {
      await produtosService.edit(req.params.id, req.body);
      res.json({ message: "Produto editado com sucesso" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  deleteProdut = async (req, res) => {
    try {
      await produtosService.delete(req.params.id);
      res.json({ message: "Produto excluído com sucesso" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = ProdutosController;
