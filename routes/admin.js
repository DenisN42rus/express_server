const express = require('express');
const router = express.Router();
const isAdmin = require('../utils/isAdmin');

const addWork = require('../controllers').addWorkCtrl;
const upsateSkills = require('../controllers').upsateSkillsCtrl;

router.get('/', isAdmin, (req, res) => {
  res.render('pages/admin');
});

router.post('/skills', upsateSkills);

router.post('/upload', addWork);

module.exports = router;