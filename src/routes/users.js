const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', controller.usuario)

module.exports = router;
