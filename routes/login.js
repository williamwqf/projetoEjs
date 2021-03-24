const express = require('express');
const router = express.Router();
const controller = require('../controllers/login')

/* GET home page. */
router.get('/', controller.login);

/* POST home page. */
router.post('/', controller.postForm);

module.exports = router;