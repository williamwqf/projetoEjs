const fs = require('fs');
const bcrypt = require('bcrypt');


// funções para validar Cadastro de NOVO usuário  //

const validarSenhaDeCadastro = (password, confirmPassword) => {
  const senhasDiferentes = password !== confirmPassword;
  
  if (senhasDiferentes) {
    throw Error('As senhas são diferentes. Informe senhas iguais.');
  }
};

const validarEmailDoUsuario = (usuarios, email) => {
  const usuarioJaEstaCadastrado = usuarios
    .find((usuario) => usuario.email === email);
  
  if (usuarioJaEstaCadastrado) {
    throw Error('Esse usuário já está cadastrado. Faça o login.');
  };
};

const listarUsuarios = () => {
  const usuarios = fs.readFileSync('static-database/usuarios.json', { encoding: 'utf-8' });
  const listaDeUsuarios = usuarios ? JSON.parse(usuarios) : [];
  return listaDeUsuarios;
};

const cadastrarUsuario = ({ email, password, confirmPassword }) => {
  validarSenhaDeCadastro(password, confirmPassword);

  const senhaEncriptada = bcrypt.hashSync(password, 10);
  const novoUsuario = { email: email, password: senhaEncriptada };

  const usuarios = listarUsuarios();

  validarEmailDoUsuario(usuarios, email);

  usuarios.push(novoUsuario)

  fs.writeFileSync('static-database/usuarios.json', JSON.stringify(usuarios));
  return novoUsuario;
};


// funções para validar Login de usuário já cadastrado //;

const validarEntrada = ({ email, password }) => {
  const usuarios = listarUsuariosSenhas();

  validarEmailEntrada(usuarios, email);
  validarSenhaEntrada(usuarios, email, password);

  return true;
};

const validarEmailEntrada = (usuarios, email) => {
  const usuariosCadastrados = usuarios
    .find((usuarios) => usuarios.email === email);
  
  if (usuariosCadastrados) {
    
  }
  else {
    throw Error('Usuário não localizado. Faça seu Cadastro para poder acessar!');
  };
};


const validarSenhaEntrada = (usuarios, email, password) => {
  const senhaCadastrada = usuarios
    .find((usuario) => usuario.email === email 
                       && bcrypt.compareSync(password, usuario.password));

  if (senhaCadastrada) {
    return validarSenhaEntrada;
  }
  else {
    throw Error('Senha incorreta. Tente novamente!');
  };
};


const listarUsuariosSenhas = () => {
  const usuarios = fs.readFileSync('static-database/usuarios.json');
  const listaDeUsuarios = usuarios ? JSON.parse(usuarios) : [];
  console.log(listaDeUsuarios);
  return listaDeUsuarios;
};


module.exports = {
  cadastrarUsuario,
  validarEntrada,
};