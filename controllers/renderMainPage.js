const db = require('../models/db');

const renderMainPageCtrl = (req, res) => {
  const works = db.getWorks() || [];
  const skills = db.getSkills() || [];
  
  res.render('pages/index', {
    products: works,
    skills: skills
  });
};

module.exports = renderMainPageCtrl;