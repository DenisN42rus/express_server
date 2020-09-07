const express = require('express');
const router = express.Router();
const {loginCtrl, renderLoginCtrl} = require('../controllers');

router.get('/', renderLoginCtrl);

router.post('/', loginCtrl);

module.exports = router;