const express = require('express');
const router = express.Router();
const isAdmin = require('../utils/isAdmin');
const {addWorkCtrl, updateSkillsCtrl, renderAdminCtrl} = require('../controllers');

router.get('/', isAdmin, renderAdminCtrl);

router.post('/skills', updateSkillsCtrl);

router.post('/upload', addWorkCtrl);

module.exports = router;