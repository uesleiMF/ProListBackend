const ProdutosService = require('./../services/produtos.service');
const produtosService = new ProdutosService;
class ProdutosController {
   getProdutos = async (req, res) => {
     const produtos = await produtosService.findAll();
    res.send(produtos);
  }

    getProdutoById = async (req, res) => {
     const produto = await produtosService.findById(req.params.id);
    res.send(produto);
  }

   createProdut = async (req, res) => {
    const produto = req.body;
    if(!req.body){
      return;
    }
    await produtosService.create(produto)
    .then(() => {
      res.send({message: `Produto ${produto.titulo} Cadastrada com sucesso`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor: ${err}`})
    })
  }

  editProdut = async (req, res) => {
    const idParam = req.params.id;
     const produtoEdit = req.body;
    await produtosService.edit(idParam, produtoEdit)
    .then(() => {
      res.send({message: `Produto Editado com sucesso`})
    })
    .catch( err => { 
      res.status(500).send({message: `Erro: ${err}`})
    })
  }

  deleteProdut = async (req, res) => {
    const idParam = req.params.id;
    await produtosService.delete(idParam)
    .then(() => {
      res.send({message: 'Excluido com sucesso'})
    })
    .catch(err => {
      res.status(500).send({message: `Error: ${err}`});
    })
  }
}

module.exports = ProdutosController;

