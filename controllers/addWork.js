const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const db = require('../models/db');
const validation = require('../utils/validate');

const addWork = (ctx) => {
  let form = new formidable.IncomingForm();
  let upload = path.join('./public', 'upload');

  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }

  form.uploadDir = path.join(process.cwd(), upload);

  form.parse(ctx, (err, fields, files) => {
    if (err) {
      return ctx.next(err);
    }

    const valid = validation(fields, files);

    if (valid.err) {
      fs.unlinkSync(files.photo.path);
      console.error(`${valid.status}`);
      return ctx.res.redirect('/');
    }

    const fileName = path.join(upload, files.photo.name);

    fs.rename(files.photo.path, fileName, err => {
      if (err) {
        console.error(err.message);
        return;
      }

      let dir = fileName.substr(fileName.indexOf('\\'));

      db.saveWork({src: dir, name: fields.name, price: fields.price});

      ctx.flash('msgfile', 'Работа добавлена успешно');
      ctx.res.render('pages/admin', {msgfile: ctx.flash('msgfile')});
    });
  });
};

module.exports = addWork;