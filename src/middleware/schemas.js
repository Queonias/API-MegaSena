const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().max(7).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

module.exports = {
    userSchema,
};
