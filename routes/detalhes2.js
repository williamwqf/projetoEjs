var express = require('express');
var router = express.Router();

const cadprod = require('../static-database/cad_produtos.json')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('detalhes2', { cadprod });
});

module.exports = router;
