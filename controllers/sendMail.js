const nodemailer = require('nodemailer');
const config = require('../config.json');
const db = require('../models/db');

const sendMail = (req, res) => {
  const works = db.getWorks() || [];
  const skills = db.getSkills() || [];

  if (!req.body.name || !req.body.email || !req.body.message) {
    req.flash('msgemail', 'Все поля нужно заполнить!');
    res.render('pages/index', {
      msgemail: req.flash('msgemail').toString(),
      products: works,
      skills: skills
    });
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from : `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req.body.message.trim().slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      req.flash('msgemail', `При отправки письма произошла ошибка!: ${err}`);
      return res.render('pages/index', {
        msgemail: req.flash('msgemail').toString(), 
        products: works,
        skills: skills
      });
    }

    req.flash('msgemail', 'Письмо успешно отправлено!');
    res.render('pages/index', {
      msgemail: req.flash('msgemail').toString(),
      products: works,
      skills: skills
    });
  });
};

module.exports = sendMail;