const express = require('express');
const router = express.Router();

const login = require('./login');
const mainPage = require('./main-page');
const admin = require('./admin');
const error = require('./error');

router.use('/login', login);
router.use('/admin', admin);
router.use('/', mainPage);
router.use('/', error);

module.exports = router;