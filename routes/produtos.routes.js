const express = require("express");
const ProdutosController = require("../controllers/produtos.controller");
const ProdutosControllerFunc = require('../controllers/produtos.func.controller');

const produtosController = new ProdutosController();
const router = express.Router();

/* 🔹 Rotas fixas */
router.get("/listar", ProdutosControllerFunc.getAll);

/* 🔹 Rotas principais */
router.get("/", produtosController.getProdutos);
router.post("/add", produtosController.createProdut);

/* 🔹 Rotas com ID (sempre por último) */
router.get("/:id", produtosController.getProdutoById);
router.put("/:id", produtosController.editProdut);
router.delete("/:id", produtosController.deleteProdut);

module.exports = router;
