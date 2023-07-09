const { userSchema } = require('./schemas');

module.exports = async (req, res, next) => {
  const user = req.body;

  try {
    await userSchema.validateAsync(user);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
