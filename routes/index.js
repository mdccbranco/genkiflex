const express = require('express');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/form', (req, res, next) => {
 //TODO: adicionar a informação no banco de dados
//* Ir pra uma view que agradece? Gerar um alerta agradecendo?
//* Enviar uma mensagem para o email cadastrado

});


module.exports = router;