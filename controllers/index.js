const { cadprod } = require('../models/Produtos');

const index = (req, res, next) => {
    res.render('index', { cadprod });
};

module.exports = {
    index
};

  