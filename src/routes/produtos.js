const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos')



router.get('/', controller.listarProdutos);

router.get('/:id', controller.buscaProdutos);
router.post('/', controller.inserirProdutos);
router.post('/form', controller.inserirProdutosForms);
router.put('/:id', controller.atualizarProduto);
router.delete('/:id', controller.deletarProduto);

module.exports = router;