var express = require("express");
var router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const session = require('express-session');

// GRABS A USER
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll();
  res.json(users);
});

// CREATES A USER
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, userName, phoneNumber } =
    req.body;

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

// ALLOWS A USER TO LOGIN
router.post("/login", async (req, res) => {
  const user = await db.User.findOne({
    where: { userName: req.body.userName }
  });
  if (!user) {
    return res.status(404).json({
      error: "No user with that username found",
    });
  }
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) {
    return res.status(401).json({
      error: "Password incorrect",
    });
  }
  console.log(req.session)
  req.session.save();
  req.session.user = user
  res.json({
    id: user.id,
    userName: user.userName,
    updatedAt: user.updatedAt,
  });
});

// GETS CURRENT LOGGED IN USER
router.get("/current", (req, res) => {
  const {user} = req.session;

  if (user) {
    res.json({
      id: user.id,
      userName: user.userName,
      updatedAt: user.updatedAt,
    });
  }
  else {
    res.status(401).json({
      error: "Not logged in",
    });
  }
});

// LOGS OUT USER 
router.get("/logout", (req, res) => {
  req.session.user = null
  res.json({
    success: "Logged out successfully",
  });
});


module.exports = router;
