const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const index = require('./routes');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(
  session({
    secret: 'loftschool',
    key: 'sessionkey',
    cookie:{
      path: '/',
      httpOnly: true,
      maxAge: 10 * 60 * 1000
    },
    saveUninitialized: false,
    resave: true
  })
);
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(3000, () => {
  console.log('Server rinning on port 3000');
});