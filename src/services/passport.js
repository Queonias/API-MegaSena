const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const ValueNotFound = require('../errors/valueNotFound');

// Serialização do usuário
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Desserialização do usuário
passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findById(id, 'name email');

    if (!user) return done(new ValueNotFound('User not found'));

    return done(null, user);
  } catch (error) {
    console.error(error);
    done(error);
  }
});

// Estratégia de autenticação local
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false);

        const passwordMatch = await user.matchPassword(password);

        if (!passwordMatch) return done(null, false);

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;
