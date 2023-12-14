const { signup, login } = require('../services/user.service');
const { statusCode: { CREATED, OK } } = require('../utils/helpers');


const signupService = async (req, res) => {
  try {
    const newUser = await signup(req.body);
    return res.status(CREATED).json(newUser);
  } catch (err) {
    return res.status(Number(err.stack)).json({ error: err.message })
  }
};

const loginService = async  (req, res) => {
  try {
    const user = await login(req.body);
    return res.status(OK).json(user);
  } catch (err) {
    return res.status(Number(err.stack)).json({ error: err.message })
  }
};

  const logoutService = (_req, res) => {
    res.status(OK).json({ message: 'Você foi desconectado'});
  };

  const me = (_req, res) => {
    return res.status(OK).json('Você está logado');
  };
  

module.exports = {
    signupService,
    loginService,
    logoutService,
    me,
}

