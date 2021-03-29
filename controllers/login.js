const { validationResult } = require('express-validator');
const model = require('../models/login');

const index = (req, res) => {
  res.render('login/index');
};

const cadastro = (req, res) => {
  res.render('login/cadastro');
};

const novoCadastro = (req, res) => {

  const errors = validationResult(req); 

  if (!errors.isEmpty()) {
      return res.render('login/cadastro', errors);
  }

  const usuarioDoFormulario = { 
    email: req.body.email, 
    password: req.body.password,
    confirmPassword: req.body['confirm-password']
  };

  const usuarioCadastrado = model.cadastrarUsuario(usuarioDoFormulario);
    res.send(`Novo cadastro: ${JSON.stringify(usuarioCadastrado)}`);
};


const entrar = (req, res) => {
  console.log(req.body);
  const usuarioDoFormulario = { 
    email: req.body.email, 
    password: req.body.password
  };

  if (model.validarEntrada(usuarioDoFormulario)) 
    { 
      res.render('login/entrar');
    }
};


const bemVindo = (req, res) => {
  res.render('login/entrar');
};


module.exports = {
  cadastro,
  entrar,
  index,
  novoCadastro,
  bemVindo,
};
