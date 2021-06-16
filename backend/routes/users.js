var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// CREATES A USER
router.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.create({
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
