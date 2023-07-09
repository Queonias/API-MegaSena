class ValueInvalid extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ValueInvalid';
    this.stack = '422';
  }
}

module.exports = ValueInvalid;
