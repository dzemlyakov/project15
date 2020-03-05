const NotFoundError = require('./not-found-error');
const InternalServerError = require('./internal-server-error');
const UnauthorizedError = require('./unauthorized-error');
const ForbiddenError = require('./forbidden-error');

module.exports = {
  NotFoundError,
  InternalServerError,
  UnauthorizedError,
  ForbiddenError,
};
