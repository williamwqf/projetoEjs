var express = require('express');
var router = express.Router();
const controller = require('../controllers/detalhes')

/* GET home page. */
router.get('/:id', controller.exibirProduto);

module.exports = router;