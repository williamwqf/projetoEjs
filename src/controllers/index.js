const { Produtos } = require('../models');

const index = (req, res, next) => {
    res.render('index', { Produtos, active: "active" });
};

module.exports = {
    index,
};