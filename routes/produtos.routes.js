const express = require("express");
const ProdutosController = require("../controllers/produtos.controller");

const ProdutosControllerFunc = require('../controllers/produtos.func.controller');
const produtosController = new ProdutosController();

const router = express.Router();

router.get("/", produtosController.getProdutos);

router.get('/listar', ProdutosControllerFunc.getAll);

router.get("/:id", produtosController.getProdutoById);
router.post("/add", produtosController.createProdut);

router.put("/:id", produtosController.editProdut);

router.delete("/:id", produtosController.deleteProdut);

module.exports = router;
