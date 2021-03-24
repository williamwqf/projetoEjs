var express = require('express');
var router = express.Router();

const cadprod = require('../static-database/cad_produtos.json')

/* GET home page. */
router.get('/', function(req, res, next ) {
  console.log(cadprod);
  res.render('detalhes', { cadprod });
});

module.exports = router;