const {Produtos} = require('../models')

const listarProdutos = function (req, res) {
    const produtos = Produtos.findAll()
    res.render('produtos', { cadprod });
}

module.exports = {
    listarProdutos
}