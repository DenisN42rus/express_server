const nodemailer = require('nodemailer');
const config = require('../config.json');

const db = require('../models/db');
const works = db.getWorks() || [];
const skills = db.getSkills() || [];

const sendMail = (ctx) => {
  if (!ctx.body.name || !ctx.body.email || !ctx.body.message) {
    ctx.flash('msgemail', 'Все поля нужно заполнить!');
    ctx.res.render('pages/index', {
      msgemail: ctx.flash('msgemail'),
      products: works,
      skills: skills
    });
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from : `"${ctx.body.name}" <${ctx.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: ctx.body.message.trim().slice(0, 500) + `\n Отправлено с: <${ctx.body.email}>`
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      ctx.flash('msgemail', `При отправки письма произошла ошибка!: ${err}`);
      return ctx.res.render('pages/index', {
        msgemail: ctx.flash('msgemail'), 
        products: works,
        skills: skills
      });
    }

    ctx.flash('msgemail', 'Письмо успешно отправлено!');
    ctx.res.render('pages/index', {
      msgemail: ctx.flash('msgemail'),
      products: works,
      skills: skills
    });
  });
};

module.exports = sendMail;