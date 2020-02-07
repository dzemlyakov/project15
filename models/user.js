const mongoose = require('mongoose');
const validator = require('validator');
const { INVALID_LINK } = require('../constants/constants');

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
});
userSchema.path('avatar').validate(validator.isURL, INVALID_LINK);

module.exports = mongoose.model('user', userSchema);