var express = require('express');
var router = express.Router();
const controller = require('../controllers/produtos')

/* GET home page. */
router.get('/', controller.listarProdutos);

module.exports = router;