const { signup, login } = require('../services/user.service');
const { statusCode: { CREATED, OK } } = require('../utils/helpers');


const signupService = async (req, res) => {
  try {
    const newUser = await signup(req.body);
    return res.status(CREATED).send(newUser);
  } catch (err) {
    return res.status(Number(err.stack)).json({ error: err.message })
  }
};

const loginService = async  (req, res) => {
  try {
    const user = await login(req.body);
    return res.status(OK).send(user);
  } catch (err) {
    return res.status(Number(err.stack)).json({ error: err.message })
  }
};

  const logoutService = (_req, res) => {
    res.status(OK).json({ message: 'You have been logged out'});
  };

  const me = (_req, res) => {
    return res.status(OK).send('You have been logged in');
  };
  

module.exports = {
    signupService,
    loginService,
    logoutService,
    me,
}

