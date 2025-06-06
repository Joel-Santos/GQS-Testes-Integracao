const expres = require('express');
const router = expres.Router();
const produtoControler = require("../controllers/produtosController");

router.post('/', produtoControler.criarProduto);
router.get('/', produtoControler.listarProdutos);


module.exports = router;