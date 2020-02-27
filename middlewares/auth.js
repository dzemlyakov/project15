const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Ошибка авторизации!' });
  }
  req.user = payload;

  next();
};
