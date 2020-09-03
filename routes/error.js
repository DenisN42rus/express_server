const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err);
});

router.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('pages/Error', {message: err.message, error: err});
});

module.exports = router;