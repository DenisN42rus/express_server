const express = require('express');
const router = express.Router();
const {sendMailCtrl, renderMainPageCtrl} = require('../controllers');

router.get('/', renderMainPageCtrl);

router.post('/', sendMailCtrl);

module.exports = router;