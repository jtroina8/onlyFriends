if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');
const { User } = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const passport = require("passport");
const session = require('express-session');

const app = express();

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// const initializePassport = require("../passport-config");

// // CONFIGURES PASSPORT AND FINDS USER BASED ON USERNAME
// initializePassport(
//   passport, 
//   userName => {
//     return newUser.find(user => user.userName === userName);
// });

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


module.exports = app;
