class ValueNotFound extends Error {
    constructor(message) {
      super(message);
      this.message = message;
      this.name = 'ValueNotFound';
      this.stack = '404';
    }
  }
      
module.exports = ValueNotFound;