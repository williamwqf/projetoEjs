const { cadprod } = require('../db/models/produtos');

const exibirProduto = (req, res, next) => {
    try {
        res.json({ cadprod, index: req.params.id - 1 });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    exibirProduto
}