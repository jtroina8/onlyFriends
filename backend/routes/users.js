var express = require("express");
var router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const passport = require("passport");
const initializePassport = require("../passport-config");

// CONFIGURES PASSPORT AND FINDS USER BASED ON USERNAME
initializePassport(
  passport, 
  userName => {
    return newUser.find(user => user.userName === userName);
});


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
    // });
    // res.redirect(307, "/login")
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

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

module.exports = router;
