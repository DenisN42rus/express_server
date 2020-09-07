const db = require('../models/db');

const updateSkills = (req, res) => {
  const fields = req.body;

  Object.entries(fields).map(field => {
    if (field[1] !== '') {
      db.findSkill(field[0])
        .assign({number: field[1]})
        .write();
    }
  });
  req.flash('msgskill', 'Обновлено успешно');
  res.render('pages/admin', {msgskill: req.flash('msgskill').toString()});
};

module.exports = updateSkills;