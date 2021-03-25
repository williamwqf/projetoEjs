const restrito = (req, res, next) => {
    res.render('restrito', { title: 'Express' });
  };

  module.exports = {
  restrito
  }