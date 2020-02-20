const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Невозможно создать пользователя -- ${err}` }));
};

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Невозможно найти пользователей' }));
};

module.exports.getSingleUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => (user === null ? res.status(404).send({ message: 'Такой пользователь не найден' }) : res.send({ data: user })))
    .catch(() => res.status(500).send({ message: 'Нет пользователя с таким id' }));
};
