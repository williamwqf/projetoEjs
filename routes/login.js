const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/login');
const router = express.Router();

const cadastroValidacoes = [
    body('email')
    .notEmpty()
    .withMessage('E-mail não pode ser vazio')
    .isEmail()
    .withMessage('E-mail necessita ser válido'),
    body('password')
    .isLength({ min: 5 })
    .withMessage('Senha deve conter no mínimo 5 caracteres')
]


// GET /login/ index (view)
router.get('/', controller.index);

// POST /login/entrar (recebe formulário)
router.post('/entrar', controller.entrar);

// GET /login/cadastro (view)
router.get('/cadastro', controller.cadastro);

// POST /login/cadastro (recebe formulário)
router.post('/cadastro', cadastroValidacoes, controller.novoCadastro);

module.exports = router;