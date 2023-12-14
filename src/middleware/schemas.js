const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

const userSignup =Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
});

module.exports = {
    userSchema,
    userSignup,
};
