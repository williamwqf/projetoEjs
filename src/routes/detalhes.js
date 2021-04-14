const express = require('express');
const router = express.Router();
const controller = require('../controllers/detalhes')

/* GET home page. */
router.get('/:id', controller.exibirProduto);

module.exports = router;