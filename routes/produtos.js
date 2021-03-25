const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos')

/* GET home page. */
router.get('/', controller.listarProdutos);

module.exports = router;