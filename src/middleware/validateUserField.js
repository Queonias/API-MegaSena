const { userSchema } = require('./schemas');
const { messages } = require('joi-translation-pt-br');

module.exports = async (req, res, next) => {
  const user = req.body;

  try {
    await userSchema.validateAsync(user, { messages });
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
