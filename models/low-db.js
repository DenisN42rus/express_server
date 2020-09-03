const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./models/db.json');

const db = low(adapter);

const getUser = () => db.getState().user;
const saveUser = ({login, password}) => db.set('user', {login, password}).write();
const getWorks = () => db.getState().works;
const saveWork = ({src, name, price}) => 
  db.get('works').push({src, name, price}).write();
const getSkills = () => db.getState().skills;
const findSkill = (skill) => db.get('skills').find({name: skill});

module.exports = {
  getUser,
  saveUser,
  getWorks,
  saveWork,
  getSkills,
  findSkill
};