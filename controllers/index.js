const cadprod = require('../models/Produtos');

function index(req, res, next) {
    res.render('index', { cadprod });
};

module.exports = {
    index
};

  