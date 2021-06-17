var express = require("express");
var router = express.Router();
const db = require('../models');

// GRABS A USER
router.get('/', async function(req, res, next) {
  const users = await db.User.findAll();
  res.json(users);
});

// CREATES A USER
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await db.User.create({
    firstName, 
    lastName, 
    email, 
    password,
  });

  res.json({
    id: newUser.id
  });
});

// DELETES A USER
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

module.exports = router;
