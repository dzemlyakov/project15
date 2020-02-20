const users = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
} = require('../controllers/users');

users.post('/', createUser);
users.get('/', getAllUsers);
users.get('/:id', getSingleUser);

module.exports = users;
