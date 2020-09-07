const db = require('../models/db');
const psw = require('../utils/password');

const login = (req, res) => {
  const {email, password} = req.body;
  const user = db.getUser();

  if (email === user.login && psw.validPassword(password)) {
    req.session.isAdmin = true;
    res.redirect('/admin');
  } else {
    req.flash('msglogin', 'Неверный логин или пароль');
    res.render('pages/login', {msglogin: req.flash('msglogin').toString()});
  }
};

module.exports = login;