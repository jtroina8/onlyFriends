var express = require("express");
var router = express.Router();
const db = require("../models");

const bcrypt = require("bcrypt");
const passport = require("passport");
const session = require('express-session');
const initializePassport = require("../passport-config");

// CONFIGURES PASSPORT AND FINDS USER BASED ON USERNAME
initializePassport(
  passport, 
  userName => {
    newUser.find(user => user.userName === userName);
  },
  id => {
    user.find(user => user.id === id);
  } 
);

// // MIDDLEWARE
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// LOGS USER IN
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
}));

// GRABS A USER
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll();
  res.json(users);
});

// CREATES A USER
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, userName, phoneNumber } =
    req.body;
  try {
    const saltRounds = 10;
    const PASSWORD_BCRYPT = await bcrypt.hash(password, saltRounds);
 
    const newUser = await db.User.create({
      firstName,
      lastName,
      email,
      password: PASSWORD_BCRYPT,
      userName,
      phoneNumber,
    });
    // res.json({
    //   id: newUser.id,
    
  } catch {
    // res.redirect("/register");
    console.log("didn't redirect to login")
  }
  
});

// DELETES A USER
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
    where: {
      id,
    },
  });
  res.json(deletedUser);
});


module.exports = router;
