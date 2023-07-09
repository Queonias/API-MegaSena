const { signup } = require('../services/user.service');
const passport = require('../services/passport');


const signupService = async (req, res) => {
        try {
            const newUser = await signup(req.body);
            res.status(201).send(newUser);
        } catch (err) {
            res.status(Number(err.stack)).json({ error: err.message })
        }
};

const loginService = async  (req, res, next) => {
    passport.authenticate("local", (err, user, _info) => {
      if (err) {
        // Erro de autenticação
        return next(err);
      }
      if (!user) {
        // Autenticação falhou, mensagem de erro personalizada
        return res.status(401).json({ error: "Invalid username or password" });
      }
      // Autenticação bem-sucedida
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        // Redirecionar ou retornar uma resposta de sucesso
        return res.json({ message: "Login successful" });
      });
    })(req, res, next);
  };

  const logoutService = (req, res) => {
    req.logout((err) => {
        if (err) {
          return res.status(500).json({ error: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logged out' });
      });
  };

  const me = (req, res) => {
    if (!req.user)
      return res.status(403).json({ error: "login to get the info" });
  
    return res.status(200).json({ user: req.user });
  };
  

module.exports = {
    signupService,
    loginService,
    logoutService,
    me,
}

