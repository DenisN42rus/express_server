const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const db = require('../models/db');
const validation = require('../utils/validate');

const addWork = (req, res, next) => {
  let form = new formidable.IncomingForm();
  let upload = path.join('./public', 'upload');

  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }

  form.uploadDir = path.join(process.cwd(), upload);

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }

    const valid = validation(fields, files);

    if (valid.err) {
      fs.unlinkSync(files.photo.path);
      req.flash('msgfile', `${valid.status}`);
      return res.render('pages/admin', {msgfile: req.flash('msgfile').toString()});
    }

    const fileName = path.join(upload, files.photo.name);

    fs.rename(files.photo.path, fileName, err => {
      if (err) {
        console.error(err.message);
        return;
      }

      let dir = fileName.substr(fileName.indexOf('\\'));

      db.saveWork({src: dir, name: fields.name, price: fields.price});

      req.flash('msgfile', 'Работа добавлена успешно');
      res.render('pages/admin', {msgfile: req.flash('msgfile').toString()});
    });
  });
};

module.exports = addWork;