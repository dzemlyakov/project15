const mongoose = require('mongoose');
const validator = require('validator');
const { INVALID_LINK, INVALID_MAIL } = require('../constants/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

userSchema.path('avatar').validate(validator.isURL, INVALID_LINK);
userSchema.path('email').validate(validator.isEmail, INVALID_MAIL);

module.exports = mongoose.model('user', userSchema);
