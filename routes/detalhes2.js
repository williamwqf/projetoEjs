const fs = require('fs');
var express = require('express');
var router = express.Router();

const cadprods = () => {
  const usuarios = fs.readFileSync('static-database/cad_produtos.json', { encoding: 'utf-8' });
  const listaDeUsuarios = usuarios ? JSON.parse(usuarios) : [];
  return listaDeUsuarios;
};

const cadprod = cadprods();

/* GET home page. */
router.get('/:id', function(req, res, next ) {
  console.log('ID:', req.params.id);
  res.render('detalhes2', {cadprod});
});

module.exports = router;