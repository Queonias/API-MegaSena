module.exports = class HttpException extends Error {
  constructor(stack, message) {
    super(message);
    this.message = message;
    this.stack = stack;
    this.name = 'HttpException';
    }
  };