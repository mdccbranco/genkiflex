const express = require('express');
const admRouter = express.Router();
const passport = require('passport');
const User = require('../models/user');
// const uploadCloud = require('../middleware/cloudinary');
// const ensureLogin = require("connect-ensure-login");

function checkRoles(role) {
  return function (req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    }
    res.redirect('/login');
  };
}

// admRouter.get('/admin', ensureLogin.ensureLoggedIn('/'), (req, res) => {
//   if (req.user.role !== 'adm') {
//     res.render('/admin', {user: req.user, isAdm: true});
//   } 
// });

admRouter.get('/admin', checkRoles('adm'), (req, res, next) => {
  res.render('admin')
});


admRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = admRouter;