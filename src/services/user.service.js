const User = require('../models/user');
const { HttpsException } = require('../utils/errors')
const { statusCode: { CONFLICT, NOT_FOUND, UNAUTHORIZED } } = require('../utils/helpers');
const { createToken } = require('../utils/Auth');

const signup = async ({ name, email, password }) => {
    const emailUser = await User.findOne({email: email});
    if (emailUser) {
        throw new HttpsException(CONFLICT, 'The email you entered is already in use.');
    } else {
        const newUser = new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        const token = createToken({ name, email });
        return { message: 'You are registered', token: token };
    }
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    
    if (!user) {
      throw new HttpsException(NOT_FOUND, 'Nome de usuário ou senha inválidos');
    } else {
      const passwordMatch = await user.matchPassword(password);
      if (!passwordMatch) {
        throw new HttpsException(UNAUTHORIZED, 'Nome de usuário ou senha inválidos');
      }

      const { name } = user;
      const token = createToken({ name, email });
      return { message: 'Login bem-sucedido', token: token };
    }
  };
  

module.exports = {
    signup,
    login,
};