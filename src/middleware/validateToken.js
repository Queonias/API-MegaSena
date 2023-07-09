const { verifyToken } = require("../utils/Auth/index");
const HttpException = require("../utils/errors/HttpsException");
const { UNAUTHORIZED } = require("../utils/helpers/statusCode");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new HttpException(UNAUTHORIZED, "Token must be a valid token");
    }
    const payload = verifyToken(token);
    req.user = payload;
    return next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(UNAUTHORIZED).send('Invalid token');
    } else if (err.name === "TokenExpiredError") {
      return res.status(UNAUTHORIZED).send('Token expired');
    } else {
      res.status(Number(err.stack)).send(err.message);
    }
  }
};
