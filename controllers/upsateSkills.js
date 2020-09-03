const db = require('../models/db');

const upsateSkills = (ctx) => {
  const fields = ctx.body;

  Object.entries(fields).map(field => {
    if (field[1] !== '') {
      db.findSkill(field[0])
        .assign({number: field[1]})
        .write();
    }
  });
  ctx.flash('msgskill', 'Обновлено успешно');
  ctx.res.render('pages/admin', {msgskill: ctx.flash('msgskill')});
};

module.exports = upsateSkills;