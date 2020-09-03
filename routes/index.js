const express = require('express');
const router = express.Router();

const login = require('./login');
const indexPage = require('./index-page');
const admin = require('./admin');
const error = require('./error');

router.use('/login', login);
router.use('/admin', admin);
router.use('/', indexPage);
router.use('/', error);

module.exports = router;