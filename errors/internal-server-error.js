class InternalServerError extends Error {
  constructor(messege) {
    super(messege);
    this.statusCode = 500;
  }
}

module.exports = InternalServerError;
