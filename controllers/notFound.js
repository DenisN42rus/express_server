const notFoundCtrl = (req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err);
};

module.exports = notFoundCtrl;