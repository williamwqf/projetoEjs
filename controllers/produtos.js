const cadprod = require('../static-database/cad_produtos.json')

const listarProdutos = function (req, res) {
    res.render('produtos', { cadprod });
}

module.exports = {
    listarProdutos
}