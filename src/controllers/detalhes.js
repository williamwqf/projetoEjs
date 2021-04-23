const fs = require('fs');
const { cadprod } = require('../models/produtos');

const exibirProduto = (req, res) => {
    console.log('ID:', req.params.id);
    res.render('detalhes', { cadprod, index: req.params.id - 1 });
}

module.exports = {
    exibirProduto
}