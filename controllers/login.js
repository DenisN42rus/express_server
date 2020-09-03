const db = require('../models/db');

const login = (ctx) => {
  const {email, password} = ctx.body;
  const user = db.getUser();

  if (email === user.login && password === user.password) {
    ctx.session.isAdmin = true;
    ctx.res.redirect('/admin');
  } else {
  	ctx.flash('msglogin', 'Неверный логин или пароль');
    ctx.res.render('pages/login', {msglogin: ctx.flash('msglogin')});
  }
};

module.exports = login;