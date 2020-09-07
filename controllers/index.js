const loginCtrl = require('./login');
const sendMailCtrl = require('./sendMail');
const updateSkillsCtrl = require('./updateSkills');
const addWorkCtrl = require('./addWork');
const renderLoginCtrl = require('./renderLogin');
const renderMainPageCtrl = require('./renderMainPage');
const renderAdminCtrl = require('./renderAdmin');
const notFoundCtrl = require('./notFound');

module.exports = {
  loginCtrl,
  sendMailCtrl,
  updateSkillsCtrl,
  addWorkCtrl,
  renderLoginCtrl,
  renderMainPageCtrl,
  renderAdminCtrl,
  notFoundCtrl
};