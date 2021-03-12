var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {


  // DADOS DOS PRODUTOS   //

const cadprod = [
  {
      codigo: 1,
      descricao: "Mizuno Wave Sky 3 Masculino Corrida",
      marca: "Mizuno",
      modelo: "Wave Sky 3",
      preco: 240.00
  },
  {
      codigo: 2,
      descricao: "Asics Raiden 2 Masculino Caminhada",
      marca: "Asics",
      modelo: "Raiden 2",
      preco: 199.90
    },
    {
      codigo: 3,
      descricao: "Tênis Fila Interceptor Feminino Academia",
      marca: "Fila",
      modelo: "Interceptor",
      preco: 159.99
    },
    {
      codigo: 4,
      descricao: "Under Armour Sc 3zero Iv Masculino Basquete",
      marca: "Under Armour",
      modelo: "Sc 3zero Iv",
      preco: 650.00
    },
]

  res.render('produtos', {cadprod});
});

module.exports = router;