const jwt = require('jsonwebtoken');

const { SECRET_JWT } = process.env;

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET_JWT, config);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, SECRET_JWT);
  return payload;
};

module.exports = { createToken, verifyToken };
