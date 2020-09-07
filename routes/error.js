const express = require('express');
const router = express.Router();
const {notFoundCtrl} = require('../controllers');

router.use(notFoundCtrl);

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  req.flash('message', err.message);
  req.flash('error', err);
  res.render('pages/Error', {message: req.flash('message'), error: req.flash('error')});
});

module.exports = router;