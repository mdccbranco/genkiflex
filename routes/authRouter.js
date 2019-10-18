const express = require('express');
const authRoutes = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const Admin = require('../models/admin');
// const nodemailer = require('nodemailer');

authRoutes.get('/signup', (req, res, next) => {
  res.render('signup');
});

authRoutes.post('/signup', (req, res, next) => {
  const {
    username,
    password,
    role,
    email
  } = req.body;

  if (username === '' || password === '') {
    res.render('signup', {
      message: 'Indicate username and password'
    });
    return;
  }

  Admin.findOne({
      username
    })
    .then(user => {
      if (user !== null) {
        res.render("signup", {
          message: "The username already exists"
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new Admin({
        username,
        email,
        role,
        password: hashPass
      });

      newUser.save((err) => {
        if (err) {
          res.render("signup", {
            message: "Something went wrong"
          });
        } else {
          res.redirect("login");
        }
      });
    })
    .catch(error => {
      next(error)
    })
});

authRoutes.get("/login", (req, res, next) => {
  res.render("login");
});

authRoutes.post('/login',
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true,
    passReqToCallback: true
  })
);
module.exports = authRoutes;