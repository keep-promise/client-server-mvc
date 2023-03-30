class HttpException extends Error {
  constructor(status, message, errors) {
    super();
    this.status = status;
    this.status = message;
    this.errors = errors;
  }
}

module.exports = HttpException;
