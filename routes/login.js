const express = require('express');
const router = express.Router();
const login = require('../controllers').loginCtrl;

router.get('/', (req, res) => {
  res.render('pages/login');
});

router.post('/', login);

module.exports = router;