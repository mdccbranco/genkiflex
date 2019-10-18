const express = require('express');
const Admin = require('../models/admin');
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
  const {
    name,
    email,
    phone,
    bairro,
    meat
  } = req.body;
  const newUser = new User({
    name,
    email,
    phone,
    bairro,
    meat
  })
  newUser.save()
    .then((info) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    })
});


module.exports = router;