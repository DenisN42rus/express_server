const express = require('express');
const router = express.Router();
const sendMail = require('../controllers').sendMailCtrl;
const db = require('../models/db');
const works = db.getWorks() || [];
const skills = db.getSkills() || [];

router.get('/', (req, res) => {
  res.render('pages/index', {
    products: works,
    skills: skills
  });
});

router.post('/', sendMail);

module.exports = router;