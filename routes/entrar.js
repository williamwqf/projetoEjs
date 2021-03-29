var express = require('express');
var router = express.Router();
const controller = require('../controllers/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entrar', { title: 'Express' });
});

module.exports = router;