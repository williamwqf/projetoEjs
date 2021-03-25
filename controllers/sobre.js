const sobre = (req, res, next)=> {
    res.render('sobre', { title: 'Express' });
  };

  module.exports = {
      sobre
  }