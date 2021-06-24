if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const models = require('./models');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { User } = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
// const initializePassport = require("../passport-config");

// // CONFIGURES PASSPORT AND FINDS USER BASED ON USERNAME
// initializePassport(
//   passport, 
//   userName => {
//     return newUser.find(user => user.userName === userName);
// });
// app.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

const store = new SequelizeStore({db: models.sequelize});
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: store,
}));
store.sync();

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
