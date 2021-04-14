const express = require('express');
const router = express.Router();
const controller = require('../controllers/sobre')


/* GET home page. */
router.get('/', controller.sobre)

module.exports = router;