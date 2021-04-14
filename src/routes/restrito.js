const express = require('express');
const router = express.Router();
const controller = require('../controllers/restrito')

/* GET home page. */
router.get('/', controller.restrito)

module.exports = router;