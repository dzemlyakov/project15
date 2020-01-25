const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const userIndex = users.find((item) => item._id === req.params.id);
  if (userIndex) {
    res.send(userIndex);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRouter;
